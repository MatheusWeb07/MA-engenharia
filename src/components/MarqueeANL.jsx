import React from "react";

export default function MarqueeANL() {
  const words = [
    "PROJETOS ELÉTRICOS",
    "LAUDOS TÉCNICOS",
    "CONTROLE & AUTOMAÇÃO",
    "FORMAÇÃO UFOP OURO PRETO",
    "CREA-MG Nº 142366847-2",
    "EMISSÃO DE ART",
    "CONFORMIDADE NBR 5410",
    "SEGURANÇA NR-10",
    "SPDA NBR 5419",
    "PROJETOS INTELIGENTES",
    "RESULTADOS EFICIENTES",
  ];

  const row = [...words, ...words];

  return (
    <div className="overflow-hidden border-b border-ink/10 bg-[#F4FAF7] py-6 sm:py-7 select-none" aria-hidden="true">
      <div className="marquee-track flex w-max items-center gap-10 whitespace-nowrap">
        {[...row, ...row].map((w, i) => (
          <span
            key={i}
            className="flex items-center gap-8 font-display text-[clamp(1.2rem,2.4vw,2rem)] font-extrabold uppercase tracking-[-0.03em] text-ink/75"
          >
            {w}
            <span className="grid h-6 w-6 place-items-center rounded-full bg-forest text-[11px] font-bold text-white shadow-sm">
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
