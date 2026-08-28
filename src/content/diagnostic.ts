/**
 * EXPERIÊNCIA "O QUE VOCÊ PRECISA PROTEGER"
 *
 * NATUREZA DO CONTEÚDO — importante:
 * Esta experiência é uma ferramenta de ORIENTAÇÃO E DESCOBERTA. Ela não emite
 * parecer, não afirma que um direito é aplicável a um caso concreto e não
 * substitui análise. O resultado apresenta (a) as camadas de proteção que
 * costumam entrar na conversa, (b) as perguntas que precisam ser respondidas
 * antes de qualquer decisão e (c) as frentes da Velmont relacionadas.
 *
 * As "camadas" e os agrupamentos abaixo são uma organização editorial do site
 * construída sobre os serviços oficiais listados na Apresentação Velmont 2026.
 */

export type LayerId =
  | "marca"
  | "patente"
  | "desenho"
  | "autoral"
  | "software"
  | "titularidade"
  | "anterioridade"
  | "estrutura";

export type Layer = {
  id: LayerId;
  name: string;
  /** O que essa camada trata, em uma linha. */
  scope: string;
  service: string;
};

export const layers: Record<LayerId, Layer> = {
  marca: {
    id: "marca",
    name: "Marca",
    scope: "O sinal que identifica o negócio no mercado — e o direito de usá-lo com exclusividade.",
    service: "propriedade-industrial",
  },
  patente: {
    id: "patente",
    name: "Patente",
    scope: "A solução técnica nova: invenção, modelo de utilidade, tecnologia em desenvolvimento.",
    service: "propriedade-industrial",
  },
  desenho: {
    id: "desenho",
    name: "Desenho industrial",
    scope: "A forma e a aparência do produto, incluindo modelos e variações.",
    service: "propriedade-industrial",
  },
  autoral: {
    id: "autoral",
    name: "Direito autoral",
    scope: "Obras e conteúdos criativos: textos, imagens, vídeos, materiais, criações artísticas.",
    service: "propriedade-intelectual",
  },
  software: {
    id: "software",
    name: "Software",
    scope: "Proteção de programas de computador.",
    service: "propriedade-intelectual",
  },
  titularidade: {
    id: "titularidade",
    name: "Titularidade e contratos",
    scope: "De quem é a criação: cessão, licenciamento e relações com parceiros e colaboradores.",
    service: "propriedade-intelectual",
  },
  anterioridade: {
    id: "anterioridade",
    name: "Anterioridade e autoria",
    scope: "Prova do que foi criado e quando: documentação, evidências, projetos em andamento.",
    service: "propriedade-intelectual",
  },
  estrutura: {
    id: "estrutura",
    name: "Estrutura do negócio",
    scope: "Setores, processos, controles, governança e planejamento que sustentam o crescimento.",
    service: "consultoria-estruturacao",
  },
};

export type BuildOption = {
  id: string;
  label: string;
  /** Descrição curta exibida na opção. */
  hint: string;
  layers: LayerId[];
  /** Perguntas que o próprio negócio precisa saber responder. */
  questions: string[];
  articles: string[];
};

export const buildOptions: BuildOption[] = [
  {
    id: "marca",
    label: "Uma marca",
    hint: "Um nome, um sinal, uma identidade que o mercado reconhece.",
    layers: ["marca", "titularidade", "autoral"],
    questions: [
      "Esse nome já foi pesquisado em base de marcas, ou apenas como domínio e perfil social?",
      "Em quais classes de produtos e serviços a marca precisa valer?",
      "Quem criou a identidade visual — e existe documento definindo de quem ela é?",
      "Se outra empresa começar a usar um nome parecido amanhã, existe direito constituído para agir?",
    ],
    articles: ["marca-nome-empresarial", "busca-anterioridade"],
  },
  {
    id: "produto",
    label: "Um produto",
    hint: "Algo físico que você projeta, fabrica ou coloca no mercado.",
    layers: ["desenho", "marca", "patente"],
    questions: [
      "O que diferencia esse produto: a aparência, a solução técnica, ou as duas coisas?",
      "O produto tem variações e modelos que também precisariam ser protegidos?",
      "O produto já foi divulgado publicamente?",
      "A embalagem e o nome comercial estão tratados junto com o produto?",
    ],
    articles: ["proteger-design"],
  },
  {
    id: "invencao",
    label: "Uma invenção",
    hint: "Uma solução técnica nova para um problema concreto.",
    layers: ["patente", "anterioridade", "titularidade"],
    questions: [
      "Já foi feita busca de anterioridade em bases nacionais e internacionais?",
      "Existe documentação que demonstre o que foi desenvolvido e quando?",
      "A invenção foi divulgada, apresentada ou publicada de alguma forma?",
      "Quem participou do desenvolvimento — e a titularidade está definida em contrato?",
    ],
    articles: ["patente-modelo-utilidade", "o-que-e-fto"],
  },
  {
    id: "tecnologia",
    label: "Uma tecnologia",
    hint: "Um processo, método ou sistema que sustenta a sua operação.",
    layers: ["patente", "software", "anterioridade", "titularidade"],
    questions: [
      "A tecnologia esbarra em patentes de terceiros vigentes nos países onde você quer operar?",
      "O que exatamente se quer proteger: a solução técnica, o código, ou o método comercial?",
      "Existe registro de evidências das etapas de desenvolvimento?",
      "Fornecedores e parceiros assinaram algo sobre titularidade e confidencialidade?",
    ],
    articles: ["o-que-e-fto", "proteger-software"],
  },
  {
    id: "software",
    label: "Um software",
    hint: "Um produto digital, plataforma ou aplicação.",
    layers: ["software", "titularidade", "marca", "anterioridade"],
    questions: [
      "Quem escreveu o código: sócios, CLT, PJ, agência? Existe cessão de direitos assinada?",
      "O nome da plataforma foi verificado como marca, e não apenas como domínio?",
      "A interface e os conteúdos produzidos fazem parte do que precisa ser protegido?",
      "Existe versionamento e documentação que estabeleçam datas de criação?",
    ],
    articles: ["proteger-software", "marca-nome-empresarial"],
  },
  {
    id: "conteudo",
    label: "Conteúdo",
    hint: "Textos, vídeos, cursos, materiais, obras, repertório.",
    layers: ["autoral", "titularidade", "anterioridade", "marca"],
    questions: [
      "O acervo está inventariado — você sabe listar o que a empresa produziu?",
      "As obras produzidas por terceiros têm cessão ou apenas nota fiscal?",
      "Existe registro de autoria e data para o material mais estratégico?",
      "O nome do produto de conteúdo está protegido como marca?",
    ],
    articles: ["proteger-criacao"],
  },
  {
    id: "design",
    label: "Design",
    hint: "Identidade visual, forma, linguagem visual, projeto gráfico.",
    layers: ["desenho", "autoral", "titularidade", "marca"],
    questions: [
      "O design em questão é a aparência de um produto ou uma obra visual?",
      "Quem desenvolveu — e o contrato transfere a titularidade para a empresa?",
      "O design já foi divulgado publicamente?",
      "Existem variações e aplicações que também precisam entrar na proteção?",
    ],
    articles: ["proteger-design", "proteger-criacao"],
  },
  {
    id: "negocio",
    label: "Um negócio",
    hint: "A empresa inteira: operação, equipe, gestão e patrimônio.",
    layers: ["estrutura", "marca", "titularidade", "anterioridade"],
    questions: [
      "Setores, funções e responsabilidades estão definidos, ou dependem de quem está presente?",
      "Quais indicadores hoje sustentam as decisões da empresa?",
      "Os ativos intangíveis do negócio estão mapeados como patrimônio?",
      "O que aconteceria com a operação se um dos sócios saísse amanhã?",
    ],
    articles: ["estruturar-para-crescer"],
  },
];

