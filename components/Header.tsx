"use client";

import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import { SLIDE_DOWN_ANIMATION } from "@/constants/animation";
import { NAV_LINKS } from "@/constants/navigation";
import { SITE_INFO } from "@/constants/content";
import { smoothScrollTo } from "@/utils/scroll";

export const Header = () => {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    smoothScrollTo(targetId);
  };

  return (
    <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-6">
      <motion.nav 
        initial={SLIDE_DOWN_ANIMATION.initial}
        animate={SLIDE_DOWN_ANIMATION.animate}
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

        <ul className="hidden md:flex items-stretch bg-zinc-900/50 rounded-xl border border-zinc-800 overflow-hidden">
          {NAV_LINKS.map((link) => (
            <li key={link.href} className="flex">
              <a 
                href={link.href} 
                onClick={(e) => handleSmoothScroll(e, link.href)} 
                className="px-6 py-2.5 flex items-center text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <a 
            href={SITE_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:block text-zinc-400 hover:text-indigo-500 transition-colors"
            aria-label="LinkedIn"
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
          <a 
            href="/about"
            className="px-5 py-2 rounded-xl border border-indigo-600 text-indigo-400 text-sm font-bold hover:bg-indigo-600 hover:text-white transition-all shadow-lg shadow-indigo-600/10 active:scale-95"
          >
            Sobre mim
          </a>
        </div>
      </motion.nav>
    </header>
  );
};
