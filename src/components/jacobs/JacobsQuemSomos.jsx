import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { WHATSAPP } from "../../data";

export default function JacobsQuemSomos() {
  return (
    <section id="quem-somos" className="bg-white py-20 sm:py-28 text-black border-t border-black/5">
      <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-20">
        
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-center">
          
          {/* =========================================================================
              LADO ESQUERDO: A FOTO DOS FUNDADORES
              (100% LIMPO: SEM NADA EMBAIXO COM NOMES E SEM NENHUM CREA)
              ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="overflow-hidden bg-[#0F1411] shadow-2xl transition duration-500 hover:shadow-[0_25px_50px_rgba(0,0,0,0.18)]">
              <img
                src="/assets/fundadores.jpeg"
                alt="Engenheiros Fundadores da MA Soluções e Engenharia"
                width="600"
                height="750"
                className="w-full h-auto object-cover transition-transform duration-700 ease-out hover:scale-102"
              />
            </div>
            {/* Sem nenhum texto embaixo, sem nomes, sem CREA — estritamente como ordenado */}
          </motion.div>

          {/* =========================================================================
              LADO DIREITO: TEXTO INSTITUCIONAL EDITORIAL CLEAN COM ANIMAÇÃO SUAVE
              ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            <span className="inline-block font-mono text-[10.5px] font-bold uppercase tracking-[0.2em] text-[#0B7A5A]">
              [ Quem Somos ]
            </span>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-[40px] font-extrabold leading-[1.14] tracking-tight text-black">
              Excelência técnica fundamentada na ciência e no rigor da engenharia.
            </h2>

            <p className="text-base sm:text-lg leading-relaxed text-black/75 font-normal">
              A <strong>MA | Soluções e Engenharia</strong> nasceu com o propósito de elevar a confiabilidade, a segurança operacional e a eficiência energética de indústrias, comércios e edificações.
            </p>

            <p className="text-sm sm:text-base leading-relaxed text-black/70 font-normal">
              Fundada por engenheiros eletricistas graduados pela Universidade Federal de Ouro Preto (UFOP), com ênfase em Controle e Automação, nossa empresa combina conhecimento acadêmico sólido com uma postura de trabalho prática, transparente e comprometida com a preservação de vidas e patrimônios.
            </p>

            {/* Pilares Institucionais */}
            <div className="space-y-3 pt-3 border-t border-black/10">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#0B7A5A]" />
                <span className="text-xs sm:text-sm font-medium text-black/85">
                  <strong>Atendimento Consultivo Direto:</strong> Você fala e define cada detalhe diretamente com os engenheiros responsáveis.
                </span>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#0B7A5A]" />
                <span className="text-xs sm:text-sm font-medium text-black/85">
                  <strong>Rigor Normativo Inegociável:</strong> Todos os projetos e laudos seguem estritamente as diretrizes da ABNT e do Ministério do Trabalho.
                </span>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#0B7A5A]" />
                <span className="text-xs sm:text-sm font-medium text-black/85">
                  <strong>Eficiência e Economia Real:</strong> Dimensionamento inteligente que previne desperdícios, sobrecargas e multas tarifárias.
                </span>
              </div>
            </div>

            <div className="pt-6">
              <a
                href={`${WHATSAPP}?text=${encodeURIComponent("Olá! Gostaria de conversar com os engenheiros da MA.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-black px-7 py-3.5 font-display text-xs font-bold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:bg-[#0B7A5A]"
              >
                <span>Falar Diretamente Conosco</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
