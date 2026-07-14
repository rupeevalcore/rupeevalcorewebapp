import type { Metadata } from "next";
import { Inter, IBM_Plex_Sans } from "next/font/google";
import Script from "next/script";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageProgress from "@/components/layout/PageProgress";
import WhatsAppFAB from "@/components/layout/WhatsAppFAB";
import LeadCaptureRoot from "@/components/lead/LeadCaptureRoot";
import { Phone, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { PHONE_NUMBER, WHATSAPP_URL } from "@/lib/utils";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: true,
});

const ibmPlexSans = IBM_Plex_Sans({
  weight: ["500", "600", "700"],
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rupeevalcore.in"),
  title: "Financial Literacy Workshops in Chennai and Online | Rupeevalcore",
  description: "India's premium financial literacy platform focused on financial awareness, education, trust, and practical learning.",
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
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
      <body className={`${inter.variable} ${ibmPlexSans.variable} antialiased font-sans bg-background text-foreground selection:bg-accent/30 selection:text-foreground page-transition`}>
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
          <div className="fixed bottom-0 left-0 right-0 p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] bg-background/95 backdrop-blur-lg border-t border-border/50 z-50 md:hidden animate-in slide-in-from-bottom-full shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
            <div className="flex items-center gap-2 max-w-md mx-auto">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex-1 py-3 px-1 flex flex-col items-center justify-center gap-1 rounded-xl bg-[#25D366] text-white font-heading font-bold hover:bg-[#20b858] transition-colors text-sm leading-none min-h-[48px]">
                <FaWhatsapp size={18} />
                <span>WhatsApp</span>
              </a>
              <a href={`tel:${PHONE_NUMBER}`} className="flex-1 py-3 px-1 flex flex-col items-center justify-center gap-1 rounded-xl bg-accent text-accent-foreground font-heading font-bold hover:bg-accent/90 transition-colors text-sm leading-none min-h-[48px]">
                <Phone size={18} />
                <span>Call</span>
              </a>
              <a href={`mailto:contactrupeevalcore@gmail.com`} className="flex-1 py-3 px-1 flex flex-col items-center justify-center gap-1 rounded-xl bg-muted text-foreground font-heading font-bold hover:bg-muted/80 transition-colors text-sm leading-none min-h-[48px]">
                <Mail size={18} />
                <span>Email</span>
              </a>
            </div>
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
        
        <script type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "Rupeevalcore",
            "url": "https://rupeevalcore.in",
            "logo": "https://rupeevalcore.in/favicon.ico",
            "description": "Financial literacy workshops for schools, colleges, corporates and individuals in Chennai, Tamil Nadu.",
            "telephone": "+918248589694",
            "email": "contactrupeevalcore@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Chennai",
              "addressRegion": "Tamil Nadu",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 13.0827,
              "longitude": 80.2707
            },
            "areaServed": ["Chennai", "Tamil Nadu", "India"],
            "sameAs": [
              "https://www.instagram.com/rupeevalcore_"
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Financial Literacy Programs",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Course", "name": "School Financial Literacy Programme" } },
                { "@type": "Offer", "itemOffered": { "@type": "Course", "name": "College Financial Literacy Programme" } },
                { "@type": "Offer", "itemOffered": { "@type": "Course", "name": "Corporate Financial Wellness Programme" } },
                { "@type": "Offer", "itemOffered": { "@type": "Course", "name": "Individual Financial Mentoring" } }
              ]
            }
          })}}
        />
      </body>
    </html>
  );
}

