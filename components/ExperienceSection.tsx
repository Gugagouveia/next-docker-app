"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { FADE_IN_ANIMATION } from "@/constants/animation";
import { EXPERIENCES } from "@/constants/content";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TextReveal } from "@/components/text-animations/TextReveal";
import { HoverGlowCard } from "@/components/animations/HoverGlowCard";

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
        <TextReveal 
          text="Carreira" 
          className="text-zinc-500 text-sm font-bold uppercase tracking-[0.2em] mb-2"
          delay={0}
        />
        <TextReveal 
          text="Experiência Profissional" 
          className="text-3xl md:text-4xl font-bold"
          delay={0.1}
        />
      </motion.div>

      <div className="space-y-8">
        {EXPERIENCES.map((exp, index) => (
          <motion.div
            key={exp.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <HoverGlowCard glowColor="rgba(99, 102, 241, 0.4)">
              <Card className="bg-zinc-900/40 border-zinc-800/50 hover:border-indigo-500/50 transition-all group backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <motion.div 
                      className="p-3 bg-indigo-500/10 rounded-lg group-hover:bg-indigo-500/20 transition-colors"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Briefcase className="text-indigo-500" size={24} />
                    </motion.div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold mb-1">{exp.title}</CardTitle>
                      <CardDescription className="text-indigo-400 font-medium mb-2">{exp.role}</CardDescription>
                      <Badge variant="outline" className="text-zinc-500 border-zinc-700">
                        {exp.period}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <motion.p 
                    className="text-zinc-400 mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {exp.description}
                  </motion.p>
                  {exp.highlights.length > 0 && (
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, hIndex) => (
                        <motion.li 
                          key={highlight} 
                          className="flex gap-2 text-zinc-300"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.3 + hIndex * 0.1 }}
                        >
                          <motion.span 
                            className="text-indigo-500 font-bold"
                            whileHover={{ scale: 1.5 }}
                            transition={{ duration: 0.2 }}
                          >
                            •
                          </motion.span>
                          <span>{highlight}</span>
                        </motion.li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            </HoverGlowCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
