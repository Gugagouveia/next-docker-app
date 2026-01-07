"use client";

import { motion } from "framer-motion";

interface GradientOrbsProps {
  className?: string;
}

export const GradientOrbs = ({ className = "" }: GradientOrbsProps) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(99, 102, 241, 0.15), transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        initial={{ top: "10%", left: "10%" }}
      />

      {/* Orb 2 - Pink */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(168, 85, 247, 0.12), transparent 70%)",
          filter: "blur(70px)",
        }}
        animate={{
          x: [0, -80, 0],
          y: [0, 100, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        initial={{ top: "50%", right: "10%" }}
      />

      {/* Orb 3 - Indigo */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(79, 70, 229, 0.1), transparent 70%)",
          filter: "blur(50px)",
        }}
        animate={{
          x: [0, 60, 0],
          y: [0, -80, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        initial={{ bottom: "20%", left: "30%" }}
      />
    </div>
  );
};
