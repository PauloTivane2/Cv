import { esc } from "../../../utils/html";
import type { Project } from "../../../types/cv";
import { sectionBar } from "../components/section-bar";
import { checkList } from "../components/check-list";

export const projects = (title: string, items: Project[]): string => `
  <section>
    ${sectionBar(title)}
    ${items
      .map(
        (p) => `
      <div class="pl-2.5">
        <div class="mt-1.5 flex justify-between text-small">
          <p>
            <strong class="font-heading font-bold italic">${esc(p.name)}:</strong>
            <strong class="font-heading font-bold italic">${esc(p.description)}</strong>
          </p>
          <p class="italic">${esc(p.date)}</p>
        </div>
        ${checkList(p.bullets, "mt-3 space-y-2 pl-6 text-[15px] leading-snug")}
      </div>`,
      )
      .join("")}
  </section>`;
