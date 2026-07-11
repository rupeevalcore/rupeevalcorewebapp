"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Users, User, ChevronRight, ArrowRight } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { useRef, useState } from "react";

const audiences = [
  { photoPos: "top left", title: "For Schools", desc: "Build early financial habits for students.", link: "/schools", color: "text-emerald-500", glow: "from-emerald-500/20", variant: "schools" as const },
  { photoPos: "top right", title: "For Colleges", desc: "Prepare students for real-world finances.", link: "/colleges", color: "text-sapphire-500", glow: "from-sapphire-500/20", variant: "colleges" as const },
  { photoPos: "bottom left", title: "For Corporates", desc: "Enhance employee financial wellness.", link: "/corporate-financial-wellness", color: "text-cyan-500", glow: "from-cyan-500/20", variant: "corporate" as const },
  { photoPos: "bottom right", title: "For Individuals", desc: "1-on-1 personalized financial literacy.", link: "/individual-learning", color: "text-orange-500", glow: "from-orange-500/20", variant: "individuals" as const },
];

const levels = [
  { name: "Beginner", desc: "Default path. No prior knowledge required.", active: true },
  { name: "Intermediate", desc: "Optional progression. Deeper concepts.", active: false },
  { name: "Advanced", desc: "Custom institutional programs.", active: false },
];

export default function ProgramsSection() {
  return (
    <section id="programs" className="section-padding bg-transparent relative">
      <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
      <div className="container-rv relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-black text-4xl md:text-5xl text-foreground mb-6">
              Tailored Programs
            </h2>
            <p className="text-lg text-muted-foreground">
              We design our workshops to fit the specific needs of different audiences, from school students to working professionals.
            </p>
          </motion.div>
        </div>

        {/* Audiences Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {audiences.map((aud, i) => (
            <ProgramCard key={i} aud={aud} i={i} />
          ))}
        </div>


      </div>
    </section>
  );
}

function ProgramCard({ aud, i }: { aud: typeof audiences[0], i: number }) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.1 }}
      className="h-full"
    >
      <Link 
        ref={cardRef}
        href={aud.link}
        onMouseMove={handleMouseMove}
        aria-label={`View ${aud.title.replace('For ', '')} Program`}
        className="block glass p-8 pb-10 rounded-3xl group h-full relative overflow-hidden outline-none border border-white/10 hover:border-accent/40 focus-visible:border-accent/40 hover:shadow-lg hover:shadow-accent/10 focus-visible:shadow-lg focus-visible:shadow-accent/10 hover:-translate-y-[4px] focus-visible:-translate-y-[4px] transition-all duration-[250ms] ease-[cubic-bezier(.22,1,.36,1)]"
      >
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
          variant={aud.variant}
        />
        
        {/* Spotlight - desktop only */}
        <div 
          className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300 hidden md:block z-20"
          style={{
            background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.06), transparent 40%)`,
          }}
        />

        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${aud.glow} to-transparent opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-[250ms] rounded-bl-full z-0`} />
        
        <div className="relative w-full aspect-[4/3] mb-6 rounded-2xl overflow-hidden shadow-2xl z-10">
          <div 
            className="w-full h-full transform scale-100 group-hover:scale-[1.05] group-focus-visible:scale-[1.05] transition-transform duration-[400ms] ease-out"
            style={{
              backgroundImage: `url('/collage_photos.jpg')`,
              backgroundSize: '200% 200%',
              backgroundPosition: aud.photoPos
            }}
          />
        </div>
        
        <h3 className="font-heading font-bold text-xl text-foreground mb-3 relative z-10">{aud.title}</h3>
        <p className="text-muted-foreground relative z-10 mb-8">{aud.desc}</p>
        
        {/* Micro CTA and Animated Arrow */}
        <div className="absolute bottom-6 left-8 right-8 flex items-center justify-between z-10">
          <span className="font-semibold text-sm text-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-focus-visible:opacity-100 group-focus-visible:translate-x-0 transition-all duration-[250ms] ease-[cubic-bezier(.22,1,.36,1)]">
            Explore Program
          </span>
          <ArrowRight className={`w-5 h-5 ${aud.color} opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-focus-visible:opacity-100 group-focus-visible:translate-x-0 transition-all duration-[250ms] ease-[cubic-bezier(.22,1,.36,1)]`} />
        </div>
      </Link>
    </motion.div>
  );
}
