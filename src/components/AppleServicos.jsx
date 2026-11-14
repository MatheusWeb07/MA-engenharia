import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, ChevronRight, Cpu, FileCheck2, ShieldAlert, ShieldCheck, Wrench, Zap } from "lucide-react";
import SpotlightCard from "./react-bits/SpotlightCard";
import { WHATSAPP } from "../data";

export default function AppleServicos() {
  const [activeTab, setActiveTab] = useState(0);

  const SERVICOS = [
    {
      id: "projetos",
      tag: "ABNT NBR 5410",
      title: "Projetos Elétricos de Baixa Tensão",
      subtitle: "Dimensionamento inteligente, segurança operacional e economia",
      img: "/assets/eng-projeto-arquitetura.jpg",
      desc: "Elaboração completa de projetos elétricos executivos para edificações residenciais de alto padrão, comerciais e plantas industriais. Cada circuito é calculado meticulosamente para evitar quedas de tensão, aquecimento de condutores e desperdício financeiro.",
      itens: [
        "Diagramas unifilares, trifilares e multifilares detalhados",
        "Dimensionamento de condutores, disjuntores e quadros de distribuição",
        "Sistemas de proteção contra sobretensões (DPS) e choque (DR)",
        "Projetos luminotécnicos focados em eficiência energética e conforto",
        "Lista detalhada de materiais para orçamentação precisa de compras",
        "Emissão de Anotação de Responsabilidade Técnica (ART)",
      ],
      ctaText: "Solicitar Projeto Elétrico",
    },
    {
      id: "laudos",
      tag: "NR-10 & NBR 5419",
      title: "Laudos Técnicos e Vistorias Periciais",
      subtitle: "Diagnósticos in loco com instrumentos aferidos para aprovação legal",
      img: "/assets/eng-inspecao-medicao.jpg",
      desc: "Inspeções técnicas rigorosas nas instalações elétricas para atestar segurança, identificar riscos ocultos e emitir documentação oficial perante seguradoras, Ministério do Trabalho e Corpo de Bombeiros Militar para obtenção ou renovação de AVCB.",
      itens: [
        "Laudo das Instalações Elétricas em conformidade com a NR-10",
        "Laudo de SPDA (Para-raios) e Malha de Aterramento (NBR 5419)",
        "Inspeções com instrumentos de medição certificados e calibrados",
        "Relatório fotográfico com diagnóstico claro de não conformidades",
        "Plano de ação corretiva com orientações de adequação prioritárias",
        "Emissão de ART definitiva assinada pelos engenheiros responsáveis",
      ],
      ctaText: "Solicitar Laudo Técnico",
    },
    {
      id: "automacao",
      tag: "Especialidade UFOP",
      title: "Controle & Automação Industrial",
      subtitle: "Modernização de quadros de comando e integração inteligente",
      img: "/assets/eng-painel-automacao.jpg",
      desc: "Área de ênfase de formação acadêmica dos fundadores na UFOP. Desenvolvemos soluções em automação predial e industrial, integrando sensores, acionamentos e painéis de comando para garantir repetibilidade, segurança operacional e produtividade.",
      itens: [
        "Projeto executivo de quadros de comando e força",
        "Automação e modernização de processos e rotinas operacionais",
        "Diagramas funcionais de intertravamento e lógicas de acionamento",
        "Integração de relés programáveis, sensores e controladores",
        "Especificação técnica precisa de componentes e proteções de motor",
        "Acompanhamento técnico e comissionamento com emissão de ART",
      ],
      ctaText: "Solicitar Solução em Automação",
    },
    {
      id: "consultoria",
      tag: "Atuação Consultiva",
      title: "Consultoria Técnica & Diagnósticos",
      subtitle: "Otimização de custos de energia e prevenção de passivos",
      img: "/assets/eng-subestacao-industrial.jpg",
      desc: "Acompanhamento estratégico lado a lado com sua empresa. Realizamos auditorias detalhadas em instalações existentes para identificar fugas de corrente, aquecimento anômalo, desbalanceamento de fases e oportunidades de economia contínua na fatura de energia.",
      itens: [
        "Auditoria e diagnóstico técnico de instalações já existentes",
        "Identificação de gargalos de consumo e sobrecargas de circuitos",
        "Estudos para correção de fator de potência e redução de multas",
        "Pareceres técnicos para reformas, ampliações e novas cargas",
        "Suporte técnico consultivo diretamente com os engenheiros titulares",
        "Emissão de relatório técnico conclusivo acompanhado de ART",
      ],
      ctaText: "Solicitar Consultoria Técnica",
    },
  ];

  const current = SERVICOS[activeTab];

  return (
    <section id="servicos" className="relative overflow-hidden bg-[#070D0A] py-28 sm:py-36 text-white">
      {/* Luz ambiente suave */}
      <div className="pointer-events-none absolute right-0 top-1/4 h-[600px] w-[600px] rounded-full bg-[#0B7A5A]/10 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1 text-xs font-mono font-semibold tracking-wider text-[#10B981]">
            Nossas Soluções
          </div>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl leading-[1.12]">
            Serviços executados com precisão cirúrgica.
          </h2>
          <p className="mt-4 text-base font-normal leading-relaxed text-white/70 sm:text-lg">
            Do dimensionamento executivo à emissão de laudos com ART, todas as nossas soluções seguem rigorosamente as normas técnicas vigentes.
          </p>
        </motion.div>

        {/* Segmented Control / Apple Tabs Switcher */}
        <div className="mt-12 flex flex-wrap gap-2 rounded-full border border-white/10 bg-black/40 p-1.5 backdrop-blur-xl sm:inline-flex">
          {SERVICOS.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setActiveTab(idx)}
              className={`relative rounded-full px-5 py-2.5 text-xs font-semibold transition-all duration-300 sm:text-sm ${
                activeTab === idx
                  ? "text-white shadow-md shadow-black/40"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {activeTab === idx && (
                <motion.div
                  layoutId="activeTabBadge"
                  className="absolute inset-0 rounded-full bg-[#0B7A5A]"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{s.title.split(" ")[0]} {s.title.split(" ")[1]}</span>
            </button>
          ))}
        </div>

        {/* Conteúdo Dinâmico do Serviço em Destaque */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-6 backdrop-blur-2xl sm:p-10 lg:p-12"
          >
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
              
              {/* Lado Esquerdo: Detalhes e Entregáveis */}
              <div className="space-y-6 lg:col-span-7">
                <div>
                  <span className="inline-block rounded-full bg-[#0B7A5A]/20 px-3 py-1 font-mono text-[11px] font-semibold text-[#10B981]">
                    {current.tag}
                  </span>
                  <h3 className="mt-3 font-display text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
                    {current.title}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-white/50 sm:text-base">
                    {current.subtitle}
                  </p>
                </div>

                <p className="text-sm font-normal leading-relaxed text-white/75 sm:text-base">
                  {current.desc}
                </p>

                {/* Checklist de Entregáveis */}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 pt-2">
                  {current.itens.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-[#10B981] mt-0.5" />
                      <span className="text-xs text-white/80 leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Botão de Solicitação do Serviço */}
                <div className="pt-4">
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href={`${WHATSAPP}?text=${encodeURIComponent(`Olá! Gostaria de um orçamento para o serviço de ${current.title}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#0B7A5A] px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-[#0B7A5A]/25 transition hover:bg-[#0E8A66]"
                  >
                    <span>{current.ctaText}</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </motion.a>
                </div>
              </div>

              {/* Lado Direito: Imagem Técnica Real */}
              <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl lg:col-span-5">
                <img
                  src={current.img}
                  alt={current.title}
                  width="600"
                  height="450"
                  className="h-[320px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[400px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070D0A]/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-white/80">
                  <span>MA Soluções e Engenharia</span>
                  <span className="text-[#10B981]">Conforme Normas Técnicas</span>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
