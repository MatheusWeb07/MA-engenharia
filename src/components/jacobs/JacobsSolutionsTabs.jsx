import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { WHATSAPP } from "../../data";

export default function JacobsSolutionsTabs() {
  const [activeTab, setActiveTab] = useState(0);

  const TABS = [
    {
      id: "projetos",
      label: "PROJETOS ELÉTRICOS",
      norma: "ABNT NBR 5410",
      title: "Projetos Elétricos e Dimensionamento sob Medida",
      desc: "Desenvolvemos projetos executivos completos para instalações comerciais, industriais e residenciais de alto padrão. Cada circuito é dimensionado criteriosamente para evitar perdas, sobrecargas e garantir total conformidade com a ABNT NBR 5410.",
      itens: [
        "Diagramas unifilares, trifilares e multifilares detalhados",
        "Dimensionamento de condutores, quadros e dispositivos de proteção (DR/DPS)",
        "Projetos luminotécnicos focados em eficiência energética e sustentabilidade",
        "Memorial descritivo e lista quantitativa de materiais para orçamentação",
        "Emissão de Anotação de Responsabilidade Técnica (ART)",
      ],
      img: "/assets/eng-projeto-arquitetura.jpg",
      cta: "Solicitar Projeto Elétrico",
    },
    {
      id: "laudos",
      label: "LAUDOS TÉCNICOS & SPDA",
      norma: "NR-10 & NBR 5419",
      title: "Laudos Técnicos e Vistorias Periciais",
      desc: "Inspeções técnicas minuciosas in loco com equipamentos aferidos e calibrados. Nossos laudos periciais atendem integralmente às exigências do Ministério do Trabalho (NR-10), seguradoras e Corpo de Bombeiros Militar para obtenção ou renovação do AVCB.",
      itens: [
        "Laudo das instalações elétricas em conformidade com a NR-10",
        "Laudo de SPDA (Para-raios) e malhas de aterramento (NBR 5419)",
        "Relatório fotográfico com diagnóstico claro de não conformidades",
        "Plano de ação corretiva com cronograma de prioridades de adequação",
        "Emissão de ART definitiva assinada pelos engenheiros responsáveis",
      ],
      img: "/assets/eng-inspecao-medicao.jpg",
      cta: "Solicitar Laudo Técnico",
    },
    {
      id: "automacao",
      label: "CONTROLE & AUTOMAÇÃO",
      norma: "FORMAÇÃO UFOP",
      title: "Automação e Otimização de Processos Industriais",
      desc: "Principal área de ênfase de formação acadêmica dos fundadores na Universidade Federal de Ouro Preto. Projetamos e modernizamos quadros de comando, intertravamentos lógicos e integração de sistemas para máxima repetibilidade e segurança.",
      itens: [
        "Projeto e montagem de quadros de comando e força industrial",
        "Automação de rotinas operacionais e integração de relés programáveis",
        "Diagramas funcionais de comando e lógicas de intertravamento",
        "Especificação técnica precisa de inversores, soft-starters e proteções",
        "Comissionamento em campo com emissão de ART",
      ],
      img: "/assets/eng-painel-automacao.jpg",
      cta: "Solicitar Automação Industrial",
    },
    {
      id: "consultoria",
      label: "CONSULTORIA TÉCNICA",
      norma: "EFICIÊNCIA & SEGURANÇA",
      title: "Consultoria Especializada e Diagnóstico Operacional",
      desc: "Atuação estratégica e consultiva lado a lado com sua diretoria ou equipe de manutenção. Realizamos auditorias técnicas em instalações existentes para diagnosticar falhas ocultas, desbalanceamento de fases e oportunidades de redução de custo de energia.",
      itens: [
        "Auditoria minuciosa do estado das instalações elétricas existentes",
        "Identificação de gargalos de consumo e sobreaquecimento de circuitos",
        "Estudos técnicos para correção do fator de potência e eliminação de multas",
        "Pareceres técnicos para reformas, ampliações e entrada de novas cargas",
        "Acompanhamento consultivo direto pelos engenheiros fundadores",
      ],
      img: "/assets/eng-subestacao-industrial.jpg",
      cta: "Solicitar Consultoria Técnica",
    },
  ];

  const current = TABS[activeTab];

  return (
    <section id="solucoes" className="bg-white py-20 sm:py-28 text-black">
      <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-20">
        
        {/* Cabeçalho com animação de entrada ao rolar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
        >
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-black">
              Soluções que resolvem desafios complexos
            </h2>
            <p className="mt-4 text-base text-black/75 leading-relaxed font-normal">
              Reunimos os serviços, a experiência e a tecnologia certos para oferecer soluções inovadoras, seguras e sustentáveis, feitas para durar.
            </p>
          </div>

          <a
            href={`${WHATSAPP}?text=${encodeURIComponent("Olá! Gostaria de conhecer todas as soluções da MA Engenharia.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex shrink-0 items-center justify-center bg-black px-7 py-3.5 font-display text-xs font-bold uppercase tracking-[0.16em] text-white transition hover:bg-[#0B7A5A]"
          >
            <span>Todas as Soluções</span>
          </a>
        </motion.div>

        {/* =========================================================================
            BARRA DE ABAS HORIZONTAIS COM ANIMAÇÃO FLUIDA (ESTILO VÍDEO RIVEN)
            ========================================================================= */}
        <div className="mt-12 border-b border-black/15 overflow-x-auto">
          <div className="flex gap-2 sm:gap-6 min-w-max pb-px">
            {TABS.map((tab, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(idx)}
                  className={`relative py-4 px-3 sm:px-5 font-display text-xs sm:text-[13px] font-bold tracking-[0.08em] transition-colors ${
                    isActive ? "text-black" : "text-black/50 hover:text-black"
                  }`}
                >
                  <span>{tab.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="jacobsActiveTabIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[3px] bg-black"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            SPLIT CARD PRINCIPAL COM TRANSIÇÃO SUAVE
            ========================================================================= */}
        <div className="mt-10 overflow-hidden bg-[#141816] text-white shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
            
            {/* Lado Esquerdo: Painel de Conteúdo Técnico */}
            <div className="flex flex-col justify-between p-8 sm:p-12 lg:col-span-6 xl:col-span-5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 16 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-4"
                >
                  <span className="inline-block font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#2DD4BF]">
                    {current.norma}
                  </span>

                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold leading-snug text-white">
                    {current.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-white/75 font-normal">
                    {current.desc}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-white/10">
                    {current.itens.map((it) => (
                      <div key={it} className="flex items-start gap-2.5 text-xs text-white/80">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#2DD4BF]" />
                        <span>{it}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="mt-8 pt-6 border-t border-white/10">
                <a
                  href={`${WHATSAPP}?text=${encodeURIComponent(`Olá! Gostaria de solicitar uma proposta técnica para o serviço de: ${current.title}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white px-7 py-3.5 font-display text-xs font-bold uppercase tracking-[0.16em] text-black transition hover:bg-[#2DD4BF] hover:text-black"
                >
                  <span>{current.cta}</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Lado Direito: Fotografia Técnica em Alta Definição */}
            <div className="relative min-h-[350px] lg:col-span-6 xl:col-span-7 overflow-hidden bg-black">
              <AnimatePresence mode="wait">
                <motion.img
                  key={current.img}
                  src={current.img}
                  alt={current.title}
                  width="900"
                  height="600"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="h-full w-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
