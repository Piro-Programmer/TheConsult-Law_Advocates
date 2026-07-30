"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { practiceAreas, topicSlug } from "@/lib/practice-areas";

/**
 * The Services mega-menu: the four practice areas and, under each, its topics.
 *
 * Topics are sections of their area's page rather than routes, so they deep-link
 * by anchor. Opens on hover and on click/keyboard both — hover alone would leave
 * it unreachable without a pointer.
 */
export default function ServicesDropdown({ label }: { label: string }) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onDown = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onFocus = () => {
      if (!wrapRef.current?.contains(document.activeElement)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("focusin", onFocus);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("focusin", onFocus);
    };
  }, [open]);

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = null;
  };
  useEffect(() => cancelClose, []);

  return (
    <div
      ref={wrapRef}
      className="relative flex items-center gap-1.5"
      onMouseEnter={() => {
        cancelClose();
        setOpen(true);
      }}
      /* A short delay, because the pointer has to cross the gap between the
         trigger and the panel to reach it. */
      onMouseLeave={() => {
        cancelClose();
        closeTimer.current = setTimeout(() => setOpen(false), 150);
      }}
    >
      <Link
        href="/services"
        onClick={() => setOpen(false)}
        className="text-[14px] leading-[1.2] font-normal tracking-[-0.54px] text-white uppercase transition-colors duration-[400ms] hover:text-white/70"
      >
        {label}
      </Link>
      <button
        type="button"
        aria-label={open ? "Hide services menu" : "Show services menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="cursor-pointer text-white/50 transition-colors hover:text-white"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {open && (
        /* Padding, not a margin, carries the gap — a margin would be a dead
           zone that drops the hover on the way down to the panel. It is sized
           to clear the bar: the trigger is centred in a taller row, so
           top-full alone leaves the panel overlapping the bar's lower edge. */
        <div className="absolute top-full left-1/2 z-50 -translate-x-1/2 pt-[30px]">
          <div className="w-[640px] max-w-[calc(100vw-2.5rem)] rounded-2xl border border-white/10 bg-ink p-7 shadow-xl shadow-black/40">
            <div className="grid grid-cols-2 gap-x-6 gap-y-7 sm:grid-cols-4">
              {practiceAreas.map((area) => (
                <div key={area.slug} className="flex flex-col gap-3">
                  <Link
                    href={`/practice-areas/${area.slug}`}
                    onClick={() => setOpen(false)}
                    className="text-[14px] leading-[1.25] font-medium text-white transition-colors hover:text-white/70"
                  >
                    {area.title}
                  </Link>
                  <div className="flex flex-col gap-2">
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
          </div>
        </div>
      )}
    </div>
  );
}
