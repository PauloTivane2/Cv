import { buildHtml } from "./build-html";
import { buildPdf } from "./build-pdf";
import { buildDocx } from "./build-docx";

async function main(): Promise<void> {
  console.log("========================================");
  console.log("🚀  Iniciando Pipeline de Compilação");
  console.log("========================================");

  // 1. Gera HTML e Tailwind CSS
  buildHtml();

  // 2. Gera PDF
  await buildPdf();

  // 3. Gera DOCX
  await buildDocx();

  console.log("========================================");
  console.log("✨  Compilação finalizada!");
  console.log("📁  Ficheiros disponíveis em /dist e na raiz:");
  console.log("    - dist/cv.html");
  console.log("    - dist/output.css");
  console.log("    - dist/cv.pdf");
  console.log("    - dist/cv.docx");
  console.log("========================================");
}

main().catch((err) => {
  console.error("Falha no pipeline de compilação:", err);
  process.exit(1);
});
