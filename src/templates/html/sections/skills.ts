import type { LabeledItem } from "../../../types/cv";
import { sectionBar } from "../components/section-bar";
import { twoColGrid } from "../components/two-col-grid";

export const skills = (title: string, items: LabeledItem[]): string => `
  <section class="mt-6">
    ${sectionBar(title)}
    ${twoColGrid(items)}
  </section>`;
