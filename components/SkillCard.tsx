"use client";

import { motion } from "framer-motion";
import type { SkillCardProps } from "@/types";

export const SkillCard = ({ icon, title, text }: SkillCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800/50 hover:bg-zinc-900 hover:border-indigo-500/50 transition-all duration-300 group"
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-500 mb-6 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-zinc-400 text-sm leading-relaxed">{text}</p>
    </motion.div>
  );
};
