// =====================================================================
// CONFIGURAÇÃO DO PORTFOLIO — edite apenas este ficheiro
// Após guardar, o site atualiza automaticamente em ~1 minuto
// =====================================================================

const CONFIG = {

  // --- IDENTIDADE ---
  nome:        "Kaique Stahl Martins",
  nomeHero:    ["Kaique", "Stahl"],          // [linha1, linha2] no hero
  titulo:      "Técnico Mecânico & Tecnólogo em Automação Industrial",
  localizacao: "Bragança, Portugal",
  email:       "kaiquestahlmartins@gmail.com",
  telefone:    "+351 935 293 372",
  foto:        "foto.jpg",                    // ficheiro de foto na mesma pasta
  linkedin:    "https://www.linkedin.com/in/kaique-stahl-martins",
  github:      "",                            // ex: https://github.com/kaique

  // --- HERO (frase curta) ---
  heroSub: "Técnico mecânico com experiência em modelação 3D, PLC e automação industrial — baseado em Bragança, disponível para projetos remotos com empresas do Brasil.",

  // --- SOBRE (bio completa) ---
  bio: "Sou técnico mecânico formado pelo COTIL (UNICAMP) e estudante de Automação Industrial pela FATEC Tatuí (último ano). Realizei mobilidade académica no Instituto Politécnico de Bragança, aprofundando conhecimentos em PLC, programação Ladder, SolidWorks, Robótica e Organização Industrial. Tenho experiência em desenho técnico e modelagem mecânica com AutoCAD e Inventor, adquirida como monitor universitário e em projetos industriais. Estou aberto a oportunidades em Manutenção, Projetos Mecânicos e Automação Industrial, inclusive remotamente com empresas do Brasil.",

  // --- COMPETÊNCIAS (nivel: 0-100) ---
  skills: [
    { nome: "SolidWorks",             nivel: 85 },
    { nome: "Desenho Técnico",        nivel: 90 },
    { nome: "AutoCAD",                nivel: 80 },
    { nome: "Inventor",               nivel: 75 },
    { nome: "PLC / Programação Ladder", nivel: 70 },
    { nome: "Robótica Industrial",    nivel: 65 },
    { nome: "Excel / Power BI",       nivel: 60 },
    { nome: "Gestão de Almoxarifado", nivel: 65 }
  ],

  // --- EXPERIÊNCIA ---
  experiencia: [
    {
      empresa:   "Afonso & Irmãos, Lda.",
      cargo:     "Desenhista Mecânico",
      periodo:   "Jul 2026 — Presente",
      local:     "Bragança, Portugal",
      descricao: "Desenvolvimento, modelação 3D e detalhamento técnico de implementos agrícolas com SolidWorks. Criação de peças, conjuntos e documentação técnica para o setor agroindustrial, com foco em soluções eficientes e inovadoras."
    },
    {
      empresa:   "Afonso & Irmãos, Lda.",
      cargo:     "Estagiário",
      periodo:   "Abr 2026 — Jun 2026",
      local:     "Bragança, Portugal",
      descricao: "Desenvolvimento de peças e montagens no SolidWorks para catálogo de produtos próprios. Gestão de almoxarifado e recebimento, contribuindo para a eficiência e estruturação dos processos."
    },
    {
      empresa:   "Grupo BT — EPI e MRO",
      cargo:     "Aprendiz de Controller",
      periodo:   "Set 2025 — Fev 2026",
      local:     "Tatuí, SP, Brasil",
      descricao: "Aprendizagem de processos de controlo e gestão em empresa especializada em EPI e MRO industrial."
    },
    {
      empresa:   "Fatec Tatuí",
      cargo:     "Monitor de Desenho Técnico",
      periodo:   "Ago 2024 — Jul 2025",
      local:     "Tatuí, SP, Brasil",
      descricao: "Monitoria de Desenho Técnico para cursos de Automação e Manutenção Industrial. Desenvolvimento de liderança e comunicação ao apoiar colegas no período noturno."
    }
  ],

  // --- FORMAÇÃO ---
  formacao: [
    {
      instituicao: "Fatec Tatuí",
      curso:       "CST em Automação Industrial",
      periodo:     "2024 — 2026",
      status:      "Em curso"
    },
    {
      instituicao: "Instituto Politécnico de Bragança",
      curso:       "Mobilidade — Tecnologia e Gestão",
      periodo:     "Fev 2026 — Jul 2026",
      status:      "Concluído"
    },
    {
      instituicao: "COTIL — Colégio Técnico de Limeira (UNICAMP)",
      curso:       "Curso Técnico em Mecânica",
      periodo:     "2021 — 2023",
      status:      "Concluído"
    }
  ],

  // --- CERTIFICAÇÕES ---
  certificacoes: [
    "Aspire Leaders Program",
    "Desvendando a Inteligência Artificial: Aplicações e Desafios",
    "Introdução ao Excel e Power BI — Dashboards com a Klabin",
    "FECITEC — Feira de Ciências e Tecnologia do COTIL"
  ],

  // --- IDIOMAS ---
  idiomas: [
    { idioma: "Português", nivel: "Nativo" },
    { idioma: "Inglês",    nivel: "Básico"  }
  ],

  // --- PROJETOS ---
  projetos: [
    {
      titulo:   "Agrade com Abertura",
      desc:     "Modelação 3D de grade agrícola com mecanismo de abertura",
      youtube:  "I5dbW_fiTfE"
    },
    {
      titulo:   "Motor 4 Cilindros",
      desc:     "Montagem completa de motor de 4 cilindros em SolidWorks",
      youtube:  "TTyu3rSP5Ps"
    },
    {
      titulo:   "Montagem Catraca",
      desc:     "Mecanismo de catraca — modelação e montagem 3D",
      youtube:  "25DpDlCL1PE"
    },
    {
      titulo:   "Morsa",
      desc:     "Montagem de morsa industrial com movimento funcional",
      youtube:  "LMwQ5hfT98g"
    },
    {
      titulo:   "Balde",
      desc:     "Modelação 3D de balde para implemento agrícola",
      youtube:  "zS8q6yU0HPc"
    },
    {
      titulo:   "Caixa de Carga",
      desc:     "Projeto e detalhamento técnico de caixa de carga",
      youtube:  "C80hvZqTQYc"
    },
    {
      titulo:   "Capinadeira",
      desc:     "Implemento agrícola — capinadeira modelada em SolidWorks",
      youtube:  "iJiGAU7iaTA"
    },
    {
      titulo:   "Projeto 8",
      desc:     "Modelação 3D em SolidWorks",
      youtube:  "I_oBaRLiBTE"
    }
  ],

  // --- CONFIGURAÇÕES DO SITE ---
  corAccent:     "#eab308",    // cor principal (hex)
  adminPassword: "kaique2026", // password do painel /admin
  githubRepo:    "kaiquestahl2026/portfolio",
};
