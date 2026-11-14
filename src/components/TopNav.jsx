import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { WHATSAPP } from "../data";
import { scrollToId, scrollToY } from "../scroll";

const LINKS = [
  { label: "Início", go: () => scrollToY(0) },
  { label: "Serviços", go: () => scrollToId("#servicos") },
  { label: "Compromisso", go: () => scrollToId("#compromisso") },
  { label: "Contato", go: () => scrollToId("#contato") },
];

export default function TopNav() {
  const [on, setOn] = useState(0);
  return (
    <header className="fixed inset-x-0 top-3 z-50 flex justify-center px-3">
      <div className="flex w-full max-w-[980px] items-center justify-between gap-2 rounded-full border border-ink/10 bg-white/85 py-1.5 pl-3 pr-1.5 shadow-[0_18px_44px_-18px_rgba(11,122,90,.35)] backdrop-blur-xl">
        <button type="button" onClick={() => scrollToY(0)} className="flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest rounded-full">
          <img src="/assets/logo-emblem.png" alt="MA" width="32" height="32" className="h-8 w-8 object-contain" />
          <span className="font-display text-[15px] font-bold tracking-tight text-ink">
            MA <span className="text-forest">Engenharia</span>
          </span>
        </button>

        <nav aria-label="Principal" className="hidden items-center gap-1 md:flex">
          {LINKS.map((l, i) => (
            <button
              key={l.label}
              type="button"
              onClick={() => {
                setOn(i);
                l.go();
              }}
              onMouseEnter={() => setOn(i)}
              className={`relative rounded-full px-4 py-1.5 text-[13px] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest ${
                on === i ? "text-white" : "text-ink/70 hover:text-ink"
              }`}
            >
              {on === i && (
                <motion.span
                  layoutId="topNavPill"
                  transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  className="absolute inset-0 -z-10 rounded-full bg-forest"
                />
              )}
              {l.label}
            </button>
          ))}
        </nav>

        <a
          href={`${WHATSAPP}?text=${encodeURIComponent("Olá! Gostaria de solicitar um orçamento com a MA Soluções e Engenharia.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2.5 rounded-full bg-ink py-1.5 pl-4 pr-1.5 text-[12.5px] font-semibold text-white transition-colors hover:bg-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
        >
          Orçamento
          <span className="grid h-7 w-7 place-items-center rounded-full bg-forest text-white transition-transform duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-ink">
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </span>
        </a>
      </div>
    </header>
  );
}
