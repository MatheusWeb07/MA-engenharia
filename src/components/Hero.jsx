import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Check, Play, ShieldCheck, Sparkles, X } from "lucide-react";
import WaveBackground from "./WaveBackground";
import Particles from "./Particles";
import MaskText from "./MaskText";
import { CREA, HERO_TABS, NAV_LINKS, TELEFONE, WHATSAPP } from "../data";

export default function Hero() {
  const [activeTab, setActiveTab] = useState(0);
  const [paused, setPaused] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const sectionRef = useRef(null);

  // Scroll-linked choreography igual ao vídeo (00:00 -> 00:01):
  // Enquanto rola, o texto superior sobe suavemente e o palco de tabs + mockups ganha escala!
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const headerY = useTransform(scrollYProgress, [0, 0.45], [0, -60]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.38], [1, 0.15]);
  const stageScale = useTransform(scrollYProgress, [0, 0.45], [0.97, 1.03]);
  const stageY = useTransform(scrollYProgress, [0, 0.45], [0, -28]);

  // Ciclo automático das tabs (igual ao vídeo 00:00 -> 00:01) até o usuário interagir
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % HERO_TABS.length);
    }, 3600);
    return () => clearInterval(t);
  }, [paused]);

  const tab = HERO_TABS[activeTab];

  return (
    <section ref={sectionRef} id="inicio" className="bg-white pb-6">
      {/* 1. TOP WHITE NAVBAR (1:1 com 00:00 do vídeo) */}
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-4 py-3.5 sm:px-8">
        <motion.a
          href="#inicio"
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-3"
        >
          <img
            src="/assets/logo-ma.png"
            alt="MA Soluções e Engenharia"
            className="h-10 w-auto object-contain sm:h-11"
          />
        </motion.a>

        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="hidden items-center gap-7 text-[14px] font-semibold text-ink/80 lg:flex"
        >
          {NAV_LINKS.slice(0, 6).map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="relative py-1 transition-colors hover:text-forest after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-forest after:transition-all hover:after:w-full"
            >
              {label}
            </a>
          ))}
        </motion.nav>

        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex items-center gap-4"
        >
          <a
            href="#contato"
            className="hidden font-mono text-[11.5px] font-semibold uppercase tracking-wider text-ink/75 transition hover:text-forest sm:inline-block"
          >
            {CREA}
          </a>
          <a
            href={`${WHATSAPP}?text=${encodeURIComponent("Olá! Gostaria de solicitar um orçamento com a MA Soluções e Engenharia.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-ink px-5 py-3 text-[12px] font-bold uppercase tracking-wider text-white shadow-sm transition"
          >
            <span className="absolute inset-0 -translate-x-full rounded-full bg-forest transition-transform duration-500 ease-out group-hover:translate-x-0" />
            <span className="relative">Solicitar Orçamento</span>
            <ArrowUpRight className="relative h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>
      </div>

      {/* 2. HERO GRADIENT STAGE COM WEBGL RIBBONS + TABS BRANCAS + MOCKUPS (00:00 -> 00:01) */}
      <div className="mx-auto max-w-[1440px] px-3 sm:px-5">
        <div className="relative overflow-hidden rounded-[28px] text-white shadow-[0_30px_90px_-30px_rgba(11,122,90,0.45)] sm:rounded-[34px]">
          <WaveBackground />
          <Particles count={55} />

          {/* Linhas diagonais sutis */}
          <div
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "repeating-linear-gradient(-55deg, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 90px)",
            }}
          />

          <div className="relative z-10 px-4 pt-12 sm:px-8 sm:pt-16 lg:px-14 lg:pt-20">
            {/* Bloco Superior do Hero com Parallax de Scroll */}
            <motion.div style={{ y: headerY, opacity: headerOpacity }} className="mx-auto max-w-4xl text-center">
              {/* Pílula Branca Superior (igual a 00:00 do vídeo) */}
              <motion.div
                initial={{ opacity: 0, y: 18, scale: 0.92 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
                className="mx-auto mb-7 inline-flex items-center gap-3 rounded-full bg-white px-4 py-1.5 text-ink shadow-[0_12px_30px_rgba(0,0,0,0.18)]"
              >
                <span className="flex items-center gap-1.5 border-r border-ink/10 pr-2.5">
                  <span className="grid h-5 w-5 place-items-center rounded bg-forest text-[10px] font-extrabold text-white">
                    MA
                  </span>
                  <span className="rounded bg-ink/10 px-1.5 py-0.5 font-mono text-[10px] font-bold text-ink">
                    UFOP
                  </span>
                </span>
                <span className="text-[12px] tracking-widest text-forest">★★★★★</span>
                <span className="text-[12px] font-bold tracking-tight text-ink">
                  Engenharia Elétrica &amp; Automação
                </span>
              </motion.div>

              {/* Título Principal com máscara palavra por palavra */}
              <MaskText
                as="h1"
                onMount
                delay={0.15}
                text={"Projetos inteligentes para\nresultados eficientes"}
                className="font-display text-[clamp(2.35rem,5.6vw,4.75rem)] font-bold leading-[1.03] tracking-[-0.04em] text-white"
              />

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.55 }}
                className="mx-auto mt-5 max-w-2xl text-[15.5px] font-normal leading-relaxed text-white/90 sm:text-[17.5px]"
              >
                Unimos conhecimento técnico, inovação e conformidade normativa na elaboração de{" "}
                <strong className="font-semibold text-white">projetos elétricos, consultorias e laudos técnicos</strong>{" "}
                sob medida.
              </motion.p>

              {/* Botões Centrais (Preto Sólido + Vidro Fosco igual a 00:00) */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="mt-8 flex flex-wrap items-center justify-center gap-3.5"
              >
                <a
                  href={`${WHATSAPP}?text=${encodeURIComponent("Olá! Vim pelo site da MA Soluções e Engenharia e gostaria de solicitar um orçamento.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-ink px-7 py-4 text-[12.5px] font-bold uppercase tracking-wider text-white shadow-[0_14px_34px_rgba(0,0,0,0.28)] transition hover:-translate-y-0.5"
                >
                  <span className="absolute inset-0 -translate-x-full rounded-full bg-white transition-transform duration-500 ease-out group-hover:translate-x-0" />
                  <span className="relative transition-colors group-hover:text-ink">Solicitar Orçamento</span>
                  <ArrowUpRight className="relative h-4 w-4 transition-colors group-hover:text-ink" />
                </a>

                <button
                  type="button"
                  onClick={() => setVideoOpen(true)}
                  className="inline-flex items-center gap-2.5 rounded-full border border-white/35 bg-white/15 px-6 py-4 text-[12.5px] font-bold uppercase tracking-wider text-white backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/25"
                >
                  <Play className="h-3.5 w-3.5 fill-current" />
                  <span>Ver Animação de Referência</span>
                </button>
              </motion.div>
            </motion.div>

            {/* 3. BARRA BRANCA DE TABS + PALCO DE VIDRO COM DOIS MOCKUPS (00:00 -> 00:01) */}
            <motion.div
              style={{ scale: stageScale, y: stageY }}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              className="mx-auto mt-12 max-w-[1080px]"
            >
              {/* Barra Branca com Pílula Verde Deslizante (Framer Motion layoutId) */}
              <div className="no-scrollbar relative mx-auto mb-5 flex items-center justify-between gap-1 overflow-x-auto rounded-2xl bg-white p-1.5 text-ink shadow-[0_18px_45px_rgba(0,0,0,0.22)]">
                {HERO_TABS.map((item, idx) => {
                  const isActive = idx === activeTab;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => {
                        setPaused(true);
                        setActiveTab(idx);
                      }}
                      className={`relative z-10 flex-1 whitespace-nowrap rounded-xl px-4 py-3 text-[11.5px] font-extrabold uppercase tracking-wider transition-colors duration-300 sm:text-[12px] ${
                        isActive ? "text-white" : "text-ink/75 hover:text-ink"
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="heroActiveTabPill"
                          transition={{ type: "spring", stiffness: 360, damping: 30 }}
                          className="absolute inset-0 -z-10 rounded-xl bg-forest shadow-[0_6px_18px_rgba(11,122,90,0.4)]"
                        />
                      )}
                      {item.label}
                    </button>
                  );
                })}
              </div>

              {/* Moldura de Vidro Fosco com os 2 Mockups Verticais Animados */}
              <div className="relative overflow-hidden rounded-t-[30px] border border-b-0 border-white/40 bg-white/15 px-5 pt-8 backdrop-blur-2xl sm:px-10 sm:pt-10">
                {/* Etiquetas laterais flutuantes dentro do palco */}
                <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-white/20 pb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="inline-flex h-2.5 w-2.5 rounded-full bg-white shadow-[0_0_10px_#fff]" />
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-white/90">
                      {tab.badge}
                    </span>
                  </div>
                  <span className="rounded-full bg-ink/80 px-3.5 py-1 text-xs font-bold text-white backdrop-blur-md">
                    {tab.metric}
                  </span>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={tab.id}
                    initial={{ opacity: 0, y: 36, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -24, scale: 0.96 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col items-center justify-center gap-7 md:flex-row md:items-end md:gap-10"
                  >
                    {/* MOCKUP ESQUERDO */}
                    <div className="w-full max-w-[305px] rounded-t-[36px] border-[7px] border-b-0 border-ink bg-white p-4 pb-6 text-ink shadow-[0_24px_60px_rgba(0,0,0,0.32)]">
                      <div className="mx-auto mb-3 h-4 w-20 rounded-full bg-ink" />
                      <div className="mb-3 flex items-center justify-between text-[11px] font-bold">
                        <span>9:41</span>
                        <span className="rounded-full bg-forest/15 px-2.5 py-0.5 text-[10px] font-extrabold uppercase text-forest">
                          ● {tab.label}
                        </span>
                        <span className="text-ink/50">MA</span>
                      </div>

                      <div className="relative mx-auto my-2 h-24 w-24 overflow-hidden rounded-full border-[3px] border-forest shadow-md">
                        <img src={tab.imageLeft} alt={tab.tagLeft} className="h-full w-full object-cover" />
                      </div>
                      <div className="relative z-10 -mt-3.5 mx-auto table rounded-full bg-forest px-3.5 py-1 text-[10.5px] font-bold text-white shadow">
                        {tab.tagLeft}
                      </div>

                      <div className="mt-4 flex items-center gap-3 rounded-2xl bg-[#F3F6F5] p-3">
                        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white p-1.5 shadow-sm">
                          <img src="/assets/logo-emblem.png" alt="MA" className="h-full w-full object-contain" />
                        </span>
                        <div className="text-left">
                          <p className="text-[12px] font-extrabold leading-tight text-ink">{tab.title}</p>
                          <p className="mt-0.5 text-[10.5px] leading-snug text-ink/65">{tab.descLeft}</p>
                        </div>
                      </div>

                      <div className="mt-3.5 flex items-center justify-between border-t border-ink/10 pt-3 text-[11px] font-bold text-ink/70">
                        <span>Conformidade Normativa</span>
                        <span className="grid h-6 w-6 place-items-center rounded-full bg-forest text-white">
                          <Check className="h-3.5 w-3.5" />
                        </span>
                      </div>
                    </div>

                    {/* MOCKUP DIREITO (Com barras de onda animadas idênticas a 00:00 do vídeo!) */}
                    <div className="w-full max-w-[305px] rounded-t-[36px] border-[7px] border-b-0 border-ink bg-white p-4 pb-6 text-ink shadow-[0_24px_60px_rgba(0,0,0,0.32)]">
                      <div className="mx-auto mb-3 h-4 w-20 rounded-full bg-ink" />
                      <div className="mb-3 flex items-center justify-between text-[11px] font-bold">
                        <span>9:41</span>
                        <span className="rounded-full bg-ink/10 px-2.5 py-0.5 text-[10px] font-extrabold uppercase text-ink">
                          ● {CREA}
                        </span>
                        <span className="text-forest">UFOP</span>
                      </div>

                      <div className="relative mx-auto my-2 h-24 w-24 overflow-hidden rounded-full border-[3px] border-ink shadow-md">
                        <img
                          src={tab.imageRight}
                          alt={tab.tagRight}
                          className="h-full w-full object-cover object-top"
                        />
                      </div>
                      <div className="relative z-10 -mt-3.5 mx-auto table rounded-full bg-ink px-3.5 py-1 text-[10.5px] font-bold text-white shadow">
                        {tab.tagRight}
                      </div>

                      {/* Onda de frequência animada em tempo real (1:1 vídeo 00:00) */}
                      <div className="my-3.5 flex h-9 items-center justify-center gap-[3.5px]">
                        {[12, 24, 16, 30, 18, 28, 14, 32, 20, 26, 15, 29, 18, 22].map((h, i) => (
                          <motion.span
                            key={i}
                            animate={{ height: [h * 0.55, h, h * 0.65] }}
                            transition={{
                              duration: 1.1,
                              repeat: Infinity,
                              delay: i * 0.07,
                              ease: "easeInOut",
                            }}
                            className={`w-[3px] rounded-full ${i % 2 === 0 ? "bg-forest" : "bg-ink"}`}
                            style={{ height: h }}
                          />
                        ))}
                      </div>

                      <p className="px-2 text-center text-[11.5px] font-semibold leading-snug text-ink/75">
                        {tab.descRight}
                      </p>

                      <div className="mt-3.5 flex items-center justify-between border-t border-ink/10 pt-3 text-[11px] font-bold text-ink/70">
                        <span>{TELEFONE}</span>
                        <a
                          href={`${WHATSAPP}?text=${encodeURIComponent(`Olá! Quero saber mais sobre ${tab.title} da MA Engenharia.`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="grid h-6 w-6 place-items-center rounded-full bg-ink text-white transition hover:bg-forest"
                        >
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Modal do Vídeo de Referência Principal */}
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
              initial={{ scale: 0.92, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-ink/10 px-6 py-4">
                <span className="font-display text-sm font-bold uppercase tracking-wider text-ink">
                  Animação de Referência — MA Soluções e Engenharia
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
