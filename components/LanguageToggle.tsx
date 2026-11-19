"use client";

import type { Language } from "@/constants/i18n";

interface LanguageToggleProps {
  language: Language;
  onChange: (language: Language) => void;
}

export const LanguageToggle = ({ language, onChange }: LanguageToggleProps) => (
  <div className="language-toggle" aria-label="Selecionar idioma">
    <button className={language === "en" ? "selected" : ""} onClick={() => onChange("en")} type="button">ENG</button>
    <span>/</span>
    <button className={language === "pt" ? "selected" : ""} onClick={() => onChange("pt")} type="button">PT</button>
  </div>
);
