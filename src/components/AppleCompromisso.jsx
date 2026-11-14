import React from "react";
import { motion } from "framer-motion";
import { Award, Compass, Eye, HeartHandshake, Lightbulb, ShieldCheck } from "lucide-react";
import SpotlightCard from "./react-bits/SpotlightCard";

export default function AppleCompromisso() {
  const VALORES = [
    {
      title: "Ética e Integridade",
      desc: "Transparência total em diagnósticos, orçamentos justos e compromisso inegociável com a verdade técnica.",
    },
    {
      title: "Rigor Normativo",
      desc: "Respeito irrestrito às normas ABNT e NR vigentes, garantindo 100% de conformidade legal e ART emitida.",
    },
    {
      title: "Inovação Aplicada",
      desc: "Metodologias modernas e tecnologia em engenharia para gerar resultados palpáveis, eficientes e duradouros.",
    },
    {
      title: "Segurança Absoluta",
      desc: "Prioridade incondicional na preservação da vida humana, das instalações e do patrimônio de nossos clientes.",
    },
  ];

  return (
    <section id="compromisso" className="relative overflow-hidden bg-[#060907] py-28 sm:py-36 text-white">
      {/* Luz ambiente central sutil */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[#0B7A5A]/10 blur-[170px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        
        {/* Frase Monumental Apple Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-[#10B981]">
            Nosso Manifesto
          </span>

          <blockquote className="mt-6 font-display text-2xl font-extrabold leading-snug tracking-tight text-white sm:text-3xl lg:text-4xl">
            “Transformamos desafios em soluções e ideias em resultados — porque, para nós, engenharia é sinônimo de{" "}
            <span className="text-[#10B981]">evolução, precisão e confiança.</span>”
          </blockquote>
        </motion.div>

        {/* Missão e Visão em Cards Bento Apple */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <SpotlightCard
              spotlightColor="rgba(16, 185, 129, 0.12)"
              className="h-full rounded-[2rem] border border-white/10 bg-white/[0.02] p-8 backdrop-blur-xl sm:p-10 transition duration-300 hover:border-[#10B981]/30 hover:bg-white/[0.04]"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#0B7A5A]/20 text-[#10B981]">
                  <Compass className="h-5 w-5" />
                </span>
                <h3 className="font-display text-xl font-bold text-white">Nossa Missão</h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
                Tornar a engenharia mais inteligente, segura e eficiente, oferecendo soluções personalizadas em projetos elétricos, automação e consultoria técnica. Unir conhecimento técnico, inovação e responsabilidade para assegurar tranquilidade aos clientes.
              </p>
            </SpotlightCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <SpotlightCard
              spotlightColor="rgba(16, 185, 129, 0.12)"
              className="h-full rounded-[2rem] border border-white/10 bg-white/[0.02] p-8 backdrop-blur-xl sm:p-10 transition duration-300 hover:border-[#10B981]/30 hover:bg-white/[0.04]"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#0B7A5A]/20 text-[#10B981]">
                  <Eye className="h-5 w-5" />
                </span>
                <h3 className="font-display text-xl font-bold text-white">Nossa Visão</h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
                Ser referência em engenharia elétrica e automação em Minas Gerais, reconhecida pela excelência técnica, ética profissional e pela capacidade comprovada de transformar desafios em soluções seguras, eficientes e sustentáveis.
              </p>
            </SpotlightCard>
          </motion.div>

        </div>

        {/* 4 Valores Centrais */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {VALORES.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-white/5 bg-white/[0.02] p-5 backdrop-blur-md transition hover:border-[#10B981]/30 hover:bg-white/[0.04]"
            >
              <h4 className="font-display text-sm font-bold text-white">{v.title}</h4>
              <p className="mt-2 text-xs leading-relaxed text-white/60">{v.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
