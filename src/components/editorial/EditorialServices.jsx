import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { WHATSAPP } from "../../data";

gsap.registerPlugin(ScrollTrigger);

const SERVICES_DATA = [
  {
    id: "projetos-eletricos",
    index: "01",
    title: "Elaboração de Projetos Elétricos",
    norma: "ABNT NBR 5410",
    summary:
      "Dimensionamento sob medida que une segurança operacional, economia de energia e conformidade normativa para instalações residenciais, comerciais, prediais e industriais.",
    deliverables: [
      "Diagramas unifilares, multifilares e plantas executivas detalhadas",
      "Dimensionamento de condutores, quadros de distribuição e dispositivos DR / DPS",
      "Planejamento inteligente de cargas para prevenção de perdas e sobrecargas",
      "Memorial descritivo, quantitativo de materiais e emissão de ART",
    ],
    outcome: "Instalações seguras, otimização de recursos e funcionamento pleno.",
    image: "/assets/projetos-eletricos.jpg",
    ctaText: "Solicitar projeto elétrico",
    waMessage:
      "Olá! Gostaria de solicitar um orçamento para Elaboração de Projeto Elétrico com a MA Soluções e Engenharia.",
  },
  {
    id: "laudos-tecnicos",
    index: "02",
    title: "Elaboração de Laudos Técnicos e SPDA",
    norma: "NR-10 • ABNT NBR 5419",
    summary:
      "Avaliações técnicas embasadas em medições, inspeções in loco e análises criteriosas para regularização perante órgãos fiscalizadores, seguradoras e Corpo de Bombeiros.",
    deliverables: [
      "Laudo técnico das instalações elétricas em conformidade com a NR-10 e NBR 5410",
      "Inspeção e laudo de SPDA (para-raios) e malhas de aterramento segundo a NBR 5419",
      "Diagnóstico preventivo de aquecimento, fuga de corrente e desbalanceamento",
      "Relatório técnico com diretrizes de adequação e emissão de ART",
    ],
    outcome: "Prevenção de falhas, regularização de instalações e tomada de decisão segura.",
    image: "/assets/laudos-inspecao.jpg",
    ctaText: "Solicitar laudo técnico",
    waMessage:
      "Olá! Gostaria de solicitar um orçamento para Elaboração de Laudo Técnico com a MA Soluções e Engenharia.",
  },
  {
    id: "consultoria-tecnica",
    index: "03",
    title: "Consultoria Técnica em Engenharia",
    norma: "VIABILIDADE & ADEQUAÇÃO",
    summary:
      "Atuação estratégica lado a lado com o cliente para otimização de sistemas, aprimoramento de projetos e adequação técnica de instalações elétricas.",
    deliverables: [
      "Estudo aprofundado da instalação para propor melhorias seguras e economicamente viáveis",
      "Análise de conformidade normativa junto às diretrizes da ABNT e NRs",
      "Suporte técnico especializado para reformas, ampliações e modernizações",
      "Orientação direta dos engenheiros responsáveis para redução de custos operacionais",
    ],
    outcome: "Decisões técnicas assertivas que impulsionam a confiabilidade da operação.",
    image: "/assets/eng-subestacao-industrial.jpg",
    ctaText: "Agendar consultoria técnica",
    waMessage:
      "Olá! Gostaria de agendar uma Consultoria Técnica com a MA Soluções e Engenharia.",
  },
  {
    id: "controle-automacao",
    index: "04",
    title: "Engenharia de Controle e Automação",
    norma: "ÊNFASE UFOP",
    summary:
      "Aplicação de metodologias modernas de Engenharia de Controle e Automação para modernizar processos, quadros de comando e sistemas de alta exigência.",
    deliverables: [
      "Desenvolvimento de soluções de controle e automação sob medida para processos",
      "Projeto e especificação técnica de quadros de comando, força e intertravamentos",
      "Integração de recursos tecnológicos para monitoramento e continuidade operacional",
      "Acompanhamento técnico fundamentado na formação pela UFOP",
    ],
    outcome: "Operação mais ágil, precisa e com maior confiabilidade técnica.",
    image: "/assets/eng-painel-automacao.jpg",
    ctaText: "Consultar solução em automação",
    waMessage:
      "Olá! Gostaria de conversar sobre soluções de Controle e Automação com a MA Soluções e Engenharia.",
  },
];

