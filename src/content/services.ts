/**
 * SERVIÇOS OFICIAIS
 * Fonte: Apresentação Velmont 2026, páginas 5–8.
 * As frases entre aspas em `quote` são citações literais do material oficial.
 *
 * `context` e `stakes` são textos editoriais escritos para o site: descrevem o
 * problema de negócio, sem afirmar prazos, custos, garantias ou teses jurídicas.
 */

export type ServiceGroup = {
  title: string;
  items: string[];
};

export type Service = {
  slug: string;
  index: string;
  title: string;
  shortTitle: string;
  /** Citação literal do material oficial. */
  quote: string;
  /** Uma linha para índices e navegação. */
  summary: string;
  /** Abertura editorial da página de serviço. */
  context: string[];
  /** O que está em jogo quando isso não é tratado. Editorial, sem números. */
  stakes: string[];
  groups: ServiceGroup[];
  /** Perguntas frequentes — respostas de enquadramento, não parecer jurídico. */
  faq: { q: string; a: string }[];
  related: string[];
  metaDescription: string;
};

export const services: Service[] = [
  {
    slug: "consultoria-estruturacao",
    index: "01",
    title: "Consultoria integrada em estruturação de empresas",
    shortTitle: "Estruturação de empresas",
    quote: "Estruturar uma empresa é transformar organização em capacidade de crescimento.",
    summary:
      "Organização, processos, controles e governança para que o crescimento não dependa de improviso.",
    context: [
      "Muitas empresas crescem antes de se organizar. As vendas aumentam, a equipe aumenta, a operação aumenta — e a estrutura continua a mesma do primeiro ano. O resultado costuma aparecer como sintoma: retrabalho, decisões concentradas em poucas pessoas, indicadores que ninguém consegue explicar.",
      "Estruturar não é criar burocracia. É tornar explícito aquilo que hoje existe apenas na cabeça de alguém: quem decide o quê, como cada processo acontece, quais números importam e o que a empresa está tentando construir nos próximos anos.",
    ],
    stakes: [
      "Decisões estratégicas tomadas sem dados confiáveis.",
      "Responsabilidades sobrepostas ou sem dono definido.",
      "Processos que só funcionam quando uma pessoa específica está presente.",
      "Crescimento que aumenta o faturamento e a desorganização na mesma proporção.",
    ],
    groups: [
      {
        title: "Estrutura e processos",
        items: [
          "Estrutura Organizacional — definição de setores, funções e responsabilidades",
          "Processos e Procedimentos — organização e padronização das operações",
          "Otimização Operacional — identificação de gargalos e melhoria de processos",
        ],
      },
      {
        title: "Gestão e direção",
        items: [
          "Gestão e Controles — indicadores, custos, financeiro e acompanhamento",
          "Planejamento Estratégico — objetivos, metas e direcionamento do negócio",
          "Governança e Compliance — regras, documentos e segurança na gestão",
        ],
      },
      {
        title: "Mercado",
        items: ["Posicionamento e Marca — construção de valor e diferenciação no mercado"],
      },
    ],
    faq: [
      {
        q: "Estruturação é o mesmo que consultoria de gestão?",
        a: "A estruturação trata da arquitetura do negócio — setores, responsabilidades, processos, controles e governança. É o trabalho que define como a empresa funciona, e não apenas como ela vende. Na Velmont, essa frente conversa diretamente com a proteção dos ativos: estrutura e patrimônio intelectual fazem parte da mesma decisão.",
      },
      {
        q: "Minha empresa é pequena. Faz sentido agora?",
        a: "Estrutura não é uma questão de tamanho, é de intenção de crescimento. Quanto mais cedo funções, processos e titularidade de criações ficam definidos, menor o custo de organizar isso depois — quando já existem contratos, equipe e histórico envolvidos.",
      },
      {
        q: "O que é analisado antes de começar?",
        a: "O escopo é definido a partir do momento e da realidade da empresa. Essa análise inicial é o que determina por onde começar. [VALIDAR: descrever aqui as etapas do diagnóstico conforme a metodologia praticada pela Velmont.]",
      },
    ],
    related: ["naming-identidade", "propriedade-intelectual"],
    metaDescription:
      "Consultoria integrada em estruturação de empresas: estrutura organizacional, processos, gestão e controles, planejamento estratégico, governança e compliance.",
  },
  {
    slug: "propriedade-industrial",
    index: "02",
    title: "Propriedade industrial",
    shortTitle: "Propriedade industrial",
    quote: "Criar gera valor. Proteger garante que esse valor continue sendo seu.",
    summary:
      "Marcas, patentes e desenho industrial — do estudo de viabilidade à estratégia de proteção.",
    context: [
      "Propriedade industrial é a camada do patrimônio que dá exclusividade sobre aquilo que diferencia um negócio no mercado: o nome pelo qual ele é reconhecido, a tecnologia que ele desenvolveu, a forma dos produtos que ele criou.",
      "É também a camada onde o tempo importa. Cada um desses direitos depende de um procedimento próprio, com análise, prazos e possibilidade de oposição de terceiros. Por isso o trabalho começa antes do pedido — na pesquisa que mostra o que já existe e o que isso significa para a sua estratégia.",
    ],
    stakes: [
      "Investir em um nome que já pertence a outra empresa.",
      "Descobrir uma anterioridade impeditiva depois do lançamento, não antes.",
      "Não conseguir agir contra uma cópia por não haver direito constituído.",
      "Desenvolver uma tecnologia sem saber se ela esbarra em patentes de terceiros.",
    ],
    groups: [
      {
        title: "Marcas",
        items: [
          "Registro de marcas",
          "Pesquisa de anterioridade e viabilidade de naming",
          "Monitoramento e acompanhamento",
          "Estratégia de proteção da marca",
          "Intermediação de compra e venda de marca",
        ],
      },
      {
        title: "Patentes",
        items: [
          "Patentes de invenção",
          "Modelos de utilidade",
          "Estratégia de proteção de novas tecnologias e soluções",
          "Busca de anterioridade patentária — pesquisa em bases nacionais e internacionais, verificação de documentos de patente semelhantes e relatório técnico com análise das patentes mais relevantes",
          "Parecer de Freedom-to-Operate (FTO) — interpretação das reivindicações das patentes encontradas, verificação de vigência no Brasil ou nos países de interesse, comparação com a intenção da invenção, apontamento do risco de uso ou infração e sugestão de alternativas, caso existam riscos",
        ],
      },
      {
        title: "Desenho industrial",
        items: [
          "Proteção do design e da aparência dos produtos",
          "Registro de modelos e variações",
          "Estratégia de proteção contra cópia",
        ],
      },
    ],
    faq: [
      {
        q: "Qual a diferença entre marca, patente e desenho industrial?",
        a: "São direitos distintos sobre coisas distintas: a marca protege o sinal que identifica o produto ou serviço; a patente protege uma solução técnica nova; o desenho industrial protege a forma e a aparência de um produto. Um mesmo negócio pode precisar dos três, ou de apenas um — a análise define isso.",
      },
      {
        q: "Ter o nome registrado na Junta Comercial garante a marca?",
        a: "São registros diferentes, com efeitos diferentes. O registro do nome empresarial e o registro de marca são procedimentos separados, e ter um não substitui o outro. Essa é uma das confusões mais comuns e uma das mais caras de corrigir depois.",
      },
      {
        q: "O que é uma busca de anterioridade?",
        a: "É a pesquisa que mostra o que já existe registrado ou depositado antes de você investir. No caso de patentes, o material oficial da Velmont descreve a busca em bases nacionais e internacionais, com relatório técnico das patentes mais relevantes. É o que permite decidir com informação em vez de expectativa.",
      },
      {
        q: "Quanto tempo leva e quanto custa?",
        a: "[VALIDAR: prazos e valores dependem do tipo de pedido, do órgão competente e do andamento de cada processo. Esta resposta precisa ser preenchida pela Velmont com a informação que a empresa se compromete a sustentar.]",
      },
    ],
    related: ["propriedade-intelectual", "naming-identidade"],
    metaDescription:
      "Propriedade industrial na Velmont: registro e monitoramento de marcas, patentes de invenção e modelo de utilidade, busca de anterioridade, parecer FTO e desenho industrial.",
  },
  {
    slug: "propriedade-intelectual",
    index: "03",
    title: "Propriedade intelectual",
    shortTitle: "Propriedade intelectual",
    quote: "Ideias criam valor. A propriedade intelectual transforma esse valor em patrimônio.",
    summary:
      "Direitos autorais, software, conteúdo, titularidade e prova de anterioridade das criações.",
    context: [
      "Boa parte do que uma empresa cria não é um produto industrial: é conteúdo, identidade, código, método, material, repertório. Esse acervo costuma ser produzido por muitas mãos — sócios, funcionários, agências, freelancers — e raramente alguém pergunta, no momento certo, de quem ele é.",
      "A resposta a essa pergunta é o que separa um acervo criativo de um patrimônio. Titularidade definida, autoria documentada e evidências preservadas transformam criação em ativo que pode ser licenciado, cedido, defendido e contabilizado.",
    ],
    stakes: [
      "Criações desenvolvidas por terceiros sem definição de titularidade.",
      "Material estratégico sem qualquer registro de autoria ou data.",
      "Software desenvolvido para a empresa e que juridicamente não é dela.",
      "Projetos em desenvolvimento sem prova de anterioridade.",
    ],
    groups: [
      {
        title: "Direitos autorais",
        items: [
          "Proteção de obras e conteúdos criativos",
          "Textos, imagens, vídeos e materiais institucionais",
          "Criações artísticas e intelectuais",
          "Registro musical: letra e partitura",
        ],
      },
      {
        title: "Software e tecnologia",
        items: ["Proteção de programas de computador"],
      },
      {
        title: "Conteúdo e criação",
        items: [
          "Proteção de materiais desenvolvidos pela empresa",
          "Identidade visual e elementos criativos",
          "Conteúdos digitais e materiais estratégicos",
        ],
      },
      {
        title: "Contratos e titularidade",
        items: [
          "Definição de titularidade das criações",
          "Cessão e licenciamento de direitos",
          "Segurança jurídica nas relações com parceiros e colaboradores",
        ],
      },
      {
        title: "Anterioridade e autoria",
        items: [
          "Prova de anterioridade de ideias e criações",
          "Documentação da autoria e data de criação",
          "Registro e preservação de evidências",
          "Proteção de projetos, conceitos e invenções em desenvolvimento",
        ],
      },
    ],
    faq: [
      {
        q: "Se a minha empresa pagou pela criação, ela é da empresa?",
        a: "Pagar por um trabalho e ser titular dos direitos sobre ele são coisas que precisam estar escritas. É exatamente por isso que contratos, cessão e licenciamento aparecem como frente própria: a titularidade se define em documento, não por presunção.",
      },
      {
        q: "O que é prova de anterioridade?",
        a: "É a documentação que demonstra o que você criou e quando criou. Ela não substitui os registros específicos de cada tipo de direito, mas constrói o histórico que sustenta uma discussão de autoria — especialmente em projetos ainda em desenvolvimento.",
      },
      {
        q: "Software se protege por patente ou por direito autoral?",
        a: "O material oficial da Velmont trata a proteção de programas de computador dentro de propriedade intelectual, e a proteção de novas tecnologias e soluções dentro de patentes. Qual caminho se aplica a um caso concreto depende do que exatamente está sendo protegido — a expressão em código ou a solução técnica. [VALIDAR: enquadramento a ser detalhado pela Velmont.]",
      },
    ],
    related: ["propriedade-industrial", "consultoria-estruturacao"],
    metaDescription:
      "Propriedade intelectual na Velmont: direitos autorais, proteção de software, titularidade e cessão de direitos, prova de anterioridade e documentação de autoria.",
  },
  {
    slug: "naming-identidade",
    index: "04",
    title: "Naming & identidade visual",
    shortTitle: "Naming & identidade",
    quote:
      "Uma marca começa pelo nome, ganha forma pela identidade e conquista valor pelo posicionamento.",
    summary:
      "Criação de nomes registráveis, identidade visual completa e posicionamento de marca.",
    context: [
      "Um nome pode ser bonito, memorável, disponível como domínio — e ainda assim irregistrável. Quando naming e propriedade industrial são tratados por times que não conversam, a empresa descobre isso depois de imprimir a fachada.",
      "Na Velmont, a criação do nome nasce ao lado da análise de viabilidade de registro. O critério não é apenas se o nome soa bem: é se ele pode ser seu.",
    ],
    stakes: [
      "Nome escolhido antes de qualquer pesquisa de disponibilidade.",
      "Identidade visual construída sobre um nome que não pode ser registrado.",
      "Marca sem personalidade definida, indistinguível dos concorrentes.",
      "Comunicação que muda de tom a cada campanha por falta de diretriz.",
    ],
    groups: [
      {
        title: "Naming estratégico",
        items: [
          "Criação de nomes para empresas, produtos e serviços",
          "Conceito e posicionamento por trás do nome",
          "Análise de diferenciação e memorabilidade",
          "Pesquisa de disponibilidade e viabilidade de registro",
        ],
      },
      {
        title: "Identidade visual",
        items: [
          "Criação de logotipo e símbolo",
          "Definição de cores, tipografia e elementos visuais",
          "Desenvolvimento de identidade visual completa",
          "Manual de identidade e diretrizes de aplicação",
        ],
      },
      {
        title: "Posicionamento de marca",
        items: [
          "Construção da personalidade da marca",
          "Definição de conceitos e atributos",
          "Coerência entre identidade, comunicação e público",
          "Estratégia para diferenciação no mercado",
        ],
      },
    ],
    faq: [
      {
        q: "Vocês criam o nome e também registram?",
        a: "As duas frentes existem na Velmont e conversam entre si: naming estratégico inclui pesquisa de disponibilidade e viabilidade de registro, e o registro em si é tratado na frente de propriedade industrial.",
      },
      {
        q: "Por que um nome disponível pode não ser registrável?",
        a: "Disponibilidade de domínio, de perfil social e de nome empresarial são verificações diferentes da análise de registrabilidade de uma marca. Um nome pode estar livre em todas as primeiras e ainda assim encontrar obstáculo no exame — por isso a pesquisa de anterioridade vem antes da decisão.",
      },
      {
        q: "Identidade visual entra como propriedade intelectual?",
        a: "O material oficial da Velmont lista identidade visual e elementos criativos entre os itens tratados em propriedade intelectual. Criar a identidade e definir a quem ela pertence são etapas complementares.",
      },
    ],
    related: ["propriedade-industrial", "consultoria-estruturacao"],
    metaDescription:
      "Naming estratégico e identidade visual na Velmont: criação de nomes com pesquisa de viabilidade de registro, identidade visual completa e posicionamento de marca.",
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
