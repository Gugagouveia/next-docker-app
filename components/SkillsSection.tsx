import { SKILLS } from "@/constants/content";
import { COPY, type Language } from "@/constants/i18n";

export const SkillsSection = ({ language }: { language: Language }) => {
  const copy = COPY[language];

  return (
    <section className="content-section skills-section" id="competencias">
      <div className="section-index"><span>03</span><span>{copy.skillEyebrow}</span></div>
      <div className="section-body">
        <header className="section-heading">
          <h2 className="section-title">{copy.skillTitle}</h2>
          <p className="section-subtitle">{language === "pt" ? "Tecnologias presentes na experiência profissional" : "Technologies used in professional experience"}</p>
        </header>
        <div className="skill-rows">
          {SKILLS.map((group, index) => (
            <div className="skill-row" key={group.id}>
              <div className="skill-label"><span>0{index + 1}</span><h3>{copy.skillGroups[group.id]}</h3></div>
              <ul>{group.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
