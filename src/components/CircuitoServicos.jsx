import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BarChart3,
  DraftingCompass,
  FileSignature,
  Gauge,
  GraduationCap,
  Scale,
  Search,
  Settings,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import MaskText, { FadeUp } from "./MaskText";
import { CIRCUITO_AREAS } from "../data";

const ICONS = {
  search: Search,
  settings: Settings,
  bars: BarChart3,
  sign: FileSignature,
  shield: ShieldCheck,
  gauge: Gauge,
  cap: GraduationCap,
  compass: DraftingCompass,
  scale: Scale,
  trend: TrendingUp,
};

const NODES = [
  { x: 0, y: 20, w: 280, h: 185 },
  { x: 330, y: 20, w: 280, h: 185 },
  { x: 0, y: 255, w: 280, h: 185 },
  { x: 330, y: 255, w: 280, h: 185 },
];

const PATHS = [
  "M280,112 H330",
  "M280,347 H330",
  "M610,112 H645 Q665,112 665,140 V210 Q665,230 685,230",
  "M610,347 H645 Q665,347 665,320 V250 Q665,230 685,230",
];

function Node({ cat, active, onClick, style, className = "", isAbsolute = false }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={style}
      className={`group ${
        isAbsolute ? "absolute" : "relative"
      } flex flex-col justify-between overflow-hidden rounded-[22px] border p-4 text-left transition-all duration-500 sm:p-6 ${
        active
          ? "border-forest bg-forest text-white shadow-[0_24px_60px_-12px_rgba(11,122,90,0.5)]"
          : "border-ink/10 bg-white text-ink shadow-[0_12px_30px_-15px_rgba(30,30,30,0.1)] hover:border-forest/50"
      } ${className}`}
    >
      <span
        className={`font-mono text-[11px] font-bold tracking-widest ${
          active ? "text-white/80" : "text-forest"
        }`}
      >
        [ Especialidade ]
      </span>
      <span className="mt-2">
        <span
          className={`block font-display text-[15px] font-bold leading-snug sm:text-[19px] ${
            active ? "text-white" : "text-ink"
          }`}
        >
          {cat.nome}
        </span>
        <span
          className={`mt-1.5 block text-[11.5px] leading-snug sm:text-[13px] ${
            active ? "text-white/85" : "text-ink/65"
          }`}
        >
          {cat.subtitulo}
        </span>
      </span>
    </button>
  );
}

/**
 * Arquitetura Interativa de Circuitos (Nível ANL Engenharia sobre Fundo Claro):
 * 4 áreas de engenharia convergindo por trilhas luminosas em tempo real para o chip MA.
 */
