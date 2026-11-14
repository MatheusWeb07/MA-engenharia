import React, { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { WHATSAPP } from "../../data";

const NAV_LINKS = [
  { label: "A Empresa", href: "#quem-somos" },
  { label: "Serviços", href: "#servicos" },
  { label: "Portfólio", href: "#projetos" },
  { label: "Compromisso", href: "#compromisso" },
  { label: "Contato", href: "#contato" },
];

export default function EditorialHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "bg-[#0B0C0E] border-b border-white/10"
          : "bg-gradient-to-b from-[#0B0C0E]/80 to-transparent border-b border-white/10"
      }`}
    >
      <div className="mx-auto flex max-w-[1440px] items-stretch justify-between">
        {/* Identificação da Marca — Bloco Arquitetônico */}
        <a
          href="#inicio"
          className="flex shrink-0 items-center gap-3 bg-white px-5 py-3.5 text-[#111315] transition-colors duration-300 hover:bg-[#F4F3EF] sm:px-7 sm:py-4"
        >
          <img
            src="/assets/logo-emblem.png"
            alt="MA Soluções e Engenharia"
            width="30"
            height="30"
            className="h-7 w-auto object-contain"
          />
          <div className="flex flex-col">
            <span className="font-display text-[15px] font-extrabold tracking-[-0.03em] text-[#111315] leading-none">
              MA <span className="text-[#0B7A5A]">ENGENHARIA</span>
            </span>
            <span className="mt-1 font-mono text-[8px] font-medium tracking-[0.14em] text-[#55595E]">
              SOLUÇÕES E ENGENHARIA
            </span>
          </div>
        </a>

        {/* Navegação Desktop */}
        <div className="hidden lg:flex flex-1 items-center justify-between px-10">
          <nav className="flex items-center gap-9" aria-label="Navegação principal">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative py-1 text-[13px] font-medium tracking-[-0.01em] text-white/85 transition-colors duration-300 hover:text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <span className="hidden xl:inline-block font-mono text-[11px] text-white/50">
              João Monlevade, MG
            </span>
            <a
              href={`${WHATSAPP}?text=${encodeURIComponent(
                "Olá! Gostaria de solicitar um orçamento com a MA Soluções e Engenharia."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 border border-white/25 bg-transparent px-5 py-2.5 text-[12px] font-semibold tracking-[0.02em] text-white transition-colors duration-300 hover:border-white hover:bg-white hover:text-[#0B0C0E]"
            >
              <span>Solicitar orçamento</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Botão Menu Mobile */}
        <div className="flex items-center px-4 lg:hidden">
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            className="p-2 text-white focus:outline-none"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {mobileOpen && (
        <div className="border-t border-white/10 bg-[#0B0C0E] px-6 py-8 lg:hidden">
          <nav className="flex flex-col space-y-4">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="border-b border-white/10 pb-3 font-display text-lg font-semibold text-white transition-colors hover:text-[#0B7A5A]"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4">
              <a
                href={`${WHATSAPP}?text=${encodeURIComponent(
                  "Olá! Gostaria de solicitar um orçamento com a MA Soluções e Engenharia."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="inline-flex w-full items-center justify-center gap-2 bg-white px-6 py-3.5 text-xs font-bold tracking-[0.06em] text-[#0B0C0E]"
              >
                <span>Solicitar orçamento via WhatsApp</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

