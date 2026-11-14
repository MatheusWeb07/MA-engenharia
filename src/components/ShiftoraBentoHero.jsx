import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlertTriangle,
  ArrowUpRight,
  Award,
  CheckCircle2,
  Cpu,
  FileCheck2,
  GraduationCap,
  Layers,
  Play,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  X,
  Zap,
} from "lucide-react";
import { CREA, WHATSAPP } from "../data";

export default function ShiftoraBentoHero() {
  const [videoOpen, setVideoOpen] = useState(false);
  const [activeNode, setActiveNode] = useState(0);

  const NODES = [
    { id: "proj", label: "Projetos Elétricos", detail: "Dimensionamento NBR 5410 sob medida" },
    { id: "laud", label: "Laudos NR-10 / SPDA", detail: "Inspeções e medições periciais in loco" },
    { id: "auto", label: "Controle & Automação", detail: "Engenharia de precisão com formação UFOP" },
    { id: "cons", label: "Consultoria Técnica", detail: "Otimização energética e conformidade contínua" },
    { id: "art", label: "Emissão de ART", detail: "Responsabilidade técnica CREA-MG garantida" },
  ];

  return (
    <section id="inicio" className="bg-[#EDF3F0] px-3 pt-3 pb-8 sm:px-6 sm:pt-6 sm:pb-12 lg:px-8">
      <div className="mx-auto max-w-[1440px]">
        
        {/* =========================================================================
            HEADER DE NAVEGAÇÃO ESTILO SHIFTORA (Clean, flutuante, pílulas elegantes)
            ========================================================================= */}
        <header className="mb-5 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-ink/8 bg-white/90 px-5 py-3.5 shadow-sm backdrop-blur-xl sm:px-7">
          <a href="#inicio" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-forest p-1.5 shadow-md shadow-forest/20">
              <img
                src="/assets/logo-emblem.png"
                alt="MA"
                width="32"
                height="32"
                className="h-full w-full object-contain brightness-0 invert"
              />
            </span>
            <div>
              <span className="font-display text-[17px] font-extrabold tracking-tight text-ink sm:text-[18px]">
                MA <span className="font-light text-forest">SOLUÇÕES</span>
              </span>
              <span className="block font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-ink/60">
                E ENGENHARIA LTDA
              </span>
            </div>
          </a>

          {/* Links Centrais em Pílulas */}
          <nav aria-label="Menu Principal" className="hidden items-center gap-1 lg:flex">
            {[
              ["Início", "#inicio"],
              ["Normas", "#autoridades"],
              ["Serviços", "#servicos"],
              ["Quem Somos", "#quem-somos"],
              ["Compromisso", "#compromisso"],
              ["Contato", "#contato"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="rounded-full px-4 py-1.5 text-[12.5px] font-bold tracking-[0.02em] text-ink/75 transition hover:bg-forest/10 hover:text-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Botões da Direita */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setVideoOpen(true)}
              className="hidden items-center gap-2 rounded-full border border-ink/10 bg-white px-4 py-2 text-[11px] font-extrabold uppercase tracking-wider text-ink transition hover:border-forest hover:text-forest sm:inline-flex"
            >
              <Play className="h-3 w-3 fill-current text-forest" />
              <span>Ver Referência</span>
            </button>

            <a
              href={`${WHATSAPP}?text=${encodeURIComponent("Olá! Gostaria de solicitar um orçamento técnico com a MA Soluções e Engenharia.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3.5 rounded-full bg-forest py-1.5 pl-5 pr-1.5 text-[11.5px] font-extrabold uppercase tracking-wider text-white shadow-lg shadow-forest/25 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
            >
              <span>Solicitar Orçamento</span>
              <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-ink transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </a>
          </div>
        </header>

        {/* =========================================================================
            BENTO GRID PRINCIPAL — 1:1 COM A REFERÊNCIA SHIFTORA ANEXADA
            ========================================================================= */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-5">

          {/* -----------------------------------------------------------------
              1. HERO CARD PRINCIPAL (8 Colunas): FUNDO 3D ESMERALDA + SLOGAN COM SUBLINHADO
              ----------------------------------------------------------------- */}
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="group relative overflow-hidden rounded-[28px] border border-ink/8 bg-white shadow-[0_24px_60px_-15px_rgba(11,122,90,0.14)] lg:col-span-8"
          >
            {/* O FUNDO 3D EM ONDA DE VIDRO ESMERALDA IDÊNTICO AO VÍDEO SHIFTORA */}
            <div className="pointer-events-none absolute inset-0">
              <img
                src="/assets/3d-glass-emerald-wave.png"
                alt="3D Glass Emerald Wave"
                width="1920"
                height="1080"
                fetchPriority="high"
                className="h-full w-full object-cover object-[92%_center] opacity-95 transition-transform duration-1000 group-hover:scale-103"
              />
              {/* Degradê de alto contraste garantindo que o texto fique 100% legível com as curvas 3D iluminando o fundo */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.96) 42%, rgba(255,255,255,0.7) 65%, rgba(255,255,255,0.1) 100%)",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-white/30" />
            </div>

            {/* Conteúdo do Card Hero */}
            <div className="relative z-10 flex min-h-[500px] flex-col justify-between p-6 sm:p-10 lg:min-h-[560px] lg:p-12">
              
              {/* Topo do Card */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <a
                  href={`${WHATSAPP}?text=${encodeURIComponent("Olá! Vim pelo site da MA Soluções e Engenharia.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/90 px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-wider text-ink shadow-sm backdrop-blur-md transition hover:border-forest hover:text-forest"
                >
                  <ArrowUpRight className="h-3.5 w-3.5 text-forest" />
                  <span>www.masolucoesengenharia.com.br</span>
                </a>

                <span className="rounded-full bg-forest/10 px-3.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-forest backdrop-blur-sm">
                  {CREA}
                </span>
              </div>

              {/* Centro: Título Monumental com Sublinhado Orgânico Estilo Shiftora */}
              <div className="my-auto py-8">
                <h1 className="font-display text-[clamp(2.5rem,5.6vw,4.8rem)] font-extrabold leading-[1.02] tracking-[-0.04em] text-ink">
                  Projetos Inteligentes,
                  <br />
                  Resultados{" "}
                  <span className="relative inline-block text-forest">
                    Eficientes
                    {/* Linha/Swoosh Estilo Desenho à Mão de Shiftora */}
                    <svg
                      className="absolute -bottom-2.5 left-0 w-full overflow-visible"
                      height="14"
                      viewBox="0 0 240 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 10C55 3 155 2 237 8C185 13 95 13 4 11"
                        stroke="#0B7A5A"
                        strokeWidth="4"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </h1>

                <p className="mt-6 max-w-xl text-[15px] font-medium leading-relaxed text-ink/75 sm:text-[17px]">
                  Engenharia elétrica, controle & automação e laudos técnicos de alta confiabilidade para
                  indústrias, comércios e infraestruturas — com rigor normativo absoluto e emissão de ART.
                </p>

                {/* Badges de Confiança */}
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href="#servicos"
                    className="group inline-flex items-center gap-4 rounded-full bg-ink py-2 pl-6 pr-2 text-[12px] font-extrabold uppercase tracking-wider text-white shadow-xl transition hover:bg-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
                  >
                    <span>Conhecer Nossas Soluções</span>
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-forest text-white transition-transform duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-ink">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </a>

                  <div className="flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-[12px] font-bold text-forest shadow-sm backdrop-blur-md">
                    <ShieldCheck className="h-4 w-4 text-forest" />
                    <span>Engenheiros Formados pela UFOP</span>
                  </div>
                </div>
              </div>

              {/* Rodapé Interno do Card */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-ink/8 pt-4">
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-ink/60">
                  João Monlevade • Minas Gerais
                </span>
                <span className="font-mono text-[10px] font-semibold text-forest">
                  NBR 5410 • NR-10 • NBR 5419 • ART Inclusa
                </span>
              </div>
            </div>
          </motion.div>

          {/* -----------------------------------------------------------------
              COLUNA DIREITA (4 Colunas): 2 CARDS EMPILHADOS
              ----------------------------------------------------------------- */}
          <div className="flex flex-col gap-4 lg:col-span-4 lg:gap-5">

            {/* CARD 2: RIGOR NORMATIVO COM BARRAS DE EFICIÊNCIA (1:1 com Shiftora "Efficiency That Scales") */}
            <div className="flex flex-1 flex-col justify-between rounded-[28px] border border-white/10 bg-[#0B2118] p-6 text-white shadow-[0_20px_50px_-15px_rgba(0,0,0,0.3)] sm:p-7">
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-white/10 px-3 py-1 font-mono text-[9.5px] font-bold uppercase tracking-wider text-mint">
                    Conformidade Técnica
                  </span>
                  <span className="font-mono text-[10px] text-white/50">Pitch Deck</span>
                </div>

                <h3 className="mt-4 font-display text-[21px] font-bold leading-snug text-white sm:text-[23px]">
                  Rigor que Protege sua Operação
                </h3>
                <p className="mt-1 text-[12.5px] text-white/70">
                  Do projeto personalizado à emissão definitiva de ART.
                </p>

                {/* Métrica 100% */}
                <div className="mt-6 flex items-baseline gap-3">
                  <span className="font-display text-[46px] font-extrabold leading-none tracking-tight text-white sm:text-[52px]">
                    100%
                  </span>
                  <span className="rounded-full bg-forest/80 px-2.5 py-1 text-[11px] font-bold text-mint">
                    ↗ Aprovado em Normas
                  </span>
                </div>
                <p className="mt-1 text-[12px] text-white/60">
                  Processos e instalações em total conformidade ABNT e NR-10.
                </p>
              </div>

              {/* BARRAS DE PROGRESSO / EFICIÊNCIA ESTILO SHIFTORA */}
              <div className="mt-6 pt-4 border-t border-white/10">
                <div className="flex items-end justify-between gap-1.5 h-12">
                  {[35, 42, 50, 58, 65, 72, 78, 85, 90, 94, 98, 100, 100, 100, 100].map((height, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ duration: 0.6, delay: i * 0.03, ease: "easeOut" }}
                      className={`w-full rounded-full transition-colors ${
                        i >= 11
                          ? "bg-mint shadow-[0_0_12px_rgba(45,212,191,0.6)]"
                          : i >= 7
                          ? "bg-forest"
                          : "bg-forest/40"
                      }`}
                    />
                  ))}
                </div>
                <div className="mt-2 flex items-center justify-between text-[10.5px] font-mono text-white/50">
                  <span>Início</span>
                  <span className="text-mint font-bold">100% Conforme</span>
                </div>
              </div>
            </div>

            {/* CARD 3: ESCALA E SEGURANÇA (1:1 com Shiftora "Ready to Scale") */}
            <div className="relative overflow-hidden rounded-[28px] border border-ink/8 bg-white p-6 shadow-md sm:p-7">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-forest/10 px-3 py-1 font-mono text-[9.5px] font-bold uppercase tracking-wider text-forest">
                  Engenharia e Automação
                </span>
                <Sparkles className="h-4 w-4 text-forest" />
              </div>

              <h3 className="mt-4 font-display text-[20px] font-bold leading-snug text-ink sm:text-[22px]">
                Pronto para Escalar com Segurança
              </h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-ink/70">
                Atuação consultiva e projetos sob medida para indústrias, construtoras e condomínios em Minas Gerais.
              </p>

              <div className="mt-5 flex items-center gap-3 rounded-2xl border border-forest/15 bg-[#F2F9F5] p-3.5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-forest text-white">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display text-[13.5px] font-bold text-ink">UFOP Ouro Preto</p>
                  <p className="text-[11.5px] text-ink/65">Engenharia com sólida base acadêmica e prática</p>
                </div>
              </div>
            </div>

          </div>

          {/* -----------------------------------------------------------------
              LINHA INFERIOR (3 CARDS LADO A LADO — IDÊNTICO AO SHIFTORA)
              ----------------------------------------------------------------- */}

          {/* CARD 4 (4 Colunas): RISCOS E INEFICIÊNCIAS (1:1 com "Supply Chains Are Still Holding Back") */}
          <div className="relative flex flex-col justify-between overflow-hidden rounded-[28px] border border-white/10 bg-[#091A13] p-6 text-white shadow-xl sm:p-8 lg:col-span-4">
            <div>
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-white/10 px-3 py-1 font-mono text-[9.5px] font-bold uppercase tracking-wider text-mint">
                  Diagnóstico Técnico
                </span>
                <span className="font-mono text-[10px] text-white/50">Pitch Deck</span>
              </div>

              <h3 className="mt-5 font-display text-[22px] font-bold leading-tight text-white sm:text-[25px]">
                Riscos Ocultos que Ameaçam sua Operação
              </h3>
              <p className="mt-2 text-[13px] text-white/70">
                Instalações elétricas sem rigor técnico geram passivos graves:
              </p>

              {/* 3 Cards Flutuantes de Vidro (Idênticos ao Shiftora) */}
              <div className="mt-6 space-y-2.5">
                {[
                  { title: "Instalações obsoletas & risco de incêndio", icon: ShieldAlert },
                  { title: "Reprovações em vistorias do Corpo de Bombeiros", icon: AlertTriangle },
                  { title: "Falta de ART e perda de cobertura securitária", icon: FileCheck2 },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 p-3.5 backdrop-blur-md"
                    >
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-forest/80 text-mint">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="text-[12.5px] font-semibold text-white/90">{item.title}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10">
              <p className="font-mono text-[11px] text-mint">
                Evite paralisações com nossos laudos periciais.
              </p>
            </div>
          </div>

          {/* CARD 5 (4 Colunas): ECOSSISTEMA TÉCNICO INTERATIVO COM DIAGRAMA DE NÓS (1:1 com "The Smarter Way") */}
          <div className="relative flex flex-col justify-between overflow-hidden rounded-[28px] border border-ink/8 bg-white p-6 shadow-md sm:p-8 lg:col-span-4">
            <div>
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-forest/10 px-3 py-1 font-mono text-[9.5px] font-bold uppercase tracking-wider text-forest">
                  Ecossistema Integrado
                </span>
                <span className="font-mono text-[10px] text-ink/50">Pitch Deck</span>
              </div>

              <h3 className="mt-4 font-display text-[21px] font-bold leading-tight text-ink sm:text-[23px]">
                A Abordagem Inteligente para sua Instalação
              </h3>
              <p className="mt-1.5 text-[12.5px] text-ink/70">
                Uma estrutura técnica que conecta todas as fases da engenharia:
              </p>

              {/* DIAGRAMA DE NÓS ESTILO SHIFTORA */}
              <div className="relative my-6 rounded-2xl border border-forest/15 bg-[#F5FAF8] p-5">
                {/* Hub Central */}
                <div className="flex justify-center mb-5">
                  <div className="relative">
                    <div className="flex items-center gap-2 rounded-full bg-forest px-4 py-2 text-white shadow-lg shadow-forest/30">
                      <span className="h-2 w-2 rounded-full bg-mint animate-ping" />
                      <span className="font-display text-[12px] font-extrabold uppercase tracking-wider">
                        MA Engenharia
                      </span>
                    </div>
                  </div>
                </div>

                {/* Nós Conectados */}
                <div className="grid grid-cols-2 gap-2 text-center">
                  {NODES.map((n, i) => {
                    const isSelected = activeNode === i;
                    return (
                      <button
                        key={n.id}
                        type="button"
                        onClick={() => setActiveNode(i)}
                        className={`rounded-xl border p-2 text-left transition-all ${
                          isSelected
                            ? "border-forest bg-forest text-white shadow-md"
                            : "border-forest/20 bg-white text-ink hover:border-forest/50"
                        } ${i === 4 ? "col-span-2" : ""}`}
                      >
                        <p className="font-display text-[11.5px] font-bold">{n.label}</p>
                        <p className={`text-[10px] leading-tight ${isSelected ? "text-mint" : "text-ink/60"}`}>
                          {n.detail}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="border-t border-ink/8 pt-3 text-right">
              <span className="font-mono text-[10.5px] font-semibold text-forest">
                Atendimento ponta a ponta
              </span>
            </div>
          </div>

          {/* CARD 6 (4 Colunas): DADOS E RESULTADOS (1:1 com Shiftora "Built for Modern Trade") */}
          <div className="relative flex flex-col justify-between overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-[#0F291E] via-[#0B1E17] to-[#06120D] p-6 text-white shadow-xl sm:p-8 lg:col-span-4">
            <div>
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-white/10 px-3 py-1 font-mono text-[9.5px] font-bold uppercase tracking-wider text-mint">
                  Performance Técnica
                </span>
                <span className="font-mono text-[10px] text-white/50">Pitch Deck</span>
              </div>

              <h3 className="mt-4 font-display text-[21px] font-bold leading-tight text-white sm:text-[23px]">
                Construído para Engenharia de Alto Desempenho
              </h3>
              <p className="mt-1 text-[12.5px] text-white/70">
                Engenharia de precisão com foco em sustentabilidade e economia real.
              </p>

              {/* Cards de Métricas Estilo Shiftora */}
              <div className="mt-5 space-y-3">
                <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] text-mint uppercase">Garantia Técnica</span>
                    <span className="rounded-full bg-mint/20 px-2 py-0.5 font-mono text-[9px] text-mint">
                      ART Inclusa
                    </span>
                  </div>
                  <p className="mt-1 font-display text-[24px] font-extrabold text-white">
                    100% Responsabilidade
                  </p>
                  <p className="text-[11.5px] text-white/60">
                    Todos os projetos e laudos emitidos com responsabilidade técnica {CREA}.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-white/15 bg-white/10 p-3.5 backdrop-blur-md">
                    <span className="font-mono text-[9px] uppercase text-white/60">Formação</span>
                    <p className="mt-0.5 font-display text-[18px] font-extrabold text-white">UFOP</p>
                    <p className="text-[10px] text-mint">Controle & Automação</p>
                  </div>
                  <div className="rounded-2xl border border-white/15 bg-white/10 p-3.5 backdrop-blur-md">
                    <span className="font-mono text-[9px] uppercase text-white/60">Sede</span>
                    <p className="mt-0.5 font-display text-[18px] font-extrabold text-white">Monlevade</p>
                    <p className="text-[10px] text-mint">Minas Gerais</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 border-t border-white/10 pt-3">
              <a
                href={`${WHATSAPP}?text=${encodeURIComponent("Olá! Gostaria de agendar uma reunião técnica com a MA Soluções e Engenharia.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-[12px] font-bold text-mint hover:text-white transition"
              >
                <span>Falar diretamente com os engenheiros</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

        </div>

      </div>

      {/* Modal do Vídeo de Referência */}
      <AnimatePresence>
        {videoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setVideoOpen(false)}
            className="fixed inset-0 z-[2000] flex items-center justify-center bg-ink/80 p-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.94, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.94, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-ink/10 px-6 py-4">
                <span className="font-display text-sm font-bold uppercase tracking-wider text-ink">
                  Vídeo de Referência — Motion Design
                </span>
                <button
                  type="button"
                  onClick={() => setVideoOpen(false)}
                  className="grid h-8 w-8 place-items-center rounded-full bg-ink/10 text-ink transition hover:bg-ink hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <video
                src="/assets/video-referencia.mp4"
                controls
                autoPlay
                playsInline
                className="max-h-[75vh] w-full bg-black"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
