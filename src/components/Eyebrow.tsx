/**
 * Advocacy's section label — a mark followed by 18px light text, with no pill
 * or border around it. Distinct from SectionLabel, which is the smaller
 * uppercase tracking-out label the interior pages still use.
 */
export default function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2.5">
      <svg
        width="20"
        height="20"
        viewBox="0 0 10 10"
        fill="none"
        aria-hidden="true"
        className="shrink-0 text-white"
      >
        <path
          d="M5 0 6.2 3.8 10 5 6.2 6.2 5 10 3.8 6.2 0 5l3.8-1.2z"
          fill="currentColor"
        />
      </svg>
      <p className="font-display text-[18px] leading-[1.2] font-light tracking-[-0.54px] text-white">
        {children}
      </p>
    </div>
  );
}
