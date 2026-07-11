import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { ThemeProvider } from "next-themes";
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
  title: "Financial Literacy Workshops in Chennai and Online | Rupeevalcore",
  description: "India's premium financial literacy platform focused on financial awareness, education, trust, and practical learning.",
};

import { Toaster } from 'sonner'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageProgress from '@/components/layout/PageProgress'
import WhatsAppFAB from '@/components/layout/WhatsAppFAB'
import { BeamsBackground } from '@/components/ui/beams-background'


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
          <BeamsBackground />
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
            <a href="#contact" className="btn-accent w-full justify-center">
              Request Proposal
            </a>
          </div>

          <Footer />
          <WhatsAppFAB />
          <Toaster theme="system" position="bottom-right" />
        </ThemeProvider>
        
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX', {
              page_path: window.location.pathname,
            });
          `}
        </script>
        
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

