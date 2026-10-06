import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  Table,
  TableRow,
  TableCell,
  AlignmentType,
  WidthType,
  BorderStyle,
  ShadingType,
  PageBreak,
  ExternalHyperlink,
} from "docx";
import type { CVData, Entry, LabeledItem, Project } from "../../types/cv";
import { DOCX_COLORS, DOCX_FONTS } from "./styles";

const CHECK_CHAR = "✓";

const noBorder = {
  style: BorderStyle.NONE,
  size: 0,
  color: "auto",
};

const cellBordersNone = {
  top: noBorder,
  bottom: noBorder,
  left: noBorder,
  right: noBorder,
};

/** Barra de secção no Word com fundo azul de marca e texto branco em maiúsculas */
function createSectionBar(title: string): Table {
  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: cellBordersNone,
    rows: [
      new TableRow({
        children: [
          new TableCell({
            width: { size: 100, type: WidthType.PERCENTAGE },
            shading: {
              type: ShadingType.CLEAR,
              fill: DOCX_COLORS.brand,
            },
            margins: { top: 80, bottom: 80, left: 140, right: 140 },
            children: [
              new Paragraph({
                children: [
                  new TextRun({
                    text: title.toUpperCase(),
                    bold: true,
                    font: DOCX_FONTS.heading,
                    size: 20, // 10pt
                    color: DOCX_COLORS.white,
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}

/** Cria uma linha de tabela de duas colunas para habilidades / certificações */
function createTwoColGrid(items: LabeledItem[], justify = false): Table {
  const rows: TableRow[] = [];
  for (let i = 0; i < items.length; i += 2) {
    const left = items[i];
    const right = items[i + 1];
    const isStripe = (i / 2) % 2 === 1;

    rows.push(
      new TableRow({
        children: [
          new TableCell({
            width: { size: 50, type: WidthType.PERCENTAGE },
            shading: isStripe
              ? { type: ShadingType.CLEAR, fill: DOCX_COLORS.stripe }
              : undefined,
            borders: {
              top: noBorder,
              bottom: noBorder,
              left: noBorder,
              right: {
                style: BorderStyle.SINGLE,
                size: 4,
                color: DOCX_COLORS.divider,
              },
            },
            margins: { top: 60, bottom: 60, left: 100, right: 80 },
            children: [
              new Paragraph({
                alignment: justify ? AlignmentType.JUSTIFIED : undefined,
                children: [
                  new TextRun({
                    text: `${CHECK_CHAR}  `,
                    font: DOCX_FONTS.body,
                    size: 18,
                    color: DOCX_COLORS.brand,
                  }),
                  new TextRun({
                    text: `${left.label}: `,
                    bold: true,
                    font: DOCX_FONTS.heading,
                    size: 18,
                    color: DOCX_COLORS.ink,
                  }),
                  new TextRun({
                    text: left.text,
                    font: DOCX_FONTS.body,
                    size: 18,
                    color: DOCX_COLORS.ink,
                  }),
                ],
              }),
            ],
          }),
          new TableCell({
            width: { size: 50, type: WidthType.PERCENTAGE },
            shading: isStripe
              ? { type: ShadingType.CLEAR, fill: DOCX_COLORS.stripe }
              : undefined,
            borders: cellBordersNone,
            margins: { top: 60, bottom: 60, left: 80, right: 100 },
            children: right
              ? [
                  new Paragraph({
                    alignment: justify ? AlignmentType.JUSTIFIED : undefined,
                    children: [
                      new TextRun({
                        text: `${CHECK_CHAR}  `,
                        font: DOCX_FONTS.body,
                        size: 18,
                        color: DOCX_COLORS.brand,
                      }),
                      new TextRun({
                        text: `${right.label}: `,
                        bold: true,
                        font: DOCX_FONTS.heading,
                        size: 18,
                        color: DOCX_COLORS.ink,
                      }),
                      new TextRun({
                        text: right.text,
                        font: DOCX_FONTS.body,
                        size: 18,
                        color: DOCX_COLORS.ink,
                      }),
                    ],
                  }),
                ]
              : [new Paragraph({})],
          }),
        ],
      }),
    );
  }

  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: cellBordersNone,
    rows,
  });
}

function createEntry(e: Entry, isStripe: boolean): (Paragraph | Table)[] {
  const elements: (Paragraph | Table)[] = [];

  const headerTable = new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: cellBordersNone,
    rows: [
      new TableRow({
        children: [
          new TableCell({
            width: { size: 75, type: WidthType.PERCENTAGE },
            borders: cellBordersNone,
            children: [
              new Paragraph({
                children: [
                  new TextRun({
                    text: e.title,
                    bold: true,
                    font: DOCX_FONTS.heading,
                    size: 20,
                    color: DOCX_COLORS.ink,
                  }),
                ],
              }),
              new Paragraph({
                children: [
                  new TextRun({
                    text: e.subtitle,
                    italics: true,
                    font: DOCX_FONTS.body,
                    size: 18,
                    color: DOCX_COLORS.muted,
                  }),
                ],
              }),
            ],
          }),
          new TableCell({
            width: { size: 25, type: WidthType.PERCENTAGE },
            borders: cellBordersNone,
            children: [
              new Paragraph({
                alignment: AlignmentType.RIGHT,
                children: [
                  new TextRun({
                    text: e.date,
                    italics: true,
                    font: DOCX_FONTS.body,
                    size: 18,
                    color: DOCX_COLORS.ink,
                  }),
                ],
              }),
              new Paragraph({
                alignment: AlignmentType.RIGHT,
                children: [
                  new TextRun({
                    text: e.location,
                    italics: true,
                    font: DOCX_FONTS.body,
                    size: 18,
                    color: DOCX_COLORS.muted,
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });

  elements.push(headerTable);

  if (e.bullets && e.bullets.length > 0) {
    for (const bullet of e.bullets) {
      elements.push(
        new Paragraph({
          indent: { left: 240 },
          children: [
            new TextRun({
              text: `${CHECK_CHAR}  `,
              font: DOCX_FONTS.body,
              size: 18,
              color: DOCX_COLORS.brand,
            }),
            new TextRun({
              text: bullet,
              font: DOCX_FONTS.body,
              size: 18,
              color: DOCX_COLORS.ink,
            }),
          ],
        }),
      );
    }
  }

  return elements;
}

/** Renderiza os dados do CV em documento Word .docx */
export async function renderDocx(data: CVData): Promise<Buffer> {
  const doc = new Document({
    styles: {
      default: {
        document: {
          run: {
            font: DOCX_FONTS.body,
            color: DOCX_COLORS.ink,
          },
        },
      },
    },
    sections: [
      {
        properties: {
          page: {
            margin: {
              top: 720, // ~12mm
              right: 720,
              bottom: 720,
              left: 720,
            },
          },
        },
        children: [
          /* CABEÇALHO (2 Colunas: Nome e Contactos) */
          new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            borders: cellBordersNone,
            rows: [
              new TableRow({
                children: [
                  new TableCell({
                    width: { size: 55, type: WidthType.PERCENTAGE },
                    borders: cellBordersNone,
                    children: [
                      ...data.header.nameLines.map(
                        (line) =>
                          new Paragraph({
                            children: [
                              new TextRun({
                                text: line,
                                bold: true,
                                size: 48, // 24pt
                                font: DOCX_FONTS.heading,
                                color: DOCX_COLORS.accent,
                              }),
                            ],
                          }),
                      ),
                      new Paragraph({
                        spacing: { before: 120 },
                        children: [
                          new TextRun({
                            text: `${data.header.subtitlePrefix} `,
                            italics: true,
                            font: DOCX_FONTS.body,
                            size: 20,
                            color: DOCX_COLORS.muted,
                          }),
                          new TextRun({
                            text: data.header.subtitleHighlight,
                            bold: true,
                            font: DOCX_FONTS.heading,
                            size: 20,
                            color: DOCX_COLORS.ink,
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: { size: 45, type: WidthType.PERCENTAGE },
                    borders: cellBordersNone,
                    children: [
                      new Table({
                        width: { size: 100, type: WidthType.PERCENTAGE },
                        borders: cellBordersNone,
                        rows: data.header.contacts.map(
                          (c, i) =>
                            new TableRow({
                              children: [
                                new TableCell({
                                  width: { size: 38, type: WidthType.PERCENTAGE },
                                  shading:
                                    i % 2 === 1
                                      ? { type: ShadingType.CLEAR, fill: DOCX_COLORS.stripe }
                                      : undefined,
                                  borders: cellBordersNone,
                                  margins: { top: 30, bottom: 30, left: 50, right: 30 },
                                  children: [
                                    new Paragraph({
                                      children: [
                                        new TextRun({
                                          text: c.label,
                                          bold: true,
                                          font: DOCX_FONTS.heading,
                                          size: 17,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                new TableCell({
                                  width: { size: 62, type: WidthType.PERCENTAGE },
                                  shading:
                                    i % 2 === 1
                                      ? { type: ShadingType.CLEAR, fill: DOCX_COLORS.stripe }
                                      : undefined,
                                  borders: cellBordersNone,
                                  margins: { top: 30, bottom: 30, left: 30, right: 50 },
                                  children: [
                                    new Paragraph({
                                      children: [
                                        c.variant === "link" || c.variant === "linkUnderline" || c.href
                                          ? new ExternalHyperlink({
                                              link:
                                                c.href ||
                                                (c.value.startsWith("http")
                                                  ? c.value
                                                  : `https://${c.value}`),
                                              children: [
                                                new TextRun({
                                                  text: c.value,
                                                  bold: true,
                                                  color: DOCX_COLORS.accent,
                                                  underline:
                                                    c.variant === "linkUnderline" ? {} : undefined,
                                                  font: DOCX_FONTS.heading,
                                                  size: 17,
                                                }),
                                              ],
                                            })
                                          : new TextRun({
                                              text: c.value,
                                              color: DOCX_COLORS.ink,
                                              font: DOCX_FONTS.body,
                                              size: 17,
                                            }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                        ),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),

          /* PERFIL */
          new Paragraph({ spacing: { before: 240, after: 60 } }),
          createSectionBar(data.titles.profile),
          new Paragraph({
            spacing: { before: 100, after: 120 },
            alignment: AlignmentType.JUSTIFIED,
            children: [
              new TextRun({
                text: data.profile,
                font: DOCX_FONTS.body,
                size: 19,
              }),
            ],
          }),

          /* HABILIDADES TÉCNICAS */
          new Paragraph({ spacing: { before: 120, after: 60 } }),
          createSectionBar(data.titles.skills),
          new Paragraph({ spacing: { before: 60 } }),
          createTwoColGrid(data.skills),

          /* FORMAÇÃO ACADÉMICA */
          new Paragraph({ spacing: { before: 140, after: 60 } }),
          createSectionBar(data.titles.education),
          ...data.education.flatMap((e, i) => [
            new Paragraph({ spacing: { before: 60 } }),
            ...createEntry(e, i % 2 === 1),
          ]),

          /* EXPERIÊNCIA PROFISSIONAL */
          new Paragraph({ spacing: { before: 140, after: 60 } }),
          createSectionBar(data.titles.experience),
          ...data.experience.flatMap((e, i) => [
            new Paragraph({ spacing: { before: 60 } }),
            ...createEntry(e, i % 2 === 1),
          ]),

          /* QUEBRA DE PÁGINA (PÁGINA 2) */
          new Paragraph({
            children: [new PageBreak()],
          }),

          /* PROJECTOS ACADÉMICOS E TÉCNICOS */
          createSectionBar(data.titles.projects),
          ...data.projects.flatMap((p) => [
            new Paragraph({ spacing: { before: 80 } }),
            new Table({
              width: { size: 100, type: WidthType.PERCENTAGE },
              borders: cellBordersNone,
              rows: [
                new TableRow({
                  children: [
                    new TableCell({
                      width: { size: 80, type: WidthType.PERCENTAGE },
                      borders: cellBordersNone,
                      children: [
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: `${p.name}: `,
                              bold: true,
                              italics: true,
                              font: DOCX_FONTS.heading,
                              size: 19,
                            }),
                            new TextRun({
                              text: p.description,
                              bold: true,
                              italics: true,
                              font: DOCX_FONTS.heading,
                              size: 19,
                            }),
                          ],
                        }),
                      ],
                    }),
                    new TableCell({
                      width: { size: 20, type: WidthType.PERCENTAGE },
                      borders: cellBordersNone,
                      children: [
                        new Paragraph({
                          alignment: AlignmentType.RIGHT,
                          children: [
                            new TextRun({
                              text: p.date,
                              italics: true,
                              font: DOCX_FONTS.body,
                              size: 19,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            ...p.bullets.map(
              (bullet) =>
                new Paragraph({
                  indent: { left: 240 },
                  spacing: { before: 40, after: 40 },
                  children: [
                    new TextRun({
                      text: `${CHECK_CHAR}  `,
                      font: DOCX_FONTS.body,
                      size: 18,
                      color: DOCX_COLORS.brand,
                    }),
                    new TextRun({
                      text: bullet,
                      font: DOCX_FONTS.body,
                      size: 18,
                    }),
                  ],
                }),
            ),
          ]),

          /* COMPETÊNCIAS COMPORTAMENTAIS */
          new Paragraph({ spacing: { before: 140, after: 60 } }),
          createSectionBar(data.titles.softSkills),
          new Paragraph({ spacing: { before: 60 } }),
          createTwoColGrid(data.softSkills, true),

          /* IDIOMAS */
          new Paragraph({ spacing: { before: 140, after: 60 } }),
          createSectionBar(data.titles.languages),
          new Paragraph({ spacing: { before: 60 } }),
          new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            borders: cellBordersNone,
            rows: [
              new TableRow({
                children: [
                  new TableCell({
                    width: { size: 30, type: WidthType.PERCENTAGE },
                    shading: { type: ShadingType.CLEAR, fill: DOCX_COLORS.brand },
                    borders: cellBordersNone,
                    margins: { top: 60, bottom: 60, left: 80, right: 80 },
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: data.languageHeaders[0],
                            bold: true,
                            font: DOCX_FONTS.heading,
                            color: DOCX_COLORS.white,
                            size: 18,
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: { size: 25, type: WidthType.PERCENTAGE },
                    shading: { type: ShadingType.CLEAR, fill: DOCX_COLORS.brand },
                    borders: cellBordersNone,
                    margins: { top: 60, bottom: 60, left: 80, right: 80 },
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: data.languageHeaders[1],
                            bold: true,
                            font: DOCX_FONTS.heading,
                            color: DOCX_COLORS.white,
                            size: 18,
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: { size: 45, type: WidthType.PERCENTAGE },
                    shading: { type: ShadingType.CLEAR, fill: DOCX_COLORS.brand },
                    borders: cellBordersNone,
                    margins: { top: 60, bottom: 60, left: 80, right: 80 },
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: data.languageHeaders[2],
                            bold: true,
                            font: DOCX_FONTS.heading,
                            color: DOCX_COLORS.white,
                            size: 18,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              ...data.languages.map(
                (r, i) =>
                  new TableRow({
                    children: [
                      new TableCell({
                        width: { size: 30, type: WidthType.PERCENTAGE },
                        shading:
                          i % 2 === 1
                            ? { type: ShadingType.CLEAR, fill: DOCX_COLORS.stripe }
                            : undefined,
                        borders: cellBordersNone,
                        margins: { top: 50, bottom: 50, left: 80, right: 80 },
                        children: [
                          new Paragraph({
                            children: [
                              new TextRun({
                                text: r.language,
                                bold: true,
                                font: DOCX_FONTS.heading,
                                color: DOCX_COLORS.accent,
                                size: 18,
                              }),
                            ],
                          }),
                        ],
                      }),
                      new TableCell({
                        width: { size: 25, type: WidthType.PERCENTAGE },
                        shading:
                          i % 2 === 1
                            ? { type: ShadingType.CLEAR, fill: DOCX_COLORS.stripe }
                            : undefined,
                        borders: cellBordersNone,
                        margins: { top: 50, bottom: 50, left: 80, right: 80 },
                        children: [
                          new Paragraph({
                            children: [
                              new TextRun({
                                text: r.level,
                                font: DOCX_FONTS.body,
                                size: 18,
                              }),
                            ],
                          }),
                        ],
                      }),
                      new TableCell({
                        width: { size: 45, type: WidthType.PERCENTAGE },
                        shading:
                          i % 2 === 1
                            ? { type: ShadingType.CLEAR, fill: DOCX_COLORS.stripe }
                            : undefined,
                        borders: cellBordersNone,
                        margins: { top: 50, bottom: 50, left: 80, right: 80 },
                        children: [
                          new Paragraph({
                            children: [
                              new TextRun({
                                text: r.description,
                                italics: true,
                                font: DOCX_FONTS.body,
                                color: DOCX_COLORS.muted,
                                size: 18,
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
              ),
            ],
          }),

          /* CERTIFICAÇÕES E CONQUISTAS */
          new Paragraph({ spacing: { before: 140, after: 60 } }),
          createSectionBar(data.titles.certifications),
          new Paragraph({ spacing: { before: 60 } }),
          createTwoColGrid(data.certifications),

          /* INFORMAÇÕES ADICIONAIS */
          new Paragraph({ spacing: { before: 140, after: 60 } }),
          createSectionBar(data.titles.additional),
          new Paragraph({ spacing: { before: 60 } }),
          new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            borders: cellBordersNone,
            rows: data.additional.map(
              (r, i) =>
                new TableRow({
                  children: [
                    new TableCell({
                      width: { size: 35, type: WidthType.PERCENTAGE },
                      shading:
                        i % 2 === 1
                          ? { type: ShadingType.CLEAR, fill: DOCX_COLORS.stripe }
                          : undefined,
                      borders: cellBordersNone,
                      margins: { top: 40, bottom: 40, left: 80, right: 80 },
                      children: [
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: r.label,
                              bold: true,
                              font: DOCX_FONTS.heading,
                              size: 18,
                            }),
                          ],
                        }),
                      ],
                    }),
                    new TableCell({
                      width: { size: 65, type: WidthType.PERCENTAGE },
                      shading:
                        i % 2 === 1
                          ? { type: ShadingType.CLEAR, fill: DOCX_COLORS.stripe }
                          : undefined,
                      borders: cellBordersNone,
                      margins: { top: 40, bottom: 40, left: 80, right: 80 },
                      children: [
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: r.value,
                              font: DOCX_FONTS.body,
                              size: 18,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
            ),
          }),
        ],
      },
    ],
  });

  return await Packer.toBuffer(doc);
}

export default renderDocx;
