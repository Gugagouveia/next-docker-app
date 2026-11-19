"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { SkillsSection } from "@/components/SkillsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { EducationSection } from "@/components/EducationSection";
import { Footer } from "@/components/Footer";
import { LanguageToggle } from "@/components/LanguageToggle";
import { SITE_INFO } from "@/constants/content";
import { COPY, type Language } from "@/constants/i18n";
import { useState } from "react";

export default function Home() {
  const [language, setLanguage] = useState<Language>("pt");
  const copy = COPY[language];

  return (
    <main className="portfolio-page">
      <div aria-hidden="true" className="ambient ambient-one" />
      <div aria-hidden="true" className="ambient ambient-two" />
      <header className="portfolio-header">
          <Link className="monogram" href="#home" aria-label="Gustavo Gouveia, início">GG<span>.</span></Link>
          <nav aria-label="Navegação principal" className="portfolio-nav">
            <Link className="active" href="#home">{copy.home}</Link>
            <Link href="#contato">{copy.contact}</Link>
          </nav>
          <LanguageToggle language={language} onChange={setLanguage} />
      </header>

      <section className="portfolio-hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span /> {copy.hello}</p>
            <h1>{language === "en" ? "I'm " : "Eu sou "}<span>Gustavo<br className="desktop-break" /> Gouveia</span></h1>
            <p className="hero-kicker">{copy.softwareEngineering}</p>
            <p className="hero-description">{copy.description}</p>
            <div className="hero-actions">
              <a className="download-button" href={`mailto:${SITE_INFO.email}?subject=${encodeURIComponent(copy.resume)}`}>{copy.resume} <ArrowUpRight size={15} /></a>
              <Link className="text-link" href="#contato">{copy.talk} <span>↗</span></Link>
            </div>
            <div className="hero-socials" aria-label="Redes sociais e contato">
              <a href={SITE_INFO.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer"><Linkedin size={16} /></a>
              <a href={SITE_INFO.github} aria-label="GitHub" target="_blank" rel="noreferrer"><Github size={16} /></a>
              <a href={`mailto:${SITE_INFO.email}`} aria-label="E-mail"><Mail size={16} /></a>
              <span className="social-rule" /><span>{copy.location}</span>
            </div>
          </div>
          <div className="portrait-stage" aria-label="Retrato de Gustavo Gouveia">
            <svg className="portrait-graphic" viewBox="0 0 600 680" fill="none" aria-hidden="true">
              <defs>
                <filter id="brush-softness" x="-25%" y="-25%" width="150%" height="150%">
                  <feGaussianBlur stdDeviation="16" />
                </filter>
              </defs>
              <path d="M73 540C64 418 83 256 160 157C228 69 340 42 431 87C497 120 530 191 519 278C511 218 485 171 442 141C369 90 280 108 222 166C146 241 125 390 128 501C112 524 91 538 73 540Z" fill="#dce2ec" fillOpacity=".78" filter="url(#brush-softness)" />
              <path d="M91 525C78 396 104 251 176 164C242 85 343 68 423 108C470 132 500 173 512 224" stroke="#cbd3e2" strokeWidth="29" strokeLinecap="round" strokeOpacity=".38" />
              <path d="M112 508C101 385 127 260 191 183C249 114 337 97 405 130C443 149 470 179 485 215" stroke="#e8ebf2" strokeWidth="9" strokeLinecap="round" strokeOpacity=".72" />
            </svg>
            <Image className="portrait-image" src="/images/retrato-gustavo-gouveia-transparent.png" alt="Gustavo Gouveia usando camisa branca" width={768} height={1029} sizes="(max-width: 700px) 90vw, 42vw" priority quality={100} unoptimized />
          </div>
      </section>
      <section className="below-fold" aria-label="Portfólio de Gustavo Gouveia">
        <div id="skills"><SkillsSection language={language} /></div>
        <div id="experiencia"><ExperienceSection language={language} /></div>
        <div id="formacao"><EducationSection language={language} /></div>
        <Footer language={language} />
      </section>
    </main>
  );
}
