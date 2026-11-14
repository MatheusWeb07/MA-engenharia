import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ArrowUpRight, ShieldCheck, GraduationCap, Building2, Zap, MapPin } from "lucide-react";
import { WHATSAPP, FORMACAO } from "../../data";

const TABS = [
  { id: "projetos", label: "Projetos" },
  { id: "laudos", label: "Laudos" },
  { id: "consultoria", label: "Consultoria" },
];

const EDIFICACAO_OPTIONS = [
  "Residencial de Alto Padrão",
  "Comercial & Corporativo",
  "Industrial & Subestação",
  "Condomínio / Edifício",
];

const ESCOPO_BY_TAB = {
  projetos: [
    "Projeto Elétrico Baixa Tensão (NBR 5410)",
    "Entrada de Energia & Subestação (MT)",
    "Sistema SPDA & Aterramento (NBR 5419)",
    "Projeto Luminotécnico & Eficiência",
  ],
  laudos: [
    "Laudo Técnico das Instalações (NR-10)",
    "Prontuário & Inspeção Elétrica (PIE)",
    "Laudo de SPDA e Aterramento (NBR 5419)",
    "Termografia & Análise de Qualidade",
  ],
  consultoria: [
    "Adequação Normativa ABNT / NR-10",
    "Compatibilização em BIM / CAD",
    "Otimização de Carga & Eficiência Energética",
    "Acompanhamento Técnico e ART",
  ],
};

const CIDADE_OPTIONS = [
  "João Monlevade e Região (MG)",
  "Itabira / Ipatinga / Vale do Aço",
  "Belo Horizonte e Região Metropolitana",
  "Outras Cidades de Minas Gerais",
];

