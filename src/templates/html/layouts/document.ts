import { esc } from "../../../utils/html";

/** Shell HTML completo com metadados, links de fontes Google e CSS compilado. */
export const documentHtml = (
  title: string,
  bodyContent: string,
  cssHref = "./output.css",
): string => `<!doctype html>
<html lang="pt">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${esc(title)}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Chivo:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600;1,700&display=swap"
    rel="stylesheet"
  />
  <link rel="stylesheet" href="${esc(cssHref)}" />
  <style>
    @page { size: A4; margin: 0; }
    html, body { margin: 0; background: #e5e7eb; font-family: 'Chivo', Arial, sans-serif; }
    * { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    @media print { html, body { background: #fff; } }
  </style>
</head>
<body>
  ${bodyContent}
</body>
</html>`;
