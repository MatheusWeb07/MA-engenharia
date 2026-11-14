import React, { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { WHATSAPP } from "../../data";

export default function JacobsHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const NAV_ITEMS = [
    { label: "Soluções", href: "#solucoes", hasDropdown: true },
    { label: "Serviços", href: "#solucoes", hasDropdown: true },
    { label: "Projetos", href: "#projetos" },
    { label: "Quem Somos", href: "#quem-somos" },
    { label: "Notícias", href: "#noticias" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header className="sticky top-0 z-50 flex w-full border-b border-white/10 bg-[#111513] text-white">
      {/* =========================================================================
          BLOCO BRANCO DA JACOBS COM A LOGO DA MA ENGENHARIA
          ========================================================================= */}
      <a
        href="#inicio"
        className="flex shrink-0 items-center justify-center bg-white px-6 py-4 transition hover:bg-neutral-100 sm:px-8 sm:py-5"
      >
        <div className="flex items-center gap-2.5">
          <img
            src="/assets/logo-emblem.png"
            alt="MA Engenharia"
            width="32"
            height="32"
            className="h-8 w-auto object-contain"
          />
          <div className="flex flex-col">
            <span className="font-display text-[17px] font-extrabold tracking-tight text-black leading-none">
              MA <span className="text-[#0B7A5A]">ENGENHARIA</span>
            </span>
            <span className="font-mono text-[7.5px] font-bold uppercase tracking-[0.16em] text-black/60 mt-0.5">
              SOLUÇÕES & ENGENHARIA
            </span>
          </div>
        </div>
      </a>

      {/* =========================================================================
          BARRA DE NAVEGAÇÃO ESCURA JACOBS (SEM TELEFONE E SEM LUPA)
          ========================================================================= */}
      <div className="flex flex-1 items-center justify-between px-6 sm:px-8">
        
        {/* Links Principais com estilo corporativo Jacobs */}
        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="group flex items-center gap-1 font-display text-[13.5px] font-semibold text-white/90 transition hover:text-[#2DD4BF]"
            >
              <span>{item.label}</span>
              {item.hasDropdown && (
                <ChevronDown className="h-3.5 w-3.5 text-white/50 transition group-hover:rotate-180 group-hover:text-[#2DD4BF]" />
              )}
            </a>
          ))}
        </nav>

        {/* Lado Direito: Botão Clean Fale Conosco + Mobile Toggle */}
        <div className="flex items-center gap-4 ml-auto">
          <a
            href={`${WHATSAPP}?text=${encodeURIComponent("Olá! Gostaria de falar com a equipe da MA Engenharia.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-none border border-white/30 bg-transparent px-5 py-2 font-display text-xs font-bold uppercase tracking-wider text-white transition hover:border-white hover:bg-white hover:text-black sm:inline-block"
          >
            Fale Conosco
          </a>

          {/* Botão Mobile */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menu"
            className="grid h-9 w-9 place-items-center rounded text-white lg:hidden"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full border-b border-white/10 bg-[#0E1210] p-6 lg:hidden shadow-2xl">
          <nav className="flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-display text-base font-semibold text-white/90 hover:text-[#2DD4BF]"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 border-t border-white/10">
              <a
                href={`${WHATSAPP}?text=${encodeURIComponent("Olá! Gostaria de um orçamento com a MA Engenharia.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#0B7A5A] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white text-center w-full"
              >
                Solicitar Orçamento no WhatsApp
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
