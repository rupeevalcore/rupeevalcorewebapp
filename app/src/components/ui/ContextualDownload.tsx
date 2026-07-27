"use client";

import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";
import type { BrochureKey } from "@/lib/brochures";

interface ContextualDownloadProps {
  title: string;
  file?: string;
  brochureKey?: BrochureKey;
  audience: string;
  className?: string;
}

export function ContextualDownload({ title, file, brochureKey, audience, className }: ContextualDownloadProps) {
  const downloadUrl = file ? `/downloads/${file}` : "#";
  
  return (
    <div className={cn("flex flex-col", className)}>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "DataDownload",
          "name": title,
          "contentUrl": `https://rupeevalcore.in${downloadUrl}`,
          "encodingFormat": "application/pdf",
          "publisher": {
            "@type": "Organization",
            "name": "RupeeValcore"
          }
        })}
      </script>
      {brochureKey ? (
        <button
          type="button"
          data-brochure-verify={brochureKey}
          onClick={() => {
            trackEvent("file_download", {
              file_name: brochureKey,
              link_text: title,
              section: audience,
            });
          }}
          className="flex items-center gap-4 p-5 glass rounded-2xl border border-white/10 hover:border-accent/40 hover:bg-white/5 transition-all group shadow-xl backdrop-blur-md text-left w-full cursor-pointer"
        >
          <div className="p-3 rounded-xl bg-primary/20 text-accent group-hover:scale-110 transition-transform">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-lg text-foreground group-hover:text-accent transition-colors">
              {title}
            </span>
            <span className="text-sm text-muted-foreground">
              Download PDF Brochure
            </span>
          </div>
        </button>
      ) : (
        <a
          href={downloadUrl}
          download={file}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            trackEvent("file_download", {
              file_name: file,
              link_text: title,
              section: audience,
            });
          }}
          className="flex items-center gap-4 p-5 glass rounded-2xl border border-white/10 hover:border-accent/40 hover:bg-white/5 transition-all group shadow-xl backdrop-blur-md"
        >
          <div className="p-3 rounded-xl bg-primary/20 text-accent group-hover:scale-110 transition-transform">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-lg text-foreground group-hover:text-accent transition-colors">
              {title}
            </span>
            <span className="text-sm text-muted-foreground">
              Download PDF
            </span>
          </div>
        </a>
      )}
    </div>
  );
}
