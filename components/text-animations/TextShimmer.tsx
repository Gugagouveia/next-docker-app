"use client";

import { motion } from "framer-motion";
import { CSSProperties } from "react";

interface TextShimmerProps {
  text: string;
  className?: string;
  shimmerColor?: string;
  duration?: number;
  spread?: number;
}

export const TextShimmer = ({
  text,
  className = "",
  shimmerColor = "#a855f7",
  duration = 3,
  spread = 3,
}: TextShimmerProps) => {
  return (
    <motion.div
      className={`relative inline-block ${className}`}
      initial={{ backgroundPosition: "100% center" }}
      animate={{ backgroundPosition: "-100% center" }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
      }}
      style={
        {
          background: `linear-gradient(90deg, #fff 20%, ${shimmerColor} 50%, #fff 80%)`,
          backgroundSize: `200% 100%`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        } as CSSProperties
      }
    >
      {text}
    </motion.div>
  );
};
