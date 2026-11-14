import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ArrowUpRight,
  Award,
  CheckCircle2,
  Compass,
  Cpu,
  FileCheck2,
  GraduationCap,
  Play,
  ShieldCheck,
  Sparkles,
  X,
  Zap,
} from "lucide-react";
import MaskText from "./MaskText";
import { CREA, HERO_TABS, TELEFONE, WHATSAPP } from "../data";

const NAV_ITEMS = [
  { label: "Início", href: "#inicio" },
  { label: "A Empresa", href: "#precisao" },
  { label: "Serviços", href: "#servicos" },
  { label: "Quem Somos", href: "#quem-somos" },
  { label: "Compromisso", href: "#compromisso" },
  { label: "Contato", href: "#contato" },
];

const HERO_MODES = [
  {
    id: "projetos",
    wordLeft: "PROJE",
    wordRight: "TAR.",
    pill: "NBR 5410 • CAD / BIM",
    title: "Elaboração de Projetos Elétricos",
    desc: "Dimensionamento personalizado que une segurança normativa, eficiência energética e economia real para instalações residenciais, comerciais e industriais.",
    statValue: "100%",
    statLabel: "Conformidade ABNT NBR 5410",
    waveFreq: 2,
  },
  {
    id: "laudos",
    wordLeft: "LAU",
    wordRight: "DAR.",
    pill: "NR-10 • SPDA NBR 5419",
    title: "Elaboração de Laudos Técnicos",
    desc: "Inspeções rigorosas, medições in loco e diagnósticos precisos com emissão de ART para prevenção de falhas e regularização técnica.",
    statValue: "ART",
    statLabel: "Responsabilidade CREA-MG Ativa",
    waveFreq: 3,
  },
  {
    id: "consultoria",
    wordLeft: "OTIMI",
    wordRight: "ZAR.",
    pill: "VIABILIDADE & EFICIÊNCIA",
    title: "Consultoria Técnica em Engenharia",
    desc: "Análise aprofundada de processos e instalações elétricas para reduzir custos operacionais, adequar sistemas e orientar decisões estratégicas.",
    statValue: "+Eficiência",
    statLabel: "Otimização Operacional Segura",
    waveFreq: 1.5,
  },
  {
    id: "automacao",
    wordLeft: "PREC",
    wordRight: "ISÃO",
    pill: "CONTROLE & AUTOMAÇÃO • UFOP",
    title: "Engenharia de Controle e Automação",
    desc: "Fundada por Marphiza Magalhães e Adeilson — Engenheiros Eletricistas com ênfase em Controle e Automação pela Universidade Federal de Ouro Preto (UFOP).",
    statValue: "UFOP",
    statLabel: "Excelência Acadêmica e Prática",
    waveFreq: 2.5,
  },
];

const AUTHORITY_STRIP = [
  { icon: ShieldCheck, code: "CREA-MG", label: "Nº 142366847-2" },
  { icon: GraduationCap, code: "UFOP", label: "Ouro Preto • Controle e Automação" },
  { icon: Compass, code: "NBR 5410", label: "Projetos de Baixa Tensão" },
  { icon: Award, code: "NR-10", label: "Segurança em Instalações Elétricas" },
  { icon: Zap, code: "NBR 5419", label: "Proteção Atmosférica (SPDA)" },
  { icon: FileCheck2, code: "ART", label: "Anotação de Responsabilidade Técnica" },
];

