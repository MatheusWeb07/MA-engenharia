import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  ShieldCheck,
  Cpu,
  FileCheck2,
  Compass,
  CheckCircle2,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  ChevronRight,
} from "lucide-react";
import {
  CITACAO,
  COMPROMISSO,
  QUEM_SOMOS,
  CIRCUITO_AREAS,
  FORMACAO,
  WHATSAPP,
  TELEFONE,
  EMAIL,
  EMAIL_ALT,
  ENDERECO,
  INSTAGRAM,
  INSTAGRAM_URL,
} from "../../data";

gsap.registerPlugin(ScrollTrigger);

/* Hook de revelação suave com GSAP */
function useAwwwardsReveal(ref) {
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray("[data-awwwards-reveal]").forEach((el) => {
        const delay = Number(el.dataset.delay || 0);
        gsap.fromTo(
          el,
          { y: 36, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            delay,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          }
        );
      });
    }, root);
    return () => ctx.revert();
  }, [ref]);
}

/* =========================================================================
   1. QUEM SOMOS — AWWWARDS EDITORIAL GALLERY
   ========================================================================= */
export function AwwwardsAbout() {
  const ref = useRef(null);
  const [activeTab, setActiveTab] = useState("historia");
  useAwwwardsReveal(ref);

  return (
    <section
      id="quem-somos"
      ref={ref}
      className="relative overflow-hidden bg-[#FBFBFC] py-28 text-[#111315] sm:py-36"
    >
      {/* Grade de fundo sutil de engenharia */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative mx-auto max-w-[1320px] px-6 sm:px-10 lg:px-14">
        {/* Cabeçalho da Seção */}
        <div data-awwwards-reveal className="max-w-3xl">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-[#0B7A5A]/20 bg-[#0B7A5A]/[0.06] px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#0B7A5A]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0B7A5A] animate-pulse" />
            Engenharia de Alto Padrão • UFOP
          </div>
          <h2 className="mt-5 font-display text-[clamp(2.4rem,4.8vw,4.4rem)] font-bold leading-[1.04] tracking-[-0.04em] text-[#111315]">
            Ciência rigorosa na prancheta.
            <br />
            <span className="text-[#0B7A5A]">Precisão absoluta em campo.</span>
          </h2>
        </div>

        {/* Grade Principal: Informação Estruturada à Esquerda + Foto Recortada à Direita */}
        <div className="mt-14 grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* Lado Esquerdo: Toda a Informação */}
          <div className="flex flex-col justify-center lg:col-span-7">
            {/* Citação Manifesto em Cartão de Vidro Líquido */}
            <div
              data-awwwards-reveal
              data-delay="0.1"
              className="relative rounded-3xl border border-black/[0.06] bg-white p-7 shadow-[0_12px_40px_-15px_rgba(0,0,0,0.06)] sm:p-9"
            >
              <div className="absolute -top-3 left-8 rounded-full bg-[#0B7A5A] px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                Manifesto Técnico
              </div>
              <blockquote className="text-[18px] sm:text-[21px] font-medium leading-[1.4] text-[#1D1D1F]">
                “{CITACAO}”
              </blockquote>
              <div className="mt-4 flex items-center gap-3 border-t border-black/5 pt-4">
                <div className="h-2 w-2 rounded-full bg-[#0B7A5A]" />
                <p className="text-[13px] font-semibold tracking-wide text-[#55595E]">
                  {FORMACAO}
                </p>
              </div>
            </div>

            {/* Alternador de Abas de Conteúdo Estratégico */}
            <div data-awwwards-reveal data-delay="0.2" className="mt-8">
              <div className="flex items-center gap-2 border-b border-black/10 pb-2">
                <button
                  type="button"
                  onClick={() => setActiveTab("historia")}
                  className={`rounded-full px-5 py-2 text-[13px] font-semibold transition-all ${
                    activeTab === "historia"
                      ? "bg-[#111315] text-white shadow-sm"
                      : "text-[#55595E] hover:text-[#111315]"
                  }`}
                >
                  Propósito & Origem
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("metodologia")}
                  className={`rounded-full px-5 py-2 text-[13px] font-semibold transition-all ${
                    activeTab === "metodologia"
                      ? "bg-[#111315] text-white shadow-sm"
                      : "text-[#55595E] hover:text-[#111315]"
                  }`}
                >
                  Metodologia & Rigor
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("formacao")}
                  className={`rounded-full px-5 py-2 text-[13px] font-semibold transition-all ${
                    activeTab === "formacao"
                      ? "bg-[#111315] text-white shadow-sm"
                      : "text-[#55595E] hover:text-[#111315]"
                  }`}
                >
                  Base Acadêmica UFOP
                </button>
              </div>

              {/* Conteúdo dinâmico da aba */}
              <div className="mt-5 min-h-[110px] text-[16px] leading-[1.65] text-[#55595E]">
                {activeTab === "historia" && (
                  <p className="animate-in fade-in duration-300">
                    {QUEM_SOMOS.paragrafos[0]}
                  </p>
                )}
                {activeTab === "metodologia" && (
                  <p className="animate-in fade-in duration-300">
                    {QUEM_SOMOS.paragrafos[2]}
                  </p>
                )}
                {activeTab === "formacao" && (
                  <p className="animate-in fade-in duration-300">
                    {QUEM_SOMOS.paragrafos[1]}
                  </p>
                )}
              </div>
            </div>

            {/* Quádruplo de Parâmetros Técnicos Verificáveis */}
            <div
              data-awwwards-reveal
              data-delay="0.3"
              className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2"
            >
              <div className="flex items-start gap-3.5 rounded-2xl border border-black/[0.05] bg-white p-4 transition-all duration-300 hover:border-[#0B7A5A]/30 hover:shadow-sm">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#0B7A5A]/10 text-[#0B7A5A]">
                  <Cpu className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-[13px] font-bold text-[#111315]">Controle & Automação</h4>
                  <p className="text-[12px] text-[#55595E]">Graduação pela Universidade Federal de Ouro Preto</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 rounded-2xl border border-black/[0.05] bg-white p-4 transition-all duration-300 hover:border-[#0B7A5A]/30 hover:shadow-sm">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#0B7A5A]/10 text-[#0B7A5A]">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-[13px] font-bold text-[#111315]">Conformidade Normativa</h4>
                  <p className="text-[12px] text-[#55595E]">Projetos e laudos com emissão formal de ART</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 rounded-2xl border border-black/[0.05] bg-white p-4 transition-all duration-300 hover:border-[#0B7A5A]/30 hover:shadow-sm">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#0B7A5A]/10 text-[#0B7A5A]">
                  <Compass className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-[13px] font-bold text-[#111315]">Engenharia Sob Medida</h4>
                  <p className="text-[12px] text-[#55595E]">Dimensionamento seguro, sem desperdício de carga</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 rounded-2xl border border-black/[0.05] bg-white p-4 transition-all duration-300 hover:border-[#0B7A5A]/30 hover:shadow-sm">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#0B7A5A]/10 text-[#0B7A5A]">
                  <FileCheck2 className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-[13px] font-bold text-[#111315]">Diagnósticos In Loco</h4>
                  <p className="text-[12px] text-[#55595E]">Inspeções rigorosas para prevenção de falhas</p>
                </div>
              </div>
            </div>

            {/* Ação Direta */}
            <div data-awwwards-reveal data-delay="0.35" className="mt-8 flex items-center gap-4">
              <a
                href={`${WHATSAPP}?text=${encodeURIComponent(
                  "Olá! Gostaria de falar diretamente com os engenheiros da MA Soluções e Engenharia."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-full bg-[#111315] px-7 py-3.5 text-[14px] font-medium text-white transition-all duration-300 hover:bg-[#0B7A5A] hover:scale-[1.02]"
              >
                <span>Falar diretamente com os engenheiros</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* Lado Direito: Imagem de corpo inteiro dos fundadores sem fundo */}
          <div className="relative flex justify-center items-end lg:col-span-5 lg:justify-end">
            <div
              data-awwwards-reveal
              data-delay="0.2"
              className="relative flex w-full max-w-[460px] items-end justify-center lg:max-w-[500px]"
            >
              {/* Pedestal de Luz Arquitetônica Suave */}
              <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 scale-95 transform rounded-full bg-gradient-to-t from-[#0B7A5A]/20 via-[#E8F5F0]/60 to-transparent blur-3xl"
              />

              {/* Cutout dos fundadores em corpo inteiro sem fundo */}
              <img
                src="/assets/fundadores-cutout.png"
                alt="Fundadores da MA Soluções e Engenharia"
                className="h-auto w-full select-none object-contain pointer-events-none drop-shadow-[0_24px_50px_rgba(0,0,0,0.12)] transition-transform duration-700 hover:scale-[1.01]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   2. SERVIÇOS — INTERACTIVE SPOTLIGHT SHOWCASE (DRIBBLE / AWWWARDS)
   ========================================================================= */
const SERVICES_DATA = [
  {
    id: "projetos",
    idx: "01",
    tag: "NBR 5410 • CAD/BIM",
    title: "Elaboração de Projetos Elétricos",
    subtitle:
      "Dimensionamento completo de circuitos, quadros de força e infraestrutura para residências, comércios e indústrias.",
    details: [
      "Diagramas unifilares, multifilares e plantas executivas completas",
      "Coordenação de dispositivos DR, DPS, condutores e aterramento",
      "Planejamento de cargas para máxima economia contínua de energia",
      "Memorial descritivo detalhado e emissão formal de ART",
    ],
    image: "/assets/projetos-eletricos.jpg",
    metric: "100% Personalizado",
    ctaLabel: "Solicitar Projeto Elétrico",
  },
  {
    id: "laudos",
    idx: "02",
    tag: "NR-10 • NBR 5419 (SPDA)",
    title: "Elaboração de Laudos Técnicos & SPDA",
    subtitle:
      "Diagnósticos rigorosos com medições em campo e ensaios técnicos para proteção de vidas e regularização imediata.",
    details: [
      "Avaliação de conformidade das instalações elétricas (NR-10)",
      "Inspeção, ensaio de continuidade e laudo de SPDA (Para-raios)",
      "Identificação instrumental de sobrecargas e fuga de corrente",
      "Regularização perante Corpo de Bombeiros, seguradoras e concessionárias",
    ],
    image: "/assets/laudos-inspecao.jpg",
    metric: "Rigor Diagnóstico",
    ctaLabel: "Solicitar Laudo Técnico",
  },
  {
    id: "consultoria",
    idx: "03",
    tag: "Eficiência & Viabilidade",
    title: "Consultoria Técnica em Engenharia",
    subtitle:
      "Orientação estratégica lado a lado com o cliente para tomada de decisões seguras, expansões e redução de custos operacionais.",
    details: [
      "Otimização e modernização de instalações elétricas existentes",
      "Estudos de viabilidade técnica e eficiência energética",
      "Adequação técnica normativa preventiva para eliminação de multas",
      "Suporte consultivo contínuo para reformas e novas instalações",
    ],
    image: "/assets/eng-inspecao-medicao.jpg",
    metric: "Engenharia Consultiva",
    ctaLabel: "Agendar Consultoria",
  },
  {
    id: "automacao",
    idx: "04",
    tag: "Metodologia UFOP",
    title: "Engenharia de Controle e Automação",
    subtitle:
      "Soluções inteligentes de automação que elevam a disponibilidade operacional, eliminam falhas e modernizam sistemas.",
    details: [
      "Modernização e especificação de painéis de comando e força",
      "Sistemas de intertravamento e proteção lógica de processos",
      "Integração de equipamentos industriais e automação predial",
      "Metodologia avançada pela Universidade Federal de Ouro Preto",
    ],
    image: "/assets/eng-painel-automacao.jpg",
    metric: "Automação Inteligente",
    ctaLabel: "Consultar Solução de Automação",
  },
];

export function AwwwardsServices() {
  const ref = useRef(null);
  const [selectedIdx, setSelectedIdx] = useState(0);
  useAwwwardsReveal(ref);

  const current = SERVICES_DATA[selectedIdx];

  return (
    <section
      id="servicos"
      ref={ref}
      className="relative overflow-hidden bg-[#0A0B0E] py-28 text-white sm:py-36"
    >
      {/* Brilhos atmosféricos de fundo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-1/4 h-[500px] w-[500px] rounded-full bg-[#0B7A5A]/15 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 left-10 h-[500px] w-[500px] rounded-full bg-[#10B981]/10 blur-[140px]"
      />

      <div className="relative mx-auto max-w-[1320px] px-6 sm:px-10 lg:px-14">
        {/* Cabeçalho */}
        <div data-awwwards-reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#5FE0B4]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#5FE0B4]" />
              Frentes de Atuação
            </div>
            <h2 className="mt-4 font-display text-[clamp(2.4rem,4.8vw,4.4rem)] font-bold leading-[1.04] tracking-[-0.04em] text-white">
              Disciplinas de engenharia
              <br />
              <span className="text-white/60">sem margem para improviso.</span>
            </h2>
          </div>
          <p className="max-w-md text-[15px] leading-[1.6] text-white/65">
            Cada serviço é planejado, calculado e chancelado diretamente pelos engenheiros responsáveis com emissão formal de ART.
          </p>
        </div>

        {/* Layout Interativo Estilo Awwwards: Lista de Serviços + Painel Fotográfico Vivo */}
        <div className="mt-16 grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-10">
          
          {/* Coluna 1 (7 cols): Lista Interativa dos 4 Serviços */}
          <div className="flex flex-col gap-3.5 lg:col-span-7">
            {SERVICES_DATA.map((srv, idx) => {
              const isSelected = selectedIdx === idx;
              return (
                <div
                  key={srv.id}
                  data-awwwards-reveal
                  data-delay={idx * 0.08}
                  onClick={() => setSelectedIdx(idx)}
                  className={`group relative cursor-pointer rounded-3xl p-6 sm:p-8 transition-all duration-500 border ${
                    isSelected
                      ? "border-[#0B7A5A] bg-white/[0.07] shadow-[0_20px_40px_-15px_rgba(11,122,90,0.3)] backdrop-blur-xl"
                      : "border-white/[0.08] bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span
                        className={`font-mono text-[13px] font-bold tracking-wider ${
                          isSelected ? "text-[#5FE0B4]" : "text-white/40"
                        }`}
                      >
                        {srv.idx}
                      </span>
                      <span className="rounded-full bg-white/10 px-3 py-0.5 text-[11px] font-medium text-white/70">
                        {srv.tag}
                      </span>
                    </div>

                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-full transition-transform duration-300 ${
                        isSelected
                          ? "bg-[#0B7A5A] text-white rotate-45"
                          : "border border-white/20 text-white/40 group-hover:border-white/40 group-hover:text-white"
                      }`}
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>

                  <h3 className="mt-3 font-display text-[22px] sm:text-[25px] font-bold tracking-[-0.02em] text-white">
                    {srv.title}
                  </h3>

                  <p className="mt-2 text-[14.5px] leading-[1.55] text-white/70">
                    {srv.subtitle}
                  </p>

                  {/* Detalhes expandidos quando ativo */}
                  {isSelected && (
                    <div className="mt-5 border-t border-white/10 pt-4 animate-in fade-in slide-in-from-top-2 duration-300">
                      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                        {srv.details.map((item) => (
                          <div key={item} className="flex items-start gap-2 text-[13px] text-white/80">
                            <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#5FE0B4]" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-5 flex items-center gap-4">
                        <a
                          href={`${WHATSAPP}?text=${encodeURIComponent(
                            `Olá! Gostaria de um orçamento para ${srv.title} com a MA Soluções e Engenharia.`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full bg-[#0B7A5A] px-5 py-2.5 text-[13px] font-semibold text-white transition-transform hover:scale-[1.02]"
                        >
                          <span>{srv.ctaLabel}</span>
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Coluna 2 (5 cols): Painel Visual Vivo e Ficha Técnica */}
          <div className="relative flex flex-col lg:col-span-5">
            <div
              data-awwwards-reveal
              data-delay="0.2"
              className="sticky top-28 flex flex-col overflow-hidden rounded-3xl border border-white/15 bg-white/[0.04] p-5 shadow-2xl backdrop-blur-2xl"
            >
              {/* Imagem do Serviço com Transição Suave */}
              <div className="relative aspect-[16/11] w-full overflow-hidden rounded-2xl bg-black">
                <img
                  key={current.image}
                  src={current.image}
                  alt={current.title}
                  className="h-full w-full object-cover transition-all duration-700 hover:scale-105 animate-in fade-in zoom-in-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                {/* Badge Flutuante */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="rounded-full bg-black/70 px-3.5 py-1 text-[11px] font-semibold text-[#5FE0B4] backdrop-blur-md">
                    {current.metric}
                  </span>
                  <span className="font-mono text-[11px] text-white/70">
                    MA | ENGENHARIA
                  </span>
                </div>
              </div>

              {/* Informações Complementares da Prancha Técnica */}
              <div className="mt-5 flex flex-col gap-3 px-1">
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span className="text-[12px] uppercase tracking-wider text-white/50">Responsabilidade Técnica</span>
                  <span className="text-[13px] font-semibold text-white">Engenheiro Eletricista • ART</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span className="text-[12px] uppercase tracking-wider text-white/50">Atendimento</span>
                  <span className="text-[13px] font-semibold text-white">Minas Gerais & Regional</span>
                </div>
                <div className="flex items-center justify-between pb-1">
                  <span className="text-[12px] uppercase tracking-wider text-white/50">Prazo de Resposta</span>
                  <span className="text-[13px] font-semibold text-[#5FE0B4]">Orçamento Técnico em até 24h</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   3. COMPROMISSO & MÉTRICAS — TECH VAULT STATS
   ========================================================================= */
export function AwwwardsCommitment() {
  const ref = useRef(null);
  const numRef = useRef(null);
  useAwwwardsReveal(ref);

  useEffect(() => {
    if (!numRef.current) return;
    const o = { v: 0 };
    const t = gsap.to(o, {
      v: 100,
      duration: 1.8,
      ease: "power2.out",
      scrollTrigger: { trigger: numRef.current, start: "top 85%", once: true },
      onUpdate: () => {
        if (numRef.current) numRef.current.textContent = `${Math.round(o.v)}%`;
      },
    });
    return () => {
      t.scrollTrigger?.kill();
      t.kill();
    };
  }, []);

  return (
    <section
      id="compromisso"
      ref={ref}
      className="relative overflow-hidden bg-black py-28 text-white sm:py-36"
    >
      <div className="mx-auto max-w-[1320px] px-6 sm:px-10 lg:px-14">
        
        {/* Bloco 1: O 100% Monumental */}
        <div className="flex flex-col items-center text-center">
          <div data-awwwards-reveal className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#5FE0B4]">
            <Sparkles className="h-3.5 w-3.5" />
            Compromisso Normativo Inegociável
          </div>

          <div data-awwwards-reveal data-delay="0.1" className="mt-6 flex flex-col items-center">
            <span
              ref={numRef}
              className="font-display text-[clamp(6rem,20vw,17rem)] font-extrabold leading-none tracking-[-0.06em] text-white select-none"
            >
              100%
            </span>
            <p className="mt-4 max-w-xl text-[clamp(1.3rem,2.4vw,1.9rem)] font-semibold leading-[1.25] tracking-[-0.02em] text-white/90">
              Aderência rigorosa às normas da ABNT, com emissão de ART em cada projeto e diagnóstico.
            </p>
          </div>
        </div>

        {/* Bloco 2: Missão, Visão e os 4 Pilares Institucionais */}
        <div className="mt-24 grid grid-cols-1 gap-6 lg:grid-cols-12">
          
          {/* Missão e Visão em Vidro Fosco */}
          <div
            data-awwwards-reveal
            data-delay="0.15"
            className="flex flex-col justify-between rounded-3xl border border-white/15 bg-white/[0.03] p-8 backdrop-blur-xl lg:col-span-6 sm:p-10"
          >
            <div>
              <span className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#5FE0B4]">
                Nossa Missão
              </span>
              <h3 className="mt-3 font-display text-[22px] font-bold text-white">
                Engenharia inteligente, segura e eficiente.
              </h3>
              <p className="mt-4 text-[15.5px] leading-[1.6] text-white/75">
                {COMPROMISSO.missao}
              </p>
            </div>
            <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-4">
              <span className="h-2 w-2 rounded-full bg-[#5FE0B4]" />
              <span className="text-[12px] text-white/60">Foco em Resultados Reais e Tranquilidade</span>
            </div>
          </div>

          <div
            data-awwwards-reveal
            data-delay="0.2"
            className="flex flex-col justify-between rounded-3xl border border-white/15 bg-white/[0.03] p-8 backdrop-blur-xl lg:col-span-6 sm:p-10"
          >
            <div>
              <span className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#5FE0B4]">
                Nossa Visão
              </span>
              <h3 className="mt-3 font-display text-[22px] font-bold text-white">
                Referência em engenharia e automação.
              </h3>
              <p className="mt-4 text-[15.5px] leading-[1.6] text-white/75">
                {COMPROMISSO.visao}
              </p>
            </div>
            <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-4">
              <span className="h-2 w-2 rounded-full bg-[#5FE0B4]" />
              <span className="text-[12px] text-white/60">Ética Profissional e Transformação Tecnológica</span>
            </div>
          </div>
        </div>

        {/* Bloco 3: 4 Pilares Inegociáveis */}
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {COMPROMISSO.valores.map(([titulo, desc], i) => (
            <div
              key={titulo}
              data-awwwards-reveal
              data-delay={0.1 + i * 0.06}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-white/20 hover:bg-white/[0.05]"
            >
              <div className="font-mono text-[11px] font-bold text-[#5FE0B4]">
                0{i + 1}
              </div>
              <h4 className="mt-2 text-[17px] font-bold text-white">{titulo}</h4>
              <p className="mt-2 text-[13.5px] leading-[1.5] text-white/65">{desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

/* =========================================================================
   4. CONTATO & MONUMENTAL FOOTER (AWWWARDS FINALE)
   ========================================================================= */
export function AwwwardsContact() {
  const ref = useRef(null);
  useAwwwardsReveal(ref);

  const msg = encodeURIComponent(
    "Olá! Gostaria de conversar sobre um projeto com a MA Soluções e Engenharia."
  );

  return (
    <footer
      id="contato"
      ref={ref}
      className="relative overflow-hidden bg-[#F8F9FA] pt-28 text-[#111315] sm:pt-36"
    >
      <div className="relative mx-auto max-w-[1320px] px-6 sm:px-10 lg:px-14">
        
        {/* Caixa de Contato de Alto Padrão */}
        <div
          data-awwwards-reveal
          className="relative overflow-hidden rounded-[36px] border border-black/10 bg-white p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.06)] sm:p-14 lg:p-16"
        >
          {/* Efeito decorativo sutil */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#0B7A5A]/10 blur-3xl"
          />

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-center">
            
            {/* Lado Esquerdo: Chamada */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#0B7A5A]/20 bg-[#0B7A5A]/10 px-3.5 py-1 text-[12px] font-semibold text-[#0B7A5A]">
                Atendimento Técnico Direto
              </div>

              <h2 className="mt-5 font-display text-[clamp(2.4rem,4.8vw,4.2rem)] font-bold leading-[1.04] tracking-[-0.04em] text-[#111315]">
                Inicie seu projeto ou laudo diretamente com os engenheiros.
              </h2>

              <p className="mt-4 max-w-lg text-[16.5px] leading-[1.6] text-[#55595E]">
                Atendimento consultivo ágil em João Monlevade e em toda a região de Minas Gerais para projetos residenciais, comerciais e industriais.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={`${WHATSAPP}?text=${msg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-[#0B7A5A] px-8 py-4 text-[15px] font-bold text-white shadow-lg transition-all duration-300 hover:bg-[#096348] hover:scale-[1.02]"
                >
                  <Phone className="h-4 w-4" />
                  <span>Conversar pelo WhatsApp</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-black/5 px-6 py-4 text-[15px] font-semibold text-[#111315] transition-colors hover:bg-black/10"
                >
                  <Mail className="h-4 w-4" />
                  <span>Enviar e-mail</span>
                </a>
              </div>
            </div>

            {/* Lado Direito: Canais de Atendimento */}
            <div className="flex flex-col gap-5 lg:col-span-5 lg:border-l lg:border-black/10 lg:pl-12">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-black/5 text-[#0B7A5A]">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[12px] font-semibold uppercase tracking-wider text-[#55595E]">Telefone & WhatsApp</p>
                  <p className="mt-0.5 text-[17px] font-bold text-[#111315]">{TELEFONE}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-black/5 text-[#0B7A5A]">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[12px] font-semibold uppercase tracking-wider text-[#55595E]">Correio Eletrônico</p>
                  <p className="mt-0.5 text-[15px] font-medium text-[#111315]">{EMAIL}</p>
                  <p className="text-[13px] text-[#55595E]">{EMAIL_ALT}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-black/5 text-[#0B7A5A]">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[12px] font-semibold uppercase tracking-wider text-[#55595E]">Sede Operacional</p>
                  <p className="mt-0.5 text-[14.5px] font-medium leading-snug text-[#111315]">{ENDERECO}</p>
                </div>
              </div>

              <div className="border-t border-black/10 pt-4">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[13.5px] font-semibold text-[#0B7A5A] hover:underline"
                >
                  <span>Siga a MA no Instagram: {INSTAGRAM}</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Assinatura Monumental Awwwards */}
      <div className="overflow-hidden px-2 pt-20 sm:pt-28">
        <p
          aria-label="MA ENGENHARIA"
          className="select-none whitespace-nowrap bg-gradient-to-b from-[#111315] via-[#111315]/80 to-[#0B7A5A] bg-clip-text text-center font-display text-[12.6vw] font-black leading-[0.82] tracking-[-0.065em] text-transparent"
        >
          MA ENGENHARIA
        </p>
        <p className="pb-8 pt-6 text-center text-[12px] font-medium text-[#86868B]">
          MA | Soluções e Engenharia · CNPJ Regular · João Monlevade, Minas Gerais
        </p>
      </div>
    </footer>
  );
}

/* Aliases para compatibilidade total */
export const AppleAbout = AwwwardsAbout;
export const AppleServices = AwwwardsServices;
export const AppleCommitment = AwwwardsCommitment;
export const AppleContact = AwwwardsContact;

