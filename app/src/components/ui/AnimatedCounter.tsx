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
  const [hasAnimated, setHasAnimated] = useState(false);

  // Start at 0 so we can animate upward, but only render the motion value after
  // the element enters the viewport — preventing any zero flash on hydration.
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    duration: duration,
    bounce: 0,
  });

  const displayValue = useTransform(springValue, (latest) => Math.round(latest));

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (hasMounted && isInView && !hasAnimated) {
      setHasAnimated(true);
      motionValue.set(target);
    }
  }, [hasMounted, isInView, target, motionValue, hasAnimated]);

  return (
    <span ref={ref} className={className} aria-label={`${prefix}${target}${suffix}`}>
      {prefix}
      {/*
        Before hydration (SSR): render the real target value statically.
        After mount but before in-view: keep showing target so there's no flash to 0.
        Once in-view: animate from 0 → target using spring.
      */}
      {hasMounted && hasAnimated ? (
        <motion.span suppressHydrationWarning>{displayValue}</motion.span>
      ) : (
        <span suppressHydrationWarning>{target}</span>
      )}
      {suffix}
    </span>
  );
}
