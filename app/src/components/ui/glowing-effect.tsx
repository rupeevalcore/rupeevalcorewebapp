"use client";

import { memo, useCallback, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { animate } from "motion/react";

interface GlowingEffectProps {
  blur?: number;
  inactiveZone?: number;
  proximity?: number;
  spread?: number;
  variant?: "default" | "white" | "schools" | "colleges" | "corporate" | "individuals" | "ai";
  glow?: boolean;
  className?: string;
  disabled?: boolean;
  movementDuration?: number;
  borderWidth?: number;
}

const getGradient = (variant: GlowingEffectProps["variant"]) => {
  if (variant === "white") {
    return `repeating-conic-gradient(
      from 236.84deg at 50% 50%,
      var(--black),
      var(--black) calc(25% / var(--repeating-conic-gradient-times))
    )`;
  }
  
  let colors = {
    c1: "#dd7bbb",
    c2: "#d79f1e",
    c3: "#5a922c",
    c4: "#4c7894"
  };

  // Subtle, premium institutional colors
  switch (variant) {
    case "schools": // Emerald
      colors = { c1: "#059669", c2: "#10b981", c3: "#34d399", c4: "#059669" };
      break;
    case "colleges": // Sapphire Blue
      colors = { c1: "#1d4ed8", c2: "#2563eb", c3: "#60a5fa", c4: "#1d4ed8" };
      break;
    case "corporate": // Cyan
      colors = { c1: "#0891b2", c2: "#06b6d4", c3: "#22d3ee", c4: "#0891b2" };
      break;
    case "individuals": // Gold
      colors = { c1: "#d97706", c2: "#f59e0b", c3: "#fbbf24", c4: "#d97706" };
      break;
    case "ai": // Purple
      colors = { c1: "#7c3aed", c2: "#8b5cf6", c3: "#a78bfa", c4: "#7c3aed" };
      break;
  }

  return `
    radial-gradient(circle, ${colors.c1} 10%, transparent 20%),
    radial-gradient(circle at 40% 40%, ${colors.c2} 5%, transparent 15%),
    radial-gradient(circle at 60% 60%, ${colors.c3} 10%, transparent 20%), 
    radial-gradient(circle at 40% 60%, ${colors.c4} 10%, transparent 20%),
    repeating-conic-gradient(
      from 236.84deg at 50% 50%,
      ${colors.c1} 0%,
      ${colors.c2} calc(25% / var(--repeating-conic-gradient-times)),
      ${colors.c3} calc(50% / var(--repeating-conic-gradient-times)), 
      ${colors.c4} calc(75% / var(--repeating-conic-gradient-times)),
      ${colors.c1} calc(100% / var(--repeating-conic-gradient-times))
    )
  `;
};

const GlowingEffect = memo(
  ({
    blur = 0,
    inactiveZone = 0.7,
    proximity = 0,
    spread = 20,
    variant = "default",
    glow = false,
    className,
    movementDuration = 2,
    borderWidth = 1,
    disabled = true,
  }: GlowingEffectProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const lastPosition = useRef({ x: 0, y: 0 });
    const animationFrameRef = useRef<number>(0);
    const isMobileRef = useRef(false);

    useEffect(() => {
      // Check if we're on a mobile/touch device
      isMobileRef.current = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
    }, []);

    const handleMove = useCallback(
      (e?: MouseEvent | { x: number; y: number }) => {
        if (!containerRef.current) return;
        
        // On mobile, keep it static
        if (isMobileRef.current) {
          containerRef.current.style.setProperty("--active", "1");
          return;
        }

        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }

        animationFrameRef.current = requestAnimationFrame(() => {
          const element = containerRef.current;
          if (!element) return;

          const { left, top, width, height } = element.getBoundingClientRect();
          const mouseX = e?.x ?? lastPosition.current.x;
          const mouseY = e?.y ?? lastPosition.current.y;

          if (e) {
            lastPosition.current = { x: mouseX, y: mouseY };
          }

          const center = [left + width * 0.5, top + height * 0.5];
          const distanceFromCenter = Math.hypot(
            mouseX - center[0],
            mouseY - center[1]
          );
          const inactiveRadius = 0.5 * Math.min(width, height) * inactiveZone;

          if (distanceFromCenter < inactiveRadius) {
            element.style.setProperty("--active", "0");
            return;
          }

          const isActive =
            mouseX > left - proximity &&
            mouseX < left + width + proximity &&
            mouseY > top - proximity &&
            mouseY < top + height + proximity;

          element.style.setProperty("--active", isActive ? "1" : "0");

          if (!isActive) return;

          const currentAngle =
            parseFloat(element.style.getPropertyValue("--start")) || 0;
          let targetAngle =
            (180 * Math.atan2(mouseY - center[1], mouseX - center[0])) /
              Math.PI +
            90;

          const angleDiff = ((targetAngle - currentAngle + 180) % 360) - 180;
          const newAngle = currentAngle + angleDiff;

          animate(currentAngle, newAngle, {
            duration: movementDuration,
            ease: [0.16, 1, 0.3, 1],
            onUpdate: (value) => {
              element.style.setProperty("--start", String(value));
            },
          });
        });
      },
      [inactiveZone, proximity, movementDuration]
    );

    useEffect(() => {
      if (disabled) return;

      if (isMobileRef.current) {
        // Just trigger once for static display on mobile
        handleMove();
        return;
      }

      const handleScroll = () => handleMove();
      const handlePointerMove = (e: PointerEvent) => handleMove(e);

      window.addEventListener("scroll", handleScroll, { passive: true });
      document.body.addEventListener("pointermove", handlePointerMove, {
        passive: true,
      });

      return () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
        window.removeEventListener("scroll", handleScroll);
        document.body.removeEventListener("pointermove", handlePointerMove);
      };
    }, [handleMove, disabled]);

    return (
      <>
        <div
          className={cn(
            "pointer-events-none absolute -inset-px hidden rounded-[inherit] border opacity-0 transition-opacity duration-700",
            glow && "opacity-100",
            variant === "white" && "border-white",
            disabled && "!block"
          )}
        />
        <div
          ref={containerRef}
          style={
            {
              "--blur": `${blur}px`,
              "--spread": spread,
              "--start": "0",
              "--active": "0",
              "--glowingeffect-border-width": `${borderWidth}px`,
              "--repeating-conic-gradient-times": "5",
              "--gradient": getGradient(variant),
            } as React.CSSProperties
          }
          className={cn(
            "pointer-events-none absolute inset-0 rounded-[inherit] opacity-100 transition-opacity duration-700",
            glow && "opacity-100",
            blur > 0 && "blur-[var(--blur)] ",
            className,
            disabled && "!hidden"
          )}
        >
          <div
            className={cn(
              "glow",
              "rounded-[inherit]",
              'after:content-[""] after:rounded-[inherit] after:absolute after:inset-[calc(-1*var(--glowingeffect-border-width))]',
              "after:[border:var(--glowingeffect-border-width)_solid_transparent]",
              "after:[background:var(--gradient)] after:[background-attachment:fixed]",
              "after:opacity-[var(--active)] after:transition-opacity after:duration-700",
              "after:[mask-clip:padding-box,border-box]",
              "after:[mask-composite:intersect]",
              "after:[mask-image:linear-gradient(#0000,#0000),conic-gradient(from_calc((var(--start)-var(--spread))*1deg),#00000000_0deg,#fff,#00000000_calc(var(--spread)*2deg))]"
            )}
          />
        </div>
      </>
    );
  }
);

GlowingEffect.displayName = "GlowingEffect";

export { GlowingEffect };
