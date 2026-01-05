"use client";

import { motion } from "framer-motion";
import { SLIDE_IN_FROM_LEFT } from "@/constants/animation";
import type { ExperienceCardProps } from "@/types";

export const ExperienceCard = ({ title, role, period, description }: ExperienceCardProps) => {
  return (
    <motion.div 
      initial={SLIDE_IN_FROM_LEFT.initial}
      whileInView={SLIDE_IN_FROM_LEFT.animate}
      viewport={{ once: true }}
      className="relative pl-8 border-l border-zinc-800 group"
    >
      <div className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_10px_#6366f1]" />
      <span className="text-indigo-500 font-mono text-sm uppercase tracking-wider">
        {period}
      </span>
      <h3 className="text-2xl font-bold mt-2">{title}</h3>
      <p className="text-zinc-400 font-medium mb-4">{role}</p>
      <div className="text-zinc-500 text-sm leading-relaxed">{description}</div>
    </motion.div>
  );
};
