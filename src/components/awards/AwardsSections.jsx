import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { CITACAO, WHATSAPP } from "../../data";

gsap.registerPlugin(ScrollTrigger);

const wa = (t) => `${WHATSAPP}?text=${encodeURIComponent(t)}`;

/* ───────── MANIFESTO: texto que acende palavra por palavra ───────── */
export function Manifesto() {
  const ref = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".mf-w",
        { opacity: 0.12 },
        {
          opacity: 1,
          stagger: 0.12,
          ease: "none",
          scrollTrigger: { trigger: ref.current, start: "top 75%", end: "bottom 65%", scrub: true },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="manifesto" className="bg-[#F4F2EE] px-5 py-32 sm:px-10 sm:py-48">
      <p className="mb-10 font-mono text-[11px] uppercase tracking-[0.3em] text-[#0B7A5A]">( Manifesto )</p>
      <p className="max-w-[1250px] text-[clamp(1.9rem,5.2vw,5rem)] font-semibold leading-[1.08] tracking-[-0.035em] text-[#0b0d0c]">
        {CITACAO.split(" ").map((w, i) => (
          <span key={i} className="mf-w inline-block pr-[0.25em]">
            {w}
          </span>
        ))}
      </p>
    </section>
  );
}

/* ───────── SERVIÇOS: rolagem horizontal pinada ───────── */
const SERVICES = [
  {
    n: "01",
    title: "Projetos Elétricos",
    norma: "ABNT NBR 5410",
    desc: "Projetos em CAD e BIM com dimensionamento, diagramas unifilares e memorial descritivo, prontos para executar em obra.",
    tags: ["CAD / BIM", "Memorial", "ART"],
    img: "/assets/projetos-eletricos.jpg",
  },
  {
    n: "02",
    title: "Laudos Técnicos",
    norma: "NR-10",
    desc: "Inspeção em campo, diagnóstico de riscos e laudo com responsabilidade técnica registrada para auditorias e fiscalizações.",
    tags: ["Inspeção", "Laudo + ART", "NR-10"],
    img: "/assets/eng-inspecao-medicao.jpg",
  },
  {
    n: "03",
    title: "Consultoria Técnica",
    norma: "Eficiência & Conformidade",
    desc: "Acompanhamento do estudo preliminar à energização, com foco em segurança operacional, redução de custos e eficiência.",
    tags: ["Revisão", "Compatibilização", "Obra"],
    img: "/assets/eng-projeto-arquitetura.jpg",
  },
  {
    n: "04",
    title: "Controle e Automação",
    norma: "Base UFOP",
    desc: "Soluções inteligentes apoiadas na formação em Engenharia de Controle e Automação para sistemas prediais e industriais.",
    tags: ["Automação", "Controle", "Eficiência"],
    img: "/assets/img-automacao.jpg",
  },
];

