import React, { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { WHATSAPP } from "../../data";

const LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Quem somos", href: "#quem-somos" },
  { label: "Serviços", href: "#servicos" },
  { label: "Compromisso", href: "#compromisso" },
  { label: "Contato", href: "#contato" },
];

export default function AppleHeader() {
  const [active, setActive] = useState("#inicio");
  const [overLight, setOverLight] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const ids = LINKS.map((l) => l.href.slice(1));

    const onScroll = () => {
      const y = window.scrollY + window.innerHeight * 0.35;
      let cur = "#inicio";
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el && id !== "inicio" && el.getBoundingClientRect().top + window.scrollY <= y) {
          cur = `#${id}`;
        }
      });
      setActive(cur);

      // Detecta se a barra no topo (y = 40px) está sobre uma seção clara ou escura
      const qsEl = document.getElementById("quem-somos");
      const compEl = document.getElementById("compromisso");
      const contEl = document.getElementById("contato");

      const qsTop = qsEl ? qsEl.getBoundingClientRect().top : 9999;
      const compRect = compEl ? compEl.getBoundingClientRect() : null;
      const contTop = contEl ? contEl.getBoundingClientRect().top : 9999;

      const inCompromisso =
        compRect && compRect.top <= 48 && compRect.bottom > 48;

      if (qsTop <= 48 && !inCompromisso) {
        setOverLight(true);
      } else if (contTop <= 48) {
        setOverLight(true);
      } else {
        setOverLight(false);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const msg = encodeURIComponent(
    "Olá! Gostaria de solicitar um orçamento com a MA Soluções e Engenharia."
  );

  return (
    <header className="pointer-events-none fixed inset-x-0 top-4 z-50 flex justify-center px-4 sm:top-6 sm:px-6">
      <div className="pointer-events-auto w-full max-w-[980px]">
        {/* iOS 26 Liquid Glass Capsule */}
        <div
          className={`relative flex h-[56px] items-center justify-between rounded-full px-3 pl-5 transition-all duration-500 backdrop-blur-[28px] backdrop-saturate-[200%] ${
            overLight
              ? "border border-white/65 bg-gradient-to-b from-white/55 via-white/35 to-[#0B7A5A]/[0.08] text-[#1D1D1F] shadow-[0_12px_36px_-8px_rgba(0,0,0,0.12),inset_0_1.5px_0_0_rgba(255,255,255,0.85),inset_0_-1px_0_0_rgba(255,255,255,0.35)]"
              : "border border-white/25 bg-gradient-to-b from-white/[0.18] via-white/[0.07] to-white/[0.12] text-white shadow-[0_16px_44px_-8px_rgba(0,0,0,0.45),inset_0_1px_0_0_rgba(255,255,255,0.55),inset_0_-1px_0_0_rgba(255,255,255,0.15)]"
          }`}
        >
          {/* Reflexo especular superior estilo iOS 26 */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-6 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/70 to-transparent"
          />

          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2.5">
            <img
              src="/assets/logo-emblem.png"
              alt="MA Soluções e Engenharia"
              className={`h-6 w-auto transition-all duration-500 ${
                overLight ? "" : "brightness-0 invert"
              }`}
            />
            <span className="text-[14px] font-semibold tracking-[-0.02em]">
              MA Engenharia
            </span>
          </a>

          {/* Tópicos de navegação */}
          <nav
            className="hidden items-center gap-1 md:flex"
            aria-label="Navegação principal"
          >
            {LINKS.map((l) => {
              const isAct = active === l.href;
              return (
                <a
                  key={l.href}
                  href={l.href}
                  className={`relative rounded-full px-4 py-1.5 text-[13px] font-medium transition-all duration-300 ${
                    isAct
                      ? overLight
                        ? "bg-white/75 text-[#0B7A5A] shadow-[0_2px_10px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.9)]"
                        : "bg-white/20 text-white shadow-[0_2px_12px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.45)]"
                      : overLight
                        ? "text-[#1D1D1F]/75 hover:bg-white/40 hover:text-[#1D1D1F]"
                        : "text-white/75 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {l.label}
                </a>
              );
            })}
          </nav>

          {/* CTA & Menu Mobile */}
          <div className="flex items-center gap-2">
            <a
              href={`${WHATSAPP}?text=${msg}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden items-center gap-1.5 rounded-full px-4 py-2 text-[13px] font-medium transition-all duration-300 sm:inline-flex ${
                overLight
                  ? "bg-[#1D1D1F] text-white hover:bg-[#0B7A5A]"
                  : "border border-white/30 bg-white/20 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.45)] hover:bg-white hover:text-[#0A0B0D]"
              }`}
            >
              <span>Orçamento</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>

            <button
              type="button"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              onClick={() => setOpen(!open)}
              className="flex h-9 w-9 items-center justify-center rounded-full md:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Menu Mobile em Liquid Glass */}
        {open && (
          <nav
            className={`mt-2 flex flex-col rounded-[28px] p-3 backdrop-blur-[28px] backdrop-saturate-[200%] md:hidden ${
              overLight
                ? "border border-white/70 bg-white/65 text-[#1D1D1F] shadow-xl"
                : "border border-white/25 bg-black/55 text-white shadow-2xl"
            }`}
          >
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`rounded-2xl px-4 py-3 text-[17px] font-semibold tracking-[-0.02em] ${
                  active === l.href
                    ? overLight
                      ? "bg-white/80 text-[#0B7A5A]"
                      : "bg-white/15 text-[#5FE0B4]"
                    : ""
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
