"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { BackgroundGrid } from "@/components/BackgroundGrid";
import { Footer } from "@/components/Footer";
import { FADE_IN_ANIMATION } from "@/constants/animation";

export default function About() {
  return (
    <main className="bg-zinc-950 text-zinc-100 min-h-screen scroll-smooth selection:bg-indigo-500/30 overflow-x-hidden">
      <BackgroundGrid />

      <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-6">
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className="w-full max-w-5xl flex items-center justify-between px-6 py-3 rounded-2xl border border-zinc-800/50 bg-zinc-950/50 backdrop-blur-md shadow-2xl shadow-indigo-500/5"
        >
          <Link
            href="/"
            className="flex items-center gap-2 text-zinc-400 hover:text-indigo-500 transition-colors group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium text-sm">Voltar</span>
          </Link>

          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-white group-hover:rotate-12 transition-transform duration-300">
              G
            </div>
            <span className="font-bold tracking-tighter text-zinc-100 hidden sm:block">
              Gustavo<span className="text-indigo-500">.dev</span>
            </span>
          </div>
        </motion.nav>
      </header>

      <section className="relative z-10 px-6 md:px-16 pt-32 pb-24 max-w-6xl mx-auto">
        <motion.div
          initial={FADE_IN_ANIMATION.initial}
          animate={FADE_IN_ANIMATION.animate}
          transition={FADE_IN_ANIMATION.transition}
          className="space-y-32"
        >
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6 text-zinc-400 leading-relaxed"
            >
              <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-100">
                Sobre <span className="text-indigo-500">mim</span>
              </h1>

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
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              whileHover={{ scale: 1.02, rotateY: 5 }}
              className="relative w-full h-[450px] rounded-3xl overflow-hidden border border-zinc-800/50 hidden md:block"
            >
              <Image
                src="/images/Gemini_Generated_Image_9s3u7l9s3u7l9s3u - Editado.png"
                alt="Imagem representando desenvolvimento"
                fill
                className="object-contain"
              />
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              whileHover={{ scale: 1.02, rotateY: -5 }}
              className="relative w-full h-[450px] rounded-3xl overflow-hidden border border-zinc-800/50 order-2 md:order-1 hidden md:block"
            >
              <Image
               src="/images/7e14c933-15b6-4b22-a820-a713cbec39cb.png"
                alt="Imagem representando processo e filosofia"
                fill
                className="object-contain"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6 text-zinc-400 leading-relaxed order-1 md:order-2"
            >
              <h2 className="text-3xl font-bold text-zinc-100">
                Mentalidade & Filosofia
              </h2>

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
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6 text-zinc-400 leading-relaxed"
            >
              <h2 className="text-3xl font-bold text-zinc-100">
                Além do código
              </h2>

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
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              whileHover={{ scale: 1.02, rotateY: -5 }}
              className="relative w-full h-[500px] rounded-3xl overflow-hidden border border-zinc-800/50 hidden md:block"
            >
              <Image
                src="/images/designabout.png"
                alt="Imagem representando hobbies e inspiração"
                fill
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
