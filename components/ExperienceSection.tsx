import { BriefcaseBusiness } from "lucide-react";
import { EXPERIENCES } from "@/constants/content";
import { COPY, EXPERIENCE_COPY, type Language } from "@/constants/i18n";

export const ExperienceSection = ({ language }: { language: Language }) => (
  <section id="experiencia" className="content-section">
    <header className="section-heading">
      <p className="section-kicker">{COPY[language].career}</p>
      <h2 className="section-title">{COPY[language].experience}</h2>
    </header>
    <div className="experience-list">
      {EXPERIENCES.map((experience) => {
        const translated = EXPERIENCE_COPY[language][experience.title];
        return <article className="site-card experience-card" key={experience.title}>
        <div className="section-icon"><BriefcaseBusiness size={21} strokeWidth={1.7} /></div>
        <div className="experience-content">
          <p className="experience-period">{translated.period}</p>
          <h3>{experience.title}</h3>
          <p className="experience-role">{translated.role}</p>
          <p className="experience-description">{translated.description}</p>
          {translated.highlights.length > 0 && <ul className="experience-highlights">{translated.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>}
        </div>
      </article>;
      })}
    </div>
  </section>
);
