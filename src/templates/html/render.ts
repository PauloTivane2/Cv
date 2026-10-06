import type { CVData } from "../../types/cv";
import { page1 } from "./layouts/page1";
import { page2 } from "./layouts/page2";
import { documentHtml } from "./layouts/document";

/**
 * Renderizador principal do CV em HTML com fidelidade visual 1000%.
 * @param data Dados do CV (implementação de CVData)
 * @param cssHref Caminho relativo para o ficheiro CSS compilado (ex: ./output.css)
 */
export function renderCV(data: CVData, cssHref = "./output.css"): string {
  const title = `${data.header.nameLines.join(" ")} — CV`;
  const bodyContent = `
  ${page1(data)}
  ${page2(data)}
`;
  return documentHtml(title, bodyContent, cssHref);
}

export default renderCV;
