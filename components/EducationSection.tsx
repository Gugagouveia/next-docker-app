"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { FADE_IN_ANIMATION } from "@/constants/animation";
import { EDUCATION } from "@/constants/content";

export const EducationSection = () => {
  return (
    <section id="formacao" className="relative z-10 py-32 max-w-5xl mx-auto px-6">
      <motion.div 
        initial={FADE_IN_ANIMATION.initial}
        whileInView={FADE_IN_ANIMATION.animate}
        viewport={{ once: true }}
        transition={FADE_IN_ANIMATION.transition}
        className="mb-16"
      >
        <h2 className="text-zinc-500 text-sm font-bold uppercase tracking-[0.2em] mb-2">
          Educação
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold">
          Formação Acadêmica
        </h3>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {EDUCATION.map((edu) => (
          <div 
            key={edu.institution}
            className="p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800/50 hover:border-indigo-500/50 transition-all group"
          >
            <GraduationCap className="text-indigo-500 mb-6 group-hover:scale-110 transition-transform" size={32} />
            <h4 className="text-indigo-500 font-mono text-xs uppercase tracking-widest mb-2">
              {edu.level}
            </h4>
            <h3 className="text-xl font-bold mb-1">{edu.institution}</h3>
            <p className="text-zinc-400 text-sm mb-4">{edu.course}</p>
            <span className="text-zinc-500 text-xs font-medium">{edu.period}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
