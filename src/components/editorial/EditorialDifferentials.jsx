import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { COMPROMISSO } from "../../data";

gsap.registerPlugin(ScrollTrigger);

export default function EditorialDifferentials() {
  const sectionRef = useRef(null);
  const countNumRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      // Subtle counter animation for 100% normative compliance
      if (countNumRef.current) {
        const counterObj = { val: 0 };
        gsap.to(counterObj, {
          val: 100,
          duration: 1.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: countNumRef.current,
            start: "top 85%",
            once: true,
          },
          onUpdate: () => {
            if (countNumRef.current) {
              countNumRef.current.textContent = `${Math.round(counterObj.val)}%`;
            }
          },
        });
      }

      // Reveal editorial blocks
      gsap.fromTo(
        el.querySelectorAll(".diff-reveal"),
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 78%",
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="compromisso"
      ref={sectionRef}
      className="bg-[#F4F3EF] text-[#111315] border-b border-[#DFDDD6]"
    >
      <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-12 sm:py-36 lg:px-16">
        {/* Bloco 1: Parâmetros Verificáveis em Régua Arquitetônica Assimétrica */}
        <div className="grid grid-cols-1 gap-12 pb-20 border-b border-[#111315] lg:grid-cols-12 items-end">
          <div className="lg:col-span-5 diff-reveal">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-[1px] w-8 bg-[#0B7A5A]" />
              <span className="font-mono text-[11px] font-medium text-[#55595E]">
                Diferenciais & Diretrizes
              </span>
            </div>
            <h2 className="font-display text-[clamp(2rem,3.8vw,3.3rem)] font-bold leading-[1.08] tracking-[-0.03em] text-[#111315]">
              Fundamentos que sustentam cada entrega técnica.
            </h2>
          </div>

          {/* Indicadores reais sem cartões genéricos */}
          <div className="lg:col-span-7 grid grid-cols-1 gap-8 sm:grid-cols-3 border-t border-[#111315]/15 pt-8 lg:border-t-0 lg:pt-0 lg:border-l lg:pl-12">
            <div className="diff-reveal">
              <span
                ref={countNumRef}
                className="block font-display text-5xl sm:text-6xl font-bold tracking-[-0.04em] text-[#111315]"
              >
                100%
              </span>
              <span className="mt-2 block font-mono text-[11px] font-semibold text-[#0B7A5A]">
                Aderência Normativa
              </span>
              <p className="mt-2 text-[13.5px] leading-[1.55] text-[#55595E]">
                Projetos e diagnósticos alinhados às normas ABNT NBR 5410, NBR
                5419 e NR-10.
              </p>
            </div>

            <div className="diff-reveal sm:border-l sm:border-[#111315]/15 sm:pl-6">
              <span className="block font-display text-5xl sm:text-6xl font-bold tracking-[-0.04em] text-[#111315]">
                UFOP
              </span>
              <span className="mt-2 block font-mono text-[11px] font-semibold text-[#0B7A5A]">
                Base Científica Sólida
              </span>
              <p className="mt-2 text-[13.5px] leading-[1.55] text-[#55595E]">
                Engenheiros Eletricistas com ênfase em Controle e Automação pela
                Universidade Federal de Ouro Preto.
              </p>
            </div>

            <div className="diff-reveal sm:border-l sm:border-[#111315]/15 sm:pl-6">
              <span className="block font-display text-5xl sm:text-6xl font-bold tracking-[-0.04em] text-[#111315]">
                ART
              </span>
              <span className="mt-2 block font-mono text-[11px] font-semibold text-[#0B7A5A]">
                Responsabilidade Formal
              </span>
              <p className="mt-2 text-[13.5px] leading-[1.55] text-[#55595E]">
                Anotação de Responsabilidade Técnica emitida para assegurar
                respaldo legal e segurança.
              </p>
            </div>
          </div>
        </div>

        {/* Bloco 2: Missão, Visão e Valores em Composição Editorial */}
        <div className="mt-20 grid grid-cols-1 gap-16 lg:grid-cols-12 items-start">
          {/* Missão & Visão (Coluna Esquerda 7 cols) */}
          <div className="lg:col-span-7 space-y-14">
            <div className="diff-reveal grid grid-cols-1 gap-4 sm:grid-cols-12 items-baseline">
              <span className="sm:col-span-3 font-mono text-xs font-semibold text-[#0B7A5A]">
                Missão
              </span>
              <div className="sm:col-span-9">
                <p className="font-display text-xl sm:text-2xl font-semibold leading-[1.35] tracking-[-0.02em] text-[#111315]">
                  {COMPROMISSO.missao}
                </p>
              </div>
            </div>

            <div className="diff-reveal border-t border-[#111315]/15 pt-12 grid grid-cols-1 gap-4 sm:grid-cols-12 items-baseline">
              <span className="sm:col-span-3 font-mono text-xs font-semibold text-[#0B7A5A]">
                Visão
              </span>
              <div className="sm:col-span-9">
                <p className="text-[16.5px] leading-[1.7] text-[#3A3E42]">
                  {COMPROMISSO.visao}
                </p>
              </div>
            </div>
          </div>

          {/* Valores (Coluna Direita 5 cols com Réguas Arquitetônicas) */}
          <div className="lg:col-span-5 lg:border-l lg:border-[#111315]/15 lg:pl-12 diff-reveal">
            <span className="font-mono text-xs font-semibold text-[#111315]">
              Princípios Inegociáveis
            </span>

            <div className="mt-6 divide-y divide-[#111315]/15 border-t border-b border-[#111315]/15">
              {COMPROMISSO.valores.map(([titulo, descricao]) => (
                <div key={titulo} className="py-5">
                  <h3 className="font-display text-base font-bold text-[#111315]">
                    {titulo}
                  </h3>
                  <p className="mt-1.5 text-[13.5px] leading-[1.6] text-[#55595E]">
                    {descricao}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
