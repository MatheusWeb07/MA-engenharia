import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { CITACAO, WHATSAPP } from "../../data";

gsap.registerPlugin(ScrollTrigger);

const INSTITUTIONAL_SPECS = [
  {
    term: "Formação Acadêmica",
    detail:
      "Engenheiros Eletricistas com ênfase em Controle e Automação graduados pela Universidade Federal de Ouro Preto (UFOP).",
  },
  {
    term: "Projetos Sob Medida",
    detail:
      "Dimensionamento criterioso que alia economia de energia, segurança operacional e conformidade integral com as normas da ABNT.",
  },
  {
    term: "Diagnósticos Precisos",
    detail:
      "Laudos técnicos embasadas em medições in loco, inspeções rigorosas e transparência técnica em cada avaliação.",
  },
  {
    term: "Atuação Consultiva",
    detail:
      "Acompanhamento estratégico lado a lado com o cliente para otimizar instalações, prevenir falhas e orientar decisões seguras.",
  },
];

export default function EditorialInstitutional() {
  const sectionRef = useRef(null);
  const bridgeQuoteRef = useRef(null);
  const imageWrapRef = useRef(null);
  const imageRef = useRef(null);
  const editorialColRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      // 1. Bridge quote reveal
      if (bridgeQuoteRef.current) {
        gsap.fromTo(
          bridgeQuoteRef.current.querySelectorAll(".reveal-line"),
          { y: 36, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.14,
            ease: "power3.out",
            scrollTrigger: {
              trigger: bridgeQuoteRef.current,
              start: "top 82%",
            },
          }
        );
      }

      // 2. Portrait architectural mask reveal + subtle parallax
      if (imageWrapRef.current && imageRef.current) {
        gsap.fromTo(
          imageWrapRef.current,
          { clipPath: "inset(18% 0% 0% 0%)" },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.25,
            ease: "power3.out",
            scrollTrigger: {
              trigger: imageWrapRef.current,
              start: "top 80%",
            },
          }
        );

        gsap.fromTo(
          imageRef.current,
          { scale: 1.08, yPercent: -4 },
          {
            scale: 1,
            yPercent: 4,
            ease: "none",
            scrollTrigger: {
              trigger: imageWrapRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      }

      // 3. Editorial right column staggered reveal
      if (editorialColRef.current) {
        gsap.fromTo(
          editorialColRef.current.querySelectorAll(".editorial-item"),
          { y: 28, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: editorialColRef.current,
              start: "top 78%",
            },
          }
        );
      }
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section id="quem-somos" ref={sectionRef} className="relative">
      {/* =====================================================================
          PARTE 1: PONTE DE TRANSIÇÃO CONTÍNUA DA HERO (FUNDO NOTURNO #0B0C0E)
          Conecta a iluminação final do edifício à narrativa da empresa
          ===================================================================== */}
      <div className="bg-[#0B0C0E] text-white border-b border-white/10">
        <div
          ref={bridgeQuoteRef}
          className="mx-auto max-w-[1440px] px-6 py-24 sm:px-12 sm:py-32 lg:px-16"
        >
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-4 reveal-line">
              <div className="flex items-center gap-3">
                <span className="h-[1px] w-8 bg-[#0B7A5A]" />
                <span className="font-mono text-[11px] text-white/60">
                  Da concepção ao pleno funcionamento
                </span>
              </div>
              <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-white/60">
                Cada edificação energizada exige precisão de cálculo, proteção
                dimensionada e responsabilidade técnica em todas as etapas.
              </p>
            </div>

            <div className="lg:col-span-8 reveal-line">
              <blockquote className="font-display text-[clamp(1.65rem,3.3vw,2.85rem)] font-semibold leading-[1.18] tracking-[-0.025em] text-white">
                “{CITACAO}”
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================================
          PARTE 2: COMPOSIÇÃO EDITORIAL ASSIMÉTRICA (PEDRA ARQUITETÔNICA #F4F3EF)
          Sem grade de 3 cards. Retrato limpo + Especificação Institucional
          ===================================================================== */}
      <div className="bg-[#F4F3EF] text-[#111315] border-b border-[#DFDDD6]">
        <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-12 sm:py-36 lg:px-16">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20 items-start">
            {/* Coluna Esquerda (5 cols): Fotografia Real dos Fundadores (100% limpa embaixo, sem nomes e sem CREA) */}
            <div className="lg:col-span-5">
              <div
                ref={imageWrapRef}
                className="relative overflow-hidden bg-[#121417] reveal-clip"
              >
                <img
                  ref={imageRef}
                  src="/assets/fundadores.jpeg"
                  alt="Engenheiros Fundadores da MA Soluções e Engenharia"
                  width="640"
                  height="800"
                  className="w-full h-auto object-cover block will-change-transform"
                />
              </div>
            </div>

            {/* Coluna Direita (7 cols): Narrativa Editorial e Especificações */}
            <div
              ref={editorialColRef}
              className="lg:col-span-7 lg:pl-4 flex flex-col justify-between"
            >
              <div>
                <div className="editorial-item flex items-center gap-3 mb-6">
                  <span className="h-[1px] w-8 bg-[#0B7A5A]" />
                  <span className="font-mono text-[11px] font-medium text-[#55595E]">
                    Quem Somos — João Monlevade, MG
                  </span>
                </div>

                <h2 className="editorial-item font-display text-[clamp(2rem,3.8vw,3.35rem)] font-bold leading-[1.08] tracking-[-0.03em] text-[#111315]">
                  Engenharia elétrica e automação fundamentadas na ciência e na
                  prática de campo.
                </h2>

                <div className="editorial-item mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 text-[15px] leading-[1.7] text-[#3A3E42]">
                  <p>
                    A <strong className="font-semibold text-[#111315]">MA | Soluções e Engenharia</strong> nasceu do propósito de tornar a engenharia mais inteligente, segura e eficiente, unindo conhecimento técnico, inovação e compromisso com resultados reais.
                  </p>
                  <p>
                    Formados em Engenharia Elétrica com ênfase em Controle e Automação pela{" "}
                    <strong className="font-semibold text-[#111315]">Universidade Federal de Ouro Preto (UFOP)</strong>, atuamos na elaboração de projetos elétricos, consultorias e laudos técnicos com foco na conformidade normativa e na segurança operacional.
                  </p>
                </div>
              </div>

              {/* Registro Editorial de Pilares (Linhas Arquitetônicas, sem cartões arredondados) */}
              <div className="editorial-item mt-14 border-t border-[#111315]/15">
                {INSTITUTIONAL_SPECS.map((spec) => (
                  <div
                    key={spec.term}
                    className="grid grid-cols-1 gap-2 border-b border-[#111315]/15 py-5 sm:grid-cols-12 sm:gap-6 items-baseline"
                  >
                    <h3 className="sm:col-span-4 font-display text-[15px] font-bold tracking-[-0.01em] text-[#111315]">
                      {spec.term}
                    </h3>
                    <p className="sm:col-span-8 text-[14px] leading-[1.6] text-[#55595E]">
                      {spec.detail}
                    </p>
                  </div>
                ))}
              </div>

              {/* Ação Direta */}
              <div className="editorial-item mt-10 flex flex-wrap items-center justify-between gap-6">
                <a
                  href={`${WHATSAPP}?text=${encodeURIComponent(
                    "Olá! Gostaria de conversar diretamente com os engenheiros da MA Soluções e Engenharia."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 bg-[#111315] px-7 py-4 text-[12.5px] font-bold tracking-[0.04em] text-white transition-colors duration-300 hover:bg-[#0B7A5A]"
                >
                  <span>Falar diretamente com os engenheiros</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <span className="font-mono text-[11px] text-[#55595E]">
                  Parcerias construídas com ética, precisão e responsabilidade
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
