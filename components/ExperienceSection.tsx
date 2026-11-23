import { EXPERIENCES } from "@/constants/content";
import { COPY, EXPERIENCE_DETAILS, type Language } from "@/constants/i18n";

export const ExperienceSection = ({ language }: { language: Language }) => {
  const copy = COPY[language];
  const details = language === "en" ? EXPERIENCE_DETAILS.en : null;

  return (
    <section className="content-section experience-section" id="experiencia">
      <div className="section-index"><span>02</span><span>{copy.experienceEyebrow}</span></div>
      <div className="section-body">
        <header className="section-heading">
          <h2 className="section-title">{copy.experienceTitle}</h2>
          <span className="section-count">0{EXPERIENCES.length} {language === "pt" ? "POSIÇÕES" : "POSITIONS"}</span>
        </header>
        <div className="experience-list">
          {EXPERIENCES.map((experience, index) => (
            <article className="experience-entry" key={experience.id}>
              <div className="experience-meta">
                <span className="experience-number">0{index + 1}</span>
                <span>{experience.period[language]}</span>
                <span>{experience.city}</span>
              </div>
              <div className="experience-detail">
                <div className="experience-heading">
                  <div>
                    <h3>{experience.company}</h3>
                    <p>{copy.experienceRole[experience.role]}</p>
                  </div>
                  {index === 0 && <span className="current-label"><i />{copy.current}</span>}
                </div>
                <p className="experience-intro">{copy.experienceIntro[experience.id]}</p>
                <ul>{experience.responsibilities.map((item, itemIndex) => <li key={itemIndex}>{details ? details[experience.id][itemIndex] : item}</li>)}</ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
