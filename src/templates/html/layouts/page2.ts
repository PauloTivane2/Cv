import type { CVData } from "../../../types/cv";
import { page } from "./page";
import { projects } from "../sections/projects";
import { softSkills } from "../sections/soft-skills";
import { languages } from "../sections/languages";
import { certifications } from "../sections/certifications";
import { additional } from "../sections/additional";

/** Página 2 — projectos, competências, idiomas, certificações, informações. */
export const page2 = (d: CVData): string =>
  page(
    [
      projects(d.titles.projects, d.projects),
      softSkills(d.titles.softSkills, d.softSkills),
      languages(d.titles.languages, d.languageHeaders, d.languages),
      certifications(d.titles.certifications, d.certifications),
      additional(d.titles.additional, d.additional),
    ].join(""),
  );
