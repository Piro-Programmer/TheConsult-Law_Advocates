"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";

/**
 * Counts from 0 up to `value` when scrolled into view, mirroring the live
 * site's statistics. Reduced-motion users get the final figure with no
 * animation — derived rather than set, so the effect stays free of setState.
 */
export default function CountUp({
  value,
  suffix = "",
  className,
  duration = 1400,
}: {
  value: number;
  suffix?: string;
  className?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const reduceMotion = useReducedMotion();
  const [counted, setCounted] = useState(0);

  useEffect(() => {
    if (!inView || reduceMotion) return;

    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      // ease-out cubic
      setCounted(Math.round(value * (1 - Math.pow(1 - t, 3))));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value, duration, reduceMotion]);

  const shown = reduceMotion ? value : counted;

  return (
    <span ref={ref} className={className}>
      {shown}
      {suffix}
    </span>
  );
}
