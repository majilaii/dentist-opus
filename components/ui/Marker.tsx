"use client";

import { cn } from "@/lib/utils";

interface Props {
  label: string;
  className?: string;
  variant?: "light" | "dark";
}

export function SectionMarker({ label, className, variant = "light" }: Props) {
  return (
    <div
      className={cn(
        "flex items-center gap-4 font-sans text-[0.72rem] uppercase tracking-[0.2em]",
        variant === "light" ? "text-stone-500" : "text-ivory/60",
        className,
      )}
    >
      <span
        className={cn(
          "h-px w-10",
          variant === "light" ? "bg-stone-400/60" : "bg-ivory/30",
        )}
      />
      <span>{label}</span>
    </div>
  );
}
