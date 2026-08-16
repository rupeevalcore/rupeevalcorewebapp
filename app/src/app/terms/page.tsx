import PageHero from "@/components/layout/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | RupeeValcore",
  description: "Terms of Service for RupeeValcore",
  robots: {
    index: false,
    follow: false,
  },
  alternates: { canonical: "https://www.rupeevalcore.in/terms" },
};

export default function TermsPage() {
  return (
    <>
      <PageHero 
        title="Terms of Service" 
        description="Last updated: July 2026"
        themeColor="emerald"
      />
      <div className="container-rv py-16 max-w-4xl prose prose-invert">
        <h2>1. Acceptance of Terms</h2>
        <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>
        
        <h2>2. Educational Purpose</h2>
        <p>RupeeValcore provides educational content and financial literacy workshops. We do not sell financial products, and our content should not be construed as direct financial advice.</p>
        
        <h2>3. Intellectual Property</h2>
        <p>All content, branding, and materials on this website are the property of RupeeValcore unless otherwise stated.</p>

        <h2>4. Program Bookings</h2>
        <p>Workshop bookings, proposals, and schedules are subject to mutual agreement and availability.</p>
      </div>
    </>
  );
}
