'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

/** Duration for one complete orbital revolution in seconds */
const ORBIT_DURATION_S = 90;

interface EcoNodeData {
  id: string;
  label: string;
  iconSrc: string;
  /** Initial angle around the orbit circle (degrees) */
  angleDeg: number;
  /** Visual theme colors */
  accentColor: string;
  glowRgba: string;
  lightBorder: string;
  lightBg: string;
  lightIconBg: string;
  lightIconColor: string;
  darkIconColor: string;
  staggerDelay: string;
}

const NODES: EcoNodeData[] = [
  {
    id: 'learn',
    label: 'Learn',
    iconSrc: '/images/nodes/learn.png',
    angleDeg: -90, // Top (12 o'clock)
    accentColor: '#F5C842',
    glowRgba: 'rgba(245,200,66,0.35)',
    lightBorder: 'rgba(180,83,9,0.40)',
    lightBg: 'rgba(255,255,255,0.96)',
    lightIconBg: 'rgba(180,83,9,0.12)',
    lightIconColor: '#B45309',
    darkIconColor: '#FCD34D',
    staggerDelay: '0s',
  },
  {
    id: 'invest',
    label: 'Invest',
    iconSrc: '/images/nodes/invest.png',
    angleDeg: -30, // Top-Right (~2 o'clock)
    accentColor: '#22D3EE',
    glowRgba: 'rgba(34,211,238,0.30)',
    lightBorder: 'rgba(2,132,199,0.40)',
    lightBg: 'rgba(255,255,255,0.96)',
    lightIconBg: 'rgba(2,132,199,0.12)',
    lightIconColor: '#0284C7',
    darkIconColor: '#38BDF8',
    staggerDelay: '0.4s',
  },
  {
    id: 'protect',
    label: 'Protect',
    iconSrc: '/images/nodes/protect.png',
    angleDeg: 30, // Bottom-Right (~4 o'clock)
    accentColor: '#60A5FA',
    glowRgba: 'rgba(96,165,250,0.30)',
    lightBorder: 'rgba(37,99,235,0.40)',
    lightBg: 'rgba(255,255,255,0.96)',
    lightIconBg: 'rgba(37,99,235,0.12)',
    lightIconColor: '#2563EB',
    darkIconColor: '#60A5FA',
    staggerDelay: '0.8s',
  },
  {
    id: 'plan',
    label: 'Plan',
    iconSrc: '/images/nodes/plan.png',
    angleDeg: 90, // Bottom (6 o'clock)
    accentColor: '#A78BFA',
    glowRgba: 'rgba(167,139,250,0.30)',
    lightBorder: 'rgba(124,58,237,0.40)',
    lightBg: 'rgba(255,255,255,0.96)',
    lightIconBg: 'rgba(124,58,237,0.12)',
    lightIconColor: '#7C3AED',
    darkIconColor: '#C084FC',
    staggerDelay: '1.2s',
  },
  {
    id: 'save',
    label: 'Save',
    iconSrc: '/images/nodes/save.png',
    angleDeg: 150, // Bottom-Left (~8 o'clock)
    accentColor: '#F472B6',
    glowRgba: 'rgba(244,114,182,0.30)',
    lightBorder: 'rgba(219,39,119,0.40)',
    lightBg: 'rgba(255,255,255,0.96)',
    lightIconBg: 'rgba(219,39,119,0.12)',
    lightIconColor: '#DB2777',
    darkIconColor: '#F472B6',
    staggerDelay: '1.6s',
  },
  {
    id: 'budget',
    label: 'Budget',
    iconSrc: '/images/nodes/budget.png',
    angleDeg: 210, // Top-Left (~10 o'clock)
    accentColor: '#34D399',
    glowRgba: 'rgba(52,211,153,0.30)',
    lightBorder: 'rgba(5,150,105,0.40)',
    lightBg: 'rgba(255,255,255,0.96)',
    lightIconBg: 'rgba(5,150,105,0.12)',
    lightIconColor: '#059669',
    darkIconColor: '#34D399',
    staggerDelay: '2.0s',
  },
];

