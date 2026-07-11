"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export default function ComplianceBlock() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-4xl mx-auto glass p-8 md:p-10 rounded-3xl border border-white/10 relative overflow-hidden mt-16"
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />
      
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
        <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center shrink-0 border border-accent/20">
          <ShieldCheck className="text-accent" size={32} />
        </div>
        
        <div>
          <h4 className="font-heading font-black text-2xl text-foreground mb-3">
            Education First. No Products. No Commissions.
          </h4>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            RupeeValcore provides financial education and awareness programmes only.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-2">
            The programmes do not provide:
          </p>
          <ul className="text-muted-foreground text-lg leading-relaxed list-disc list-inside">
            <li>Investment Advice</li>
            <li>Stock Recommendations</li>
            <li>Mutual Fund Recommendations</li>
            <li>Portfolio Management Services</li>
            <li>Financial Planning Services</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
