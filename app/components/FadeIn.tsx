"use client";

import type { CSSProperties, ReactNode } from "react";
import { useInView } from "../hooks/useInView";

type Direction = "top" | "bottom" | "left" | "right" | "none";

const axis: Record<Direction, { x: number; y: number }> = {
  top: { x: 0, y: -1 },
  bottom: { x: 0, y: 1 },
  left: { x: -1, y: 0 },
  right: { x: 1, y: 0 },
  none: { x: 0, y: 0 },
};

export default function FadeIn({
  children,
  direction = "bottom",
  duration = 0.6,
  delay = 0,
  distance = 32,
  once = true,
  threshold = 0.2,
  className,
}: {
  children: ReactNode;
  direction?: Direction;
  /** seconds */
  duration?: number;
  /** seconds */
  delay?: number;
  /** px */
  distance?: number;
  once?: boolean;
  threshold?: number;
  className?: string;
}) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold, once });
  const { x, y } = axis[direction];

  const style: CSSProperties = {
    opacity: inView ? 1 : 0,
    translate: inView ? "0 0" : `${x * distance}px ${y * distance}px`,
    transition: `opacity ${duration}s ease-out ${delay}s, translate ${duration}s ease-out ${delay}s`,
  };

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
