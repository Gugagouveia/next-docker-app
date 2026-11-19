import { GraduationCap } from "lucide-react";
import { EDUCATION } from "@/constants/content";
import { COPY, EDUCATION_COPY, type Language } from "@/constants/i18n";

export const EducationSection = ({ language }: { language: Language }) => (
  <section id="formacao" className="content-section">
    <header className="section-heading">
      <p className="section-kicker">{COPY[language].education}</p>
      <h2 className="section-title">{COPY[language].academic}</h2>
    </header>
    <div className="education-grid">
      {EDUCATION.map((education) => {
        const translated = EDUCATION_COPY[language][education.institution];
        return <article className="site-card education-card" key={education.institution}>
        <div className="section-icon"><GraduationCap size={22} strokeWidth={1.7} /></div>
        <p className="education-level">{translated.level}</p>
        <h3>{education.institution}</h3>
        <p className="education-course">{translated.course}</p>
        <p className="education-period">{translated.period}</p>
      </article>;
      })}
    </div>
  </section>
);
