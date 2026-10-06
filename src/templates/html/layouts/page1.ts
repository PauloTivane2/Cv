import type { CVData } from "../../../types/cv";
import { page } from "./page";
import { header } from "../sections/header";
import { profile } from "../sections/profile";
import { skills } from "../sections/skills";
import { education } from "../sections/education";
import { experience } from "../sections/experience";

/** Página 1 — cabeçalho, perfil, habilidades, formação, experiência. */
export const page1 = (d: CVData): string =>
  page(
    [
      header(d.header),
      profile(d.titles.profile, d.profile),
      skills(d.titles.skills, d.skills),
      education(d.titles.education, d.education),
      experience(d.titles.experience, d.experience),
    ].join(""),
    true,
  );
