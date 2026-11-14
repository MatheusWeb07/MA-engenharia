import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { WHATSAPP } from "../../data";

gsap.registerPlugin(ScrollTrigger);

const MARQUEE = [
  "ABNT NBR 5410",
  "NR-10",
  "NBR 5419 · SPDA",
  "UFOP · Controle e Automação",
  "ART Registrada",
  "Projetos · Laudos · Consultoria",
];

const TRACES = [
  "M-20 720 H300 V580 H640 V430 H1010",
  "M1460 180 H1190 V330 H910 V470",
  "M180 920 V790 H530 V690",
  "M1120 920 V770 H1320 V620 H1460",
  "M-20 300 H220 V200 H480",
];

export default function AwardsHero({ ready }) {
  const ref = useRef(null);
  const glow = useRef(null);
  const bg = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".hl-in", { yPercent: 118 });
      gsap.set(".hero-fade", { opacity: 0, y: 24 });
      gsap.to(bg.current, {
        yPercent: 16,
        scale: 1.08,
        ease: "none",
        scrollTrigger: { trigger: ref.current, start: "top top", end: "bottom top", scrub: true },
      });
      gsap.to(".hero-content", {
        yPercent: -8,
        opacity: 0.2,
        ease: "none",
        scrollTrigger: { trigger: ref.current, start: "top top", end: "bottom top", scrub: true },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!ready) return;
    const ctx = gsap.context(() => {
      gsap.to(".hl-in", { yPercent: 0, duration: 1.4, stagger: 0.13, ease: "expo.out" });
      gsap.to(".hero-fade", { opacity: 1, y: 0, duration: 1, stagger: 0.1, delay: 0.7, ease: "power3.out" });
    }, ref);
    return () => ctx.revert();
  }, [ready]);

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    glow.current.style.setProperty("--mx", `${e.clientX - r.left}px`);
    glow.current.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <section
      id="inicio"
      ref={ref}
      onMouseMove={onMove}
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-[#060808] text-white"
    >
      <div ref={bg} className="absolute inset-0">
        <img
          src="/assets/eng-subestacao-industrial.jpg"
          alt=""
          className="h-full w-full object-cover opacity-40 grayscale-[35%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#060808]/80 via-[#060808]/55 to-[#060808]" />
      </div>

      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        {TRACES.map((d, i) => (
          <g key={i}>
            <path d={d} stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
            <path
              d={d}
              pathLength="1000"
              stroke="#34D399"
              strokeWidth="2"
              strokeLinecap="round"
              className="trace-pulse"
              style={{ animationDelay: `${i * 0.9}s`, animationDuration: `${5 + i}s` }}
            />
          </g>
        ))}
      </svg>

      <div
        ref={glow}
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(520px circle at var(--mx,70%) var(--my,35%), rgba(14,150,110,0.22), transparent 60%)",
        }}
      />

      <div className="hero-content relative z-10 px-5 pb-8 pt-28 sm:px-10 sm:pb-10 sm:pt-40">
        <div className="hero-fade mb-5 sm:mb-6 flex items-center gap-3 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.18em] sm:tracking-[0.28em] text-white/60">
          <span className="h-px w-8 sm:w-10 shrink-0 bg-[#34D399]" />
          <span>Engenharia elétrica · Controle e automação · João Monlevade, MG</span>
        </div>

        <h1 className="font-bold uppercase leading-[0.94] sm:leading-[0.88] tracking-[-0.055em] text-[clamp(2.25rem,10.2vw,12rem)]">
          <span className="block overflow-hidden pb-[0.06em]">
            <span className="hl-in block">Projetos</span>
          </span>
          <span className="block overflow-hidden pb-[0.06em]">
            <span className="hl-in block">Inteligentes</span>
          </span>
          <span className="block overflow-hidden pb-[0.12em]">
            <span className="hl-in block font-serif text-[0.68em] sm:text-[0.62em] font-normal normal-case italic tracking-[-0.03em] text-[#34D399]">
              resultados eficientes.
            </span>
          </span>
        </h1>

        <div className="mt-8 sm:mt-10 flex flex-col gap-6 sm:gap-8 sm:flex-row sm:items-end sm:justify-between">
          <p className="hero-fade max-w-[440px] text-[14px] sm:text-[15px] leading-relaxed text-white/65">
            Projetos elétricos, laudos técnicos e consultoria com rigor normativo, assinados por engenheiros
            eletricistas formados pela UFOP.
          </p>
          <div className="hero-fade flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
            <a
              href={`${WHATSAPP}?text=${encodeURIComponent("Olá! Gostaria de solicitar um orçamento com a MA Soluções e Engenharia.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#34D399] px-6 sm:px-7 py-3.5 sm:py-4 text-[12.5px] sm:text-[13px] font-bold uppercase tracking-wide text-[#04130d] transition-transform duration-300 hover:scale-105"
            >
              Solicitar orçamento
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 sm:px-7 py-3.5 sm:py-4 text-[12.5px] sm:text-[13px] font-semibold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-black"
            >
              Ver serviços
            </a>
          </div>
        </div>
      </div>

      <div className="relative z-10 overflow-hidden border-t border-white/10 py-4">
        <div className="marquee-track">
          {[0, 1].map((k) => (
            <div key={k} className="flex shrink-0 items-center">
              {MARQUEE.map((m) => (
                <span
                  key={m + k}
                  className="mx-8 flex items-center gap-8 font-mono text-[12px] uppercase tracking-[0.25em] text-white/55"
                >
                  {m}
                  <span className="h-1.5 w-1.5 rounded-full bg-[#34D399]" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
