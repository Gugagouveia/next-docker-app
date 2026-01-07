/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import { FADE_IN_ANIMATION, SLIDE_IN_FROM_RIGHT } from "@/constants/animation";
import { SITE_INFO } from "@/constants/content";
import { smoothScrollTo } from "@/utils/scroll";
import { TextShimmer } from "@/components/text-animations/TextShimmer";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { FloatingParticles } from "@/components/animations/FloatingParticles";

export const HeroSection = () => {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    smoothScrollTo(targetId);
  };

  return (
    <section
      id="home"
      className="relative z-10 min-h-screen px-6 md:px-16 pt-32 pb-24 max-w-7xl mx-auto flex items-center"
    >

      <FloatingParticles count={30} />
      
      <div className="grid md:grid-cols-2 gap-16 items-center w-full">
        <motion.div 
          initial={FADE_IN_ANIMATION.initial}
          animate={FADE_IN_ANIMATION.animate}
          transition={FADE_IN_ANIMATION.transition}
        >
          <motion.span 
            className="text-indigo-500 font-mono text-sm uppercase tracking-widest inline-block"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {SITE_INFO.title}
          </motion.span>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mt-4">
            
            <TextShimmer 
              text="Gustavo Gouveia" 
              className="inline-block" 
              shimmerColor="#6366f1"
              duration={2.5}
            />
          </h1>

          <motion.p 
            className="text-zinc-400 mt-6 max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            {SITE_INFO.description}
          </motion.p>

          <motion.div 
            className="flex gap-4 mt-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <MagneticButton strength={0.2}>
              <a
                href="#experiencia"
                onClick={(e) => handleSmoothScroll(e, '#experiencia')}
                className="px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition font-bold shadow-lg shadow-indigo-600/20 block"
              >
                Experiência
              </a>
            </MagneticButton>

            <MagneticButton strength={0.2}>
              <a
                href={SITE_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl border border-zinc-700 hover:border-indigo-500 transition font-bold block"
              >
                GitHub
              </a>
            </MagneticButton>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={SLIDE_IN_FROM_RIGHT.initial}
          animate={SLIDE_IN_FROM_RIGHT.animate}
          transition={SLIDE_IN_FROM_RIGHT.transition}
          className="hidden md:flex justify-end"
        >
          <img
            src="/imagem-a-direita-removebg-preview.png"
            alt="Visual tecnológico"
            className="w-full max-w-[480px] object-contain cursor-pointer transition-transform duration-500 hover:scale-[1.04] hover:drop-shadow-[0_25px_50px_rgba(99,102,241,0.35)]"
          />
        </motion.div>
      </div>
    </section>
  );
};
