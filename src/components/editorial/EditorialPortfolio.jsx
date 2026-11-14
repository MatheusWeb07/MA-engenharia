import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { WHATSAPP } from "../../data";

gsap.registerPlugin(ScrollTrigger);

const PORTFOLIO_PLATES = [
  {
    id: "infraestrutura-eletrica",
    discipline: "Projetos Elétricos Executivos",
    norma: "ABNT NBR 5410",
    title: "Dimensionamento de circuitos, quadros de força e infraestrutura elétrica",
    description:
      "Desenvolvimento de projetos executivos completos voltados à segurança operacional, equilíbrio de fases e economia de energia em edificações residenciais, comerciais e industriais.",
    specs: [
      ["Escopo Técnico", "Diagramas unifilares, multifilares e plantas de distribuição"],
      ["Proteção", "Coordenação de dispositivos DR, DPS e malha de aterramento"],
      ["Responsabilidade", "Memorial descritivo, lista de materiais e emissão de ART"],
    ],
    image: "/assets/eng-subestacao-industrial.jpg",
    secondaryImage: "/assets/projetos-eletricos.jpg",
    layout: "left-wide",
  },
  {
    id: "laudos-spda-nr10",
    discipline: "Laudos Técnicos e Diagnósticos",
    norma: "NR-10 • ABNT NBR 5419",
    title: "Inspeções em campo, laudos de SPDA e regularização normativa",
    description:
      "Levantamentos criteriosos baseados em medições reais e ensaios técnicos para atestar a segurança das instalações perante o Corpo de Bombeiros, seguradoras e órgãos fiscalizadores.",
    specs: [
      ["Avaliação", "Inspeção instrumental de quadros, continuidade e aterramento"],
      ["Conformidade", "Adequação técnica para NR-10, NBR 5410 e NBR 5419 (SPDA)"],
      ["Finalidade", "Prevenção de falhas críticas e renovação de licenças operacionais"],
    ],
    image: "/assets/eng-inspecao-medicao.jpg",
    secondaryImage: "/assets/laudos-inspecao.jpg",
    layout: "right-wide",
  },
  {
    id: "controle-automacao-ufop",
    discipline: "Controle, Automação e Consultoria",
    norma: "FORMAÇÃO UFOP",
    title: "Modernização de painéis de comando e otimização de processos",
    description:
      "Soluções de engenharia que integram controle inteligente, especificação de acionamentos e consultoria estratégica para elevar a disponibilidade e reduzir custos operacionais.",
    specs: [
      ["Engenharia", "Metodologia de Controle e Automação pela UFOP"],
      ["Aplicação", "Quadros de comando, intertravamentos e adequação de cargas"],
      ["Resultado", "Maior precisão operacional e redução de paradas não programadas"],
    ],
    image: "/assets/eng-painel-automacao.jpg",
    secondaryImage: null,
    layout: "left-medium",
  },
];

