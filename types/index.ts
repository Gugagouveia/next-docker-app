export interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  text: string;
}

export interface ExperienceCardProps {
  title: string;
  role: string;
  period: string;
  description: React.ReactNode;
}

export interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}
