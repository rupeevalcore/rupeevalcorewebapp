import type { AnalyticsEvent } from "@/lib/lead-routing";

type AnalyticsParams = Record<string, string | number | boolean | null | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (command: "event", eventName: string, params?: AnalyticsParams) => void;
    clarity?: (command: "event", eventName: string) => void;
  }
}

export function trackEvent(
  eventName: AnalyticsEvent | "contact_modal_opened" | "file_download",
  params?: AnalyticsParams
) {
  if (typeof window === "undefined") return;

  window.gtag?.("event", eventName, params);
  window.clarity?.("event", eventName);
}
