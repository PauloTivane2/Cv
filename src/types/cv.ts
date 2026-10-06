export type ContactVariant = "text" | "link" | "linkUnderline";

export interface Contact {
  label: string;
  value: string;
  variant?: ContactVariant;
  href?: string;
}

/** Item com etiqueta a negrito + texto (habilidades, competências, certificações). */
export interface LabeledItem {
  label: string;
  text: string;
}

export interface Entry {
  title: string;
  date: string;
  subtitle: string;
  location: string;
  bullets?: string[];
}

export interface Project {
  name: string;
  description: string; // texto a negrito itálico a seguir ao nome
  date: string;
  bullets: string[];
}

export interface LanguageRow {
  language: string;
  level: string;
  description: string;
}

export interface InfoRow {
  label: string;
  value: string;
}

export interface CVHeader {
  nameLines: string[];
  subtitlePrefix: string;
  subtitleHighlight: string;
  contacts: Contact[];
}

export interface CVTitles {
  profile: string;
  skills: string;
  education: string;
  experience: string;
  projects: string;
  softSkills: string;
  languages: string;
  certifications: string;
  additional: string;
}

export interface CVData {
  header: CVHeader;
  titles: CVTitles;
  profile: string;
  skills: LabeledItem[]; // preenchido por linhas de 2 colunas
  education: Entry[];
  experience: Entry[];
  projects: Project[];
  softSkills: LabeledItem[];
  languageHeaders: [string, string, string];
  languages: LanguageRow[];
  certifications: LabeledItem[];
  additional: InfoRow[];
}
