import React from "react";
import { CheckCircle2, Cpu, FileCheck2, ShieldCheck, Zap } from "lucide-react";

export default function MarqueeServices() {
  const ITEMS = [
    { label: "Projetos Elétricos (NBR 5410)", icon: Zap, tag: "EXECUÇÃO" },
    { label: "Laudos Técnicos & NR-10", icon: ShieldCheck, tag: "SEGURANÇA" },
    { label: "Controle & Automação Industrial", icon: Cpu, tag: "UFOP" },
    { label: "SPDA & Aterramento (NBR 5419)", icon: ShieldCheck, tag: "LAUDOS" },
    { label: "Emissão de ART em 100% das Obras", icon: FileCheck2, tag: "CREA-MG" },
    { label: "Consultoria & Eficiência Energética", icon: CheckCircle2, tag: "ECONOMIA" },
    { label: "Projetos Inteligentes, Resultados Eficientes", icon: Zap, tag: "MA ENGENHARIA" },
  ];

  // Duplicar para loop contínuo sem saltos
  const list = [...ITEMS, ...ITEMS, ...ITEMS];

  return (
    <div className="w-full overflow-hidden border-y border-[#0B7A5A]/20 bg-[#E6F4F0] py-4 select-none">
      <div className="marquee-track flex items-center gap-6 whitespace-nowrap">
        {list.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="flex items-center gap-3 rounded-full border border-[#0B7A5A]/25 bg-white px-5 py-2.5 shadow-sm transition hover:border-[#0B7A5A] hover:shadow-md"
            >
              <span className="grid h-7 w-7 place-items-center rounded-full bg-[#0B7A5A] text-white">
                <Icon className="h-3.5 w-3.5" />
              </span>
              <span className="font-sans text-[13.5px] font-semibold text-[#1E1E1E]">
                {item.label}
              </span>
              <span className="rounded-full bg-[#0B7A5A]/10 px-2 py-0.5 font-mono text-[9.5px] font-bold uppercase text-[#0B7A5A]">
                {item.tag}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

