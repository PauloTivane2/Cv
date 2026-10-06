import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { defaultCV } from "../data";

const ROOT_DIR = resolve(__dirname, "../..");
const DIST_DIR = resolve(ROOT_DIR, "dist");

export async function buildDocx(): Promise<void> {
  console.log("📄  Gerando Microsoft Word (DOCX)...");

  if (!existsSync(DIST_DIR)) {
    mkdirSync(DIST_DIR, { recursive: true });
  }

  try {
    const { renderDocx } = await import("../templates/docx/render");
    const buffer = await renderDocx(defaultCV);

    const docxOutput = resolve(DIST_DIR, "cv.docx");
    writeFileSync(docxOutput, buffer);
    writeFileSync(resolve(ROOT_DIR, "cv.docx"), buffer);

    console.log("✔  dist/cv.docx gerado com sucesso!");
  } catch (err: any) {
    if (err.code === "MODULE_NOT_FOUND" || err.message?.includes("Cannot find module 'docx'")) {
      console.warn("⚠️  A biblioteca 'docx' ainda não está instalada no ambiente.");
      console.warn("👉  Para gerar ficheiros DOCX, instale executando: npm install docx");
    } else {
      console.error("Erro ao gerar DOCX:", err);
      throw err;
    }
  }
}

if (process.argv[1]?.includes("build-docx")) {
  buildDocx().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
