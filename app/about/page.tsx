"use client";

import { motion } from "framer-motion";
import { BackgroundGrid } from "@/components/BackgroundGrid";
import { Footer } from "@/components/Footer";
import { AboutHeader } from "@/components/AboutHeader";
import { AboutContentSection } from "@/components/AboutContentSection";
import { FADE_IN_ANIMATION } from "@/constants/animation";

export default function About() {
  return (
    <main className="bg-zinc-950 text-zinc-100 min-h-screen scroll-smooth selection:bg-indigo-500/30 overflow-x-hidden">
      <BackgroundGrid />
      <AboutHeader />

      <section className="relative z-10 px-6 md:px-16 pt-32 pb-24 max-w-6xl mx-auto">
        <motion.div
          initial={FADE_IN_ANIMATION.initial}
          animate={FADE_IN_ANIMATION.animate}
          transition={FADE_IN_ANIMATION.transition}
          className="space-y-32"
        >
          <AboutContentSection
            title={
              <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-100">
                Sobre <span className="text-indigo-500">mim</span>
              </h1>
            }
            content={
              <>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="text-lg"
                >
                  Desenvolvedor de software focado em criar interfaces bem pensadas,
                  código limpo e soluções simples para problemas complexos.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  Trabalho com desenvolvimento web e mobile, sempre buscando
                  performance, boa experiência do usuário e produtos fáceis de
                  manter. Gosto de entender como as coisas funcionam nos bastidores
                  e transformar isso em soluções reais.
                </motion.p>
              </>
            }
            imageSrc="/images/Gemini_Generated_Image_9s3u7l9s3u7l9s3u - Editado.png"
            imageAlt="Imagem representando desenvolvimento"
            imagePosition="right"
          />

          <AboutContentSection
            title="Mentalidade & Filosofia"
            content={
              <ul className="space-y-4">
                {[
                  "Código simples, organizado e bem estruturado",
                  "Performance e experiência do usuário lado a lado",
                  "Aprendizado contínuo como parte do processo",
                  "Boa comunicação e trabalho em equipe"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                    className="flex gap-3"
                  >
                    <span className="text-indigo-500 font-bold">•</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            }
            imageSrc="/images/7e14c933-15b6-4b22-a820-a713cbec39cb.png"
            imageAlt="Imagem representando processo e filosofia"
            imagePosition="left"
          />

          <AboutContentSection
            title="Além do código"
            content={
              <>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  Acompanho Fórmula 1, sou torcedor do Manchester City e pratico
                  natação — atividades que refletem disciplina, foco e constância.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  Também gosto de desafios que exigem persistência e aprendizado
                  contínuo. Entre eles, <strong className="text-zinc-100">ELDEN RING</strong>{" "}
                  se destaca como um dos meus jogos favoritos.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  Essa combinação de interesses influencia diretamente minha forma
                  de pensar, trabalhar e evoluir como desenvolvedor.
                </motion.p>
              </>
            }
            imageSrc="/images/designabout.png"
            imageAlt="Imagem representando hobbies e inspiração"
            imagePosition="right"
            imageHeight={500}
          />
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
