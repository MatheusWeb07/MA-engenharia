import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Award, CheckCircle2, GraduationCap, ShieldCheck } from "lucide-react";
import MaskText, { FadeUp } from "./MaskText";
import CountUp from "./CountUp";
import { CITACAO, COMPROMISSO, CREA, FORMACAO, FUNDADORES, INSTAGRAM, INSTAGRAM_URL, QUEM_SOMOS } from "../data";

const TILT_START = [
  { rx: 24, rz: -6, y: 70, x: -18 },
  { rx: 28, rz: 0, y: 90, x: 0 },
  { rx: 24, rz: 6, y: 70, x: 18 },
];

export default function QuemSomosCompromisso() {
  const q = QUEM_SOMOS;
  const c = COMPROMISSO;

  return (
    <>
      {/* 1. QUEM SOMOS — FUNDO BRANCO COM LINHAS VERTICAIS E RETRATO DOS FUNDADORES */}
      <section id="quem-somos" className="grid-lines relative border-t border-ink/10 bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Coluna de Texto (7 cols) */}
            <div className="lg:col-span-7">
              <FadeUp>
                <p className="mb-5 font-mono text-xs font-bold uppercase tracking-[0.18em] text-forest">
                  [ {q.titulo} • UFOP ]
                </p>
              </FadeUp>
              <MaskText
                text={q.titulo.toUpperCase()}
                className="font-display text-[clamp(2.6rem,6.4vw,5.6rem)] font-bold leading-[0.95] tracking-[-0.045em] text-ink"
              />
              <FadeUp delay={0.15}>
                <p className="mt-6 text-lg font-bold leading-snug text-forest">{q.subtitulo}</p>
              </FadeUp>

              <div className="mt-6 space-y-4 text-[15.5px] leading-relaxed text-ink/75">
                {q.paragrafos.map((p, i) => (
                  <FadeUp key={i} delay={0.1 + i * 0.07}>
                    <p>{p}</p>
                  </FadeUp>
                ))}
              </div>

              {/* Métricas Rápidas com CountUp */}
              <FadeUp delay={0.35} className="mt-10 grid grid-cols-3 gap-4 border-y border-ink/10 py-6">
                <div>
                  <div className="font-display text-3xl font-extrabold text-forest sm:text-4xl">
                    <CountUp to={100} suffix="%" />
                  </div>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-ink/60">
                    Conformidade ABNT
                  </p>
                </div>
                <div>
                  <div className="font-display text-3xl font-extrabold text-ink sm:text-4xl">UFOP</div>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-ink/60">
                    Controle e Automação
                  </p>
                </div>
                <div>
                  <div className="font-display text-3xl font-extrabold text-forest sm:text-4xl">CREA</div>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-ink/60">
                    Ativo em Minas Gerais
                  </p>
                </div>
              </FadeUp>
            </div>

            {/* Coluna Retrato dos Fundadores (5 cols) */}
            <div className="lg:col-span-5">
              <FadeUp delay={0.15} y={50} className="lg:sticky lg:top-24">
                <div className="group relative overflow-hidden rounded-[30px] border border-ink/10 bg-ink shadow-[0_35px_80px_-25px_rgba(30,30,30,0.35)]">
                  <img
                    src="/assets/fundadores.jpeg"
                    alt="Marphiza Magalhães e Adeilson — Engenheiros Eletricistas UFOP"
                    className="h-[520px] w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />

                  <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/20 bg-ink/85 p-5 text-white backdrop-blur-xl">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <span className="font-mono text-[10.5px] font-bold uppercase tracking-widest text-brand">
                          {CREA}
                        </span>
                        <h3 className="mt-0.5 font-display text-xl font-bold tracking-[-0.02em]">
                          {FUNDADORES}
                        </h3>
                        <p className="mt-0.5 text-xs text-white/80">{FORMACAO}</p>
                      </div>
                      <a
                        href={INSTAGRAM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-forest text-white transition hover:bg-white hover:text-ink"
                        title={INSTAGRAM}
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>

          {/* Tabela Interativa com Preenchimento Deslizante (Nível ANL Engenharia) */}
          <FadeUp delay={0.15} className="mt-20">
            <div className="overflow-hidden rounded-[24px] border border-ink/10 bg-white shadow-[0_30px_70px_-40px_rgba(30,30,30,0.25)]">
              <div className="grid grid-cols-1 bg-ink px-6 py-4 font-mono text-[12px] font-bold uppercase tracking-wider text-white sm:grid-cols-[1fr_1.6fr] sm:px-9">
                <span>Diferencial MA Engenharia</span>
                <span className="hidden sm:block">Compromisso Técnico na Prática</span>
              </div>
              {q.tabela.map(([k, v], i) => (
                <div
                  key={k}
                  data-hover
                  className="group relative grid grid-cols-1 gap-1.5 overflow-hidden border-t border-ink/10 px-6 py-6 sm:grid-cols-[1fr_1.6fr] sm:gap-6 sm:px-9 sm:py-7"
                >
                  <span className="absolute inset-0 origin-left scale-x-0 bg-forest transition-transform duration-500 ease-out group-hover:scale-x-100" />
                  <span className="relative flex items-center gap-3.5 text-[17px] font-bold tracking-[-0.01em] text-ink transition-colors duration-300 group-hover:text-white">
                    <span className="font-mono text-xs font-bold text-forest transition-colors group-hover:text-white/80">
                      0{i + 1}
                    </span>
                    {k}
                  </span>
                  <span className="relative text-[15px] text-ink/70 transition-colors duration-300 group-hover:text-white/95">
                    {v}
                  </span>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* 2. NOSSO COMPROMISSO (MISSÃO, VISÃO, VALORES — ENTRADA 3D INCLINADA) */}
      <section id="compromisso" className="relative overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
          <div className="mx-auto max-w-3xl text-center">
            <FadeUp>
              <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.18em] text-forest">
                [ Diretrizes Institucionais ]
              </p>
            </FadeUp>
            <MaskText
              text={c.titulo.toUpperCase()}
              className="font-display text-[clamp(2.3rem,5.6vw,4.9rem)] font-bold leading-[0.97] tracking-[-0.045em] text-ink"
            />
            <FadeUp delay={0.15}>
              <p className="mx-auto mt-5 max-w-2xl text-[16px] text-ink/70">{c.subtitulo}</p>
            </FadeUp>
          </div>

          {/* 3 Cartões com Alinhamento 3D no Scroll */}
          <div
            className="mt-16 grid grid-cols-1 gap-7 lg:grid-cols-3"
            style={{ perspective: "1100px" }}
          >
            {/* Card 1: Missão */}
            <motion.div
              data-hover
              initial={{
                opacity: 0,
                y: TILT_START[0].y,
                rotateX: TILT_START[0].rx,
                rotateZ: TILT_START[0].rz,
                x: TILT_START[0].x,
              }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0, rotateZ: 0, x: 0 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 0.85, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
              className="flex flex-col justify-between rounded-[28px] bg-forest p-8 text-white shadow-[0_30px_70px_-20px_rgba(11,122,90,0.45)] sm:p-10"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-white/80">
                    [ 01 • Propósito ]
                  </span>
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-forest shadow">
                    <ShieldCheck className="h-6 w-6" />
                  </span>
                </div>
                <h3 className="mt-7 font-display text-3xl font-bold tracking-[-0.03em]">Missão</h3>
                <p className="mt-4 text-[15px] leading-relaxed text-white/90">{c.missao}</p>
              </div>
              <div className="mt-8 border-t border-white/20 pt-4 font-mono text-xs uppercase tracking-wider text-white/80">
                MA | Soluções e Engenharia
              </div>
            </motion.div>

            {/* Card 2: Visão */}
            <motion.div
              data-hover
              initial={{
                opacity: 0,
                y: TILT_START[1].y,
                rotateX: TILT_START[1].rx,
                rotateZ: TILT_START[1].rz,
                x: TILT_START[1].x,
              }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0, rotateZ: 0, x: 0 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 0.85, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
              className="flex flex-col justify-between rounded-[28px] bg-ink p-8 text-white shadow-[0_30px_70px_-20px_rgba(30,30,30,0.35)] sm:p-10"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand">
                    [ 02 • Horizonte ]
                  </span>
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-forest text-white shadow">
                    <GraduationCap className="h-6 w-6" />
                  </span>
                </div>
                <h3 className="mt-7 font-display text-3xl font-bold tracking-[-0.03em]">Visão</h3>
                <p className="mt-4 text-[15px] leading-relaxed text-white/85">{c.visao}</p>
              </div>
              <div className="mt-8 border-t border-white/15 pt-4 font-mono text-xs uppercase tracking-wider text-brand">
                Referência em Minas Gerais
              </div>
            </motion.div>

            {/* Card 3: Valores */}
            <motion.div
              data-hover
              initial={{
                opacity: 0,
                y: TILT_START[2].y,
                rotateX: TILT_START[2].rx,
                rotateZ: TILT_START[2].rz,
                x: TILT_START[2].x,
              }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0, rotateZ: 0, x: 0 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 0.85, delay: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
              className="flex flex-col justify-between rounded-[28px] border-2 border-ink/10 bg-[#F7FAF9] p-8 text-ink shadow-[0_25px_60px_-25px_rgba(30,30,30,0.15)] sm:p-10"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-forest">
                    [ 03 • Pilares ]
                  </span>
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-ink text-white shadow">
                    <Award className="h-6 w-6" />
                  </span>
                </div>
                <h3 className="mt-7 font-display text-3xl font-bold tracking-[-0.03em] text-ink">Valores</h3>
                <ul className="mt-5 space-y-3.5">
                  {c.valores.map(([titulo, desc]) => (
                    <li key={titulo} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-forest" />
                      <div>
                        <strong className="block text-[15px] font-bold text-ink">{titulo}</strong>
                        <span className="text-[13px] leading-snug text-ink/70">{desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 border-t border-ink/10 pt-4 font-mono text-xs font-bold uppercase tracking-wider text-forest">
                Ética • Precisão • Segurança
              </div>
            </motion.div>
          </div>

          {/* Citação Institucional em Destaque */}
          <FadeUp delay={0.15} className="mx-auto mt-16 max-w-4xl">
            <div className="rounded-2xl border-l-4 border-forest bg-[#F4F8F6] px-7 py-6 text-ink sm:px-10 sm:py-8">
              <p className="font-display text-lg font-semibold italic leading-relaxed text-ink sm:text-xl">
                “{CITACAO}”
              </p>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
