"use client";

import { useState } from "react";
import { contact } from "@/lib/content";

/**
 * Composes a mailto: rather than posting to a server. This mirrors the live
 * site and its Privacy Policy, which states submissions are sent through the
 * visitor's own email client and never stored by the firm.
 */
export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Website enquiry from ${name || "a visitor"}`;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  const field =
    "w-full rounded-2xl border border-ink/10 bg-white px-5 py-3.5 text-sm text-ink outline-none transition-colors placeholder:text-grey/70 focus:border-brand/40";

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="sr-only">
          Name
        </label>
        <input
          id="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className={field}
        />
      </div>
      <div>
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className={field}
        />
      </div>
      <div>
        <label htmlFor="message" className="sr-only">
          How can we help?
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="How can we help?"
          className={`${field} resize-y`}
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-brand/90"
      >
        Send message
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path
            d="M3 11 11 3M11 3H5M11 3v6"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <p className="text-xs leading-relaxed text-grey">
        Your message opens in your own email client and is sent directly to{" "}
        {contact.email}. Nothing is stored on our servers.
      </p>
    </form>
  );
}