export default function CircuitoServicos() {
  const [active, setActive] = useState(0);
  const cats = CIRCUITO_AREAS;
  const cat = cats[active];

  return (
    <section id="servicos" className="grid-lines relative overflow-hidden border-t border-ink/10 bg-[#F7FAF9] py-24 sm:py-32">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
        <div className="mx-auto max-w-3xl text-center">
          <FadeUp>
            <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.18em] text-forest">
              [ Engenharia Integrada ]
            </p>
          </FadeUp>
          <MaskText
            text={"ARQUITETURA TÉCNICA\nSOB MEDIDA"}
            className="font-display text-[clamp(2.2rem,5.4vw,4.8rem)] font-bold leading-[0.98] tracking-[-0.045em] text-ink"
          />
          <FadeUp delay={0.15}>
            <p className="mx-auto mt-5 max-w-xl text-[15.5px] text-ink/70">
              Clique em cada módulo do circuito abaixo para inspecionar nossas frentes de atuação e entregáveis técnicos.
            </p>
          </FadeUp>
        </div>

        {/* Diagrama Interativo de Convergência (Desktop) */}
        <FadeUp delay={0.1} className="mt-16">
          <div
            className="relative mx-auto hidden w-full max-w-[1100px] md:block"
            style={{ aspectRatio: "1000 / 460" }}
          >
            <svg viewBox="0 0 1000 460" className="absolute inset-0 h-full w-full" fill="none">
              <defs>
                <linearGradient id="maCircuitGrad" x1="0" x2="1">
                  <stop offset="0" stopColor="#0B7A5A" stopOpacity="0.25" />
                  <stop offset="1" stopColor="#0B7A5A" stopOpacity="1" />
                </linearGradient>
              </defs>
              {/* Pinos técnicos ao redor do chip central */}
              <g stroke="#0B7A5A" strokeOpacity="0.35" strokeWidth="1.5">
                {[150, 190, 270, 310].map((y) => (
                  <path key={y} d={`M960,${y} H${990 - (y % 3) * 6}`} />
                ))}
                {[740, 800, 860, 920].map((x) => (
                  <path key={x} d={`M${x},100 V${60 - (x % 5)}`} />
                ))}
                {[740, 800, 860, 920].map((x) => (
                  <path key={"b" + x} d={`M${x},360 V${400 + (x % 5)}`} />
                ))}
              </g>
              {PATHS.map((d, i) => (
                <g key={i}>
                  <path d={d} stroke="#1E1E1E" strokeOpacity="0.12" strokeWidth="2.5" />
                  <path d={d} stroke="url(#maCircuitGrad)" strokeWidth="3" className="flow-line" />
                </g>
              ))}
            </svg>

            {cats.map((c, i) => (
              <Node
                key={c.slide}
                cat={c}
                active={i === active}
                onClick={() => setActive(i)}
                isAbsolute
                style={{
                  left: `${NODES[i].x / 10}%`,
                  top: `${NODES[i].y / 4.6}%`,
                  width: `${NODES[i].w / 10}%`,
                  height: `${NODES[i].h / 4.6}%`,
                }}
              />
            ))}

            {/* Chip Central Flutuante com a Logo MA */}
            <div
              className="floaty absolute grid place-items-center rounded-[34px] border border-forest/30 bg-ink shadow-[0_30px_80px_-15px_rgba(11,122,90,0.45)]"
              style={{ left: "68.5%", top: `${20 / 4.6}%`, width: "31.5%", height: `${420 / 4.6}%` }}
            >
              <span className="absolute inset-3 rounded-[26px] border border-white/15" />
              <span className="grid aspect-square w-[62%] place-items-center rounded-full bg-white p-5 shadow-[0_0_45px_rgba(11,122,90,0.65)] ring-4 ring-forest">
                <img src="/assets/logo-emblem.png" alt="MA Engenharia" className="h-full w-full object-contain" />
              </span>
            </div>
          </div>

          {/* Versão Mobile */}
          <div className="grid grid-cols-2 gap-3 md:hidden">
            {cats.map((c, i) => (
              <Node
                key={c.slide}
                cat={c}
                active={i === active}
                onClick={() => setActive(i)}
                className="min-h-[135px]"
              />
            ))}
          </div>
        </FadeUp>

        {/* Cards 3D da Área Selecionada */}
        <div className="mt-16 sm:mt-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={cat.slide}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <div className="mb-9 flex flex-col gap-2 border-b border-ink/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
                <h3 className="font-display text-[clamp(1.6rem,3.2vw,2.6rem)] font-bold leading-tight tracking-[-0.035em] text-ink">
                  {cat.nome}
                </h3>
                <p className="text-[14.5px] font-bold text-forest sm:max-w-sm sm:text-right">{cat.subtitulo}</p>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {cat.itens.map((it, i) => {
                  const Icon = ICONS[it.icon] || ShieldCheck;
                  return (
                    <motion.article
                      key={it.titulo}
                      data-hover
                      initial={{ opacity: 0, y: 40, rotateX: 16 }}
                      animate={{ opacity: 1, y: 0, rotateX: 0 }}
                      transition={{ duration: 0.65, delay: 0.08 + i * 0.1, ease: [0.2, 0.8, 0.2, 1] }}
                      style={{ transformPerspective: 1200 }}
                      className="group relative flex flex-col overflow-hidden rounded-[24px] border border-ink/10 bg-white p-7 shadow-[0_20px_50px_-25px_rgba(30,30,30,0.12)] transition duration-300 hover:-translate-y-1.5 hover:border-forest hover:shadow-[0_25px_60px_-20px_rgba(11,122,90,0.28)]"
                    >
                      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-forest text-white shadow-[0_10px_24px_-6px_rgba(11,122,90,0.6)] transition-transform duration-300 group-hover:scale-105">
                        <Icon className="h-6 w-6" />
                      </span>
                      <h4 className="mt-6 font-display text-[19px] font-bold leading-snug text-ink">
                        {it.titulo}
                      </h4>
                      <p className="mt-3 flex-1 text-[14.5px] leading-relaxed text-ink/70">{it.texto}</p>
                      <div className="mt-6 border-t border-ink/10 pt-4">
                        <p className="font-mono text-[10.5px] font-bold uppercase tracking-widest text-forest">
                          Impacto Direto
                        </p>
                        <p className="mt-1 text-[13.5px] font-semibold leading-snug text-ink">{it.resultado}</p>
                      </div>
                    </motion.article>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
