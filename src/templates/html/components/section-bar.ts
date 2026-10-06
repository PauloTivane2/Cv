import { esc } from "../../../utils/html";

/** Barra azul de título de secção com tipografia e espaçamento originais. */
export const sectionBar = (title: string): string => `
  <h2 class="bg-brand px-3 py-1.5 font-heading text-bar font-bold uppercase text-white">
    ${esc(title)}
  </h2>`;
