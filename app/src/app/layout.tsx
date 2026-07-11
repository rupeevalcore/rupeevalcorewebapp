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
          <PageProgress />
          <Navbar />
          <main className="min-h-screen pt-16">
            {children}
          </main>
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