function getOrbitalDelay(angleDeg: number): string {
  const normalized = ((angleDeg % 360) + 360) % 360;
  const delaySec = -((normalized / 360) * ORBIT_DURATION_S);
  return `${delaySec}s`;
}

interface FinancialLearningEcosystemProps {
  className?: string;
  priority?: boolean;
}

export default function FinancialLearningEcosystem({
  className = '',
}: FinancialLearningEcosystemProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReducedMotion(mediaQuery.matches);

      const handleChange = (e: MediaQueryListEvent) => {
        setPrefersReducedMotion(e.matches);
      };
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    // Restrained, subtle 3D parallax (max 3.5 degrees)
    setTilt({
      rotateX: -(y / (rect.height / 2)) * 3.5,
      rotateY: (x / (rect.width / 2)) * 3.5,
    });
  };

  const handleMouseEnter = () => {
    if (!prefersReducedMotion) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full flex items-center justify-center select-none ${className}`}
      style={{ perspective: '1400px' }}
      role="img"
      aria-label="3D Financial Learning Ecosystem: Learn, Budget, Invest, Save, Protect, and Plan modules orbiting a central glowing Rupee symbol with realistic open book platform and learning community"
    >
      {/* ── LAYER 1: Deep Volumetric Ambient Backlight & Atmosphere (translateZ -120px) ── */}
      <div
        className="pointer-events-none absolute inset-[-8%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(212,164,77,0.20)_0%,rgba(6,182,212,0.06)_45%,transparent_70%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(212,164,77,0.30)_0%,rgba(34,211,238,0.10)_42%,rgba(168,85,247,0.06)_62%,transparent_75%)] blur-[75px] animate-ecosystem-light-sweep"
        style={{ transform: 'translateZ(-120px)' }}
      />

      {/* ── LAYER 2: Central ₹ Pedestal Breathing Core Glow (translateZ -60px) ── */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-[radial-gradient(circle,rgba(245,200,66,0.30)_0%,rgba(212,164,77,0.12)_45%,transparent_70%)] dark:bg-[radial-gradient(circle,rgba(245,200,66,0.40)_0%,rgba(212,164,77,0.18)_50%,transparent_70%)] blur-[48px] animate-ecosystem-glow"
        style={{ transform: 'translateZ(-60px)' }}
      />

      {/* ── LAYER 3: Main 3D World Stage (preserve-3d) ── */}
      <div
        className="relative w-full max-w-[340px] xs:max-w-[380px] sm:max-w-[460px] md:max-w-[520px] lg:max-w-[580px] xl:max-w-[620px] aspect-square flex items-center justify-center animate-ecosystem-enter transition-transform duration-500 ease-out"
        style={{
          transform: isHovered
            ? `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale(1.01)`
            : 'rotateX(0deg) rotateY(0deg) scale(1)',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* ── 3D Scene Root: Container for All Physical Layers ── */}
        <div
          className="relative w-full h-full flex items-center justify-center"
          style={{ transformStyle: 'preserve-3d' }}
        >

          {/* ═════════════════════════════════════════════════════════════════
              BASE PLATFORM: Stepped 3D Platform, Open Book & Environment (translateZ 0px)
              ═════════════════════════════════════════════════════════════════ */}
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{ transform: 'translateZ(0px)', transformStyle: 'preserve-3d' }}
          >
            {/* Outer Grounding Base Disc */}
            <div
              className="absolute w-[86%] h-[86%] rounded-full opacity-90 dark:opacity-80"
              style={{
                background:
                  'radial-gradient(ellipse at 50% 55%, rgba(15,23,42,0.85) 0%, rgba(7,9,15,0.95) 70%, transparent 100%)',
                border: '1px solid rgba(212,172,62,0.18)',
                boxShadow: '0 24px 60px rgba(0,0,0,0.60), 0 0 40px rgba(212,172,62,0.12)',
              }}
            />

            {/* 3D Elliptical Golden Orbit Track Ring (Tilted in 3D perspective) */}
            <div
              className="absolute w-[80%] h-[80%] rounded-full"
              style={{
                border: '1.5px solid rgba(212,172,62,0.35)',
                boxShadow:
                  '0 0 24px rgba(212,172,62,0.20), inset 0 0 24px rgba(212,172,62,0.10)',
                transform: 'rotateX(20deg) translateZ(5px)',
              }}
            />

            {/* Concentric Step Rings of Central Pedestal */}
            <div
              className="absolute w-[52%] h-[52%] rounded-full"
              style={{
                background:
                  'radial-gradient(circle at 45% 45%, rgba(30,41,59,0.95) 0%, rgba(15,23,42,0.98) 75%, #0B1120 100%)',
                border: '2px solid rgba(212,172,62,0.45)',
                boxShadow:
                  '0 12px 32px rgba(0,0,0,0.50), 0 0 24px rgba(212,172,62,0.25), inset 0 2px 6px rgba(255,255,255,0.20)',
                transform: 'translateZ(15px)',
              }}
            />
            <div
              className="absolute w-[36%] h-[36%] rounded-full"
              style={{
                background:
                  'radial-gradient(circle at 45% 40%, rgba(45,55,72,0.90) 0%, rgba(17,24,39,0.98) 80%, #070D18 100%)',
                border: '2px solid rgba(245,200,66,0.60)',
                boxShadow:
                  '0 8px 24px rgba(0,0,0,0.45), 0 0 30px rgba(245,200,66,0.35), inset 0 1px 4px rgba(255,255,255,0.30)',
                transform: 'translateZ(30px)',
              }}
            />

            {/* Open Book 3D Base Glyph (Underneath ₹) */}
            <div
              className="absolute bottom-[28%] flex items-center justify-center gap-1 opacity-75"
              style={{ transform: 'translateZ(38px)' }}
            >
              <div
                className="w-7 h-4 rounded-sm border-b-2 border-l border-accent/60 bg-gradient-to-tr from-accent/20 to-white/10 -rotate-6 shadow-sm"
              />
              <div
                className="w-7 h-4 rounded-sm border-b-2 border-r border-accent/60 bg-gradient-to-tl from-accent/20 to-white/10 rotate-6 shadow-sm"
              />
            </div>
          </div>

          {/* ═════════════════════════════════════════════════════════════════
              CENTRAL ANCHOR: Glowing 3D ₹ Symbol on Cylinder (translateZ 55px)
              ═════════════════════════════════════════════════════════════════ */}
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none z-20"
            style={{ transform: 'translateZ(55px)', transformStyle: 'preserve-3d' }}
          >
            {/* Cylindrical Glass Enclosure Highlight */}
            <div
              className="absolute w-[26%] h-[34%] rounded-2xl backdrop-blur-[2px] opacity-70"
              style={{
                background:
                  'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(212,172,62,0.08) 50%, rgba(0,0,0,0.20) 100%)',
                border: '1px solid rgba(245,200,66,0.35)',
                boxShadow:
                  '0 0 35px rgba(212,172,62,0.30), inset 0 0 20px rgba(255,255,255,0.10)',
                transform: 'translateZ(10px)',
              }}
            />

            {/* Glowing 3D Rupee Badge */}
            <div
              className="relative w-[22%] aspect-square rounded-full flex items-center justify-center animate-ecosystem-float"
              style={{
                background:
                  'radial-gradient(circle at 35% 30%, rgba(255,255,255,0.25) 0%, rgba(245,200,66,0.25) 45%, rgba(180,130,20,0.12) 85%, transparent 100%)',
                border: '2px solid rgba(245,200,66,0.80)',
                boxShadow:
                  '0 0 45px rgba(245,200,66,0.60), 0 0 90px rgba(212,172,62,0.25), inset 0 2px 6px rgba(255,255,255,0.40)',
                transform: 'translateZ(25px)',
              }}
            >
              <span
                className="font-heading font-black text-4xl sm:text-5xl md:text-6xl select-none"
                style={{
                  background:
                    'linear-gradient(160deg, #FFF0B3 0%, #F5C842 35%, #D4AC3E 65%, #8A640A 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter:
                    'drop-shadow(0 4px 12px rgba(180,130,20,0.75)) drop-shadow(0 0 20px rgba(245,200,66,0.50))',
                }}
              >
                ₹
              </span>
            </div>
          </div>

          {/* ═════════════════════════════════════════════════════════════════
              LAYER 5: 6 Physical Orbiting 3D Glass Modules with Exact 3D Visual Icons
              ═════════════════════════════════════════════════════════════════ */}
          {NODES.map((node) => {
            const delay = getOrbitalDelay(node.angleDeg);
            const {
              label,
              iconSrc,
              accentColor,
              glowRgba,
              lightBorder,
              lightBg,
              lightIconBg,
              lightIconColor,
              darkIconColor,
            } = node;

            return (
              // Zero-size center anchor
              <div
                key={node.id}
                className="absolute top-1/2 left-1/2 w-0 h-0"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Forward Orbit Rotation around Center: 0° → 360° */}
                <div
                  className="eco-3d-fwd-orbit"
                  style={{ animationDelay: delay }}
                >
                  {/* Translate along Orbit Radius X and Perspective Depth Z */}
                  <div className="eco-3d-radius-translate">
                    {/* Backward Counter-Rotation: keeps 3D card facing upright */}
                    <div
                      className="eco-3d-bwd-counter"
                      style={{ animationDelay: delay }}
                    >
                      {/* Individual Staggered Micro-Floating */}
                      <div
                        className="eco-3d-card-anchor animate-ecosystem-float"
                        style={{ animationDelay: node.staggerDelay }}
                      >
                        {/* ── 3D Pedestal Base Underneath Module ── */}
                        <div
                          className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[85%] h-3 rounded-full opacity-85"
                          style={{
                            background:
                              'radial-gradient(ellipse, #1E293B 0%, #0F172A 70%, transparent 100%)',
                            border: `1px solid ${accentColor}66`,
                            boxShadow: `0 4px 12px rgba(0,0,0,0.60), 0 0 10px ${glowRgba}`,
                            transform: 'rotateX(55deg) translateZ(-8px)',
                          }}
                        />

                        {/* ── 3D Glass Module Card ── */}
                        <div
                          className="eco-3d-glass-card group backdrop-blur-md transition-all duration-300"
                          style={
                            {
                              '--node-accent': accentColor,
                              '--node-glow': glowRgba,
                              '--node-light-border': lightBorder,
                              '--node-light-bg': lightBg,
                              '--node-light-icon-bg': lightIconBg,
                              '--node-light-icon-color': lightIconColor,
                              '--node-dark-icon-color': darkIconColor,
                            } as React.CSSProperties
                          }
                        >
                          {/* Polished Glass Specular Reflection Highlight */}
                          <div className="pointer-events-none absolute top-0 left-0 right-0 h-[45%] rounded-t-[14px] bg-gradient-to-b from-white/20 via-white/5 to-transparent" />

                          {/* 3D Realistic Icon Enclosure */}
                          <div className="eco-3d-icon-wrap relative flex items-center justify-center rounded-xl mx-auto mb-1.5 overflow-hidden transition-transform duration-300 group-hover:scale-110">
                            <Image
                              src={iconSrc}
                              alt={`${label} 3D icon`}
                              width={38}
                              height={38}
                              className="w-full h-full object-cover rounded-lg drop-shadow-md"
                            />
                          </div>

                          {/* Upright High-Contrast Label */}
                          <p className="eco-3d-label font-bold text-center leading-tight">
                            {label}
                          </p>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </div>
  );
}
