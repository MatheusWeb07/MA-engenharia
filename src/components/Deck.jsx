import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowUpRight,
  ClipboardX,
  FileWarning,
  GraduationCap,
  MapPin,
  ShieldCheck,
  UserX,
} from "lucide-react";
import { CREA, FUNDADORES, SUBTITULO, WHATSAPP } from "../data";
import { scrollToY } from "../scroll";

const SLIDE_W = 78; // vw
const GAP = 3; // vw
const STEP = SLIDE_W + GAP;

const wa = (t) => `${WHATSAPP}?text=${encodeURIComponent(t)}`;

function useIsDesktop() {
  const [d, setD] = useState(() =>
    typeof window === "undefined" ? true : window.matchMedia("(min-width:1024px)").matches
  );
  useEffect(() => {
    const m = window.matchMedia("(min-width:1024px)");
    const f = () => setD(m.matches);
    m.addEventListener("change", f);
    return () => m.removeEventListener("change", f);
  }, []);
  return d;
}

/* Revela o conteúdo quando o slide fica ativo */
function Reveal({ active, delay = 0, y = 18, className = "", children }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={false}
      animate={active || reduce ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.7, delay: active ? delay : 0, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Pill({ children, dark }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[12px] font-semibold ${
        dark ? "border-white/20 bg-white/5 text-white/85" : "border-ink/10 bg-white/70 text-ink/75"
      }`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-forest" />
      {children}
    </span>
  );
}

/* ---------------------------- SLIDE 1 — abertura ---------------------------- */
function SlideHero({ active }) {
  const reduce = useReducedMotion();
  return (
    <div className="relative h-full overflow-hidden">
      {/* forma vítrea verde (inspirada na peça 3D do vídeo) */}
      <motion.div
        aria-hidden="true"
        animate={reduce ? undefined : { rotate: [0, 6, 0], y: [0, 10, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="gpu absolute -left-[12%] -top-[22%] h-[78%] w-[52%] rounded-[46%_54%_60%_40%/50%_42%_58%_50%]"
        style={{
          background:
            "linear-gradient(135deg,#FFFFFF 0%,#BDEBDA 22%,#34B488 52%,#0B7A5A 78%,#064E39 100%)",
          boxShadow: "inset -30px -40px 80px rgba(6,78,57,.45), inset 30px 30px 70px rgba(255,255,255,.7)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute left-[2%] top-[4%] h-[34%] w-[24%] rounded-full bg-white/60 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(to right,rgba(11,122,90,.07) 1px,transparent 1px),linear-gradient(to bottom,rgba(11,122,90,.07) 1px,transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative flex h-full items-center justify-end p-8 lg:p-14">
        <div className="max-w-[560px] lg:mr-[4%]">
          <Reveal active={active}>
            <Pill>{CREA}</Pill>
          </Reveal>
          <Reveal active={active} delay={0.08} className="mt-5">
            <h1 className="font-display text-[clamp(2.4rem,4.6vw,4.4rem)] font-bold leading-[1.02] tracking-[-0.035em] text-ink">
              Projetos inteligentes,
              <br />
              <span className="relative inline-block text-forest">
                resultados eficientes.
                <svg
                  viewBox="0 0 400 18"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                  className="absolute -bottom-2 left-0 h-3 w-full"
                >
                  <motion.path
                    d="M3 12 C 70 2, 140 16, 205 8 S 340 4, 397 10"
                    fill="none"
                    stroke="#0B7A5A"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    initial={false}
                    animate={{ pathLength: active || reduce ? 1 : 0 }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                  />
                </svg>
              </span>
            </h1>
          </Reveal>
          <Reveal active={active} delay={0.18} className="mt-6">
            <p className="max-w-[460px] text-[15px] leading-relaxed text-ink/70">
              {SUBTITULO}. Do dimensionamento ao laudo, com responsabilidade técnica de engenheiros formados pela UFOP.
            </p>
          </Reveal>
          <Reveal active={active} delay={0.26} className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={wa("Olá! Gostaria de solicitar um orçamento com a MA Soluções e Engenharia.")}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-4 rounded-full bg-ink py-1.5 pl-6 pr-1.5 text-[13px] font-semibold text-white transition-colors hover:bg-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2"
            >
              Solicitar orçamento
              <span className="grid h-9 w-9 place-items-center rounded-full bg-forest text-white transition-transform duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-ink">
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </a>
            <button
              type="button"
              onClick={() => scrollToY(window.innerHeight * 1.0 + document.getElementById("deck").offsetTop)}
              className="rounded-full border border-ink/15 bg-white/70 px-5 py-3 text-[13px] font-semibold text-ink transition-colors hover:border-forest hover:text-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
            >
              Ver como trabalhamos
            </button>
          </Reveal>
        </div>
      </div>
    </div>
  );
}

/* ----------------------- SLIDE 2 — o problema (escuro) ---------------------- */
const RISKS = [
  { icon: FileWarning, t: "Projeto fora da norma", d: "Dimensionamento sem NBR 5410 gera sobrecarga, perdas e retrabalho." },
  { icon: ClipboardX, t: "Instalação sem laudo", d: "Sem inspeção e medição, falhas só aparecem quando já custam caro." },
  { icon: UserX, t: "Sem responsável técnico", d: "Sem ART, a segurança jurídica e a regularização ficam em aberto." },
];

function SlideProblem({ active }) {
  const reduce = useReducedMotion();
  return (
    <div className="relative h-full overflow-hidden bg-ink text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 70% at 78% 30%, rgba(11,122,90,.38) 0%, transparent 70%), radial-gradient(40% 50% at 10% 100%, rgba(16,158,116,.18) 0%, transparent 70%)",
        }}
      />
      <div className="relative grid h-full gap-6 p-8 lg:grid-cols-12 lg:p-14">
        <div className="flex flex-col justify-between lg:col-span-5">
          <Reveal active={active}>
            <p className="max-w-[260px] text-[14px] leading-relaxed text-white/60">
              Instalações elétricas improvisadas e sem acompanhamento limitam a operação e colocam pessoas em risco.
            </p>
          </Reveal>
          <Reveal active={active} delay={0.1}>
            <h2 className="font-display text-[clamp(2rem,3.6vw,3.3rem)] font-bold leading-[1.05] tracking-[-0.03em]">
              Eletricidade sem engenharia sai mais cara.
            </h2>
            <p className="mt-4 max-w-[380px] text-[14px] text-white/60">
              Por isso começamos pelo projeto certo, validamos com laudo e assinamos com ART.
            </p>
          </Reveal>
        </div>

        <div className="relative flex flex-col justify-center gap-4 lg:col-span-7">
          {RISKS.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={r.t}
                initial={false}
                animate={
                  active || reduce
                    ? { opacity: 1, x: 0, rotate: [-2, 1.5, -1][i] }
                    : { opacity: 0, x: 60, rotate: 4 }
                }
                transition={{ duration: 0.8, delay: active ? 0.2 + i * 0.12 : 0, ease: [0.22, 1, 0.36, 1] }}
                style={{ marginLeft: [0, 56, 18][i] }}
                className="gpu max-w-[460px] rounded-2xl border border-white/15 bg-white/[0.07] p-5 shadow-[0_24px_60px_-20px_rgba(0,0,0,.6)] backdrop-blur-md"
              >
                <div className="flex items-start gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-forest/90 text-white">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-[16px] font-semibold">{r.t}</h3>
                    <p className="mt-1 text-[13px] leading-relaxed text-white/60">{r.d}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ----------------- SLIDE 3 — como trabalhamos (diagrama) -------------------- */
const NODES = [
  { t: "Projetos elétricos", x: 14, y: 14 },
  { t: "Laudos técnicos", x: 10, y: 50 },
  { t: "Consultoria técnica", x: 14, y: 86 },
  { t: "Controle e automação", x: 86, y: 14 },
  { t: "NBR 5410 e NR-10", x: 90, y: 50 },
  { t: "ART no CREA-MG", x: 86, y: 86 },
];

function SlideMethod({ active }) {
  const reduce = useReducedMotion();
  return (
    <div className="grid h-full overflow-hidden bg-[#EEF7F3] lg:grid-cols-[28%_1fr]">
      <div className="relative hidden flex-col justify-between overflow-hidden bg-deep p-8 text-white lg:flex">
        <img src="/assets/logo-emblem.png" alt="" width="40" height="40" className="h-10 w-10 object-contain brightness-0 invert" />
        <div
          aria-hidden="true"
          className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-forest/50 blur-3xl"
        />
        <Reveal active={active} className="relative">
          <p className="text-[13px] leading-relaxed text-white/70">
            Três frentes conectadas, assinadas pelos mesmos engenheiros responsáveis.
          </p>
          <p className="mt-6 font-display text-[22px] font-bold leading-tight tracking-tight">
            MA Soluções
            <br />
            <span className="font-medium text-mint">e Engenharia</span>
          </p>
        </Reveal>
      </div>

      <div className="relative flex flex-col p-6 lg:p-12">
        <Reveal active={active}>
          <h2 className="font-display text-[clamp(1.8rem,3vw,2.8rem)] font-bold leading-[1.05] tracking-[-0.03em] text-ink">
            O jeito MA de conduzir engenharia
          </h2>
          <p className="mt-2 max-w-[460px] text-[14px] text-ink/60">
            Projeto, laudo e consultoria no mesmo fluxo, do primeiro dimensionamento à regularização.
          </p>
        </Reveal>

        <div className="relative mt-4 flex-1 rounded-3xl bg-white/70 ring-1 ring-ink/5">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true" className="absolute inset-0 h-full w-full">
            {NODES.map((n, i) => (
              <motion.line
                key={n.t}
                x1="50"
                y1="50"
                x2={n.x}
                y2={n.y}
                stroke="#0B7A5A"
                strokeOpacity="0.35"
                strokeWidth="0.35"
                strokeDasharray="1.2 1.2"
                vectorEffect="non-scaling-stroke"
                initial={false}
                animate={{ pathLength: active || reduce ? 1 : 0 }}
                transition={{ duration: 0.9, delay: 0.3 + i * 0.07 }}
              />
            ))}
          </svg>

          {[1, 2, 3].map((r) => (
            <motion.span
              key={r}
              aria-hidden="true"
              animate={reduce ? undefined : { scale: [1, 1.06, 1], opacity: [0.9, 0.6, 0.9] }}
              transition={{ duration: 3.4, repeat: Infinity, delay: r * 0.35, ease: "easeInOut" }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-forest/20"
              style={{ width: `${r * 15 + 8}%`, aspectRatio: "1", background: r === 3 ? "rgba(11,122,90,.05)" : "transparent" }}
            />
          ))}
          <div className="absolute left-1/2 top-1/2 grid h-[72px] w-[72px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-forest shadow-[0_18px_40px_-10px_rgba(11,122,90,.6)]">
            <img src="/assets/logo-emblem.png" alt="" width="40" height="40" className="h-10 w-10 object-contain brightness-0 invert" />
          </div>

          {NODES.map((n, i) => (
            <span
              key={n.t}
              style={{ left: `${n.x}%`, top: `${n.y}%` }}
              className="absolute -translate-x-1/2 -translate-y-1/2"
            >
              <motion.span
                initial={false}
                animate={active || reduce ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: active ? 0.5 + i * 0.07 : 0 }}
                className="block whitespace-nowrap rounded-full border border-forest/20 bg-white px-3.5 py-1.5 text-[12px] font-semibold text-ink shadow-sm"
              >
                {n.t}
              </motion.span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ------------------- SLIDE 4 — conformidade (escuro + barra) ---------------- */
function SlideProof({ active }) {
  const reduce = useReducedMotion();
  const BARS = 30;
  return (
    <div className="flex h-full flex-col overflow-hidden bg-ink text-white">
      <div className="bg-gradient-to-r from-[#CDEFE2] via-[#8FD9BD] to-[#34B488] px-8 py-6 text-ink lg:px-14">
        <Reveal active={active}>
          <h2 className="font-display text-[clamp(1.8rem,3.2vw,3rem)] font-bold leading-[1.05] tracking-[-0.03em]">
            Conformidade que escala com o seu projeto
          </h2>
          <p className="mt-1 text-[14px] text-ink/65">Do dimensionamento à emissão de ART, sem etapa solta.</p>
        </Reveal>
      </div>
      <div className="relative flex flex-1 flex-col justify-end p-8 lg:p-14">
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{ background: "radial-gradient(50% 60% at 15% 30%, rgba(11,122,90,.3), transparent 70%)" }}
        />
        <Reveal active={active} delay={0.1} className="relative flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-display text-[clamp(4rem,9vw,8rem)] font-bold leading-[0.9] tracking-[-0.05em] text-forest">
              ART
            </p>
            <p className="mt-2 text-[14px] text-white/60">Responsabilidade técnica registrada no CREA-MG em cada entrega.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {["NBR 5410", "NR-10", "NBR 5419"].map((n) => (
              <span key={n} className="rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-[12px] font-semibold text-white/85">
                {n}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="relative mt-8 flex h-[72px] items-end gap-[5px] sm:h-[96px]" aria-hidden="true">
          {Array.from({ length: BARS }).map((_, i) => (
            <motion.span
              key={i}
              initial={false}
              animate={active || reduce ? { scaleY: 1, opacity: i < 22 ? 1 : 0.22 } : { scaleY: 0.15, opacity: 0.2 }}
              transition={{ duration: 0.6, delay: active ? 0.3 + i * 0.025 : 0, ease: [0.22, 1, 0.36, 1] }}
              style={{
                transformOrigin: "bottom",
                background: `linear-gradient(180deg, ${i < 22 ? "#34B488" : "#fff"} 0%, #0B7A5A 100%)`,
              }}
              className="h-full flex-1 rounded-[3px]"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ----------------------- SLIDE 5 — quem faz (fundadores) -------------------- */
const FACTS = [
  { icon: GraduationCap, t: "Formação UFOP", d: "Engenharia elétrica com ênfase em controle e automação." },
  { icon: ShieldCheck, t: CREA, d: "Registro ativo para projetos, laudos e consultoria." },
  { icon: MapPin, t: "João Monlevade, MG", d: "Atendimento direto com os engenheiros responsáveis." },
];

function SlideTeam({ active }) {
  return (
    <div className="grid h-full overflow-hidden bg-[#EEF7F3] lg:grid-cols-[1fr_1fr]">
      <div className="relative min-h-[320px] overflow-hidden bg-gradient-to-br from-[#CDEFE2] via-[#6CCBA6] to-forest">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "linear-gradient(to right,rgba(255,255,255,.35) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,.35) 1px,transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div className="absolute inset-x-0 bottom-0 flex h-[96%] justify-center">
          <motion.img
            initial={false}
            animate={active ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            src="/assets/fundadores-cutout.png"
            alt="Marphiza Magalhães e Adeilson, engenheiros eletricistas fundadores da MA"
            width="520"
            height="760"
            className="h-full w-auto max-w-none object-contain drop-shadow-[0_20px_35px_rgba(6,78,57,.4)]"
          />
        </div>
        <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-white/90 px-4 py-3 shadow-lg backdrop-blur-md">
          <p className="font-display text-[15px] font-bold text-ink">{FUNDADORES}</p>
          <p className="text-[12px] text-ink/60">Engenheiros eletricistas, fundadores da MA</p>
        </div>
      </div>

      <div className="flex flex-col justify-center gap-5 bg-ink p-8 text-white lg:p-12">
        <Reveal active={active}>
          <h2 className="font-display text-[clamp(1.8rem,3vw,2.8rem)] font-bold leading-[1.05] tracking-[-0.03em]">
            Quem assina cada projeto
          </h2>
          <p className="mt-2 text-[14px] text-white/60">
            Parcerias de confiança, construídas com ética, profissionalismo e busca contínua por excelência.
          </p>
        </Reveal>
        <div className="space-y-3">
          {FACTS.map((f, i) => {
            const Icon = f.icon;
            return (
              <Reveal key={f.t} active={active} delay={0.15 + i * 0.1} y={22}>
                <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-forest text-white">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-display text-[15px] font-semibold">{f.t}</p>
                    <p className="text-[13px] text-white/60">{f.d}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const SLIDES = [
  { id: "inicio", label: "Início", C: SlideHero },
  { id: "risco", label: "O problema", C: SlideProblem },
  { id: "metodo", label: "Método", C: SlideMethod },
  { id: "prova", label: "Conformidade", C: SlideProof },
  { id: "equipe", label: "Equipe", C: SlideTeam },
];
const N = SLIDES.length;

function Shell({ i, pos, active, children }) {
  const scale = useTransform(pos, (v) => 1 - Math.min(Math.abs(v - i), 1) * 0.1);
  const opacity = useTransform(pos, (v) => 1 - Math.min(Math.abs(v - i), 1) * 0.6);
  return (
    <motion.article
      style={{ scale, opacity, width: `${SLIDE_W}vw` }}
      aria-hidden={!active}
      className="gpu relative h-full shrink-0 overflow-hidden rounded-[28px] bg-white shadow-[0_40px_90px_-30px_rgba(11,122,90,.35)] ring-1 ring-ink/5"
    >
      {children}
    </motion.article>
  );
}

export default function Deck() {
  const desktop = useIsDesktop();
  const ref = useRef(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.4 });
  const pos = useTransform(smooth, [0, 1], [0, N - 1]);
  const x = useTransform(pos, (v) => `${-v * STEP}vw`);

  useMotionValueEvent(pos, "change", (v) => setActiveIdx(Math.round(v)));

  const goTo = (i) => {
    const el = ref.current;
    if (!el) return;
    const total = el.offsetHeight - window.innerHeight;
    scrollToY(el.offsetTop + (i / (N - 1)) * total + 2);
  };

  if (!desktop) {
    return (
      <section id="deck" aria-label="Apresentação MA" className="space-y-4 px-3 pb-10 pt-24">
        {SLIDES.map(({ id, C }) => (
          <article key={id} className="relative min-h-[560px] overflow-hidden rounded-[24px] bg-white ring-1 ring-ink/5">
            <C active />
          </article>
        ))}
      </section>
    );
  }

  return (
    <section id="deck" ref={ref} aria-label="Apresentação MA" style={{ height: `${N * 90 + 40}vh` }} className="relative">
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden bg-[#F2F8F5]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(60% 50% at 50% 0%, #fff 0%, transparent 70%)" }}
        />
        <motion.div
          style={{ x, paddingLeft: `${(100 - SLIDE_W) / 2}vw`, gap: `${GAP}vw` }}
          className="gpu relative mt-[84px] flex h-[calc(100vh-170px)] min-h-[460px]"
        >
          {SLIDES.map(({ id, C }, i) => (
            <Shell key={id} i={i} pos={pos} active={activeIdx === i}>
              <C active={activeIdx === i} />
            </Shell>
          ))}
        </motion.div>

        {/* barra inferior de abas com pílula deslizante */}
        <div className="relative z-10 mt-auto flex justify-center pb-5">
          <div role="tablist" aria-label="Seções da apresentação" className="flex gap-1 rounded-full border border-ink/10 bg-white/85 p-1.5 shadow-lg backdrop-blur-md">
            {SLIDES.map((s, i) => {
              const on = activeIdx === i;
              return (
                <button
                  key={s.id}
                  role="tab"
                  aria-selected={on}
                  type="button"
                  onClick={() => goTo(i)}
                  className={`relative rounded-full px-4 py-2 text-[12.5px] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest ${
                    on ? "text-white" : "text-ink/65 hover:text-ink"
                  }`}
                >
                  {on && (
                    <motion.span
                      layoutId="deckTab"
                      transition={{ type: "spring", stiffness: 420, damping: 34 }}
                      className="absolute inset-0 -z-10 rounded-full bg-forest"
                    />
                  )}
                  {s.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

