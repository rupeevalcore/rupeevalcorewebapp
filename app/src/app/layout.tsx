import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Link from "next/link";
import Script from "next/script";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageProgress from "@/components/layout/PageProgress";
import WhatsAppFAB from "@/components/layout/WhatsAppFAB";
import LeadCaptureRoot from "@/components/lead/LeadCaptureRoot";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rupeevalcore.in"),
  title: "Financial Literacy Workshops in Chennai and Online | Rupeevalcore",
  description: "India's premium financial literacy platform focused on financial awareness, education, trust, and practical learning.",
  openGraph: {
    title: "RupeeValcore",
    description: "Premium financial literacy workshops for schools, colleges, corporates and individuals.",
    url: "https://rupeevalcore.in",
    siteName: "RupeeValcore",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID;

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${outfit.variable} antialiased font-sans bg-background text-foreground`}
        >
          <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          disableTransitionOnChange
        >
          <a href="#main-content" className="skip-link relative z-50">
            Skip to content
          </a>
          <div className="relative z-50">
            <PageProgress />
            <Navbar />
          </div>
          <main id="main-content" className="min-h-screen pt-16 pb-20 md:pb-0 relative z-10">
            {children}
          </main>
          
          {/* Mobile Sticky CTA */}
          <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/80 backdrop-blur-md border-t border-border/50 z-40 md:hidden animate-in slide-in-from-bottom-full">
            <Link href="/#programs" data-program-selector className="btn-accent w-full justify-center">
              Request Proposal
            </Link>
          </div>

          <Footer />
          <WhatsAppFAB />
          <LeadCaptureRoot />
          <Toaster theme="system" position="bottom-right" />
        </ThemeProvider>
        
        {gaId ? (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        ) : null}

        {clarityId ? (
          <Script id="microsoft-clarity" strategy="afterInteractive">
            {`
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${clarityId}");
            `}
          </Script>
        ) : null}
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Rupeevalcore",
            "url": "https://rupeevalcore.in",
            "logo": "https://rupeevalcore.in/favicon.ico",
            "sameAs": [
              "https://www.instagram.com/rupeevalcore_"
            ]
          })}
        </script>
      </body>
    </html>
  );
}
