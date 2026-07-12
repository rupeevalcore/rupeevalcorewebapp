# RupeeValcore Release Preparation Report

Date: 2026-07-12

## Local Validation

- `npm run lint`: passed with zero ESLint errors.
- `npm run type-check`: passed with zero TypeScript errors.
- `npm run build`: passed with zero warnings.
- Fresh local dev server: `http://127.0.0.1:3008`.

## Route Verification

All checked routes returned `200` locally:

- `/`
- `/schools`
- `/colleges`
- `/corporate-financial-wellness`
- `/individual-learning`
- `/ai`
- `/robots.txt`
- `/sitemap.xml`
- `/images/founder-shanthi-chitrarasu.png`

## Build Output Snapshot

- Shared first-load JS: `158 kB`.
- Homepage first-load JS: `207 kB`.
- Schools first-load JS: `207 kB`.
- Colleges first-load JS: `207 kB`.
- Corporate first-load JS: `157 kB`.
- Individual first-load JS: `157 kB`.
- AI first-load JS: `143 kB`.

## Completed Release Items

- Added reusable analytics event utility.
- Added optional Google Analytics 4 loading through `NEXT_PUBLIC_GA_ID`.
- Added optional Microsoft Clarity loading through `NEXT_PUBLIC_CLARITY_ID`.
- Added `contact_modal_opened`, selector, selection, proposal, and file download tracking hooks.
- Updated CSP to allow GA and Clarity endpoints.
- Added `robots.txt` and `sitemap.xml` App Router metadata routes.
- Added explicit `npm run type-check` script.
- Removed the build warning caused by an unused variable in `beams-background.tsx`.
- Preserved production source maps disabled in `next.config.ts`.
- Verified `.env*`, `node_modules`, `.next`, `out`, and build artifacts are ignored.

## Security Scan

Static scan checked for common secret/API key patterns, console statements, unsafe HTML, and eval usage.

Findings:

- No exposed GA placeholder remains in runtime layout.
- No `console.*` statements detected in scanned source.
- No `dangerouslySetInnerHTML` usage detected in scanned source.
- No `eval(` usage detected.
- No obvious secrets or private keys detected in scanned source.

False-positive scan matches:

- `Ask-Me-Anything` copy in `individual-learning/page.tsx`.
- Tailwind/CSS mask strings in `glowing-effect.tsx`.

## External Validation Still Required

These require live services or browser tooling not completed in this local pass:

- Lighthouse scores for all pages.
- Android Chrome, Samsung Internet, and iPhone Safari device QA.
- Google Form submission and Google Sheet lead verification.
- GA4 and Clarity dashboard verification after production environment IDs are configured.
- Fresh-clone build.

## Production Validation

Git status:

- Local branch: `main`.
- Local commit before deployment trigger: `ea5e0fb`.
- Deployment trigger commit pushed: `f0c8cca`.
- `origin/main`: synchronized with local `main`.

Production HTTP checks on `https://www.rupeevalcore.in`:

- `/`: `200`
- `/schools`: `200`
- `/colleges`: `200`
- `/corporate-financial-wellness`: `200`
- `/individual-learning`: `200`
- `/ai`: `200`
- `/robots.txt`: `200`
- `/sitemap.xml`: `200`

Production deployment issue:

- The live homepage is still serving an older static deployment with `Last-Modified: Thu, 02 Jul 2026 19:15:38 GMT`.
- The production sitemap still contains legacy routes such as `/financial-literacy-workshop-chennai` instead of the current App Router sitemap routes.
- The live response is missing app-level security headers expected from the current `next.config.ts`, including `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, and `Content-Security-Policy`.
- This indicates Vercel/custom-domain production is not currently serving the latest `origin/main` release commit, despite GitHub being updated.

Required deployment action:

- Inspect the Vercel project connected to `rupeevalcore.in`.
- Confirm it points to `rupeevalcore/rupeevalcorewebapp` and branch `main`.
- Redeploy commit `f0c8cca` or reconnect the correct GitHub repository/branch.
- Configure `NEXT_PUBLIC_GA_ID` and `NEXT_PUBLIC_CLARITY_ID` in Vercel production environment variables before final analytics validation.
- Re-run production header, sitemap, and Lighthouse validation after redeploy.

## Release Status

Local code validation: passed.

Production readiness: codebase is locally release-ready, but production is not yet serving the latest release commit.
