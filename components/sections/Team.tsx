"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionMarker } from "@/components/ui/Marker";
import { Reveal, MaskLines } from "@/components/ui/RevealText";
import { team } from "@/lib/content";
import { useState } from "react";

export function Team() {
  return (
    <section id="team" className="relative bg-stone-800 text-ivory py-12 md:py-16 overflow-hidden">
      <div aria-hidden className="absolute inset-0 grain" />
      <div className="container-x relative">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <SectionMarker label="The People" variant="dark" />
            <h2 className="mt-4 font-serif-display font-serif text-display-md md:text-display-lg text-ivory tracking-tightest balance max-w-3xl">
              <MaskLines>A small, steady team.</MaskLines>
              <br />
              <em className="not-italic text-ivory/70">
                <MaskLines delay={0.1}>Same faces, every visit.</MaskLines>
              </em>
            </h2>
          </div>
          <Reveal delay={0.2} className="max-w-sm text-[0.98rem] leading-[1.65] text-ivory/70">
            We are deliberately small. Three clinicians, a dedicated treatment coordinator,
            and a ceramist we work with across the city. Continuity of care is a design
            choice — not a marketing point.
          </Reveal>
        </div>

        <div className="mt-8 md:mt-10 grid grid-cols-12 gap-6 md:gap-8">
          {team.map((p, i) => (
            <TeamCard key={p.name} person={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamCard({ person, index }: { person: (typeof team)[number]; index: number }) {
  const [hover, setHover] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="col-span-12 md:col-span-6 lg:col-span-4 group"
    >
      <div className="relative aspect-[3/4] overflow-hidden rounded-[2px] bg-stone-700">
        <Image
          src={person.image}
          alt={person.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/20 to-transparent" />
        <div className="absolute top-5 left-5 text-[0.7rem] uppercase tracking-[0.22em] text-ivory/70">
          {person.signature}
        </div>
        <motion.div
          animate={{ y: hover ? 0 : 40, opacity: hover ? 1 : 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-0 left-0 right-0 p-6 text-[0.95rem] leading-[1.55] text-ivory/85"
        >
          {person.bio}
        </motion.div>
      </div>
      <div className="mt-6 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-serif text-2xl tracking-tight text-ivory">
            {person.name}
          </h3>
          <p className="mt-1 text-[0.78rem] uppercase tracking-[0.18em] text-ivory/60">
            {person.role}
          </p>
        </div>
        <div className="text-right text-[0.78rem] text-ivory/60 max-w-[9rem]">
          {person.credentials}
        </div>
      </div>
    </motion.div>
  );
}
