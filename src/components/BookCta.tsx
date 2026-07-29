import Image from "next/image";
import Button from "./Button";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { bookCta } from "@/lib/content";

/** Advocacy's closing-CTA treatment: background photo under a heavy wash. */
export default function BookCta() {
  return (
    <section className="relative overflow-hidden bg-brand py-24 md:py-32">
      <Image
        src={bookCta.image}
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-brand/85" />

      <div className="container-base relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionLabel tone="light">{bookCta.label}</SectionLabel>
          <h2 className="mt-7 font-display text-4xl font-light leading-[1.1] tracking-tight text-white md:text-6xl">
            {bookCta.heading}
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-white/70 md:text-lg">
            {bookCta.body}
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Button href={bookCta.primaryCta.href} variant="light">
              {bookCta.primaryCta.label}
            </Button>
            <Button href={bookCta.secondaryCta.href} variant="ghostLight" external>
              {bookCta.secondaryCta.label}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
