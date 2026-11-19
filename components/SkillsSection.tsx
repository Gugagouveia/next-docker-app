import { Code2, Layers3, ShieldCheck } from "lucide-react";
import { SKILLS } from "@/constants/content";
import { COPY, SKILL_COPY, type Language } from "@/constants/i18n";

const icons = { Frontend: Code2, Backend: Layers3, Qualidade: ShieldCheck };

export const SkillsSection = ({ language }: { language: Language }) => (
  <section id="skills" className="content-section">
    <header className="section-heading">
      <p className="section-kicker">{COPY[language].stack}</p>
      <h2 className="section-title">{COPY[language].technologies}</h2>
    </header>
    <div className="skills-grid">
      {SKILLS.map((skill) => {
        const Icon = icons[skill.title];
        return <article className="site-card skill-card" key={skill.title}>
          <div className="section-icon"><Icon size={22} strokeWidth={1.7} /></div>
          <h3>{skill.title}</h3>
          <p>{SKILL_COPY[language][skill.title]}</p>
          <ul className="technology-list">{skill.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>
        </article>;
      })}
    </div>
  </section>
);
