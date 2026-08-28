# Procedência do conteúdo

Este documento registra a origem de cada texto do site. Ele existe para que a Velmont
possa revisar o material sabendo exatamente **o que é palavra da empresa, o que é
redação editorial do site e o que ainda depende de validação.**

Fonte oficial única: **Apresentação Velmont 2026** (PDF institucional fornecido pela
empresa, 12 páginas).

---

## Legenda

| Marca | Significado |
| --- | --- |
| 🟢 **OFICIAL** | Reproduzido literalmente do material institucional |
| 🔵 **EDITORIAL** | Redação criada para o site — enquadramento, sem afirmação técnica |
| 🟡 **A VALIDAR** | Placeholder marcado e visível na interface |
| ⚪ **ESTRUTURA** | Organização do site, não declaração da empresa |

---

## 🟢 Oficial — não alterar sem a Velmont

| Conteúdo | Origem | Arquivo |
| --- | --- | --- |
| Assinatura "Protegendo ideias, estruturando negócios." / "Trusted strategies, proven results." | p.1 | `content/site.ts` |
| Origem, experiência, missão, visão e crença institucional | p.2 | `content/founders.ts` → `about` |
| Carta e credenciais de Danielle Cubas de Azevedo | p.3 | `content/founders.ts` |
| Carta e credenciais de Lisandra Ferreira dos Santos | p.4 | `content/founders.ts` |
| Os 4 serviços, suas citações e todos os itens listados | p.5–8 | `content/services.ts` |
| Depoimentos ("Experiências reais com a Velmont") | p.10 | `content/testimonials.ts` |
| Endereço, telefone, e-mail, Instagram | p.11 | `content/site.ts` |
| Texto sobre atendimento presencial/digital e ambientes | p.11 | `app/sobre/page.tsx`, `app/contato/page.tsx` |
| Retratos das fundadoras e fotos dos ambientes | p.3, 4, 11 | `public/founders/`, `public/office/` |
| Logotipo | p.1 | `public/brand/velmont-lockup.png` |

**"Mais de 10 anos de experiência"** (p.2) está em `site.experienceYears` e é renderizado
a partir dessa constante — não é calculado por data, para não derivar sozinho do texto
oficial. A carta de Danielle menciona "mais de 11 anos" de trajetória pessoal; os dois
números coexistem porque descrevem coisas diferentes e ambos são literais.

---

## 🔵 Editorial — redação do site

Escrita para posicionar e ensinar. **Não contém prazos, valores, garantias, estatísticas,
nomes de clientes, prêmios, certificações nem teses jurídicas.**

| Conteúdo | Onde | Natureza |
| --- | --- | --- |
| Manchete do hero: "Tudo o que a sua empresa criou já vale. Falta estar no nome dela." | `sections/Hero.tsx` | Conceito criativo derivado de "marca é patrimônio" |
| "O que está em jogo" — nome, criação, titularidade, estrutura | `content/transparency.ts` → `stakes` | Leitura do problema descrito pelas fundadoras |
| Contexto e "o que costuma estar em aberto" de cada serviço | `content/services.ts` → `context`, `stakes` | Enquadramento de negócio |
| Quadros de transparência (o que fazemos / analisado / risco / terceiros) | `content/transparency.ts` | Tradução do compromisso declarado por Danielle (p.3) |
| Perguntas do diagnóstico e descrição das camadas | `content/diagnostic.ts` | Perguntas que o negócio precisa responder — não respostas |
| Textos de CTA e páginas de apoio | `sections/CTASection.tsx` e páginas | Copy institucional |
| Os 9 artigos do blog | `content/articles/` | Ver ressalva abaixo |

### Ressalva sobre os artigos

Os artigos trabalham **critério de decisão e enquadramento**, não conteúdo técnico-jurídico.
Onde um texto exigiria informação que só a Velmont pode sustentar (requisitos legais,
prazos, órgãos, custos, procedimento), o artigo traz um bloco `todo` visível em vez de
uma afirmação. Todos estão com `status: "rascunho"`, o que exibe uma nota editorial no
topo da página informando isso ao leitor.

---

## 🟡 A validar — marcado e visível na interface

