import PageHero from "@/components/layout/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Rupeevalcore",
  description: "Privacy Policy for Rupeevalcore",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero 
        title="Privacy Policy" 
        description="Last updated: July 2026"
        themeColor="emerald"
      />
      <div className="container-rv py-16 max-w-4xl prose prose-invert">
        <h2>1. Information We Collect</h2>
        <p>We only collect information necessary to process your inquiries and provide financial literacy programs. This may include your name, contact information, and institutional details.</p>
        
        <h2>2. How We Use Your Information</h2>
        <p>Your information is solely used for communication regarding our workshops and educational programs. We do not sell or share your data with third-party marketers.</p>
        
        <h2>3. Data Protection</h2>
        <p>We implement standard security measures to protect your information. Forms are securely processed through Google Workspace.</p>

        <h2>4. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us via the details provided in the footer.</p>
      </div>
    </>
  );
}
