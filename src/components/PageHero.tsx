import SectionLabel from "./SectionLabel";

/** Dark inner-page hero, matching the Advocacy treatment used on /about. */
export default function PageHero({
  label,
  title,
  strapline,
  body,
  children,
}: {
  label: string;
  title: string;
  strapline?: string;
  body?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-brand pt-40 pb-24 md:pt-48 md:pb-28">
      <div className="absolute inset-0 bg-gradient-to-t from-brand via-brand/60 to-brand/30" />
      <div className="container-base relative">
        <SectionLabel tone="light">{label}</SectionLabel>
        <h1 className="mt-7 max-w-4xl font-display text-4xl font-light leading-[1.08] tracking-tight text-white md:text-6xl">
          {title}
        </h1>
        {strapline && (
          <p className="mt-4 max-w-3xl font-display text-xl font-light text-white/80 md:text-2xl">
            {strapline}
          </p>
        )}
        {body && (
          <p className="mt-7 max-w-3xl text-base leading-relaxed text-white/70 md:text-lg">
            {body}
          </p>
        )}
        {children && <div className="mt-9">{children}</div>}
      </div>
    </section>
  );
}
