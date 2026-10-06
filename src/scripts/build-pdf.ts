import { existsSync, mkdirSync, copyFileSync } from "node:fs";
import { resolve } from "node:path";
import { execSync } from "node:child_process";
import { pathToFileURL } from "node:url";

const ROOT_DIR = resolve(__dirname, "../..");
const DIST_DIR = resolve(ROOT_DIR, "dist");

/**
 * Procura por executáveis de browsers instalados no Windows caso o Puppeteer não esteja presente.
 */
function findWindowsBrowser(): string | null {
  const possiblePaths = [
    "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
    "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
    "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
  ];

  for (const p of possiblePaths) {
    if (existsSync(p)) return p;
  }
  return null;
}

export async function buildPdf(): Promise<void> {
  console.log("📑  Gerando PDF (A4 com fundos activos)...");

  if (!existsSync(DIST_DIR)) {
    mkdirSync(DIST_DIR, { recursive: true });
  }

  const htmlPath = resolve(DIST_DIR, "cv.html");
  const pdfPath = resolve(DIST_DIR, "cv.pdf");

  if (!existsSync(htmlPath)) {
    throw new Error("dist/cv.html não foi encontrado. Execute build:html primeiro.");
  }

  // Tentativa 1: Puppeteer (se instalado)
  try {
    const puppeteerModule = "puppeteer";
    const puppeteer = await import(puppeteerModule);
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    const fileUrl = pathToFileURL(htmlPath).href;

    await page.goto(fileUrl, { waitUntil: "networkidle0" });
    await page.pdf({
      path: pdfPath,
      format: "A4",
      printBackground: true,
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
    });
    await browser.close();

    copyFileSync(pdfPath, resolve(ROOT_DIR, "cv.pdf"));
    console.log("✔  dist/cv.pdf gerado com sucesso via Puppeteer!");
    return;
  } catch (err: any) {
    // Se o puppeteer não estiver instalado, tentamos a estratégia nativa (Edge/Chrome)
  }

  // Tentativa 2: Fallback nativo do Windows (Edge / Chrome headless)
  const browserExe = findWindowsBrowser();
  if (browserExe) {
    const fileUrl = pathToFileURL(htmlPath).href;
    const command = `"${browserExe}" --headless --disable-gpu --run-all-compositor-stages-before-draw --no-pdf-header-footer --print-to-pdf="${pdfPath}" "${fileUrl}"`;
    try {
      execSync(command, { stdio: "ignore" });
      if (existsSync(pdfPath)) {
        copyFileSync(pdfPath, resolve(ROOT_DIR, "cv.pdf"));
        console.log("✔  dist/cv.pdf gerado com sucesso via motor de impressão headless!");
        return;
      }
    } catch (e) {
      // continua para aviso
    }
  }

  console.warn("⚠️  Não foi possível gerar o PDF automaticamente.");
  console.warn("👉  Para habilitar a geração 100% automatizada de PDF, instale o puppeteer: npm install puppeteer");
}

if (process.argv[1]?.includes("build-pdf")) {
  buildPdf().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
