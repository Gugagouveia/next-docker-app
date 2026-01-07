"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface HoverGlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
}

export const HoverGlowCard = ({
  children,
  className = "",
  glowColor = "rgba(99, 102, 241, 0.5)",
}: HoverGlowCardProps) => {
  return (
    <motion.div
      className={`relative ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="absolute inset-0 rounded-lg opacity-0"
        style={{
          background: `radial-gradient(circle at center, ${glowColor}, transparent 70%)`,
        }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};
