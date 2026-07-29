"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { disclaimer } from "@/lib/content";

const STORAGE_KEY = "tcl-bci-disclaimer-accepted";

/* Tiny external store over localStorage. useSyncExternalStore keeps the read
   out of an effect, so there is no setState-in-effect cascade and no
   hydration mismatch — the server snapshot reports "accepted" so the gate is
   never part of the SSR output. */
let listeners: Array<() => void> = [];

function subscribe(cb: () => void) {
  listeners.push(cb);
  return () => {
    listeners = listeners.filter((l) => l !== cb);
  };
}

function getSnapshot() {
  try {
    return localStorage.getItem(STORAGE_KEY) === "true";
  } catch {
    return false;
  }
}

function getServerSnapshot() {
  return true;
}

function acceptDisclaimer() {
  try {
    localStorage.setItem(STORAGE_KEY, "true");
  } catch {
    /* storage unavailable — the gate simply reappears next visit */
  }
  listeners.forEach((l) => l());
}

/**
 * Bar Council of India requires visitors to confirm they reached the site of
 * their own accord before viewing a law firm's content.
 */
export default function DisclaimerGate() {
  const accepted = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );
  const [declined, setDeclined] = useState(false);

  useEffect(() => {
    document.body.style.overflow = accepted ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [accepted]);

  if (accepted) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="bci-disclaimer-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-5 backdrop-blur-sm"
    >
      <div className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white p-8 md:p-10">
        <h2
          id="bci-disclaimer-title"
          className="font-display text-2xl font-light tracking-tight text-ink"
        >
          {disclaimer.title}
        </h2>

        {declined ? (
          <p className="mt-6 text-sm leading-relaxed text-grey">
            You must accept the disclaimer to view this website.
          </p>
        ) : (
          <>
            <p className="mt-6 text-sm leading-relaxed text-grey">
              {disclaimer.body}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-grey">
              {disclaimer.note}{" "}
              <Link
                href={disclaimer.linkHref}
                className="text-brand underline underline-offset-2"
              >
                {disclaimer.linkLabel}
              </Link>
            </p>
          </>
        )}

        <div className="mt-8 flex flex-wrap gap-3">
          <button
            onClick={acceptDisclaimer}
            className="rounded-full bg-brand px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-brand/90"
          >
            {disclaimer.agree}
          </button>
          {!declined && (
            <button
              onClick={() => setDeclined(true)}
              className="rounded-full border border-brand/25 px-7 py-3.5 text-sm font-medium text-brand transition-colors hover:bg-brand/5"
            >
              {disclaimer.decline}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
