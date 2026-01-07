"use client";

import { motion } from "framer-motion";

interface AnimatedGridProps {
  rows?: number;
  cols?: number;
  className?: string;
  lineColor?: string;
  glowColor?: string;
}

export const AnimatedGrid = ({
  rows = 20,
  cols = 20,
  className = "",
  lineColor = "rgba(99, 102, 241, 0.1)",
  glowColor = "rgba(99, 102, 241, 0.3)",
}: AnimatedGridProps) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg className="w-full h-full">
        <defs>
          <pattern
            id="grid"
            width={`${100 / cols}%`}
            height={`${100 / rows}%`}
            patternUnits="userSpaceOnUse"
          >
            <path
              d={`M ${100 / cols} 0 L 0 0 0 ${100 / rows}`}
              fill="none"
              stroke={lineColor}
              strokeWidth="0.5"
            />
          </pattern>
          <radialGradient id="gridGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={glowColor} stopOpacity="0.3" />
            <stop offset="100%" stopColor={glowColor} stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <motion.ellipse
          cx="50%"
          cy="50%"
          rx="30%"
          ry="30%"
          fill="url(#gridGlow)"
          animate={{
            rx: ["30%", "35%", "30%"],
            ry: ["30%", "35%", "30%"],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </svg>
    </div>
  );
};
