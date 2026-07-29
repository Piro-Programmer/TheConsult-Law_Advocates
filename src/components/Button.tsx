import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline" | "light" | "ghostLight";
  external?: boolean;
  className?: string;
};

const styles = {
  solid: "bg-brand text-white hover:bg-brand/90",
  outline: "border border-brand/25 text-brand hover:bg-brand hover:text-white",
  light: "bg-white text-brand hover:bg-white/90",
  ghostLight: "border border-white/25 text-white hover:bg-white hover:text-brand",
};

export default function Button({
  href,
  children,
  variant = "solid",
  external = false,
  className = "",
}: Props) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium transition-colors duration-200 ${styles[variant]} ${className}`;
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
