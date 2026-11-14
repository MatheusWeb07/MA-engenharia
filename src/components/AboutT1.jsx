import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { CREA, FUNDADORES, WHATSAPP } from "../data";

export default function AboutT1() {
  return (
    <section id="quem-somos" className="w-full bg-[#FFFFFF] py-24 px-6 sm:px-10">
      <div className="mx-auto max-w-[1200px] space-y-16">
        
        {/* Cabeçalho da Seção com Quadrado Sólido 4px na Cor da Logo (#0B7A5A) */}
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
              QUEM SOMOS & FUNDAÇÃO
            </span>
          </div>

          <h2 className="max-w-3xl font-sans text-[36px] sm:text-[46px] lg:text-[52px] font-light leading-[1.0] tracking-[0.52px] text-[#1E1E1E]">
            Engenharia elétrica fundamentada na excelência técnica e rigor normativo.
          </h2>

          <div className="grid grid-cols-1 gap-8 pt-2 md:grid-cols-2">
            <p className="text-[16px] font-normal leading-[1.5] text-[#1E1E1E]/85">
              A <strong className="font-semibold text-[#1E1E1E]">MA | Soluções e Engenharia</strong> nasceu do propósito de tornar a engenharia mais inteligente, segura e eficiente. Fundada pelos engenheiros eletricistas Marphiza Magalhães e Adeilson, com ênfase em Controle e Automação formados pela Universidade Federal de Ouro Preto (UFOP), a empresa atua na vanguarda de projetos executivos e diagnósticos periciais.
            </p>
            <p className="text-[16px] font-normal leading-[1.5] text-[#1E1E1E]/85">
              Mais do que executar serviços burocráticos, acreditamos em parcerias técnicas de confiança construídas com base na ética, no rigor analítico e no atendimento consultivo direto. Cada solução é dimensionada sob medida, eliminando riscos elétricos, sobrecargas e passivos regulatórios.
            </p>
          </div>

          {/* Botão na Cor da Logo (#0B7A5A) */}
          <div className="pt-2">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={`${WHATSAPP}?text=${encodeURIComponent("Olá! Gostaria de falar diretamente com os engenheiros da MA Engenharia.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#0B7A5A] bg-transparent px-7 py-3.5 text-[14px] font-semibold text-[#0B7A5A] transition hover:bg-[#0B7A5A] hover:text-white"
            >
              <span>Conversar com os Engenheiros Titulares</span>
              <ArrowUpRight className="h-4 w-4" />
            </motion.a>
          </div>
        </motion.div>

        {/* =========================================================================
            PAR DE IMAGENS COM BORDA DE 80PX (CONFORME DESIGN.MD DE T1 ENERGY)
            ========================================================================= */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 pt-4">
          
          {/* Imagem 1: Fundadores */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="h-[460px] w-full overflow-hidden rounded-[80px] bg-[#E6F4F0] border border-[#0B7A5A]/15 shadow-sm"
          >
            <img
              src="/assets/fundadores.jpeg"
              alt="Eng. Marphiza Magalhães e Eng. Adeilson"
              className="h-full w-full object-cover object-top transition duration-700 hover:scale-105"
            />
          </motion.div>

          {/* Imagem 2: Prática e Projetos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="h-[460px] w-full overflow-hidden rounded-[80px] bg-[#E6F4F0] border border-[#0B7A5A]/15 shadow-sm"
          >
            <img
              src="/assets/eng-projeto-arquitetura.jpg"
              alt="Elaboração de projetos elétricos e memoriais"
              className="h-full w-full object-cover object-center transition duration-700 hover:scale-105"
            />
          </motion.div>

        </div>

      </div>
    </section>
  );
}
