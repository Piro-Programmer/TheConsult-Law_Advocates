"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { nav, site } from "@/lib/content";
import { practiceAreas, topicSlug } from "@/lib/practice-areas";
import ServicesDropdown from "./ServicesDropdown";

/**
 * Advocacy's header: a fixed, transparent bar with a hairline underline that
 * the hero photo runs behind. Its gutters and gaps match the hero's container
 * so the logo lines up with the headline below it.
 *
 * The template leaves the bar transparent at every scroll position, which only
 * works because it never scrolls over light content. Ours does, so the bar
 * fills once you leave the hero — with the homepage's near-black rather than
 * brand green, which read as a stripe against that page.
 */
export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

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
        scrolled || open ? "bg-ink-deep" : "bg-transparent"
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
            {nav.map((item) =>
              item.href === "/services" ? (
                <ServicesDropdown key={item.href} label={item.label} />
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[14px] leading-[1.2] font-normal tracking-[-0.54px] text-white uppercase transition-colors duration-[400ms] hover:text-white/70"
                >
                  {item.label}
                </Link>
              ),
            )}
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
        <div className="border-t border-white/10 bg-ink-deep lg:hidden">
          <div className="mx-auto max-h-[calc(100vh-5.5rem)] w-full max-w-[1570px] overflow-y-auto px-5 py-6 xl:px-20">
            <div className="flex flex-col">
              {nav.map((item) =>
                item.href === "/services" ? (
                  <div key={item.href} className="border-b border-white/10">
                    <div className="flex items-center justify-between">
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="py-4 text-[14px] tracking-[-0.54px] text-white/85 uppercase transition-colors hover:text-white"
                      >
                        {item.label}
                      </Link>
                      <button
                        type="button"
                        aria-label={
                          servicesOpen ? "Hide services menu" : "Show services menu"
                        }
                        aria-expanded={servicesOpen}
                        onClick={() => setServicesOpen((v) => !v)}
                        className="cursor-pointer p-2 text-white/50 transition-colors hover:text-white"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                          className={`transition-transform duration-200 ${
                            servicesOpen ? "rotate-180" : ""
                          }`}
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </button>
                    </div>

                    {servicesOpen && (
                      <div className="flex flex-col gap-5 pb-5">
                        {practiceAreas.map((area) => (
                          <div key={area.slug} className="flex flex-col gap-2">
                            <Link
                              href={`/practice-areas/${area.slug}`}
                              onClick={() => setOpen(false)}
                              className="text-[13px] font-medium text-white"
                            >
                              {area.title}
                            </Link>
                            <div className="flex flex-col gap-2 pl-3">
                              {area.topics.map((topic) => (
                                <Link
                                  key={topic.title}
                                  href={`/practice-areas/${area.slug}#${topicSlug(topic.title)}`}
                                  onClick={() => setOpen(false)}
                                  className="text-[13px] leading-[1.3] text-white/50 transition-colors hover:text-white"
                                >
                                  {topic.title}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="border-b border-white/10 py-4 text-[14px] tracking-[-0.54px] text-white/85 uppercase transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                ),
              )}
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
