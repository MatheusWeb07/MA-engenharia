import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles, GraduationCap } from "lucide-react";
import CountUp from "../CountUp";

export default function JacobsVisionMetrics() {
  return (
    <section className="bg-white py-20 sm:py-28 text-black border-b border-black/5 relative overflow-hidden">
      
      {/* Sutil detalhe de gradiente de fundo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0B7A5A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-20 relative z-10">
        
        {/* Topo Dividido: Título Monumental + Texto Corporativo com animação suave */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <span className="inline-block font-mono text-[10.5px] font-bold uppercase tracking-[0.2em] text-[#0B7A5A] mb-3">
              [ Rigor & Segurança ]
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-extrabold leading-[1.12] tracking-tight text-black">
              Desafiando o presente.
              <br />
              Reinventando o futuro.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <p className="text-base sm:text-lg leading-relaxed text-black/75 font-normal">
              A <strong>MA | Soluções e Engenharia</strong> é uma empresa especializada que oferece soluções completas, fundamentadas na ciência e habilitadas tecnicamente — desde consultoria e assessoria até projeto e implementação — para os desafios de infraestrutura elétrica, conformidade com o Corpo de Bombeiros, manufatura e automação industrial.
            </p>
          </motion.div>
        </div>

        {/* 3 Cards de Métricas com Animação Escalonada e COUNTUP IGUAL AO DA ANL */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3 lg:gap-8">
          
          {/* Card 1: 100% com CountUp igual ao da ANL */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group flex flex-col justify-between bg-[#F4F7F5] p-8 sm:p-10 transition-all duration-500 hover:bg-[#EBF2EE] border-t-2 border-transparent hover:border-[#0B7A5A] hover:-translate-y-1.5 hover:shadow-xl relative overflow-hidden"
          >
            <div>
              <div className="flex items-baseline gap-1">
                <CountUp
                  to={100}
                  suffix="%"
                  duration={2.0}
                  className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-black transition-colors duration-300 group-hover:text-[#0B7A5A]"
                />
              </div>

              <div className="mt-2 inline-flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-wider text-[#0B7A5A]">
                <CheckCircle2 className="h-3 w-3 text-[#0B7A5A]" />
                <span>Normas NBR 5410 & 5419</span>
              </div>

              <h3 className="mt-3 font-display text-base font-bold text-black/90">
                Conformidade Técnica
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-black/65 font-normal">
                Projetos e laudos elaborados em rigorosa consonância com as normas ABNT NBR 5410, NBR 5419 e NR-10.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-black/10">
              <a
                href="#solucoes"
                className="inline-flex items-center gap-2 font-display text-xs font-bold text-black transition-colors duration-300 group-hover:text-[#0B7A5A]"
              >
                <span>Visão geral das normas</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
              </a>
            </div>
          </motion.div>

          {/* Card 2: UFOP - Excelência Acadêmica */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.65, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="group flex flex-col justify-between bg-[#F4F7F5] p-8 sm:p-10 transition-all duration-500 hover:bg-[#EBF2EE] border-t-2 border-transparent hover:border-[#0B7A5A] hover:-translate-y-1.5 hover:shadow-xl relative overflow-hidden"
          >
            <div>
              <span className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-black transition-colors duration-300 group-hover:text-[#0B7A5A]">
                UFOP
              </span>

              <div className="mt-2 inline-flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-wider text-[#0B7A5A]">
                <GraduationCap className="h-3 w-3 text-[#0B7A5A]" />
                <span>Formação Universitária Federal</span>
              </div>

              <h3 className="mt-3 font-display text-base font-bold text-black/90">
                Excelência Acadêmica
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-black/65 font-normal">
                Engenheiros formados pela Universidade Federal de Ouro Preto com ênfase em Controle e Automação.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-black/10">
              <a
                href="#quem-somos"
                className="inline-flex items-center gap-2 font-display text-xs font-bold text-black transition-colors duration-300 group-hover:text-[#0B7A5A]"
              >
                <span>Conhecer nossa formação</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
              </a>
            </div>
          </motion.div>

          {/* Card 3: ART - Responsabilidade */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.65, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
            className="group flex flex-col justify-between bg-[#F4F7F5] p-8 sm:p-10 transition-all duration-500 hover:bg-[#EBF2EE] border-t-2 border-transparent hover:border-[#0B7A5A] hover:-translate-y-1.5 hover:shadow-xl relative overflow-hidden"
          >
            <div>
              <span className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-black transition-colors duration-300 group-hover:text-[#0B7A5A]">
                ART
              </span>

              <div className="mt-2 inline-flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-wider text-[#0B7A5A]">
                <Sparkles className="h-3 w-3 text-[#0B7A5A]" />
                <span>Anotação de Responsabilidade Técnica</span>
              </div>

              <h3 className="mt-3 font-display text-base font-bold text-black/90">
                Responsabilidade em Cada Entrega
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-black/65 font-normal">
                Anotação de Responsabilidade Técnica emitida para todos os projetos, laudos periciais e consultorias.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-black/10">
              <a
                href="#contato"
                className="inline-flex items-center gap-2 font-display text-xs font-bold text-black transition-colors duration-300 group-hover:text-[#0B7A5A]"
              >
                <span>Solicitar proposta técnica</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
