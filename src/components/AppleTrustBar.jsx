import React from "react";
import { motion } from "framer-motion";
import { Award, BookOpen, FileCheck2, Flame, Shield, ShieldCheck } from "lucide-react";

export default function AppleTrustBar() {
  const BADGES = [
    {
      icon: ShieldCheck,
      title: "CREA-MG Ativo",
      subtitle: "Registro Nº 142366847-2",
    },
    {
      icon: BookOpen,
      title: "Engenheiros UFOP",
      subtitle: "Controle & Automação",
    },
    {
      icon: FileCheck2,
      title: "ART Inclusa",
      subtitle: "100% de Responsabilidade",
    },
    {
      icon: Shield,
      title: "ABNT NBR 5410",
      subtitle: "Instalações de Baixa Tensão",
    },
    {
      icon: Award,
      title: "Norma NR-10",
      subtitle: "Segurança em Eletricidade",
    },
    {
      icon: Flame,
      title: "Corpo de Bombeiros",
      subtitle: "Laudos Periciais / AVCB",
    },
  ];

  return (
    <section className="relative z-20 border-y border-white/10 bg-[#080D0A] py-10">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mb-6 text-center">
          <span className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.2em] text-white/50">
            Credenciamento Técnico & Conformidade Normativa
          </span>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {BADGES.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -3 }}
                className="group flex flex-col items-center rounded-2xl border border-white/5 bg-white/[0.02] p-4 text-center backdrop-blur-md transition-all duration-300 hover:border-[#10B981]/40 hover:bg-white/[0.05]"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#0B7A5A]/20 text-[#10B981] transition duration-300 group-hover:scale-110 group-hover:bg-[#0B7A5A] group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <p className="mt-3 font-display text-xs font-bold text-white transition group-hover:text-[#10B981]">
                  {b.title}
                </p>
                <p className="mt-1 font-mono text-[9.5px] text-white/50">{b.subtitle}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
