import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import MaskText, { FadeUp } from "./MaskText";
import { OVAL_SHOWCASE, WHATSAPP } from "../data";

/**
 * Cenas 00:06 -> 00:08 do vídeo de referência:
 * - Fundo 100% Branco Puro (#FFFFFF)
 * - 3 Colunas com Anéis Ovais Verticais em verde pastel (#0B7A5A suave) pulsando atrás dos mockups
 * - Etiquetas flutuantes que saltam nas laterais com física spring
 * - Botões quadrados escuros < > na base que deslizam o carrossel suavemente
 * - Barra Preta Flutuante (00:08) logo abaixo com emblema MA e CTA Verde #0B7A5A
 */
export default function OvalShowcaseSection() {
  const [offset, setOffset] = useState(0);

  const handleNext = () => setOffset((prev) => (prev + 1) % OVAL_SHOWCASE.length);
  const handlePrev = () => setOffset((prev) => (prev - 1 + OVAL_SHOWCASE.length) % OVAL_SHOWCASE.length);

  // Exibe 3 itens rotacionados de forma fluida
  const visibleItems = [
    OVAL_SHOWCASE[offset % OVAL_SHOWCASE.length],
    OVAL_SHOWCASE[(offset + 1) % OVAL_SHOWCASE.length],
    OVAL_SHOWCASE[(offset + 2) % OVAL_SHOWCASE.length],
  ];

  return (
    <section id="eficiencia" className="grid-lines relative bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-[1380px] px-5 sm:px-8">
        {/* Título Principal Escuro sobre Fundo Branco (00:06) */}
        <div className="mx-auto max-w-2xl text-center">
          <FadeUp>
            <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.18em] text-forest">
              [ Engenharia de Alta Precisão ]
            </p>
          </FadeUp>
          <MaskText
            text={"Eficiência e segurança em\ntoda a sua estrutura"}
            className="font-display text-[clamp(2.1rem,4.6vw,3.75rem)] font-bold leading-[1.06] tracking-[-0.04em] text-ink"
          />
        </div>

        {/* Grade de 3 Colunas com Anéis Ovais Verticais Pastel (00:06 - 00:07) */}
        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
          {visibleItems.map((item, idx) => (
            <motion.div
              key={`${item.title}-${idx}`}
              layout
              initial={{ opacity: 0, x: 40, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group flex flex-col items-center text-center"
            >
              <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-ink/50">
                {item.eyebrow}
              </span>
              <h3 className="mt-2 font-display text-[22px] font-bold tracking-[-0.025em] text-ink sm:text-[25px]">
                {item.title}
              </h3>

              {/* Palco Oval Vertical Concêntrico (1:1 com 00:06 - 00:07) */}
              <div className="relative mt-8 flex h-[420px] w-[320px] items-center justify-center">
                {/* 3 Ovais Concêntricos Verticais em Verde #0B7A5A Pastel */}
                <div className="ripple-slow pointer-events-none absolute h-[405px] w-[310px] rounded-full bg-forest/[0.045] transition-transform duration-500 group-hover:scale-105" />
                <div className="ripple-mid pointer-events-none absolute h-[350px] w-[258px] rounded-full bg-forest/[0.085] transition-transform duration-500 group-hover:scale-105" />
                <div className="ripple-fast pointer-events-none absolute h-[295px] w-[206px] rounded-full bg-forest/[0.14]" />

                {/* Etiqueta Flutuante Superior Esquerda */}
                <motion.div
                  initial={{ scale: 0.85, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + idx * 0.1, type: "spring", stiffness: 220 }}
                  className={`floaty absolute left-0 top-14 z-20 flex items-center gap-2 rounded-xl px-3.5 py-2 text-[11.5px] font-bold shadow-[0_14px_30px_rgba(0,0,0,0.12)] ${
                    idx === 1
                      ? "bg-forest text-white"
                      : "border border-ink/10 bg-white text-ink"
                  }`}
                >
                  <span
                    className={`h-2 w-2 rounded-full ${idx === 1 ? "bg-white" : "bg-forest"}`}
                  />
                  {item.chipTop}
                </motion.div>

                {/* Mockup Vertical Central */}
                <div className="relative z-10 flex h-[315px] w-[200px] flex-col justify-between overflow-hidden rounded-[30px] border-[5px] border-ink bg-white p-3 text-left shadow-[0_22px_50px_rgba(30,30,30,0.16)] transition-transform duration-500 group-hover:-translate-y-2">
                  <div>
                    <div className="mx-auto mb-2.5 h-3 w-12 rounded-full bg-ink" />
                    <div className="h-[122px] w-full overflow-hidden rounded-2xl bg-ink/5">
                      <img
                        src={item.img}
                        alt={item.cardTitle}
                        className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <h4 className="mt-2.5 text-[12px] font-extrabold leading-tight text-ink">
                      {item.cardTitle}
                    </h4>
                    <p className="mt-1 text-[10.5px] leading-snug text-ink/65">{item.cardSub}</p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {item.tags.map((t, ti) => (
                      <span
                        key={t}
                        className={`rounded-full px-2.5 py-0.5 text-[9.5px] font-bold ${
                          ti === 0
                            ? "bg-forest/15 text-forest"
                            : "bg-ink text-white"
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Etiqueta Flutuante Inferior Direita */}
                <motion.div
                  initial={{ scale: 0.85, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + idx * 0.1, type: "spring", stiffness: 220 }}
                  className={` absolute bottom-14 right-0 z-20 flex items-center gap-2 rounded-xl px-3.5 py-2 text-[11.5px] font-bold shadow-[0_14px_30px_rgba(0,0,0,0.12)] ${
                    idx === 2
                      ? "bg-ink text-white"
                      : "border border-ink/10 bg-white text-ink"
                  }`}
                >
                  <span className="h-2 w-2 rounded-full bg-forest" />
                  {item.chipBottom}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Botões Pretos Quadrados < > na Base (1:1 com 00:07 - 00:08) */}
        <div className="mt-10 flex items-center justify-center gap-2.5">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Anterior"
            className="grid h-11 w-11 place-items-center rounded-xl bg-ink text-white shadow-md transition hover:scale-105 hover:bg-forest"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Próximo"
            className="grid h-11 w-11 place-items-center rounded-xl bg-ink text-white shadow-md transition hover:scale-105 hover:bg-forest"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* BARRA PRETA FLUTUANTE NO FUNDO BRANCO (1:1 com 00:08 do vídeo!) */}
        <FadeUp delay={0.1} y={40} className="mx-auto mt-16 max-w-[1140px]">
          <div className="flex flex-col items-center justify-between gap-6 rounded-[22px] bg-ink px-6 py-5 text-white shadow-[0_24px_60px_-15px_rgba(30,30,30,0.28)] sm:flex-row sm:px-9 sm:py-6">
            <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white p-1.5 shadow">
                <img src="/assets/logo-emblem.png" alt="MA" className="h-full w-full object-contain" />
              </span>
              <h3 className="font-display text-[20px] font-bold tracking-[-0.025em] text-white sm:text-[24px]">
                Transforme desafios em soluções seguras com a MA Engenharia
              </h3>
            </div>

            <a
              href={`${WHATSAPP}?text=${encodeURIComponent("Olá! Gostaria de solicitar um orçamento com a MA Soluções e Engenharia.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex shrink-0 items-center gap-2 overflow-hidden rounded-full bg-forest px-7 py-3.5 text-[12px] font-bold uppercase tracking-wider text-white transition"
            >
              <span className="absolute inset-0 -translate-x-full rounded-full bg-white transition-transform duration-500 ease-out group-hover:translate-x-0" />
              <span className="relative transition-colors group-hover:text-ink">Solicitar Orçamento</span>
              <ArrowUpRight className="relative h-4 w-4 transition-colors group-hover:text-ink" />
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
