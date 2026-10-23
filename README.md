# Designer Fabrics — Website (Next.js)

The production Designer Fabrics website (the **df** project), migrated from
the static Cloudflare Pages pitch site to Next.js for hosting on Coolify
(Hetzner), alongside the dfhome app and the Visiant portal.

**The design is the approved pitch site, unchanged.** Pages were ported
mechanically from `designer-fabrics-website-pitch/site/`; the stylesheet
(`public/styles.css`) and behavior script (`public/script.js` — mobile menu,
FAQ accordion, scroll reveals, consultation slot picker, Start Your Design
share flow) are the original files, served verbatim. Visible text of every
page was diffed against the static original after the port: identical.

## Stack

- Next.js 15 (App Router) + React 19, `output: "standalone"` — same
  conventions as `designer-fabrics-nextjs` and the Visiant portal.
- Routes: `/`, `/installations`, `/motorization` (all statically prerendered).
- Plain `<a>` navigation on purpose: full page loads, exactly like the static
  site, so `script.js` initializes per page just as it did on Pages.

## Run

```bash
npm install
npm run dev     # local dev
npm run build   # production build
npm run start   # serve the production build (port 3000)
```

## Coolify deploy

1. Create a private GitHub repo `visiant/designer-fabrics-website-nextjs`
   and push this code to `main`.
2. In Coolify: new application from that repo, Nixpacks build
   (`npm run build`), start `npm run start`, port **3000**.
3. Attach the staging domain first, verify, then cut over DNS.

## Cutover TODO (when designerfabricsdenver.com points here)

Canonical, Open Graph, Twitter, sitemap and robots URLs currently reference
`designer-fabrics-website-pitch.visiantwebsolutions.com` — the domain the
approved design was reviewed on. At cutover, replace that host with
`https://www.designerfabricsdenver.com` (or the chosen production host) in:

- `app/page.tsx`, `app/installations/page.tsx`, `app/motorization/page.tsx`
  (metadata exports + the JSON-LD blocks)
- `public/sitemap.xml`, `public/robots.txt`

Also at cutover: the consultation slot picker's booked-slot snapshot in
`public/script.js` is the Oct 2026 demo-calendar snapshot — wire it to
Designer Fabrics' real availability or refresh the snapshot.
