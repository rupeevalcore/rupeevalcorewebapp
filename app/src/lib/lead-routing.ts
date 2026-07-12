export const LEAD_FORMS = {
  schools: "https://forms.gle/GKQUyGusYSZwLP3XA",
  colleges: "https://forms.gle/qVdiLYFCyVat9NZ79",
  corporate: "https://forms.gle/gTrhfkwr7p7H1Kza9",
  individual: "https://forms.gle/eS5pRBLXrrwTF1np7",
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

