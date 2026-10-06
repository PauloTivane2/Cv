/** Contentor A4 com margens e dimensões estritas. */
export const page = (content: string, breakAfter = false): string => `
  <article class="mx-auto min-h-page w-page overflow-hidden bg-white px-page-x pt-page-top font-body text-base text-ink ${breakAfter ? "break-after-page" : ""}">
    ${content}
  </article>`;
