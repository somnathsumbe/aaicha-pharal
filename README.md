# आईचा फराळ | Aai's Pharal — Website

Next.js 14 (App Router) + TypeScript + SCSS Modules. Built from the approved homepage design.

## What's implemented (this handoff)

- Home, Products, Product detail, About, Our Story, How to Order, Delivery,
  Contact, Privacy, Terms — all as real routed pages.
- Shared Header (logo, nav, language switcher, cart icon), Footer, Announcement bar.
- Product catalogue (`src/lib/products.ts`) typed to match the brief's data model —
  weights, availability, placeholder prices (no invented prices).
- Cart via React Context + localStorage (survives refresh), with a review page at `/cart`.
- WhatsApp ordering: order form validates name/mobile/society/flat, builds the
  Marathi message from your brief, and opens `wa.me/919028787219` with it
  prefilled. Number comes from `NEXT_PUBLIC_WHATSAPP_BUSINESS_NUMBER` — change
  it in `.env.local`, not in code.
- i18n scaffold for Marathi (default), Hindi, English with a language switcher;
  product and page copy is still Marathi-only — Hindi/English product strings
  need translation review before switching them on fully.
- SEO: metadata, sitemap.xml, robots.txt.
- Society delivery page reads from `src/lib/societies.ts` (currently empty —
  add your real society list there, or load it from MongoDB later).

## Honestly not done yet

- **Admin dashboard, authentication, MongoDB integration** (phases 9–10 of the
  brief). These need a real database connection string and auth secret that
  only you can provide, and they need to run against a live database to be
  verified — I have not built or tested these against fake/placeholder infra
  so as not to hand you unverified "fake-working" code.
- **Prices** — every variant has `price: null` until you give me real numbers.
- **Hindi/English copy** for products and content pages (headings/nav are
  translated, body copy is not).
- **FSSAI / legal declarations** — not invented. Flagged on Privacy/Terms pages.
- This code has **not been through `npm install` / `next build`** in this
  session — my sandbox has no internet access to fetch npm packages. I
  bracket-balance-checked every file and reviewed the logic by hand, but you
  (or Claude Code, which does have a real dev environment) should run:
  ```
  npm install
  npm run typecheck
  npm run build
  ```
  and fix anything that surfaces before deploying.

## Setup

1. `npm install`
2. `cp .env.example .env.local` and fill in `NEXT_PUBLIC_SITE_URL`; the
   WhatsApp number already defaults to 919028787219.
3. `npm run dev` → http://localhost:3000

## Deployment (Vercel)

1. Push this repo to GitHub.
2. Import into Vercel, set the environment variables from `.env.local`.
3. Deploy. I have not pushed or deployed anything myself — no GitHub/Vercel
   credentials were provided, and your brief says not to deploy without
   authorization.

## Next steps I'd recommend

1. You run `npm install && npm run build` locally (or in Claude Code) and send
   me any errors — I'll fix them directly.
2. Send real prices, your society/delivery list, and any Hindi/English copy
   you want reviewed.
3. Then we do the admin dashboard + MongoDB phase against real credentials.