export type MomentOption = {
  id: string;
  label: string;
  hint: string;
  /** Recorte que muda a leitura do resultado. */
  focus: string;
  nextStep: string;
};

export const momentOptions: MomentOption[] = [
  {
    id: "criando",
    label: "Criando",
    hint: "Ainda é ideia, conceito, projeto no papel.",
    focus:
      "Neste momento, a decisão mais barata é a pesquisa. Descobrir o que já existe antes de investir muda o custo de tudo o que vem depois — e a documentação do que você está criando começa agora, não no lançamento.",
    nextStep: "Comece pela pesquisa de anterioridade e pela documentação do que já foi criado.",
  },
  {
    id: "desenvolvendo",
    label: "Desenvolvendo",
    hint: "Está sendo construído, com mais de uma pessoa envolvida.",
    focus:
      "Quando há mais de uma pessoa envolvida, a pergunta deixa de ser apenas 'o que proteger' e passa a ser 'de quem é'. Titularidade, confidencialidade e prova de anterioridade são o trabalho deste estágio.",
    nextStep: "Trate titularidade e evidências antes que o projeto ganhe o mundo.",
  },
  {
    id: "lancando",
    label: "Lançando",
    hint: "Vai ao mercado agora ou em breve.",
    focus:
      "Lançamento é o momento em que a exposição pública começa — e em que a ausência de direito constituído fica mais cara. Aqui a prioridade é ordem: o que precisa estar protegido antes de o mercado ver.",
    nextStep: "Defina a ordem de proteção antes da exposição pública.",
  },
  {
    id: "crescendo",
    label: "Crescendo",
    hint: "Já opera e está ganhando tração.",
    focus:
      "Crescimento aumenta o valor da marca e, junto, o interesse de terceiros por ela. Monitoramento e estrutura passam a valer tanto quanto o registro inicial.",
    nextStep: "Monitore o que foi protegido e estruture o que cresceu sem organização.",
  },
  {
    id: "expandindo",
    label: "Expandindo",
    hint: "Novos mercados, produtos, praças ou países.",
    focus:
      "Expansão redefine o perímetro: novas linhas de produto, novas classes, novos territórios. Proteção que servia para a operação anterior pode não cobrir a próxima.",
    nextStep: "Revise o perímetro de proteção diante do novo território.",
  },
  {
    id: "reestruturando",
    label: "Reestruturando",
    hint: "Mudança societária, de posicionamento ou de operação.",
    focus:
      "Reestruturação é o momento em que o patrimônio intangível precisa ser localizado e nomeado — porque ele vai ser transferido, dividido, avaliado ou reorganizado junto com o resto.",
    nextStep: "Mapeie os ativos intangíveis antes de mover a estrutura.",
  },
];

export type ConcernOption = { id: string; label: string; hint: string };

/** Terceira pergunta — usada apenas na página /diagnostico. */
export const concernOptions: ConcernOption[] = [
  {
    id: "copia",
    label: "Alguém copiar",
    hint: "Concorrência usando o que é seu.",
  },
  {
    id: "perder",
    label: "Perder o que é meu",
    hint: "Descobrir que o ativo não está no seu nome.",
  },
  {
    id: "infringir",
    label: "Esbarrar em terceiros",
    hint: "Descobrir tarde que o caminho já tem dono.",
  },
  {
    id: "organizar",
    label: "Colocar ordem",
    hint: "Saber o que existe e o que falta.",
  },
];
