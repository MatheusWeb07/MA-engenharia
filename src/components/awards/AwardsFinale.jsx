import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Plus, MapPin, Phone, Mail, Instagram } from "lucide-react";
import { QUEM_SOMOS, WHATSAPP, TELEFONE, EMAIL, EMAIL_ALT, INSTAGRAM, INSTAGRAM_URL, ENDERECO, EMPRESA } from "../../data";

gsap.registerPlugin(ScrollTrigger);

/* ───────── QUEM SOMOS: texto à esquerda, recorte à direita ───────── */
export function About() {
  const ref = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".ab-person",
        { yPercent: 12, scale: 0.94 },
        { yPercent: 0, scale: 1, ease: "none", scrollTrigger: { trigger: ref.current, start: "top bottom", end: "center center", scrub: true } }
      );
      gsap.from(".ab-in", {
        y: 50,
        opacity: 0,
        stagger: 0.12,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 65%", once: true },
      });
      gsap.to(".ab-ghost", {
        xPercent: -18,
        ease: "none",
        scrollTrigger: { trigger: ref.current, start: "top bottom", end: "bottom top", scrub: true },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="quem-somos" className="relative overflow-hidden bg-[#060808] px-5 pt-28 text-white sm:px-10 sm:pt-40">
      <div className="ab-ghost pointer-events-none absolute left-0 top-24 select-none whitespace-nowrap font-bold uppercase leading-none tracking-[-0.06em] text-transparent text-[clamp(10rem,32vw,34rem)] [-webkit-text-stroke:1px_rgba(255,255,255,0.07)]">
        MA MA MA
      </div>

      <div className="relative z-10 grid items-end gap-10 lg:grid-cols-2">
        <div className="pb-16 lg:pb-28">
          <p className="ab-in mb-6 font-mono text-[11px] uppercase tracking-[0.3em] text-[#34D399]">( Quem somos )</p>
          <h2 className="ab-in mb-8 sm:mb-10 text-[clamp(2.25rem,6.5vw,6.5rem)] font-bold uppercase leading-[0.9] tracking-[-0.05em]">
            Engenharia
            <br />
            <span className="font-serif font-normal normal-case italic text-[#34D399]">com propósito.</span>
          </h2>
          <div className="space-y-5">
            {QUEM_SOMOS.paragrafos.map((p, i) => (
              <p key={i} className="ab-in max-w-[560px] text-[14.5px] sm:text-[15px] leading-[1.75] text-white/65">
                {p}
              </p>
            ))}
          </div>
          <div className="ab-in mt-8 flex flex-wrap gap-2">
            {["UFOP", "Controle e Automação", "ABNT · NR-10"].map((t) => (
              <span key={t} className="rounded-full border border-white/20 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.12em] text-white/70">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="absolute bottom-0 left-1/2 h-[75%] w-[85%] -translate-x-1/2 rounded-t-[999px] bg-gradient-to-t from-[#0B7A5A] to-[#0B7A5A]/10" />
          <img
            src="/assets/fundadores-cutout.png"
            alt="Fundadores da MA Soluções e Engenharia"
            className="ab-person relative z-10 max-h-[54vh] sm:max-h-[88vh] w-auto max-w-full object-contain object-bottom"
          />
        </div>
      </div>
    </section>
  );
}

/* ───────── FAQ ───────── */
const FAQ = [
  ["Quando é obrigatório um projeto elétrico completo?", "Em construções novas, reformas com aumento de carga, edifícios comerciais, condomínios e instalações industriais. Um projeto conforme a ABNT NBR 5410 evita sobrecargas e facilita a aprovação na concessionária."],
  ["Os projetos e laudos incluem ART?", "Sim. Toda entrega técnica é formalizada com Anotação de Responsabilidade Técnica registrada."],
  ["O que o laudo NR-10 contempla?", "Vistoria presencial em painéis, quadros, aterramento e circuitos, com diagnóstico fotográfico, análise de não conformidades e plano de adequação."],
  ["Como funciona o SPDA (NBR 5419)?", "Análise de gerenciamento de risco, projeto de captação, descidas, aterramento e DPS, além de inspeções periódicas."],
  ["Vocês atendem fora de João Monlevade?", "Nossa base é em João Monlevade (MG), com atendimento presencial na região e projetos digitais para outras localidades."],
];

export function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section id="duvidas" className="bg-[#F4F2EE] px-5 py-28 sm:px-10 sm:py-40">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.3em] text-[#0B7A5A]">( Dúvidas )</p>
          <h2 className="text-[clamp(2.6rem,6vw,6rem)] font-bold uppercase leading-[0.9] tracking-[-0.05em] text-[#0b0d0c]">
            Perguntas
            <br />
            <span className="font-serif font-normal normal-case italic text-[#0B7A5A]">frequentes.</span>
          </h2>
        </div>
        <div className="border-t border-black/15">
          {FAQ.map(([q, a], i) => {
            const o = open === i;
            return (
              <div key={q} className="border-b border-black/15">
                <button onClick={() => setOpen(o ? -1 : i)} className="flex w-full items-center justify-between gap-6 py-7 text-left" aria-expanded={o}>
                  <span className="text-[clamp(1.1rem,2vw,1.7rem)] font-semibold tracking-[-0.02em] text-[#0b0d0c]">{q}</span>
                  <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/20 transition-all duration-500 ${o ? "rotate-45 bg-[#0b0d0c] text-white" : ""}`}>
                    <Plus className="h-4 w-4" />
                  </span>
                </button>
                <div className={`grid transition-all duration-500 ease-out ${o ? "grid-rows-[1fr] pb-7" : "grid-rows-[0fr]"}`}>
                  <p className="overflow-hidden max-w-[640px] text-[15px] leading-relaxed text-black/60">{a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ───────── CTA magnético + RODAPÉ ───────── */
export function Finale() {
  const btn = useRef(null);
  const wrap = useRef(null);

  const onMove = (e) => {
    const r = wrap.current.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    gsap.to(btn.current, { x: x * 0.35, y: y * 0.35, duration: 0.5, ease: "power3.out" });
  };
  const onLeave = () => gsap.to(btn.current, { x: 0, y: 0, duration: 0.8, ease: "elastic.out(1,0.4)" });

  return (
    <>
      <section id="contato" className="relative overflow-hidden bg-[#0B7A5A] px-5 py-28 text-white sm:px-10 sm:py-44">
        <p className="mb-8 font-mono text-[11px] uppercase tracking-[0.3em] text-white/70">( Contato )</p>
        <div className="flex flex-col items-start justify-between gap-12 lg:flex-row lg:items-end">
          <h2 className="text-[clamp(2.5rem,9.5vw,10rem)] font-bold uppercase leading-[0.86] tracking-[-0.055em]">
            Vamos
            <br />
            energizar
            <br />
            <span className="font-serif font-normal normal-case italic text-[#04130d]">seu projeto?</span>
          </h2>

          <div ref={wrap} onMouseMove={onMove} onMouseLeave={onLeave} className="p-2 sm:p-10 self-center lg:self-auto">
            <a
              ref={btn}
              href={`${WHATSAPP}?text=${encodeURIComponent("Olá! Gostaria de conversar sobre um projeto com a MA Soluções e Engenharia.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-40 w-40 flex-col items-center justify-center gap-2 rounded-full bg-[#04130d] text-[12.5px] sm:text-[13px] font-bold uppercase tracking-wide text-white sm:h-56 sm:w-56"
            >
              Falar agora
              <ArrowUpRight className="h-6 w-6" />
            </a>
          </div>
        </div>
      </section>

      <footer className="overflow-hidden bg-[#060808] px-5 pt-16 sm:pt-20 text-white sm:px-10">
        <div className="grid gap-10 border-b border-white/10 pb-14 md:grid-cols-3">
          <div>
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-white/40">Endereço</p>
            <p className="flex gap-2 text-[15px] leading-relaxed text-white/80">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-[#34D399]" />
              {ENDERECO}
            </p>
          </div>
          <div className="space-y-2 text-[15px] text-white/80">
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-white/40">Contato</p>
            <a href="tel:+5531988469218" className="flex items-center gap-2 hover:text-[#34D399]">
              <Phone className="h-4 w-4 text-[#34D399]" />
              {TELEFONE}
            </a>
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 break-all hover:text-[#34D399]">
              <Mail className="h-4 w-4 shrink-0 text-[#34D399]" />
              {EMAIL}
            </a>
            <a href={`mailto:${EMAIL_ALT}`} className="block break-all pl-6 text-white/50 hover:text-[#34D399]">
              {EMAIL_ALT}
            </a>
          </div>
          <div>
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-white/40">Social</p>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[15px] text-white/80 hover:text-[#34D399]">
              <Instagram className="h-4 w-4 text-[#34D399]" />
              {INSTAGRAM}
            </a>
          </div>
        </div>

        <p className="wordmark select-none whitespace-nowrap pt-8 text-center font-bold uppercase leading-[0.82] tracking-[-0.06em] text-[clamp(2.1rem,11.5vw,13rem)]">
          MA ENGENHARIA
        </p>
        <p className="pb-6 pt-4 text-center text-[12px] text-white/35">
          © {new Date().getFullYear()} {EMPRESA}
        </p>
      </footer>
    </>
  );
}
