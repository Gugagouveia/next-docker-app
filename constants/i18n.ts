export type Language = "pt" | "en";

export const COPY = {
  pt: {
    home: "INÍCIO",
    contact: "CONTATO",
    hello: "OLÁ",
    softwareEngineering: "ENGENHARIA DE SOFTWARE",
    description: "Desenvolvedor de software focado em criar experiências digitais modernas, performáticas e bem estruturadas — do backend ao frontend.",
    resume: "SOLICITAR CURRÍCULO",
    talk: "VAMOS CONVERSAR",
    work: "Conheça meu trabalho",
    location: "Recife, Brasil",
    stack: "STACK",
    technologies: "Tecnologias & ferramentas",
    career: "CARREIRA",
    experience: "Experiência profissional",
    education: "EDUCAÇÃO",
    academic: "Formação acadêmica",
    contactLabel: "CONTATO",
    contactTitle: "Vamos conversar?",
    email: "E-mail",
    linkedin: "LinkedIn",
    whatsapp: "WhatsApp",
    postgraduate: "Pós-graduação",
    undergraduate: "Graduação",
  },
  en: {
    home: "HOME",
    contact: "CONTACT",
    hello: "HELLO",
    softwareEngineering: "SOFTWARE ENGINEERING",
    description: "Software developer focused on creating modern, high-performance, well-structured digital experiences — from backend to frontend.",
    resume: "REQUEST RESUME",
    talk: "LET'S TALK",
    work: "See my work",
    location: "Recife, Brazil",
    stack: "STACK",
    technologies: "Technologies & tools",
    career: "CAREER",
    experience: "Professional experience",
    education: "EDUCATION",
    academic: "Academic background",
    contactLabel: "CONTACT",
    contactTitle: "Let's talk?",
    email: "E-mail",
    linkedin: "LinkedIn",
    whatsapp: "WhatsApp",
    postgraduate: "Postgraduate",
    undergraduate: "Undergraduate",
  },
} as const;

export const SKILL_COPY = {
  pt: {
    Frontend: "React.js, Next.js, TypeScript e Tailwind CSS para interfaces modernas.",
    Backend: "Node.js, Express e APIs REST bem estruturadas e escaláveis.",
    Qualidade: "Testes unitários com Jest, foco em confiabilidade e manutenção.",
  },
  en: {
    Frontend: "React.js, Next.js, TypeScript, and Tailwind CSS for modern interfaces.",
    Backend: "Node.js, Express, and well-structured, scalable REST APIs.",
    Qualidade: "Unit testing with Jest, focused on reliability and maintainability.",
  },
} as const;

export const EXPERIENCE_COPY = {
  pt: {
    "Aramis Menswear": {
      role: "Desenvolvedor de Software Júnior",
      period: "Outubro 2024 — Presente",
      description: "Desenvolvimento de aplicações web full-stack com foco em performance, qualidade e escalabilidade.",
      highlights: ["Frontend com React.js e TypeScript", "Criação e manutenção de APIs com Node.js e Express", "Testes unitários utilizando Jest", "Atuação em times ágeis seguindo Scrum"],
    },
    Devbox: {
      role: "Estagiário de Desenvolvimento de Software",
      period: "Agosto 2023 — Janeiro 2024",
      description: "Desenvolvimento de APIs REST utilizando JavaScript e Node.js, com foco em organização de código e boas práticas.",
      highlights: [],
    },
  },
  en: {
    "Aramis Menswear": {
      role: "Junior Software Developer",
      period: "October 2024 — Present",
      description: "Development of full-stack web applications focused on performance, quality, and scalability.",
      highlights: ["Frontend with React.js and TypeScript", "Creation and maintenance of APIs with Node.js and Express", "Unit testing with Jest", "Working in agile teams following Scrum"],
    },
    Devbox: {
      role: "Software Development Intern",
      period: "August 2023 — January 2024",
      description: "Development of REST APIs using JavaScript and Node.js, focused on code organization and best practices.",
      highlights: [],
    },
  },
} as const;

export const EDUCATION_COPY = {
  pt: {
    "Centro Universitário UNIFAFIRE": { level: "Pós-graduação", course: "MBA Engenharia de Software", period: "Junho 2025 — Dezembro 2026" },
    "Senac Brasil": { level: "Graduação", course: "Análise e Desenvolvimento de Sistemas", period: "Janeiro 2022 — Dezembro 2024" },
  },
  en: {
    "Centro Universitário UNIFAFIRE": { level: "Postgraduate", course: "Software Engineering MBA", period: "June 2025 — December 2026" },
    "Senac Brasil": { level: "Undergraduate", course: "Systems Analysis and Development", period: "January 2022 — December 2024" },
  },
} as const;
