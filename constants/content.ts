export const SITE_INFO = {
  name: "Gustavo Gouveia",
  title: "Desenvolvedor de Software Full-stack",
  description:
    "Desenvolvedor de software com experiência em aplicações web full-stack, integrações entre sistemas e APIs REST.",
  github: "https://github.com/Gugagouveia",
  linkedin: "https://www.linkedin.com/in/gustavo-gouveia",
  email: "gustavo_agj@outlook.com",
  phone: "+55 81 98650-3252",
  whatsapp: "https://wa.me/5581986503252",
  website: "https://gustavogouveia.tech",
} as const;

export const SKILLS = [
  { id: "languages", technologies: ["TypeScript", "JavaScript", "Java", "Node.js"] },
  { id: "frontend", technologies: ["React.js", "React Native"] },
  { id: "backend", technologies: ["Node.js", "Express", "Spring Boot", "APIs REST"] },
  { id: "data", technologies: ["PostgreSQL", "MongoDB", "Prisma", "RabbitMQ"] },
  { id: "delivery", technologies: ["Docker", "Git", "Jest", "CI/CD", "BPMN", "Scrum"] },
] as const;

export const EXPERIENCES = [
  {
    id: "aramis",
    company: "Aramis",
    role: "softwareDeveloper",
    period: { pt: "Out/2024 — atual", en: "Oct/2024 — present" },
    city: "Recife, PE",
    responsibilities: [
      "Desenvolvimento e manutenção de APIs REST e microsserviços assíncronos com Node.js, TypeScript e Express, incluindo paginação, filtros e regras de negócio.",
      "Construção de interfaces web e mobile com React.js e React Native, integradas a APIs.",
      "Implementação de filas assíncronas com RabbitMQ e persistência com PostgreSQL, Prisma e MongoDB.",
      "Integrações com plataformas externas e Databricks, com sincronização e mapeamento de registros.",
      "Testes automatizados com Jest, pipelines CI/CD, Docker e levantamento de requisitos usando BPMN em times Scrum.",
    ],
  },
  {
    id: "devbox",
    company: "Devbox",
    role: "softwareIntern",
    period: { pt: "Ago/2023 — jan/2024", en: "Aug/2023 — Jan/2024" },
    city: "Recife, PE",
    responsibilities: [
      "Desenvolvimento e manutenção de APIs RESTful com JavaScript e Node.js.",
      "Implementação de funcionalidades e integração de serviços no backend.",
      "Suporte, correção de bugs e evolução contínua das aplicações.",
    ],
  },
] as const;

export const EDUCATION = [
  {
    id: "mba",
    institution: "Centro Universitário UNIFAFIRE",
    course: { pt: "MBA em Engenharia de Software", en: "MBA in Software Engineering" },
    period: { pt: "Jun/2025 — nov/2026", en: "Jun/2025 — Nov/2026" },
    status: "completed",
  },
  {
    id: "bachelor",
    institution: "Senac Brasil",
    course: { pt: "CST em Análise e Desenvolvimento de Sistemas", en: "Associate Degree in Systems Analysis and Development" },
    period: { pt: "Jan/2022 — dez/2024", en: "Jan/2022 — Dec/2024" },
    status: "completed",
  },
] as const;
