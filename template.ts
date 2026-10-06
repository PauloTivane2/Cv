/**
 * template.ts — Re-exportador para compatibilidade retroativa.
 * A implementação modular agora reside sob src/types e src/templates/html/.
 */

export * from "./src/types/cv";
export { renderCV } from "./src/templates/html/render";
export { default } from "./src/templates/html/render";
