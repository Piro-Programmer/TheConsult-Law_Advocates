"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { nav, site } from "@/lib/content";

/**
 * Advocacy's header: a fixed, transparent bar with a hairline underline that
 * the hero photo runs behind. Its gutters and gaps match the hero's container
 * so the logo lines up with the headline below it.
 *
 * The template leaves the bar transparent at every scroll position, which only
 * works because it never scrolls over light content. Ours does, so the bar
 * fills with brand once you leave the hero.
 */
export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b border-white/10 transition-colors duration-300 ${
        scrolled || open ? "bg-brand" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1570px] items-center justify-between px-5 py-5 xl:px-20">
        <Link href="/" onClick={() => setOpen(false)} className="relative z-10">
          <Image
            src={site.logo}
            alt={site.name}
            width={220}
            height={60}
            priority
            className="h-9 w-auto"
          />
        </Link>

        <div className="hidden items-center gap-[55px] lg:flex">
          <nav className="flex items-center gap-5">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[14px] leading-[1.2] font-normal tracking-[-0.54px] text-white uppercase transition-colors duration-[400ms] hover:text-white/70"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/book-consultation"
            className="rounded-full bg-white px-5 py-2.5 text-[14px] leading-[1.2] font-normal tracking-[-0.42px] text-ink-deep uppercase transition-colors duration-[400ms] hover:bg-white/90"
          >
            Book Consultation
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="relative z-10 flex h-10 w-10 items-center justify-center lg:hidden"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
            ) : (
              <path d="M4 8h16M4 16h16" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-brand lg:hidden">
          <div className="mx-auto max-h-[calc(100vh-5.5rem)] w-full max-w-[1570px] overflow-y-auto px-5 py-6 xl:px-20">
            <div className="flex flex-col">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-white/10 py-4 text-[14px] tracking-[-0.54px] text-white/85 uppercase transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <Link
              href="/book-consultation"
              onClick={() => setOpen(false)}
              className="mt-6 block rounded-full bg-white px-5 py-3 text-center text-[14px] tracking-[-0.42px] text-ink-deep uppercase"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
