"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

// ------------------------------------------------------------
// CountUp — angka animasi naik saat masuk viewport
// ------------------------------------------------------------
export function CountUp({
  target,
  duration = 2.4,
}: {
  target: number;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, target, {
      duration: reduce ? 0 : duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, target, duration, reduce]);

  const formatted = new Intl.NumberFormat("id-ID").format(value);
  return (
    <span ref={ref} className="tabular-nums">
      {formatted}
    </span>
  );
}
