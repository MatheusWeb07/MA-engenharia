import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { QUEM_SOMOS, WHATSAPP } from "../../data";

gsap.registerPlugin(ScrollTrigger);

const PROCESS_STEPS = [
  {
    number: "1",
    shortTitle: "Diagnóstico",
    fullTitle: "Diagnóstico & Levantamento Técnico",
    desc: "Analisamos a planta arquitetônica, demandas de carga, condições da entrada de energia e objetivos da edificação para definir as premissas do sistema.",
    norma: "Vistoria & Análise de Demanda",
    image: "/assets/eng-inspecao-medicao.jpg",
    alt: "Engenheiro realizando levantamento elétrico em campo",
    cta: "Agendar Diagnóstico",
  },
  {
    number: "2",
    shortTitle: "Dimensionamento",
    fullTitle: "Cálculos & Dimensionamento Preciso",
    desc: "Executamos cálculos de demanda, queda de tensão, curto-circuito, seletividade de proteções e sistemas de aterramento e SPDA em CAD e BIM.",
    norma: "ABNT NBR 5410 & NBR 5419",
    image: "/assets/projetos-eletricos.jpg",
    alt: "Plantas técnicas e modelagem BIM de projetos elétricos",
    cta: "Consultar Escopo",
  },
  {
    number: "3",
    shortTitle: "Memorial & ART",
    fullTitle: "Memorial Descritivo & Emissão de ART",
    desc: "Documentação executiva completa com lista quantitativa de materiais, diagramas unifilares e Anotação de Responsabilidade Técnica (ART) registrada.",
    norma: "CREA-MG Nº 142366847-2",
    image: "/assets/eng-projeto-arquitetura.jpg",
    alt: "Detalhamento de memorial técnico e desenhos executivos",
    cta: "Validar Documentação",
  },
  {
    number: "4",
    shortTitle: "Entrega & Suporte",
    fullTitle: "Entrega Executiva & Acompanhamento",
    desc: "Realizamos a entrega organizada em pranchas digitais, orientamos a equipe de execução em obra e garantimos segurança até a energização final.",
    norma: "NR-10 & Conformidade Total",
    image: "/assets/laudos-inspecao.jpg",
    alt: "Acompanhamento de obra e inspeção técnica de engenharia",
    cta: "Falar com Engenheiro",
  },
];

