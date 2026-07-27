"use client";

import * as Dialog from "@radix-ui/react-dialog";
import {
  X,
  Download,
  ArrowRight,
  CheckCircle2,
  Loader2,
  XCircle,
  FileSpreadsheet,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import type { BrochureKey } from "@/lib/brochures";
import { BROCHURES } from "@/lib/brochures";

type Step = "input" | "success" | "not-found";

export default function BrochureVerificationModal() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>("input");
  const [brochureKey, setBrochureKey] = useState<BrochureKey | null>(null);
  const [contact, setContact] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Ref to prevent double-submit on fast repeated clicks
  const verifyingRef = useRef(false);

  const brochure = brochureKey ? BROCHURES[brochureKey] : null;

  const resetState = useCallback(() => {
    setStep("input");
    setBrochureKey(null);
    setContact("");
    setIsVerifying(false);
    setErrorMsg(null);
    verifyingRef.current = false;
  }, []);

  const handleOpenChange = useCallback(
    (newOpen: boolean) => {
      if (!newOpen) resetState();
      setOpen(newOpen);
    },
    [resetState]
  );

  // Global click listener — intercepts any element with data-brochure-verify="<key>"
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const trigger = target?.closest<HTMLElement>("[data-brochure-verify]");
      if (!trigger) return;

      event.preventDefault();
      const key = trigger.dataset.brochureVerify as BrochureKey;
      if (!key || !BROCHURES[key]) return;

      resetState();
      setBrochureKey(key);
      setOpen(true);
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [resetState]);

  /** Programmatically triggers PDF download in the browser. */
  const triggerPdfDownload = useCallback(
    (pdf: typeof brochure) => {
      if (!pdf) return;
      const link = document.createElement("a");
      link.href = pdf.pdfPath;
      link.download = pdf.pdfPath.split("/").pop() || "brochure.pdf";
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
    []
  );

  const handleVerify = useCallback(
    async (e?: React.FormEvent) => {
      if (e) e.preventDefault();

      // Double-submit guard
      if (verifyingRef.current) return;

      const trimmed = contact.trim();
      if (!trimmed || trimmed.length < 3) {
        setErrorMsg("Please enter your Email Address or Mobile Number.");
        return;
      }

      verifyingRef.current = true;
      setIsVerifying(true);
      setErrorMsg(null);

      try {
        const res = await fetch("/api/verify-submission", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ contact: trimmed, brochureKey }),
        });

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error || "Verification failed. Please try again.");
        }

        if (data.found) {
          setStep("success");
          triggerPdfDownload(brochure);
        } else {
          setStep("not-found");
        }
      } catch (err: unknown) {
        const msg =
          err instanceof Error
            ? err.message
            : "Something went wrong. Please try again.";
        setErrorMsg(msg);
      } finally {
        setIsVerifying(false);
        verifyingRef.current = false;
      }
    },
    [contact, brochureKey, brochure, triggerPdfDownload]
  );

  const handleRedirectToForm = useCallback(() => {
    if (!brochure) return;
    const url = brochure.formUrl;
    setOpen(false);
    resetState();
    window.open(url, "_blank", "noopener,noreferrer");
  }, [brochure, resetState]);

  return (
    <Dialog.Root open={open} onOpenChange={handleOpenChange}>
      <Dialog.Portal>
        {/* Backdrop overlay */}
        <Dialog.Overlay
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9998,
            backgroundColor: "rgba(0,0,0,0.75)",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
          }}
          aria-hidden="true"
        />

        {/* Dialog panel */}
        <Dialog.Content
          aria-describedby="brochure-dialog-desc"
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 9999,
            width: "90vw",
            maxWidth: "30rem",
            maxHeight: "calc(100dvh - 2rem)",
            overflowY: "auto",
            borderRadius: "1.5rem",
            padding: "2rem",
            boxShadow: "0 25px 60px rgba(0,0,0,0.4)",
            outline: "none",
          }}
          className="bg-white text-slate-950 dark:bg-neutral-950 dark:text-white border border-slate-200 dark:border-white/10"
        >
          {/* Visually-hidden description for screen readers */}
          <span id="brochure-dialog-desc" className="sr-only">
            Verify your Google Form submission to download the brochure.
          </span>

          <div style={{ position: "relative" }}>
            {/* ── Close button ── */}
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

            {/* ══ STEP: INPUT ══ */}
            {step === "input" && (
              <>
                <div style={{ marginBottom: "1.25rem", paddingRight: "2.5rem" }}>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider mb-3">
                    <FileSpreadsheet size={14} aria-hidden="true" /> Google Form Verification
                  </span>
                  <Dialog.Title
                    style={{
                      fontFamily: "var(--font-ibm-plex-sans, sans-serif)",
                      fontSize: "1.4rem",
                      fontWeight: 800,
                      letterSpacing: "-0.02em",
                      lineHeight: 1.2,
                    }}
                    className="text-slate-950 dark:text-white"
                  >
                    Brochure Download Verification
                  </Dialog.Title>
                  <Dialog.Description
                    style={{ marginTop: "0.5rem", fontSize: "0.9rem", lineHeight: 1.5 }}
                    className="text-slate-600 dark:text-neutral-300"
                  >
                    {brochure?.title}
                  </Dialog.Description>
                </div>

                <form onSubmit={handleVerify} noValidate className="space-y-4">
                  {/* Error banner */}
                  {errorMsg && (
                    <div
                      role="alert"
                      aria-live="assertive"
                      className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-500 text-xs font-medium"
                    >
                      {errorMsg}
                    </div>
                  )}

                  {/* Input field */}
                  <div>
                    <label
                      htmlFor="brochure-contact"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-neutral-400 mb-1.5"
                    >
                      Email Address{" "}
                      <span className="font-normal normal-case text-slate-400 dark:text-neutral-500">
                        or
                      </span>{" "}
                      Mobile Number{" "}
                      <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="brochure-contact"
                      type="text"
                      autoComplete="email"
                      placeholder="e.g. name@email.com or +91 98765 43210"
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      disabled={isVerifying}
                      aria-required="true"
                      aria-invalid={!!errorMsg}
                      className="w-full px-3.5 py-3 rounded-xl border border-slate-300 dark:border-white/15 bg-white dark:bg-neutral-900 text-slate-950 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent disabled:opacity-50 transition-colors"
                      autoFocus
                    />
                    <p className="text-[11px] text-slate-500 dark:text-neutral-400 mt-1.5 leading-relaxed">
                      Enter the Email Address <strong>or</strong> Mobile Number you used in the Google Form.
                      Matching either one is sufficient.
                    </p>
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={isVerifying}
                    aria-busy={isVerifying}
                    className="w-full py-3.5 px-4 rounded-xl bg-accent text-accent-foreground font-heading font-bold text-base hover:opacity-95 transition-opacity flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isVerifying ? (
                      <>
                        <Loader2 className="animate-spin" size={18} aria-hidden="true" />
                        Verifying in Google Sheets&hellip;
                      </>
                    ) : (
                      <>
                        Verify &amp; Download Brochure <Download size={18} aria-hidden="true" />
                      </>
                    )}
                  </button>

                  {/* Form redirect */}
                  <div className="pt-3 border-t border-slate-200 dark:border-white/10 text-center">
                    <p className="text-xs text-slate-600 dark:text-neutral-400 mb-2">
                      Haven&apos;t completed the Google Form yet?
                    </p>
                    <button
                      type="button"
                      onClick={handleRedirectToForm}
                      className="text-xs font-bold text-accent hover:underline inline-flex items-center gap-1 cursor-pointer focus-visible:outline-none focus-visible:underline"
                    >
                      Fill Out Google Form First{" "}
                      <ArrowRight size={12} aria-hidden="true" />
                    </button>
                  </div>
                </form>
              </>
            )}

            {/* ══ STEP: SUCCESS ══ */}
            {step === "success" && brochure && (
              <div className="py-4 text-center">
                <div
                  className="h-14 w-14 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto mb-4"
                  aria-hidden="true"
                >
                  <CheckCircle2 size={32} />
                </div>
                <Dialog.Title className="font-heading font-bold text-2xl mb-2 text-slate-950 dark:text-white">
                  Verification Successful!
                </Dialog.Title>
                <Dialog.Description className="text-slate-600 dark:text-neutral-300 text-sm max-w-xs mx-auto mb-6 leading-relaxed">
                  Your record was found. Your brochure download should start automatically.
                </Dialog.Description>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-neutral-900 border border-slate-200 dark:border-white/10 mb-6">
                  <p className="text-xs text-muted-foreground mb-3">
                    If the download did not start automatically:
                  </p>
                  <button
                    type="button"
                    onClick={() => triggerPdfDownload(brochure)}
                    className="btn-accent inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm h-auto rounded-lg w-full cursor-pointer"
                  >
                    <Download size={16} aria-hidden="true" /> Download Brochure Now
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="px-6 py-2.5 rounded-xl border border-slate-300 dark:border-white/15 text-sm font-semibold text-foreground hover:bg-slate-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            )}

            {/* ══ STEP: NOT FOUND ══ */}
            {step === "not-found" && brochure && (
              <div className="py-4 text-center">
                <div
                  className="h-14 w-14 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center mx-auto mb-4"
                  aria-hidden="true"
                >
                  <XCircle size={32} />
                </div>
                <Dialog.Title className="font-heading font-bold text-xl mb-2 text-slate-950 dark:text-white">
                  Submission Not Found
                </Dialog.Title>
                <Dialog.Description className="text-slate-600 dark:text-neutral-300 text-sm max-w-xs mx-auto mb-6 leading-relaxed">
                  We couldn&apos;t find your submission. Please complete the Google Form first,
                  then return here to download the brochure.
                </Dialog.Description>

                <button
                  type="button"
                  onClick={handleRedirectToForm}
                  className="w-full py-3.5 px-4 rounded-xl bg-accent text-accent-foreground font-heading font-bold text-sm hover:opacity-95 transition-opacity flex items-center justify-center gap-2 cursor-pointer mb-3"
                >
                  Complete Google Form <ArrowRight size={16} aria-hidden="true" />
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setStep("input");
                    setErrorMsg(null);
                  }}
                  className="w-full py-2.5 rounded-xl border border-slate-300 dark:border-white/15 text-sm font-semibold text-foreground hover:bg-slate-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  Try a different Email or Mobile Number
                </button>
              </div>
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
