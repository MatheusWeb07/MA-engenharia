import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { WHATSAPP } from "../data";

const STICKY_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Normas", href: "#autoridades" },
  { label: "Serviços", href: "#servicos" },
  { label: "Quem Somos", href: "#quem-somos" },
  { label: "Essência", href: "#o-que-e" },
  { label: "Compromisso", href: "#compromisso" },
  { label: "Contato", href: "#contato" },
];

export default function FloatingNav() {
  const [show, setShow] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.55);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-3 z-50 flex justify-center px-3 sm:top-4">
      <AnimatePresence>
        {show && (
          <motion.header
            initial={{ y: -90, opacity: 0, scale: 0.96 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -90, opacity: 0, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            className="pointer-events-auto w-full max-w-[1040px]"
          >
            <div className="flex items-center justify-between gap-2 rounded-full border border-ink/8 bg-white/95 py-1.5 pl-3 pr-1.5 text-ink shadow-[0_20px_50px_-15px_rgba(11,122,90,0.2)] backdrop-blur-xl sm:py-2 sm:pl-4 sm:pr-2">
              <a
                href="#inicio"
                className="flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
              >
                <span className="grid h-8 w-8 place-items-center rounded-full bg-mint p-1 sm:h-9 sm:w-9">
                  <img
                    src="/assets/logo-emblem.png"
                    alt="MA"
                    width="32"
                    height="32"
                    className="h-full w-full object-contain"
                  />
                </span>
                <span className="font-display text-[14px] font-extrabold uppercase tracking-[-0.03em] text-ink sm:text-[15px]">
                  MA <span className="text-forest">Engenharia</span>
                </span>
              </a>

              <nav aria-label="Navegação Fixa" className="hidden items-center gap-1 lg:flex">
                {STICKY_LINKS.map((item, idx) => {
                  const isActive = activeIdx === idx;
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setActiveIdx(idx)}
                      onMouseEnter={() => setActiveIdx(idx)}
                      className={`relative rounded-full px-4 py-1.5 text-[12px] font-bold tracking-[0.02em] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest ${
                        isActive ? "text-white" : "text-ink/70 hover:text-ink"
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="cleanStickyNavPill"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                          className="absolute inset-0 -z-10 rounded-full bg-forest"
                        />
                      )}
                      {item.label}
                    </a>
                  );
                })}
              </nav>

              <a
                href={`${WHATSAPP}?text=${encodeURIComponent("Olá! Gostaria de solicitar um orçamento com a MA Soluções e Engenharia.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-full bg-ink py-1.5 pl-4 pr-1.5 text-[11px] font-extrabold uppercase tracking-wider text-white transition hover:bg-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
              >
                <span>Orçamento</span>
                <span className="grid h-7 w-7 place-items-center rounded-full bg-forest text-white transition-transform duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-ink">
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
              </a>
            </div>
          </motion.header>
        )}
      </AnimatePresence>
    </div>
  );
}
