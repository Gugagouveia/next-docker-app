import Link from "next/link";
import { COPY, type Language } from "@/constants/i18n";

export const Footer = ({ language = "pt" }: { language?: Language }) => (
  <footer className="site-footer">
    <Link className="monogram" href="#home" aria-label="Gustavo Gouveia, início">GG<span>.</span></Link>
    <p>{COPY[language].footerNote}</p>
    <small>© {new Date().getFullYear()} Gustavo Gouveia</small>
  </footer>
);
