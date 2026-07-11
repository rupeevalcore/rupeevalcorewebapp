"use client";

import { motion, useScroll, useSpring, useMotionValueEvent } from "framer-motion"
import { useState } from "react"

export default function PageProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // Create a derived state for aria-valuenow (0-100)
  const [progress, setProgress] = useState(0);
  
  useMotionValueEvent(scaleX, "change", (latest) => {
    setProgress(Math.round(latest * 100));
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-accent origin-left z-[60]"
      style={{ scaleX }}
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
    />
  )
}
