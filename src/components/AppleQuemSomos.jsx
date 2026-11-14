import React from "react";
import { motion } from "framer-motion";
import { Award, CheckCircle2, Cpu, GraduationCap, ShieldCheck, Target, Users, Zap, ArrowUpRight } from "lucide-react";
import SpotlightCard from "./react-bits/SpotlightCard";
import { CREA, FUNDADORES, WHATSAPP } from "../data";

export default function AppleQuemSomos() {
  const PILARES = [
    {
      icon: GraduationCap,
      title: "Formação Sólida pela UFOP",
      desc: "Graduados em Engenharia Elétrica com ênfase em Controle e Automação pela renomada Universidade Federal de Ouro Preto, unindo teoria avançada à aplicação prática.",
    },
    {
      icon: ShieldCheck,
      title: "Responsabilidade Técnica e ART",
      desc: "Registro ativo no CREA-MG sob o Nº 142366847-2. Cada projeto, vistoria e laudo emitido acompanha a Anotação de Responsabilidade Técnica (ART) definitiva.",
    },
    {
      icon: Users,
      title: "Atendimento Consultivo Direto",
      desc: "Sem intermediários. Você conversa diretamente com os engenheiros fundadores, garantindo transparência, precisão diagnóstica e soluções sob medida para sua necessidade.",
    },
    {
      icon: Zap,
      title: "Rigor Técnico e Eficiência",
      desc: "Dimensionamento minucioso que elimina desperdícios, evita sobrecargas em condutores e quadros elétricos e assegura total conformidade com as normas vigentes.",
    },
  ];

  return (
    <section id="quem-somos" className="relative overflow-hidden bg-[#060907] py-28 sm:py-36 text-white">
      {/* Luz ambiente sutil Apple */}
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[500px] w-[500px] rounded-full bg-[#0B7A5A]/10 blur-[150px]" />
      <div className="pointer-events-none absolute -right-40 bottom-1/4 h-[500px] w-[500px] rounded-full bg-[#10B981]/10 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        
        {/* Cabeçalho da Seção */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1 text-xs font-mono font-semibold tracking-wider text-[#10B981]">
            Sobre a Empresa
          </div>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl leading-[1.12]">
            Engenharia inteligente, fundamentada na excelência técnica.
          </h2>
          <p className="mt-4 text-base font-normal leading-relaxed text-white/70 sm:text-lg">
            A <strong className="text-white">MA | Soluções e Engenharia</strong> nasceu do propósito de tornar a engenharia mais segura, eficiente e transparente. Fundada por Marphiza Magalhães e Adeilson, a empresa combina rigor normativo, proximidade com o cliente e profundo conhecimento em sistemas elétricos e automação.
          </p>
        </motion.div>

        {/* Grid Apple Bento de 4 Pilares */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
          {PILARES.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <SpotlightCard
                  spotlightColor="rgba(16, 185, 129, 0.12)"
                  className="group relative h-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02] p-8 backdrop-blur-xl transition duration-300 hover:border-[#10B981]/30 hover:bg-white/[0.04]"
                >
                  <div className="flex items-start gap-5">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#0B7A5A]/20 text-[#10B981] transition duration-300 group-hover:scale-105 group-hover:bg-[#0B7A5A] group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-bold text-white transition group-hover:text-[#10B981] sm:text-xl">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/65">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>

        {/* Card em Destaque dos Fundadores (Apple Pro Banner) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-r from-[#0A120E] via-[#091510] to-[#07100C] p-8 backdrop-blur-2xl sm:p-10"
        >
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="space-y-2 max-w-2xl">
              <span className="font-mono text-[10.5px] font-semibold uppercase tracking-wider text-[#10B981]">
                Fundadores & Responsabilidade Técnica
              </span>
              <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
                Eng. Marphiza Magalhães & Eng. Adeilson
              </h3>
              <p className="font-mono text-xs text-white/60">
                {CREA} • Graduados em Engenharia Elétrica com ênfase em Controle e Automação (UFOP)
              </p>
            </div>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={`${WHATSAPP}?text=${encodeURIComponent("Olá Marphiza e Adeilson! Gostaria de conversar sobre um projeto de engenharia elétrica.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3 font-display text-xs font-bold uppercase tracking-wider text-[#060907] transition hover:bg-white/90"
            >
              <span>Falar Diretamente Conosco</span>
              <ArrowUpRight className="h-4 w-4" />
            </motion.a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
