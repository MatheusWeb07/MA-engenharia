import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, MessageCircle } from "lucide-react";
import { WHATSAPP, EMPRESA } from "../../data";

const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Processo", href: "#processo" },
  { label: "Quem Somos", href: "#quem-somos" },
  { label: "Dúvidas", href: "#duvidas" },
];

export default function RestoraHeader({ onScrollTo }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#inicio");

  useEffect(() => {
    const sections = NAV_LINKS.map((n) => document.querySelector(n.href)).filter(Boolean);
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        const nextScrolled = window.scrollY > 30;
        setScrolled((prev) => (prev === nextScrolled ? prev : nextScrolled));
        const y = 180;
        let nextHref = NAV_LINKS[0].href;
        for (let i = sections.length - 1; i >= 0; i--) {
          if (sections[i].getBoundingClientRect().top <= y) {
            nextHref = NAV_LINKS[i].href;
            break;
          }
        }
        setActiveHref((prev) => (prev === nextHref ? prev : nextHref));
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (e, href) => {
    // A rolagem em si é feita pelo Lenis (listener global no App.jsx).
    setActiveHref(href);
    setMobileOpen(false);
  };

  const whatsappUrl = `${WHATSAPP}?text=${encodeURIComponent(
    "Olá! Gostaria de solicitar um orçamento técnico com a MA Soluções e Engenharia."
  )}`;

  return (
    <>
      <header className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 lg:px-10 pointer-events-none">
        <div
          className={`mx-auto max-w-[1380px] pointer-events-auto transition-all duration-500 rounded-full ${
            scrolled
              ? "bg-[#0B0C0E]/95 backdrop-blur-xl shadow-[0_14px_40px_rgba(0,0,0,0.28)] border border-white/15"
              : "bg-[#0B0C0E] shadow-[0_10px_30px_rgba(11,12,14,0.16)] border border-white/10"
          }`}
        >
          <div className="flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3">
            {/* Brand Logo Left */}
            <a
              href="#inicio"
              onClick={(e) => handleNav(e, "#inicio")}
              className="flex items-center gap-2.5 group focus:outline-none"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 p-1 ring-1 ring-white/15 transition-transform duration-300 group-hover:scale-105">
                <img
                  src="/assets/logo-emblem.png"
                  alt={EMPRESA}
                  className="h-5 w-5 object-contain brightness-0 invert"
                />
              </span>
              <span className="text-[14px] sm:text-[15px] font-semibold tracking-tight text-white">
                MA <span className="font-normal text-white/75">Engenharia</span>
              </span>
            </a>

            {/* Center Navigation Links (Desktop) */}
            <nav className="hidden lg:flex items-center gap-7" aria-label="Navegação Principal">
              {NAV_LINKS.map((item) => {
                const isActive = activeHref === item.href;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNav(e, item.href)}
                    className={`text-[13px] font-medium tracking-tight transition-colors duration-200 ${
                      isActive ? "text-white" : "text-white/65 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              <a
                href="#contato"
                onClick={(e) => handleNav(e, "#contato")}
                className="hidden sm:inline-flex items-center gap-1.5 text-[13px] font-medium text-white/75 hover:text-white transition-colors px-2"
              >
                <span>Contato</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-white text-[#0B0C0E] px-4 py-2 text-[12.5px] sm:text-[13px] font-semibold tracking-tight transition-all duration-300 hover:bg-[#0B7A5A] hover:text-white group"
              >
                <span>Orçamento</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <button
                type="button"
                onClick={() => setMobileOpen((prev) => !prev)}
                className="lg:hidden flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
              >
                {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-[#0B0C0E]/95 backdrop-blur-xl pt-24 px-6 pb-10 flex flex-col justify-between lg:hidden">
          <nav className="flex flex-col gap-3">
            {NAV_LINKS.map((item, idx) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNav(e, item.href)}
                className="flex items-center justify-between py-3.5 border-b border-white/10 text-xl font-medium text-white"
              >
                <span>{item.label}</span>
                <span className="font-mono text-xs text-white/40">0{idx + 1}</span>
              </a>
            ))}
          </nav>

          <div className="space-y-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-[#0B7A5A] px-6 py-4 text-sm font-semibold text-white"
            >
              <MessageCircle className="w-4 h-4" />
              Solicitar Orçamento via WhatsApp
            </a>
          </div>
        </div>
      )}
    </>
  );
}
