import { esc, stripe } from "../../../utils/html";
import type { InfoRow } from "../../../types/cv";
import { sectionBar } from "../components/section-bar";

export const additional = (title: string, rows: InfoRow[]): string => `
  <section class="mt-3">
    ${sectionBar(title)}
    <dl class="mt-4 text-small">
      ${rows
        .map(
          (r, i) => `
        <div class="grid grid-cols-[55mm_1fr] px-2.5 py-1 ${stripe(i + 1)}">
          <dt class="font-heading font-bold">${esc(r.label)}</dt>
          <dd>${esc(r.value)}</dd>
        </div>`,
        )
        .join("")}
    </dl>
  </section>`;
