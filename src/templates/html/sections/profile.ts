import { esc } from "../../../utils/html";
import { sectionBar } from "../components/section-bar";

export const profile = (title: string, text: string): string => `
  <section class="mt-8">
    ${sectionBar(title)}
    <p class="text-justify text-base">${esc(text)}</p>
  </section>`;
