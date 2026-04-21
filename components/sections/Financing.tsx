"use client";

import { motion } from "framer-motion";
import { SectionMarker } from "@/components/ui/Marker";
import { Reveal, MaskLines } from "@/components/ui/RevealText";
import { financing } from "@/lib/content";

export function Financing() {
  return (
    <section className="relative bg-ivory py-12 md:py-16 overflow-hidden">
      <div className="container-x">
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-5">
            <SectionMarker label="Access & Payment" />
            <h2 className="mt-4 font-serif-display font-serif text-display-md md:text-display-lg text-stone-800 tracking-tightest balance">
              <MaskLines>Considered care,</MaskLines>
              <br />
              <em className="not-italic text-stone-600">
                <MaskLines delay={0.1}>made accessible.</MaskLines>
              </em>
            </h2>
            <Reveal delay={0.15} className="mt-5 max-w-md text-[1.02rem] leading-[1.7] text-stone-700 pretty">
              Excellent dentistry should be attainable. We accept most major PPO insurance,
              offer flexible monthly plans, and provide a simple in-house membership for
              patients without coverage. Every proposal is written, itemized, and discussed
              before treatment begins.
            </Reveal>
          </div>

          <div className="col-span-12 md:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-stone-200 border border-stone-200">
              {financing.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
                  className="group relative bg-ivory p-8 md:p-10 transition-colors duration-700 hover:bg-bone/60"
                >
                  <div className="font-mono text-[0.72rem] tracking-[0.18em] text-stone-500 mb-6">
                    — 0{i + 1}
                  </div>
                  <h3 className="font-serif text-2xl tracking-tight text-stone-800 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-[0.98rem] leading-[1.65] text-stone-600">
                    {item.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
