# CLAUDE.md — dubanronald

## Project

Marketing agency website for Duban Ronald — a digital advertising agency
serving global clients. Primary services: paid media (Meta, Google Ads),
landing page creation, and performance reporting.

Target audience: English-speaking business owners worldwide looking for
measurable results from paid advertising. Spanish version exists under /es.

---

## Stack

- Next.js 16 App Router
- React 19
- TypeScript strict
- Tailwind CSS v4 via @tailwindcss/postcss — no tailwind.config.ts
- Geist font
- Meta Pixel and Meta Conversions API integrated
- Vercel target

Tailwind v4 uses @import "tailwindcss" in globals.css.
Tokens live in :root CSS variables, referenced as [var(--token)] in classes.
Do not create tailwind.config.ts.

---

## Structure

Read the actual file tree before assuming where anything lives.
Key locations visible in the project:

- app/ — App Router root, includes layout.tsx, globals.css, sitemap.ts,
  robots.ts, page.tsx
- app/en/ and app/es/ — internationalized routes
- app/real-estate/ — sub-page for real estate niche
- app/api/meta/capi/ — Meta Conversions API server route
- app/analytics-tracking/ — analytics page
- components/ — Audience, ContactLinks, Credibility, CTA, Footer,
  Hero, MetaPixelPageView, Nav, Process
- lib/metaPixel.ts — Meta Pixel utilities

Before editing any file, read it first. Do not assume its contents.

---

## Commands

- npm run dev — local dev server
- npm run build — production build
- npm run typecheck — tsc, run before declaring done
- npm run lint — eslint

Always run npm run typecheck before stopping.
Never declare a task done if typecheck fails.

---

## Code Style

- TypeScript strict, no any, no type assertions without justification
- ES modules only, never require()
- Destructure imports
- No unused variables, no dead code, no commented-out blocks
- No console.log in committed code
- PascalCase for components, camelCase for utilities

---

## CSS Rules

Color tokens in :root inside globals.css.
Reference as var(--name), never hardcode hex values in components.
Read globals.css before adding any new token or class.
Do not duplicate token definitions.

---

## Session Rules

Every session starts by reading this file.
Use context7 when touching Next.js or Tailwind APIs.
Use /plan before sessions touching multiple files or creating components.
Use /compact when context grows but prior work is still relevant.
Use /clear only when starting a completely unrelated task.
One concern per session. Split if a task has multiple concerns.

---

## Karpathy Principles

No Silent Assumptions
State assumptions before acting. If uncertain, ask. If multiple
interpretations exist, present them. If simpler approach exists, say so.
Stop when confused and name what is unclear.

Minimal Code
Minimum code that solves the problem. Nothing speculative. No unrequested
features. No abstractions for single-use code. If 50 lines work, do not
write 200. Ask: would a senior engineer call this overcomplicated?

Surgical Changes
Touch only what the task requires. Every changed line traces to the request.
Do not refactor while fixing. Do not rename what was not mentioned.
Do not clean up code outside the task scope.

Goal-Driven Execution
Define success criteria before starting. Loop until verified.
Weak criteria require intervention. Strong criteria enable independent work.

---

## Verification Before Stopping

- npm run typecheck passes with zero errors
- npm run build completes without errors
- Browser preview checked at 390px and 1440px
- No placeholder text shipped
- No hardcoded values that belong in constants or lib files

---

## Do Not

- Install dependencies without asking first
- Modify globals.css without reading it first
- Create tailwind.config.ts
- Add console.log
- Commit .env files
- Touch files outside the current task scope
- Assume file structure — read it first