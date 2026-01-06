"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export const AboutHeader = () => {
  return (
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
  );
};
