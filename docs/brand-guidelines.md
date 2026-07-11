# RupeeValcore Brand Guidelines v1.0

> Last updated: 2026-07-11
> Status: Active
> Scope: Financial Literacy & AI Education Platform

## Quick Reference

| Element | Value | Description |
|---------|-------|-------------|
| Primary Color | #635BFF | Stripe Blurple (Premium Tech) |
| Secondary Color | #00D4B2 | Mint/Teal (AI & Wealth) |
| Accent Color | #F59E0B | Amber/Gold (Rupee/Currency Accent) |
| Primary Font | Outfit | Modern, geometric sans-serif (Headings) |
| Body Font | Inter | Highly readable, accessible UI font |
| Voice | Empowering, Cutting-edge, Trustworthy, Clear | |

---

## 1. Color Palette

Our color palette is inspired by Apple's minimalist precision and Stripe's vibrant tech aesthetics. It is designed to be highly accessible and visually striking in both dark and light modes.

### Primary Colors

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Stripe Blurple | #635BFF | rgb(99,91,255) | Primary CTAs, active states, key branding |
| Midnight Indigo | #0A0F26 | rgb(10,15,38) | Light mode headings, dark mode primary background |

### Secondary Colors

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Mint Teal | #00D4B2 | rgb(0,212,178) | AI indicators, success states, subtle accents |
| Slate Dark | #0F172A | rgb(15,23,42) | Light mode body text, dark mode surface container |

### Neutral Palette

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Background Light | #F8FAFC | rgb(248,250,252) | Light mode page background |
| Surface Light | #FFFFFF | rgb(255,255,255) | Light mode cards and components |
| Text Primary | #0F172A | rgb(15,23,42) | Headings and primary text in light mode |
| Text Secondary | #475569 | rgb(71,85,105) | Subtext and captions |
| Border Light | #E2E8F0 | rgb(226,232,240) | Dividers, borders in light mode |

### Accent Colors

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Rupee Gold | #F59E0B | rgb(245,158,11) | Financial metrics, highlights, wealth indicators |
| AI Violet | #8B5CF6 | rgb(139,92,246) | Secondary highlights, AI-powered feature indicators |

---

## 2. Typography

We pair a clean, expressive geometric sans-serif for headings (Outfit) with a highly readable workhorse for UI/body copy (Inter) to match Apple's editorial quality.

### Font Stack

```css
--font-heading: 'Outfit', system-ui, -apple-system, sans-serif;
--font-body: 'Inter', system-ui, -apple-system, sans-serif;
--font-mono: 'JetBrains Mono', monospace;
```

### Type Scale

| Element | Size (Desktop) | Size (Mobile) | Weight | Line Height |
|---------|----------------|---------------|--------|-------------|
| Display | 56px | 38px | 800 | 1.1 |
| H1 | 40px | 30px | 700 | 1.2 |
| H2 | 32px | 24px | 600 | 1.25 |
| H3 | 24px | 20px | 600 | 1.3 |
| Body Large | 18px | 18px | 400 | 1.55 |
| Body | 16px | 16px | 400 | 1.5 |
| Small | 14px | 14px | 500 | 1.45 |
| Caption | 12px | 12px | 400 | 1.4 |

---

## 3. Voice & Tone

### Brand Personality

* **Empowering**: We make complex financial and AI concepts feel simple, giving users the confidence to take control of their wealth and intelligence.
* **Cutting-edge**: We blend modern AI technology with timeless financial literacy, presenting ourselves as the future of education.
* **Trustworthy**: As a financial learning resource, we prioritize accuracy, safety, and rigorous design to build long-term trust.
* **Clear**: We avoid unnecessary jargon, explaining everything in a structured, visual-first format.

---

## 4. Spacing & Spacers (8pt Rhythm)

We adhere strictly to a 4px/8px grid system to ensure visual balance, clean alignment, and mobile responsiveness.

| Token | Value | Usage |
|-------|-------|-------|
| space-2xs | 4px | Icon-to-text gaps |
| space-xs | 8px | Button padding-y, card inner spacing |
| space-sm | 12px | Inner component margins |
| space-md | 16px | Button padding-x, standard gap |
| space-lg | 24px | Card padding, standard element grid gap |
| space-xl | 32px | Large sections or mobile padding |
| space-2xl | 48px | Desktop section gaps |
| space-3xl | 64px | Hero section vertical padding |

---

## 5. Border Radius (Apple-Inspired Softness)

We use rounded corners to soften the tech brand and provide a premium, modern feel.

| Element | Radius |
|---------|--------|
| Buttons | 8px (md) |
| Cards / Dialogs | 16px (2xl) |
| Inputs / Small Controls | 8px (md) |
| Badges / Tags | 9999px (full) |

---

## 6. Image & Assets Guidelines

- **Icons**: Always use outlined vector icons (e.g., Lucide-React or Heroicons). Inconsistent icon line-weights and filled icons are prohibited except on active states.
- **Gradients**: Use subtle, multi-color mesh gradients for AI/tech sections (e.g., Violet to Mint to Blurple) but avoid over-saturating. Let whitespace balance the vibrant accents.
- **Mockups**: Use Apple-style glassmorphic mockups and clean code snippets in dark mode blocks.
