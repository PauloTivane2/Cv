import type { LabeledItem } from "../../../types/cv";
import { sectionBar } from "../components/section-bar";
import { twoColGrid } from "../components/two-col-grid";

export const softSkills = (title: string, items: LabeledItem[]): string => `
  <section class="mt-3">
    ${sectionBar(title)}
    ${twoColGrid(items, { textClass: "text-justify" })}
  </section>`;
