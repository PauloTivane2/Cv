# CV Template — Arquitetura Modular & Multi-Formato

Template de CV profissional em formato A4 (2 páginas) com **TypeScript**, **Tailwind CSS**, e geração automatizada para **HTML**, **PDF** e **DOCX (Word)**.

---

## Estrutura do Projecto

```text
cv-template/
├── src/
│   ├── types/                     # Definições de tipos e interfaces
│   │   └── cv.ts                  # CVData, Contact, Entry, Project, etc.
│   │
│   ├── data/                      # Onde edita o seu currículo
│   │   ├── paulo-tivane.pt.ts     # CV em Português (apenas dados)
│   │   └── index.ts               # Exportação do CV padrão ativo
│   │
│   ├── utils/                     # Funções auxiliares (escape HTML, chunking)
│   │   └── html.ts
│   │
│   ├── templates/                 # Renderizadores por formato
│   │   ├── html/                  # Template HTML / Tailwind (1000% fiel)
│   │   │   ├── components/        # Componentes base (section-bar, entry, etc.)
│   │   │   ├── sections/          # Secções temáticas (header, skills, etc.)
│   │   │   ├── layouts/           # Page 1, Page 2 e Shell A4
│   │   │   └── render.ts          # Compilador HTML
│   │   │
│   │   └── docx/                  # Gerador Microsoft Word (.docx)
│   │       ├── styles.ts          # Cores e tipografia do Word
│   │       └── render.ts          # Compilador DOCX com tabelas e formatação
│   │
│   ├── styles/                    # Estilos CSS
│   │   └── input.css              # Diretivas do Tailwind CSS
│   │
│   └── scripts/                   # Automação de compilação
│       ├── build-html.ts          # Compila CSS e gera cv.html
│       ├── build-pdf.ts           # Gera cv.pdf (A4 com fundos activos)
│       ├── build-docx.ts          # Gera cv.docx a partir de src/data/
│       └── build.ts               # Pipeline completo (HTML + PDF + DOCX)
│
├── dist/                          # Ficheiros gerados
│   ├── cv.html                    # Visualização Web
│   ├── output.css                 # Folha de estilos compilada
│   ├── cv.pdf                     # PDF para envio
│   └── cv.docx                    # Documento Word editável
│
├── package.json
├── tailwind.config.ts             # Cores, fontes e medidas A4
└── tsconfig.json
```

---

##  Como Usar

### 1. Actualizar os Seus Dados
Para actualizar o currículo, edite apenas o ficheiro de dados:
- **`src/data/paulo-tivane.pt.ts`**

### 2. Gerar Todos os Formatos (HTML, PDF e DOCX)
```bash
npm run build
```
Este comando executa todo o pipeline e gera:
- `dist/cv.html`
- `dist/cv.pdf`
- `dist/cv.docx`

### 3. Comandos Individuais
| Comando | O que faz |
|---|---|
| `npm run build` | Compila tudo (HTML, CSS, PDF e DOCX) |
| `npm run build:html` | Gera apenas o HTML e o CSS do Tailwind |
| `npm run build:pdf` | Gera apenas o PDF a partir do HTML |
| `npm run build:docx` | Gera apenas o documento Word (`.docx`) |
