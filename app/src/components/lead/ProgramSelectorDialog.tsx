"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { Building2, CheckCircle2, Download, GraduationCap, Loader2, School, UserRound, X, ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import type { AnalyticsEvent } from "@/lib/lead-routing";
import { LEAD_FORMS } from "@/lib/lead-routing";
import { trackEvent } from "@/lib/analytics";

type ProgramOption = {
  id: "school" | "college" | "corporate" | "individual";
  title: string;
  description: string;
  event: AnalyticsEvent;
  icon: typeof School;
  emoji: string;
  formUrl: string;
};

const PROGRAM_OPTIONS: ProgramOption[] = [
  {
    id: "school",
    title: "School",
    description: "Financial Literacy Programs for School Students",
    event: "program_selector_school",
    icon: School,
    emoji: "🏫",
    formUrl: LEAD_FORMS.schools,
  },
  {
    id: "college",
    title: "College",
    description: "Financial Literacy Programs for College Students",
    event: "program_selector_college",
    icon: GraduationCap,
    emoji: "🎓",
    formUrl: LEAD_FORMS.colleges,
  },
  {
    id: "corporate",
    title: "Corporate",
    description: "Financial Wellness Programs for Employees",
    event: "program_selector_corporate",
    icon: Building2,
    emoji: "🏢",
    formUrl: LEAD_FORMS.corporate,
  },
  {
    id: "individual",
    title: "Individual",
    description: "Personal Financial Learning Programs",
    event: "program_selector_individual",
    icon: UserRound,
    emoji: "👤",
    formUrl: LEAD_FORMS.individual,
  },
];

