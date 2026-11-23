"use client";

import type { Language } from "@/constants/i18n";

interface LanguageToggleProps {
  language: Language;
  onChange: (language: Language) => void;
}

export const LanguageToggle = ({ language, onChange }: LanguageToggleProps) => (
  <div className="language-toggle" role="group" aria-label="Selecionar idioma">
    <button className={language === "en" ? "selected" : ""} aria-pressed={language === "en"} onClick={() => onChange("en")} type="button">ENG</button>
    <span>/</span>
    <button className={language === "pt" ? "selected" : ""} aria-pressed={language === "pt"} onClick={() => onChange("pt")} type="button">PT</button>
  </div>
);
