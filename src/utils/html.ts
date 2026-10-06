/**
 * Utilitários puros para geração e manipulação de HTML no template.
 */

/** Escapa caracteres especiais de HTML para prevenir quebras ou injeções. */
export const esc = (value: string): string =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

/** Divide um array em sub-grupos de tamanho `size`. */
export const chunk = <T>(items: T[], size: number): T[][] => {
  const out: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    out.push(items.slice(i, i + size));
  }
  return out;
};

/** Linhas ímpares (índice 1, 3…) recebem fundo cinzento suave (classe bg-stripe). */
export const stripe = (index: number): string => (index % 2 === 1 ? "bg-stripe" : "");

/** Ícone de verificação padronizado */
export const CHECK = "✓";
