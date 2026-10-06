/**
 * cv.ts — Re-exportador para compatibilidade retroativa.
 * Os dados estruturados residem agora em src/data/paulo-tivane.pt.ts.
 */

import { writeFileSync } from "node:fs";
import { renderCV } from "./src/templates/html/render";
import { pauloTivanePT } from "./src/data/paulo-tivane.pt";

export const cv = pauloTivanePT;
export default cv;

if (process.argv[1]?.endsWith("cv.ts")) {
  writeFileSync("cv.html", renderCV(cv, "./output.css"), "utf-8");
  console.log("✔ cv.html gerado");
}
