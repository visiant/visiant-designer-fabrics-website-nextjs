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

## Cutover status

**2026-10-23 — URL flip DONE.** Canonical, Open Graph, Twitter, sitemap,
robots and JSON-LD URLs now reference `https://www.designerfabricsdenver.com`
(the host the live site already canonicalizes to — the apex 301s to www).

**Remaining (Jeff's side):** attach `www.designerfabricsdenver.com` (and the
apex) to the Coolify application and point DNS at the Hetzner host
(5.78.214.13); the apex should 301 to www as it does today. Verify HTTPS
after the move.

**Post-launch note:** the consultation slot picker's booked-slot snapshot in
`public/script.js` is the Oct 2026 demo-calendar snapshot — wire it to
Designer Fabrics' real availability or refresh the snapshot.
