"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SectionMarker } from "@/components/ui/Marker";
import { Reveal, MaskLines } from "@/components/ui/RevealText";

export function About() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yImg = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);

  return (
    <section ref={ref} id="about" className="relative bg-ivory py-12 md:py-16 overflow-hidden">
      <div className="container-x">
        {/* Compact inline header row */}
        <div className="flex items-baseline justify-between gap-6">
          <SectionMarker label="Our Philosophy" />
          <span className="font-mono text-[0.7rem] tracking-[0.18em] text-stone-500">
            / 01 — About
          </span>
        </div>

        {/* Main grid — text left, single image right, stretched to match */}
        <div className="mt-6 md:mt-10 grid grid-cols-12 gap-6 md:gap-10 lg:gap-14 items-center">
          {/* Text column */}
          <div className="col-span-12 md:col-span-7 md:h-full flex flex-col justify-center">
            <h2 className="font-serif-display font-serif text-display-md md:text-display-lg text-stone-800 tracking-tightest balance max-w-3xl">
              <MaskLines>We practice dentistry the way</MaskLines>{" "}
              <em className="not-italic text-stone-600 font-serif">
                <MaskLines delay={0.1}>we wish it had been practiced</MaskLines>
              </em>{" "}
              <MaskLines delay={0.2}>on us.</MaskLines>
            </h2>

            <div className="mt-7 md:mt-8 space-y-4 max-w-xl">
              <Reveal delay={0.15}>
                <p className="text-[1.02rem] leading-[1.65] text-stone-700 pretty">
                  Noble &amp; Ash was built on a single conviction: modern dentistry can be
                  warm, unhurried, and quietly excellent. We design our days around fewer
                  patients and longer visits — planning thoroughly before we treat, and
                  treating conservatively when we do.
                </p>
              </Reveal>
              <Reveal delay={0.22}>
                <p className="text-[1.02rem] leading-[1.65] text-stone-700 pretty">
                  The result is a practice that feels closer to a studio than a clinic —
                  a place patients come to <em className="text-stone-800">stay with</em>,
                  not one they arrive at when something has gone wrong.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.3} className="mt-8 md:mt-10 max-w-xl">
              <div className="hairline" />
              <div className="mt-5 font-serif text-xl md:text-[1.45rem] italic text-stone-700 tracking-tight leading-snug">
                &ldquo;Do less, more beautifully.&rdquo;
              </div>
              <div className="mt-2 text-[0.72rem] uppercase tracking-[0.2em] text-stone-500">
                Dr. Evelyn Marchetti, Founder
              </div>
            </Reveal>
          </div>

          {/* Image column — stretches to match text height on desktop */}
          <motion.div
            style={{ y: yImg }}
            className="col-span-12 md:col-span-5 relative aspect-[4/5] md:aspect-auto md:h-[820px] overflow-hidden rounded-[2px] bg-stone-200"
          >
            <Image
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1400&q=85"
              alt="The Noble & Ash studio — warm, considered, unhurried"
              fill
              sizes="(min-width: 768px) 42vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/15 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-5 flex items-center gap-3 text-[0.68rem] uppercase tracking-[0.22em] text-ivory">
              <span className="h-px w-8 bg-ivory/70" />
              The studio — Fillmore St.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
