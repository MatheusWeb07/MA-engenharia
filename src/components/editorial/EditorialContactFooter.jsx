import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import {
  EMAIL,
  EMAIL_ALT,
  ENDERECO,
  INSTAGRAM,
  INSTAGRAM_URL,
  TELEFONE,
  WHATSAPP,
} from "../../data";

gsap.registerPlugin(ScrollTrigger);

export default function EditorialContactFooter() {
  const footerRef = useRef(null);

  useEffect(() => {
    const el = footerRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.querySelectorAll(".contact-reveal"),
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 82%",
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { duration: 1.4 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer
      id="contato"
      ref={footerRef}
      className="bg-[#0B0C0E] text-white border-t border-white/15"
    >
      <div className="mx-auto max-w-[1440px] px-6 pt-24 pb-12 sm:px-12 sm:pt-32 lg:px-16">
        {/* Bloco Principal de Chamada para Contato */}
        <div className="grid grid-cols-1 gap-16 pb-20 border-b border-white/15 lg:grid-cols-12 items-start">
          {/* Coluna Esquerda (7 cols): Headline Objetiva + CTA Direto */}
          <div className="lg:col-span-7 contact-reveal">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-[1px] w-8 bg-[#0B7A5A]" />
              <span className="font-mono text-[11px] font-medium text-white/60">
                Atendimento Técnico Direto
              </span>
            </div>

            <h2 className="font-display text-[clamp(2.2rem,4.5vw,3.9rem)] font-bold leading-[1.05] tracking-[-0.035em] text-white max-w-2xl">
              Inicie seu projeto ou laudo diretamente com nossos engenheiros.
            </h2>

            <p className="mt-6 max-w-xl text-[15.5px] leading-[1.7] text-white/70">
              Para orçamentos de projetos elétricos, laudos técnicos (NR-10 e
              SPDA), automação ou consultoria em engenharia, entre em contato
              pelos nossos canais oficiais.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={`${WHATSAPP}?text=${encodeURIComponent(
                  "Olá! Gostaria de solicitar um orçamento com a MA Soluções e Engenharia."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-white px-8 py-4 text-[12.5px] font-bold tracking-[0.04em] text-[#0B0C0E] transition-colors duration-300 hover:bg-[#0B7A5A] hover:text-white"
              >
                <span>Conversar pelo WhatsApp — {TELEFONE}</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 border border-white/25 px-7 py-4 text-[12.5px] font-semibold tracking-[0.03em] text-white transition-colors duration-300 hover:border-white hover:bg-white/10"
              >
                <span>Enviar e-mail técnico</span>
              </a>
            </div>
          </div>

          {/* Coluna Direita (5 cols): Dados Reais da Empresa */}
          <div className="lg:col-span-5 lg:border-l lg:border-white/15 lg:pl-12 space-y-8 contact-reveal">
            <div className="border-b border-white/10 pb-6">
              <span className="font-mono text-[11px] text-white/50">
                Telefone & WhatsApp Comercial
              </span>
              <div className="mt-2">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display text-2xl font-bold text-white transition-colors hover:text-[#0B7A5A]"
                >
                  {TELEFONE}
                </a>
              </div>
            </div>

            <div className="border-b border-white/10 pb-6">
              <span className="font-mono text-[11px] text-white/50">
                Correio Eletrônico
              </span>
              <div className="mt-2 flex flex-col space-y-1">
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-[15px] font-medium text-white/90 transition-colors hover:text-[#0B7A5A]"
                >
                  {EMAIL}
                </a>
                <a
                  href={`mailto:${EMAIL_ALT}`}
                  className="text-[13.5px] text-white/60 transition-colors hover:text-white"
                >
                  {EMAIL_ALT}
                </a>
              </div>
            </div>

            <div className="border-b border-white/10 pb-6">
              <span className="font-mono text-[11px] text-white/50">
                Matriz — Minas Gerais
              </span>
              <p className="mt-2 text-[14.5px] leading-[1.6] text-white/85">
                {ENDERECO}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="font-mono text-[11px] text-white/50 block">
                  Instagram Oficial
                </span>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex items-center gap-1.5 text-[14px] font-semibold text-white transition-colors hover:text-[#0B7A5A]"
                >
                  <span>{INSTAGRAM}</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>

              <div className="text-left sm:text-right">
                <span className="font-mono text-[11px] text-white/50 block">
                  Carreiras
                </span>
                <a
                  href={`mailto:${EMAIL}?subject=${encodeURIComponent(
                    "Currículo — MA Soluções e Engenharia"
                  )}`}
                  className="mt-1 inline-block text-[13px] text-white/75 underline decoration-white/30 underline-offset-4 hover:text-white"
                >
                  Trabalhe conosco
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Tipografia Monumental de Encerramento */}
        <div className="py-12 sm:py-16 text-center select-none overflow-hidden contact-reveal">
          <p className="font-display text-[clamp(2.4rem,7.6vw,7.8rem)] font-extrabold tracking-[-0.03em] text-white leading-none whitespace-nowrap">
            MA ENGENHARIA
          </p>
        </div>

        {/* Barra de Rodapé e Retorno ao Topo */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6 text-[11.5px] font-mono text-white/50">
          <p>
            © {new Date().getFullYear()} MA | Soluções e Engenharia. Todos os
            direitos reservados.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 font-mono text-[11.5px] font-semibold text-white/75 transition-colors hover:text-white"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}

