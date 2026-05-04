export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  color: "red" | "green";
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  initials: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  year: string;
  color: "red" | "green";
}

export interface Stat {
  value: string;
  label: string;
  suffix?: string;
}

export interface NavItem {
  label: string;
  href: string;
}
