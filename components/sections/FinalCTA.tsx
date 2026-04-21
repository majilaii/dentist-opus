"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MaskLines, Reveal } from "@/components/ui/RevealText";
import { brand } from "@/lib/content";

export function FinalCTA() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["15%", "-15%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.12, 1]);

  return (
    <section id="contact" ref={ref} className="relative isolate overflow-hidden bg-stone-900 text-ivory">
      <motion.div style={{ y, scale }} className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1541781286675-7dd67a1ce1bd?auto=format&fit=crop&w=2400&q=85"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-40"
        />
      </motion.div>
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-stone-900 via-stone-900/80 to-stone-900" />
      <div aria-hidden className="absolute inset-0 grain" />

      <div className="container-x relative py-14 md:py-20">
        <div className="flex items-center gap-4 text-[0.72rem] uppercase tracking-[0.24em] text-ivory/50">
          <span className="h-px w-10 bg-ivory/30" />
          <span>Begin Here</span>
        </div>

        <h2 className="mt-5 font-serif-display font-serif text-display-lg md:text-display-xl text-ivory tracking-tightest balance max-w-[18ch]">
          <MaskLines>A single, unhurried</MaskLines>{" "}
          <em className="not-italic text-champagne font-serif">
            <MaskLines delay={0.12}>conversation</MaskLines>
          </em>{" "}
          <MaskLines delay={0.24}>is the only place to begin.</MaskLines>
        </h2>

        <Reveal delay={0.3} className="mt-6 max-w-xl text-[1.05rem] leading-[1.7] text-ivory/75 pretty">
          We welcome new patients every Wednesday and Friday morning. A first consultation
          is 75 minutes and includes a full examination, photography, and a written plan
          — with no obligation to proceed.
        </Reveal>

        <div className="mt-8 flex flex-wrap items-center gap-3 md:gap-4">
          <Link
            href="#"
            className="group inline-flex items-center gap-3 rounded-full bg-champagne px-8 py-5 text-[0.82rem] uppercase tracking-[0.18em] text-stone-900 transition-colors duration-500 hover:bg-champagne-light"
          >
            Book an appointment
            <ArrowUpRight strokeWidth={1.3} className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
          <a
            href={brand.phoneHref}
            className="group inline-flex items-center gap-3 rounded-full border border-ivory/30 px-8 py-5 text-[0.82rem] uppercase tracking-[0.18em] text-ivory transition-colors duration-500 hover:border-ivory hover:bg-ivory/5"
          >
            {brand.phone}
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 border-t border-ivory/10 pt-8">
          <div>
            <div className="text-[0.7rem] uppercase tracking-[0.22em] text-ivory/50 mb-4">
              Visit the studio
            </div>
            <div className="font-serif text-lg text-ivory leading-snug">
              {brand.address.line1}
              <br />
              {brand.address.line2}
            </div>
          </div>
          <div>
            <div className="text-[0.7rem] uppercase tracking-[0.22em] text-ivory/50 mb-4">
              Reach us directly
            </div>
            <div className="font-serif text-lg text-ivory leading-snug">
              <a href={brand.phoneHref} className="hover:text-champagne transition-colors">{brand.phone}</a>
              <br />
              <a href={`mailto:${brand.email}`} className="hover:text-champagne transition-colors">{brand.email}</a>
            </div>
          </div>
          <div>
            <div className="text-[0.7rem] uppercase tracking-[0.22em] text-ivory/50 mb-4">
              Hours
            </div>
            <ul className="font-sans text-[0.92rem] text-ivory/80 space-y-1.5">
              {brand.hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-6">
                  <span>{h.day}</span>
                  <span className="text-ivory/60">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
