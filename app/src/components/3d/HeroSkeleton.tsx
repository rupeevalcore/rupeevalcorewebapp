"use client";

import { motion } from "framer-motion";

export function HeroSkeleton() {
  return (
    <div className="absolute inset-0 w-full h-[800px] flex items-center justify-center -z-10 pointer-events-none">
      {/* Fallback gradients if 3D scene is loading or disabled */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/20 rounded-full blur-[80px]" />
      
      {/* Subtle pulsing skeleton indicating loading 3D */}
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="w-[300px] h-[300px] rounded-full border border-white/5 bg-transparent shadow-[0_0_50px_rgba(255,255,255,0.02)]"
      />
    </div>
  );
}
