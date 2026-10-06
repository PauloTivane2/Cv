import { existsSync, mkdirSync, writeFileSync, copyFileSync } from "node:fs";
import { resolve } from "node:path";
import { execSync } from "node:child_process";
import { defaultCV } from "../data";
import { renderCV } from "../templates/html/render";

const ROOT_DIR = resolve(__dirname, "../..");
const DIST_DIR = resolve(ROOT_DIR, "dist");

export function buildHtml(): void {
  console.log("🛠  Compilando HTML & CSS...");

  if (!existsSync(DIST_DIR)) {
    mkdirSync(DIST_DIR, { recursive: true });
  }

  // 1. Compilar Tailwind CSS para dist/output.css
  const cssInput = resolve(ROOT_DIR, "src/styles/input.css");
  const cssOutput = resolve(DIST_DIR, "output.css");
  const tailwindConfig = resolve(ROOT_DIR, "tailwind.config.ts");

  execSync(`npx tailwindcss -c "${tailwindConfig}" -i "${cssInput}" -o "${cssOutput}"`, {
    cwd: ROOT_DIR,
    stdio: "inherit",
  });

  // 2. Gerar dist/cv.html
  const htmlContent = renderCV(defaultCV, "./output.css");
  const htmlOutput = resolve(DIST_DIR, "cv.html");
  writeFileSync(htmlOutput, htmlContent, "utf-8");

  // Também manter cópia na raiz para compatibilidade se necessário
  writeFileSync(resolve(ROOT_DIR, "cv.html"), htmlContent, "utf-8");
  copyFileSync(cssOutput, resolve(ROOT_DIR, "output.css"));

  console.log("✔  dist/cv.html e dist/output.css gerados com sucesso!");
}

if (process.argv[1]?.includes("build-html")) {
  buildHtml();
}
