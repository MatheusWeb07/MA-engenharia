import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlertTriangle,
  ArrowUpRight,
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
import { CREA, FUNDADORES, WHATSAPP } from "../data";

export default function ShiftoraShowcase() {
  const [selectedNode, setSelectedNode] = useState(0);
  const [videoOpen, setVideoOpen] = useState(false);

  const NODES = [
    { label: "Projetos Elétricos", desc: "Dimensionamento NBR 5410", x: 120, y: 70 },
    { label: "Laudos NR-10 / SPDA", desc: "Inspeções in loco", x: 380, y: 70 },
    { label: "Controle & Automação", desc: "Formação UFOP", x: 420, y: 220 },
    { label: "Consultoria Técnica", desc: "Otimização de sistemas", x: 250, y: 270 },
    { label: "Emissão de ART", desc: "Registro CREA-MG", x: 80, y: 220 },
  ];

  return (
    <section id="inicio" className="bg-[#EBF3FA] px-3 pt-3 pb-8 sm:px-6 sm:pt-6 sm:pb-12 lg:px-8">
      <div className="mx-auto max-w-[1520px]">
        
        {/* =========================================================================
            BARRA DE NAVEGAÇÃO DE TOPO (Limpa, em pílulas, elegante)
            ========================================================================= */}
        <header className="mb-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/60 bg-white/80 px-5 py-3 shadow-[0_10px_30px_rgba(0,100,200,0.06)] backdrop-blur-xl sm:px-7">
          <a href="#inicio" className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-forest p-1.5 shadow-md shadow-forest/20">
              <img
                src="/assets/logo-emblem.png"
                alt="MA"
                width="32"
                height="32"
                className="h-full w-full object-contain brightness-0 invert"
              />
            </span>
            <div>
              <span className="font-display text-[16px] font-extrabold tracking-tight text-ink sm:text-[17px]">
                MA <span className="text-forest">ENGENHARIA</span>
              </span>
              <span className="block font-mono text-[8.5px] font-bold uppercase tracking-[0.16em] text-ink/55">
                SOLUÇÕES E ENGENHARIA LTDA
              </span>
            </div>
          </a>

          <nav aria-label="Navegação Principal" className="hidden items-center gap-1 lg:flex">
            {[
              ["Início", "#inicio"],
              ["Quem Somos", "#quem-somos"],
              ["Serviços", "#servicos"],
              ["Compromisso", "#compromisso"],
              ["Contato", "#contato"],
            ].map(([l, h]) => (
              <a
                key={h}
                href={h}
                className="rounded-full px-4 py-1.5 text-[12px] font-bold text-ink/70 transition hover:bg-forest/10 hover:text-forest"
              >
                {l}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => setVideoOpen(true)}
              className="hidden items-center gap-1.5 rounded-full border border-ink/10 bg-white px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider text-ink transition hover:border-forest hover:text-forest sm:inline-flex"
            >
              <Play className="h-3 w-3 fill-current text-forest" />
              <span>Ver Vídeo Ref</span>
            </button>

            <a
              href={`${WHATSAPP}?text=${encodeURIComponent("Olá! Gostaria de solicitar um orçamento com a MA Soluções e Engenharia.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-forest py-1.5 pl-4 pr-1.5 text-[11px] font-extrabold uppercase tracking-wider text-white shadow-md shadow-forest/20 transition hover:bg-ink"
            >
              <span>Solicitar Orçamento</span>
              <span className="grid h-7 w-7 place-items-center rounded-full bg-white text-ink transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </a>
          </div>
        </header>

        {/* =========================================================================
            BENTO CANVAS 1:1 COM O SCREENSHOT SHIFTORA ENVIADO PELO USUÁRIO
            ========================================================================= */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-5">

          {/* -----------------------------------------------------------------
              CARD 1: HERO PRINCIPAL (8 Colunas): O VIDRO EXATO DA REFERÊNCIA
              ----------------------------------------------------------------- */}
          <div className="relative overflow-hidden rounded-[26px] border border-white/60 bg-[#EFF7FD] shadow-[0_20px_50px_-15px_rgba(0,100,200,0.12)] lg:col-span-8">
            
            {/* O VIDRO TRANSLÚCIDO EXATO DO VÍDEO NO FUNDO */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <img
                src="/assets/reference-glass-bg.png"
                alt="Glass Background Reference"
                width="1200"
                height="700"
                fetchPriority="high"
                className="h-full w-full object-cover object-left"
              />
              {/* Efeito suave de luz no topo */}
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/40" />
            </div>

            {/* Conteúdo do Card Principal */}
            <div className="relative z-10 flex min-h-[490px] flex-col justify-between p-6 sm:p-9 lg:min-h-[550px] lg:p-12">
              
              {/* Topo do Card: Logo + Pílula + Tag */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 rounded-full bg-white/80 py-1 pl-1.5 pr-4 shadow-sm backdrop-blur-md">
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-forest text-white">
                    <Zap className="h-3.5 w-3.5 fill-current" />
                  </span>
                  <span className="font-display text-[13px] font-extrabold uppercase tracking-tight text-ink">
                    MA Engenharia
                  </span>
                </div>

                <a
                  href={`${WHATSAPP}?text=${encodeURIComponent("Olá! Vim pelo site da MA Soluções e Engenharia.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-ink/10 bg-white/90 px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-ink shadow-sm backdrop-blur-md transition hover:border-forest hover:text-forest"
                >
                  <ArrowUpRight className="h-3 w-3 text-forest" />
                  <span>www.masolucoesengenharia.com.br</span>
                </a>

                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-ink/50">
                  {CREA}
                </span>
              </div>

              {/* Centro: Título Monumental com o Sublinhado Cyan Estilo Shiftora */}
              <div className="my-auto py-6 max-w-xl">
                <h1 className="font-display text-[clamp(2.4rem,5.2vw,4.4rem)] font-extrabold leading-[1.03] tracking-[-0.04em] text-ink">
                  Projetos Inteligentes,
                  <br />
                  Resultados{" "}
                  <span className="relative inline-block text-[#0275B1]">
                    Eficientes
                    {/* Linha/Swoosh Estilo Desenho Cyan de Shiftora */}
                    <svg
                      className="absolute -bottom-2 left-0 w-full overflow-visible"
                      height="12"
                      viewBox="0 0 240 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <motion.path
                        d="M3 8C55 2 155 2 237 7C185 11 95 11 4 9"
                        stroke="#00A3FF"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                      />
                    </svg>
                  </span>
                </h1>

                <p className="mt-5 max-w-lg text-[14.5px] font-medium leading-relaxed text-ink/75 sm:text-[16px]">
                  A solução definitiva em engenharia elétrica, controle & automação e laudos técnicos de alta
                  confiabilidade para indústrias, comércios e infraestrutura.
                </p>

                {/* Badges de Confiança */}
                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <a
                    href="#servicos"
                    className="group inline-flex items-center gap-3 rounded-full bg-ink py-2 pl-6 pr-2 text-[12px] font-extrabold uppercase tracking-wider text-white shadow-lg transition hover:bg-forest"
                  >
                    <span>Conhecer Nossas Soluções</span>
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-forest text-white transition-transform duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-ink">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </a>

                  <div className="flex items-center gap-2 rounded-full bg-white/90 px-3.5 py-1.5 text-[11.5px] font-bold text-forest shadow-sm backdrop-blur-md">
                    <ShieldCheck className="h-4 w-4 text-forest" />
                    <span>Engenheiros Formados pela UFOP</span>
                  </div>
                </div>
              </div>

              {/* Rodapé Interno do Card */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-ink/8 pt-3 text-[11px] font-mono text-ink/60">
                <span>João Monlevade • Minas Gerais</span>
                <span className="font-semibold text-forest">NBR 5410 • NR-10 • NBR 5419 • ART Inclusa</span>
              </div>
            </div>
          </div>

          {/* -----------------------------------------------------------------
              COLUNA DIREITA (4 Colunas): OS 2 CARDS DO SHIFTORA
              ----------------------------------------------------------------- */}
          <div className="flex flex-col gap-4 lg:col-span-4 lg:gap-5">

            {/* CARD 2: DARK CARD COM BARRAS DE EFICIÊNCIA ANIMADAS (1:1 COM SHIFTORA) */}
            <div className="flex flex-1 flex-col justify-between rounded-[26px] border border-white/10 bg-[#0B1E17] p-6 text-white shadow-[0_20px_50px_-15px_rgba(0,0,0,0.3)] sm:p-7">
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-white/10 px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-wider text-mint">
                    Conformidade Técnica
                  </span>
                  <span className="font-mono text-[10px] text-white/50">Pitch Deck</span>
                </div>

                <h3 className="mt-4 font-display text-[20px] font-bold leading-snug text-white sm:text-[22px]">
                  Rigor que Escala com sua Operação
                </h3>
                <p className="mt-1 text-[12px] text-white/65">
                  Do dimensionamento técnico à emissão de ART definitiva.
                </p>

                {/* Métrica 100% */}
                <div className="mt-5 flex items-baseline gap-3">
                  <span className="font-display text-[48px] font-extrabold leading-none tracking-tight text-white">
                    100%
                  </span>
                  <span className="rounded-full bg-forest/80 px-2.5 py-1 text-[10.5px] font-bold text-mint">
                    ↗ Aprovado em Normas
                  </span>
                </div>
                <p className="mt-1 text-[11.5px] text-white/60">
                  Instalações em plena conformidade ABNT NBR 5410 e NR-10.
                </p>
              </div>

              {/* BARRAS DE EQUALIZADOR ANIMADAS CONTÍNUAS (TUDO ANIMADO!) */}
              <div className="mt-6 pt-4 border-t border-white/10">
                <div className="flex items-end justify-between gap-1.5 h-12">
                  {[40, 52, 65, 75, 82, 88, 92, 96, 100, 100, 94, 88, 75, 60, 48].map((baseHeight, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        height: [`${Math.max(25, baseHeight * 0.45)}%`, `${baseHeight}%`, `${Math.max(30, baseHeight * 0.65)}%`],
                      }}
                      transition={{
                        duration: 1.4 + (i % 3) * 0.3,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                        delay: i * 0.08,
                      }}
                      className={`w-full rounded-full ${
                        i >= 8
                          ? "bg-mint shadow-[0_0_12px_rgba(45,212,191,0.8)]"
                          : i >= 4
                          ? "bg-forest"
                          : "bg-forest/40"
                      }`}
                    />
                  ))}
                </div>
                <div className="mt-2 flex items-center justify-between font-mono text-[10px] text-white/50">
                  <span>Início</span>
                  <span className="text-mint font-bold">100% Conforme</span>
                </div>
              </div>
            </div>

            {/* CARD 3: ESCALA E SEGURANÇA COM 3D FLOATING BADGE (1:1 COM SHIFTORA) */}
            <div className="relative overflow-hidden rounded-[26px] border border-white/60 bg-white p-6 shadow-md sm:p-7">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-forest/10 px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-wider text-forest">
                  Engenharia e Automação
                </span>
                <Sparkles className="h-4 w-4 text-forest" />
              </div>

              <h3 className="mt-4 font-display text-[20px] font-bold leading-snug text-ink">
                Pronto para Escalar com Segurança
              </h3>
              <p className="mt-1.5 text-[12.5px] leading-relaxed text-ink/70">
                Projetos e laudos emitidos com responsabilidade técnica por engenheiros formados pela UFOP.
              </p>

              {/* Elemento Flutuante 3D animado */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="mt-5 flex items-center gap-3 rounded-2xl border border-forest/20 bg-[#F2F9F5] p-3.5 shadow-sm"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-forest text-white shadow-md shadow-forest/25">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display text-[13.5px] font-bold text-ink">UFOP Ouro Preto</p>
                  <p className="text-[11px] text-ink/65">{FUNDADORES}</p>
                </div>
              </motion.div>
            </div>

          </div>

          {/* -----------------------------------------------------------------
              LINHA INFERIOR (3 CARDS LADO A LADO — 1:1 COM O SCREENSHOT SHIFTORA)
              ----------------------------------------------------------------- */}

          {/* CARD 4 (4 Colunas): DARK CARD COM 3 PÍLULAS DE VIDRO FLUTUANTES (1:1 COM SHIFTORA) */}
          <div className="relative flex flex-col justify-between overflow-hidden rounded-[26px] border border-white/10 bg-[#081711] p-6 text-white shadow-xl sm:p-7 lg:col-span-4">
            <div>
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-white/10 px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-wider text-mint">
                  Diagnóstico Técnico
                </span>
                <span className="font-mono text-[10px] text-white/50">Pitch Deck</span>
              </div>

              <h3 className="mt-4 font-display text-[21px] font-bold leading-tight text-white">
                Riscos Ocultos que Travam Empresas
              </h3>
              <p className="mt-1.5 text-[12.5px] text-white/65">
                Falhas elétricas e instalações sem ART geram prejuízos reais:
              </p>

              {/* 3 Pílulas de Vidro Fosco Flutuantes Animadas */}
              <div className="mt-5 space-y-2.5">
                {[
                  { title: "Instalações obsoletas & risco de incêndio", delay: 0 },
                  { title: "Reprovações em vistorias do Bombeiros", delay: 0.3 },
                  { title: "Falta de ART e passivos junto a seguradoras", delay: 0.6 },
                ].map((item, idx) => (
                  <motion.div
                    key={item.title}
                    animate={{ y: [0, -4, 0] }}
                    transition={{
                      duration: 3 + idx * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: item.delay,
                    }}
                    className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 p-3 backdrop-blur-md transition hover:border-mint"
                  >
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-forest/80 text-mint">
                      <ShieldAlert className="h-4 w-4" />
                    </span>
                    <span className="text-[12px] font-semibold text-white/90">{item.title}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-white/10 font-mono text-[10.5px] text-mint">
              Elimine riscos com nossos laudos periciais.
            </div>
          </div>

          {/* CARD 5 (4 Colunas): ECOSSISTEMA COM DIAGRAMA DE NÓS PULSANTE (1:1 COM SHIFTORA) */}
          <div className="relative flex flex-col justify-between overflow-hidden rounded-[26px] border border-white/60 bg-white p-6 shadow-md sm:p-7 lg:col-span-4">
            <div>
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-forest/10 px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-wider text-forest">
                  Ecossistema Integrado
                </span>
                <span className="font-mono text-[10px] text-ink/50">Pitch Deck</span>
              </div>

              <h3 className="mt-4 font-display text-[21px] font-bold leading-tight text-ink">
                A Abordagem Inteligente para sua Instalação
              </h3>
              <p className="mt-1 text-[12px] text-ink/70">
                Uma plataforma técnica que une do dimensionamento ao laudo:
              </p>

              {/* DIAGRAMA DE NÓS INTERATIVO E ANIMADO COM PULSOS */}
              <div className="relative my-4 rounded-2xl border border-forest/15 bg-[#F6FAF8] p-4 text-center">
                {/* Hub Central com Anéis Pulsantes */}
                <div className="relative mx-auto mb-4 flex justify-center">
                  <div className="relative">
                    {/* Anel de onda pulsante */}
                    <motion.span
                      animate={{ scale: [1, 1.4], opacity: [0.7, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                      className="absolute inset-0 rounded-full bg-forest/30"
                    />
                    <div className="relative flex items-center gap-2 rounded-full bg-forest px-4 py-1.5 text-white shadow-md">
                      <span className="h-2 w-2 rounded-full bg-mint animate-ping" />
                      <span className="font-display text-[11.5px] font-extrabold uppercase tracking-wider">
                        MA Engenharia
                      </span>
                    </div>
                  </div>
                </div>

                {/* Grid de 5 Nós Interativos */}
                <div className="grid grid-cols-2 gap-2 text-left">
                  {NODES.map((n, i) => {
                    const isSelected = selectedNode === i;
                    return (
                      <button
                        key={n.label}
                        type="button"
                        onClick={() => setSelectedNode(i)}
                        className={`rounded-xl border p-2 transition-all ${
                          isSelected
                            ? "border-forest bg-forest text-white shadow-md"
                            : "border-forest/20 bg-white text-ink hover:border-forest"
                        } ${i === 4 ? "col-span-2 text-center" : ""}`}
                      >
                        <p className="font-display text-[11px] font-bold">{n.label}</p>
                        <p className={`text-[9.5px] ${isSelected ? "text-mint" : "text-ink/60"}`}>
                          {n.desc}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="border-t border-ink/8 pt-2.5 text-right font-mono text-[10px] font-semibold text-forest">
              Atendimento ponta a ponta
            </div>
          </div>

          {/* CARD 6 (4 Colunas): DADOS & PERFORMANCE COM GRÁFICO (1:1 COM SHIFTORA) */}
          <div className="relative flex flex-col justify-between overflow-hidden rounded-[26px] border border-white/10 bg-gradient-to-br from-[#0C241B] via-[#091C15] to-[#040D0A] p-6 text-white shadow-xl sm:p-7 lg:col-span-4">
            <div>
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-white/10 px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-wider text-mint">
                  Performance Técnica
                </span>
                <span className="font-mono text-[10px] text-white/50">Pitch Deck</span>
              </div>

              <h3 className="mt-4 font-display text-[21px] font-bold leading-tight text-white">
                Construído para Alto Desempenho
              </h3>
              <p className="mt-1 text-[12px] text-white/65">
                Segurança, economia de energia e conformidade legal:
              </p>

              {/* Cards de Métricas Estilo Shiftora */}
              <div className="mt-4 space-y-2.5">
                <div className="rounded-2xl border border-white/15 bg-white/10 p-3.5 backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[9.5px] uppercase text-mint">Garantia Técnica</span>
                    <span className="rounded-full bg-mint/20 px-2 py-0.5 font-mono text-[8.5px] text-mint">
                      ART Inclusa
                    </span>
                  </div>
                  <p className="mt-1 font-display text-[22px] font-extrabold text-white">
                    100% Responsabilidade
                  </p>
                  {/* Mini Sparkline Chart SVG animado */}
                  <div className="mt-2 h-7 w-full overflow-hidden">
                    <svg viewBox="0 0 100 25" className="h-full w-full" preserveAspectRatio="none">
                      <motion.path
                        d="M0 20 Q25 5 50 15 T100 5 L100 25 L0 25 Z"
                        fill="rgba(45, 212, 191, 0.2)"
                      />
                      <motion.path
                        d="M0 20 Q25 5 50 15 T100 5"
                        fill="none"
                        stroke="#2DD4BF"
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                      />
                    </svg>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="rounded-xl border border-white/15 bg-white/10 p-2.5 backdrop-blur-md">
                    <span className="font-mono text-[8.5px] uppercase text-white/60">Formação</span>
                    <p className="font-display text-[16px] font-bold text-white">UFOP</p>
                    <p className="text-[9.5px] text-mint">Controle & Automação</p>
                  </div>
                  <div className="rounded-xl border border-white/15 bg-white/10 p-2.5 backdrop-blur-md">
                    <span className="font-mono text-[8.5px] uppercase text-white/60">Sede</span>
                    <p className="font-display text-[16px] font-bold text-white">Monlevade</p>
                    <p className="text-[9.5px] text-mint">Minas Gerais</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 border-t border-white/10 pt-2.5">
              <a
                href={`${WHATSAPP}?text=${encodeURIComponent("Olá! Gostaria de falar com os engenheiros da MA Soluções e Engenharia.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-[11.5px] font-bold text-mint hover:text-white transition"
              >
                <span>Falar diretamente com os engenheiros</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
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
