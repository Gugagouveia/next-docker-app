"use client";

import { motion } from "framer-motion";
import { FADE_IN_ANIMATION } from "@/constants/animation";
import { EXPERIENCES } from "@/constants/content";
import { ExperienceCard } from "./ExperienceCard";

export const ExperienceSection = () => {
  return (
    <section
      id="experiencia"
      className="relative z-10 py-32 max-w-5xl mx-auto px-6"
    >
      <motion.div 
        initial={FADE_IN_ANIMATION.initial}
        whileInView={FADE_IN_ANIMATION.animate}
        viewport={{ once: true }}
        transition={FADE_IN_ANIMATION.transition}
        className="mb-16"
      >
        <h2 className="text-zinc-500 text-sm font-bold uppercase tracking-[0.2em] mb-2">
          Carreira
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold">
          Experiência Profissional
        </h3>
      </motion.div>

      <div className="space-y-20">
        {EXPERIENCES.map((exp) => (
          <ExperienceCard
            key={exp.title}
            title={exp.title}
            role={exp.role}
            period={exp.period}
            description={
              exp.highlights.length > 0 ? (
                <>
                  {exp.description}
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    {exp.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </>
              ) : (
                exp.description
              )
            }
          />
        ))}
      </div>
    </section>
  );
};
