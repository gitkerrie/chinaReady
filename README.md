# ChinaReady — Survival Guide for Travelers in China

An English-language, practical survival guide for foreign travelers in China:
mobile payments, VPN & SIM, transport, language, visas and safety. Every tip is
dated so you always know it's current.

Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS** and
**lucide-react**. Content lives as structured data in `src/lib/` — no backend, no
database, fully static and SEO-friendly.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000

### Production build (run this before deploying)

```bash
npm run build
npm run start   # serve the production build locally
```

## Project structure

```
src/
  app/
    page.tsx                  # Home (hero + star-page CTA + guide grid)
    first-24-hours/page.tsx   # "First 24 Hours" star page
    guides/[slug]/page.tsx    # Guide detail template (TL;DR -> steps -> FAQ)
  components/
    illustrations/            # Inline SVG art (Hero / themes / journey)
    GuideCard.tsx, Icon.tsx, LastUpdated.tsx, SiteHeader/Footer.tsx
  lib/
    guides.ts                 # The 6 survival guides (content + lastUpdated)
    first24.ts                # First-24-hours checklist
```

To edit content, change `src/lib/guides.ts` and bump each guide's `lastUpdated`.

## Deploy to Vercel (Git workflow)

### 1. Push the project to GitHub

```bash
git init
git add .
git commit -m "Initial commit: China travel survival guide"

# Create an EMPTY repo on github.com (New repository, do NOT add a README),
# then link and push:
git remote add origin git@github.com:<your-username>/<repo-name>.git
git branch -M main
git push -u origin main
```

### 2. Import into Vercel

1. Go to https://vercel.com -> **Add New... -> Project**.
2. **Import** the GitHub repository you just pushed.
3. Vercel auto-detects the **Next.js** framework preset — leave all build
   settings as default (`npm run build`, output handled automatically).
4. Click **Deploy**.

That's it. Vercel builds the app and gives you a `https://<project>.vercel.app`
URL. Every future `git push` to `main` redeploys automatically.

> No `vercel.json` is needed — Vercel natively supports Next.js App Router.

## Before going live

Visa, payment and entry rules in China change frequently. Verify time-sensitive
details (especially the visa guide) against official sources and update the
`lastUpdated` date in `src/lib/guides.ts`. Accuracy + freshness is this site's
whole value proposition.
