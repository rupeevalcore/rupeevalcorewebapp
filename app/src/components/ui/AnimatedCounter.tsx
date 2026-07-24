"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring, useTransform, motion } from "framer-motion";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number; // ms
  className?: string;
}

export function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
  duration = 1800,
  className = "",
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [hasMounted, setHasMounted] = useState(false);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    duration: duration,
    bounce: 0,
  });

  const displayValue = useTransform(springValue, (latest) => Math.round(latest));

  // Mark as mounted so we can swap from static SSR value to animated value
  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (hasMounted && isInView) {
      motionValue.set(target);
    }
  }, [hasMounted, isInView, target, motionValue]);

  return (
    <span ref={ref} className={className} aria-label={`${prefix}${target}${suffix}`}>
      {prefix}
      {/* SSR / pre-hydration: show real target value so it never flashes "0" */}
      {hasMounted ? (
        <motion.span suppressHydrationWarning>{displayValue}</motion.span>
      ) : (
        <span suppressHydrationWarning>{target}</span>
      )}
      {suffix}
    </span>
  );
}
