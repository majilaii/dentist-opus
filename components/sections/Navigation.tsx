"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { brand } from "@/lib/content";

const links = [
  { label: "About", href: "#about" },
  { label: "Team", href: "#team" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Journal", href: "#transformation" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          scrolled
            ? "backdrop-blur-md bg-ivory/70 border-b border-stone-200/70"
            : "bg-transparent",
        )}
      >
        <div className="container-x flex h-[60px] md:h-[72px] items-center justify-between">
          <Link href="#top" className="group flex items-center gap-3">
            <span className="relative flex h-9 w-9 items-center justify-center">
              <span className="absolute inset-0 rounded-full border border-stone-800/70 transition-colors duration-500 group-hover:border-stone-800" />
              <span className="font-serif text-[0.95rem] leading-none text-stone-800">N</span>
              <span className="absolute -right-1 -bottom-0.5 font-serif text-[0.55rem] text-stone-500">&</span>
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-serif text-[1.05rem] tracking-tight text-stone-800">
                {brand.name}
              </span>
              <span className="mt-1 text-[0.62rem] uppercase tracking-[0.22em] text-stone-500">
                Dental Atelier
              </span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-9">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="relative text-[0.82rem] tracking-wide text-stone-700 transition-colors hover:text-stone-900"
              >
                <span>{l.label}</span>
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-stone-800 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={brand.phoneHref}
              className="hidden md:inline-flex items-center gap-2 text-[0.8rem] tracking-wide text-stone-700 hover:text-stone-900 transition-colors"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-sage animate-[pulseSoft_2.4s_ease-in-out_infinite]" />
              {brand.phone}
            </a>
            <Link
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 rounded-full border border-stone-800 px-5 py-2.5 text-[0.78rem] uppercase tracking-[0.14em] text-stone-800 transition-colors hover:bg-stone-800 hover:text-ivory"
            >
              Book a Visit
            </Link>
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden flex h-10 w-10 items-center justify-center rounded-full border border-stone-300"
              aria-label="Open menu"
            >
              <Menu strokeWidth={1.3} className="h-5 w-5 text-stone-800" />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[60] bg-stone-900 text-ivory"
          >
            <div className="container-x flex h-[60px] md:h-[72px] items-center justify-between">
              <span className="font-serif text-lg">{brand.name}</span>
              <button
                onClick={() => setOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory/30"
                aria-label="Close menu"
              >
                <X strokeWidth={1.3} className="h-5 w-5" />
              </button>
            </div>
            <nav className="container-x mt-10 flex flex-col gap-6">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  className="border-b border-ivory/10 pb-4 font-serif text-4xl tracking-tight"
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>
            <div className="container-x mt-12 flex flex-col gap-3 text-ivory/70">
              <a href={brand.phoneHref}>{brand.phone}</a>
              <a href={`mailto:${brand.email}`}>{brand.email}</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
