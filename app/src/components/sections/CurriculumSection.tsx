"use client";

import { motion } from "framer-motion";
import { BookOpen, TrendingUp, ShieldAlert, PieChart, Landmark, Target, Shield, Receipt, Scale, Wallet } from "lucide-react";

const modules = [
  { icon: Wallet, title: "Personal Finance Basics", desc: "Understand income, expenses, and core concepts." },
  { icon: Target, title: "Money Management", desc: "Budgeting rules and effective saving strategies." },
  { icon: Landmark, title: "Banking Fundamentals", desc: "Navigating accounts, deposits, and digital banking." },
  { icon: TrendingUp, title: "Investment Awareness", desc: "Inflation, compounding, and asset classes." },
  { icon: BookOpen, title: "Stock Market Fundamentals", desc: "How markets work and basic equity concepts." },
  { icon: PieChart, title: "Mutual Fund Awareness", desc: "SIPs, fund types, and diversification." },
  { icon: Shield, title: "Insurance Awareness", desc: "Health, life, and risk management basics." },
  { icon: Receipt, title: "Tax Awareness", desc: "Income tax slabs, deductions, and planning." },
  { icon: ShieldAlert, title: "Fraud Awareness", desc: "Identifying scams, phishing, and digital safety." },
  { icon: Scale, title: "Financial Decision Making", desc: "Psychology of money and long-term planning." },
];

export default function CurriculumSection() {
  return (
    <section id="curriculum" className="section-padding bg-transparent/50">
      <div className="container-rv">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-black text-4xl md:text-5xl text-foreground mb-6">
              Comprehensive Curriculum
            </h2>
            <p className="text-lg text-muted-foreground">
              Ten modular topics designed to take participants from basic financial awareness to confident decision-making. No prior finance knowledge required.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {modules.map((mod, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass p-6 rounded-2xl border-0 hover:border-accent/30 transition-all duration-300 group flex flex-col items-center text-center hover:-translate-y-1"
            >
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center text-accent mb-5 group-hover:scale-110 transition-transform"
                style={{ background: "var(--icon-bg)" }}
              >
                <mod.icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="font-heading font-bold text-foreground mb-3">{mod.title}</h3>
              <p className="text-sm text-muted-foreground">{mod.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
