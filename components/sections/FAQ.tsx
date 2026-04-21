"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { SectionMarker } from "@/components/ui/Marker";
import { MaskLines, Reveal } from "@/components/ui/RevealText";
import { faqs } from "@/lib/content";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative bg-bone/70 py-12 md:py-16 overflow-hidden">
      <div className="container-x">
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-4">
            <SectionMarker label="Questions" />
            <h2 className="mt-4 font-serif-display font-serif text-display-md text-stone-800 tracking-tightest balance">
              <MaskLines>What to expect,</MaskLines>
              <br />
              <em className="not-italic text-stone-600">
                <MaskLines delay={0.1}>asked often.</MaskLines>
              </em>
            </h2>
            <Reveal delay={0.15} className="mt-5 text-[1rem] leading-[1.65] text-stone-600 max-w-sm">
              If you don't find your answer here, call or email us directly. We read and
              answer every message ourselves.
            </Reveal>
          </div>

          <div className="col-span-12 md:col-span-8">
            <div className="border-t border-stone-300/60">
              {faqs.map((f, i) => {
                const isOpen = open === i;
                return (
                  <motion.div
                    key={f.q}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.04 }}
                    className="border-b border-stone-300/60"
                  >
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="group flex w-full items-center justify-between gap-6 py-7 md:py-8 text-left"
                    >
                      <span className="font-serif text-xl md:text-2xl tracking-tight text-stone-800 leading-snug balance flex items-baseline gap-5">
                        <span className="font-mono text-[0.72rem] tracking-[0.18em] text-stone-500 self-start pt-2">
                          0{i + 1}
                        </span>
                        {f.q}
                      </span>
                      <span
                        className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-stone-400/60 transition-all duration-500 ${
                          isOpen ? "rotate-45 bg-stone-800 border-stone-800 text-ivory" : "text-stone-700"
                        }`}
                      >
                        <Plus strokeWidth={1.3} className="h-4 w-4" />
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="pb-8 pl-10 md:pl-14 pr-16 text-[1rem] leading-[1.7] text-stone-600 max-w-2xl pretty">
                            {f.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
