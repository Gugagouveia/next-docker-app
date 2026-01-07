"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { FADE_IN_ANIMATION } from "@/constants/animation";
import { EDUCATION } from "@/constants/content";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
        {EDUCATION.map((edu, index) => (
          <motion.div
            key={edu.institution}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="bg-zinc-900/40 border-zinc-800/50 hover:border-indigo-500/50 hover:scale-105 transition-all group h-full backdrop-blur-sm">
              <CardHeader>
                <div className="mb-4">
                  <GraduationCap className="text-indigo-500" size={32} />
                </div>
                <Badge variant="outline" className="text-indigo-400 border-indigo-500/50 w-fit mb-2">
                  {edu.level}
                </Badge>
                <CardTitle className="text-xl font-bold mb-1">{edu.institution}</CardTitle>
                <CardDescription className="text-zinc-400 mb-4">{edu.course}</CardDescription>
              </CardHeader>
              <CardContent>
                <span className="text-zinc-500 text-xs font-medium">{edu.period}</span>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
