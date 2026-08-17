import * as React from "react";
import { cn } from "@/lib/utils";

type ShootingStarsGridSpeed = "slow" | "normal" | "fast" | number;

export type ShootingStarsGridProps = {
  children?: React.ReactNode;
  starCount?: number;
  shootingStarCount?: number;
  gridSize?: number;
  speed?: ShootingStarsGridSpeed;
  glow?: boolean;
  className?: string;
  contentClassName?: string;
  showGrid?: boolean;
  showStaticStars?: boolean;
  reducedMotionFallback?: boolean;
  interactive?: boolean;
};

type StaticStar = {
  x: number;
  y: number;
  size: number;
  opacity: number;
  delay: number;
  duration: number;
};

type ShootingStar = {
  axis: "horizontal" | "vertical";
  line: number;
  start: string;
  end: string;
  length: number;
  delay: number;
  duration: number;
  repeatDelay: number;
  direction: 1 | -1;
};

const SPEED_SCALE: Record<Exclude<ShootingStarsGridSpeed, number>, number> = {
  slow: 1.25,
  normal: 1,
  fast: 0.72,
};

function seeded(index: number, salt: number) {
  const value = Math.sin(index * 91.73 + salt * 37.11) * 10000;
  return value - Math.floor(value);
}

function createStaticStars(count: number): StaticStar[] {
  return Array.from({ length: count }, (_, index) => ({
    x: seeded(index, 1) * 100,
    y: seeded(index, 2) * 100,
    size: 1 + seeded(index, 3) * 2.4,
    opacity: 0.16 + seeded(index, 4) * 0.44,
    delay: seeded(index, 5) * 4,
    duration: 2.4 + seeded(index, 6) * 3.2,
  }));
}

function createShootingStars(count: number): ShootingStar[] {
  const horizontalLines = [3, 5, 7, 9, 11, 13, 16, 19];
  const verticalLines = [2, 4, 6, 8, 11, 14, 17, 20, 23];

  return Array.from({ length: count }, (_, index) => {
    const axis = index % 3 === 1 ? "vertical" : "horizontal";
    const direction = index % 2 === 0 ? 1 : -1;
    const lanes = axis === "horizontal" ? horizontalLines : verticalLines;

    return {
      axis,
      line: lanes[index % lanes.length],
      start: direction === 1 ? "-18%" : "112%",
      end: direction === 1 ? "112%" : "-18%",
      length: 86 + seeded(index, 15) * 132,
      delay: seeded(index, 16) * 7 + index * 0.65,
      duration: 1.65 + seeded(index, 17) * 1.6,
      repeatDelay: 4.8 + seeded(index, 18) * 6.2,
      direction,
    };
  });
}

function getSpeedScale(speed: ShootingStarsGridSpeed) {
  return typeof speed === "number" ? Math.max(0.35, speed) : SPEED_SCALE[speed];
}

function GridRunner({
  runner,
  index,
  speedScale,
}: {
  runner: ShootingStar;
  index: number;
  speedScale: number;
}) {
  const isHorizontal = runner.axis === "horizontal";
  const linePosition = `calc(var(--shooting-stars-grid-size) * ${runner.line})`;
  const gradientDirection = isHorizontal
    ? runner.direction === 1
      ? "90deg"
      : "270deg"
    : runner.direction === 1
      ? "180deg"
      : "0deg";

  return (
    <span
      className={cn("shooting-star-runner absolute rounded-full", index > 4 && "max-sm:hidden")}
      style={
        {
          "--runner-start": runner.start,
          "--runner-end": runner.end,
          "--runner-line": linePosition,
          "--runner-duration": `${runner.duration * speedScale}s`,
          "--runner-delay": `${runner.delay}s`,
          "--runner-repeat-delay": `${runner.repeatDelay * speedScale}s`,
          left: isHorizontal ? runner.start : linePosition,
          top: isHorizontal ? linePosition : runner.start,
          width: isHorizontal ? runner.length : 1,
          height: isHorizontal ? 1 : runner.length,
          background: `linear-gradient(${gradientDirection}, transparent 0%, rgba(8,145,178,0.14) 18%, rgba(103,232,249,0.92) 52%, rgba(255,255,255,0.96) 58%, transparent 100%)`,
          boxShadow: "0 0 16px rgba(6,182,212,0.46), 0 0 28px rgba(148,163,184,0.18)",
          animationName: isHorizontal ? "shooting-star-horizontal" : "shooting-star-vertical",
        } as React.CSSProperties
      }
    />
  );
}

export function ShootingStarsGrid({
  children,
  starCount = 48,
  shootingStarCount = 6,
  gridSize = 44,
  speed = "normal",
  glow = true,
  className,
  contentClassName,
  showGrid = true,
  showStaticStars = true,
}: ShootingStarsGridProps) {
  const staticStars = createStaticStars(Math.max(0, Math.min(starCount, 90)));
  const shootingStars = createShootingStars(Math.max(0, Math.min(shootingStarCount, 10)));
  const speedScale = getSpeedScale(speed);

  return (
    <section
      className={cn(
        "group/shooting-stars relative isolate min-h-[520px] w-full overflow-hidden border-none text-zinc-950 dark:text-white bg-transparent",
        className,
      )}
      style={
        {
          "--shooting-stars-grid-size": `${gridSize}px`,
        } as React.CSSProperties
      }
    >
      {showGrid && (
        <div
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute inset-0 -z-30 opacity-60",
            "[background-image:linear-gradient(to_right,rgba(196,146,42,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(196,146,42,0.06)_1px,transparent_1px)]",
            "[background-size:var(--shooting-stars-grid-size)_var(--shooting-stars-grid-size)]",
            "dark:[background-image:linear-gradient(to_right,rgba(255,255,255,0.075)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.075)_1px,transparent_1px)]",
          )}
        />
      )}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.35)_0%,rgba(248,249,252,0.80)_60%,rgba(241,245,249,0.96)_100%)] dark:bg-[radial-gradient(circle_at_center,transparent_0%,rgba(7,9,15,0.22)_52%,rgba(7,9,15,0.96)_100%)]"
      />

      {glow && (
        <div
          aria-hidden="true"
          className="shooting-stars-glow pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_30%,rgba(196,146,42,0.12),transparent_40%),radial-gradient(circle_at_72%_72%,rgba(6,182,212,0.06),transparent_35%)] dark:bg-[radial-gradient(circle_at_50%_30%,rgba(34,211,238,0.18),transparent_34%),radial-gradient(circle_at_72%_72%,rgba(168,85,247,0.12),transparent_30%)]"
        />
      )}

      {showStaticStars && (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          {staticStars.map((star, index) => (
            <span
              key={index}
              className={cn(
                "shooting-static-star absolute rounded-full bg-accent/40 shadow-[0_0_8px_rgba(196,146,42,0.25)] dark:bg-white dark:shadow-[0_0_12px_rgba(255,255,255,0.55)]",
                index > 34 && "max-sm:hidden",
              )}
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: star.size,
                height: star.size,
                opacity: star.opacity,
                animationDuration: `${star.duration}s`,
                animationDelay: `${star.delay}s`,
              }}
            />
          ))}
        </div>
      )}

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        {shootingStars.map((star, index) => (
          <GridRunner key={index} runner={star} index={index} speedScale={speedScale} />
        ))}
      </div>

      <div className={cn("relative z-10 flex min-h-[inherit] w-full items-center justify-center px-6 py-16 sm:px-10", contentClassName)}>
        {children}
      </div>
    </section>
  );
}

export default ShootingStarsGrid;
