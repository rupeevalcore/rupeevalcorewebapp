"use client";

import ProgramSelectorDialog from "@/components/lead/ProgramSelectorDialog";
import BrochureVerificationModal from "@/components/lead/BrochureVerificationModal";

export default function LeadCaptureRoot() {
  return (
    <>
      <ProgramSelectorDialog />
      <BrochureVerificationModal />
    </>
  );
}
