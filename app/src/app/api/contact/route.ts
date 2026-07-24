import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, organization, programType, message, source, gatedPdfUrl } = body;

    if (!name || (!email && !phone)) {
      return NextResponse.json(
        { error: "Name and at least one contact method (email or phone) are required." },
        { status: 400 }
      );
    }

    const contactEmail = process.env.CONTACT_EMAIL || "contactrupeevalcore@gmail.com";
    const backupEmail = process.env.BACKUP_CONTACT_EMAIL || process.env.BCC_EMAIL;
    const resendApiKey = process.env.RESEND_API_KEY;

    const emailSubject = `[RupeeValcore Lead] New Lead: ${name} (${programType || "General Enquiry"})`;
    const emailHtml = `
      <div style="font-family: sans-serif; padding: 20px; color: #333; line-height: 1.6;">
        <h2 style="color: #071A35; border-bottom: 2px solid #C4922A; padding-bottom: 8px;">New Website Lead Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email || "Not provided"}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Program / Interest:</strong> ${programType || "General"}</p>
        <p><strong>Organization / Institution:</strong> ${organization || "N/A"}</p>
        <p><strong>Lead Source Context:</strong> ${source || "Website Modal"}</p>
        ${gatedPdfUrl ? `<p><strong>Requested PDF:</strong> ${gatedPdfUrl}</p>` : ""}
        <p><strong>Message / Notes:</strong></p>
        <blockquote style="background: #f4f4f4; padding: 12px; border-left: 4px solid #C4922A; margin: 0;">
          ${message ? message.replace(/\n/g, "<br/>") : "No additional message."}
        </blockquote>
        <hr style="margin-top: 24px; border: 0; border-top: 1px solid #eee;" />
        <p style="font-size: 12px; color: #777;">Sent automatically from rupeevalcore.in lead capture system.</p>
      </div>
    `;

    // Console fallback & logging for backup/debugging
    console.log("=== NEW LEAD SUBMISSION ===");
    console.log({ timestamp: new Date().toISOString(), name, email, phone, programType, organization, message, source });

    if (resendApiKey) {
      const bccList = backupEmail ? [backupEmail] : undefined;

      const resendRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: "RupeeValcore Leads <onboarding@resend.dev>",
          to: [contactEmail],
          ...(bccList ? { bcc: bccList } : {}),
          subject: emailSubject,
          html: emailHtml,
          reply_to: email || undefined,
        }),
      });

      if (!resendRes.ok) {
        const errorText = await resendRes.text();
        console.error("Resend API error:", errorText);
      }
    } else {
      console.warn("RESEND_API_KEY is not configured. Lead logged to server console only.");
    }

    return NextResponse.json({
      success: true,
      message: "Lead captured successfully",
      downloadUrl: gatedPdfUrl || undefined,
    });
  } catch (err: unknown) {
    console.error("Error processing contact form:", err);
    return NextResponse.json(
      { error: "Failed to process lead submission" },
      { status: 500 }
    );
  }
}
