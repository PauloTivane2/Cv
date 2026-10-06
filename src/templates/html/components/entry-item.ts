import { esc, stripe } from "../../../utils/html";
import type { Entry } from "../../../types/cv";
import { checkList } from "./check-list";

/** Entrada de formação / experiência (título + data, subtítulo + local, bullets). */
export const entry = (e: Entry, rowIndex: number): string => `
  <div class="${stripe(rowIndex)} py-1.5 pl-2.5">
    <div class="flex justify-between pr-entry-r">
      <p class="font-heading text-base font-bold">${esc(e.title)}</p>
      <p class="italic">${esc(e.date)}</p>
    </div>
    <div class="flex justify-between pr-entry-r italic text-muted">
      <p>${esc(e.subtitle)}</p>
      <p>${esc(e.location)}</p>
    </div>
    ${e.bullets?.length ? checkList(e.bullets, "mt-1.5 text-base") : ""}
  </div>`;
