"use client";

import { motion } from "framer-motion";
import { Code2, Layers, ShieldCheck } from "lucide-react";
import { FADE_IN_ANIMATION } from "@/constants/animation";
import { SKILLS } from "@/constants/content";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TextReveal } from "@/components/text-animations/TextReveal";
import { HoverGlowCard } from "@/components/animations/HoverGlowCard";
import { AnimatedGrid } from "@/components/animations/AnimatedGrid";

export const SkillsSection = () => {
  const skillIcons = {
    Frontend: <Code2 className="text-indigo-500" size={32} />,
    Backend: <Layers className="text-indigo-500" size={32} />,
    Qualidade: <ShieldCheck className="text-indigo-500" size={32} />
  };

  return (
    <section id="skills" className="relative z-10 py-32 max-w-7xl mx-auto px-6">
      {/* Animated Grid Background */}
      <AnimatedGrid className="opacity-30" />
      
      <motion.div 
        initial={FADE_IN_ANIMATION.initial}
        whileInView={FADE_IN_ANIMATION.animate}
        viewport={{ once: true }}
        transition={FADE_IN_ANIMATION.transition}
        className="mb-16 relative z-10"
      >
        <TextReveal 
          text="Stack" 
          className="text-zinc-500 text-sm font-bold uppercase tracking-[0.2em] mb-2"
          delay={0}
        />
        <TextReveal 
          text="Tecnologias & Ferramentas" 
          className="text-3xl md:text-4xl font-bold"
          delay={0.1}
        />
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 relative z-10">
        {SKILLS.map((skill, index) => (
          <motion.div
            key={skill.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <HoverGlowCard glowColor="rgba(99, 102, 241, 0.3)">
              <Card className="bg-zinc-900/40 border-zinc-800/50 hover:border-indigo-500/50 transition-all group h-full backdrop-blur-sm">
                <CardHeader>
                  <motion.div 
                    className="mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {skillIcons[skill.title as keyof typeof skillIcons]}
                  </motion.div>
                  <CardTitle className="text-xl font-bold">{skill.title}</CardTitle>
                  <CardDescription className="text-zinc-400">{skill.text}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.5 + techIndex * 0.05 }}
                      >
                        <Badge 
                          variant="secondary" 
                          className="bg-zinc-800/50 text-zinc-300 hover:bg-indigo-500/20 hover:text-indigo-400 transition-colors cursor-pointer"
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </HoverGlowCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
