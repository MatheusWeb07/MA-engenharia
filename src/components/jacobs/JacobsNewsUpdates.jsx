import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { WHATSAPP } from "../../data";

export default function JacobsNewsUpdates() {
  const NEWS = [
    {
      tag: "COMUNICADO NORMATIVO",
      title: "Exigências e Prazos do Laudo de SPDA (NBR 5419) para Obtenção e Renovação de AVCB",
      desc: "Entenda por que a vistoria periódica do sistema de para-raios e medição da malha de aterramento é mandatória para seguradoras e Corpo de Bombeiros Militar.",
      img: "/assets/eng-inspecao-medicao.jpg",
      date: "Normas Técnicas",
    },
    {
      tag: "EFICIÊNCIA OPERACIONAL",
      title: "Como o Dimensionamento Correto de Condutores Reduz Perdas Elétricas e Custos Mensais",
      desc: "Projetos elétricos executivos detalhados evitam quedas de tensão, superaquecimento e sobrecargas que geram desperdício de energia e paradas não programadas.",
      img: "/assets/eng-projeto-arquitetura.jpg",
      date: "Boas Práticas",
    },
  ];

  return (
    <section id="noticias" className="bg-white py-20 sm:py-28 text-black border-t border-black/5">
      <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-20">
        
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
        >
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[40px] font-extrabold tracking-tight text-black">
              Notícias e atualizações
            </h2>
            <p className="mt-3 text-base text-black/75 leading-relaxed font-normal">
              Confira os últimos comunicados, orientações técnicas e atualizações normativas que asseguram a conformidade e a longevidade operacional das suas instalações.
            </p>
          </div>

          <a
            href={`${WHATSAPP}?text=${encodeURIComponent("Olá! Gostaria de falar com os engenheiros sobre as normas técnicas.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center bg-black px-7 py-3.5 font-display text-xs font-bold uppercase tracking-[0.16em] text-white transition hover:bg-[#0B7A5A]"
          >
            <span>Ver Notícias</span>
          </a>
        </motion.div>

        {/* Grade de 2 Notícias Técnicas com Stagger e Hover Fluido */}
        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2">
          {NEWS.map((n, idx) => (
            <motion.div
              key={n.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.12 * idx, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col justify-between bg-[#F8FAF9] border border-black/5 transition duration-500 hover:shadow-2xl hover:border-black/15 hover:-translate-y-1"
            >
              <div className="relative h-64 w-full overflow-hidden bg-black">
                <img
                  src={n.img}
                  alt={n.title}
                  width="700"
                  height="450"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-106 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-black/85 px-3 py-1 font-mono text-[9.5px] font-bold uppercase tracking-wider text-white">
                    {n.tag}
                  </span>
                </div>
              </div>

              <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
                <div>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#0B7A5A]">
                    {n.date}
                  </span>
                  <h3 className="mt-2 font-display text-lg font-bold leading-snug text-black transition-colors duration-300 group-hover:text-[#0B7A5A]">
                    {n.title}
                  </h3>
                  <p className="mt-2.5 text-xs text-black/70 leading-relaxed font-normal">
                    {n.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-black/10">
                  <a
                    href={`${WHATSAPP}?text=${encodeURIComponent(`Olá! Gostaria de orientações sobre: ${n.title}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-wider text-black transition group-hover:text-[#0B7A5A]"
                  >
                    <span>Ler artigo técnico</span>
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
