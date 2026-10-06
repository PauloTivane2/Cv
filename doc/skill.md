---
name: Paulo Tivane - CV & Academic Writer (PT-PT)
description: >
  Diretrizes de redação, regras de projeto e integridade do template em Português Europeu
  para o currículo de Paulo Tivane e respetivos documentos técnicos, assegurando fidelidade
  absoluta ao layout de 2 páginas A4 e à geração multi-formato (HTML, PDF, DOCX).
version: 2.0.0
author: Paulo Babucho Issaca Tivane
tags:
  - paulo-tivane
  - cv-template
  - writing
  - documentation
  - portuguese-europeu
---

# Paulo Tivane — Regras de Projeto e Diretrizes de Redação (PT-PT)

Este documento define as regras obrigatórias que qualquer Inteligência Artificial ou colaborador deve seguir ao trabalhar neste projeto, redigir ou atualizar o currículo de **Paulo Babucho Issaca Tivane**, ou gerar documentação técnica associada.

---

## 1. Identidade e Perfil Profissional

- **Nome Completo**: Paulo Babucho Issaca Tivane
- **Qualificação**: Licenciando em Engenharia Informática (Universidade Zambeze — UniZambeze, Beira, Moçambique)
- **Áreas Nucleares**: Desenvolvimento de software, administração de sistemas (Linux, Windows), redes e comunicações (TCP/IP, LAN/WAN), bases de dados e inteligência artificial aplicada.
- **Portfólio & Presença Online**:
  - LinkedIn: `https://www.linkedin.com/in/paulo-babucho-issaca-tivane-542b24363` (deve ser sempre um link clicável)
  - Portfólio: `https://tivaneverse.me` (deve ser sempre um link clicável)

---

## 2. Regra Fundamental: Integridade Absoluta do Template do CV

> [!IMPORTANT]
> **Orçamento Rígido de 2 Páginas A4 (210mm × 297mm)**:
> O currículo foi concebido milimetricamente para ocupar **exatamente duas páginas A4**. Qualquer alteração de texto, adição de cargos, habilidades ou projetos **NUNCA** pode empurrar conteúdo para uma terceira página nem desalinhar as grelhas.
> Se for necessário adicionar novas experiências ou detalhes, o texto deve ser sintetizado com concisão para manter o equilíbrio visual.

### Regras Estritas de Layout e Estilo:
1. **Tipografia Obrigatória**:
   - Utilizar **sempre** a fonte **Chivo** (definida no Tailwind e nos documentos HTML/Word como `font-heading` e `font-body`).
2. **Contactos e Hiperligações**:
   - O LinkedIn e o Portfólio devem ser **hiperligações ativas e clicáveis** (`<a href="..." target="_blank">` no HTML/PDF e `ExternalHyperlink` no Word).
3. **Competências Comportamentais**:
   - O texto descritivo de cada competência deve estar sempre com alinhamento **justificado** (`text-justify`).
4. **Desacoplamento entre Dados e Apresentação**:
   - Dados pessoais e profissionais pertencem **exclusivamente** a `src/data/paulo-tivane.pt.ts`.
   - Estruturas de apresentação pertencem a `src/templates/html/` e `src/templates/docx/`.
   - **Nunca** codificar dados biográficos diretamente dentro de ficheiros de template.
5. **Multi-Formato Obrigatório**:
   - Qualquer evolução no projeto deve preservar a capacidade de gerar sempre os ficheiros finais em **HTML**, **PDF** e **DOCX (Word)** através do comando `npm run build`.

---

## 3. Idioma: Português Europeu Rigoroso (PT-PT)

Todo o conteúdo deve ser redigido exclusivamente em **Português Europeu formal**, adequado ao contexto institucional e profissional de Moçambique e internacional.

### Diretrizes Gramaticais e Ortográficas:
- **Ortografia Portuguesa**: Escrever palavras conforme o padrão de referência (ex.: *projecto*, *contacto*, *actividade*, *acção*, *óptimo*, *supervisão*, *equipa*, etc.).
- **Proibido Português do Brasil**: Não utilizar termos ou construções como *"usuário"*, *"tela"*, *"cadastrar"*, *"gerenciar"*, *"time"* (no sentido de equipa), gerúndios excessivos (*"está fazendo"*), ou colocações pronominais inadequadas.
- **Tom Formal e Técnico**: Claro, preciso, sóbrio e focado em competências práticas e realizações mensuráveis.
- **Termos Técnicos em Inglês**: Manter os termos universais da engenharia informática quando forem a convenção da indústria (ex.: *framework*, *backend*, *frontend*, *full-stack*, *Flutter*, *Docker*, *Next.js*, *Git*, *API*, *TCP/IP*). Evitar traduções forçadas ou artificiais.

---

## 4. Padrão de Redação para Entradas do Currículo

Ao escrever ou editar tópicos de experiência, formação ou projetos de Paulo Tivane:

1. **Estrutura por Tópicos**:
   - Utilizar marcadores com o símbolo padronizado do template (`✓`).
   - Cada tópico deve começar com um verbo de ação no pretérito perfeito ou substantivo de ação (ex.: *Concebeu*, *Desenvolveu*, *Actuou*, *Coordenou*, *Monitorizou*).
2. **Concisão e Impacto**:
   - Cada frase deve conter contexto, ação executada e tecnologia/resultado alcançado.
   - Eliminar enchimentos (*fluff*) e frases genéricas sem substância.
3. **Exemplo Correto**:
   - *✓ Concebeu uma plataforma mobile/web com suporte de Inteligência Artificial para mapeamento georreferenciado de resíduos sólidos urbanos em contextos de baixa conectividade.*
4. **Exemplo Incorreto**:
   - *✓ Foi responsável por ajudar a fazer um sistema muito bom que os usuários usavam para ver lixo.*

---

## 5. Eliminação de Padrões e Clichês de IA

Qualquer IA que atuar neste projeto está proibida de gerar expressões automáticas desprovidas de valor, tais como:
- *"É importante ressaltar/salientar que..."*
- *"No cenário atual da tecnologia..."*
- *"Em suma..."* ou *"Com certeza..."*
- *"Apaixonado por tecnologia e inovação..."* (preferir evidências objetivas de competência).

---

## 6. Documentação Académica e Técnica Complementar

Sempre que forem elaborados relatórios técnicos, artigos ou documentação associada aos projetos de Paulo Tivane (ex.: Trabalho de Conclusão de Curso do projeto **Txeneza**):
- **Norma APA 7.ª edição**: Seguir rigorosamente a formatação e normas de citação da APA 7.
- **Integridade de Fontes**: Nunca inventar referências bibliográficas, DOIs, ISBNs ou páginas inexistentes.
- **Subordinação**: Se houver qualquer dúvida ou conflito entre normas gerais de escrita académica e as regras do template do CV, **as regras do template do CV prevalecem sempre**.

---

## 7. Hierarquia de Prioridades em Caso de Conflito

1. **Preservação do Template do CV**: Garantir 2 páginas exatas, sem quebra de grelhas ou desalinhamento.
2. **Instrução Direta de Paulo Tivane**: Qualquer requisito específico do utilizador.
3. **Português Europeu (PT-PT)**: Conformidade ortográfica e sintática.
4. **Exatidão Técnica e Clareza**: Fidelidade às tecnologias e projetos reais.
