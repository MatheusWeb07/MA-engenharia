import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { WHATSAPP } from "../data";

export default function ServicesT1() {
  const [openIndex, setOpenIndex] = useState(0);

  const ACCORDION_SERVICES = [
    {
      title: "Elaboração de Projetos Elétricos (NBR 5410)",
      category: "PROJETOS EXECUTIVOS & ENGENHARIA",
      desc: "Desenvolvimento minucioso de projetos elétricos residenciais de alto padrão, comerciais e plantas industriais. Cada circuito é calculado meticulosamente para evitar quedas de tensão, aquecimento de condutores e desperdício de energia. Acompanha diagramas unifilares, trifilares, lista executiva de materiais e Anotação de Responsabilidade Técnica (ART).",
      specs: ["Conformidade com ABNT NBR 5410", "Dimensionamento de condutores e disjuntores", "Proteção contra sobretensão (DPS) e choque (DR)", "ART assinada pelos engenheiros titulares"],
    },
    {
      title: "Elaboração de Laudos Técnicos & Vistorias (NR-10 & NBR 5419)",
      category: "CONFORMIDADE LEGAL & SEGURANÇA",
      desc: "Inspeções técnicas rigorosas com instrumentos de medição calibrados para certificar a segurança das instalações elétricas perante seguradoras, Ministério do Trabalho e Corpo de Bombeiros Militar (AVCB). Diagnósticos de SPDA (Para-raios) e malhas de aterramento com relatórios fotográficos de não conformidades.",
      specs: ["Laudo das Instalações Elétricas (NR-10)", "Laudo de SPDA e Aterramento (NBR 5419)", "Relatório conclusivo para AVCB e seguradoras", "Instrumentação de medição de alta precisão"],
    },
    {
      title: "Controle & Automação Industrial (Especialidade UFOP)",
      category: "TECNOLOGIA & INTEGRAÇÃO",
      desc: "Área de ênfase de formação acadêmica dos fundadores na Universidade Federal de Ouro Preto (UFOP). Desenvolvemos e modernizamos painéis de comando elétrico, rotinas operacionais industriais, diagramas de intertravamento e especificação técnica de motores e sensores.",
      specs: ["Projetos executivos de quadros de comando", "Automação e modernização de processos", "Lógicas de acionamento e intertravamento", "Comissionamento técnico em campo com ART"],
    },
    {
      title: "Consultoria Técnica & Diagnósticos de Eficiência",
      category: "OTIMIZAÇÃO OPERACIONAL",
      desc: "Atuação consultiva estratégica lado a lado com sua empresa. Auditorias elétricas in loco para identificação de sobrecargas de circuitos, fugas de corrente, desbalanceamento de fases e oportunidades de economia contínua na fatura de energia.",
      specs: ["Diagnóstico técnico de instalações existentes", "Eliminação de sobrecargas e riscos térmicos", "Estudos para redução de consumo e perdas", "Pareceres técnicos conclusivos assinados"],
    },
  ];

  return (
    <section id="servicos" className="w-full bg-[#F8FAF9] py-24 px-6 sm:px-10 border-t border-[#0B7A5A]/15">
      <div className="mx-auto max-w-[1200px] space-y-14">
        
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
              SERVIÇOS & SOLUÇÕES TÉCNICAS
            </span>
          </div>

          <h2 className="max-w-3xl font-sans text-[36px] sm:text-[46px] lg:text-[52px] font-light leading-[1.0] tracking-[0.52px] text-[#1E1E1E]">
            Conformidade normativa e precisão em cada linha de projeto.
          </h2>

          <p className="max-w-2xl text-[16px] font-normal leading-[1.5] text-[#1E1E1E]/80">
            Todas as nossas entregas acompanham responsabilidade técnica legal com emissão de ART e atendimento às normas ABNT e NR.
          </p>
        </motion.div>

        {/* =========================================================================
            ACCORDION LIST COM BORDAS E DESTAQUES NA COR DA LOGO (#0B7A5A)
            ========================================================================= */}
        <div className="border-t border-[#0B7A5A]/30 divide-y divide-[#0B7A5A]/20">
          {ACCORDION_SERVICES.map((s, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={s.title} className="py-7 transition-colors">
                
                {/* Linha Principal do Accordion */}
                <div
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="flex cursor-pointer items-center justify-between gap-6 group"
                >
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.14em] text-[#0B7A5A]">
                      {s.category}
                    </span>
                    <h3 className="text-[19px] sm:text-[22px] font-normal text-[#1E1E1E] group-hover:text-[#0B7A5A] transition">
                      {s.title}
                    </h3>
                  </div>

                  {/* Botão circular de 40px com borda de 1px em #0B7A5A */}
                  <motion.button
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.92 }}
                    type="button"
                    className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border transition ${
                      isOpen
                        ? "border-[#0B7A5A] bg-[#0B7A5A] text-white"
                        : "border-[#0B7A5A]/40 bg-white text-[#0B7A5A] group-hover:border-[#0B7A5A]"
                    }`}
                    aria-label={isOpen ? "Recolher" : "Expandir"}
                  >
                    <span className="text-[20px] leading-none select-none">
                      {isOpen ? "−" : "+"}
                    </span>
                  </motion.button>
                </div>

                {/* Conteúdo Expandido com Animação Fluida */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pt-6 pb-2 space-y-6">
                        <p className="max-w-3xl text-[15px] font-normal leading-[1.6] text-[#1E1E1E]/85">
                          {s.desc}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl pt-2">
                          {s.specs.map((item, i) => (
                            <div key={i} className="flex items-center gap-2.5 text-[13.5px] text-[#1E1E1E]">
                              <span className="h-1.5 w-1.5 rounded-full bg-[#0B7A5A]" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>

                        <div className="pt-4">
                          <motion.a
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            href={`${WHATSAPP}?text=${encodeURIComponent(`Olá! Gostaria de um orçamento para o serviço de ${s.title}.`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full bg-[#0B7A5A] px-7 py-3.5 text-[13.5px] font-semibold text-white shadow-md shadow-[#0B7A5A]/25 transition hover:bg-[#075E45]"
                          >
                            <span>Solicitar Orçamento para este Serviço</span>
                            <ArrowUpRight className="h-4 w-4" />
                          </motion.a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
