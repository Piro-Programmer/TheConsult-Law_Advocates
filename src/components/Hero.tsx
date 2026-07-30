import Image from "next/image";
import Button from "./Button";
import { hero, industries } from "@/lib/content";

/**
 * Advocacy's split hero, rebuilt to the template's own geometry rather than by
 * eye: a 49% brand panel carrying the decorative arc on the left, the banner
 * photo filling the remaining 51% behind a 69deg wash, and both columns of
 * copy sitting on the section's bottom edge — not vertically centred.
 *
 * Below lg the template stops splitting and stacks: the brand panel becomes a
 * 480px band with the photo directly beneath it, and the copy centres over the
 * seam.
 */
export default function Hero() {
  return (
    /* The top padding is ours, not the template's. Its headline is two lines,
       so its bottom-aligned copy never grows tall enough to reach the fixed
       nav; ours runs to four, and on a short viewport the section outgrows the
       screen and slides the copy behind the header. This reserves the nav's
       height and is inert whenever there is room to spare. */
    <section className="relative flex min-h-[950px] items-end justify-center overflow-hidden pt-[100px] pb-5 lg:min-h-[760px] lg:pb-[50px] xl:min-h-screen xl:pb-[70px]">
      {/* Brand panel — the template's "BG Image Wrapper". The arc lives inside
          it, which is why it stops at the 49% seam instead of bleeding across
          the whole section. */}
      <div className="absolute top-0 left-0 h-[480px] w-full overflow-hidden bg-brand lg:h-full lg:w-[49%]">
        <Image
          src={hero.backgroundShape}
          alt=""
          fill
          priority
          sizes="(min-width: 992px) 49vw, 100vw"
          className="pointer-events-none object-cover"
        />
      </div>

      {/* Banner photo — the template's "Hero Banner Wrapper". Runs to the very
          top so it passes behind the fixed nav, as it does on the original. */}
      <div className="absolute top-[480px] left-0 h-[470px] w-full overflow-hidden lg:top-0 lg:right-0 lg:left-auto lg:h-full lg:w-[51%]">
        <Image
          src={hero.image}
          alt=""
          fill
          priority
          sizes="(min-width: 992px) 51vw, 100vw"
          className="hero-zoom object-cover object-[0%_17.3%] lg:object-[2.3%_30.5%]"
        />
        {/* Advocacy's "BG Gradient" — verbatim from the template */}
        <div className="absolute inset-0 bg-[linear-gradient(69deg,#0c0603_0%,rgba(51,51,51,0)_42%)]" />
      </div>

      {/* Base Container — bottom-aligned, 80px gutters, capped at 1570px */}
      <div className="relative z-[2] mx-auto flex w-full max-w-[1570px] flex-col items-center gap-12 px-5 lg:flex-row lg:items-end lg:justify-between lg:gap-0 xl:px-20">
        {/* Text Content Wrapper */}
        <div className="flex w-full max-w-[550px] flex-col items-center gap-[30px] text-center lg:max-w-[470px] lg:items-start lg:gap-10 lg:text-left xl:max-w-[490px]">
          <div className="flex w-full flex-col items-center gap-5 lg:items-start">
            <h1 className="font-display text-[48px] leading-[1.1] font-light tracking-[-1.5px] text-white lg:text-[52px] xl:text-[70px]">
              {hero.heading}
            </h1>

            <p className="max-w-[360px] font-display text-[18px] leading-[1.5] font-light tracking-[-0.54px] text-white/70">
              {hero.body}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
            <Button href={hero.primaryCta.href} variant="light" size="sm">
              {hero.primaryCta.label}
            </Button>
            <Button href={hero.secondaryCta.href} variant="ghostLight" size="sm">
              {hero.secondaryCta.label}
            </Button>
          </div>
        </div>

        {/* Values Wrapper — pills hug their own text and share a left edge */}
        <ul className="flex w-full flex-col items-center gap-2.5 lg:w-[49%] lg:items-start xl:w-[46%]">
          {industries.map((industry) => (
            <li
              key={industry.slug}
              className="flex w-fit max-w-full items-center gap-[5px] rounded-full border border-white/10 px-5 py-2.5"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 15 15"
                fill="none"
                aria-hidden="true"
                className="shrink-0 text-white/40"
              >
                <path
                  d="M9.875 7.5a2.375 2.375 0 1 1-4.75 0 2.375 2.375 0 0 1 4.75 0Z"
                  fill="currentColor"
                />
              </svg>
              <span className="font-display text-[18px] leading-[1.2] font-light tracking-[-0.9px] text-white lg:text-[24px] xl:text-[30px]">
                {industry.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
