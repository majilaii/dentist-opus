"use client";

import Link from "next/link";
import { brand } from "@/lib/content";

const sections = [
  {
    title: "Practice",
    links: [
      { label: "About", href: "#about" },
      { label: "Team", href: "#team" },
      { label: "Journal", href: "#transformation" },
      { label: "Studio", href: "#" },
    ],
  },
  {
    title: "Care",
    links: [
      { label: "Preventive", href: "#services" },
      { label: "Cosmetic", href: "#services" },
      { label: "Invisalign", href: "#services" },
      { label: "Veneers", href: "#services" },
      { label: "Restorative", href: "#services" },
      { label: "Emergency", href: "#services" },
    ],
  },
  {
    title: "Patients",
    links: [
      { label: "New patients", href: "#contact" },
      { label: "Insurance & financing", href: "#" },
      { label: "FAQ", href: "#" },
      { label: "Forms", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative bg-stone-800 text-ivory">
      <div className="container-x py-14 md:py-16">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-5 lg:col-span-6">
            <Link href="#top" className="flex items-center gap-3">
              <span className="relative flex h-9 w-9 items-center justify-center">
                <span className="absolute inset-0 rounded-full border border-ivory/40" />
                <span className="font-serif text-[0.95rem] leading-none text-ivory">N</span>
                <span className="absolute -right-1 -bottom-0.5 font-serif text-[0.55rem] text-ivory/60">&</span>
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-serif text-[1.2rem] tracking-tight text-ivory">
                  {brand.name}
                </span>
                <span className="mt-1 text-[0.62rem] uppercase tracking-[0.22em] text-ivory/50">
                  A private dental atelier
                </span>
              </span>
            </Link>
            <p className="mt-6 max-w-sm text-[0.95rem] leading-[1.7] text-ivory/70">
              A boutique dental practice on Fillmore Street, serving San Francisco with
              considered, unhurried, long-term care since 2014.
            </p>
            <div className="mt-6 font-sans text-[0.9rem] text-ivory/70 space-y-1">
              <div>{brand.address.line1}</div>
              <div>{brand.address.line2}</div>
              <div className="pt-2">
                <a href={brand.phoneHref} className="hover:text-ivory transition-colors">{brand.phone}</a>
              </div>
              <div>
                <a href={`mailto:${brand.email}`} className="hover:text-ivory transition-colors">{brand.email}</a>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-7 lg:col-span-6 grid grid-cols-3 gap-6 md:gap-8">
            {sections.map((s) => (
              <div key={s.title}>
                <div className="text-[0.72rem] uppercase tracking-[0.22em] text-ivory/50 mb-5">
                  {s.title}
                </div>
                <ul className="space-y-3 text-[0.95rem] text-ivory/80">
                  {s.links.map((l) => (
                    <li key={l.label}>
                      <Link href={l.href} className="hover:text-ivory transition-colors">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-ivory/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[0.78rem] text-ivory/50">
          <div>© {new Date().getFullYear()} {brand.name}. All rights reserved.</div>
          <div className="flex items-center gap-5">
            <Link href="#" className="hover:text-ivory/80 transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-ivory/80 transition-colors">Accessibility</Link>
            <Link href="#" className="hover:text-ivory/80 transition-colors">HIPAA Notice</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