export default function EditorialServices() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const rowsRef = useRef(null);
  const previewImgRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current.querySelectorAll(".srv-head-reveal"),
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 82%",
            },
          }
        );
      }

      if (rowsRef.current) {
        gsap.fromTo(
          rowsRef.current.querySelectorAll(".service-ledger-row"),
          { y: 24, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: rowsRef.current,
              start: "top 80%",
            },
          }
        );
      }
    }, el);

    return () => ctx.revert();
  }, []);

  // Animate image plate transition when active service changes
  useEffect(() => {
    if (!previewImgRef.current) return;
    gsap.fromTo(
      previewImgRef.current,
      { scale: 1.06, opacity: 0.35 },
      { scale: 1, opacity: 1, duration: 0.65, ease: "power3.out" }
    );
  }, [activeIndex]);

  const activeService = SERVICES_DATA[activeIndex];

  return (
    <section
      id="servicos"
      ref={sectionRef}
      className="bg-white text-[#111315] border-b border-[#DFDDD6]"
    >
      <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-12 sm:py-36 lg:px-16">
        {/* Cabeçalho Editorial */}
        <div
          ref={headerRef}
          className="grid grid-cols-1 gap-8 pb-16 border-b border-[#111315] lg:grid-cols-12 lg:items-end"
        >
          <div className="lg:col-span-7">
            <div className="srv-head-reveal flex items-center gap-3 mb-5">
              <span className="h-[1px] w-8 bg-[#0B7A5A]" />
              <span className="font-mono text-[11px] font-medium text-[#55595E]">
                Escopo Técnico de Atuação
              </span>
            </div>
            <h2 className="srv-head-reveal font-display text-[clamp(2.1rem,4.2vw,3.6rem)] font-bold leading-[1.06] tracking-[-0.035em] text-[#111315]">
              Disciplinas de engenharia para operações que não admitem improvisos.
            </h2>
          </div>

          <div className="lg:col-span-5 lg:pl-8 srv-head-reveal">
            <p className="text-[15px] leading-[1.7] text-[#55595E]">
              Cada frente técnica é conduzida diretamente pelos engenheiros
              responsáveis, unindo dimensionamento analítico, medições em campo e
              total aderência às normas regulamentadoras.
            </p>
          </div>
        </div>

        {/* Estrutura Editorial Assimétrica: Lista Horizontal Interativa + Painel Visual */}
        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          {/* Coluna Esquerda (7 cols): Lista Editorial de Serviços */}
          <div ref={rowsRef} className="lg:col-span-7 divide-y divide-[#DFDDD6]">
            {SERVICES_DATA.map((service, idx) => {
              const isOpen = activeIndex === idx;
              return (
                <article
                  key={service.id}
                  onMouseEnter={() => setActiveIndex(idx)}
                  className="service-ledger-row transition-colors duration-300"
                >
                  <button
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    aria-expanded={isOpen}
                    className="w-full py-8 text-left focus:outline-none group"
                  >
                    <div className="flex items-baseline justify-between gap-4">
                      <div className="flex items-baseline gap-5 sm:gap-8">
                        <span
                          className={`font-mono text-xs font-semibold transition-colors duration-300 ${
                            isOpen
                              ? "text-[#0B7A5A]"
                              : "text-[#55595E] group-hover:text-[#111315]"
                          }`}
                        >
                          {service.index}
                        </span>
                        <h3
                          className={`font-display text-xl sm:text-2xl lg:text-[28px] font-bold tracking-[-0.025em] transition-colors duration-300 ${
                            isOpen
                              ? "text-[#111315]"
                              : "text-[#111315]/60 group-hover:text-[#111315]"
                          }`}
                        >
                          {service.title}
                        </h3>
                      </div>

                      <span className="hidden sm:inline-block shrink-0 font-mono text-[11px] text-[#55595E]">
                        {service.norma}
                      </span>
                    </div>
                  </button>

                  {/* Gaveta Editorial de Conteúdo do Serviço Ativo */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-out ${
                      isOpen
                        ? "max-h-[680px] pb-10 opacity-100"
                        : "max-h-0 pb-0 opacity-0"
                    }`}
                  >
                    <div className="pl-9 sm:pl-14 pr-2">
                      <p className="text-[15px] leading-[1.7] text-[#3A3E42] max-w-2xl">
                        {service.summary}
                      </p>

                      {/* Entregáveis técnicos */}
                      <div className="mt-6 border-t border-[#DFDDD6] pt-5">
                        <span className="font-mono text-[11px] font-semibold text-[#111315]">
                          Escopo e entregas técnicas:
                        </span>
                        <ul className="mt-3 space-y-2.5">
                          {service.deliverables.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-3 text-[13.5px] leading-[1.55] text-[#55595E]"
                            >
                              <span className="mt-2 h-[4px] w-[4px] shrink-0 bg-[#0B7A5A]" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Imagem visível no mobile dentro do item ativo */}
                      <div className="mt-6 overflow-hidden bg-[#121417] lg:hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="h-56 w-full object-cover"
                        />
                      </div>

                      {/* Rodapé da Linha com CTA Direto */}
                      <div className="mt-7 flex flex-wrap items-center justify-between gap-4 pt-2">
                        <a
                          href={`${WHATSAPP}?text=${encodeURIComponent(
                            service.waMessage
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/btn inline-flex items-center gap-2.5 bg-[#111315] px-6 py-3 text-[12px] font-bold tracking-[0.04em] text-white transition-colors duration-300 hover:bg-[#0B7A5A]"
                        >
                          <span>{service.ctaText}</span>
                          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                        </a>

                        <span className="font-mono text-[11px] text-[#55595E]">
                          {service.outcome}
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Coluna Direita (5 cols): Prancha Fotográfica Fixa no Desktop */}
          <div className="hidden lg:block lg:col-span-5 lg:sticky lg:top-28">
            <div className="border border-[#DFDDD6] bg-[#F4F3EF]">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#121417]">
                <img
                  ref={previewImgRef}
                  src={activeService.image}
                  alt={activeService.title}
                  width="640"
                  height="480"
                  className="h-full w-full object-cover will-change-transform"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0B0C0E]/85 via-[#0B0C0E]/30 to-transparent p-6">
                  <span className="font-mono text-[11px] font-medium text-white/80">
                    {activeService.norma}
                  </span>
                  <p className="mt-1 font-display text-lg font-bold text-white">
                    {activeService.title}
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex items-center justify-between border-b border-[#DFDDD6] pb-4">
                  <span className="font-mono text-[11px] text-[#55595E]">
                    Resultado Técnico
                  </span>
                  <span className="font-mono text-[11px] font-semibold text-[#0B7A5A]">
                    ART Inclusa
                  </span>
                </div>
                <p className="mt-4 text-[13.5px] leading-[1.65] text-[#3A3E42]">
                  {activeService.outcome}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

