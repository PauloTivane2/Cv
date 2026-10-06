import type { CVData } from "../types/cv";

/**
 * CV de Paulo Babucho Issaca Tivane (Versão em Português).
 * Este ficheiro contém apenas DADOS, completamente desacoplado de estilos ou renderizadores.
 */
export const pauloTivanePT: CVData = {
  /* ------------------------------ Cabeçalho ------------------------------ */
  header: {
    nameLines: ["Paulo Babucho", "Issaca Tivane"],
    subtitlePrefix: "Licenciando em",
    subtitleHighlight: "Engenharia Informática",
    contacts: [
      {
        label: "LinkedIn",
        value: "Paulo Babucho Issaca Tivane",
        variant: "link",
        href: "https://www.linkedin.com/in/paulo-babucho-issaca-tivane-542b24363",
      },
      { label: "Email", value: "tivanepaulo2@gmail.com" },
      { label: "Telefone", value: "+258 872385528 / 833833824" },
      {
        label: "Portfólio",
        value: "tivaneverse.me",
        variant: "linkUnderline",
        href: "https://tivaneverse.me",
      },
      { label: "Nacionalidade", value: "Moçambicano" },
      { label: "Cidade", value: "Beira, Moçambique" },
      { label: "BI", value: "070107092536Q" },
    ],
  },

  /* --------------------------- Títulos das secções ------------------------ */
  titles: {
    profile: "Perfil Profissional",
    skills: "Habilidades Técnicas",
    education: "Formação Académica",
    experience: "Experiência Profissional",
    projects: "Projectos Académicos e Técnicos",
    softSkills: "Competências Comportamentais",
    languages: "Idiomas",
    certifications: "Certificações e Conquistas",
    additional: "Informações Adicionais",
  },

  /* -------------------------------- Perfil -------------------------------- */
  profile:
    "Finalista de Licenciatura em Engenharia Informática pela Universidade Zambeze, com formação sólida em desenvolvimento de software, administração de sistemas operativos, redes de computadores e bases de dados. Experiência prática em monitorização de redes LAN, suporte técnico de hardware e software e desenvolvimento de ferramentas de automação. Perfil polivalente e orientado para a resolução de problemas técnicos, com capacidade de comunicação em contextos multiculturais e multilíngues.",

  /* ------------------------- Habilidades técnicas ------------------------- */
  // Ordem de leitura: esquerda → direita, linha a linha.
  skills: [
    {
      label: "Linguagens e Framework",
      text: "Python, C, Java, HTML/CSS, SQL, Flutter, Next.js, noções de Laravel",
    },
    {
      label: "Sistemas Operativos",
      text: "Windows XP–11, noções de Linux (Ubuntu, Kali)",
    },
    {
      label: "Redes e Comunicações",
      text: "TCP/IP, LAN/WAN, noções básicas de configuração de routers e switches, diagnóstico de falhas",
    },
    {
      label: "Bases de Dados",
      text: "MySQL, PostgreSQL, SQLite, noções de MongoDB e modelação relacional",
    },
    {
      label: "Ferramentas",
      text: "Git, VS Code, Microsoft Office Suite, Google Workspace",
    },
    {
      label: "Eng. de Software",
      text: "POO, UML, metodologias ágeis (noções), controlo de versão",
    },
  ],

  /* --------------------------- Formação académica ------------------------- */
  education: [
    {
      title: "Licenciatura em Engenharia Informática",
      date: "2021 – Presente",
      subtitle: "Universidade Zambeze (UniZambeze)",
      location: "Beira, Moçambique",
      bullets: [
        "Curso em fase final — Trabalho de Conclusão de Curso (TCC) em desenvolvimento.",
        "Áreas nucleares: Algoritmos e Estruturas de Dados, Sistemas Operativos, Redes de Computadores, Bases de Dados, Engenharia de Software, Segurança Informática e Inteligência Artificial.",
      ],
    },
    {
      title: "12.ª Classe — Área B (Biologia)",
      date: "2020",
      subtitle: "Escola Secundária Mateus Sansão Mutemba",
      location: "Beira, Moçambique",
    },
  ],

  /* ------------------------- Experiência profissional --------------------- */
  experience: [
    {
      title: "Agente LQAS — Supervisão de Qualidade de Lotes",
      date: "2025",
      subtitle: "Campanha Nacional de Vacinação Contra a Poliomielite",
      location: "Beira, Moçambique",
      bullets: [
        "Actuou como supervisor de qualidade (LQAS) cobrindo zonas residenciais atribuídas.",
        "Recolheu e registou dados de cobertura vacinal com rigor, rastreabilidade e conformidade com os protocolos da OMS.",
        "Reportou resultados e irregularidades de forma atempada às coordenações locais de saúde pública.",
      ],
    },
  ],

  /* ------------------------------- Projectos ------------------------------ */
  projects: [
    {
      name: "Txeneza",
      description:
        "Plataforma de Mapeamento Georreferenciado de Resíduos Urbanos | Mobile/Web, IA",
      date: "2025/26",
      bullets: [
        "Concebeu uma plataforma mobile/web com suporte de Inteligência Artificial para mapeamento georreferenciado de resíduos sólidos urbanos em contextos de baixa conectividade.",
        "Desenvolveu estudo de caso aplicado à cidade da Beira, no âmbito do Trabalho de Conclusão de Curso.",
      ],
    },
  ],

  /* --------------------- Competências comportamentais --------------------- */
  softSkills: [
    {
      label: "Trabalho em equipa",
      text: "Colaboração em projectos académicos e actividades multidisciplinares",
    },
    {
      label: "Comunicação técnica",
      text: "Documentação clara, apresentações técnicas e relatórios estruturados",
    },
    {
      label: "Resolução de problemas",
      text: "Pensamento analítico, diagnóstico de falhas e tomada de decisão fundamentada",
    },
    {
      label: "Aprendizagem autónoma",
      text: "Capacidade de autoformação, adaptação a novas tecnologias e rápida assimilação",
    },
    {
      label: "Proatividade",
      text: "Iniciativa na identificação de melhorias e antecipação de necessidades",
    },
    {
      label: "Organização",
      text: "Planeamento, gestão do tempo e cumprimento de prazos em contextos exigentes",
    },
  ],

  /* -------------------------------- Idiomas ------------------------------- */
  languageHeaders: ["Língua", "Nível", "Descrição"],
  languages: [
    {
      language: "Português",
      level: "Fluente",
      description: "Língua nativa — comunicação oral e escrita a nível avançado",
    },
    {
      language: "Inglês",
      level: "Intermédio",
      description:
        "Leitura técnica, escrita profissional e comunicação básica em contextos internacionais",
    },
    {
      language: "Sena",
      level: "Intermédio",
      description: "Comunicação oral do quotidiano em contexto regional",
    },
    {
      language: "Ndau",
      level: "Intermédio",
      description: "Compreensão oral e comunicação básica em contexto comunitário",
    },
  ],

  /* ------------------------ Certificações e conquistas -------------------- */
  certifications: [
    {
      label: "LQAS 2025",
      text: "Participação como agente supervisor na Campanha Nacional de Erradicação da Poliomielite — reconhecido pela OMS.",
    },
    {
      label: "Linux / TCP-IP",
      text: "Formação auto-orientada em administração de sistemas Linux e redes TCP/IP.",
    },
  ],

  /* ------------------------- Informações adicionais ----------------------- */
  additional: [
    { label: "Disponibilidade", value: "Imediata — presencial ou remoto" },
    { label: "Mobilidade", value: "Disponível para deslocação nacional e internacional" },
    {
      label: "Área de interesse",
      value: "Desenvolvimento de software, redes e sistemas distribuídos",
    },
    { label: "Portfólio online", value: "Projectos pessoais e académicos" },
  ],
};

export default pauloTivanePT;
