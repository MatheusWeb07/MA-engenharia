import React from "react";
import { motion } from "framer-motion";
import { CREA } from "../data";

export default function TrustMetricsT1() {
  const METRICS = [
    {
      num: "100%",
      label: "ART Garantida",
      desc: "Todas as entregas, laudos e projetos acompanham Anotação de Responsabilidade Técnica.",
    },
    {
      num: "UFOP",
      label: "Formação de Excelência",
      desc: "Engenheiros eletricistas com ênfase em Controle & Automação pela Universidade Federal de Ouro Preto.",
    },
    {
      num: "NR-10",
      label: "Segurança Elétrica",
      desc: "Conformidade irrestrita com normas regulamentadoras do Ministério do Trabalho e Corpo de Bombeiros.",
    },
    {
      num: "5410",
      label: "ABNT NBR",
      desc: "Dimensionamento rigoroso de condutores, proteção contra surtos (DPS) e dispositivos diferenciais (DR).",
    },
  ];

  return (
    <section id="credenciais" className="w-full bg-[#FFFFFF] py-24 px-6 sm:px-10 border-t border-[#0B7A5A]/15">
      <div className="mx-auto max-w-[1200px] space-y-16">
        
        {/* Cabeçalho da Seção com Quadrado Sólido 4px */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4"
        >
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-sm bg-[#0B7A5A]" />
            <span className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#0B7A5A]">
              ESPECIFICAÇÕES & CREDENCIAMENTO
            </span>
          </div>

          <h2 className="max-w-3xl font-sans text-[36px] sm:text-[46px] lg:text-[52px] font-light leading-[1.0] tracking-[0.52px] text-[#1E1E1E]">
            Padrão industrial de conformidade normativa.
          </h2>
        </motion.div>

        {/* Grade de 4 Métricas Técnicas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 border-t border-[#0B7A5A]/20 pt-10">
          {METRICS.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-3"
            >
              <p className="font-sans text-[48px] lg:text-[52px] font-light leading-[1.0] tracking-[0.52px] text-[#0B7A5A]">
                {m.num}
              </p>
              <h3 className="text-[14px] font-bold uppercase tracking-[0.05em] text-[#1E1E1E]">
                {m.label}
              </h3>
              <p className="text-[13.5px] font-normal leading-[1.5] text-[#1E1E1E]/70">
                {m.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Manifesto da MA Engenharia */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-[24px] bg-[#E6F4F0] border border-[#0B7A5A]/20 p-8 sm:p-12 space-y-4"
        >
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-sm bg-[#0B7A5A]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#0B7A5A]">
              MANIFESTO TÉCNICO
            </span>
          </div>

          <blockquote className="font-sans text-[22px] sm:text-[28px] font-light leading-[1.3] text-[#1E1E1E]">
            “Transformamos desafios em soluções e ideias em resultados — porque, para nós, engenharia é sinônimo de{" "}
            <span className="font-medium text-[#0B7A5A]">evolução, precisão e confiança.</span>”
          </blockquote>

          <div className="pt-2 font-mono text-[12.5px] text-[#0B7A5A]">
            MA | Soluções e Engenharia • {CREA}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
