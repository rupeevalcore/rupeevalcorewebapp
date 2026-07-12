"use client";

import { useEffect, useState } from "react";

type ProgramSelectorModule = typeof import("@/components/lead/ProgramSelectorDialog");

export default function LeadCaptureRoot() {
  const [ProgramSelectorDialog, setProgramSelectorDialog] = useState<ProgramSelectorModule["default"] | null>(null);

  useEffect(() => {
    let mounted = true;

    import("@/components/lead/ProgramSelectorDialog").then((module) => {
      if (mounted) setProgramSelectorDialog(() => module.default);
    });

    return () => {
      mounted = false;
    };
  }, []);

  return ProgramSelectorDialog ? <ProgramSelectorDialog /> : null;
}

