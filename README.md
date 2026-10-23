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

**2026-10-23 — INTERIM step (current): the Coolify app takes over the pitch
subdomain** `designer-fabrics-website-pitch.visiantwebsolutions.com`. The
static Cloudflare Pages site retires; this app serves that URL instead.
Canonical/OG/Twitter/JSON-LD/sitemap/robots URLs therefore reference the
pitch host, exactly as the static site did. Jeff's steps: add the pitch
subdomain to the Coolify app's domains, change its Cloudflare DNS record
from the proxied CNAME to pages.dev to a proxied A record → 5.78.214.13,
and remove the custom domain from the Pages project (the same sequence the
dfhome app used on 2026-10-18).

**LATER — production cutover to www.designerfabricsdenver.com** (the host
the live site already canonicalizes to; apex 301s to www). Not yet: the
client's domain move is coordinated with Designer Fabrics. When it's time,
flip every `https://designer-fabrics-website-pitch.visiantwebsolutions.com`
reference in `app/page.tsx`, `app/installations/page.tsx`,
`app/motorization/page.tsx`, `public/sitemap.xml` and `public/robots.txt`
to `https://www.designerfabricsdenver.com`, push, then attach the production
domains in Coolify and point the production DNS at 5.78.214.13 (MX records
untouched — their mail is Yahoo-hosted).

**Post-launch note:** the consultation slot picker's booked-slot snapshot in
`public/script.js` is the Oct 2026 demo-calendar snapshot — wire it to
Designer Fabrics' real availability or refresh the snapshot.
