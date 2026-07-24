export const LEAD_FORMS = {
  schools: process.env.NEXT_PUBLIC_SCHOOLS_FORM_URL || "https://forms.gle/GKQUyGusYSZwLP3XA",
  colleges: process.env.NEXT_PUBLIC_COLLEGES_FORM_URL || "https://forms.gle/qVdiLYFCyVat9NZ79",
  corporate: process.env.NEXT_PUBLIC_CORPORATE_FORM_URL || "https://forms.gle/gTrhfkwr7p7H1Kza9",
  individual: process.env.NEXT_PUBLIC_INDIVIDUAL_FORM_URL || "https://forms.gle/eS5pRBLXrrwTF1np7",
} as const;

export type AnalyticsEvent =
  | "program_selector_opened"
  | "program_selector_closed"
  | "program_selector_school"
  | "program_selector_college"
  | "program_selector_corporate"
  | "program_selector_individual"
  | "lead_form_started"
  | "lead_form_submitted"
  | "whatsapp_click"
  | "phone_tap"
  | "pdf_download_gated"
  | "pdf_view_school"
  | "pdf_download_school"
  | "pdf_view_college"
  | "pdf_download_college"
  | "pdf_view_corporate"
  | "pdf_download_corporate"
  | "pdf_view_individual"
  | "pdf_download_individual"
  | "school_proposal_requested"
  | "college_proposal_requested"
  | "corporate_proposal_requested"
  | "individual_session_requested";


