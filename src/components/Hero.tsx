import Button from "./Button";
import { hero, industries } from "@/lib/content";

export default function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-end overflow-hidden bg-brand pt-32 pb-16">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={hero.video}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      {/* Green wash + bottom fade, matching the Advocacy hero treatment */}
      <div className="absolute inset-0 bg-brand/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand via-brand/40 to-transparent" />

      <div className="container-base relative">
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

        <h1 className="mt-7 max-w-4xl font-display text-5xl font-light leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
          {hero.heading}
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
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

        {/* Advocacy's hero pillar strip, carrying Consult's four practices */}
        <ul className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/15 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => (
            <li
              key={industry.slug}
              className="flex items-center gap-3 bg-brand/60 px-6 py-5 backdrop-blur-sm"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="m3 8.5 3.2 3.2L13 5"
                  stroke="#fff"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-sm font-medium text-white">
                {industry.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
