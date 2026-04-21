"use client";

import { motion } from "framer-motion";
import { SectionMarker } from "@/components/ui/Marker";
import { Reveal, MaskLines } from "@/components/ui/RevealText";
import { experiencePoints } from "@/lib/content";

export function Experience() {
  return (
    <section id="experience" className="relative bg-bone/60 py-12 md:py-16 overflow-hidden">
      <div className="container-x">
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-5">
            <SectionMarker label="The Patient Experience" />
            <h2 className="mt-4 font-serif-display font-serif text-display-md md:text-display-lg text-stone-800 tracking-tightest balance">
              <MaskLines>Care that feels</MaskLines>
              <br />
              <em className="not-italic text-stone-600 font-serif">
                <MaskLines delay={0.1}>like being known.</MaskLines>
              </em>
            </h2>
            <Reveal delay={0.2} className="mt-5 max-w-md text-[1.02rem] leading-[1.7] text-stone-700 pretty">
              Every detail of our practice is tuned for calm. The lighting. The pace of a
              visit. The way we sit and explain. Nothing is rushed. Nothing is performed
              without consent. You are a whole person in our chair — not a procedure.
            </Reveal>
          </div>

          <div className="col-span-12 md:col-span-7">
            <ul className="border-t border-stone-300/60">
              {experiencePoints.map((p, i) => (
                <ExperienceRow key={p.title} point={p} index={i} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceRow({
  point,
  index,
}: {
  point: { title: string; body: string };
  index: number;
}) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: index * 0.06 }}
      className="group relative border-b border-stone-300/60 py-6 md:py-7 grid grid-cols-12 gap-4 md:gap-6 transition-colors duration-500"
    >
      <div className="col-span-12 md:col-span-1 font-mono text-[0.72rem] tracking-[0.16em] text-stone-500">
        0{index + 1}
      </div>
      <div className="col-span-12 md:col-span-5 font-serif text-2xl md:text-[1.8rem] tracking-tight text-stone-800 leading-[1.15]">
        {point.title}
      </div>
      <div className="col-span-12 md:col-span-6 text-[0.98rem] leading-[1.65] text-stone-600">
        {point.body}
      </div>

      <span className="absolute inset-x-0 -bottom-px h-px bg-stone-800 origin-left scale-x-0 transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
    </motion.li>
  );
}
