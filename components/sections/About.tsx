"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SectionMarker } from "@/components/ui/Marker";
import { Reveal, MaskLines } from "@/components/ui/RevealText";

export function About() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section ref={ref} id="about" className="relative bg-ivory py-10 md:py-14 overflow-hidden">
      <div className="container-x">
        {/* Compact header row — inline, no sparse left column */}
        <div className="flex items-baseline justify-between gap-6">
          <SectionMarker label="Our Philosophy" />
          <span className="font-mono text-[0.7rem] tracking-[0.18em] text-stone-500">
            / 01 — About
          </span>
        </div>

        <h2 className="mt-4 font-serif-display font-serif text-display-md md:text-display-lg text-stone-800 tracking-tightest balance max-w-4xl">
          <MaskLines>We practice dentistry the way</MaskLines>{" "}
          <em className="not-italic text-stone-600 font-serif">
            <MaskLines delay={0.1}>we wish it had been practiced</MaskLines>
          </em>{" "}
          <MaskLines delay={0.2}>on us.</MaskLines>
        </h2>

        <div className="mt-6 md:mt-8 grid grid-cols-12 gap-5 md:gap-8">
          <motion.div
            style={{ y: y1 }}
            className="col-span-12 md:col-span-7 relative aspect-[4/5] overflow-hidden rounded-[2px]"
          >
            <Image
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1400&q=85"
              alt="Warm, considered dental interior"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </motion.div>

          <div className="col-span-12 md:col-span-5 flex flex-col gap-5">
            <motion.div
              style={{ y: y2 }}
              className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-[2px]"
            >
              <Image
                src="https://images.unsplash.com/photo-1583912267550-d44c9c0e6d1c?auto=format&fit=crop&w=1000&q=85"
                alt="Dental studio material detail"
                fill
                sizes="(min-width: 768px) 35vw, 100vw"
                className="object-cover"
              />
            </motion.div>
            <Reveal delay={0.15}>
              <p className="text-[1.02rem] leading-[1.65] text-stone-700 pretty">
                Noble &amp; Ash was built on a single conviction: that modern dentistry
                can be warm, unhurried, and quietly excellent. We design our days around
                fewer patients and longer visits.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <p className="text-[1.02rem] leading-[1.65] text-stone-700 pretty">
                The result is a practice that feels closer to a studio than a clinic —
                a place our patients come to <em className="text-stone-800">stay with</em>,
                not one they arrive at when something has gone wrong.
              </p>
            </Reveal>
            <Reveal delay={0.35}>
              <div className="hairline" />
              <div className="mt-3 font-serif text-base italic text-stone-600">
                &ldquo;Do less, more beautifully.&rdquo;
              </div>
              <div className="mt-1 text-[0.7rem] uppercase tracking-[0.2em] text-stone-500">
                Dr. Evelyn Marchetti, Founder
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
