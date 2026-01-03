"use client";

import {
  Github,
  Linkedin,
  Mail,
  Code2,
  Layers,
  ShieldCheck,
  GraduationCap,
  ArrowUp,
  ArrowDown,
} from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setIsAtTop(scrolled < 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const handleScrollNavigation = () => {
    if (isAtTop) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <main className="bg-zinc-950 text-zinc-100 min-h-screen scroll-smooth selection:bg-indigo-500/30 overflow-x-hidden">
      <div
        className="fixed inset-0 z-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <motion.button
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={handleScrollNavigation}
        className="fixed right-8 bottom-8 z-50 p-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full shadow-2xl shadow-indigo-600/30 transition-all hover:scale-110 active:scale-95"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {isAtTop ? <ArrowDown size={24} /> : <ArrowUp size={24} />}
      </motion.button>

      <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-6">
        <motion.nav 
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className="w-full max-w-5xl flex items-center justify-between px-6 py-3 rounded-2xl border border-zinc-800/50 bg-zinc-950/50 backdrop-blur-md shadow-2xl shadow-indigo-500/5"
        >
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-white group-hover:rotate-12 transition-transform duration-300">
              G
            </div>
            <span className="font-bold tracking-tighter text-zinc-100 hidden sm:block">
              Gustavo<span className="text-indigo-500">.dev</span>
            </span>
          </div>

          <ul className="hidden md:flex items-center gap-1 bg-zinc-900/50 p-1 rounded-xl border border-zinc-800">
            <li>
              <a href="#home" onClick={(e) => handleSmoothScroll(e, '#home')} className="px-4 py-2 rounded-lg text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all">
                Início
              </a>
            </li>
            <li>
              <a href="#skills" onClick={(e) => handleSmoothScroll(e, '#skills')} className="px-4 py-2 rounded-lg text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all">
                Stack
              </a>
            </li>
            <li>
              <a href="#experiencia" onClick={(e) => handleSmoothScroll(e, '#experiencia')} className="px-4 py-2 rounded-lg text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all">
                Carreira
              </a>
            </li>
            <li>
              <a href="#formacao" onClick={(e) => handleSmoothScroll(e, '#formacao')} className="px-4 py-2 rounded-lg text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all">
                Formação
              </a>
            </li>
          </ul>

          <div className="flex items-center gap-4">
            <a 
              href="https://www.linkedin.com/in/gustavo-gouveia" 
              target="_blank"
              className="hidden sm:block text-zinc-400 hover:text-indigo-500 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="#contato"
              onClick={(e) => handleSmoothScroll(e, '#contato')}
              className="px-5 py-2 rounded-xl bg-indigo-600 text-white text-sm font-bold hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-600/20 active:scale-95"
            >
              Contato
            </a>
          </div>
        </motion.nav>
      </header>

      <section
        id="home"
        className="relative z-10 min-h-screen px-6 md:px-16 pt-32 pb-24 max-w-7xl mx-auto flex items-center"
      >
        <div className="grid md:grid-cols-2 gap-16 items-center w-full">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={fadeIn}
          >
            <span className="text-indigo-500 font-mono text-sm uppercase tracking-widest">
              Engenharia de Software
            </span>

            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mt-4">
              Gustavo <span className="text-indigo-500">Gouveia</span>
            </h1>

            <p className="text-zinc-400 mt-6 max-w-xl leading-relaxed">
              Desenvolvedor de software focado em criar experiências digitais
              modernas, performáticas e bem estruturadas — do backend ao
              frontend.
            </p>

            <div className="flex gap-4 mt-10">
              <a
                href="#experiencia"
                onClick={(e) => handleSmoothScroll(e, '#experiencia')}
                className="px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition font-bold shadow-lg shadow-indigo-600/20"
              >
                Experiência
              </a>

              <a
                href="https://github.com/Gugagouveia"
                target="_blank"
                className="px-8 py-4 rounded-xl border border-zinc-700 hover:border-indigo-500 transition font-bold"
              >
                GitHub
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
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

      <section id="skills" className="relative z-10 py-32 max-w-7xl mx-auto px-6">
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
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
          <SkillCard
            icon={<Code2 />}
            title="Frontend"
            text="React.js, Next.js, TypeScript e Tailwind CSS para interfaces modernas."
          />
          <SkillCard
            icon={<Layers />}
            title="Backend"
            text="Node.js, Express e APIs REST bem estruturadas e escaláveis."
          />
          <SkillCard
            icon={<ShieldCheck />}
            title="Qualidade"
            text="Testes unitários com Jest, foco em confiabilidade e manutenção."
          />
        </div>
      </section>

      <section
        id="experiencia"
        className="relative z-10 py-32 max-w-5xl mx-auto px-6"
      >
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
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
          <ExperienceCard
            title="Aramis Menswear"
            role="Desenvolvedor de Software Júnior"
            period="Outubro 2024 — Presente"
            description={
              <>
                Desenvolvimento de aplicações web full-stack com foco em performance, qualidade e escalabilidade.
                <ul className="list-disc list-inside mt-4 space-y-2">
                  <li>Frontend com React.js e TypeScript</li>
                  <li>Criação e manutenção de APIs com Node.js e Express</li>
                  <li>Testes unitários utilizando Jest</li>
                  <li>Atuação em times ágeis seguindo Scrum</li>
                </ul>
              </>
            }
          />

          <ExperienceCard
            title="Devbox"
            role="Estagiário de Desenvolvimento de Software"
            period="Agosto 2023 — Janeiro 2024"
            description="Desenvolvimento de APIs REST utilizando JavaScript e Node.js, com foco em organização de código e boas práticas."
          />
        </div>
      </section>

      <section id="formacao" className="relative z-10 py-32 max-w-5xl mx-auto px-6">
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
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
          <div className="p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800/50 hover:border-indigo-500/50 transition-all group">
            <GraduationCap className="text-indigo-500 mb-6 group-hover:scale-110 transition-transform" size={32} />
            <h4 className="text-indigo-500 font-mono text-xs uppercase tracking-widest mb-2">Pós-graduação</h4>
            <h3 className="text-xl font-bold mb-1">Centro Universitário UNIFAFIRE</h3>
            <p className="text-zinc-400 text-sm mb-4">MBA Engenharia de Software</p>
            <span className="text-zinc-500 text-xs font-medium">Junho 2025 — Dezembro 2026</span>
          </div>

          <div className="p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800/50 hover:border-indigo-500/50 transition-all group">
            <GraduationCap className="text-indigo-500 mb-6 group-hover:scale-110 transition-transform" size={32} />
            <h4 className="text-indigo-500 font-mono text-xs uppercase tracking-widest mb-2">Graduação</h4>
            <h3 className="text-xl font-bold mb-1">Senac Brasil</h3>
            <p className="text-zinc-400 text-sm mb-4">Análise e Desenvolvimento de Sistemas</p>
            <span className="text-zinc-500 text-xs font-medium">Janeiro 2022 — Dezembro 2024</span>
          </div>
        </div>
      </section>

      <footer
        id="contato"
        className="relative z-10 border-t border-zinc-900 py-24 text-center"
      >
        <h2 className="text-3xl font-bold mb-10">Conecte-se comigo</h2>
        <div className="flex justify-center gap-6 mb-12">
          <a
            href="mailto:gustavo_agj@outlook.com"
            className="p-4 bg-zinc-900 rounded-full hover:text-indigo-400 border border-zinc-800 transition shadow-lg hover:shadow-indigo-500/10"
          >
            <Mail size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/gustavo-gouveia"
            target="_blank"
            className="p-4 bg-zinc-900 rounded-full hover:text-indigo-400 border border-zinc-800 transition shadow-lg hover:shadow-indigo-500/10"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://github.com/Gugagouveia"
            target="_blank"
            className="p-4 bg-zinc-900 rounded-full hover:text-indigo-400 border border-zinc-800 transition shadow-lg hover:shadow-indigo-500/10"
          >
            <Github size={24} />
          </a>
        </div>

        <p className="text-zinc-600 text-sm font-medium tracking-widest uppercase">
          © {new Date().getFullYear()} Gustavo Gouveia
        </p>
      </footer>
    </main>
  );
}

function SkillCard({ icon, title, text }: any) {
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
}

function ExperienceCard({ title, role, period, description }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="relative pl-8 border-l border-zinc-800 group"
    >
      <div className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_10px_#6366f1]" />
      <span className="text-indigo-500 font-mono text-sm uppercase tracking-wider">
        {period}
      </span>
      <h3 className="text-2xl font-bold mt-2">{title}</h3>
      <p className="text-zinc-400 font-medium mb-4">{role}</p>
      <div className="text-zinc-500 text-sm leading-relaxed">{description}</div>
    </motion.div>
  );
}
