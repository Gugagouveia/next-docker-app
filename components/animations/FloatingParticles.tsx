"use client";

import { motion } from "framer-motion";

interface FloatingParticlesProps {
  count?: number;
  color?: string;
  minSize?: number;
  maxSize?: number;
  className?: string;
}

const seededRandom = (seed: number) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

export const FloatingParticles = ({
  count = 20,
  color = "rgba(99, 102, 241, 0.3)",
  minSize = 2,
  maxSize = 6,
  className = "",
}: FloatingParticlesProps) => {
  const particles = Array.from({ length: count }, (_, i) => ({
    id: i,
    x: seededRandom(i * 2) * 100,
    y: seededRandom(i * 3) * 100,
    size: seededRandom(i * 4) * (maxSize - minSize) + minSize,
    duration: seededRandom(i * 5) * 10 + 10,
    delay: seededRandom(i * 6) * 5,
    xOffset: (i % 3) * 5 - 5,
  }));

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            backgroundColor: color,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, particle.xOffset, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};
