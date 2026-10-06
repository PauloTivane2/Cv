import type { Config } from "tailwindcss";

/**
 * Design tokens do template de CV.
 * Tudo o que é cor, tipografia e medida de página vive aqui;
 * os componentes e templates só usam estes nomes (bg-brand, text-ink, font-heading…).
 */
const config: Config = {
  content: ["./src/**/*.{ts,html}", "./template.ts"],
  theme: {
    extend: {
      colors: {
        brand: "#2D5B8A", // barras de secção + cabeçalho da tabela de idiomas
        accent: "#2A66B0", // nome, LinkedIn, portfólio, nomes de línguas
        stripe: "#F2F2F2", // linhas alternadas
        divider: "#D9D9D9", // separador vertical entre colunas
        ink: "#1A1A1A", // texto principal
        muted: "#555555", // texto itálico secundário (instituição, local, descrição)
      },
      fontFamily: {
        heading: ['"Chivo"', "Arial", "sans-serif"],
        body: ['"Chivo"', "Arial", "sans-serif"],
      },
      fontSize: {
        name: ["40px", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        bar: ["15px", { lineHeight: "1.2" }],
        base: ["13.5px", { lineHeight: "1.4" }],
        small: ["13px", { lineHeight: "1.35" }],
      },
      width: {
        page: "210mm",
      },
      height: {
        page: "297mm",
      },
      minHeight: {
        page: "297mm",
      },
      spacing: {
        "page-x": "11mm", // margem lateral (barras ocupam 188mm)
        "page-top": "8mm",
        "entry-r": "19mm", // recuo à direita das datas/locais
      },
    },
  },
  plugins: [],
};

export default config;
