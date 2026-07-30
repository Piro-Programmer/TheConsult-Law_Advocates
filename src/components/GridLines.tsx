/**
 * Advocacy's "Lines Wrapper": faint 2px verticals pinned to the section's full
 * height, spread across the same 1570px container as the content so they line
 * up with the columns sitting on top of them.
 *
 * The template puts one of these in both the values and the statistics section,
 * which is what makes the ruling look continuous down the page — it is two
 * separate sets meeting where the sections do, not one tall element.
 *
 * `count` should be the number of content columns plus one, so a line lands on
 * each column's leading edge and the last closes the right gutter. Advocacy runs
 * five for its four statistics; we run four for three.
 *
 * Hidden below lg, as the template hides its own — once the columns stack, the
 * ruling no longer corresponds to anything.
 */
export default function GridLines({ count = 4 }: { count?: number }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-0 left-1/2 z-0 hidden w-full max-w-[1570px] -translate-x-1/2 items-center justify-between overflow-hidden px-5 lg:flex xl:px-20"
    >
      {Array.from({ length: count }, (_, i) => (
        <span key={i} className="h-full w-0.5 shrink-0 bg-white/10" />
      ))}
    </div>
  );
}
