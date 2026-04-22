"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SectionMarker } from "@/components/ui/Marker";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 },
  }),
};

export function About() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yImg = useTransform(scrollYProgress, [0, 1], ["4%", "-4%"]);

  return (
    <section ref={ref} id="about" className="relative bg-ivory overflow-hidden">
      <div className="container-x py-16 md:py-24">
        {/* Top label row */}
        <div className="flex items-baseline justify-between gap-6 mb-8 md:mb-12">
          <SectionMarker label="Our Philosophy" />
          <span className="font-mono text-[0.7rem] tracking-[0.18em] text-stone-500">
            / 01 — About
          </span>
        </div>

        {/* Two-column layout using plain flexbox */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16">
          {/* Left: text */}
          <div className="md:w-[55%] lg:w-[58%] flex-shrink-0">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={0}
              className="font-serif-display font-serif text-display-md md:text-display-lg text-stone-800 tracking-tightest balance max-w-3xl"
            >
              We practice dentistry the way{" "}
              <em className="not-italic text-stone-600 font-serif">
                we wish it had been practiced
              </em>{" "}
              on us.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={1}
              className="mt-6 text-[1.02rem] leading-[1.65] text-stone-700 max-w-xl pretty"
            >
              Noble &amp; Ash was built on a single conviction: modern dentistry can be
              warm, unhurried, and quietly excellent. We design our days around fewer
              patients and longer visits — planning thoroughly before we treat, and
              treating conservatively when we do.
            </motion.p>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={2}
              className="mt-4 text-[1.02rem] leading-[1.65] text-stone-700 max-w-xl pretty"
            >
              The result is a practice that feels closer to a studio than a clinic —
              a place patients come to <em className="text-stone-800">stay with</em>,
              not one they arrive at when something has gone wrong.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={3}
              className="mt-8 md:mt-10 max-w-xl"
            >
              <div className="hairline" />
              <div className="mt-5 font-serif text-xl md:text-[1.45rem] italic text-stone-700 tracking-tight leading-snug">
                &ldquo;Do less, more beautifully.&rdquo;
              </div>
              <div className="mt-2 text-[0.72rem] uppercase tracking-[0.2em] text-stone-500">
                Dr. Evelyn Marchetti, Founder
              </div>
            </motion.div>
          </div>

          {/* Right: image */}
          <div className="md:flex-1">
            <motion.div
              style={{ y: yImg }}
              className="relative aspect-[3/4] w-full overflow-hidden rounded-[2px] bg-stone-200"
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
      </div>
    </section>
  );
}
