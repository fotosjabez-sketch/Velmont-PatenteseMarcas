import { stakes } from "@/content/transparency";
import { Reveal, TextReveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

/**
 * O QUE ESTÁ EM JOGO
 *
 * Composição em linhas, não em cards: cada item é uma faixa que atravessa a
 * largura do bloco, com o numeral à esquerda. No hover, a faixa clareia e o
 * numeral ganha a cor dourada — a leitura é de índice, não de catálogo.
 */
export function Stakes() {
  return (
    <Section id="em-jogo" index="02" label="O que está em jogo" tone="wine">
      <div className="grid gap-x-[clamp(1.5rem,4vw,5rem)] gap-y-8 md:grid-cols-12">
        <div className="md:col-span-7">
          <TextReveal
            as="h2"
            className="t-display text-[clamp(2rem,5vw,4rem)]"
            lines={[<>Quatro coisas mudam de dono</>, <>quando ninguém está olhando.</>]}
          />
        </div>
        <Reveal delay={140} className="md:col-span-4 md:col-start-9 md:pt-4">
          <p className="t-body text-[0.9375rem] text-cream-200/65">
            Não são riscos abstratos. São as quatro perguntas que aparecem em toda primeira
            conversa — e as quatro respostas que a maioria das empresas descobre que não tem.
          </p>
        </Reveal>
      </div>

      <ul className="mt-[clamp(3rem,6vw,5rem)]">
        {stakes.map((item, i) => (
          <Reveal
            as="li"
            key={item.n}
            delay={i * 90}
            className="group border-t border-cream-200/14 last:border-b"
          >
            <div className="grid items-baseline gap-x-[clamp(1rem,3vw,3rem)] gap-y-3 py-[clamp(1.75rem,3vw,2.75rem)] transition-opacity duration-500 md:grid-cols-12">
              <span className="t-index col-span-1 text-gold-400/60 transition-colors duration-500 group-hover:text-gold-400">
                {item.n}
              </span>
              <h3 className="t-display col-span-full text-[clamp(1.75rem,3.4vw,2.75rem)] leading-none text-cream-100 md:col-span-4 md:col-start-2">
                {item.title}
              </h3>
              <p className="t-body col-span-full text-[0.9375rem] text-cream-200/60 transition-colors duration-500 group-hover:text-cream-200/85 md:col-span-6 md:col-start-7">
                {item.text}
              </p>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
