import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline" | "light" | "ghostLight";
  /** "sm" is the Advocacy template's own CTA scale, used in the hero. */
  size?: "md" | "sm";
  external?: boolean;
  className?: string;
};

const styles = {
  solid: "bg-brand text-white hover:bg-brand/90",
  outline: "border border-brand/25 text-brand hover:bg-brand hover:text-white",
  light: "bg-white text-brand hover:bg-white/90",
  ghostLight: "border border-white/25 text-white hover:bg-white hover:text-brand",
};

/* Kept out of the base string so the two never both emit a padding or
   font-size utility — class order in the attribute would not decide the
   winner, CSS source order would. */
const sizes = {
  md: "px-7 py-3.5 text-sm font-medium",
  sm: "px-5 py-2.5 text-[14px] leading-[1.2] font-normal uppercase tracking-[-0.42px]",
};

export default function Button({
  href,
  children,
  variant = "solid",
  size = "md",
  external = false,
  className = "",
}: Props) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-full transition-colors duration-200 ${sizes[size]} ${styles[variant]} ${className}`;
  const inner = (
    <>
      {children}
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <path
          d="M3 11 11 3M11 3H5M11 3v6"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}
