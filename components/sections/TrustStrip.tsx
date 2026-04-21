"use client";

import { trustPoints } from "@/lib/content";

export function TrustStrip() {
  const items = [...trustPoints, ...trustPoints];

  return (
    <section className="relative border-y border-stone-200 bg-bone/40 py-6 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee-slow gap-14">
        {items.map((p, i) => (
          <div key={i} className="flex items-center gap-14 font-serif text-xl md:text-2xl text-stone-700 tracking-tight">
            <span>{p}</span>
            <span className="inline-block h-1 w-1 rounded-full bg-champagne" />
          </div>
        ))}
      </div>
    </section>
  );
}
