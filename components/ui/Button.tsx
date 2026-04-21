"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type Variant = "primary" | "secondary" | "ghost" | "outline-dark";

interface Props {
  href?: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  withArrow?: boolean;
  onClick?: () => void;
}

const base =
  "group relative inline-flex items-center gap-3 font-sans text-[0.82rem] uppercase tracking-[0.14em] rounded-full px-6 py-3.5 transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]";

const variants: Record<Variant, string> = {
  primary:
    "bg-stone-800 text-ivory hover:bg-stone-700",
  secondary:
    "border border-stone-300 text-stone-800 hover:border-stone-800 hover:bg-stone-800/5",
  ghost:
    "text-stone-800 hover:text-stone-600",
  "outline-dark":
    "border border-ivory/30 text-ivory hover:border-ivory hover:bg-ivory/5",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  withArrow = true,
  onClick,
}: Props) {
  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {withArrow && (
        <span className="relative z-10 h-[1.4em] w-[1.4em] overflow-hidden">
          <ArrowUpRight
            className="absolute inset-0 h-full w-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full group-hover:translate-x-full"
            strokeWidth={1.4}
          />
          <ArrowUpRight
            className="absolute inset-0 h-full w-full translate-y-full -translate-x-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 group-hover:translate-x-0"
            strokeWidth={1.4}
          />
        </span>
      )}
    </>
  );

  const classes = cn(base, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {content}
      </Link>
    );
  }
  return (
    <motion.button className={classes} onClick={onClick} whileTap={{ scale: 0.98 }}>
      {content}
    </motion.button>
  );
}
