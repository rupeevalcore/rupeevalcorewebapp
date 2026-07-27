/**
 * ============================================================
 * BROCHURE CONFIGURATION — SINGLE SOURCE OF TRUTH
 * ============================================================
 *
 * To update a brochure:
 *   1. Replace the PDF file in /public/downloads/
 *   2. If the filename changed, update the `pdfPath` field below.
 *
 * To update a Google Form URL:
 *   1. Update the `formUrl` field below.
 *   2. Or set the corresponding environment variable in .env.local
 *
 * No page components need to be modified for either update.
 * ============================================================
 */

export type BrochureKey =
  | "ai-schools"
  | "ai-colleges"
  | "finance-schools"
  | "finance-colleges"
  | "finance-corporate";

export type BrochureConfig = {
  key: BrochureKey;
  title: string;
  downloadLabel: string;
  pdfPath: string;
  formUrl: string;
  category: string;
  pageRoute: string;
};

export const BROCHURES: Record<BrochureKey, BrochureConfig> = {
  "ai-schools": {
    key: "ai-schools",
    title: "AI for Schools — Programme Brochure",
    downloadLabel: "Download AI Schools Brochure",
    pdfPath: "/downloads/ai-schools.pdf",
    formUrl:
      process.env.NEXT_PUBLIC_AI_SCHOOLS_FORM_URL ||
      "https://forms.gle/GKQUyGusYSZwLP3XA",
    category: "AI · Schools",
    pageRoute: "/ai/schools",
  },
  "ai-colleges": {
    key: "ai-colleges",
    title: "AI for Colleges — Programme Brochure",
    downloadLabel: "Download AI Colleges Brochure",
    pdfPath: "/downloads/ai-colleges.pdf",
    formUrl:
      process.env.NEXT_PUBLIC_AI_COLLEGES_FORM_URL ||
      "https://forms.gle/qVdiLYFCyVat9NZ79",
    category: "AI · Colleges",
    pageRoute: "/ai/colleges",
  },
  "finance-schools": {
    key: "finance-schools",
    title: "Financial Literacy for Schools — Programme Proposal",
    downloadLabel: "Download School Programme Proposal",
    pdfPath: "/downloads/finance-schools.pdf",
    formUrl:
      process.env.NEXT_PUBLIC_SCHOOLS_FORM_URL ||
      "https://forms.gle/GKQUyGusYSZwLP3XA",
    category: "Finance · Schools",
    pageRoute: "/schools",
  },
  "finance-colleges": {
    key: "finance-colleges",
    title: "Financial Literacy for Colleges — Programme Proposal",
    downloadLabel: "Download College Programme Proposal",
    pdfPath: "/downloads/finance-colleges.pdf",
    formUrl:
      process.env.NEXT_PUBLIC_COLLEGES_FORM_URL ||
      "https://forms.gle/qVdiLYFCyVat9NZ79",
    category: "Finance · Colleges",
    pageRoute: "/colleges",
  },
  "finance-corporate": {
    key: "finance-corporate",
    title: "Corporate Financial Wellness — Programme Proposal",
    downloadLabel: "Download Corporate Programme Proposal",
    pdfPath: "/downloads/finance-corporate.pdf",
    formUrl:
      process.env.NEXT_PUBLIC_CORPORATE_FORM_URL ||
      "https://forms.gle/gTrhfkwr7p7H1Kza9",
    category: "Finance · Corporate",
    pageRoute: "/corporate-financial-wellness",
  },
} as const;

export function getBrochure(key: BrochureKey): BrochureConfig {
  return BROCHURES[key];
}
