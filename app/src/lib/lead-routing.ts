export const LEAD_FORMS = {
  schools: process.env.NEXT_PUBLIC_SCHOOLS_FORM_URL || "https://forms.gle/GKQUyGusYSZwLP3XA",
  colleges: process.env.NEXT_PUBLIC_COLLEGES_FORM_URL || "https://forms.gle/qVdiLYFCyVat9NZ79",
  corporate: process.env.NEXT_PUBLIC_CORPORATE_FORM_URL || "https://forms.gle/gTrhfkwr7p7H1Kza9",
  individual: process.env.NEXT_PUBLIC_INDIVIDUAL_FORM_URL || "https://forms.gle/eS5pRBLXrrwTF1np7",
} as const;

export type AnalyticsEvent =
  | "program_selector_opened"
  | "program_selected_school"
  | "program_selected_college"
  | "program_selected_corporate"
  | "program_selected_individual"
  | "program_selected_ai"
  | "school_proposal_requested"
  | "college_proposal_requested"
  | "corporate_proposal_requested"
  | "individual_session_requested";

