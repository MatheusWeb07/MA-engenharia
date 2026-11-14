import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Zap,
  ShieldCheck,
  Compass,
  Cpu,
  FileCheck2,
  Layers,
  X,
} from "lucide-react";
import { WHATSAPP } from "../../data";

gsap.registerPlugin(ScrollTrigger);

const CATEGORIES = [
  "Todos",
  "Projetos Elétricos",
  "Laudos Técnicos",
  "SPDA & Aterramento",
  "Consultoria",
  "Automação UFOP",
];

const SOLUTIONS = [
  {
    id: "proj-baixa-tensao",
    category: "Projetos Elétricos",
    norma: "ABNT NBR 5410",
    title: "Projeto Elétrico Residencial e Comercial",
    subtitle: "Dimensionamento executivo completo, divisão equilibrada de circuitos, diagramas unifilares e memorial descritivo.",
    image: "/assets/projetos-eletricos.jpg",
    alt: "Projeto elétrico executivo e plantas em CAD e BIM",
    specs: ["CAD / BIM", "ART Inclusa", "Memorial Técnico"],
    highlights: [
      "Cálculo de demanda e balanceamento preciso de fases",
      "Dimensionamento de condutores, eletrodutos e disjuntores",
      "Lista quantitativa de materiais para orçamento sem desperdícios",
    ],
  },
  {
    id: "laudo-nr10",
    category: "Laudos Técnicos",
    norma: "NR-10 • Segurança",
    title: "Laudo Técnico e Prontuário Elétrico (PIE)",
    subtitle: "Inspeção minuciosa em campo, diagnóstico de riscos e emissão de laudo pericial com responsabilidade técnica registrada.",
    image: "/assets/eng-inspecao-medicao.jpg",
    alt: "Engenheiro realizando inspeção técnica e medições elétricas",
    specs: ["Inspeção In Loco", "Laudo + ART", "Norma NR-10"],
    highlights: [
      "Identificação de sobrecargas, falhas de isolação e pontos críticos",
      "Relatório fotográfico completo com plano de adequação técnica",
      "Documentação válida para auditorias, seguradoras e fiscalizações",
    ],
  },
  {
    id: "spda-nbr5419",
    category: "SPDA & Aterramento",
    norma: "ABNT NBR 5419",
    title: "SPDA, Para-Raios e Sistema de Aterramento",
    subtitle: "Proteção patrimonial e de vidas contra descargas atmosféricas e surtos elétricos com rigor normativo atualizado.",
    image: "/assets/sol-spda-arquitetura.jpg",
    alt: "Edificação moderna protegida por projeto de SPDA e aterramento",
    specs: ["Gerenciamento de Risco", "NBR 5419", "Laudo & Projeto"],
    highlights: [
      "Análise de gerenciamento de risco conforme partes 1 a 4 da NBR 5419",
      "Projeto de captação, descidas, equipotencialização e DPS",
      "Inspeção periódica e certificação de continuidade elétrica",
    ],
  },
  {
    id: "subestacao-entrada",
    category: "Projetos Elétricos",
    norma: "Média & Baixa Tensão",
    title: "Entradas de Energia e Subestações",
    subtitle: "Dimensionamento e aprovação junto à concessionária para padrões de entrada coletivos, comerciais e industriais.",
    image: "/assets/sol-subestacao.jpg",
    alt: "Subestação elétrica e isoladores de média e alta tensão",
    specs: ["Padrão Concessionária", "Proteção MT/BT", "Aprovação Técnica"],
    highlights: [
      "Diagramas trifilares e estudos básicos de coordenação e seletividade",
      "Dimensionamento de barramentos, proteção e medição",
      "Suporte técnico no processo de vistoria e ligação definitiva",
    ],
  },
  {
    id: "consultoria-quadros",
    category: "Consultoria",
    norma: "Seletividade & Carga",
    title: "Consultoria e Adequação de Painéis",
    subtitle: "Análise de eficiência energética, redução de perdas e suporte especializado para equipes de obra e manutenção.",
    image: "/assets/eng-painel-automacao.jpg",
    alt: "Análise técnica em painel de distribuição e proteção elétrica",
    specs: ["Eficiência", "Conformidade", "Acompanhamento"],
    highlights: [
      "Revisão técnica de projetos existentes e compatibilização em obra",
      "Redimensionamento para ampliação de carga e novos equipamentos",
      "Orientação executiva direta para eletricistas e construtoras",
    ],
  },
  {
    id: "automacao-ufop",
    category: "Automação UFOP",
    norma: "UFOP • Automação",
    title: "Controle, Automação e Eficiência",
    subtitle: "Soluções inteligentes baseadas em engenharia de controle e automação para monitorar e otimizar sistemas prediais.",
    image: "/assets/eng-projeto-arquitetura.jpg",
    alt: "Planejamento técnico de automação e controle de sistemas",
    specs: ["Base UFOP", "Controle Predial", "Eficiência Real"],
    highlights: [
      "Setorização inteligente de iluminação, climatização e cargas críticas",
      "Integração de medições e acionamentos automatizados com segurança",
      "Foco em desempenho operacional, durabilidade e economia real",
    ],
  },
];