export default function HeroPrecisionMotion() {
  const [activeNav, setActiveNav] = useState(0);
  const [activeMode, setActiveMode] = useState(3); // Começa em PRECISÃO como na referência inspiraçao (3).webp
  const [paused, setPaused] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);

  // Mouse parallax suave em GPU (60fps cravados)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 120, damping: 24 });
  const smoothY = useSpring(mouseY, { stiffness: 120, damping: 24 });

  const cutoutX = useTransform(smoothX, [-0.5, 0.5], [-14, 14]);
  const cutoutY = useTransform(smoothY, [-0.5, 0.5], [-8, 8]);
  const wordX = useTransform(smoothX, [-0.5, 0.5], [16, -16]);
  const badgeX = useTransform(smoothX, [-0.5, 0.5], [-20, 20]);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setActiveMode((prev) => (prev + 1) % HERO_MODES.length);
    }, 5200);
    return () => clearInterval(timer);
  }, [paused]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(nx);
    mouseY.set(ny);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setPaused(false);
  };

  const mode = HERO_MODES[activeMode];

  return (
    <section
      id="inicio"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden bg-white pt-3 sm:pt-5"
    >
      <div className="mx-auto max-w-[1440px] px-3 sm:px-6 lg:px-8">
        {/* MOLDURA ARQUITETÔNICA PRINCIPAL (Fusão de inspiraçao (3).webp + inspiraçao.webp + Motion Design) */}
        <div className="relative overflow-hidden rounded-[28px] border border-ink/10 bg-white shadow-[0_28px_80px_-28px_rgba(11,122,90,0.22)] sm:rounded-[34px]">
          
          {/* =================================================================
              1. TOPO DE NAVEGAÇÃO EM PÍLULAS (Branco à esquerda + Verde #0B7A5A à direita)
             ================================================================= */}
          <header className="relative z-30 flex flex-wrap items-center justify-between gap-4 border-b border-ink/10 bg-white/95 px-5 py-4 backdrop-blur-md sm:px-8 lg:px-10">
            {/* Logo Oficial MA | Soluções e Engenharia */}
            <a
              href="#inicio"
              className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl border border-forest/20 bg-mint/50 p-1.5 shadow-sm">
                <img
                  src="/assets/logo-emblem.png"
                  alt="MA Soluções e Engenharia"
                  width="36"
                  height="36"
                  className="h-full w-full object-contain"
                />
              </span>
              <div className="leading-none">
                <span className="block font-display text-[19px] font-extrabold tracking-[-0.035em] text-ink sm:text-[21px]">
                  MA <span className="text-forest">ENGENHARIA</span>
                </span>
                <span className="mt-1 block font-mono text-[9.5px] font-semibold uppercase tracking-[0.16em] text-ink/65">
                  SOLUÇÕES E ENGENHARIA • {CREA}
                </span>
              </div>
            </a>

            {/* Pílulas Deslizantes de Navegação (Framer Motion layoutId) */}
            <nav aria-label="Navegação Principal" className="hidden items-center gap-1.5 xl:flex">
              {NAV_ITEMS.map((item, i) => {
                const isActive = activeNav === i;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setActiveNav(i)}
                    onMouseEnter={() => setActiveNav(i)}
                    className={`relative rounded-full px-5 py-2 text-[12px] font-bold tracking-[0.02em] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest ${
                      isActive
                        ? "text-white"
                        : "border border-ink/12 text-ink/75 hover:border-forest/40 hover:text-ink"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="heroPrecisionNavPill"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        className="absolute inset-0 -z-10 rounded-full bg-forest shadow-[0_6px_18px_rgba(11,122,90,0.3)]"
                      />
                    )}
                    {item.label}
                  </a>
                );
              })}
            </nav>

            {/* Botões de Ação à Direita */}
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={() => setVideoOpen(true)}
                aria-label="Assistir vídeo de referência em Motion Design"
                className="hidden items-center gap-2 rounded-full border border-forest/25 bg-mint/50 px-4 py-2 text-[11.5px] font-bold text-forest transition-colors hover:bg-forest hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest sm:inline-flex"
              >
                <Play className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
                <span>Showreel Motion</span>
              </button>

              <a
                href={`${WHATSAPP}?text=${encodeURIComponent("Olá! Gostaria de solicitar um orçamento com a MA Soluções e Engenharia.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3.5 rounded-full bg-ink py-1.5 pl-5 pr-1.5 text-[11.5px] font-extrabold uppercase tracking-[0.05em] text-white shadow-[0_12px_28px_rgba(0,0,0,0.16)] transition-transform duration-300 hover:-translate-y-0.5 hover:bg-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
              >
                <span>Solicitar Orçamento</span>
                <span className="grid h-8 w-8 place-items-center rounded-full bg-forest text-white transition-transform duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-ink">
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </a>
            </div>
          </header>

          {/* =================================================================
              2. PALCO PRINCIPAL DIVIDIDO (1:1 com inspiraçao (3).webp "PRECISION" +
                 Foto dos Fundadores SEM FUNDO em 1º Plano + Textos Maxtherm)
             ================================================================= */}
          <div className="relative min-h-[660px] lg:min-h-[720px]">
            {/* FUNDO DIVIDIDO: Branco Puro à Esquerda (56%) + Verde #0B7A5A à Direita (44%) */}
            <div className="pointer-events-none absolute inset-0 grid lg:grid-cols-12">
              {/* Lado Esquerdo Branco com Grade Técnica Sutil */}
              <div
                className="relative bg-white lg:col-span-7"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, rgba(30,30,30,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(30,30,30,0.05) 1px, transparent 1px)",
                  backgroundSize: "72px 72px",
                }}
              >
                {/* Marcadores de interseção verdes (+ / •) iguais à referência inspiraçao (3).webp */}
                <span className="absolute left-[72px] top-[72px] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-forest" />
                <span className="absolute left-[216px] top-[144px] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-forest" />
                <span className="absolute bottom-[144px] left-[144px] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-forest" />
              </div>

              {/* Lado Direito Verde #0B7A5A com Grade Técnica Branca Sutil */}
              <div
                className="relative bg-forest lg:col-span-5"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, rgba(255,255,255,0.09) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.09) 1px, transparent 1px)",
                  backgroundSize: "72px 72px",
                }}
              >
                {/* Brilho radial sutil atrás dos fundadores */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(circle at 45% 45%, rgba(255,255,255,0.18) 0%, transparent 68%)",
                  }}
                />
                <span className="absolute right-[72px] top-[72px] h-1.5 w-1.5 translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
                <span className="absolute bottom-[144px] right-[144px] h-1.5 w-1.5 translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
              </div>
            </div>

            {/* PALAVRA GIGANTE ATRAVESSANDO O FUNDO (Preta no lado branco, Branca no lado verde — 1:1 com PRECISION de inspiraçao (3).webp!) */}
            <motion.div
              style={{ x: wordX }}
              aria-hidden="true"
              className="gpu pointer-events-none absolute inset-x-0 top-4 z-10 select-none overflow-hidden px-4 sm:top-6 lg:px-8"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={mode.id}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-baseline justify-center font-display text-[clamp(4.2rem,13.6vw,13.2rem)] font-black uppercase leading-[0.84] tracking-[-0.055em]"
                >
                  <span className="text-ink">{mode.wordLeft}</span>
                  <span className="text-forest lg:text-white">{mode.wordRight}</span>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* CONTEÚDO PRINCIPAL SOBREPOSTO EM 12 COLUNAS */}
            <div className="relative z-20 grid min-h-[660px] items-end px-5 pt-24 sm:px-8 sm:pt-32 lg:min-h-[720px] lg:grid-cols-12 lg:px-10 lg:pt-36">
              
              {/* COLUNA ESQUERDA: Manifesto "Projetar. Laudar. Otimizar." + Descrição Dinâmica + Telemetria Viva */}
              <div className="pb-10 lg:col-span-6 lg:pb-14">
                <div className="inline-flex items-center gap-2.5 rounded-full border border-forest/25 bg-mint/60 px-4 py-1.5 text-[11.5px] font-bold text-forest shadow-sm">
                  <span className="h-2 w-2 rounded-full bg-forest" />
                  <span>{mode.pill}</span>
                </div>

                {/* Headline Empilhada (Projetar. / Laudar. / Otimizar.) */}
                <div className="mt-5">
                  <MaskText
                    as="h1"
                    onMount
                    delay={0.08}
                    text="Projetar. Laudar."
                    className="font-display text-[clamp(2.4rem,4.8vw,4.35rem)] font-extrabold leading-[0.98] tracking-[-0.04em] text-ink"
                  />
                  <div className="mt-1 flex flex-wrap items-center gap-4">
                    <MaskText
                      as="span"
                      onMount
                      delay={0.18}
                      text="Otimizar."
                      className="font-display text-[clamp(2.4rem,4.8vw,4.35rem)] font-extrabold leading-[0.98] tracking-[-0.04em] text-forest"
                    />
                    <span className="rounded-2xl border border-forest/20 bg-mint/50 px-3.5 py-1.5 font-mono text-[11px] font-bold text-forest">
                      UFOP • {CREA}
                    </span>
                  </div>
                </div>

                {/* Texto Dinâmico do Modo Selecionado */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={mode.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.3 }}
                    className="mt-5 max-w-xl"
                  >
                    <h2 className="font-display text-[17px] font-bold text-forest sm:text-[18.5px]">
                      {mode.title}
                    </h2>
                    <p className="mt-2 text-[14.5px] leading-relaxed text-ink/75 sm:text-[15.5px]">
                      {mode.desc}
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* Botões Principais */}
                <div className="mt-7 flex flex-wrap items-center gap-3.5">
                  <a
                    href="#servicos"
                    className="group inline-flex items-center gap-4 rounded-full bg-forest py-2 pl-6 pr-2 text-[12px] font-extrabold uppercase tracking-[0.05em] text-white shadow-[0_16px_36px_rgba(11,122,90,0.28)] transition-transform duration-300 hover:-translate-y-0.5 hover:bg-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
                  >
                    <span>Explorar Nossos Serviços</span>
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-ink transition-transform duration-300 group-hover:rotate-45">
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </a>

                  <a
                    href="#quem-somos"
                    className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-5 py-3 text-[12px] font-bold text-ink transition-colors hover:border-forest hover:text-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
                  >
                    <span>Conhecer os Engenheiros</span>
                  </a>
                </div>

                {/* Card Interativo de Telemetria Elétrica em Tempo Real (60fps SVG Wave) */}
                <div className="mt-8 flex max-w-lg flex-wrap items-center justify-between gap-4 rounded-2xl border border-ink/10 bg-[#F7FAF9] p-4 shadow-sm">
                  <div className="flex items-center gap-3.5">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-forest text-white shadow-sm">
                      <Zap className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-forest" />
                        <span className="font-mono text-[10.5px] font-bold uppercase tracking-wider text-forest">
                          Estabilidade & Rigor Normativo
                        </span>
                      </div>
                      <p className="mt-0.5 font-display text-[14px] font-bold text-ink">
                        {mode.statValue} — <span className="font-medium text-ink/70">{mode.statLabel}</span>
                      </p>
                    </div>
                  </div>

                  {/* Mini Osciloscópio SVG Animado */}
                  <svg
                    width="96"
                    height="32"
                    viewBox="0 0 96 32"
                    fill="none"
                    aria-hidden="true"
                    className="overflow-visible"
                  >
                    <motion.path
                      d="M 2 16 Q 14 2, 26 16 T 50 16 T 74 16 T 94 16"
                      stroke="#0B7A5A"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      fill="none"
                      initial={{ pathLength: 0, opacity: 0.4 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                    />
                    <circle cx="94" cy="16" r="3.5" fill="#0B7A5A" />
                  </svg>
                </div>
              </div>

              {/* COLUNA DIREITA: FOTO DOS FUNDADORES SEM FUNDO (/assets/fundadores-cutout.png) EM 1º PLANO + BADGES FLUTUANTES */}
              <div className="relative flex flex-col items-center justify-end lg:col-span-6">
                {/* Etiquetas Flutuantes Inclinadas (Inspiradas em inspiraçao (2).webp Voltix!) */}
                <motion.div
                  style={{ x: badgeX }}
                  className="gpu pointer-events-none absolute right-0 top-4 z-30 hidden flex-col items-end gap-2 sm:flex"
                >
                  <span className="-rotate-3 rounded-full bg-white px-4 py-1.5 text-[11px] font-extrabold text-ink shadow-lg">
                    Projetos Elétricos Sob Medida
                  </span>
                  <span className="rotate-2 rounded-full bg-ink px-4 py-1.5 text-[11px] font-extrabold text-white shadow-lg">
                    Laudos NR-10 & SPDA NBR 5419
                  </span>
                  <span className="-rotate-2 rounded-full border border-white/40 bg-forest px-4 py-1.5 text-[11px] font-extrabold text-white shadow-lg">
                    Controle e Automação • UFOP
                  </span>
                </motion.div>

                {/* Retrato Recortado SEM FUNDO (Marphiza Magalhães & Adeilson) */}
                <motion.div
                  style={{ x: cutoutX, y: cutoutY }}
                  initial={{ opacity: 0, y: 36, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                  className="gpu relative z-20 flex w-full justify-center"
                >
                  <img
                    src="/assets/fundadores-cutout.png"
                    alt="Engenheiros Eletricistas Marphiza Magalhães e Adeilson — Fundadores da MA Soluções e Engenharia"
                    width="540"
                    height="680"
                    fetchPriority="high"
                    className="h-[420px] w-auto object-contain object-bottom drop-shadow-[0_28px_45px_rgba(0,0,0,0.28)] sm:h-[510px] lg:h-[565px]"
                  />

                  {/* Card Flutuante de Credencial sobre a Base da Foto */}
                  <div className="absolute bottom-4 left-1/2 z-30 w-[92%] max-w-[430px] -translate-x-1/2 rounded-2xl border border-ink/10 bg-white/95 p-3.5 shadow-[0_20px_50px_rgba(0,0,0,0.22)] backdrop-blur-xl sm:bottom-6 sm:p-4">
                    <div className="flex items-center justify-between gap-3">
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="inline-block h-2 w-2 rounded-full bg-forest" />
                          <span className="font-mono text-[10px] font-extrabold uppercase tracking-wider text-forest">
                            ENGENHEIROS RESPONSÁVEIS • UFOP
                          </span>
                        </div>
                        <p className="mt-0.5 truncate font-display text-[15.5px] font-extrabold text-ink">
                          Marphiza Magalhães & Adeilson
                        </p>
                        <p className="truncate text-[11.5px] font-medium text-ink/65">
                          Eng. Eletricistas • Controle e Automação • {CREA}
                        </p>
                      </div>

                      <a
                        href={`${WHATSAPP}?text=${encodeURIComponent("Olá Marphiza e Adeilson! Gostaria de falar sobre um projeto de engenharia.")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Falar diretamente com os engenheiros no WhatsApp"
                        className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-forest text-white transition-transform duration-300 hover:scale-105 hover:bg-ink"
                      >
                        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* =================================================================
                3. BARRA INFERIOR DE MOTION TABS (Troca instantânea em Spring)
               ================================================================= */}
            <div
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              className="relative z-30 border-t border-ink/10 bg-white px-4 py-3.5 sm:px-8"
            >
              <div className="flex flex-col items-stretch justify-between gap-3 lg:flex-row lg:items-center">
                <div className="no-scrollbar flex items-center gap-1.5 overflow-x-auto">
                  {HERO_MODES.map((item, idx) => {
                    const isCurrent = activeMode === idx;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => {
                          setPaused(true);
                          setActiveMode(idx);
                        }}
                        className={`relative z-10 whitespace-nowrap rounded-xl px-4 py-2.5 text-[11.5px] font-extrabold uppercase tracking-wider transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest ${
                          isCurrent ? "text-white" : "text-ink/70 hover:text-ink"
                        }`}
                      >
                        {isCurrent && (
                          <motion.span
                            layoutId="heroBottomModePill"
                            transition={{ type: "spring", stiffness: 380, damping: 32 }}
                            className="absolute inset-0 -z-10 rounded-xl bg-forest shadow-[0_6px_18px_rgba(11,122,90,0.3)]"
                          />
                        )}
                        <span className="mr-1.5 font-mono opacity-65">0{idx + 1}.</span>
                        {item.title.replace("Elaboração de ", "").replace(" em Engenharia", "")}
                      </button>
                    );
                  })}
                </div>

                <div className="hidden items-center gap-3 text-[12px] font-semibold text-ink/70 xl:flex">
                  <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-forest">
                    João Monlevade • MG
                  </span>
                  <span aria-hidden="true">•</span>
                  <span className="tabular-nums">{TELEFONE}</span>
                </div>
              </div>
            </div>
          </div>

          {/* =================================================================
              4. FAIXA DE AUTORIDADES E NORMAS TÉCNICAS (Base do Hero em inspiraçao (3).webp)
             ================================================================= */}
          <div className="border-t border-ink/8 bg-[#F7FAF9] px-5 py-5 sm:px-8 lg:px-10">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {AUTHORITY_STRIP.map((auth) => {
                const Icon = auth.icon;
                return (
                  <div
                    key={auth.code}
                    className="flex items-center gap-3 rounded-xl border border-ink/6 bg-white px-3.5 py-2.5 shadow-[0_4px_12px_rgba(0,0,0,0.02)]"
                  >
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-mint text-forest">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <p className="font-mono text-[11px] font-extrabold text-ink">{auth.code}</p>
                      <p className="truncate text-[10.5px] font-medium text-ink/60">{auth.label}</p>
                    </div>
                  </div>
                );
              })}
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
                  Animação de Referência — Motion Design
                </span>
                <button
                  type="button"
                  onClick={() => setVideoOpen(false)}
                  aria-label="Fechar vídeo"
                  className="grid h-8 w-8 place-items-center rounded-full bg-ink/10 text-ink transition hover:bg-ink hover:text-white"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
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
