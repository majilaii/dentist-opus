"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface Props extends Omit<HTMLMotionProps<"span">, "children"> {
  children: React.ReactNode;
  delay?: number;
  as?: "span" | "div";
  className?: string;
  amount?: number;
}

export function Reveal({ children, delay = 0, className, amount = 0.3, ...rest }: Props) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1], delay }}
      className={cn(className)}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

interface MaskProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  lineClassName?: string;
}

export function MaskLines({ children, className, delay = 0, lineClassName }: MaskProps) {
  const text = typeof children === "string" ? children : "";
  const words = text.split(" ");

  return (
    <span className={cn("inline-block", className)}>
      {words.map((w, i) => (
        <span key={i} className={cn("inline-block overflow-hidden align-bottom", lineClassName)}>
          <motion.span
            initial={{ y: "110%" }}
            whileInView={{ y: "0%" }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 1.1,
              ease: [0.16, 1, 0.3, 1],
              delay: delay + i * 0.055,
            }}
            className="inline-block"
          >
            {w}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
