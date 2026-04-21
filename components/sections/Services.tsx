"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { SectionMarker } from "@/components/ui/Marker";
import { Reveal, MaskLines } from "@/components/ui/RevealText";
import { services } from "@/lib/content";

export function Services() {
  return (
    <div id="services">
      <ServicesMobile />
      <ServicesDesktop />
    </div>
  );
}

function ServicesMobile() {
  return (
    <section className="md:hidden bg-ivory py-12">
      <div className="container-x">
        <SectionMarker label="Signature Services" />
        <h2 className="mt-4 font-serif-display font-serif text-display-md text-stone-800 tracking-tightest balance">
          <MaskLines>A small set of services,</MaskLines>
          <br />
          <em className="not-italic text-stone-600 font-serif">
            <MaskLines delay={0.12}>each done beautifully.</MaskLines>
          </em>
        </h2>
        <Reveal delay={0.2} className="mt-4 text-[0.95rem] leading-[1.6] text-stone-600">
          From preventive care to full porcelain restoration. Every visit is planned,
          never improvised.
        </Reveal>

        <ul className="mt-8 space-y-10">
          {services.map((s, i) => (
            <motion.li
              key={s.index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.05 * (i % 2) }}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2px] bg-stone-700">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/75 via-stone-900/20 to-transparent" />
                <div className="absolute top-4 left-5 flex w-full justify-between items-center pr-10">
                  <span className="font-mono text-[0.72rem] tracking-[0.18em] text-ivory/70">
                    — {s.index}
                  </span>
                  <span className="text-[0.66rem] uppercase tracking-[0.2em] text-champagne">
                    Signature
                  </span>
                </div>
                <div className="absolute bottom-5 left-5 right-5">
                  <h3 className="font-serif text-[2.2rem] leading-[1.02] tracking-tightest text-ivory">
                    {s.title}
                  </h3>
                </div>
              </div>
              <p className="mt-5 text-[0.98rem] leading-[1.65] text-stone-700">
                {s.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5 text-[0.8rem] text-stone-500">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-champagne" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ServicesDesktop() {
  const ref = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const [range, setRange] = useState(0);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const update = () => {
      if (trackRef.current && window.innerWidth >= 768) {
        setRange(Math.max(0, trackRef.current.scrollWidth - window.innerWidth));
      }
    };
    update();
    const t1 = setTimeout(update, 120);
    const t2 = setTimeout(update, 400);
    window.addEventListener("resize", update);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener("resize", update);
    };
  }, []);

  const x = useTransform(scrollYProgress, [0.08, 0.95], [0, -range]);
  const progress = useTransform(scrollYProgress, [0.08, 0.95], [0, 1]);

  useMotionValueEvent(progress, "change", (v) => {
    setActive(Math.min(services.length - 1, Math.max(0, Math.floor(v * services.length))));
  });

  return (
    <section
      ref={ref}
      className="hidden md:block relative bg-ivory"
      style={{ height: `${services.length * 65}vh` }}
    >
      <div className="sticky top-0 h-[100svh] overflow-hidden flex flex-col">
        <div className="container-x pt-12 md:pt-16 pb-4 md:pb-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <SectionMarker label="Signature Services" />
              <h2 className="mt-3 font-serif-display font-serif text-display-md md:text-display-lg text-stone-800 tracking-tightest balance">
                <MaskLines>A small set of services,</MaskLines>
                <br />
                <em className="not-italic text-stone-600 font-serif">
                  <MaskLines delay={0.12}>each done beautifully.</MaskLines>
                </em>
              </h2>
            </div>
            <Reveal delay={0.2} className="max-w-sm text-[0.95rem] leading-[1.6] text-stone-600">
              Scroll through our signature services — from preventive care to full
              porcelain restoration. Every visit is planned, never improvised.
            </Reveal>
          </div>
        </div>

        <div className="relative flex-1">
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="absolute inset-0 flex items-center gap-6 lg:gap-8 pl-[8vw] lg:pl-[12vw] xl:pl-[14vw] pr-[8vw] lg:pr-[12vw] xl:pr-[14vw] will-change-transform"
          >
            {services.map((s) => (
              <ServiceCard key={s.index} service={s} />
            ))}
          </motion.div>
        </div>

        <div className="container-x pb-8 md:pb-10">
          <div className="flex items-center gap-6">
            <div className="font-mono text-[0.72rem] tracking-[0.18em] text-stone-500 tabular-nums">
              {String(active + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
            </div>
            <div className="relative h-px flex-1 bg-stone-200 overflow-hidden">
              <motion.div
                style={{ scaleX: progress, transformOrigin: "left" }}
                className="absolute inset-0 bg-stone-800"
              />
            </div>
            <div className="hidden md:block text-[0.72rem] uppercase tracking-[0.22em] text-stone-500">
              Scroll to explore
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: (typeof services)[number] }) {
  return (
    <div className="group relative flex-shrink-0 w-[38vw] lg:w-[30vw] xl:w-[26vw] h-[54vh] lg:h-[58vh] flex flex-col rounded-[2px] overflow-hidden">
      {/* Image — top portion */}
      <div className="relative flex-[1.1] overflow-hidden bg-stone-700">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(min-width: 1280px) 26vw, (min-width: 1024px) 30vw, 38vw"
          className="object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
        />
        <div className="absolute inset-0 bg-stone-900/15" />
        <div className="absolute top-4 left-5 right-5 flex items-center justify-between">
          <span className="font-mono text-[0.72rem] tracking-[0.18em] text-ivory/70">
            — {service.index}
          </span>
          <span className="text-[0.66rem] uppercase tracking-[0.2em] text-champagne">
            Signature
          </span>
        </div>
      </div>

      {/* Text — solid background, never hidden */}
      <div className="flex-1 bg-stone-800 p-5 md:p-6 flex flex-col justify-center text-ivory">
        <h3 className="font-serif text-2xl md:text-[1.7rem] tracking-tightest leading-[1.08] text-ivory mb-2">
          {service.title}
        </h3>
        <p className="text-[0.82rem] leading-[1.55] text-ivory/75 mb-3 line-clamp-3">
          {service.description}
        </p>
        <ul className="flex flex-wrap gap-x-4 gap-y-1.5 text-[0.72rem] text-ivory/60">
          {service.features.map((f) => (
            <li key={f} className="flex items-center gap-1.5">
              <span className="h-1 w-1 rounded-full bg-champagne" />
              {f}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
