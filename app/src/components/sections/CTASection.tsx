"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { EMAIL, WHATSAPP_URL } from "../../lib/utils";

interface CTASectionProps {
  headline?: string;
  subhead?: string;
  secondaryButtonText?: string;
  className?: string;
}

export default function CTASection({ 
  headline = "Ready to Transform Financial Futures?",
  subhead = "Join the leading institutions prioritizing financial awareness. Talk to our advisors today.",
  secondaryButtonText = "WhatsApp Us",
  className
}: CTASectionProps) {

  return (
    <section id="contact" className={`py-24 relative overflow-hidden ${className}`}>
      {/* Background decorations */}
      <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/20 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container relative z-10 px-4 md:px-6 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass border border-white/10 rounded-3xl p-8 md:p-16 relative overflow-hidden"
        >
          {/* Inner glow */}
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-accent/30 blur-[80px] rounded-full" />
          
          <h2 className="text-3xl md:text-5xl font-heading font-black text-foreground mb-6">
            {headline}
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            {subhead}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={process.env.NEXT_PUBLIC_INDIVIDUAL_FORM_URL || "#"} target="_blank" rel="noopener noreferrer" className="btn-accent w-full sm:w-auto group text-center inline-flex">
              Talk to an Advisor
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary w-full sm:w-auto">
              {secondaryButtonText}
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-center gap-6 text-muted-foreground">
            <span className="text-sm font-medium">Or reach out directly:</span>
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail size={16} />
              {EMAIL}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