export default function RestoraAboutProcess() {
  const [activeStep, setActiveStep] = useState(0);
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-reveal",
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "#quem-somos",
            start: "top 78%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".process-reveal",
        { y: 26, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "#processo",
            start: "top 78%",
            once: true,
          },
        }
      );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  const current = PROCESS_STEPS[activeStep];
  const whatsappUrl = `${WHATSAPP}?text=${encodeURIComponent(
    `Olá! Gostaria de iniciar pela etapa "${current.fullTitle}" com a MA Soluções e Engenharia.`
  )}`;

  return (
    <div ref={rootRef} className="bg-[#F7F5F2]">
      {/* SECTION 2: QUEM SOMOS (Follows reference video 00:08–00:09) */}
      <section id="quem-somos" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-10 border-t border-[#E6E2DA]">
        <div className="mx-auto max-w-[1380px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Label */}
            <div className="lg:col-span-3 about-reveal">
              <div className="inline-flex items-center gap-2 text-[11.5px] font-semibold uppercase tracking-[0.14em] text-[#5F636B]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#0B7A5A]" />
                <span>{QUEM_SOMOS.etiqueta}</span>
              </div>
              <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.12em] text-[#8E929B]">
                João Monlevade • Minas Gerais
              </p>
            </div>

            {/* Right Mixed-Font Editorial Statement + Subgrid */}
            <div className="lg:col-span-9 space-y-12">
              <h2 className="about-reveal text-[30px] sm:text-[42px] lg:text-[50px] font-normal tracking-[-0.028em] leading-[1.14] text-[#121417]">
                Acreditamos que cada instalação deve unir{" "}
                <span className="font-serif italic text-[#0B7A5A] text-[36px] sm:text-[48px] lg:text-[58px]">
                  precisão técnica,
                </span>{" "}
                economia energética e total conformidade{" "}
                <span className="font-serif italic text-[#121417] text-[36px] sm:text-[48px] lg:text-[58px]">
                  normativa.
                </span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-center">
                {/* Text Copy */}
                <div className="md:col-span-6 space-y-5 about-reveal">
                  {QUEM_SOMOS.paragrafos.map((p, idx) => (
                    <p
                      key={idx}
                      className="text-[15px] sm:text-[16px] leading-[1.7] text-[#4C5057]"
                    >
                      {p}
                    </p>
                  ))}

                  <div className="pt-2 flex flex-wrap gap-2.5">
                    <span className="rounded-full bg-white border border-[#DFDCD5] px-4 py-2 text-[12px] font-semibold text-[#121417]">
                      Formação UFOP
                    </span>
                    <span className="rounded-full bg-white border border-[#DFDCD5] px-4 py-2 text-[12px] font-semibold text-[#0B7A5A]">
                      Foco em ABNT &amp; NR-10
                    </span>
                  </div>
                </div>

                {/* Founders Clean Visual Frame (No names or CREA underneath per user preference) */}
                <div className="md:col-span-6 about-reveal">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[26px] bg-white shadow-[0_18px_50px_rgba(18,20,23,0.08)] border border-[#E5E1DA]">
                    <img
                      src="/assets/fundadores.jpeg"
                      alt="Equipe técnica fundadora da MA Soluções e Engenharia"
                      className="h-full w-full object-cover object-[center_18%]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: 4-STEP PROCESS (Follows reference video 00:10–00:11) */}
      <section id="processo" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-10 bg-white rounded-t-[36px] sm:rounded-t-[48px] border-t border-[#ECE9E2]">
        <div className="mx-auto max-w-[1380px]">
          {/* Centered Headline */}
          <div className="text-center max-w-[780px] mx-auto mb-12 sm:mb-16 process-reveal">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#F7F5F2] border border-[#E5E1DA] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0B7A5A] mb-4">
              Metodologia MA
            </span>
            <h2 className="text-[32px] sm:text-[44px] lg:text-[52px] font-bold uppercase tracking-[-0.03em] leading-[1.06] text-[#121417]">
              DA ANÁLISE À ENTREGA{" "}
              <span className="font-serif italic font-normal lowercase text-[#0B7A5A] text-[38px] sm:text-[52px] lg:text-[60px]">
                sem complicação.
              </span>
            </h2>
          </div>

          {/* 4-Step Horizontal Stepper */}
          <div className="relative mb-10 sm:mb-12 process-reveal">
            <div className="hidden md:block absolute top-5 left-[12%] right-[12%] h-[1px] bg-[#E5E1DA]" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 relative z-10">
              {PROCESS_STEPS.map((step, idx) => {
                const isActive = idx === activeStep;
                return (
                  <button
                    key={step.number}
                    type="button"
                    onClick={() => setActiveStep(idx)}
                    className="flex flex-col items-center text-center group focus:outline-none"
                  >
                    <span
                      className={`flex h-10 w-10 items-center justify-center rounded-full text-[13px] font-bold transition-all duration-300 ${
                        isActive
                          ? "bg-[#0B0C0E] text-white scale-110 shadow-lg ring-4 ring-[#0B7A5A]/15"
                          : "bg-[#F7F5F2] text-[#666970] border border-[#DFDCD5] group-hover:border-[#0B7A5A] group-hover:text-[#0B7A5A]"
                      }`}
                    >
                      {step.number}
                    </span>
                    <span
                      className={`mt-3 text-[13.5px] sm:text-[15px] font-semibold tracking-tight transition-colors ${
                        isActive ? "text-[#121417]" : "text-[#787C85] group-hover:text-[#121417]"
                      }`}
                    >
                      {step.shortTitle}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Wide Visual Banner + Floating Right White CTA Card */}
          <div className="relative rounded-[28px] sm:rounded-[34px] overflow-hidden bg-[#121417] min-h-[420px] sm:min-h-[480px] flex items-end lg:items-center p-5 sm:p-8 lg:p-10 process-reveal shadow-[0_24px_60px_rgba(18,20,23,0.1)]">
            <img
              key={current.image}
              src={current.image}
              alt={current.alt}
              className="absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B0C0E]/75 via-[#0B0C0E]/35 to-[#0B0C0E]/20" />

            {/* Left visual step tag */}
            <div className="hidden lg:flex relative z-10 flex-col justify-end h-full max-w-[420px] text-white pr-6">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#34D399] mb-2">
                Etapa 0{current.number} / 04
              </span>
              <p className="text-[28px] font-semibold tracking-tight leading-snug">
                {current.shortTitle} com rigor normativo e documentação rastreável.
              </p>
            </div>

            {/* Right Floating White Card (Follows video 00:10-00:11) */}
            <div className="relative z-10 ml-auto w-full max-w-[440px] rounded-[24px] bg-white p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.22)]">
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E6F4F0] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#0B7A5A]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{current.norma}</span>
                </span>
                <span className="font-mono text-[12px] font-semibold text-[#8E929B]">
                  0{current.number} / 04
                </span>
              </div>

              <h3 className="text-[22px] sm:text-[26px] font-bold tracking-tight leading-tight text-[#121417] mb-3">
                {current.fullTitle}
              </h3>

              <p className="text-[14px] sm:text-[15px] leading-relaxed text-[#5F636B] mb-6">
                {current.desc}
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[#0B0C0E] px-6 py-3.5 text-[13px] font-semibold text-white transition-all duration-300 hover:bg-[#0B7A5A] group"
              >
                <span>{current.cta}</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
