export const SITE_INFO = {
  name: 'Gustavo Gouveia',
  title: 'Engenharia de Software',
  description: 'Desenvolvedor de software focado em criar experiências digitais modernas, performáticas e bem estruturadas — do backend ao frontend.',
  github: 'https://github.com/Gugagouveia',
  linkedin: 'https://www.linkedin.com/in/gustavo-gouveia',
  email: 'gustavo_agj@outlook.com'
} as const;

export const SKILLS = [
  {
    title: 'Frontend',
    text: 'React.js, Next.js, TypeScript e Tailwind CSS para interfaces modernas.'
  },
  {
    title: 'Backend',
    text: 'Node.js, Express e APIs REST bem estruturadas e escaláveis.'
  },
  {
    title: 'Qualidade',
    text: 'Testes unitários com Jest, foco em confiabilidade e manutenção.'
  }
] as const;

export const EXPERIENCES = [
  {
    title: 'Aramis Menswear',
    role: 'Desenvolvedor de Software Júnior',
    period: 'Outubro 2024 — Presente',
    description: 'Desenvolvimento de aplicações web full-stack com foco em performance, qualidade e escalabilidade.',
    highlights: [
      'Frontend com React.js e TypeScript',
      'Criação e manutenção de APIs com Node.js e Express',
      'Testes unitários utilizando Jest',
      'Atuação em times ágeis seguindo Scrum'
    ]
  },
  {
    title: 'Devbox',
    role: 'Estagiário de Desenvolvimento de Software',
    period: 'Agosto 2023 — Janeiro 2024',
    description: 'Desenvolvimento de APIs REST utilizando JavaScript e Node.js, com foco em organização de código e boas práticas.',
    highlights: []
  }
] as const;

export const EDUCATION = [
  {
    level: 'Pós-graduação',
    institution: 'Centro Universitário UNIFAFIRE',
    course: 'MBA Engenharia de Software',
    period: 'Junho 2025 — Dezembro 2026'
  },
  {
    level: 'Graduação',
    institution: 'Senac Brasil',
    course: 'Análise e Desenvolvimento de Sistemas',
    period: 'Janeiro 2022 — Dezembro 2024'
  }
] as const;
