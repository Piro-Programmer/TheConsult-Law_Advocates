/** Long-form typography for legal pages and blog articles. */
export default function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="
        max-w-3xl
        [&_h2]:mt-14 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-light
        [&_h2]:tracking-tight [&_h2]:text-ink md:[&_h2]:text-3xl
        [&_h3]:mt-11 [&_h3]:font-display [&_h3]:text-lg [&_h3]:font-normal
        [&_h3]:text-ink md:[&_h3]:text-xl
        [&_p]:mt-5 [&_p]:text-base [&_p]:leading-[1.75] [&_p]:text-grey
        [&_ul]:mt-5 [&_ul]:space-y-2.5
        [&_li]:relative [&_li]:pl-6 [&_li]:text-base [&_li]:leading-[1.7] [&_li]:text-grey
        [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:top-[0.7em]
        [&_li]:before:h-1.5 [&_li]:before:w-1.5 [&_li]:before:rounded-full
        [&_li]:before:bg-brand/40
        [&_*:first-child]:mt-0
      "
    >
      {children}
    </div>
  );
}
