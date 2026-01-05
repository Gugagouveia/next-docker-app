"use client";

import { motion } from "framer-motion";
import { Code2, Layers, ShieldCheck } from "lucide-react";
import { FADE_IN_ANIMATION } from "@/constants/animation";
import { SKILLS } from "@/constants/content";
import { SkillCard } from "./SkillCard";

export const SkillsSection = () => {
  const skillIcons = [<Code2 key="code" />, <Layers key="layers" />, <ShieldCheck key="shield" />];

  return (
    <section id="skills" className="relative z-10 py-32 max-w-7xl mx-auto px-6">
      <motion.div 
        initial={FADE_IN_ANIMATION.initial}
        whileInView={FADE_IN_ANIMATION.animate}
        viewport={{ once: true }}
        transition={FADE_IN_ANIMATION.transition}
        className="mb-16"
      >
        <h2 className="text-zinc-500 text-sm font-bold uppercase tracking-[0.2em] mb-2">
          Stack
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold">
          Tecnologias & Ferramentas
        </h3>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {SKILLS.map((skill, index) => (
          <SkillCard
            key={skill.title}
            icon={skillIcons[index]}
            title={skill.title}
            text={skill.text}
          />
        ))}
      </div>
    </section>
  );
};
