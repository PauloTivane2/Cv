import { esc, CHECK } from "../../../utils/html";

/** Lista com ✓ (usada em formação, experiência e projectos). */
export const checkList = (items: string[], extraClass = ""): string => `
  <ul class="${extraClass}">
    ${items
      .map(
        (item) => `
      <li class="flex gap-2">
        <span class="w-4 shrink-0 text-center">${CHECK}</span>
        <span>${esc(item)}</span>
      </li>`,
      )
      .join("")}
  </ul>`;