export function Services() {
  const sec = useRef(null);
  const track = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
      const dist = () => track.current.scrollWidth - window.innerWidth;
      gsap.to(track.current, {
        x: () => -dist(),
        ease: "none",
        scrollTrigger: {
          trigger: sec.current,
          start: "top top",
          end: () => "+=" + dist(),
          pin: true,
          scrub: true,
          invalidateOnRefresh: true,
        },
      });
    });
    return () => mm.revert();
  }, []);

  return (
    <section ref={sec} id="servicos" className="relative overflow-hidden bg-[#060808] py-24 text-white lg:flex lg:h-screen lg:items-center lg:py-0">
      <div ref={track} className="flex flex-col gap-6 px-5 sm:px-10 lg:w-max lg:flex-row lg:items-center lg:gap-10 lg:pr-[10vw] will-change-transform">
        <div className="shrink-0 lg:w-[34vw]">
          <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.3em] text-[#34D399]">( Serviços )</p>
          <h2 className="text-[clamp(3rem,7.5vw,8rem)] font-bold uppercase leading-[0.88] tracking-[-0.05em]">
            O que
            <br />
            <span className="font-serif font-normal normal-case italic text-[#34D399]">fazemos.</span>
          </h2>
          <p className="mt-6 hidden font-mono text-[11px] uppercase tracking-[0.25em] text-white/40 lg:block">
            Role → 
          </p>
        </div>

        {SERVICES.map((s) => (
          <article
            key={s.n}
            className="grid shrink-0 grid-cols-1 overflow-hidden rounded-[2rem] border border-white/10 bg-[#0d1210] lg:h-[70vh] lg:w-[60vw] lg:grid-cols-2"
          >
            <div className="flex flex-col justify-between gap-10 p-8 lg:p-12">
              <div className="flex items-start justify-between">
                <span className="font-mono text-sm text-white/40">{s.n} / 04</span>
                <span className="rounded-full border border-[#34D399]/40 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-[#34D399]">
                  {s.norma}
                </span>
              </div>
              <div>
                <h3 className="text-[clamp(1.9rem,3.4vw,3.4rem)] font-bold leading-[0.98] tracking-[-0.04em]">{s.title}</h3>
                <p className="mt-4 text-[15px] leading-relaxed text-white/60">{s.desc}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span key={t} className="rounded-full bg-white/[0.07] px-3 py-1 text-[12px] text-white/70">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative min-h-[260px]">
              <img src={s.img} alt={s.title} className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0d1210] via-transparent to-transparent lg:from-[#0d1210]/70" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ───────── SOLUÇÕES: lista com imagem que segue o cursor ───────── */
const SOLUTIONS = [
  { t: "Projeto elétrico residencial e comercial", n: "NBR 5410", img: "/assets/img-residencial.jpg" },
  { t: "Laudo técnico e prontuário elétrico", n: "NR-10", img: "/assets/img-nr10.jpg" },
  { t: "SPDA, para-raios e aterramento", n: "NBR 5419", img: "/assets/img-spda.jpg" },
  { t: "Entradas de energia e subestações", n: "MT / BT", img: "/assets/sol-subestacao.jpg" },
  { t: "Adequação de painéis e quadros", n: "Consultoria", img: "/assets/sol-adequacao-paineis.webp" },
  { t: "Automação e eficiência predial", n: "UFOP", img: "/assets/sol-automacao-predial.webp" },
];

export function Solutions() {
  const sec = useRef(null);
  const prev = useRef(null);
  const [hover, setHover] = useState(-1);
  const qx = useRef(null);
  const qy = useRef(null);

  useEffect(() => {
    qx.current = gsap.quickTo(prev.current, "x", { duration: 0.6, ease: "power3" });
    qy.current = gsap.quickTo(prev.current, "y", { duration: 0.6, ease: "power3" });
  }, []);

  const onMove = (e) => {
    const r = sec.current.getBoundingClientRect();
    qx.current?.(e.clientX - r.left - 170);
    qy.current?.(e.clientY - r.top - 120);
  };

  return (
    <section
      ref={sec}
      id="solucoes"
      onMouseMove={onMove}
      className="relative overflow-hidden bg-[#F4F2EE] px-5 py-28 sm:px-10 sm:py-40"
    >
      <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.3em] text-[#0B7A5A]">( Soluções )</p>
      <h2 className="mb-16 text-[clamp(2.6rem,7vw,7rem)] font-bold uppercase leading-[0.9] tracking-[-0.05em] text-[#0b0d0c]">
        Engenharia
        <br />
        <span className="font-serif font-normal normal-case italic text-[#0B7A5A]">sob medida.</span>
      </h2>

      <div
        ref={prev}
        className="pointer-events-none absolute left-0 top-0 z-20 hidden h-[240px] w-[340px] overflow-hidden rounded-2xl shadow-2xl transition-opacity duration-300 lg:block"
        style={{ opacity: hover >= 0 ? 1 : 0 }}
      >
        {SOLUTIONS.map((s, i) => (
          <img
            key={s.img}
            src={s.img}
            alt=""
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300"
            style={{ opacity: hover === i ? 1 : 0 }}
          />
        ))}
      </div>

      <ul onMouseLeave={() => setHover(-1)} className="relative z-10 border-t border-black/15">
        {SOLUTIONS.map((s, i) => (
          <li key={s.t} onMouseEnter={() => setHover(i)}>
            <a
              href={wa(`Olá! Gostaria de um orçamento para: ${s.t} (${s.n}).`)}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-6 border-b border-black/15 py-6 transition-all duration-300 hover:px-4 sm:py-9"
            >
              <span className="flex items-baseline gap-5 sm:gap-10">
                <span className="font-mono text-xs text-black/40">0{i + 1}</span>
                <span className="text-[clamp(1.25rem,3.2vw,3rem)] font-semibold tracking-[-0.03em] text-[#0b0d0c] transition-colors group-hover:text-[#0B7A5A]">
                  {s.t}
                </span>
              </span>
              <span className="flex shrink-0 items-center gap-4">
                <span className="hidden rounded-full border border-black/20 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-black/60 sm:block">
                  {s.n}
                </span>
                <ArrowUpRight className="h-6 w-6 text-black/40 transition-all group-hover:rotate-12 group-hover:text-[#0B7A5A]" />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ───────── PROCESSO: cartões que empilham ───────── */
const STEPS = [
  { n: "01", t: "Diagnóstico", d: "Analisamos plantas, demandas de carga e condições da entrada de energia para definir as premissas do sistema.", img: "/assets/eng-painel-automacao.jpg", c: "bg-white text-[#0b0d0c]" },
  { n: "02", t: "Dimensionamento", d: "Cálculos de demanda, queda de tensão, proteções e aterramento, desenvolvidos em CAD e BIM.", img: "/assets/img-calculo.jpg", c: "bg-[#0B7A5A] text-white" },
  { n: "03", t: "Memorial & ART", d: "Documentação executiva completa, diagramas e Anotação de Responsabilidade Técnica registrada.", img: "/assets/laudos-inspecao.jpg", c: "bg-[#0b0d0c] text-white" },
  { n: "04", t: "Entrega & Suporte", d: "Entrega organizada e orientação à equipe de execução até a energização final, em conformidade com a NR-10.", img: "/assets/hero-electrical-eng.jpg", c: "bg-[#34D399] text-[#04130d]" },
];

export function Process() {
  return (
    <section id="processo" className="bg-[#E9E6E0] px-5 pb-32 pt-28 sm:px-10 sm:pt-40">
      <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.3em] text-[#0B7A5A]">( Processo )</p>
      <h2 className="mb-20 text-[clamp(2.6rem,7vw,7rem)] font-bold uppercase leading-[0.9] tracking-[-0.05em] text-[#0b0d0c]">
        Da análise
        <br />
        <span className="font-serif font-normal normal-case italic text-[#0B7A5A]">à entrega.</span>
      </h2>

      <div className="relative">
        {STEPS.map((s, i) => (
          <article
            key={s.n}
            className={`sticky mb-8 sm:mb-10 grid min-h-[52vh] sm:min-h-[56vh] grid-cols-1 overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] shadow-[0_-20px_60px_rgba(0,0,0,0.12)] md:grid-cols-2 ${s.c}`}
            style={{ top: `${76 + i * 18}px` }}
          >
            <div className="flex flex-col justify-between gap-6 sm:gap-10 p-6 sm:p-12">
              <span className="font-bold leading-none tracking-[-0.06em] text-[clamp(3.2rem,10vw,9rem)] opacity-90">{s.n}</span>
              <div>
                <h3 className="text-[clamp(1.5rem,3.6vw,3.4rem)] font-bold tracking-[-0.04em]">{s.t}</h3>
                <p className="mt-2.5 sm:mt-3 max-w-[420px] text-[14px] sm:text-[15px] leading-relaxed opacity-75">{s.d}</p>
              </div>
            </div>
            <div className="relative min-h-[200px] sm:min-h-[240px]">
              <img src={s.img} alt={s.t} className="absolute inset-0 h-full w-full object-cover" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
