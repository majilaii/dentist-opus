"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { MaskLines } from "@/components/ui/RevealText";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const yLeft = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.7], [1, 0.5]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative min-h-[auto] lg:min-h-[100svh] overflow-hidden bg-ivory pt-[60px] md:pt-[72px]"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(23,20,16,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(23,20,16,0.04)_1px,transparent_1px)] bg-[size:96px_96px] mask-reveal-b"
      />
      <div aria-hidden className="absolute inset-0 grain" />

      <div className="container-x relative grid grid-cols-12 gap-6 pb-12 pt-2 md:gap-8 md:pt-2 lg:pt-3 lg:pb-16">
        {/* Desktop-only portrait column */}
        <motion.div
          style={{ y: yLeft }}
          className="col-span-5 hidden lg:block relative mt-2"
        >
          <motion.div
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            animate={{ clipPath: "inset(0% 0 0 0)" }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
            className="relative aspect-[3/4] w-full overflow-hidden rounded-[2px]"
          >
            <Image
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1400&q=85"
              alt="Private dental clinic interior"
              fill
              priority
              sizes="40vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/30 via-transparent to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 1.4 }}
            className="absolute -bottom-6 -right-6 flex items-center gap-4 bg-stone-800 px-6 py-5 text-ivory shadow-[0_20px_60px_-20px_rgba(23,20,16,0.4)]"
          >
            <div className="h-10 w-10 rounded-full bg-champagne/20 border border-champagne/40 flex items-center justify-center font-serif text-champagne-light text-sm">
              N
            </div>
            <div>
              <div className="text-[0.68rem] uppercase tracking-[0.22em] text-ivory/60">
                Established
              </div>
              <div className="font-serif text-lg tracking-tight">
                San Francisco, 2014
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Main text column */}
        <motion.div
          style={{ y: yText, opacity: opacityText }}
          className="col-span-12 lg:col-span-7"
        >
          <div className="mt-0">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.35 }}
              className="flex items-center gap-4 text-[0.72rem] uppercase tracking-[0.24em] text-stone-500"
            >
              <span className="h-px w-10 bg-stone-400/60" />
              <span>A private dental atelier — est. 2014</span>
            </motion.div>

            <h1 className="mt-3 md:mt-4 font-serif-display font-serif text-display-lg text-stone-800 balance">
              <span className="block"><MaskLines delay={0.3}>Dentistry,</MaskLines></span>
              <span className="block italic text-stone-700"><MaskLines delay={0.42}>quietly</MaskLines></span>
              <span className="block"><MaskLines delay={0.54}>considered.</MaskLines></span>
            </h1>

            {/* Inline mobile hero image — integrated between headline and paragraph */}
            <motion.div
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              animate={{ clipPath: "inset(0% 0 0 0)" }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.95 }}
              className="lg:hidden relative mt-5 aspect-[16/10] w-full overflow-hidden rounded-[2px]"
            >
              <Image
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1400&q=85"
                alt="Private dental clinic interior"
                fill
                priority
                sizes="(min-width: 768px) 60vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/25 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 flex items-center gap-3 text-[0.62rem] uppercase tracking-[0.22em] text-ivory/80">
                <span className="h-px w-6 bg-ivory/50" />
                San Francisco, est. 2014
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 1.15 }}
              className="mt-5 md:mt-6 max-w-md font-sans text-[0.98rem] leading-[1.65] text-stone-600 pretty"
            >
              A modern private practice on Fillmore — offering unhurried consultations,
              considered cosmetic and restorative dentistry, and a deep respect for the
              patient's time, comfort, and long-term health.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 1.3 }}
              className="mt-3 md:mt-4 flex flex-wrap items-center gap-3 md:gap-4"
            >
              <Link
                href="#contact"
                className="group inline-flex items-center gap-3 rounded-full bg-stone-800 px-6 md:px-7 py-3.5 md:py-4 text-[0.78rem] md:text-[0.8rem] uppercase tracking-[0.16em] md:tracking-[0.18em] text-ivory transition-colors duration-500 hover:bg-stone-700"
              >
                Book an appointment
                <ArrowUpRight
                  strokeWidth={1.3}
                  className="h-4 w-4 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
              <Link
                href="#services"
                className="group inline-flex items-center gap-3 rounded-full border border-stone-800/30 px-6 md:px-7 py-3.5 md:py-4 text-[0.78rem] md:text-[0.8rem] uppercase tracking-[0.16em] md:tracking-[0.18em] text-stone-800 transition-colors duration-500 hover:border-stone-800"
              >
                Explore services
              </Link>
            </motion.div>

            {/* Stats — tight under CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 1.5 }}
              className="mt-4 md:mt-6 pt-4 md:pt-5 border-t border-stone-200 grid grid-cols-3 gap-4 md:gap-6 max-w-lg"
            >
              <Stat value="1,200+" label="Patients" />
              <Stat value="9.8/10" label="Avg rating" />
              <Stat value="75 min" label="First visit" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue — desktop only */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 items-center gap-3 text-[0.7rem] uppercase tracking-[0.25em] text-stone-500"
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown strokeWidth={1.1} className="h-4 w-4" />
        </motion.span>
        Scroll
      </motion.div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-serif text-2xl md:text-[1.8rem] tracking-tight text-stone-800">
        {value}
      </div>
      <div className="mt-1.5 text-[0.66rem] md:text-[0.68rem] uppercase tracking-[0.2em] md:tracking-[0.22em] text-stone-500">
        {label}
      </div>
    </div>
  );
}
