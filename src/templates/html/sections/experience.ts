import type { Entry } from "../../../types/cv";
import { sectionBar } from "../components/section-bar";
import { entry } from "../components/entry-item";

export const experience = (title: string, entries: Entry[]): string => `
  <section class="mt-7">
    ${sectionBar(title)}
    <div class="mt-1">${entries.map(entry).join("")}</div>
  </section>`;
