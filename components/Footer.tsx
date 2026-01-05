"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { SITE_INFO } from "@/constants/content";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: `mailto:${SITE_INFO.email}`, icon: Mail, label: "Email" },
    { href: SITE_INFO.linkedin, icon: Linkedin, label: "LinkedIn" },
    { href: SITE_INFO.github, icon: Github, label: "GitHub" }
  ];

  return (
    <footer
      id="contato"
      className="relative z-10 border-t border-zinc-900 py-24 text-center"
    >
      <h2 className="text-3xl font-bold mb-10">Conecte-se comigo</h2>
      <div className="flex justify-center gap-6 mb-12">
        {socialLinks.map(({ href, icon: Icon, label }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="p-4 bg-zinc-900 rounded-full hover:text-indigo-400 border border-zinc-800 transition shadow-lg hover:shadow-indigo-500/10"
            aria-label={label}
          >
            <Icon size={24} />
          </a>
        ))}
      </div>

      <p className="text-zinc-600 text-sm font-medium tracking-widest uppercase">
        © {currentYear} Gustavo Gouveia
      </p>
    </footer>
  );
};