export default function ProgramSelectorDialog() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<"select" | "form" | "success">("select");
  const [selectedProgram, setSelectedProgram] = useState<ProgramOption | null>(null);
  
  // Gated PDF state if triggered from a download card
  const [gatedPdfUrl, setGatedPdfUrl] = useState<string | null>(null);
  const [gatedTitle, setGatedTitle] = useState<string | null>(null);

  // Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [organization, setOrganization] = useState("");
  const [message, setMessage] = useState("");
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [hasStartedForm, setHasStartedForm] = useState(false);

  const resetState = () => {
    setStep("select");
    setSelectedProgram(null);
    setGatedPdfUrl(null);
    setGatedTitle(null);
    setName("");
    setEmail("");
    setPhone("");
    setOrganization("");
    setMessage("");
    setIsSubmitting(false);
    setErrorMsg(null);
    setHasStartedForm(false);
  };

  const handleOpenChange = (newOpen: boolean) => {
    if (!newOpen) {
      trackEvent("program_selector_closed");
      resetState();
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
      
      const pdfUrl = selectorTrigger.dataset.pdfUrl;
      const pdfTitle = selectorTrigger.dataset.pdfTitle;
      const audience = selectorTrigger.dataset.audience as "school" | "college" | "corporate" | "individual" | undefined;

      if (pdfUrl) {
        setGatedPdfUrl(pdfUrl);
        setGatedTitle(pdfTitle || "Proposal Document");
        trackEvent("pdf_download_gated");
      }

      if (audience) {
        const option = PROGRAM_OPTIONS.find((p) => p.id === audience);
        if (option) {
          setSelectedProgram(option);
          setStep("form");
        }
      } else if (pdfUrl) {
        setStep("form");
      } else {
        setStep("select");
      }

      trackEvent("program_selector_opened");
      trackEvent("contact_modal_opened");
      setOpen(true);
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const handleSelectProgram = (option: ProgramOption) => {
    trackEvent(option.event);
    // Close modal and redirect directly to the Google Form
    setOpen(false);
    resetState();
    window.open(option.formUrl, "_blank", "noopener,noreferrer");
  };

  const handleFieldChange = (setter: (val: string) => void, val: string) => {
    if (!hasStartedForm) {
      setHasStartedForm(true);
      trackEvent("lead_form_started");
    }
    setter(val);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!name.trim()) {
      setErrorMsg("Please enter your name.");
      return;
    }
    if (!email.trim() && !phone.trim()) {
      setErrorMsg("Please provide at least an email address or phone number.");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          organization: organization.trim(),
          message: message.trim(),
          programType: selectedProgram?.title || gatedTitle || "General",
          source: gatedPdfUrl ? "Gated PDF Download" : "Website Modal Form",
          gatedPdfUrl: gatedPdfUrl || undefined,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit lead");
      }

      trackEvent("lead_form_submitted", {
        program: selectedProgram?.title || "General",
        hasPdf: Boolean(gatedPdfUrl),
      });

      setStep("success");

      // Auto-trigger PDF download if applicable
      if (gatedPdfUrl) {
        window.open(gatedPdfUrl, "_blank");
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setErrorMsg(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog.Root open={open} onOpenChange={handleOpenChange}>
      <Dialog.Portal>
        {/* Overlay */}
        <Dialog.Overlay
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9998,
            backgroundColor: "rgba(0,0,0,0.75)",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
          }}
        />

        {/* Content */}
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
            boxShadow: "0 25px 60px rgba(0,0,0,0.4)",
            outline: "none",
          }}
          className="bg-white text-slate-950 dark:bg-neutral-950 dark:text-white border border-slate-200 dark:border-white/10"
        >
          <div style={{ position: "relative" }}>

            {/* Back button on Step 2 (if selected via step 1) */}
            {step === "form" && !gatedPdfUrl && (
              <button
                type="button"
                onClick={() => setStep("select")}
                className="inline-flex items-center text-xs font-semibold text-muted-foreground hover:text-foreground mb-4 transition-colors gap-1"
              >
                <ArrowLeft size={14} /> Back to program selection
              </button>
            )}

            {/* Close button */}
            <Dialog.Close
              style={{
                position: "absolute",
                right: 0,
                top: 0,
                display: "inline-flex",
                height: "2.25rem",
                width: "2.25rem",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "9999px",
                cursor: "pointer",
              }}
              className="border border-slate-200 bg-white text-slate-500 hover:text-slate-950 dark:border-white/10 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:text-white"
              aria-label="Close dialog"
            >
              <X size={18} />
            </Dialog.Close>

            {/* STEP 1: SELECT PROGRAM */}
            {step === "select" && (
              <>
                <div style={{ marginBottom: "1.5rem", paddingRight: "2.5rem" }}>
                  <Dialog.Title
                    style={{
                      fontFamily: "var(--font-ibm-plex-sans, sans-serif)",
                      fontSize: "1.5rem",
                      fontWeight: 800,
                      letterSpacing: "-0.02em",
                      lineHeight: 1.2,
                    }}
                    className="text-slate-950 dark:text-white"
                  >
                    Which program are you looking for?
                  </Dialog.Title>
                  <Dialog.Description
                    style={{ marginTop: "0.5rem", fontSize: "0.925rem", lineHeight: 1.5 }}
                    className="text-slate-600 dark:text-neutral-400"
                  >
                    Select your category to request a customized proposal.
                  </Dialog.Description>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {PROGRAM_OPTIONS.map((option) => {
                    const Icon = option.icon;
                    return (
                      <button
                        key={option.id}
                        type="button"
                        onClick={() => handleSelectProgram(option)}
                        className="p-4 rounded-xl text-left border border-slate-200 bg-slate-50 hover:border-[#C4922A] hover:bg-white dark:border-white/10 dark:bg-neutral-900 dark:hover:border-[#D4A44D] dark:hover:bg-neutral-800 transition-all flex flex-col justify-between"
                        style={{ minHeight: "135px" }}
                      >
                        <span className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-[#C4922A]/10 text-[#C4922A] dark:bg-[#D4A44D]/10 dark:text-[#D4A44D] mb-3">
                          <span className="mr-1 text-base">{option.emoji}</span>
                          <Icon size={18} />
                        </span>
                        <div>
                          <span className="block font-heading font-bold text-base text-slate-950 dark:text-white">
                            {option.title}
                          </span>
                          <span className="block text-xs text-slate-600 dark:text-neutral-400 mt-1 line-clamp-2">
                            {option.description}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </>
            )}

            {/* STEP 2: LEAD CONTACT FORM */}
            {step === "form" && (
              <>
                <div style={{ marginBottom: "1.25rem", paddingRight: "2.5rem" }}>
                  <Dialog.Title
                    style={{
                      fontFamily: "var(--font-ibm-plex-sans, sans-serif)",
                      fontSize: "1.5rem",
                      fontWeight: 800,
                      letterSpacing: "-0.02em",
                      lineHeight: 1.2,
                    }}
                    className="text-slate-950 dark:text-white"
                  >
                    {gatedPdfUrl ? "Download Proposal PDF" : `Request ${selectedProgram?.title || ""} Proposal`}
                  </Dialog.Title>
                  <Dialog.Description
                    style={{ marginTop: "0.5rem", fontSize: "0.9rem", lineHeight: 1.5 }}
                    className="text-slate-600 dark:text-neutral-300"
                  >
                    {gatedPdfUrl
                      ? "Enter your details to receive your proposal PDF and session details."
                      : "Provide your contact info and our advisors will send custom proposal details within 4 hours."}
                  </Dialog.Description>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3.5">
                  {errorMsg && (
                    <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-500 text-xs font-medium">
                      {errorMsg}
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-neutral-400 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Kumar"
                      value={name}
                      onChange={(e) => handleFieldChange(setName, e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-white/15 bg-white dark:bg-neutral-900 text-slate-950 dark:text-white text-sm focus:outline-none focus:border-accent"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-neutral-400 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="name@institution.com"
                        value={email}
                        onChange={(e) => handleFieldChange(setEmail, e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-white/15 bg-white dark:bg-neutral-900 text-slate-950 dark:text-white text-sm focus:outline-none focus:border-accent"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-neutral-400 mb-1">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={phone}
                        onChange={(e) => handleFieldChange(setPhone, e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-white/15 bg-white dark:bg-neutral-900 text-slate-950 dark:text-white text-sm focus:outline-none focus:border-accent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-neutral-400 mb-1">
                      Organization / Institution Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. ABC International School / TechCorp"
                      value={organization}
                      onChange={(e) => handleFieldChange(setOrganization, e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-white/15 bg-white dark:bg-neutral-900 text-slate-950 dark:text-white text-sm focus:outline-none focus:border-accent"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-neutral-400 mb-1">
                      Message / Requirements (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Number of participants, preferred dates, or specific questions..."
                      value={message}
                      onChange={(e) => handleFieldChange(setMessage, e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-300 dark:border-white/15 bg-white dark:bg-neutral-900 text-slate-950 dark:text-white text-sm focus:outline-none focus:border-accent resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-4 rounded-xl bg-accent text-accent-foreground font-heading font-bold text-base hover:opacity-95 transition-opacity flex items-center justify-center gap-2 mt-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="animate-spin" size={18} /> Submitting...
                      </>
                    ) : gatedPdfUrl ? (
                      <>
                        Get Proposal PDF <Download size={18} />
                      </>
                    ) : (
                      "Submit Lead Request"
                    )}
                  </button>

                  <p className="text-[11px] text-center text-slate-500 dark:text-neutral-400">
                    No spam. Strictly educational. We respond within 4 business hours.
                  </p>
                </form>
              </>
            )}

            {/* STEP 3: SUCCESS STATE */}
            {step === "success" && (
              <div className="py-6 text-center">
                <div className="h-14 w-14 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={32} />
                </div>
                <Dialog.Title className="font-heading font-bold text-2xl mb-2 text-slate-950 dark:text-white">
                  Request Submitted!
                </Dialog.Title>
                <p className="text-slate-600 dark:text-neutral-300 text-sm max-w-xs mx-auto mb-6 leading-relaxed">
                  Thank you, <strong>{name}</strong>. Our team will review your request and get back to you within 4 business hours.
                </p>

                {gatedPdfUrl && (
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-neutral-900 border border-slate-200 dark:border-white/10 mb-6">
                    <p className="text-xs text-muted-foreground mb-3">Your download should start automatically.</p>
                    <a
                      href={gatedPdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-accent inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm h-auto rounded-lg w-full"
                    >
                      <Download size={16} /> Download PDF Now
                    </a>
                  </div>
                )}

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="px-6 py-2.5 rounded-xl border border-slate-300 dark:border-white/15 text-sm font-semibold text-foreground hover:bg-slate-100 dark:hover:bg-neutral-800 transition-colors"
                >
                  Close
                </button>
              </div>
            )}

          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
