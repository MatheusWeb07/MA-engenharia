import React, { useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring, useTransform } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Award,
  CheckCircle2,
  Compass,
  Cpu,
  FileCheck2,
  GraduationCap,
  Instagram,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import MaskText from "./MaskText";
import {
  CIRCUITO_AREAS,
  CITACAO,
  COMPROMISSO,
  CREA,
  EMAIL,
  EMAIL_ALT,
  ENDERECO,
  INSTAGRAM,
  INSTAGRAM_URL,
  QUEM_SOMOS,
  RESPONSAVEL,
  TELEFONE,
  WHATSAPP,
  ZIGZAG_SERVICOS,
} from "../data";

const AUTHORITIES = [
  {
    code: "CREA-MG",
    title: "CREA-MG Ativo",
    sub: "Registro Nº 142366847-2",
    icon: ShieldCheck,
  },
  {
    code: "UFOP",
    title: "Formação UFOP",
    sub: "Controle e Automação",
    icon: GraduationCap,
  },
  {
    code: "NBR 5410",
    title: "ABNT NBR 5410",
    sub: "Instalações de Baixa Tensão",
    icon: Compass,
  },
  {
    code: "NR-10",
    title: "Conformidade NR-10",
    sub: "Segurança em Eletricidade",
    icon: Award,
  },
  {
    code: "NBR 5419",
    title: "SPDA NBR 5419",
    sub: "Proteção Atmosférica",
    icon: Zap,
  },
  {
    code: "ART",
    title: "Emissão de ART",
    sub: "Responsabilidade Técnica",
    icon: FileCheck2,
  },
];

const CLEAN_CAROUSEL_PROJECTS = [
  {
    tag: "NOSSA MISSÃO",
    title: "Engenharia Inteligente, Segura e Eficiente",
    desc: COMPROMISSO.missao,
    img: "/assets/eng-projeto-arquitetura.jpg",
    pos: "center",
    metric: "Resultados Reais",
  },
  {
    tag: "NOSSA VISÃO",
    title: "Referência em Engenharia Elétrica e Automação em MG",
    desc: COMPROMISSO.visao,
    img: "/assets/eng-subestacao-industrial.jpg",
    pos: "center",
    metric: "Minas Gerais",
  },
  {
    tag: "PROJETOS ELÉTRICOS",
    title: "Dimensionamento Personalizado & Eficiência Energética",
    desc: "Projetos residenciais, comerciais e industriais com foco em segurança operacional, economia de energia e conformidade ABNT.",
    img: "/assets/projetos-eletricos.jpg",
    pos: "center",
    metric: "NBR 5410 • CAD",
  },
  {
    tag: "LAUDOS E PERÍCIAS",
    title: "Inspeções Rigorosas, Medições e Diagnósticos Precisos",
    desc: "Avaliações técnicas completas para prevenção de falhas, regularização de instalações e segurança normativa NR-10 e SPDA.",
    img: "/assets/eng-painel-automacao.jpg",
    pos: "center",
    metric: "Laudos com ART",
  },
  {
    tag: "CONSULTORIA & UFOP",
    title: "Otimização de Sistemas e Controle & Automação",
    desc: "Atuação lado a lado com o cliente por engenheiros formados pela Universidade Federal de Ouro Preto (UFOP).",
    img: "/assets/laudos-inspecao.jpg",
    pos: "center",
    metric: "Marphiza & Adeilson",
  },
  {
    tag: "CREDENCIAL TÉCNICA",
    title: "Compromisso, Ética, Segurança e Excelência Técnica",
    desc: `Atendimento direto em João Monlevade e região com registro ativo no ${CREA}.`,
    img: "/assets/cartao-visita.jpeg",
    pos: "center",
    metric: CREA,
  },
];

/* ==========================================================================
   1. SEÇÃO: CONFORMIDADE TÉCNICA & AUTORIDADES (1:1 com inspiraçao.webp)
   ========================================================================== */
