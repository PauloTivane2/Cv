import type { LabeledItem } from "../../../types/cv";
import { sectionBar } from "../components/section-bar";
import { twoColGrid } from "../components/two-col-grid";

export const certifications = (title: string, items: LabeledItem[]): string => `
  <section class="mt-8">
    ${sectionBar(title)}
    <div class="mt-3">${twoColGrid(items, { stripes: false })}</div>
  </section>`;
