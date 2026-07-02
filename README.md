# Duban Ronald

Marketing site for Duban Ronald, a paid media agency running Meta and Google Ads for business owners who are spending on ads and not seeing the leads to show for it. Live at [dubanronald.com](https://dubanronald.com).

The pitch is simple: ad spend isn't the same as lead generation. Most accounts leak qualified buyers somewhere between the click and the contact form, and the site's job is to make that case fast, then get someone to write in.

## What's in the box

- Bilingual routing, English at `/en` and Spanish at `/es`, plus a dedicated `/real-estate` landing page for that vertical
- Meta Pixel and Meta Conversions API wired server-side through `app/api/meta/capi`, so conversion events survive ad blockers and iOS tracking limits
- GSAP-driven scroll sections and a hand-rolled mesh gradient background instead of a stock hero image
- Cormorant Garamond for display type against Inter for body copy, on a warm analog palette (cream, deep teal, burnt orange) instead of the default SaaS blue-on-white

## Stack

- Next.js 16, App Router
- React 19
- TypeScript, strict mode
- Tailwind CSS v4 (`@import "tailwindcss"` in `globals.css`, no config file)
- GSAP and Motion for animation
- Deployed on Vercel

## Running it locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`. It redirects to `/en` by default.

```bash
npm run build       # production build
npm run typecheck   # tsc, no emit
npm run lint        # eslint
```

## Structure

```
app/
  en/                English routes
  es/                Spanish routes
  real-estate/       real estate landing page
  api/meta/capi/     Meta Conversions API endpoint
components/          Hero, Nav, Footer, Audience, Credibility, CTA, HowItWorks, WhatWeDo...
lib/                 Meta Pixel helpers
copy/                homepage copy source, English and Spanish
```

Built and maintained by [Santiago Vittor](https://github.com/santiagovittor).
