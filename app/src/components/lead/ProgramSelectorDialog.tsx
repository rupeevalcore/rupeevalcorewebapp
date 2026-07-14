"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { Building2, GraduationCap, School, UserRound, X } from "lucide-react";
import { useEffect, useState } from "react";
import type { AnalyticsEvent } from "@/lib/lead-routing";
import { trackEvent } from "@/lib/analytics";
import { LEAD_FORMS } from "@/lib/lead-routing";

type ProgramOption = {
  id: "school" | "college" | "corporate" | "individual";
  title: string;
  description: string;
  href: string;
  event: AnalyticsEvent;
  icon: typeof School;
  emoji: string;
};

const PROGRAM_OPTIONS: ProgramOption[] = [
  {
    id: "school",
    title: "School",
    description: "Financial Literacy Programs for School Students",
    href: LEAD_FORMS.schools,
    event: "program_selector_school",
    icon: School,
    emoji: "\u{1F3EB}",
  },
  {
    id: "college",
    title: "College",
    description: "Financial Literacy Programs for College Students",
    href: LEAD_FORMS.colleges,
    event: "program_selector_college",
    icon: GraduationCap,
    emoji: "\u{1F393}",
  },
  {
    id: "corporate",
    title: "Corporate",
    description: "Financial Wellness Programs for Employees",
    href: LEAD_FORMS.corporate,
    event: "program_selector_corporate",
    icon: Building2,
    emoji: "\u{1F3E2}",
  },
  {
    id: "individual",
    title: "Individual",
    description: "Personal Financial Learning Programs",
    href: LEAD_FORMS.individual,
    event: "program_selector_individual",
    icon: UserRound,
    emoji: "\u{1F464}",
  },
];

export default function ProgramSelectorDialog() {
  const [open, setOpen] = useState(false);
  const [loadingId, setLoadingId] = useState<string | null>(null);

  const handleOpenChange = (newOpen: boolean) => {
    if (!newOpen) {
      trackEvent("program_selector_closed");
    }
    setOpen(newOpen);
  };

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const selectorTrigger = target?.closest<HTMLElement>("[data-program-selector]");
      const analyticsTarget = target?.closest<HTMLElement>("[data-analytics-event]");

      if (analyticsTarget) {
        const eventName = analyticsTarget.dataset.analyticsEvent as AnalyticsEvent | undefined;
        if (eventName) trackEvent(eventName);
      }

      if (!selectorTrigger) return;
      event.preventDefault();
      trackEvent("program_selector_opened");
      trackEvent("contact_modal_opened");
      setOpen(true);
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const selectProgram = (option: ProgramOption) => {
    if (loadingId) return;
    setLoadingId(option.id);
    trackEvent(option.event);
    window.open(option.href, "_blank", "noopener,noreferrer");

    setTimeout(() => {
      setLoadingId(null);
      setOpen(false);
    }, 500);
  };

  return (
    <Dialog.Root open={open} onOpenChange={handleOpenChange}>
      <Dialog.Portal>
        {/* Overlay — full screen dark blur */}
        <Dialog.Overlay
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9998,
            backgroundColor: "rgba(0,0,0,0.70)",
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
          }}
        />

        {/* Dialog Content — centered, always on top */}
        <Dialog.Content
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 9999,
            width: "90vw",
            maxWidth: "32rem",
            maxHeight: "calc(100dvh - 2rem)",
            overflowY: "auto",
            borderRadius: "1.5rem",
            padding: "2rem",
            boxShadow: "0 25px 60px rgba(0,0,0,0.35)",
            outline: "none",
          }}
          className="bg-white text-slate-950 dark:bg-neutral-950 dark:text-white border border-slate-200 dark:border-white/10"
        >
          <div style={{ position: "relative" }}>
            {/* Header */}
            <div style={{ marginBottom: "2rem", paddingRight: "3rem" }}>
              <Dialog.Title
                style={{
                  fontFamily: "var(--font-ibm-plex-sans, sans-serif)",
                  fontSize: "1.75rem",
                  fontWeight: 900,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.2,
                  margin: 0,
                }}
                className="text-slate-950 dark:text-white"
              >
                Which program are you looking for?
              </Dialog.Title>
              <Dialog.Description
                style={{
                  marginTop: "0.75rem",
                  fontSize: "1rem",
                  lineHeight: 1.6,
                }}
                className="text-slate-600 dark:text-neutral-300"
              >
                Select your audience and we&apos;ll open the correct proposal form.
              </Dialog.Description>
            </div>

            {/* Program Option Cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "1rem",
              }}
            >
              {PROGRAM_OPTIONS.map((option) => {
                const Icon = option.icon;
                const isLoading = loadingId === option.id;

                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => selectProgram(option)}
                    disabled={!!loadingId}
                    style={{
                      minHeight: "148px",
                      borderRadius: "1rem",
                      padding: "1.25rem",
                      textAlign: "left",
                      cursor: loadingId && !isLoading ? "not-allowed" : "pointer",
                      opacity: loadingId && !isLoading ? 0.5 : 1,
                      transition: "border-color 150ms, background-color 150ms",
                      display: "flex",
                      flexDirection: "column",
                    }}
                    className="border border-slate-200 bg-slate-50 text-slate-950 hover:border-[#C4922A] hover:bg-white dark:border-white/10 dark:bg-neutral-900 dark:text-white dark:hover:border-[#D4A44D] dark:hover:bg-neutral-800"
                    aria-label={`Choose ${option.title}`}
                  >
                    {/* Icon badge */}
                    <span
                      style={{
                        display: "inline-flex",
                        height: "3rem",
                        width: "3rem",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "0.75rem",
                        marginBottom: "1.25rem",
                      }}
                      className="bg-[#C4922A]/10 text-[#C4922A] dark:bg-[#D4A44D]/10 dark:text-[#D4A44D]"
                    >
                      {isLoading ? (
                        <span
                          style={{
                            height: "1.25rem",
                            width: "1.25rem",
                            borderRadius: "9999px",
                            border: "2px solid currentColor",
                            borderTopColor: "transparent",
                            display: "block",
                            animation: "spin 0.7s linear infinite",
                          }}
                        />
                      ) : (
                        <>
                          <span style={{ marginRight: "0.25rem", fontSize: "1.25rem" }} aria-hidden="true">
                            {option.emoji}
                          </span>
                          <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
                        </>
                      )}
                    </span>

                    {/* Title */}
                    <span
                      style={{
                        display: "block",
                        fontFamily: "var(--font-ibm-plex-sans, sans-serif)",
                        fontSize: "1.25rem",
                        fontWeight: 700,
                      }}
                      className="text-slate-950 dark:text-white"
                    >
                      {option.title}
                    </span>

                    {/* Description */}
                    <span
                      style={{
                        display: "block",
                        marginTop: "0.5rem",
                        fontSize: "0.875rem",
                        lineHeight: 1.5,
                      }}
                      className="text-slate-600 dark:text-neutral-300"
                    >
                      {option.description}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Close button */}
            <Dialog.Close
              style={{
                position: "absolute",
                right: 0,
                top: 0,
                display: "inline-flex",
                height: "2.5rem",
                width: "2.5rem",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "9999px",
                transition: "color 150ms",
                cursor: "pointer",
              }}
              className="border border-slate-200 bg-white text-slate-500 hover:text-slate-950 dark:border-white/10 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:text-white"
              aria-label="Close programme selector"
            >
              <X size={18} />
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
