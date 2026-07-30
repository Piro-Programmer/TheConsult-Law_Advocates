"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Eyebrow from "./Eyebrow";
import SectionLabel from "./SectionLabel";
import { faqSection } from "@/lib/content";

/** "ink" is the homepage's near-black; /services keeps the cream default. */
export default function Faq({ tone = "cream" }: { tone?: "cream" | "ink" }) {
  const [open, setOpen] = useState<number | null>(0);
  const ink = tone === "ink";

  const t = {
    section: ink ? "bg-ink-deep py-[100px] xl:py-[150px]" : "bg-cream py-24 md:py-32",
    container: ink ? "container-wide" : "container-base",
    heading: ink ? "text-white" : "text-ink",
    question: ink ? "text-white" : "text-ink",
    answer: ink ? "text-white/70" : "text-grey",
    divider: ink ? "border-white/10" : "border-ink/10",
    icon: ink ? "text-white" : "text-brand",
  };

  return (
    <section className={t.section}>
      <div className={t.container}>
        {ink ? (
          <Eyebrow>{faqSection.label}</Eyebrow>
        ) : (
          <SectionLabel>{faqSection.label}</SectionLabel>
        )}
        <h2
          className={`mt-7 max-w-2xl font-display text-3xl font-light leading-[1.15] tracking-tight md:text-5xl ${t.heading}`}
        >
          {faqSection.heading}
        </h2>

        <div className="mt-12 max-w-3xl">
          {faqSection.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className={`border-b ${t.divider}`}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className={`font-display text-base md:text-lg ${t.question}`}>
                    {item.q}
                  </span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                    className={`shrink-0 transition-transform duration-300 ${t.icon} ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    <path
                      d="M8 2v12M2 8h12"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p
                        className={`max-w-2xl pb-6 text-sm leading-relaxed md:text-base ${t.answer}`}
                      >
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
