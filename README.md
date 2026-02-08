# Alphabase marketing site (Mercury-inspired)

This is a clean, Vercel-ready Next.js + Tailwind site styled with a Mercury-like design system:
off-white paper background, deep navy dark mode, periwinkle accent, rounded cards, soft shadows,
and airy typography.

## Pages

- `/` marketing homepage
- `/demo` request a demo (multi-step form)
- `/pricing` pricing
- `/signin` sign in (Sara AI + EHR Platform org lookup)

## Local dev

```bash
npm install
npm run dev
```

## Sign in

- **Sara AI** is wired to **NextAuth** endpoints (`/api/auth/*`). If NextAuth isn’t configured yet, the UI will show a helpful message.
- **EHR Platform** org lookup: enter `EHRDemo` to open `https://demo.alphabase.co` in a new tab; any other org ID shows “ID not found”.

## Deploy to Vercel

1. Push this repo to GitHub.
2. In Vercel: **New Project** → import repo → deploy.
3. Optional: wire the demo form:
   - `/app/api/lead/route.ts` currently logs and redirects.
   - Replace with your CRM/email integration.

## Notes

- All copy is original and safe to customize.
- Replace the demo UI content with real screenshots when ready.
