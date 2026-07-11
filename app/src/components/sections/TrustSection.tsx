"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Shield, GraduationCap, MapPin } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const stats = [
  { label: "Schools", value: 2, suffix: "", variant: "schools" as const },
  { label: "Colleges", value: 2, suffix: "", variant: "colleges" as const },
  { label: "Organizations", value: 3, suffix: "", variant: "corporate" as const },
  { label: "Individual Sessions", value: 25, suffix: "+", variant: "individuals" as const },
];

const visionStats = [
  { label: "Schools", value: 50, suffix: "+" },
  { label: "Colleges", value: 50, suffix: "+" },
  { label: "Workplaces", value: 50, suffix: "+" },
];

const compliance = [
  { icon: Shield, text: "MSME Registered" },
  { icon: CheckCircle2, text: "NISM Certified" },
  { icon: GraduationCap, text: "Education First" },
  { icon: MapPin, text: "Chennai & Online" },
];

export default function TrustSection() {
  return (
    <section id="trust" className="section-padding relative overflow-hidden bg-transparent">
      <div className="container-rv">
        
        {/* Compliance Badges Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 md:gap-12 pb-24 border-b border-border/50 mb-24"
        >
          {compliance.map((item, i) => (
            <div key={i} className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
              <item.icon className="text-accent" size={24} strokeWidth={1.5} aria-hidden="true" />
              <span className="font-heading font-medium tracking-wide uppercase text-sm">{item.text}</span>
            </div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Current Impact */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
                Our Current Impact
              </h2>
              <p className="text-muted-foreground text-lg max-w-md leading-relaxed">
                We are actively partnering with institutions across Chennai to bring practical financial education to those who need it most.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass p-6 rounded-2xl relative overflow-hidden group"
                >
                  <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={3}
                    variant={stat.variant}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-0" />
                  <div className="relative z-10">
                    <div className="text-4xl font-black font-heading text-foreground mb-1">
                      <AnimatedCounter target={stat.value} suffix={stat.suffix} duration={1600} />
                    </div>
                    <div className="text-sm font-medium text-accent tracking-wide uppercase">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Future Vision */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-b from-primary/10 to-background rounded-3xl blur-xl" />
            <div className="relative glass p-10 md:p-12 rounded-3xl border border-accent/10">
              <h3 className="font-heading font-bold text-2xl text-foreground mb-2">Our Vision</h3>
              <p className="text-muted-foreground mb-10">Building a financially literate India, one institution at a time.</p>
              
              <div className="space-y-8">
                {visionStats.map((stat, i) => (
                  <div key={i} className="flex items-center justify-between border-b border-border/50 pb-6 last:border-0 last:pb-0">
                    <span className="text-xl font-heading text-foreground">{stat.label}</span>
                    <span className="text-3xl font-black font-heading text-accent">
                      <AnimatedCounter target={stat.value} suffix={stat.suffix} duration={1800} />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
