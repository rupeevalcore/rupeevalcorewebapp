"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ShootingStarsGrid } from "@/components/ui/shooting-stars-grid";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export default function HeroSection() {

  return (
    <ShootingStarsGrid
      className="min-h-[90vh] rounded-none border-none shadow-none pt-20"
      contentClassName="h-full w-full flex items-center justify-center p-0"
      interactive={true}
      starCount={60}
      shootingStarCount={8}
      glow={true}
    >
      <div className="container-rv relative z-10 flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-white/10 shadow-lg text-accent text-sm font-medium mb-8 backdrop-blur-xl"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          Next batch starts soon in Chennai
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Subtle text glow behind */}
          <div className="absolute inset-0 bg-accent/20 blur-[100px] -z-10 rounded-full" />
          
          <h1 className="font-heading font-black text-5xl md:text-7xl lg:text-8xl tracking-tight mb-6 text-foreground">
            Premium Financial <br />
            Education Institution.
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed font-medium"
        >
          Practical financial education covering money basics, stock market awareness, taxes, and financial wellbeing. No products. No commissions. Just education.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto p-2 glass rounded-2xl md:rounded-full border border-white/10 shadow-2xl backdrop-blur-xl relative overflow-hidden"
        >
          <GlowingEffect
            spread={40}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
            borderWidth={3}
            variant="white"
          />
          <a href="#programs" className="btn-accent flex-1 sm:flex-none group rounded-xl md:rounded-full px-8 py-3.5 text-center relative z-10">
            Find The Right Program
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
          <Link href="#contact" className="btn-primary flex-1 sm:flex-none rounded-xl md:rounded-full px-8 py-3.5 relative z-10">
            WhatsApp Us
          </Link>
        </motion.div>

      </div>
    </ShootingStarsGrid>
  );
}
