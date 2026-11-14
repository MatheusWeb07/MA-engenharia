import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import WaveBackground from "./WaveBackground";
import Particles from "./Particles";
import MaskText from "./MaskText";
import ShinyText from "./react-bits/ShinyText";
import BlurText from "./react-bits/BlurText";
import DecryptedText from "./react-bits/DecryptedText";
import Magnet from "./react-bits/Magnet";
import { CITACAO, CREA, FUNDADORES, NAV_LINKS, SLOGAN, SUBTITULO, WHATSAPP } from "../data";

function MenuPanel() {
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(window.innerWidth >= 1024), []);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
      className="relative w-[min(300px,calc(100vw-4.5rem))] overflow-hidden rounded-3xl border border-white/25 bg-white/15 p-3 shadow-[0_20px_60px_-20px_rgba(2,40,44,0.6)] backdrop-blur-xl"
      style={{
        background:
          "linear-gradient(160deg, rgba(255,255,255,0.28), rgba(255,255,255,0.08) 60%, rgba(11,122,90,0.25))",
      }}
    >
      <div className="flex justify-end">
        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="flex items-center gap-3 rounded-full bg-white/95 px-5 py-2 text-sm font-semibold text-ink shadow-sm transition hover:bg-white"
        >
          <span className="flex flex-col gap-[5px]">
            <span
              className={`block h-[1.5px] w-5 bg-ink transition ${
                open ? "translate-y-[3.2px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] w-5 bg-ink transition ${
                open ? "-translate-y-[3.2px] -rotate-45" : ""
              }`}
            />
          </span>
          Menu
        </button>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
            className="overflow-hidden px-2 pt-2"
          >
            {[
              ["Início", "#inicio"],
              ["Quem Somos", "#quem-somos"],
              ["Serviços", "#servicos"],
              ["Compromisso", "#compromisso"],
              ["Contato", "#contato"],
            ].map(([label, href], i) => (
              <motion.li
                key={href}
                initial={{ opacity: 0, x: 14 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.08 + i * 0.05 }}
              >
                <a
                  href={href}
                  onClick={() => {
                    if (window.innerWidth < 1024) setOpen(false);
                  }}
                  className="block py-[8px] text-[15px] font-semibold text-white/95 transition hover:translate-x-1 hover:text-white"
                >
                  {label}
                </a>
              </motion.li>
            ))}
            <li className="h-2" />
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function HeroANL() {
  const colunas = [
    { nome: "Projetos Elétricos", subtitulo: "Dimensionamento NBR 5410 sob medida" },
    { nome: "Laudos Técnicos", subtitulo: "Inspeções e medições periciais NR-10 e SPDA" },
    { nome: "Consultoria Técnica", subtitulo: "Otimização de sistemas e adequação técnica" },
    { nome: "Controle & Automação", subtitulo: "Engenharia inteligente com formação UFOP" },
  ];

  return (
    <section id="inicio" className="px-3 pt-3 sm:px-5 sm:pt-5 bg-white">
      {/* Moldura Arredondada Monumental (Nível ANL) com o Shader WebGL de Vidro */}
      <div className="relative mx-auto flex min-h-[calc(100svh-1.5rem)] max-w-[1900px] flex-col justify-between overflow-hidden rounded-[26px] text-white shadow-[0_30px_90px_-25px_rgba(11,122,90,0.5)] sm:min-h-[calc(100svh-2.5rem)] sm:rounded-[32px]">
        
        {/* SHADER DE VIDRO 3D WEBGL EM TEMPO REAL (O verdadeiro vidro fluido da referência!) */}
        <WaveBackground />
        <Particles count={55} />

        {/* Linhas diagonais arquitetônicas sutis */}
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-55deg, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 90px)",
          }}
        />

        <div className="relative z-10 flex flex-1 flex-col justify-between gap-8 p-5 sm:p-8 lg:p-12">
          
          {/* TOPO: LOGO INSTITUCIONAL + MENU DE VIDRO */}
          <div className="flex items-start justify-between gap-4">
            <motion.a
              href="#inicio"
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center gap-3"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white p-1.5 shadow-[0_8px_24px_rgba(0,0,0,0.2)] sm:h-14 sm:w-14">
                <img
                  src="/assets/logo-emblem.png"
                  alt="MA Engenharia"
                  className="h-full w-full object-contain"
                />
              </span>
              <span className="font-display text-[22px] font-extrabold uppercase leading-[0.92] tracking-[-0.04em] text-white sm:text-[28px]">
                MA <span className="font-light text-mint">SOLUÇÕES</span>
                <span className="block font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-white/80 sm:text-[11px]">
                  E ENGENHARIA LTDA
                </span>
              </span>
            </motion.a>

            <MenuPanel />
          </div>

          {/* MEIO: FRASE ENTRE COLCHETES + CARTÃO BRANCO ARQUITETÔNICO (1:1 COM ANL!) */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 1 }}
              className="mb-5 max-w-[800px] text-[12px] font-bold uppercase leading-snug tracking-wider text-white sm:text-[13px] lg:mb-8"
            >
              [ <ShinyText text={`${SLOGAN}.`} shimmerColor="rgba(255, 255, 255, 0.95)" className="font-mono text-white" /> ]
            </motion.div>

            {/* O CARTÃO BRANCO ICONICO ANL */}
            <motion.div
              initial={{ opacity: 0, y: 55 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
              className="grid gap-8 rounded-[24px] bg-white p-6 text-ink shadow-[0_30px_90px_-30px_rgba(0,0,0,0.45)] sm:p-9 lg:grid-cols-[1.35fr_1fr] lg:gap-10 lg:p-12"
            >
              <div>
                <MaskText
                  as="h1"
                  onMount
                  delay={0.5}
                  text={"MA | SOLUÇÕES\nE ENGENHARIA"}
                  className="font-display text-[clamp(2.2rem,5.6vw,5.2rem)] font-bold uppercase leading-[0.95] tracking-[-0.045em] text-ink"
                />
                
                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-forest/10 px-3 py-1 font-mono text-[11px] font-bold text-forest">
                    {FUNDADORES}
                  </span>
                  <span className="font-mono text-[11px] font-semibold text-ink/65">
                    <DecryptedText text={CREA} speed={30} />
                  </span>
                </div>
              </div>

              <div className="flex flex-col justify-between gap-7">
                <p className="text-[15px] font-medium leading-relaxed tracking-[-0.01em] text-ink/80 sm:text-[17px]">
                  “{CITACAO}”
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <Magnet magnetStrength={3}>
                    <a
                      href={`${WHATSAPP}?text=${encodeURIComponent("Olá! Vim pelo site da MA Soluções e Engenharia e gostaria de solicitar um orçamento.")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative inline-flex h-14 items-center justify-center gap-3 overflow-hidden rounded-full bg-forest px-8 text-[14px] font-bold uppercase tracking-wider text-white shadow-lg transition-transform hover:-translate-y-0.5 sm:h-16 sm:px-10 sm:text-[15px]"
                    >
                      <span className="absolute inset-0 -translate-x-full rounded-full bg-ink transition-transform duration-500 ease-out group-hover:translate-x-0" />
                      <span className="relative">Fale Conosco</span>
                      <ArrowUpRight className="relative h-4 w-4 transition group-hover:rotate-12" />
                    </a>
                  </Magnet>

                  <span className="text-[12px] font-semibold text-ink/60">
                    Atendimento Direto em MG
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* BASE: 4 ÁREAS DO PORTFÓLIO EM VIDRO + INDICAÇÃO DE ROLAGEM */}
          <div className="grid grid-cols-1 gap-3 border-t border-white/15 pt-5 sm:grid-cols-2 sm:gap-5 sm:border-0 sm:pt-0 lg:grid-cols-4 lg:gap-7">
            {colunas.map((c, i) => (
              <motion.a
                key={c.nome}
                href="#servicos"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + i * 0.1, duration: 0.8 }}
                className="group block rounded-2xl bg-white/[0.08] p-4 backdrop-blur-md transition hover:bg-white/[0.16] sm:bg-white/[0.06]"
              >
                <div className="flex items-center gap-2.5 text-[14.5px] font-bold uppercase leading-tight tracking-[-0.01em] sm:text-[16px]">
                  <span className="shrink-0 font-mono text-xs text-mint">[ {i + 1} ]</span>
                  <span className="transition group-hover:translate-x-1">{c.nome}</span>
                </div>
                <p className="mt-1.5 text-[12px] leading-snug text-white/80 sm:text-[12.5px]">
                  {c.subtitulo}
                </p>
              </motion.a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
