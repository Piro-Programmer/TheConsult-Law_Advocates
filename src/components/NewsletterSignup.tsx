"use client";

import { useState } from "react";
import { contact } from "@/lib/content";
import { newsletter } from "@/lib/posts";

/**
 * The live site hands subscriptions to a content-platform provider whose
 * endpoint isn't exposed in the page source. Until that endpoint is supplied
 * this composes a mailto: so the form still does something real.
 */
export default function NewsletterSignup({
  tone = "light",
}: {
  tone?: "light" | "dark";
}) {
  const [email, setEmail] = useState("");
  const dark = tone === "dark";

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
      "Newsletter subscription",
    )}&body=${encodeURIComponent(`Please subscribe me: ${email}`)}`;
  };

  return (
    <div
      className={`rounded-3xl p-8 md:p-12 ${dark ? "bg-brand" : "bg-cream"}`}
    >
      <h2
        className={`font-display text-2xl font-light tracking-tight md:text-3xl ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {newsletter.heading}
      </h2>
      <p
        className={`mt-4 max-w-xl text-sm leading-relaxed ${
          dark ? "text-white/70" : "text-grey"
        }`}
      >
        {newsletter.body}
      </p>
      <form onSubmit={onSubmit} className="mt-7 flex flex-wrap gap-3">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          className={`min-w-64 flex-1 rounded-full border px-6 py-3.5 text-sm outline-none transition-colors ${
            dark
              ? "border-white/20 bg-white/10 text-white placeholder:text-white/40 focus:border-white/50"
              : "border-ink/10 bg-white text-ink placeholder:text-grey/70 focus:border-brand/40"
          }`}
        />
        <button
          type="submit"
          className={`rounded-full px-7 py-3.5 text-sm font-medium transition-colors ${
            dark
              ? "bg-white text-brand hover:bg-white/90"
              : "bg-brand text-white hover:bg-brand/90"
          }`}
        >
          {newsletter.cta}
        </button>
      </form>
    </div>
  );
}
