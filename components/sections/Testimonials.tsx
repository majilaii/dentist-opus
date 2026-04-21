"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { SectionMarker } from "@/components/ui/Marker";
import { Reveal, MaskLines } from "@/components/ui/RevealText";
import { testimonials } from "@/lib/content";

export function Testimonials() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);

  const t = testimonials[index];

  return (
    <section className="relative bg-stone-750 text-ivory py-12 md:py-16 overflow-hidden">
      <div aria-hidden className="absolute inset-0 grain" />
      <div className="container-x relative">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <SectionMarker label="Patient Voices" variant="dark" />
            <h2 className="mt-4 font-serif-display font-serif text-display-md md:text-display-lg text-ivory tracking-tightest balance max-w-3xl">
              <MaskLines>Quiet words from</MaskLines>
              <br />
              <em className="not-italic text-ivory/70">
                <MaskLines delay={0.1}>patients we're grateful for.</MaskLines>
              </em>
            </h2>
          </div>
          <Reveal delay={0.2} className="flex items-center gap-4 self-start md:self-auto">
            <button
              onClick={prev}
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-ivory/20 transition-colors hover:border-ivory/60"
              aria-label="Previous testimonial"
            >
              <ArrowLeft strokeWidth={1.2} className="h-4 w-4 transition-transform duration-500 group-hover:-translate-x-0.5" />
            </button>
            <button
              onClick={next}
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-ivory/20 transition-colors hover:border-ivory/60"
              aria-label="Next testimonial"
            >
              <ArrowRight strokeWidth={1.2} className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5" />
            </button>
          </Reveal>
        </div>

        <div className="mt-10 md:mt-12 grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-1 flex md:flex-col items-center md:items-start">
            <Quote strokeWidth={0.8} className="h-16 w-16 text-champagne/70" />
          </div>
          <div className="col-span-12 md:col-span-11 min-h-[320px] relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <blockquote className="font-serif text-[1.9rem] leading-[1.28] md:text-[2.8rem] md:leading-[1.2] lg:text-[3.3rem] lg:leading-[1.14] text-ivory tracking-tight balance max-w-5xl">
                  "{t.quote}"
                </blockquote>
                <div className="mt-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                  <div>
                    <div className="font-serif text-xl text-ivory">{t.name}</div>
                    <div className="mt-1 text-[0.78rem] uppercase tracking-[0.2em] text-ivory/60">
                      {t.detail}
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <span
                        key={i}
                        className="h-1.5 w-8 bg-champagne/80"
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-10 flex items-center gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className="group relative h-px w-16 bg-ivory/15"
              aria-label={`Go to testimonial ${i + 1}`}
            >
              <span
                className={`absolute inset-0 origin-left bg-ivory transition-transform duration-[0.9s] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  i === index ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </button>
          ))}
          <span className="ml-4 font-mono text-[0.72rem] tracking-[0.18em] text-ivory/50">
            {String(index + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </section>
  );
}