export default function EditorialPortfolio() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      // Reveal each architectural plate as user scrolls
      const plates = el.querySelectorAll(".portfolio-plate");
      plates.forEach((plate) => {
        const imgContainer = plate.querySelector(".plate-img-wrap");
        const imgEl = plate.querySelector(".plate-img");
        const textCol = plate.querySelector(".plate-text");

        if (imgContainer) {
          gsap.fromTo(
            imgContainer,
            { clipPath: "inset(14% 0% 0% 0%)" },
            {
              clipPath: "inset(0% 0% 0% 0%)",
              duration: 1.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: plate,
                start: "top 80%",
              },
            }
          );
        }

        if (imgEl) {
          gsap.fromTo(
            imgEl,
            { scale: 1.08, yPercent: -3 },
            {
              scale: 1,
              yPercent: 3,
              ease: "none",
              scrollTrigger: {
                trigger: plate,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            }
          );
        }

        if (textCol) {
          gsap.fromTo(
            textCol,
            { y: 32, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: {
                trigger: plate,
                start: "top 76%",
              },
            }
          );
        }
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projetos"
      ref={sectionRef}
      className="bg-[#0B0C0E] text-white border-b border-white/10"
    >
      <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-12 sm:py-36 lg:px-16">
        {/* Cabeçalho da Seção */}
        <div className="grid grid-cols-1 gap-8 pb-16 border-b border-white/15 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-[1px] w-8 bg-[#0B7A5A]" />
              <span className="font-mono text-[11px] font-medium text-white/60">
                Frentes de Atuação & Portfólio Técnico
              </span>
            </div>
            <h2 className="font-display text-[clamp(2.1rem,4.2vw,3.6rem)] font-bold leading-[1.06] tracking-[-0.035em] text-white">
              Engenharia aplicada com precisão documental e execução rigorosa.
            </h2>
          </div>

          <div className="lg:col-span-5 lg:pl-8">
            <p className="text-[15px] leading-[1.7] text-white/65">
              Apresentamos as frentes técnicas desenvolvidas pela MA | Soluções e
              Engenharia, estruturadas para atender demandas residenciais,
              comerciais, prediais e industriais em Minas Gerais.
            </p>
          </div>
        </div>

        {/* Pranchas Editoriais Assimétricas */}
        <div className="divide-y divide-white/15">
          {PORTFOLIO_PLATES.map((plate, index) => {
            const isReversed = plate.layout === "right-wide";
            return (
              <article
                key={plate.id}
                className="portfolio-plate py-20 sm:py-28 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start"
              >
                {/* Coluna da Imagem Grande */}
                <div
                  className={`${
                    isReversed
                      ? "lg:col-span-7 lg:order-2"
                      : index === 0
                      ? "lg:col-span-7 lg:order-1"
                      : "lg:col-span-6 lg:order-1"
                  }`}
                >
                  <div className="plate-img-wrap group relative overflow-hidden bg-[#121417] reveal-clip">
                    <div className="aspect-[16/10] w-full overflow-hidden">
                      <img
                        src={plate.image}
                        alt={plate.title}
                        width="900"
                        height="560"
                        className="plate-img h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] will-change-transform"
                      />
                    </div>

                    {/* Etiqueta discreta no canto da imagem */}
                    <div className="flex items-center justify-between border-t border-white/10 bg-[#121417] px-5 py-3.5">
                      <span className="font-mono text-[11px] text-white/75">
                        {plate.discipline}
                      </span>
                      <span className="font-mono text-[11px] font-semibold text-[#0B7A5A]">
                        {plate.norma}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Coluna de Especificação Editorial */}
                <div
                  className={`plate-text flex flex-col justify-between ${
                    isReversed
                      ? "lg:col-span-5 lg:order-1"
                      : index === 0
                      ? "lg:col-span-5 lg:order-2"
                      : "lg:col-span-6 lg:order-2"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between border-b border-white/15 pb-4">
                      <span className="font-mono text-xs text-white/50">
                        Prancha técnica 0{index + 1}
                      </span>
                      <span className="font-mono text-xs text-[#0B7A5A]">
                        {plate.norma}
                      </span>
                    </div>

                    <h3 className="mt-6 font-display text-2xl sm:text-3xl font-bold leading-[1.14] tracking-[-0.025em] text-white">
                      {plate.title}
                    </h3>

                    <p className="mt-4 text-[15px] leading-[1.7] text-white/70">
                      {plate.description}
                    </p>

                    {/* Tabela de especificações da frente */}
                    <dl className="mt-8 divide-y divide-white/10 border-t border-b border-white/10">
                      {plate.specs.map(([label, val]) => (
                        <div
                          key={label}
                          className="grid grid-cols-1 gap-1 py-3.5 sm:grid-cols-12 sm:gap-4"
                        >
                          <dt className="sm:col-span-4 font-mono text-[11px] text-white/50">
                            {label}
                          </dt>
                          <dd className="sm:col-span-8 text-[13.5px] text-white/85">
                            {val}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>

                  <div className="mt-8 pt-2">
                    <a
                      href={`${WHATSAPP}?text=${encodeURIComponent(
                        `Olá! Gostaria de solicitar informações técnicas sobre: ${plate.title}.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2.5 border border-white/25 px-6 py-3.5 text-[12px] font-bold tracking-[0.04em] text-white transition-colors duration-300 hover:border-white hover:bg-white hover:text-[#0B0C0E]"
                    >
                      <span>Consultar especificações desta área</span>
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Espaço estruturado para arquivo técnico e acervos futuros */}
        <div className="mt-8 border border-white/15 bg-[#121417] p-8 sm:p-12">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <span className="font-mono text-[11px] text-[#0B7A5A]">
                Documentação & Acervo Técnico
              </span>
              <h3 className="mt-2 font-display text-xl sm:text-2xl font-bold tracking-[-0.02em] text-white">
                Precisa analisar um escopo específico para sua edificação ou indústria?
              </h3>
              <p className="mt-2 max-w-2xl text-[14.5px] leading-[1.65] text-white/65">
                Apresentamos memoriais, referências técnicas e estudos de
                viabilidade diretamente em reunião técnica com nossos engenheiros.
              </p>
            </div>

            <div className="lg:col-span-4 lg:flex lg:justify-end">
              <a
                href={`${WHATSAPP}?text=${encodeURIComponent(
                  "Olá! Gostaria de agendar uma conversa técnica sobre um projeto com a MA Soluções e Engenharia."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-white px-7 py-4 text-[12px] font-bold tracking-[0.04em] text-[#0B0C0E] transition-colors duration-300 hover:bg-[#0B7A5A] hover:text-white"
              >
                <span>Solicitar apresentação técnica</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