| Item | Onde aparece | O que falta |
| --- | --- | --- |
| Prazos e custos de registro de marca | `articles/como-registrar-marca.ts` | Informação que a Velmont se comprometa a sustentar |
| Órgãos e efeitos de cada registro | `articles/marca-nome-empresarial.ts` | Precisão técnica revisada |
| Bases consultadas e formato do relatório de busca | `articles/busca-anterioridade.ts` | Prática real da empresa |
| Requisitos técnicos de patente e modelo de utilidade | `articles/patente-modelo-utilidade.ts` | Revisão técnica |
| Formato e prazo do parecer FTO | `articles/o-que-e-fto.ts` | Prática real |
| Via de proteção de software e composição do depósito | `articles/proteger-software.ts` | Enquadramento validado |
| Formas de registro e preservação de evidências | `articles/proteger-criacao.ts` | Serviços praticados |
| Requisitos de desenho industrial | `articles/proteger-design.ts` | Revisão técnica |
| Etapas do trabalho de estruturação | `articles/estruturar-para-crescer.ts` | Metodologia real |
| Prazos e valores (FAQ de propriedade industrial) | `content/services.ts` | Resposta oficial |
| Etapas do diagnóstico de estruturação | `content/services.ts` | Metodologia real |
| Enquadramento de software (patente × direito autoral) | `content/services.ts` | Revisão técnica |
| **Parceiros** | `app/sobre/page.tsx` | Lista oficial + autorização de uso de cada marca |

Todos renderizam o componente `ValidationNote`, rotulado **"Conteúdo a validar"**.
Nenhum aparece como se fosse informação da empresa.

---

## ⚪ Estrutura do site — não é declaração da empresa

| Item | Onde | Observação |
| --- | --- | --- |
| As cinco etapas: Entender, Analisar, Estruturar, Proteger, Acompanhar | `content/transparency.ts` → `journey` | O material **não declara metodologia nomeada**. A própria seção informa: "Estrutura de comunicação do site. As etapas de cada projeto são definidas caso a caso." |
| As oito "camadas de proteção" | `content/diagnostic.ts` → `layers` | Organização editorial construída sobre os serviços oficiais |
| Categorias do blog | `content/articles/types.ts` | Taxonomia editorial |
| Significados atribuídos aos motivos visuais | `docs/DESIGN-SYSTEM.md` | Direção de arte, não afirmação institucional |

---

## O que NÃO existe no site

Verificado deliberadamente. Nada disso foi criado:

- ❌ Números de marcas registradas, clientes atendidos ou taxa de aprovação
- ❌ Nomes de clientes ou parceiros
- ❌ Prêmios, selos ou certificações
- ❌ Depoimentos com autoria atribuída (o material não identifica os autores)
- ❌ Prazos ou valores de qualquer processo
- ❌ Promessas de resultado ou garantias
- ❌ Metodologia proprietária nomeada
- ❌ Estatísticas de mercado
- ❌ Fotografia de banco de imagens

---

## Ressalvas jurídicas na interface

Três avisos aparecem para o usuário, em pontos diferentes:

1. **Rodapé, todas as páginas** — "O conteúdo deste site tem finalidade informativa e
   não constitui parecer ou orientação jurídica sobre caso concreto."
2. **Resultado do diagnóstico** — rótulo "Orientação — não é parecer jurídico" no topo
   do painel, e nota ao pé explicando que a orientação é genérica e não analisa o caso.
3. **Artigos em rascunho** — nota editorial no topo informando que o texto trata de
   enquadramento e que pontos técnicos estão marcados como a validar.

---

## Próximos passos sugeridos para a Velmont

1. Revisar os 13 itens 🟡 acima e substituir os blocos `todo` por conteúdo validado.
2. Trocar `status: "rascunho"` para `"publicado"` nos artigos revisados.
3. Enviar a lista oficial de parceiros com as autorizações de uso de marca.
4. Confirmar se as cinco etapas descrevem a prática real ou fornecer a metodologia.
5. Definir o domínio de produção e configurar `NEXT_PUBLIC_SITE_URL`.
6. Avaliar se os depoimentos podem ganhar autoria identificada (com autorização).
