import { EDUCATION } from "@/constants/content";
import { COPY, type Language } from "@/constants/i18n";

export const EducationSection = ({ language }: { language: Language }) => {
  const copy = COPY[language];

  return (
    <section className="content-section education-section" id="formacao">
      <div className="section-index"><span>04</span><span>{copy.educationEyebrow}</span></div>
      <div className="section-body">
        <header className="section-heading"><h2 className="section-title">{copy.educationTitle}</h2></header>
        <div className="education-list">
          {EDUCATION.map((education, index) => (
            <article className="education-entry" key={education.id}>
              <span className="education-number">0{index + 1}</span>
              <div><h3>{education.course[language]}</h3><p>{education.institution}</p></div>
              <span className="education-period">{education.period[language]}</span>
              <span className={`education-status status-${education.status}`}>{copy.educationStatus[education.status]}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
