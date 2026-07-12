"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import { Bot, Building2, GraduationCap, University, UserRound, X } from "lucide-react";
import { useEffect, useState } from "react";
import type { AnalyticsEvent } from "@/lib/lead-routing";
import { trackEvent } from "@/lib/analytics";

type ProgramOption = {
  id: "school" | "college" | "corporate" | "individual" | "ai";
  title: string;
  description: string;
  href: string;
  event: AnalyticsEvent;
  icon: typeof GraduationCap;
};

const PROGRAM_OPTIONS: ProgramOption[] = [
  {
    id: "school",
    title: "Schools",
    description: "Financial literacy programmes for students from Grade 3 to Grade 12.",
    href: "/schools",
    event: "program_selected_school",
    icon: GraduationCap,
  },
  {
    id: "college",
    title: "Colleges",
    description: "Financial readiness programmes for college students.",
    href: "/colleges",
    event: "program_selected_college",
    icon: University,
  },
  {
    id: "corporate",
    title: "Corporate",
    description: "Employee financial wellness programmes for organisations.",
    href: "/corporate-financial-wellness",
    event: "program_selected_corporate",
    icon: Building2,
  },
  {
    id: "individual",
    title: "Individual Learning",
    description: "Personal financial education for individuals and families.",
    href: "/individual-learning",
    event: "program_selected_individual",
    icon: UserRound,
  },
  {
    id: "ai",
    title: "AI Education",
    description: "AI literacy and practical AI programmes.",
    href: "/ai",
    event: "program_selected_ai",
    icon: Bot,
  },
];

export default function ProgramSelectorDialog() {
  const [open, setOpen] = useState(false);

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
    trackEvent(option.event);
    window.location.href = option.href;
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div
                className="fixed inset-0 z-[100] bg-background/70 backdrop-blur-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
              />
            </Dialog.Overlay>

            <Dialog.Content asChild>
              <motion.div
                className="fixed left-1/2 top-1/2 z-[101] w-[calc(100vw-2rem)] max-w-4xl -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-3xl border border-border bg-card shadow-2xl focus:outline-none"
                initial={{ opacity: 0, y: 18, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 12, scale: 0.98 }}
                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="relative p-6 sm:p-8 md:p-10">
                  <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-accent/10 blur-3xl" />

                  <div className="relative mb-8 pr-12">
                    <Dialog.Title className="font-heading text-3xl font-black tracking-tight text-foreground md:text-4xl">
                      Who is this programme for?
                    </Dialog.Title>
                    <Dialog.Description className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                      Select the option that best describes your requirement and we&apos;ll guide you to the right programme.
                    </Dialog.Description>
                  </div>

                  <div className="relative grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                    {PROGRAM_OPTIONS.map((option) => {
                      const Icon = option.icon;

                      return (
                        <button
                          key={option.id}
                          type="button"
                          onClick={() => selectProgram(option)}
                          className="group min-h-[160px] rounded-2xl border border-border bg-background/70 p-5 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-background focus-visible:border-accent"
                          aria-label={`Choose ${option.title}`}
                        >
                          <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent transition-transform duration-200 group-hover:scale-105">
                            <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
                          </span>
                          <span className="block font-heading text-lg font-bold text-foreground">
                            {option.title}
                          </span>
                          <span className="mt-2 block text-sm leading-relaxed text-muted-foreground">
                            {option.description}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  <Dialog.Close className="absolute right-5 top-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/70 text-muted-foreground transition-colors hover:text-foreground focus-visible:text-foreground" aria-label="Close programme selector">
                    <X size={18} />
                  </Dialog.Close>
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
