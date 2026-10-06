import { esc, stripe } from "../../../utils/html";
import type { CVData, LanguageRow } from "../../../types/cv";
import { sectionBar } from "../components/section-bar";

export const languages = (
  title: string,
  headers: CVData["languageHeaders"],
  rows: LanguageRow[],
): string => `
  <section class="mt-8">
    ${sectionBar(title)}
    <div class="mt-5">
      <div class="grid grid-cols-[38mm_34mm_1fr] bg-brand px-2.5 py-1 font-heading font-semibold text-white">
        ${headers.map((h) => `<span>${esc(h)}</span>`).join("")}
      </div>
      ${rows
        .map(
          (r, i) => `
        <div class="grid grid-cols-[38mm_34mm_1fr] px-2.5 py-1 text-small ${stripe(i + 1)}">
          <span class="font-heading font-bold text-accent">${esc(r.language)}</span>
          <span>${esc(r.level)}</span>
          <span class="italic text-muted">${esc(r.description)}</span>
        </div>`,
        )
        .join("")}
    </div>
  </section>`;
