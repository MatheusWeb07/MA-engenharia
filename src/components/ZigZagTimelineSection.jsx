import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, CheckCircle2, ShieldCheck } from "lucide-react";
import MaskText, { FadeUp } from "./MaskText";
import { CREA, WHATSAPP, ZIGZAG_SERVICOS } from "../data";

/**
 * Cenas 00:09 -> 00:14 do vídeo de referência:
 * - Fundo 100% Branco Puro (#FFFFFF)
 * - Linha Vertical Central fina (2px) com preenchimento dinâmico em #0B7A5A e Ponto Viajante no Scroll
 * - 4 Seções em Zig-Zag com Cards Quadrados Arredondados em Gradiente Verde/Preto
 *   contendo Mockups Verticais que sobem com efeito 3D + Etiquetas Flutuantes (00:10)
 */
export default function ZigZagTimelineSection() {
  const timelineRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 65%", "end 45%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 26,
    restDelta: 0.001,
  });

  const lineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="servicos" className="relative bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-[1260px] px-5 sm:px-8">
        {/* Título Principal Centralizado (00:09) */}
        <div className="mx-auto max-w-2xl text-center">
          <FadeUp>
            <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.18em] text-forest">
              [ Portfólio de Soluções ]
            </p>
          </FadeUp>
          <MaskText
            text={"Confiabilidade técnica &\nresultados eficientes"}
            className="font-display text-[clamp(2.1rem,4.6vw,3.75rem)] font-bold leading-[1.06] tracking-[-0.04em] text-ink"
          />
        </div>

        {/* Container com a Linha Vertical Central e Ponto Viajante (00:09 -> 00:14) */}
        <div ref={timelineRef} className="relative mt-20">
          {/* Trilho Central (Desktop) */}
          <div className="pointer-events-none absolute bottom-0 left-1/2 top-0 hidden w-[2px] -translate-x-1/2 bg-ink/10 lg:block">
            <motion.div style={{ height: lineHeight }} className="w-full bg-forest" />
            <motion.span
              style={{ top: lineHeight }}
              className="absolute left-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-forest shadow-[0_0_0_4px_rgba(11,122,90,0.25)]"
            />
          </div>

          <div className="space-y-24 lg:space-y-36">
            {/* ROW 1 (00:09): Esquerda Card Visual / Direita Texto — PROJETOS ELÉTRICOS */}
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-24">
              <motion.div
                initial={{ opacity: 0, y: 50, rotateX: 12 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "0px 0px -12% 0px" }}
                transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformPerspective: 1100 }}
                className="group relative mx-auto flex h-[430px] w-full max-w-[465px] items-end justify-center overflow-hidden rounded-[32px] px-7 pt-10 shadow-[0_28px_70px_-20px_rgba(11,122,90,0.38)]"
                data-hover
              >
                <div
                  className=" absolute inset-0"
                  style={{
                    background: "linear-gradient(145deg, #109E74 0%, #0B7A5A 55%, #1E1E1E 100%)",
                  }}
                />
                {/* Mockup que sobe da base (00:09) */}
                <motion.div
                  initial={{ y: 70 }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="relative z-10 h-[375px] w-[275px] rounded-t-[36px] border-[7px] border-b-0 border-ink bg-white p-4 text-ink shadow-2xl transition-transform duration-500 group-hover:-translate-y-2"
                >
                  <div className="mx-auto mb-3 h-3.5 w-16 rounded-full bg-ink" />
                  <div className="flex items-center justify-between text-[10px] font-bold">
                    <span className="rounded-full bg-forest/15 px-2.5 py-0.5 text-forest">● PROJETO</span>
                    <span className="text-ink/50">NBR 5410</span>
                  </div>
                  <div className="mx-auto my-2.5 h-20 w-20 overflow-hidden rounded-full border-2 border-forest">
                    <img
                      src={ZIGZAG_SERVICOS[0].img}
                      alt="Projetos Elétricos"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <span className="mx-auto -mt-3 table rounded-full bg-forest px-3 py-0.5 text-[10px] font-bold text-white">
                    MA Engenharia
                  </span>
                  <div className="my-3 flex h-7 items-center justify-center gap-[3px]">
                    {[10, 22, 14, 26, 16, 24, 12, 28, 18, 22, 14, 20].map((h, idx) => (
                      <motion.span
                        key={idx}
                        animate={{ height: [h * 0.5, h, h * 0.6] }}
                        transition={{ duration: 1.1, repeat: Infinity, delay: idx * 0.08 }}
                        className={`w-[3px] rounded-full ${idx % 2 === 0 ? "bg-forest" : "bg-ink"}`}
                        style={{ height: h }}
                      />
                    ))}
                  </div>
                  <div className="flex items-center gap-2.5 rounded-xl bg-[#F4F7F6] p-2.5">
                    <img
                      src="/assets/projetos-eletricos.jpg"
                      alt="Planta"
                      className="h-10 w-10 rounded-lg object-cover"
                    />
                    <div className="text-left">
                      <p className="text-[11px] font-extrabold text-ink">Dimensionamento Preciso</p>
                      <p className="text-[9.5px] text-ink/65">Segurança, economia e inovação</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              <div className="max-w-lg">
                <FadeUp>
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-forest">
                    [ {ZIGZAG_SERVICOS[0].badge} ]
                  </span>
                </FadeUp>
                <MaskText
                  as="h3"
                  text={ZIGZAG_SERVICOS[0].title}
                  className="mt-3 font-display text-[clamp(1.75rem,3.2vw,2.55rem)] font-bold leading-[1.12] tracking-[-0.03em] text-ink"
                />
                <ul className="mt-6 space-y-4">
                  {ZIGZAG_SERVICOS[0].paragraphs.map((p, i) => (
                    <FadeUp key={i} delay={0.1 + i * 0.08}>
                      <li className="relative pl-5 text-[15px] leading-relaxed text-ink/75">
                        <span className="absolute left-0 top-2.5 h-2 w-2 rounded-full bg-forest" />
                        {p}
                      </li>
                    </FadeUp>
                  ))}
                </ul>
                <FadeUp delay={0.35} className="mt-8">
                  <a
                    href={`${WHATSAPP}?text=${encodeURIComponent(ZIGZAG_SERVICOS[0].waMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full border-[1.5px] border-ink bg-white px-7 py-3.5 text-[12px] font-bold uppercase tracking-wider text-ink transition"
                  >
                    <span className="absolute inset-0 -translate-x-full rounded-full bg-ink transition-transform duration-500 ease-out group-hover:translate-x-0" />
                    <span className="relative transition-colors group-hover:text-white">
                      {ZIGZAG_SERVICOS[0].cta}
                    </span>
                    <ArrowUpRight className="relative h-4 w-4 transition-colors group-hover:text-white" />
                  </a>
                </FadeUp>
              </div>
            </div>

            {/* ROW 2 (00:10 - 00:11): Esquerda Texto / Direita Card Visual — LAUDOS TÉCNICOS */}
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-24">
              <div className="order-2 max-w-lg lg:order-1">
                <FadeUp>
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-forest">
                    [ {ZIGZAG_SERVICOS[1].badge} ]
                  </span>
                </FadeUp>
                <MaskText
                  as="h3"
                  text={ZIGZAG_SERVICOS[1].title}
                  className="mt-3 font-display text-[clamp(1.75rem,3.2vw,2.55rem)] font-bold leading-[1.12] tracking-[-0.03em] text-ink"
                />
                <ul className="mt-6 space-y-4">
                  {ZIGZAG_SERVICOS[1].paragraphs.map((p, i) => (
                    <FadeUp key={i} delay={0.1 + i * 0.08}>
                      <li className="relative pl-5 text-[15px] leading-relaxed text-ink/75">
                        <span className="absolute left-0 top-2.5 h-2 w-2 rounded-full bg-ink" />
                        {p}
                      </li>
                    </FadeUp>
                  ))}
                </ul>
                <FadeUp delay={0.35} className="mt-8">
                  <a
                    href={`${WHATSAPP}?text=${encodeURIComponent(ZIGZAG_SERVICOS[1].waMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full border-[1.5px] border-ink bg-white px-7 py-3.5 text-[12px] font-bold uppercase tracking-wider text-ink transition"
                  >
                    <span className="absolute inset-0 -translate-x-full rounded-full bg-forest transition-transform duration-500 ease-out group-hover:translate-x-0" />
                    <span className="relative transition-colors group-hover:text-white">
                      {ZIGZAG_SERVICOS[1].cta}
                    </span>
                    <ArrowUpRight className="relative h-4 w-4 transition-colors group-hover:text-white" />
                  </a>
                </FadeUp>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 50, rotateX: 12 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "0px 0px -12% 0px" }}
                transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformPerspective: 1100 }}
                className="group relative order-1 mx-auto flex h-[430px] w-full max-w-[465px] items-end justify-center overflow-hidden rounded-[32px] px-7 pt-10 shadow-[0_28px_70px_-20px_rgba(30,30,30,0.3)] lg:order-2"
                data-hover
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(145deg, #1E1E1E 0%, #064E39 52%, #0B7A5A 100%)",
                  }}
                />

                {/* Etiquetas Pretas Flutuantes à Direita (idêntico a 00:10 do vídeo!) */}
                <motion.div
                  initial={{ x: 40, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.35, type: "spring", stiffness: 180 }}
                  className="absolute right-4 top-1/2 z-20 flex -translate-y-1/2 flex-col gap-2.5"
                >
                  <div className="rounded-xl border border-white/20 bg-ink/95 px-3.5 py-2.5 text-left text-white shadow-xl backdrop-blur-md">
                    <span className="block font-mono text-[9.5px] uppercase tracking-wider text-white/60">
                      Registro Oficial
                    </span>
                    <strong className="text-[11.5px] font-bold text-brand">{CREA}</strong>
                  </div>
                  <div className="rounded-xl border border-white/20 bg-ink/95 px-3.5 py-2.5 text-left text-white shadow-xl backdrop-blur-md">
                    <span className="block font-mono text-[9.5px] uppercase tracking-wider text-white/60">
                      Normas Vigentes
                    </span>
                    <strong className="text-[11.5px] font-bold text-white">NR-10 &amp; NBR 5419</strong>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ y: 70 }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="relative z-10 h-[375px] w-[275px] rounded-t-[36px] border-[7px] border-b-0 border-ink bg-white p-4 text-ink shadow-2xl transition-transform duration-500 group-hover:-translate-y-2"
                >
                  <div className="mx-auto mb-3 h-3.5 w-16 rounded-full bg-ink" />
                  <div className="mb-3 flex items-center gap-2.5">
                    <span className="grid h-10 w-10 place-items-center rounded-xl border border-ink/10 bg-white p-1.5">
                      <img src="/assets/logo-emblem.png" alt="MA" className="h-full w-full object-contain" />
                    </span>
                    <div>
                      <h5 className="text-[12.5px] font-extrabold text-ink">Laudo Técnico MA</h5>
                      <p className="text-[10px] text-ink/60">Inspeção &amp; Regularização</p>
                    </div>
                  </div>
                  <div className="mb-3 flex justify-around border-y border-ink/10 py-2.5 text-center">
                    <div>
                      <strong className="block text-sm font-extrabold text-ink">5.0</strong>
                      <span className="text-[9.5px] tracking-widest text-forest">★★★★★</span>
                    </div>
                    <div>
                      <strong className="block text-sm font-extrabold text-forest">100%</strong>
                      <span className="text-[9.5px] font-bold text-ink/55">Normativo</span>
                    </div>
                  </div>
                  <img
                    src={ZIGZAG_SERVICOS[1].img}
                    alt="Laudos Técnicos"
                    className="h-[175px] w-full rounded-2xl object-cover"
                  />
                </motion.div>
              </motion.div>
            </div>

            {/* ROW 3 (00:12 - 00:13): Esquerda Card Visual Pastel / Direita Texto — CONSULTORIA TÉCNICA */}
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-24">
              <motion.div
                initial={{ opacity: 0, y: 50, rotateX: 12 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "0px 0px -12% 0px" }}
                transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformPerspective: 1100 }}
                className="group relative mx-auto flex h-[430px] w-full max-w-[465px] items-end justify-center overflow-hidden rounded-[32px] border border-forest/20 px-7 pt-10 shadow-[0_28px_70px_-20px_rgba(11,122,90,0.2)]"
                data-hover
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(160deg, #D8F1E8 0%, #9ADBC5 55%, #0B7A5A 100%)",
                  }}
                />
                <motion.div
                  initial={{ y: 70 }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="relative z-10 h-[375px] w-[275px] rounded-t-[36px] border-[7px] border-b-0 border-ink bg-white p-4 text-ink shadow-2xl transition-transform duration-500 group-hover:-translate-y-2"
                >
                  <div className="mx-auto mb-3 h-3.5 w-16 rounded-full bg-ink" />
                  <img
                    src={ZIGZAG_SERVICOS[2].img}
                    alt="Consultoria em Engenharia"
                    className="mb-2.5 h-[108px] w-full rounded-2xl object-cover"
                  />
                  <p className="mb-2 text-[11px] font-extrabold uppercase tracking-wider text-forest">
                    Etapas da Consultoria
                  </p>
                  <div className="space-y-1.5">
                    {[
                      ["Etapa 1 • Diagnóstico", "Análise profunda do processo"],
                      ["Etapa 2 • Otimização", "Soluções seguras e viáveis"],
                      ["Etapa 3 • Conformidade", "Acompanhamento estratégico"],
                    ].map(([t, s]) => (
                      <div key={t} className="flex items-center gap-2.5 rounded-xl bg-[#F3F7F5] px-2.5 py-2">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-forest" />
                        <div>
                          <p className="text-[10.5px] font-extrabold leading-tight text-ink">{t}</p>
                          <p className="text-[9.5px] text-ink/65">{s}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              <div className="max-w-lg">
                <FadeUp>
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-forest">
                    [ {ZIGZAG_SERVICOS[2].badge} ]
                  </span>
                </FadeUp>
                <MaskText
                  as="h3"
                  text={ZIGZAG_SERVICOS[2].title}
                  className="mt-3 font-display text-[clamp(1.75rem,3.2vw,2.55rem)] font-bold leading-[1.12] tracking-[-0.03em] text-ink"
                />
                <ul className="mt-6 space-y-4">
                  {ZIGZAG_SERVICOS[2].paragraphs.map((p, i) => (
                    <FadeUp key={i} delay={0.1 + i * 0.08}>
                      <li className="relative pl-5 text-[15px] leading-relaxed text-ink/75">
                        <span className="absolute left-0 top-2.5 h-2 w-2 rounded-full bg-forest" />
                        {p}
                      </li>
                    </FadeUp>
                  ))}
                </ul>
                <FadeUp delay={0.35} className="mt-8">
                  <a
                    href={`${WHATSAPP}?text=${encodeURIComponent(ZIGZAG_SERVICOS[2].waMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full border-[1.5px] border-ink bg-white px-7 py-3.5 text-[12px] font-bold uppercase tracking-wider text-ink transition"
                  >
                    <span className="absolute inset-0 -translate-x-full rounded-full bg-ink transition-transform duration-500 ease-out group-hover:translate-x-0" />
                    <span className="relative transition-colors group-hover:text-white">
                      {ZIGZAG_SERVICOS[2].cta}
                    </span>
                    <ArrowUpRight className="relative h-4 w-4 transition-colors group-hover:text-white" />
                  </a>
                </FadeUp>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
