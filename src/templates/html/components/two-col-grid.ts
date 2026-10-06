import { chunk, stripe } from "../../../utils/html";
import type { LabeledItem } from "../../../types/cv";
import { labeledCell } from "./labeled-cell";

/**
 * Grelha de 2 colunas com linhas alternadas e separador vertical.
 * Usada em Habilidades, Competências e Certificações.
 */
export const twoColGrid = (
  items: LabeledItem[],
  opts: { stripes?: boolean; textClass?: string } = {},
): string => {
  const { stripes = true, textClass = "" } = opts;
  return `
  <div class="mt-2">
    ${chunk(items, 2)
      .map(
        ([left, right], rowIndex) => `
      <div class="grid grid-cols-2 ${stripes ? stripe(rowIndex) : ""}">
        <div class="flex gap-2 border-r border-divider px-3 py-1.5 pl-8 text-small">${labeledCell(left, textClass)}</div>
        <div class="flex gap-2 px-3 py-1.5 pl-6 text-small">${right ? labeledCell(right, textClass) : ""}</div>
      </div>`,
      )
      .join("")}
  </div>`;
};
