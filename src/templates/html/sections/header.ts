import { esc, stripe } from "../../../utils/html";
import type { Contact, CVHeader } from "../../../types/cv";

export const contactValue = (c: Contact): string => {
  const targetHref = c.href || (c.value.startsWith("http") ? c.value : `https://${c.value}`);
  switch (c.variant) {
    case "link":
      return `<a href="${esc(targetHref)}" target="_blank" rel="noopener noreferrer" class="font-heading font-bold text-accent hover:underline">${esc(c.value)}</a>`;
    case "linkUnderline":
      return `<a href="${esc(targetHref)}" target="_blank" rel="noopener noreferrer" class="border-b border-accent font-heading font-bold text-accent">${esc(c.value)}</a>`;
    default:
      return esc(c.value);
  }
};

/** Cabeçalho: nome e subtítulo à esquerda, tabela de contactos à direita. */
export const header = (h: CVHeader): string => `
  <header class="grid grid-cols-[1fr_auto] gap-8">
    <div>
      <h1 class="font-heading text-name font-bold text-accent">
        ${h.nameLines.map((line) => `<span class="block">${esc(line)}</span>`).join("")}
      </h1>
      <p class="mt-4 italic text-muted">
        ${esc(h.subtitlePrefix)} <strong class="font-heading font-bold">${esc(h.subtitleHighlight)}</strong>
      </p>
    </div>
    <dl class="w-[100mm] text-base">
      ${h.contacts
        .map(
          (c, i) => `
        <div class="grid grid-cols-[34mm_1fr] items-center px-2 py-0.5 ${stripe(i)}">
          <dt class="font-heading font-bold">${esc(c.label)}</dt>
          <dd>${contactValue(c)}</dd>
        </div>`,
        )
        .join("")}
    </dl>
  </header>`;
