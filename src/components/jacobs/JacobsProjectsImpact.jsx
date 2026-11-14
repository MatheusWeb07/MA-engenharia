import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { WHATSAPP } from "../../data";

export default function JacobsProjectsImpact() {
  const PROJECTS = [
    {
      tag: "ENGENHARIA ELÉTRICA",
      title: "Dimensionamento e Projeto de Entrada de Energia em Média e Baixa Tensão",
      desc: "Adequação completa de circuitos alimentadores, proteção geral e distribuição balanceada com total conformidade à NBR 5410.",
      img: "/assets/eng-subestacao-industrial.jpg",
    },
    {
      tag: "LAUDOS & PERÍCIAS",
      title: "Inspeção Minuciosa de SPDA e Instalações Elétricas para Obtenção de AVCB",
      desc: "Medições in loco com instrumentos calibrados, emissão de relatório fotográfico de conformidades e ART definitiva perante o Corpo de Bombeiros.",
      img: "/assets/eng-inspecao-medicao.jpg",
    },
    {
      tag: "CONTROLE & AUTOMAÇÃO",
      title: "Integração e Automação de Painéis de Comando e Acionamentos Industriais",
      desc: "Projeto executivo, parametrização e testes de intertravamento para garantir repetibilidade, produtividade e proteção contra falhas operacionais.",
      img: "/assets/eng-painel-automacao.jpg",
    },
  ];

  return (
    <section id="projetos" className="bg-[#111513] py-20 sm:py-28 text-white border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-20">
        
        {/* Cabeçalho da Seção com animação ao rolar */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
        >
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-white">
              Projetos que geram impacto
            </h2>
            <p className="mt-4 text-base text-white/70 leading-relaxed font-normal">
              Descubra como damos vida a projetos complexos, proporcionando resultados práticos e duradouros para as comunidades e clientes que servimos.
            </p>
          </div>

          <a
            href={`${WHATSAPP}?text=${encodeURIComponent("Olá! Gostaria de consultar os projetos executados pela MA Engenharia.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center bg-white px-7 py-3.5 font-display text-xs font-bold uppercase tracking-[0.16em] text-black transition hover:bg-[#2DD4BF] hover:text-black"
          >
            <span>Todos os Projetos</span>
          </a>
        </motion.div>

        {/* Grade de 3 Cards com Animação Escalonada e Zoom Fluido */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {PROJECTS.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.12 * idx, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col justify-between overflow-hidden bg-[#181D1A] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(0,0,0,0.7)]"
            >
              {/* Fotografia com Zoom Fluido no Hover */}
              <div className="relative h-60 w-full overflow-hidden bg-black">
                <img
                  src={p.img}
                  alt={p.title}
                  width="600"
                  height="400"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-black/85 px-3 py-1 font-mono text-[9.5px] font-bold uppercase tracking-wider text-white">
                    {p.tag}
                  </span>
                </div>
              </div>

              {/* Conteúdo do Card */}
              <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                <div>
                  <h3 className="font-display text-lg font-bold leading-snug text-white transition-colors duration-300 group-hover:text-[#2DD4BF]">
                    {p.title}
                  </h3>
                  <p className="mt-2.5 text-xs text-white/65 leading-relaxed font-normal">
                    {p.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10">
                  <a
                    href={`${WHATSAPP}?text=${encodeURIComponent(`Olá! Gostaria de saber mais sobre o projeto: ${p.title}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-wider text-white/80 transition-colors duration-300 group-hover:text-[#2DD4BF]"
                  >
                    <span>Saiba mais</span>
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
