import { esc, CHECK } from "../../../utils/html";
import type { LabeledItem } from "../../../types/cv";

/** Célula "✓ Etiqueta: texto". */
export const labeledCell = (item: LabeledItem, extraClass = ""): string => `
  <span class="w-4 shrink-0 text-center">${CHECK}</span>
  <p class="${extraClass}"><strong class="font-heading font-bold">${esc(item.label)}:</strong> ${esc(item.text)}</p>`;
