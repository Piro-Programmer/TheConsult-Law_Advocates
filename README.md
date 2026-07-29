# The Consult Law — Next.js

The Consult Law's site rebuilt on the **Advocacy** template's design language.
Content is Consult's, verbatim. Only the presentation changed.

## Stack

- Next.js 16.2 (App Router, Turbopack) · React 19
- TypeScript · Tailwind CSS v4 (CSS-first config in `src/app/globals.css`)
- `motion` for scroll reveals, tabs, accordion, wizard transitions

```bash
npm run dev
```

> **Don't run `next dev` over a production `.next`.** Turbopack dev and
> `next build` share that directory and the dev route manifest gets clobbered —
> every route 404s while the build still succeeds. If that happens,
> `rm -rf .next` and restart.

## Pages — all 21 built

| Route | Notes |
|---|---|
| `/` | 10 sections: Hero (video) · About · Industries · Sectors marquee · How We Work · Advisors · Legal Expertise · Blogs · FAQ · Book a Consultation |
| `/about` | Hero · Legal Expertise · How We Work · CTA |
| `/services` | Numbered service list · "Every service, one click away" · How We Work · FAQ · CTA |
| `/practice-areas` | Four practice cards with sub-tags |
| `/practice-areas/[slug]` | 4 pages — numbered topic breakdown + "Other practices" |
| `/people` | Advisor grid |
| `/people/[slug]` | 2 profiles — split hero, pull-quote, bio, grouped lists |
| `/blogs` | Category chips · post grid · newsletter |
| `/blogs/[slug]` | 3 articles — structured body, author card, newsletter |
| `/contact` | Contact details + form |
| `/book-consultation` | Three-step intake wizard |
| `/disclaimer` `/privacy-policy` `/terms-and-conditions` `/cookie-policy` | Shared long-form template |

Plus generated `/sitemap.xml` (21 URLs) and `/robots.txt`.

## Content layer

`src/lib/` is the seam for a real CMS — swap these modules and the components
don't change.

| Module | Holds |
|---|---|
| `content.ts` | Site chrome, homepage sections, contact details, FAQ |
| `practice-areas.ts` | 4 areas with their numbered topics |
| `people.ts` | 2 advisor profiles |
| `posts.ts` | 3 articles as structured blocks |
| `legal.ts` | 4 legal pages |

## Design system

| Token | Value | Use |
|---|---|---|
| `brand` | `#000000` | dark sections, buttons, accents |
| `ink` | `#0c0603` | body text |
| `ink-deep` | `#0b0b0b` | footer |
| `grey` | `#8e8e8e` | secondary text |
| `cream` | `#f6f4f0` | alternating section background |

`brand` is the single lever for the site's colour — it drives 87 utility
usages across every dark section, button, chip, and accent. It started as the
Advocacy template's deep green `#16322c`; changing that one line to black
recoloured the whole site.

The defining move is the **alternating section rhythm** — green → white → cream
→ green, never two of the same in a row. `LegalExpertise` takes a
`variant="dark" | "light"` prop so it keeps that rhythm wherever it's reused.

Breakpoints (768 / 992 / 1280) are declared in **rem**. Tailwind v4 sorts media
queries to build the cascade; mixing `px` overrides with its `rem` defaults
corrupts that order and lets `sm:` beat `lg:` at wide viewports.

## Forms send mail, not POSTs

The contact form, consultation wizard, and newsletter all compose a `mailto:`.
That's deliberate — the live site's Privacy Policy states submissions are sent
through the visitor's own email client and never stored on a server. Swap in a
Route Handler if that changes.

## Image frames follow the source assets

| Asset | Native size | Frame |
|---|---|---|
| `team/ryan-singh.png` | 398 × 390 | `aspect-square` |
| `team/abhijeet-singh-chauhan.png` | 399 × 390 | `aspect-square` |
| `how-we-work.png` | 610 × 712 | `aspect-6/7` |
| `legal-expertise.png` | 646 × 754 | `aspect-6/7` |

Advocacy's 3:4 and 4:3 frames cropped these badly. `6/7` is their exact native
ratio. Higher-resolution originals would still help — at ~400px the headshots
are soft on retina in a design built around large imagery.

## Recovered from the live client bundle

Two things the live site never server-renders were pulled out of its shipped
JavaScript rather than guessed:

- **All five FAQ answers.** Only the first is in the SSR HTML; the other four
  mount on expand. They were found as `question:"…",answer:"…"` pairs in a
  chunk. This build reproduces the same behaviour — question list in SSR,
  answers hydrated — so only the default-open answer appears in view-source.
- **The real statistics: 50+ clients, 10+ years, 4 industries.** The page
  server-renders `0` because they're count-up targets; the values live in the
  RSC payload as `{"value":50,"suffix":"+"}`. `CountUp` animates them on scroll
  and respects `prefers-reduced-motion`.

## The M&A post's slug breaks prerendering

That post's slug is **244 characters** — its opening paragraph slugified rather
than its title. Prerendering writes one file per slug, giving a 249-char
`.html`. That sits just under the 255-char POSIX limit, so `next build` passes
locally, but Vercel's build-output handler rejects it and the deploy fails at
`onBuildComplete`.

`generateStaticParams` in `src/app/blogs/[slug]/page.tsx` therefore skips slugs
over `MAX_PRERENDER_SLUG` (200). Those render on demand instead — the URL is
unchanged, only the build-time output differs.

**The real fix is upstream:** shorten that slug to something like
`legal-side-of-mergers-and-acquisitions-what-every-ceo-must-know`. Doing so
changes a live URL, so it needs a redirect and is your call.

## Outstanding

- **Wizard steps 2 and 3 are reconstructed.** Step 1's question and options come
  from the live HTML; the later steps only render after interaction, so those
  are a sensible intake flow rather than a copy of theirs.
- **Blog category filtering is display-only** — the chips render but don't
  filter yet.
- **Newsletter posts to `mailto:`** pending the content-platform endpoint.
- `metadataBase`, `sitemap.ts`, and `robots.ts` point at
  `theconsult.vercel.app` — update for the production domain.

## Source

Content was captured from the live deployment page by page, plus a partial
local mirror. Images and `hero.mp4` came from the live site.