const SERVICES_CORE = [
  {
    icon: Zap,
    title: "Projetos Elétricos Completos",
    desc: "Elaboração em CAD e BIM com detalhamento claro para execução fiel em obra, lista de materiais e memorial de cálculo.",
  },
  {
    icon: FileCheck2,
    title: "Laudos Técnicos & NR-10",
    desc: "Inspeções presenciais, pareceres de conformidade, prontuários e emissão de ART junto ao CREA-MG.",
  },
  {
    icon: Compass,
    title: "Consultoria & Eficiência",
    desc: "Assessoria estratégica desde o estudo preliminar até a energização, otimizando custos e segurança operacional.",
  },
  {
    icon: Cpu,
    title: "Controle & Automação UFOP",
    desc: "Rigor analítico oriundo da Engenharia de Controle e Automação para infraestruturas inteligentes e resilientes.",
  },
];

export default function RestoraSolutionsServices() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedSolution, setSelectedSolution] = useState(null);
  const sectionRef = useRef(null);

  const filtered =
    selectedCategory === "Todos"
      ? SOLUTIONS
      : SOLUTIONS.filter((item) => item.category === selectedCategory);

  const cycleCategory = (dir) => {
    const idx = CATEGORIES.indexOf(selectedCategory);
    const nextIdx = (idx + dir + CATEGORIES.length) % CATEGORIES.length;
    setSelectedCategory(CATEGORIES[nextIdx]);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".sol-card-anim",
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
          stagger: 0.08,
          ease: "power2.out",
          clearProps: "transform",
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, [selectedCategory]);

  return (
    <div ref={sectionRef} className="bg-[#F7F5F2]">
      {/* SECTION 4: FILTERABLE SOLUTIONS GRID (Follows reference video 00:12–00:13) */}
      <section id="solucoes" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1380px]">
          <div className="text-center max-w-[780px] mx-auto mb-10 sm:mb-12">
            <span className="inline-flex items-center gap-2 rounded-full bg-white border border-[#DFDCD5] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0B7A5A] mb-4">
              Portfólio Técnico
            </span>
            <h2 className="text-[32px] sm:text-[44px] lg:text-[52px] font-bold uppercase tracking-[-0.03em] leading-[1.06] text-[#121417]">
              SOLUÇÕES DE ENGENHARIA{" "}
              <span className="font-serif italic font-normal lowercase text-[#0B7A5A] text-[38px] sm:text-[50px] lg:text-[58px]">
                sob medida.
              </span>
            </h2>
          </div>

          {/* Horizontal Category Filter Bar + Prev/Next Buttons */}
          <div className="flex items-center justify-between gap-3 mb-8 sm:mb-10">
            <button
              type="button"
              onClick={() => cycleCategory(-1)}
              aria-label="Categoria anterior"
              className="hidden sm:flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#DFDCD5] bg-white text-[#121417] hover:border-[#0B7A5A] hover:text-[#0B7A5A] transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-1 no-scrollbar flex-1">
              {CATEGORIES.map((cat) => {
                const active = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`shrink-0 rounded-full px-4 sm:px-5 py-2 text-[12.5px] sm:text-[13px] font-medium transition-all duration-200 ${
                      active
                        ? "bg-[#0B0C0E] text-white shadow-sm font-semibold"
                        : "bg-white text-[#5F636B] border border-[#E5E1DA] hover:border-[#121417]/40 hover:text-[#121417]"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => cycleCategory(1)}
              aria-label="Próxima categoria"
              className="hidden sm:flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#DFDCD5] bg-white text-[#121417] hover:border-[#0B7A5A] hover:text-[#0B7A5A] transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* 3-Column Solution Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => (
              <article
                key={item.id}
                onClick={() => setSelectedSolution(item)}
                className="sol-card-anim group cursor-pointer rounded-[26px] bg-white p-4 border border-[#E9E5DD] shadow-[0_10px_30px_rgba(18,20,23,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(18,20,23,0.09)] flex flex-col justify-between"
              >
                <div>
                  {/* Image Top Container */}
                  <div className="relative h-56 sm:h-60 w-full overflow-hidden rounded-[20px] bg-[#121417] mb-5">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

                    {/* Top Norma Badge */}
                    <span className="absolute top-3.5 left-3.5 inline-flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur-md px-3 py-1 text-[11px] font-bold uppercase tracking-[0.06em] text-[#121417]">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#0B7A5A]" />
                      <span>{item.norma}</span>
                    </span>

                    {/* Bottom-right Quick Action Pill */}
                    <span className="absolute bottom-3.5 right-3.5 inline-flex items-center gap-1 rounded-full bg-[#0B0C0E]/85 backdrop-blur-md px-3.5 py-1.5 text-[11.5px] font-semibold text-white group-hover:bg-[#0B7A5A] transition-colors">
                      <span>Ver Escopo</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="px-1.5">
                    <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#0B7A5A] font-semibold">
                      {item.category}
                    </span>
                    <h3 className="mt-1.5 text-[19px] sm:text-[21px] font-bold tracking-tight leading-snug text-[#121417] group-hover:text-[#0B7A5A] transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-[#5F636B] line-clamp-2">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                {/* Micro Specs Bar */}
                <div className="mt-5 pt-4 mx-1.5 border-t border-[#EFECE6] flex flex-wrap items-center gap-2">
                  {item.specs.map((spec) => (
                    <span
                      key={spec}
                      className="inline-flex items-center gap-1 rounded-full bg-[#F7F5F2] px-2.5 py-1 text-[11px] font-medium text-[#4C5057]"
                    >
                      <Layers className="w-3 h-3 text-[#0B7A5A]" />
                      <span>{spec}</span>
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: WHAT SERVICES WE PROVIDE — 2x2 GRID (Follows reference video 00:14–00:15) */}
      <section
        id="servicos"
        className="py-16 sm:py-24 px-4 sm:px-6 lg:px-10 bg-white rounded-[36px] sm:rounded-[48px] border-y border-[#ECE9E2]"
      >
        <div className="mx-auto max-w-[1380px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-end mb-12 sm:mb-14">
            <div className="lg:col-span-6">
              <span className="inline-flex items-center gap-2 text-[11.5px] font-semibold uppercase tracking-[0.14em] text-[#0B7A5A] mb-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#0B7A5A]" />
                <span>Áreas de Atuação</span>
              </span>
              <h2 className="text-[32px] sm:text-[44px] lg:text-[50px] font-bold uppercase tracking-[-0.03em] leading-[1.06] text-[#121417]">
                QUAIS SERVIÇOS{" "}
                <span className="font-serif italic font-normal lowercase text-[#0B7A5A] text-[38px] sm:text-[50px] lg:text-[58px]">
                  oferecemos
                </span>
              </h2>
            </div>
            <div className="lg:col-span-6 lg:pl-10">
              <p className="text-[15px] sm:text-[16px] leading-relaxed text-[#5F636B]">
                Atuação integrada para empreendimentos residenciais, comerciais e industriais — do estudo preliminar e dimensionamento executivo até laudos técnicos com ART registrada.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES_CORE.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <div
                  key={srv.title}
                  className="group rounded-[26px] bg-[#F7F5F2] border border-[#E7E3DB] p-7 sm:p-9 transition-all duration-300 hover:bg-[#0B0C0E] hover:border-[#0B0C0E]"
                >
                  <div className="flex items-start justify-between gap-4 mb-8">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#0B7A5A] shadow-sm transition-colors duration-300 group-hover:bg-[#0B7A5A] group-hover:text-white">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs text-[#8E929B] group-hover:text-white/50">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-[22px] sm:text-[24px] font-bold tracking-tight text-[#121417] group-hover:text-white transition-colors">
                    {srv.title}
                  </h3>
                  <p className="mt-3 text-[14.5px] sm:text-[15px] leading-relaxed text-[#5F636B] group-hover:text-white/75 transition-colors">
                    {srv.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solution Detail Modal */}
      {selectedSolution && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={() => setSelectedSolution(null)}
        >
          <div
            className="relative w-full max-w-[680px] rounded-[28px] bg-white p-6 sm:p-8 shadow-2xl border border-[#E5E1DA]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedSolution(null)}
              aria-label="Fechar detalhes"
              className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full bg-[#F7F5F2] text-[#121417] hover:bg-[#0B0C0E] hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="h-52 sm:h-64 w-full overflow-hidden rounded-[20px] bg-[#121417] mb-6">
              <img
                src={selectedSolution.image}
                alt={selectedSolution.alt}
                className="h-full w-full object-cover object-center"
              />
            </div>

            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#E6F4F0] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.08em] text-[#0B7A5A] mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{selectedSolution.norma}</span>
            </div>

            <h3 className="text-[24px] sm:text-[28px] font-bold tracking-tight text-[#121417]">
              {selectedSolution.title}
            </h3>
            <p className="mt-2 text-[15px] leading-relaxed text-[#5F636B]">
              {selectedSolution.subtitle}
            </p>

            <ul className="mt-5 space-y-2.5 border-t border-[#EFECE6] pt-5">
              {selectedSolution.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-[14px] text-[#2B2E33]">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#0B7A5A] shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-wrap items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setSelectedSolution(null)}
                className="rounded-full border border-[#DFDCD5] px-5 py-3 text-[13px] font-semibold text-[#121417] hover:bg-[#F7F5F2]"
              >
                Fechar
              </button>
              <a
                href={`${WHATSAPP}?text=${encodeURIComponent(
                  `Olá! Gostaria de solicitar orçamento para "${selectedSolution.title}" (${selectedSolution.norma}).`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#0B7A5A] px-6 py-3 text-[13px] font-semibold text-white hover:bg-[#0B0C0E] transition-colors"
              >
                <span>Solicitar Orçamento</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
