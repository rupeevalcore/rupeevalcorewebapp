import { NextResponse } from "next/server";

/**
 * POST /api/verify-submission
 *
 * Securely verifies whether a user has submitted the corresponding Google Form
 * by searching for their Email Address OR Mobile Number in Google Sheets.
 *
 * Matching rules:
 *   - Email: case-insensitive exact match after trimming whitespace.
 *   - Phone: digits-only comparison on the last 10 digits (handles +91, spaces, hyphens).
 *   - Either Email OR Phone matching a row in the Sheet is sufficient.
 *   - brochureKey is validated against known keys; used to route to the correct Sheet if configured.
 *   - Never exposes Sheet credentials to the client.
 */

const VALID_BROCHURE_KEYS = new Set([
  "ai-schools",
  "ai-colleges",
  "finance-schools",
  "finance-colleges",
  "finance-corporate",
]);

/** Normalise a phone string to digits only, then return the last 10 digits. */
function phoneDigits(value: string): string {
  return value.replace(/\D/g, "").slice(-10);
}

/** Returns true if the user's input matches a cell value using email or phone rules. */
function cellMatches(inputLower: string, inputPhone: string, cell: string): boolean {
  const cellStr = String(cell).trim();
  if (!cellStr) return false;
  const cellLower = cellStr.toLowerCase();

  // 1. Email match — only when the input contains "@"
  if (inputLower.includes("@")) {
    return cellLower === inputLower;
  }

  // 2. Phone match — only when we have at least 7 digits to avoid false positives on timestamps etc.
  if (inputPhone.length >= 7) {
    const cellPhone = phoneDigits(cellStr);
    if (cellPhone.length >= 7 && cellPhone === inputPhone) return true;
  }

  // 3. Fallback: exact string match (handles short codes, etc.)
  return cellLower === inputLower;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { contact, brochureKey } = body as {
      contact?: unknown;
      brochureKey?: unknown;
    };

    // --- Input validation ---
    if (typeof contact !== "string" || contact.trim().length < 3) {
      return NextResponse.json(
        { error: "Please provide an Email Address or Mobile Number." },
        { status: 400 }
      );
    }
    // Validate brochureKey type (don't trust client)
    const safeKey =
      typeof brochureKey === "string" && VALID_BROCHURE_KEYS.has(brochureKey)
        ? brochureKey
        : "unknown";

    const inputRaw = contact.trim();
    const inputLower = inputRaw.toLowerCase();
    const inputPhone = phoneDigits(inputRaw); // digits-only, last 10

    // -----------------------------------------------------------------
    // Strategy 1: Google Apps Script Webhook (recommended)
    // Configure: GOOGLE_APPS_SCRIPT_WEBHOOK in .env.local
    // Webhook must accept POST { contact, brochureKey } and return { found: boolean }
    // -----------------------------------------------------------------
    const webhookUrl = process.env.GOOGLE_APPS_SCRIPT_WEBHOOK;
    if (webhookUrl) {
      try {
        const res = await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ contact: inputRaw, brochureKey: safeKey }),
          signal: AbortSignal.timeout(8000), // 8 s timeout
        });

        if (res.ok) {
          const data = await res.json();
          return NextResponse.json({ found: Boolean(data.found) });
        }
        console.warn("[verify-submission] Webhook non-OK status:", res.status);
      } catch (e) {
        console.warn("[verify-submission] Webhook call failed:", e);
        // Fall through to Sheets API
      }
    }

    // -----------------------------------------------------------------
    // Strategy 2: Google Sheets API v4 (read-only)
    // Configure: GOOGLE_SHEETS_ID + GOOGLE_SHEETS_API_KEY in .env.local
    // -----------------------------------------------------------------
    const sheetsId = process.env.GOOGLE_SHEETS_ID;
    const sheetsApiKey = process.env.GOOGLE_SHEETS_API_KEY;

    if (sheetsId && sheetsApiKey) {
      try {
        const url = `https://sheets.googleapis.com/v4/spreadsheets/${encodeURIComponent(sheetsId)}/values/A:Z?key=${encodeURIComponent(sheetsApiKey)}`;
        const res = await fetch(url, {
          signal: AbortSignal.timeout(8000),
        });

        if (res.ok) {
          const data = await res.json();
          const rows: string[][] = data.values || [];

          // Skip row 0 (header row) — search data rows only
          const dataRows = rows.slice(1);
          const found = dataRows.some((row) =>
            row.some((cell) => cellMatches(inputLower, inputPhone, cell))
          );

          return NextResponse.json({ found });
        }
        console.warn("[verify-submission] Sheets API non-OK:", res.status);
      } catch (e) {
        console.warn("[verify-submission] Sheets API error:", e);
      }
    }

    // -----------------------------------------------------------------
    // Fallback: No credentials configured — return not_found
    // -----------------------------------------------------------------
    console.warn(
      "[verify-submission] No Google credentials configured. " +
        "Set GOOGLE_APPS_SCRIPT_WEBHOOK or GOOGLE_SHEETS_ID + GOOGLE_SHEETS_API_KEY in .env.local"
    );

    return NextResponse.json({ found: false });
  } catch (err: unknown) {
    console.error("[verify-submission] Unhandled error:", err);
    return NextResponse.json(
      { error: "Failed to verify submission. Please try again." },
      { status: 500 }
    );
  }
}
