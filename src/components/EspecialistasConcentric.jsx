import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import MaskText from "./MaskText";
import { ESPECIALISTAS_CARDS } from "../data";

/**
 * Cenas 00:02 -> 00:05 do vídeo de referência em um único fluxo contínuo e fluido:
 * - Topo (00:02 - 00:03): Palco verde #0B7A5A que expande no scroll + fileira de cards retrato
 *   em vidro fosco que deslizam horizontalmente sincronizados à rolagem.
 * - Base (00:04 - 00:05): Transição contínua do gradiente para os 4 Anéis Concêntricos em Cápsula
 *   que inflam no scroll enquanto o texto "O que é a MA Engenharia?" é digitado ao vivo!
 */
export default function EspecialistasConcentric() {
  const containerRef = useRef(null);
  const pillRef = useRef(null);
  const pillInView = useInView(pillRef, { once: false, amount: 0.45 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // 00:02 -> Expansão suave do bloco principal ao entrar na tela
  const cardScale = useTransform(scrollYProgress, [0.02, 0.22], [0.92, 1]);
  // 00:03 -> Deslizamento horizontal suave dos cards de retrato durante o scroll
  const trackX = useTransform(scrollYProgress, [0.15, 0.65], ["4%", "-8%"]);

  // 00:04 - 00:05 -> Escala progressiva dos 4 anéis concêntricos em cápsula
  const ring1Scale = useTransform(scrollYProgress, [0.42, 0.78], [0.88, 1.02]);
  const ring2Scale = useTransform(scrollYProgress, [0.45, 0.78], [0.9, 1.01]);
  const ring3Scale = useTransform(scrollYProgress, [0.48, 0.78], [0.92, 1]);

  // Digitação viva igual a 00:04 ("What is") -> 00:05 ("What is Passion.io?")
  const fullQuestion = "O que é a MA Engenharia?";
  const [typed, setTyped] = useState("O que é a");

  useEffect(() => {
    if (!pillInView) {
      setTyped("O que é a");
      return;
    }
    let idx = "O que é a".length;
    const timer = setInterval(() => {
      idx += 1;
      setTyped(fullQuestion.slice(0, idx));
      if (idx >= fullQuestion.length) clearInterval(timer);
    }, 45);
    return () => clearInterval(timer);
  }, [pillInView]);

  return (
    <section ref={containerRef} id="especialistas" className="bg-white px-3 pt-10 sm:px-5 sm:pt-14">
      <motion.div
        style={{ scale: cardScale }}
        className="mx-auto max-w-[1440px] overflow-hidden rounded-[32px] sm:rounded-[40px]"
      >
        {/* FLUXO CONTÍNUO DE GRADIENTE: Verde #0B7A5A no topo -> Verde suave -> Branco na base */}
        <div
          className="relative pt-20 pb-24 sm:pt-28 sm:pb-32"
          style={{
            background:
              "linear-gradient(180deg, #064E39 0%, #0B7A5A 34%, #149972 62%, #CBEBE0 86%, #FFFFFF 100%)",
          }}
        >
          {/* PARTE 1 (00:02 - 00:03): TÍTULO + CARDS DE RETRATO EM VIDRO FOSCO */}
          <div className="mx-auto max-w-4xl px-5 text-center text-white">
            <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.18em] text-white/80">
              [ UFOP • CREA-MG Nº 142366847-2 ]
            </p>
            <MaskText
              text={"Engenharia liderada por\nespecialistas da UFOP"}
              className="font-display text-[clamp(2.2rem,5.2vw,4.3rem)] font-bold leading-[1.04] tracking-[-0.04em] text-white"
            />
          </div>

          {/* Fileira horizontal de Cards de Vidro Fosco que desliza no scroll (00:03) */}
          <div className="mt-14 overflow-hidden py-4">
            <motion.div
              style={{ x: trackX }}
              className="mx-auto flex w-max gap-5 px-6 sm:gap-7 sm:px-14"
            >
              {ESPECIALISTAS_CARDS.map((c, i) => (
                <motion.article
                  key={c.role}
                  data-hover
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                  transition={{ duration: 0.75, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative flex h-[370px] w-[265px] shrink-0 flex-col justify-between overflow-hidden rounded-[26px] border border-white/35 bg-white/15 p-6 pb-0 text-center text-white shadow-[0_24px_60px_-15px_rgba(6,78,57,0.35)] backdrop-blur-xl transition-transform duration-500 hover:-translate-y-2 hover:bg-white/20 sm:h-[395px] sm:w-[285px]"
                >
                  <div>
                    <span className="inline-block rounded-full bg-ink/35 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-white/95">
                      {c.tag}
                    </span>
                    <h3 className="mt-3 font-display text-[22px] font-bold leading-tight tracking-[-0.02em]">
                      {c.role}
                    </h3>
                    <p className="mt-1 text-[13px] font-medium text-white/85">{c.name}</p>
                  </div>

                  <div className="relative mt-5 h-[225px] w-full overflow-hidden rounded-t-[20px] border border-b-0 border-white/30 bg-ink">
                    <img
                      src={c.img}
                      alt={c.role}
                      style={{ objectPosition: c.pos }}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>

          {/* PARTE 2 (00:04 - 00:05): OS 4 ANÉIS CONCÊNTRICOS EM CÁPSULA + DIGITAÇÃO AO VIVO */}
          <div id="o-que-e" ref={pillRef} className="mx-auto mt-24 max-w-[1180px] px-4 sm:mt-32 sm:px-8">
            {/* Anel Concêntrico 1 (Externo) */}
            <motion.div
              style={{ scale: ring1Scale }}
              className="ripple-slow rounded-full border border-white/75 bg-white/35 p-4 shadow-[0_25px_70px_-20px_rgba(11,122,90,0.18)] backdrop-blur-md sm:p-8"
            >
              {/* Anel Concêntrico 2 (Médio) */}
              <motion.div
                style={{ scale: ring2Scale }}
                className="ripple-mid rounded-full border border-white/70 bg-forest/15 p-4 sm:p-8"
              >
                {/* Anel Concêntrico 3 (Interno) */}
                <motion.div
                  style={{ scale: ring3Scale }}
                  className="ripple-fast rounded-full border border-white/60 bg-forest/35 p-3.5 sm:p-7"
                >
                  {/* Cápsula Central Principal (00:04 - 00:05) */}
                  <div
                    className="relative flex min-h-[150px] flex-col items-center justify-center overflow-hidden rounded-full px-6 py-9 text-center text-white shadow-[inset_0_2px_16px_rgba(255,255,255,0.38),0_24px_60px_rgba(6,78,57,0.45)] sm:min-h-[195px] sm:px-14"
                    style={{
                      background: "linear-gradient(95deg, #109E74 0%, #0B7A5A 48%, #1E1E1E 100%)",
                    }}
                  >
                    <h2 className="font-display text-[clamp(1.65rem,4.1vw,3.35rem)] font-bold leading-none tracking-[-0.035em] text-white">
                      {typed}
                      <span className="ml-1 inline-block h-[0.85em] w-[3px] animate-pulse bg-white align-middle" />
                    </h2>
                    <p className="mt-3.5 max-w-xl text-[13.5px] font-medium text-white/90 sm:text-[15.5px]">
                      Engenharia mais inteligente, segura e eficiente — unindo conhecimento técnico UFOP, inovação e
                      compromisso com resultados reais.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
