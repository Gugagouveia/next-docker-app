"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { EducationSection } from "@/components/EducationSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { Footer } from "@/components/Footer";
import { LanguageToggle } from "@/components/LanguageToggle";
import { SkillsSection } from "@/components/SkillsSection";
import { SITE_INFO } from "@/constants/content";
import { COPY, type Language } from "@/constants/i18n";

export default function Home() {
  const [language, setLanguage] = useState<Language>("pt");
  const copy = COPY[language];

  useEffect(() => {
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
  }, [language]);

  return (
    <main className="portfolio-page">
      <header className="portfolio-header">
        <Link className="monogram" href="#home" aria-label="Gustavo Gouveia, início">GG<span>.</span></Link>
        <nav aria-label={language === "pt" ? "Navegação principal" : "Main navigation"} className="portfolio-nav">
          <Link href="#sobre">{copy.profile}</Link>
          <Link href="#experiencia">{copy.experienceNav}</Link>
          <Link href="#competencias">{copy.skillsNav}</Link>
          <Link href="#contato">{copy.contact}</Link>
        </nav>
        <LanguageToggle language={language} onChange={setLanguage} />
      </header>

      <section className="portfolio-hero" id="home">
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="eyebrow"><span />{copy.hello}</p>
            <h1>{copy.titlePrefix}<br /><span>{copy.titleAccent}</span></h1>
            <p className="hero-name">{copy.heroRole}</p>
            <p className="hero-description">{copy.description}</p>
            <div className="hero-actions">
              <Link className="primary-link" href="#experiencia">{copy.primaryAction}<ArrowRight size={15} /></Link>
              <a className="secondary-link" href={`mailto:${SITE_INFO.email}`}>{copy.contactAction}</a>
            </div>
            <div className="hero-location"><MapPin size={14} strokeWidth={1.7} /><span>{copy.location}</span></div>
          </div>

          <div className="hero-visual">
            <div className="portrait-stage">
              <div className="portrait-orbit" aria-hidden="true" />
              <div className="portrait-frame">
                <Image className="portrait-image" src="/images/retrato-gustavo-gouveia-transparent.png" alt={copy.portraitAlt} width={768} height={1029} sizes="(max-width: 700px) 78vw, (max-width: 1000px) 42vw, 34vw" priority unoptimized />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="profile-section content-section" id="sobre">
        <div className="section-index"><span>01</span><span>{copy.profileEyebrow}</span></div>
        <div className="profile-content">
          <h2 className="section-title profile-title">{copy.profileTitle}</h2>
          <div className="profile-text">
            <p>{copy.profileParagraphOne}</p>
            <p>{copy.profileParagraphTwo}</p>
            <ul className="focus-list">{copy.profileFocus.map((focus) => <li key={focus}>{focus}</li>)}</ul>
          </div>
        </div>
      </section>

      <ExperienceSection language={language} />
      <SkillsSection language={language} />
      <EducationSection language={language} />

      <section className="contact-section" id="contato">
        <div className="contact-heading">
          <p className="section-kicker">{copy.contactEyebrow}</p>
          <h2>{copy.contactTitle}</h2>
          <p>{copy.contactText}</p>
        </div>
        <div className="contact-details">
          <a href={`mailto:${SITE_INFO.email}`}><Mail size={17} /><span><small>{copy.email}</small>{SITE_INFO.email}</span><ArrowRight size={15} /></a>
          <a href={SITE_INFO.whatsapp} target="_blank" rel="noreferrer"><Phone size={17} /><span><small>{copy.phone}</small>+55 (81) 98650-3252</span><ArrowRight size={15} /></a>
          <a href={SITE_INFO.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /><span><small>{copy.linkedin}</small>gustavo-gouveia</span><ArrowRight size={15} /></a>
          <a href={SITE_INFO.github} target="_blank" rel="noreferrer"><Github size={17} /><span><small>{copy.github}</small>Gugagouveia</span><ArrowRight size={15} /></a>
        </div>
      </section>

      <Footer language={language} />
    </main>
  );
}
