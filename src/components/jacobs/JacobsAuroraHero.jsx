import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { SLOGAN, WHATSAPP } from "../../data";

export default function JacobsAuroraHero() {
  return (
    <section id="inicio" className="relative min-h-[94vh] w-full overflow-hidden bg-[#0A0E0C] text-white flex items-center">
      
      {/* =========================================================================
          FUNDO COM VIDRO FOSCO VERDE ESMERALDA (COR DA LOGO MA)
          Escultura 3D fluida com refrações de vidro, caustics e luzes esmeralda
          ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
        
        {/* Luzes ambiente de névoa esmeralda (glows difusos) */}
        <div className="absolute -top-1/4 right-[5%] h-[800px] w-[800px] rounded-full bg-[#0B7A5A]/38 blur-[130px] pointer-events-none" />
        <div className="absolute top-1/4 right-[25%] h-[600px] w-[600px] rounded-full bg-[#2DD4BF]/20 blur-[110px] pointer-events-none" />
        <div className="absolute -bottom-24 right-[15%] h-[500px] w-[500px] rounded-full bg-[#044C38]/45 blur-[100px] pointer-events-none" />

        {/* Fita de Vidro Fosco Verde Esmeralda 3D com respiração suave */}
        <motion.div
          animate={{
            y: [0, -12, 0],
            scale: [1, 1.018, 1],
          }}
          transition={{
            duration: 8.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-8 md:right-0 top-[48%] -translate-y-1/2 w-[92vw] md:w-[72vw] lg:w-[66vw] h-[95vh] flex items-center justify-center opacity-95"
        >
          <img
            src="/assets/emerald-glass-dark.jpg"
            alt="Vidro Fosco Verde Esmeralda 3D - MA Engenharia"
            className="w-full h-full object-contain filter drop-shadow-[0_25px_60px_rgba(11,122,90,0.55)] brightness-105 contrast-110"
          />
        </motion.div>

        {/* Floating frosted glass pill badges com efeito de vidro fosco */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35 }}
          className="hidden xl:flex absolute top-[16%] right-[14%] items-center gap-3 px-5 py-2.5 rounded-full bg-[#141A17]/75 backdrop-blur-2xl border border-white/15 shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2DD4BF] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#2DD4BF]"></span>
          </span>
          <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-white/95">
            ENGENHARIA DE PRECISÃO &bull; UFOP
          </span>
        </motion.div>

        {/* Vinhetas escuras suaves para transição perfeita de borda */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0E0C] via-[#0A0E0C]/75 to-transparent w-full md:w-3/5" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E0C] via-transparent to-transparent h-36 bottom-0" />
      </div>

      {/* =========================================================================
          CARD ARQUITETÔNICO ESCURO ALINHADO À ESQUERDA
          (COM A FRASE PRINCIPAL DELES: PROJETOS INTELIGENTES, RESULTADOS EFICIENTES)
          ========================================================================= */}
      <div className="relative z-10 w-full px-4 sm:px-8 lg:px-12 xl:px-16 py-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl bg-[#141816]/95 border border-white/10 p-8 sm:p-12 lg:p-14 shadow-[0_25px_60px_rgba(0,0,0,0.85)] backdrop-blur-2xl"
        >
          {/* Tag de Destaque */}
          <div className="mb-4 inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#2DD4BF]">
            <Zap className="h-3 w-3 text-[#2DD4BF]" />
            <span>SOLUÇÕES EM ENGENHARIA ELÉTRICA & AUTOMAÇÃO</span>
          </div>

          {/* A FRASE PRINCIPAL */}
          <h1 className="font-display text-[clamp(2.2rem,4.4vw,3.7rem)] font-extrabold leading-[1.08] tracking-tight text-white">
            Projetos inteligentes,
            <br />
            resultados eficientes.
          </h1>

          {/* Subtítulo Institucional Focado no Core Business */}
          <p className="mt-6 text-[14.5px] sm:text-[15.5px] leading-relaxed text-white/80 font-normal">
            Soluções definitivas em engenharia elétrica, laudos técnicos periciais (NR-10 e SPDA) e controle & automação com rigor técnico, segurança de operação e eficiência contínua para sua empresa.
          </p>

          {/* Grupo de Botões com Visual Jacobs */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#solucoes"
              className="inline-flex items-center justify-center bg-white px-7 py-3.5 font-display text-xs font-bold uppercase tracking-[0.16em] text-black transition-all duration-300 hover:bg-[#2DD4BF] hover:text-black"
            >
              <span>Descobrir</span>
            </a>

            <a
              href={`${WHATSAPP}?text=${encodeURIComponent("Olá! Gostaria de solicitar um orçamento para engenharia elétrica.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 border border-white/20 bg-transparent px-6 py-3.5 font-display text-xs font-bold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:border-white hover:bg-white/10"
            >
              <span>Solicitar Orçamento</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

        </motion.div>
      </div>

    </section>
  );
}
