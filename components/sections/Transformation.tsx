"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionMarker } from "@/components/ui/Marker";
import { Reveal, MaskLines } from "@/components/ui/RevealText";
import { metrics } from "@/lib/content";

export function Transformation() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yA = useTransform(scrollYProgress, [0, 1], ["12%", "-12%"]);
  const yB = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const yC = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);

  return (
    <section ref={ref} id="transformation" className="relative bg-ivory py-12 md:py-16 overflow-hidden">
      <div className="container-x">
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-5 relative z-10">
            <SectionMarker label="Outcomes" />
            <h2 className="mt-4 font-serif-display font-serif text-display-md md:text-display-lg text-stone-800 tracking-tightest balance">
              <MaskLines>Quiet</MaskLines>{" "}
              <em className="not-italic text-stone-600">
                <MaskLines delay={0.1}>transformations,</MaskLines>
              </em>
              <br />
              <MaskLines delay={0.2}>built to last.</MaskLines>
            </h2>
            <Reveal delay={0.15} className="mt-5 max-w-md text-[1.02rem] leading-[1.7] text-stone-700 pretty">
              Our cosmetic and restorative work is never dramatic for drama's sake. The
              best outcomes look like they were always meant to be there. These are a few
              of the stories we're quietly proud of.
            </Reveal>

            <div className="mt-10 grid grid-cols-2 gap-8">
              {metrics.map((m, i) => (
                <Reveal key={m.label} delay={0.1 + i * 0.07}>
                  <div className="font-serif text-4xl md:text-5xl tracking-tight text-stone-800">
                    {m.value}
                    <span className="text-stone-500 text-2xl align-top ml-1">{m.unit}</span>
                  </div>
                  <div className="mt-2 text-[0.78rem] leading-[1.5] text-stone-500 max-w-[18ch]">
                    {m.label}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="col-span-12 md:col-span-7 relative min-h-[600px]">
            <motion.div
              style={{ y: yA }}
              className="absolute top-0 left-[8%] w-[52%] aspect-[3/4] overflow-hidden rounded-[2px]"
            >
              <Image
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=1200&q=85"
                alt="Patient portrait"
                fill
                sizes="40vw"
                className="object-cover"
              />
            </motion.div>
            <motion.div
              style={{ y: yB }}
              className="absolute top-[22%] right-0 w-[46%] aspect-[4/5] overflow-hidden rounded-[2px]"
            >
              <Image
                src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=1200&q=85"
                alt="Natural smile detail"
                fill
                sizes="35vw"
                className="object-cover"
              />
            </motion.div>
            <motion.div
              style={{ y: yC }}
              className="absolute bottom-[-4%] left-[10%] w-[44%] aspect-[5/4] overflow-hidden rounded-[2px]"
            >
              <Image
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=85"
                alt="Clinical detail"
                fill
                sizes="35vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-stone-900/10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="absolute bottom-14 right-4 md:right-10 max-w-xs bg-stone-800 text-ivory p-6 rounded-[2px] shadow-[0_30px_80px_-30px_rgba(23,20,16,0.5)]"
            >
              <div className="text-[0.7rem] uppercase tracking-[0.22em] text-champagne mb-3">
                Case study — 14 months
              </div>
              <p className="text-[0.95rem] leading-[1.55] text-ivory/85">
                Full-ceramic restoration of the upper arch. Conservative preparation,
                wax-up preview, and a final result the patient describes as "finally mine
                again."
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
