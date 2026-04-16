"use client";

import { motion } from "framer-motion";

type Direction = "up" | "down" | "left" | "right";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: Direction;
  className?: string;
}

const offsets: Record<Direction, { x?: number; y?: number }> = {
  up:    { y: 32 },
  down:  { y: -32 },
  left:  { x: 32 },
  right: { x: -32 },
};

export default function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className,
}: FadeInProps) {
  const offset = offsets[direction];

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
