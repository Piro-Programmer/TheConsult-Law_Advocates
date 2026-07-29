import Button from "./Button";
import { hero, industries } from "@/lib/content";

/**
 * Advocacy's split hero: solid panel on the left carrying the copy, media
 * bleeding off the right edge, and the pillar list overlaid on that media.
 * Consult's video takes the place of Advocacy's still.
 *
 * Below lg there is no room to split, so the video becomes a full-bleed
 * background under a wash and the pillars sit beneath the copy.
 */
function Pillars({ overlay = false }: { overlay?: boolean }) {
  return (
    <ul className={overlay ? "space-y-3" : "mt-12 space-y-2.5"}>
      {industries.map((industry) => (
        <li
          key={industry.slug}
          className="flex items-center gap-3 rounded-full border border-white/25 bg-black/20 px-6 py-3.5 backdrop-blur-sm"
        >
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white/70" />
          <span
            className={`font-display font-light text-white ${
              overlay ? "text-lg xl:text-2xl" : "text-base"
            }`}
          >
            {industry.title}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-brand">
      {/* Soft arc on the panel, echoing Advocacy's background shape */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-0 h-[120vh] w-[80vw] rounded-full bg-white/[0.03] lg:w-[45vw]"
      />

      {/* Media — full bleed below lg, 51% of the viewport from lg up, matching
          the template's `sizes` (calc(100vw * 0.51) above 992px). Anchored on
          the same axis as the copy below so the two can never overlap. */}
      <div className="absolute inset-0 lg:left-[49%]">
        <video
          className="hero-zoom h-full w-full object-cover"
          src={hero.video}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />
        {/* Wash: heavy on small screens where copy sits over the video,
            a soft left-edge blend once the layout splits */}
        <div className="absolute inset-0 bg-brand/70 lg:hidden" />
        <div className="absolute inset-0 hidden bg-gradient-to-r from-brand via-brand/30 to-transparent lg:block" />

        {/* Pillars overlaid on the media, as in the template */}
        <div className="absolute inset-x-8 bottom-16 hidden xl:bottom-24 lg:block">
          <Pillars overlay />
        </div>
      </div>

      {/* Copy — left half of the viewport from lg up. The max()/calc keeps its
          left edge aligned to the 1280px container gutter on wide screens
          while never dropping below the normal page padding. */}
      <div className="relative flex min-h-[92vh] items-center px-5 py-32 md:px-10 lg:w-[49%] lg:pl-[max(2.5rem,calc((100vw-1280px)/2+2.5rem))] lg:pr-12">
        <div className="w-full">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] text-white">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                <path
                  d="M5 0 6.2 3.8 10 5 6.2 6.2 5 10 3.8 6.2 0 5l3.8-1.2z"
                  fill="currentColor"
                />
              </svg>
              {hero.eyebrow}
            </span>
            <span className="rounded-full border border-white/20 px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] text-white/70">
              {hero.location}
            </span>
          </div>

          <h1 className="mt-7 font-display text-5xl font-light leading-[1.05] tracking-tight text-white md:text-6xl xl:text-7xl">
            {hero.heading}
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
            {hero.body}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button href={hero.primaryCta.href} variant="light">
              {hero.primaryCta.label}
            </Button>
            <Button href={hero.secondaryCta.href} variant="ghostLight">
              {hero.secondaryCta.label}
            </Button>
          </div>

          {/* Stacked beneath the copy until the layout splits */}
          <div className="lg:hidden">
            <Pillars />
          </div>
        </div>
      </div>
    </section>
  );
}
