"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { contact } from "@/lib/content";

const AREAS = [
  "Intellectual Property Rights",
  "Dispute Resolution",
  "Technology Law",
  "Corporate",
  "Not sure yet — let's talk it through",
];

/**
 * Three-step intake. Step 1's question and options are taken from the live
 * site; steps 2 and 3 are reconstructed — the live wizard renders them only
 * after interaction, so they were not in the server HTML. Submission composes
 * a mailto:, consistent with the contact form and the Privacy Policy.
 */
export default function ConsultWizard() {
  const [step, setStep] = useState(0);
  const [area, setArea] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [detail, setDetail] = useState("");

  const field =
    "w-full rounded-2xl border border-ink/10 bg-white px-5 py-3.5 text-sm text-ink outline-none transition-colors placeholder:text-grey/70 focus:border-brand/40";

  const submit = () => {
    const body = `Area: ${area}\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${detail}`;
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
      "Consultation request",
    )}&body=${encodeURIComponent(body)}`;
  };

  const canAdvance =
    (step === 0 && area) || (step === 1 && name && email) || step === 2;

  return (
    <div className="mx-auto max-w-2xl">
      <div className="flex items-center gap-3">
        <span className="text-xs font-medium uppercase tracking-[0.14em] text-grey">
          Step {step + 1} of 3
        </span>
        <div className="flex flex-1 gap-1.5">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                i <= step ? "bg-brand" : "bg-ink/10"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="mt-10 min-h-70">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {step === 0 && (
              <>
                <h2 className="font-display text-2xl font-light tracking-tight text-ink md:text-3xl">
                  What do you need help with?
                </h2>
                <div className="mt-7 space-y-3">
                  {AREAS.map((a) => (
                    <button
                      key={a}
                      onClick={() => setArea(a)}
                      className={`flex w-full items-center justify-between rounded-2xl border px-6 py-4 text-left text-sm transition-colors ${
                        area === a
                          ? "border-brand bg-brand/5 text-brand"
                          : "border-ink/10 text-ink/80 hover:border-brand/30"
                      }`}
                    >
                      {a}
                      {area === a && (
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                          <path
                            d="m3 8.5 3.2 3.2L13 5"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
              </>
            )}

            {step === 1 && (
              <>
                <h2 className="font-display text-2xl font-light tracking-tight text-ink md:text-3xl">
                  How can we reach you?
                </h2>
                <div className="mt-7 space-y-4">
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full name"
                    aria-label="Full name"
                    className={field}
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    aria-label="Email"
                    className={field}
                  />
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Phone (optional)"
                    aria-label="Phone"
                    className={field}
                  />
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <h2 className="font-display text-2xl font-light tracking-tight text-ink md:text-3xl">
                  Tell us what you&apos;re dealing with.
                </h2>
                <textarea
                  rows={6}
                  value={detail}
                  onChange={(e) => setDetail(e.target.value)}
                  placeholder="A short summary is enough — we'll follow up with questions."
                  aria-label="Your matter"
                  className={`${field} mt-7 resize-y`}
                />
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-10 flex items-center justify-between gap-4">
        <button
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          disabled={step === 0}
          className="rounded-full border border-ink/15 px-6 py-3 text-sm text-ink/70 transition-colors hover:border-ink/30 disabled:pointer-events-none disabled:opacity-40"
        >
          Back
        </button>
        <button
          onClick={() => (step === 2 ? submit() : setStep((s) => s + 1))}
          disabled={!canAdvance}
          className="rounded-full bg-brand px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-brand/90 disabled:pointer-events-none disabled:opacity-40"
        >
          {step === 2 ? "Send request" : "Continue"}
        </button>
      </div>
    </div>
  );
}
