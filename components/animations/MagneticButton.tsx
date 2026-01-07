"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useState } from "react";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}

export const MagneticButton = ({
  children,
  className = "",
  strength = 0.3,
}: MagneticButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 300 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isHovered) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const distanceX = (e.clientX - centerX) * strength;
    const distanceY = (e.clientY - centerY) * strength;
    
    x.set(distanceX);
    y.set(distanceY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className={className}
      style={{ x: xSpring, y: ySpring }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  );
};