export function TrustedAuthoritiesSection() {
  return (
    <section id="autoridades" className="bg-white py-18 sm:py-24">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <MaskText
            as="h2"
            text="Conformidade Técnica & Rigor Normativo"
            className="font-display text-[clamp(2rem,4.2vw,3.4rem)] font-light tracking-[-0.03em] text-forest"
          />
          <p className="mt-3 text-[14.5px] font-medium text-ink/70 sm:text-[15.5px]">
            Projetos, laudos e consultorias aprovados e executados segundo as diretrizes mais rigorosas para
            instalações de alta confiabilidade.
          </p>
        </div>

        {/* 6 Colunas Limpas (Sem numeração) */}
        <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6 lg:gap-6">
          {AUTHORITIES.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.code}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
                className="group flex flex-col items-center text-center"
              >
                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-forest/15 bg-mint/40 text-forest shadow-[0_8px_20px_-8px_rgba(11,122,90,0.18)] transition-colors duration-300 group-hover:border-forest group-hover:bg-forest group-hover:text-white">
                  <Icon className="h-7 w-7 stroke-[1.75]" aria-hidden="true" />
                  <span className="-bottom-2 absolute rounded-full border border-forest/20 bg-white px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider text-ink shadow-sm">
                    {item.code}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-[13.5px] font-bold leading-snug text-ink">{item.title}</h3>
                <p className="mt-1 text-[12px] font-medium leading-tight text-ink/60">{item.sub}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   2. SEÇÃO: SERVIÇOS (Bloco Verde #0B7A5A Maxtherm + Tabs Deslizantes +
      Timeline Central com Ponto Viajante em Fundo Branco — SEM NÚMEROS)
   ========================================================================== */
function ServiceVisualCard({ service, index }) {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const yImg = useTransform(scrollYProgress, [0, 1], [-18, 18]);

  return (
    <div ref={cardRef} className="relative mx-auto w-full max-w-[540px]">
      <div className="relative overflow-hidden rounded-[26px] border border-ink/8 bg-mint/35 p-2.5 shadow-[0_20px_50px_-18px_rgba(11,122,90,0.16)]">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[20px] bg-ink">
          <motion.img
            style={{ y: yImg, scale: 1.06 }}
            src={service.img}
            alt={service.title}
            width="540"
            height="405"
            loading="lazy"
            className="gpu h-full w-full object-cover opacity-95"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />

          {/* Selo Técnico */}
          <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white/95 px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider text-ink shadow-md backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-forest" />
            <span>{service.badge}</span>
          </div>

          {/* Rodapé Interno da Moldura */}
          <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3 rounded-2xl border border-white/20 bg-ink/85 p-3.5 text-white backdrop-blur-md">
            <div>
              <p className="font-mono text-[9.5px] font-bold uppercase tracking-[0.16em] text-mint">
                MA | SOLUÇÕES E ENGENHARIA
              </p>
              <p className="mt-0.5 font-display text-[14.5px] font-bold leading-snug text-white">{service.title}</p>
            </div>
            <span className="shrink-0 rounded-full bg-forest px-3 py-1 font-mono text-[9.5px] font-bold uppercase text-white">
              {CREA}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ServicesMaxthermSection() {
  const [activeArea, setActiveArea] = useState(0);
  const timelineRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 70%", "end 35%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 26,
    restDelta: 0.001,
  });

  const dotTop = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);
  const currentArea = CIRCUITO_AREAS[activeArea];

  return (
    <section id="servicos" className="bg-white">
      {/* PARTE A: BLOCO VERDE #0B7A5A PROFUNDO (1:1 com a inspiração 1) */}
      <div className="bg-forest py-20 text-white sm:py-26">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
          <div className="inline-flex items-center rounded-full border border-white/40 px-5 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-white">
            SERVIÇOS
          </div>

          <div className="mt-7 grid items-end gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <MaskText
                as="h2"
                text="Soluções de Engenharia Aprovadas e Sob Medida"
                className="font-display text-[clamp(2.2rem,4.6vw,3.8rem)] font-light leading-[1.06] tracking-[-0.03em] text-white"
              />
            </div>
            <div className="lg:col-span-5">
              <p className="text-[14.5px] font-normal leading-relaxed text-white/85 sm:text-[15.5px]">
                A <strong>MA | Soluções e Engenharia</strong> entrega execução completa em projetos elétricos,
                elaboração de laudos técnicos, consultoria especializada e automação — unindo segurança normativa,
                inovação e eficiência operacional.
              </p>
            </div>
          </div>

          {/* BARRA SEGMENTADA DE TABS EM MOTION (Sem numeração) */}
          <div className="mt-11">
            <div className="no-scrollbar flex items-center gap-2 overflow-x-auto rounded-2xl border border-white/20 bg-deep/60 p-2 backdrop-blur-md">
              {CIRCUITO_AREAS.map((area, idx) => {
                const isActive = activeArea === idx;
                return (
                  <button
                    key={area.nome}
                    type="button"
                    onClick={() => setActiveArea(idx)}
                    className={`relative z-10 flex-1 whitespace-nowrap rounded-xl px-5 py-3 text-left text-[12px] font-extrabold uppercase tracking-[0.05em] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                      isActive ? "text-ink" : "text-white/80 hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="cleanServicosTab"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                        className="absolute inset-0 -z-10 rounded-xl bg-white shadow-lg"
                      />
                    )}
                    <span>{area.nome}</span>
                  </button>
                );
              })}
            </div>

            {/* 3 Cards Técnicos da Aba Ativa */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentArea.nome}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.3 }}
                className="mt-6 grid gap-5 md:grid-cols-3"
              >
                {currentArea.itens.map((item) => (
                  <div
                    key={item.titulo}
                    className="group flex flex-col justify-between rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-md transition-all duration-300 hover:border-white/35 hover:bg-white/15"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="rounded-full bg-white/15 px-3 py-1 font-mono text-[9.5px] font-bold uppercase tracking-wider text-white">
                          Diferencial
                        </span>
                        <Sparkles className="h-4 w-4 text-white/70" aria-hidden="true" />
                      </div>
                      <h3 className="mt-4 font-display text-[17.5px] font-bold leading-snug text-white">
                        {item.titulo}
                      </h3>
                      <p className="mt-2 text-[13.5px] leading-relaxed text-white/80">{item.texto}</p>
                    </div>

                    <div className="mt-6 border-t border-white/15 pt-4">
                      <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-mint">
                        Resultado Técnico:
                      </p>
                      <p className="mt-1 text-[12.5px] font-semibold text-white">{item.resultado}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* PARTE B: TIMELINE ZIG-ZAG COM LINHA CENTRAL E PONTO VIAJANTE EM FUNDO BRANCO PURO (Sem números) */}
      <div ref={timelineRef} className="relative bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="inline-flex items-center rounded-full border border-forest/25 bg-mint/50 px-4 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-forest">
              Detalhamento Técnico • O Que Fazemos
            </span>
            <MaskText
              as="h3"
              text="Excelência em Cada Etapa do Seu Projeto"
              className="mt-4 font-display text-[clamp(1.9rem,3.6vw,2.9rem)] font-light tracking-[-0.03em] text-ink"
            />
          </div>

          <div className="relative">
            {/* Linha Vertical Central (Do vídeo de referência) */}
            <div className="pointer-events-none absolute bottom-0 left-1/2 top-0 hidden w-[2px] -translate-x-1/2 bg-forest/15 lg:block">
              <motion.div
                style={{ scaleY: smoothProgress, transformOrigin: "top" }}
                className="gpu h-full w-full bg-forest"
              />
              <motion.div
                style={{ top: dotTop }}
                className="gpu -left-[7px] -translate-y-1/2 absolute h-4 w-4 rounded-full border-[3px] border-white bg-forest shadow-[0_0_0_6px_rgba(11,122,90,0.2)]"
              />
            </div>

            {/* 3 Linhas Alternadas com os Textos Oficiais Completos */}
            <div className="space-y-20 lg:space-y-28">
              {ZIGZAG_SERVICOS.map((srv, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div
                    id={srv.id}
                    key={srv.id}
                    className="scroll-mt-24 relative grid items-center gap-10 lg:grid-cols-12 lg:gap-16"
                  >
                    {/* Indicador Central Limpo (Sem números) */}
                    <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 hidden h-7 w-7 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-forest/25 bg-white text-forest shadow-md lg:grid">
                      <span className="h-2 w-2 rounded-full bg-forest" />
                    </div>

                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -24 : 24 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      className={`lg:col-span-6 ${isEven ? "lg:pr-10" : "lg:order-2 lg:pl-10"}`}
                    >
                      <span className="inline-flex items-center gap-2 rounded-full border border-forest/25 bg-mint/60 px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.1em] text-forest">
                        {srv.badge.replace(/^\d+\s*•\s*/, "")}
                      </span>

                      <h4 className="mt-4 font-display text-[clamp(1.75rem,3vw,2.4rem)] font-bold leading-[1.12] tracking-[-0.03em] text-ink">
                        {srv.title}
                      </h4>

                      <div className="mt-5 space-y-4 text-[14.5px] leading-relaxed text-ink/75 sm:text-[15px]">
                        {srv.paragraphs.map((p, pIdx) => (
                          <p key={pIdx}>{p}</p>
                        ))}
                      </div>

                      <div className="mt-7">
                        <a
                          href={`${WHATSAPP}?text=${encodeURIComponent(srv.waMsg)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-5 rounded-full bg-forest py-2 pl-6 pr-2 text-[11.5px] font-extrabold uppercase tracking-[0.06em] text-white shadow-[0_14px_34px_rgba(11,122,90,0.25)] transition-transform duration-300 hover:-translate-y-0.5 hover:bg-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
                        >
                          <span>{srv.cta}</span>
                          <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-ink transition-transform duration-300 group-hover:rotate-45">
                            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                          </span>
                        </a>
                      </div>
                    </motion.div>

                    <div className={`lg:col-span-6 ${isEven ? "lg:pl-10" : "lg:order-1 lg:pr-10"}`}>
                      <ServiceVisualCard service={srv} index={idx} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   3. SEÇÃO: QUEM SOMOS (1:1 com "Why Choose Maxtherm" — Sem numeração)
   ========================================================================== */
export function WhyChooseUsSection() {
  const [activeRow, setActiveRow] = useState(0);

  return (
    <section id="quem-somos" className="border-t border-ink/8 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* COLUNA ESQUERDA: Pílula + Título Refinado + Lista com Divisórias + Texto Oficial */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center rounded-full border border-forest/35 px-5 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-forest">
              QUEM SOMOS
            </div>

            <MaskText
              as="h2"
              text="Por que escolher a MA Engenharia"
              className="mt-5 font-display text-[clamp(2.1rem,4vw,3.3rem)] font-light leading-[1.08] tracking-[-0.03em] text-forest"
            />

            <p className="mt-3 text-[14.5px] font-medium text-ink/75 sm:text-[15.5px]">
              {QUEM_SOMOS.subtitulo}. Assumimos a responsabilidade técnica do seu projeto desde o dimensionamento até a
              aprovação final.
            </p>

            {/* Lista Minimalista com Divisórias Horizontais (Sem números 01, 02) */}
            <div className="mt-8 divide-y divide-ink/10 border-y border-ink/10">
              {QUEM_SOMOS.tabela.map(([titulo, descricao], idx) => {
                const isOpen = activeRow === idx;
                return (
                  <div key={titulo} className="py-4">
                    <button
                      type="button"
                      onMouseEnter={() => setActiveRow(idx)}
                      onClick={() => setActiveRow(idx)}
                      className="flex w-full items-center justify-between gap-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`h-2 w-2 rounded-full transition-colors ${
                            isOpen ? "bg-forest" : "bg-ink/25"
                          }`}
                        />
                        <span
                          className={`font-display text-[15px] font-bold transition-colors ${
                            isOpen ? "text-forest" : "text-ink"
                          }`}
                        >
                          {titulo}
                        </span>
                      </div>
                      <ArrowUpRight
                        className={`h-4 w-4 text-forest transition-transform duration-200 ${
                          isOpen ? "rotate-90" : "opacity-40"
                        }`}
                        aria-hidden="true"
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.p
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden pl-5 pt-2 text-[13.5px] leading-relaxed text-ink/70"
                        >
                          {descricao}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Os 4 Parágrafos Oficiais Completos */}
            <div className="mt-8 space-y-3.5 rounded-2xl border border-forest/15 bg-mint/30 p-6 text-[13.5px] leading-relaxed text-ink/80 sm:text-[14px]">
              {QUEM_SOMOS.paragrafos.map((paragrafo, i) => (
                <p key={i}>{paragrafo}</p>
              ))}
            </div>
          </div>

          {/* COLUNA DIREITA: Foto Recortada SEM FUNDO dos Fundadores (1:1 com a solicitação do usuário) */}
          <div className="lg:sticky lg:top-24 lg:col-span-6">
            <div className="relative overflow-hidden rounded-[28px] border border-forest/15 bg-gradient-to-b from-[#E6F3EE] via-[#F3FAF7] to-white p-5 sm:p-7 shadow-[0_26px_65px_-20px_rgba(11,122,90,0.18)]">
              {/* Badges Flutuantes dos Fundadores */}
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="rounded-full bg-forest px-3.5 py-1.5 font-mono text-[10px] font-bold uppercase tracking-wider text-white shadow-sm">
                  Fundadores • UFOP Ouro Preto
                </span>
                <span className="rounded-full border border-forest/30 bg-white/95 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-forest shadow-sm">
                  {CREA}
                </span>
              </div>

              {/* Foto Sem Fundo dos Fundadores (/assets/fundadores-cutout.png) */}
              <div className="relative flex justify-center pt-3 pb-1">
                <img
                  src="/assets/fundadores-cutout.png"
                  alt="Engenheiros Marphiza Magalhães e Adeilson — Fundadores da MA Soluções e Engenharia"
                  width="540"
                  height="640"
                  loading="lazy"
                  className="h-[360px] sm:h-[430px] lg:h-[460px] w-auto object-contain object-bottom drop-shadow-[0_22px_35px_rgba(11,122,90,0.22)]"
                />
              </div>

              {/* Card Flutuante de Credenciais */}
              <div className="rounded-2xl border border-forest/15 bg-white/95 p-5 shadow-lg backdrop-blur-md">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <span className="inline-block rounded-full bg-forest/10 px-3 py-0.5 font-mono text-[10px] font-extrabold uppercase tracking-wider text-forest">
                      Engenheiros Responsáveis
                    </span>
                    <h3 className="mt-1 font-display text-[18px] font-extrabold text-ink">
                      Marphiza Magalhães & Adeilson
                    </h3>
                    <p className="text-[12.5px] font-medium text-ink/75">
                      Engenheiros Eletricistas com ênfase em Controle e Automação
                    </p>
                  </div>
                  <div className="rounded-xl bg-forest px-3.5 py-2 text-right text-white shadow-sm">
                    <span className="block font-mono text-[9px] uppercase tracking-wider text-white/80">
                      Registro Ativo
                    </span>
                    <span className="font-mono text-[11px] font-bold">{CREA}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   4. SEÇÃO: PÍLULAS CONCÊNTRICAS EM ONDA — FRASE DE IMPACTO
   ========================================================================== */
export function ConcentricRippleSection() {
  return (
    <section id="o-que-e" className="overflow-hidden bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <div className="relative mx-auto flex items-center justify-center rounded-full border border-forest/15 bg-[#F2F9F6] p-4 sm:p-7 lg:p-9">
          <div className="pulse-ring-1 w-full rounded-full border border-forest/20 bg-[#E4F3ED] p-4 sm:p-7 lg:p-9">
            <div className="pulse-ring-2 w-full rounded-full border border-forest/30 bg-[#D2ECE2] p-4 sm:p-7 lg:p-9">
              <div className="relative overflow-hidden rounded-full bg-forest px-6 py-12 text-center text-white shadow-[0_24px_55px_-15px_rgba(11,122,90,0.4)] sm:px-14 sm:py-16 lg:px-20 lg:py-18">
                <span className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-4 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-white">
                  Essência Técnica
                </span>

                <MaskText
                  as="h2"
                  text="Projetos inteligentes, resultados eficientes."
                  className="mx-auto mt-4 max-w-3xl font-display text-[clamp(1.6rem,3.8vw,3.1rem)] font-extrabold leading-[1.08] tracking-[-0.03em] text-white"
                />

                <p className="mx-auto mt-4 max-w-2xl text-[14px] font-medium leading-relaxed text-white/90 sm:text-[15.5px]">
                  “{CITACAO}”
                </p>

                <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
                  {["Compromisso", "Excelência Técnica", "Segurança", "Inovação e Ética"].map((val) => (
                    <span
                      key={val}
                      className="rounded-full bg-white px-4 py-1.5 text-[11.5px] font-extrabold uppercase tracking-wider text-ink shadow-sm"
                    >
                      {val}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   5. SEÇÃO: NOSSO COMPROMISSO & PORTFÓLIO (1:1 com "Proven Projects" — Sem numeração)
   ========================================================================== */
export function ProvenProjectsSection() {
  const [index, setIndex] = useState(0);
  const maxIndex = CLEAN_CAROUSEL_PROJECTS.length - 1;

  const handlePrev = () => setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  const handleNext = () => setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));

  return (
    <section
      id="compromisso"
      className="relative overflow-hidden py-20 sm:py-28"
      style={{
        background: "linear-gradient(180deg, #DCEEE7 0%, #EDF7F3 38%, #FFFFFF 100%)",
      }}
    >
      <div className="mx-auto max-w-[1360px] px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center rounded-full border border-forest/35 bg-white/70 px-5 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-forest backdrop-blur-sm">
            NOSSO COMPROMISSO & ENTREGAS
          </div>

          <MaskText
            as="h2"
            text="Projetos Inteligentes. Execução Real."
            className="mt-5 font-display text-[clamp(2.2rem,4.5vw,3.75rem)] font-light leading-[1.06] tracking-[-0.03em] text-forest"
          />

          <p className="mt-3 text-[14.5px] font-medium text-ink/75 sm:text-[15.5px]">{COMPROMISSO.subtitulo}</p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`${WHATSAPP}?text=${encodeURIComponent("Olá! Quero solicitar um orçamento com a MA Soluções e Engenharia.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-5 rounded-full bg-white py-2 pl-6 pr-2 text-[11.5px] font-extrabold uppercase tracking-[0.06em] text-ink shadow-[0_12px_30px_rgba(11,122,90,0.14)] transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
            >
              <span>Solicitar Orçamento</span>
              <span className="grid h-9 w-9 place-items-center rounded-full bg-forest text-white transition-transform duration-300 group-hover:rotate-45 group-hover:bg-ink">
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </a>

            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Card anterior"
                className="grid h-11 w-11 place-items-center rounded-full border border-forest/35 bg-white/80 text-forest transition hover:border-forest hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Próximo card"
                className="grid h-11 w-11 place-items-center rounded-full bg-forest text-white shadow-md transition hover:bg-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
              >
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        {/* CARROSSEL HORIZONTAL DE CARDS (Sem números nos cards) */}
        <div className="mt-12 overflow-hidden">
          <motion.div
            animate={{ x: `-${index * 290}px` }}
            transition={{ type: "spring", stiffness: 220, damping: 28 }}
            className="gpu flex gap-6"
          >
            {CLEAN_CAROUSEL_PROJECTS.map((card, i) => (
              <motion.article
                key={card.title}
                whileHover={{ y: -6 }}
                onClick={() => setIndex(i)}
                className="group relative h-[420px] w-[285px] shrink-0 cursor-pointer overflow-hidden rounded-[24px] border border-ink/8 bg-ink shadow-[0_18px_45px_-15px_rgba(0,0,0,0.2)] sm:w-[315px]"
              >
                <img
                  src={card.img}
                  alt={card.title}
                  width="315"
                  height="420"
                  loading="lazy"
                  style={{ objectPosition: card.pos }}
                  className="h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/35 to-transparent" />

                <div className="absolute inset-x-5 top-5 flex items-center justify-between">
                  <span className="rounded-full bg-white/95 px-3 py-1 font-mono text-[9.5px] font-extrabold uppercase tracking-wider text-forest shadow-sm">
                    {card.tag}
                  </span>
                  <span className="rounded-full bg-forest px-2.5 py-1 font-mono text-[9px] font-bold text-white">
                    {card.metric}
                  </span>
                </div>

                <div className="absolute inset-x-5 bottom-5 text-white">
                  <h3 className="font-display text-[18px] font-bold leading-snug text-white">{card.title}</h3>
                  <p className="mt-2 line-clamp-4 text-[12.5px] leading-relaxed text-white/80">{card.desc}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>

        {/* 4 VALORES DA EMPRESA (Sem "VALOR 01") */}
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {COMPROMISSO.valores.map(([valTitulo, valTexto]) => (
            <div
              key={valTitulo}
              className="rounded-2xl border border-forest/15 bg-white p-5 shadow-[0_10px_25px_-12px_rgba(11,122,90,0.1)]"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[9.5px] font-bold uppercase tracking-wider text-forest">
                  Princípio Técnico
                </span>
                <CheckCircle2 className="h-4 w-4 text-forest" aria-hidden="true" />
              </div>
              <h4 className="mt-2.5 font-display text-[16px] font-extrabold text-ink">{valTitulo}</h4>
              <p className="mt-1 text-[12.5px] leading-relaxed text-ink/70">{valTexto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   6. SEÇÃO: CONTATO + WATERMARK GIGANTE "MA ENGENHARIA" + RODAPÉ BRANCO (1:1 inspiraçao.webp)
   ========================================================================== */
export function ContactAndWatermarkFooter() {
  const [nome, setNome] = useState("");
  const [servico, setServico] = useState("Elaboração de Projeto Elétrico");
  const [detalhes, setDetalhes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Olá! Meu nome é ${nome || "Cliente"}. Gostaria de solicitar atendimento para *${servico}*. ${
      detalhes ? `Detalhes: ${detalhes}` : ""
    }`;
    window.open(`${WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <footer id="contato" className="overflow-hidden bg-white pt-10 text-ink">
      <div className="mx-auto max-w-[1280px] px-5 pb-14 sm:px-8">
        <div className="grid gap-10 rounded-[30px] border border-ink/8 bg-[#F5FAF8] p-6 shadow-[0_20px_60px_-25px_rgba(11,122,90,0.14)] sm:p-10 lg:grid-cols-12 lg:p-12">
          
          <div className="lg:col-span-6">
            <span className="inline-flex items-center rounded-full border border-forest/30 bg-white px-4 py-1.5 font-mono text-[10.5px] font-bold uppercase tracking-[0.14em] text-forest">
              ATENDIMENTO DIRETO
            </span>
            <h2 className="mt-4 font-display text-[clamp(1.9rem,3.4vw,2.7rem)] font-bold leading-tight tracking-[-0.03em] text-ink">
              Onde a precisão encontra a eficiência.
            </h2>
            <p className="mt-2 text-[14.5px] text-ink/70">
              Fale diretamente com os engenheiros responsáveis (<strong>{RESPONSAVEL}</strong> &{" "}
              <strong>Eng. Adeilson</strong>) e receba uma análise personalizada.
            </p>

            <form onSubmit={handleSubmit} className="mt-7 space-y-5">
              <div>
                <label
                  htmlFor="input-nome"
                  className="block font-mono text-[10px] font-bold uppercase tracking-wider text-ink/70"
                >
                  Seu Nome ou Empresa
                </label>
                <input
                  id="input-nome"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="Ex.: Construtora, Condomínio ou Indústria."
                  className="mt-1.5 w-full border-b-2 border-ink/20 bg-transparent py-2 text-[14.5px] font-medium text-ink transition focus:border-forest focus-visible:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="select-servico"
                  className="block font-mono text-[10px] font-bold uppercase tracking-wider text-ink/70"
                >
                  Serviço Desejado
                </label>
                <select
                  id="select-servico"
                  name="service"
                  value={servico}
                  onChange={(e) => setServico(e.target.value)}
                  className="mt-1.5 w-full border-b-2 border-ink/20 bg-white py-2 text-[14.5px] font-medium text-ink transition focus:border-forest focus-visible:outline-none"
                >
                  <option value="Elaboração de Projeto Elétrico">Elaboração de Projeto Elétrico</option>
                  <option value="Elaboração de Laudo Técnico (NR-10 / SPDA)">
                    Elaboração de Laudo Técnico (NR-10 / SPDA)
                  </option>
                  <option value="Consultoria Técnica em Engenharia">Consultoria Técnica em Engenharia</option>
                  <option value="Engenharia de Controle e Automação">Engenharia de Controle e Automação</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="input-detalhes"
                  className="block font-mono text-[10px] font-bold uppercase tracking-wider text-ink/70"
                >
                  Resumo da Necessidade (Opcional)
                </label>
                <input
                  id="input-detalhes"
                  name="details"
                  type="text"
                  autoComplete="off"
                  value={detalhes}
                  onChange={(e) => setDetalhes(e.target.value)}
                  placeholder="Conte brevemente sobre sua instalação ou projeto."
                  className="mt-1.5 w-full border-b-2 border-ink/20 bg-transparent py-2 text-[14.5px] font-medium text-ink transition focus:border-forest focus-visible:outline-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="group inline-flex items-center gap-5 rounded-full bg-forest py-2 pl-7 pr-2 text-[12px] font-extrabold uppercase tracking-[0.06em] text-white shadow-[0_16px_36px_rgba(11,122,90,0.28)] transition-transform duration-300 hover:-translate-y-0.5 hover:bg-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
                >
                  <span>Enviar Solicitação via WhatsApp</span>
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-ink transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </button>
              </div>
            </form>
          </div>

          <div className="flex flex-col justify-between gap-5 lg:col-span-6">
            <div className="overflow-hidden rounded-2xl border border-ink/8 bg-white shadow-sm">
              <iframe
                title="Localização MA Soluções e Engenharia — João Monlevade, MG"
                src="https://www.google.com/maps?q=Rua+Nova+Lima,+96,+Carneirinhos,+Joao+Monlevade,+MG,+35930-244&output=embed"
                className="h-[240px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-forest/15 bg-white p-4">
                <span className="font-mono text-[9.5px] font-bold uppercase tracking-widest text-forest">
                  MATRIZ • MINAS GERAIS
                </span>
                <p className="mt-1.5 text-[13px] font-bold text-ink">{ENDERECO}</p>
                <p className="mt-1 font-mono text-[11px] font-semibold text-forest">{CREA}</p>
              </div>

              <div className="rounded-2xl border border-forest/15 bg-white p-4">
                <span className="font-mono text-[9.5px] font-bold uppercase tracking-widest text-forest">
                  CANAIS DIRETOS
                </span>
                <p className="mt-1.5 text-[13px] font-bold text-ink tabular-nums">{TELEFONE}</p>
                <p className="mt-0.5 truncate text-[12px] font-medium text-ink/70">{EMAIL}</p>
                <p className="truncate text-[12px] font-medium text-ink/70">{EMAIL_ALT}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WATERMARK GIGANTE EM DEGRADÊ SUAVE (1:1 com MAXTHERM de inspiraçao.webp) */}
      <div aria-hidden="true" className="pointer-events-none select-none overflow-hidden px-2 text-center">
        <div
          className="font-display text-[clamp(3.4rem,12.2vw,11.5rem)] font-extrabold uppercase leading-[0.86] tracking-[-0.04em]"
          style={{
            background:
              "linear-gradient(180deg, rgba(11,122,90,0.26) 0%, rgba(11,122,90,0.06) 72%, rgba(255,255,255,0) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          MA ENGENHARIA
        </div>
      </div>

      {/* RODAPÉ MINIMALISTA BRANCO (1:1 com inspiraçao.webp) */}
      <div className="border-t border-ink/8 bg-white pb-12 pt-9">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3">
                <img
                  src="/assets/logo-emblem.png"
                  alt="MA Soluções e Engenharia"
                  width="36"
                  height="36"
                  className="h-9 w-9 object-contain"
                />
                <div>
                  <span className="font-display text-[17px] font-extrabold text-ink">
                    MA | Soluções e Engenharia
                  </span>
                  <span className="block font-mono text-[9.5px] font-bold uppercase tracking-widest text-forest">
                    {CREA}
                  </span>
                </div>
              </div>

              <p className="mt-4 max-w-sm text-[13.5px] leading-relaxed text-ink/70">
                Projetos inteligentes, resultados eficientes. Engenharia Elétrica, Controle e Automação, Consultoria e
                Laudos Técnicos.
              </p>

              <a
                href={`${WHATSAPP}?text=${encodeURIComponent("Olá! Gostaria de falar com um engenheiro da MA Soluções e Engenharia.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex max-w-sm items-center justify-between border-b border-ink/25 pb-2 text-[13px] font-bold text-ink transition hover:border-forest hover:text-forest"
              >
                <span>Solicitar orçamento técnico agora</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>

            <div className="flex flex-col justify-center gap-3.5 lg:col-span-3">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3.5 text-[13px] font-semibold text-ink/80 transition hover:text-forest"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-forest text-white transition group-hover:bg-ink">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="tabular-nums">{TELEFONE}</span>
              </a>

              <a
                href={`mailto:${EMAIL}`}
                className="group flex items-center gap-3.5 text-[13px] font-semibold text-ink/80 transition hover:text-forest"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-forest text-white transition group-hover:bg-ink">
                  <Mail className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="truncate">{EMAIL}</span>
              </a>

              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3.5 text-[13px] font-semibold text-ink/80 transition hover:text-forest"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-forest text-white transition group-hover:bg-ink">
                  <Instagram className="h-4 w-4" aria-hidden="true" />
                </span>
                <span>{INSTAGRAM}</span>
              </a>

              <div className="flex items-center gap-3.5 text-[12.5px] font-medium text-ink/70">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-mint text-forest">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                </span>
                <span>João Monlevade — MG</span>
              </div>
            </div>

            <div className="lg:col-span-2">
              <h3 className="font-display text-[13px] font-extrabold uppercase tracking-wider text-ink">
                Navegação
              </h3>
              <ul className="mt-4 space-y-2.5 text-[13px] font-medium text-ink/70">
                <li>
                  <a href="#inicio" className="transition hover:text-forest">
                    Início
                  </a>
                </li>
                <li>
                  <a href="#servicos" className="transition hover:text-forest">
                    Serviços
                  </a>
                </li>
                <li>
                  <a href="#quem-somos" className="transition hover:text-forest">
                    Quem Somos
                  </a>
                </li>
                <li>
                  <a href="#compromisso" className="transition hover:text-forest">
                    Compromisso
                  </a>
                </li>
                <li>
                  <a href="#contato" className="transition hover:text-forest">
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h3 className="font-display text-[13px] font-extrabold uppercase tracking-wider text-ink">Serviços</h3>
              <ul className="mt-4 space-y-2 text-[12.5px] font-medium text-ink/70">
                <li>Elaboração de Projetos Elétricos</li>
                <li>Elaboração de Laudos Técnicos</li>
                <li>Consultoria Técnica em Engenharia</li>
                <li>Controle e Automação (UFOP)</li>
                <li>Adequação NR-10 e NBR 5410</li>
                <li>Laudo de SPDA (NBR 5419)</li>
                <li>Emissão de ART — CREA-MG</li>
              </ul>
            </div>
          </div>

          <div className="mt-10 border-t border-ink/8 pt-6 text-center text-[12px] font-medium text-ink/55">
            © {new Date().getFullYear()} MA | Soluções e Engenharia Ltda • {CREA} • Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}