export default function RestoraHero() {
  const sectionRef = useRef(null);
  const shutterRefs = useRef([]);
  const imgRef = useRef(null);
  const [activeTab, setActiveTab] = useState("projetos");
  const [edificacao, setEdificacao] = useState(EDIFICACAO_OPTIONS[0]);
  const [escopo, setEscopo] = useState(ESCOPO_BY_TAB.projetos[0]);
  const [cidade, setCidade] = useState(CIDADE_OPTIONS[0]);

  useEffect(() => {
    setEscopo(ESCOPO_BY_TAB[activeTab][0]);
  }, [activeTab]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-stagger",
        { y: 28, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.85, stagger: 0.08, ease: "power3.out" }
      );

      // Vertical shutter blinds reveal (matches reference video 00:04)
      if (shutterRefs.current.length) {
        gsap.set(shutterRefs.current, { scaleX: 1, transformOrigin: "right center" });
        gsap.to(shutterRefs.current, {
          scaleX: 0,
          duration: 0.78,
          stagger: { amount: 0.4, from: "start" },
          ease: "expo.inOut",
          delay: 0.15,
          onComplete: () => gsap.set(shutterRefs.current, { display: "none" }),
        });
      }

      if (imgRef.current) {
        gsap.fromTo(
          imgRef.current,
          { scale: 1.09 },
          { scale: 1, duration: 1.45, ease: "power3.out", delay: 0.2 }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    const tabLabel = TABS.find((t) => t.id === activeTab)?.label || "Engenharia";
    const message = `Olá, equipe MA Soluções e Engenharia! Gostaria de solicitar um orçamento técnico:\n• Modalidade: ${tabLabel}\n• Edificação: ${edificacao}\n• Escopo: ${escopo}\n• Localidade: ${cidade}`;
    window.open(`${WHATSAPP}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="inicio"
      ref={sectionRef}
      className="relative bg-[#F7F5F2] pt-28 sm:pt-32 lg:pt-36 pb-14 sm:pb-20 px-4 sm:px-6 lg:px-10"
    >
      <div className="mx-auto max-w-[1380px]">
        {/* Top Typographic Split — Follows reference video 00:01–00:07 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-end mb-8 sm:mb-10">
          {/* Left Headline + Inline Pill Button */}
          <div className="lg:col-span-7">
            <div className="hero-stagger inline-flex items-center gap-2 rounded-full border border-[#DFDCD5] bg-white/80 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0B7A5A] mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0B7A5A]" />
              <span>Engenharia Elétrica &amp; Automação • CREA-MG</span>
            </div>

            <h1 className="hero-stagger text-[38px] sm:text-[54px] lg:text-[66px] font-bold uppercase tracking-[-0.035em] leading-[0.98] text-[#121417]">
              PROJETOS INTELIGENTES
              <span className="mt-2 flex flex-wrap items-center gap-3 sm:gap-4">
                <span>RESULTADOS</span>
                <span className="font-serif italic font-normal lowercase tracking-[-0.02em] text-[#0B7A5A] text-[44px] sm:text-[60px] lg:text-[72px] leading-[0.85]">
                  eficientes.
                </span>
                <a
                  href="#solucoes"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#solucoes")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-2 rounded-full border border-[#121417]/20 bg-white/75 backdrop-blur-sm px-4 sm:px-5 py-2 sm:py-2.5 text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.08em] text-[#121417] shadow-sm transition-all duration-300 hover:bg-[#0B0C0E] hover:text-white hover:border-[#0B0C0E] group"
                >
                  <span>Explorar Soluções</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </span>
            </h1>
          </div>

          {/* Right Institutional Seal + 2 Verifiable Credentials */}
          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end justify-between gap-6">
            {/* Institutional Laurel Seal (Authentic UFOP/ABNT/CREA-MG) */}
            <div className="hero-stagger flex items-center gap-3.5 rounded-2xl bg-white/75 border border-[#E5E1DA] px-4 py-3 shadow-[0_6px_20px_rgba(18,20,23,0.04)]">
              <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0B7A5A]/10 text-[#0B7A5A]">
                <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M12 34c-4-4-6-10-4-17 2 3 5 4 7 4M36 34c4-4 6-10 4-17-2 3-5 4-7 4" strokeLinecap="round" />
                  <path d="M16 38c-3-2-5-6-5-10 3 2 5 2 7 1M32 38c3-2 5-6 5-10-3 2-5 2-7 1" strokeLinecap="round" />
                  <circle cx="24" cy="22" r="7" />
                  <path d="M24 18.5v7M20.5 22h7" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#121417]">
                  Qualidade &amp; Segurança Técnica
                </p>
                <p className="text-[12.5px] text-[#5F636B] leading-snug">
                  {FORMACAO} • Responsabilidade Técnica ART
                </p>
              </div>
            </div>

            {/* 2 Verifiable Institutional Metrics */}
            <div className="hero-stagger grid grid-cols-2 gap-6 sm:gap-10 w-full sm:w-auto lg:w-full max-w-[440px] border-t border-[#DFDCD5] pt-4">
              <div>
                <div className="flex items-center gap-2 text-[22px] sm:text-[26px] font-bold tracking-tight text-[#121417]">
                  <ShieldCheck className="w-5 h-5 text-[#0B7A5A]" />
                  <span>100% ABNT</span>
                </div>
                <p className="text-[12px] text-[#666970] mt-0.5">
                  NBR 5410, NBR 5419 e NR-10
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-[22px] sm:text-[26px] font-bold tracking-tight text-[#121417]">
                  <GraduationCap className="w-5 h-5 text-[#0B7A5A]" />
                  <span>UFOP</span>
                </div>
                <p className="text-[12px] text-[#666970] mt-0.5">
                  Controle, Automação &amp; Elétrica
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Showcase Photo with Vertical Shutter Slices Reveal */}
        <div className="relative">
          <div className="relative h-[360px] sm:h-[450px] lg:h-[490px] w-full overflow-hidden rounded-[26px] sm:rounded-[32px] bg-[#121417] shadow-[0_24px_60px_rgba(18,20,23,0.12)]">
            <img
              ref={imgRef}
              src="/assets/hero-electrical-eng.jpg"
              alt="Arquitetura corporativa moderna com projeto de iluminação e engenharia elétrica MA"
              className="h-full w-full object-cover object-center"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B0C0E]/65 via-transparent to-[#0B0C0E]/15" />

            {/* Subtle top-left badge inside frame */}
            <div className="absolute top-5 left-5 sm:top-7 sm:left-7 z-10 inline-flex items-center gap-2 rounded-full bg-[#0B0C0E]/65 backdrop-blur-md border border-white/15 px-3.5 py-1.5 text-[11.5px] font-medium text-white">
              <Zap className="w-3.5 h-3.5 text-[#34D399]" />
              <span>Projetos Elétricos, Laudos NR-10 &amp; SPDA em Minas Gerais</span>
            </div>

            {/* 10 Vertical Shutter Slices matching reference animation */}
            <div className="pointer-events-none absolute inset-0 z-20 grid grid-cols-10">
              {Array.from({ length: 10 }).map((_, idx) => (
                <div
                  key={idx}
                  ref={(el) => {
                    shutterRefs.current[idx] = el;
                  }}
                  className="h-full w-[101%] bg-[#F7F5F2]"
                />
              ))}
            </div>
          </div>

          {/* Floating Glass Tabs + White Interactive Filter / Quote Bar */}
          <div className="relative z-30 mx-auto -mt-16 sm:-mt-20 max-w-[1060px] px-2 sm:px-6">
            {/* Translucent Top Tabs */}
            <div className="inline-flex items-center gap-1 rounded-t-[18px] bg-[#14171A]/75 backdrop-blur-xl px-2.5 pt-2 pb-1.5 border border-white/15 border-b-0 ml-4 sm:ml-6">
              {TABS.map((tab) => {
                const active = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`rounded-full px-4 py-1.5 text-[12.5px] font-medium transition-all duration-200 ${
                      active
                        ? "bg-white text-[#121417] shadow-sm font-semibold"
                        : "text-white/80 hover:text-white"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Crisp White Floating Interactive Card */}
            <form
              onSubmit={handleQuoteSubmit}
              className="grid grid-cols-1 md:grid-cols-12 items-center gap-4 rounded-[22px] bg-white p-4 sm:p-5 lg:p-6 shadow-[0_24px_60px_rgba(18,20,23,0.12)] border border-[#ECE9E2]"
            >
              {/* Field 1: Tipo de Edificação */}
              <div className="md:col-span-3 md:border-r md:border-[#ECE9E2] md:pr-4">
                <label
                  htmlFor="hero-edificacao"
                  className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#787C85] mb-1"
                >
                  <Building2 className="w-3.5 h-3.5 text-[#0B7A5A]" />
                  <span>Tipo de Edificação</span>
                </label>
                <select
                  id="hero-edificacao"
                  value={edificacao}
                  onChange={(e) => setEdificacao(e.target.value)}
                  className="w-full bg-transparent text-[13.5px] font-semibold text-[#121417] focus:outline-none cursor-pointer truncate"
                >
                  {EDIFICACAO_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Field 2: Escopo Técnico */}
              <div className="md:col-span-4 md:border-r md:border-[#ECE9E2] md:pr-4">
                <label
                  htmlFor="hero-escopo"
                  className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#787C85] mb-1"
                >
                  <Zap className="w-3.5 h-3.5 text-[#0B7A5A]" />
                  <span>Escopo Técnico</span>
                </label>
                <select
                  id="hero-escopo"
                  value={escopo}
                  onChange={(e) => setEscopo(e.target.value)}
                  className="w-full bg-transparent text-[13.5px] font-semibold text-[#121417] focus:outline-none cursor-pointer truncate"
                >
                  {ESCOPO_BY_TAB[activeTab].map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Field 3: Cidade / Região */}
              <div className="md:col-span-3 md:pr-2">
                <label
                  htmlFor="hero-cidade"
                  className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#787C85] mb-1"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#0B7A5A]" />
                  <span>Localidade</span>
                </label>
                <select
                  id="hero-cidade"
                  value={cidade}
                  onChange={(e) => setCidade(e.target.value)}
                  className="w-full bg-transparent text-[13.5px] font-semibold text-[#121417] focus:outline-none cursor-pointer truncate"
                >
                  {CIDADE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Submit Button */}
              <div className="md:col-span-2 flex justify-end">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#0B0C0E] px-5 py-3.5 text-[13px] font-semibold text-white transition-all duration-300 hover:bg-[#0B7A5A] shadow-md group"
                >
                  <span>Orçar Agora</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
