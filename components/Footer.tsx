"use client";

import { Linkedin, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { SITE_INFO } from "@/constants/content";
import { COPY, type Language } from "@/constants/i18n";

export const Footer = ({ language = "pt" }: { language?: Language }) => {
  const copy = COPY[language];
  const socialLinks = [
    { href: `mailto:${SITE_INFO.email}`, icon: Mail, label: copy.email },
    { href: SITE_INFO.linkedin, icon: Linkedin, label: copy.linkedin },
    { href: "https://wa.me/5581986503252", icon: FaWhatsapp, label: copy.whatsapp },
  ];

  return (
    <footer id="contato" className="site-footer">
      <p className="section-kicker">{copy.contactLabel}</p>
      <h2>{copy.contactTitle}</h2>
      <div className="footer-socials">
        {socialLinks.map(({ href, icon: Icon, label }) => <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className="site-social" aria-label={label}><Icon size={19} /></a>)}
      </div>
      <p className="copyright">© {new Date().getFullYear()} Gustavo Gouveia</p>
    </footer>
  );
};
