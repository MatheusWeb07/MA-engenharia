import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Play, ShieldCheck, X } from "lucide-react";
import MaskText from "./MaskText";
import { CREA, HERO_TABS, WHATSAPP } from "../data";

const PILL_NAV = [
  { label: "Início", href: "#inicio" },
  { label: "Quem Somos", href: "#quem-somos" },
  { label: "Serviços", href: "#servicos" },
  { label: "Compromisso", href: "#compromisso" },
  { label: "Contato", href: "#contato" },
];

export default function HeroMaxtherm() {
  const [activeNav, setActiveNav] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);

  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 600], [0, 40]);

  // Transição automática suave dos slides do hero
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % 3);
    }, 4800);
    return () => clearInterval(timer);
  }, [paused]);

  const currentTab = HERO_TABS[activeSlide];

  return (
    <section id="inicio" className="bg-white p-3 sm:p-5 lg:p-6">
      {/* MOLDURA PRINCIPAL ARREDONDADA — 1:1 COM A INSPIRAÇÃO 1 (inspiraçao.webp / Maxtherm) */}
      <div className="relative mx-auto max-w-[1440px] overflow-hidden rounded-[26px] border border-ink/8 bg-[#EAF3F0] shadow-[0_24px_70px_-24px_rgba(11,122,90,0.18)] sm:rounded-[32px]">
        
        {/* FUNDO ATMOSFÉRICO: Degradê Verde #0B7A5A no topo + Imagem Arquitetônica à direita */}
        <motion.div style={{ y: bgY }} className="gpu pointer-events-none absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentTab.imageLeft}
              src={currentTab.imageLeft}
              alt={currentTab.title}
              width="1200"
              height="800"
              fetchPriority="high"
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 0.92, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-0 h-full w-full object-cover object-center lg:w-[66%]"
            />
          </AnimatePresence>

          {/* Degradê idêntico à inspiração 1: Topo escuro para contraste dos botões + névoa limpa à esquerda */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(7,78,56,0.92) 0%, rgba(11,122,90,0.55) 18%, rgba(234,243,240,0.88) 46%, rgba(245,249,247,0.96) 100%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(234,243,240,0.98) 0%, rgba(234,243,240,0.92) 46%, rgba(234,243,240,0.35) 75%, rgba(234,243,240,0.06) 100%)",
            }}
          />
          <div
            className="absolute inset-x-0 top-0 h-32"
            style={{
              background: "linear-gradient(180deg, rgba(6,70,50,0.95) 0%, rgba(11,122,90,0.6) 65%, transparent 100%)",
            }}
          />
        </motion.div>

        {/* CONTEÚDO DO HERO */}
        <div className="relative z-10 flex min-h-[660px] flex-col justify-between p-5 sm:p-8 lg:min-h-[740px] lg:p-12">
          
          {/* 1. BARRA DE NAVEGAÇÃO EM PÍLULAS INDIVIDUAIS (1:1 inspiraçao.webp) */}
          <header className="flex flex-wrap items-center justify-between gap-4">
            <a href="#inicio" className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-white p-1.5 shadow-md">
                <img
                  src="/assets/logo-emblem.png"
                  alt="MA Soluções e Engenharia"
                  width="36"
                  height="36"
                  className="h-full w-full object-contain"
                />
              </span>
              <div className="leading-none">
                <span className="block font-display text-[19px] font-extrabold tracking-[-0.03em] text-white sm:text-[21px]">
                  MA <span className="font-normal text-white/90">SOLUÇÕES</span>
                </span>
                <span className="mt-0.5 block font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-white/80">
                  E ENGENHARIA LTDA
                </span>
              </div>
            </a>

            {/* Pílulas Centrais de Navegação (Sem numeração, limpo) */}
            <nav aria-label="Menu principal" className="hidden items-center gap-2 xl:flex">
              {PILL_NAV.map((item, i) => {
                const isActive = activeNav === i;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setActiveNav(i)}
                    onMouseEnter={() => setActiveNav(i)}
                    className={`relative rounded-full px-5 py-2 text-[12px] font-bold tracking-[0.03em] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                      isActive
                        ? "text-ink"
                        : "border border-white/45 text-white hover:border-white"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="cleanMaxthermNavPill"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        className="absolute inset-0 -z-10 rounded-full bg-white shadow-md"
                      />
                    )}
                    {item.label}
                  </a>
                );
              })}
            </nav>

            {/* Botão Direito: Pílula Branca + Círculo Verde com Seta ↗ */}
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={() => setVideoOpen(true)}
                aria-label="Assistir animação de referência em motion design"
                className="hidden items-center gap-2 rounded-full border border-white/40 bg-white/15 px-4 py-2 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur-md transition hover:bg-white/25 sm:inline-flex"
              >
                <Play className="h-3 w-3 fill-current" aria-hidden="true" />
                <span>Motion Ref</span>
              </button>

              <a
                href={`${WHATSAPP}?text=${encodeURIComponent("Olá! Gostaria de solicitar um orçamento com a MA Soluções e Engenharia.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-4 rounded-full bg-white py-1.5 pl-6 pr-1.5 text-[11.5px] font-extrabold uppercase tracking-[0.06em] text-ink shadow-[0_12px_30px_rgba(0,0,0,0.16)] transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
              >
                <span>Solicitar Orçamento</span>
                <span className="grid h-9 w-9 place-items-center rounded-full bg-forest text-white transition-transform duration-300 group-hover:rotate-45 group-hover:bg-ink">
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </a>
            </div>
          </header>

          {/* 2. CORPO CENTRAL DO HERO: FRASE DE IMPACTO "Projetos inteligentes, resultados eficientes." */}
          <div className="my-auto pt-10 pb-6 lg:pt-14">
            <div className="relative max-w-[960px]">
              
              {/* Linha 1 da Frase de Impacto + Parágrafo Flutuante ao lado (1:1 com a referência) */}
              <div className="flex flex-col items-start gap-4 lg:flex-row lg:items-center lg:gap-10">
                <MaskText
                  as="h1"
                  onMount
                  delay={0.08}
                  text="Projetos"
                  className="font-display text-[clamp(3.4rem,8.2vw,6.8rem)] font-extrabold leading-[0.92] tracking-[-0.045em] text-forest"
                />
                <motion.p
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="max-w-[370px] text-[14px] font-medium leading-relaxed text-ink/80 sm:text-[15px]"
                >
                  A <strong>MA | Soluções e Engenharia</strong> entrega execução completa em engenharia elétrica e
                  automação — do projeto personalizado às aprovações normativas e laudos técnicos de alta precisão.
                </motion.p>
              </div>

              {/* Linha 2 da Frase de Impacto */}
              <MaskText
                as="div"
                onMount
                delay={0.18}
                text="inteligentes,"
                className="font-display text-[clamp(3.4rem,8.2vw,6.8rem)] font-extrabold leading-[0.92] tracking-[-0.045em] text-forest"
              />

              {/* Linha 3 da Frase de Impacto */}
              <MaskText
                as="div"
                onMount
                delay={0.28}
                text="resultados eficientes."
                className="font-display text-[clamp(2.9rem,6.8vw,5.6rem)] font-extrabold leading-[0.96] tracking-[-0.04em] text-ink"
              />

              {/* Credencial + Botão Pílula Conhecer Serviços (1:1 inspiraçao.webp) */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="mt-8 flex flex-col items-start gap-5"
              >
                <p className="flex items-center gap-2 text-[14px] font-bold tracking-[-0.01em] text-forest sm:text-[15px]">
                  <ShieldCheck className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>Registrada no {CREA} • Engenheiros Formados pela UFOP</span>
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="#servicos"
                    className="group inline-flex items-center gap-5 rounded-full bg-white py-2 pl-7 pr-2 text-[12px] font-extrabold uppercase tracking-[0.06em] text-ink shadow-[0_16px_38px_rgba(11,122,90,0.18)] transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
                  >
                    <span>Conhecer Nossos Serviços</span>
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-forest text-white transition-transform duration-300 group-hover:rotate-45 group-hover:bg-ink">
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>

          {/* 3. BARRA INFERIOR DE MOTION TABS — LIMPA E SEM NÚMEROS (Animação fluida em spring) */}
          <div
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            className="mt-6 flex flex-col items-stretch justify-between gap-4 rounded-2xl border border-white/75 bg-white/90 p-2.5 shadow-[0_18px_45px_rgba(0,0,0,0.08)] backdrop-blur-xl lg:flex-row lg:items-center"
          >
            {/* Tabs com pílula verde deslizante */}
            <div className="no-scrollbar flex items-center gap-1.5 overflow-x-auto">
              {HERO_TABS.slice(0, 3).map((t, idx) => {
                const isCurrent = activeSlide === idx;
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => {
                      setPaused(true);
                      setActiveSlide(idx);
                    }}
                    className={`relative z-10 whitespace-nowrap rounded-xl px-5 py-3 text-[11.5px] font-extrabold uppercase tracking-wider transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest ${
                      isCurrent ? "text-white" : "text-ink/70 hover:text-ink"
                    }`}
                  >
                    {isCurrent && (
                      <motion.span
                        layoutId="cleanHeroSlidePill"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                        className="absolute inset-0 -z-10 rounded-xl bg-forest shadow-[0_6px_18px_rgba(11,122,90,0.32)]"
                      />
                    )}
                    {t.label}
                  </button>
                );
              })}
            </div>

            {/* Resumo dinâmico da tab ativa */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTab.id}
                initial={{ opacity: 0, x: 14 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -14 }}
                transition={{ duration: 0.3 }}
                className="flex flex-wrap items-center justify-between gap-4 px-3 py-1 lg:justify-end"
              >
                <div className="flex items-center gap-2.5">
                  <span className="inline-flex h-2.5 w-2.5 rounded-full bg-forest" />
                  <span className="text-[13px] font-bold text-ink">{currentTab.subtitle}</span>
                </div>
                <span className="rounded-full bg-forest/10 px-3.5 py-1 font-mono text-[11px] font-bold text-forest">
                  {currentTab.metric}
                </span>
              </motion.div>
            </AnimatePresence>
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
                  aria-label="Fechar"
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
