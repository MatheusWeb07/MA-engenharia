import React from "react";
import MaskText, { FadeUp } from "./MaskText";
import SpotlightCard from "./react-bits/SpotlightCard";
import ShinyText from "./react-bits/ShinyText";
import DecryptedText from "./react-bits/DecryptedText";
import { CREA, FUNDADORES, QUEM_SOMOS } from "../data";

export default function QuemSomosANL() {
  const q = QUEM_SOMOS;

  return (
    <section id="quem-somos" className="grid-lines relative border-t border-ink/10 bg-white">
      <div className="mx-auto max-w-[1500px] px-5 py-20 sm:px-8 lg:px-16 lg:py-32">
        
        {/* CABEÇALHO DA SEÇÃO (NÍVEL ANL) */}
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <FadeUp>
              <p className="mb-6 font-mono text-[13px] font-bold uppercase tracking-wider text-forest">
                [ {q.titulo} ]
              </p>
            </FadeUp>
            <MaskText
              text={q.titulo.toUpperCase()}
              className="font-display text-[clamp(2.6rem,7vw,6.2rem)] font-bold uppercase leading-[0.95] tracking-[-0.05em] text-ink"
            />
          </div>

          <div className="flex flex-col justify-end lg:col-span-5">
            <FadeUp delay={0.15}>
              <p className="text-lg font-bold leading-snug text-forest sm:text-xl">
                {q.subtitulo}
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-ink/75 sm:text-[16px]">
                {q.paragrafos[0]}
              </p>
            </FadeUp>
          </div>
        </div>

        {/* BLOCO CENTRAL: TABELA INTERATIVA COM INVERSÃO DE COR + SPOTLIGHT CARD COM FUNDADORES SEM FUNDO */}
        <div className="mt-16 grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
          
          {/* TABELA INTERATIVA (1:1 COM O DESIGN DE ANL) */}
          <div className="lg:col-span-7">
            <FadeUp delay={0.1}>
              <div className="overflow-hidden rounded-[22px] border border-ink/10 bg-white shadow-[0_20px_50px_-25px_rgba(11,122,90,0.2)]">
                <div className="grid grid-cols-1 bg-ink px-6 py-4 text-[12.5px] font-extrabold uppercase tracking-wider text-white sm:grid-cols-[1fr_1.6fr] sm:px-9">
                  <span>Diferencial Técnico</span>
                  <span className="hidden sm:block">Especificação</span>
                </div>

                {q.tabela.map(([k, v]) => (
                  <div
                    key={k}
                    data-hover
                    className="group relative grid grid-cols-1 gap-1 overflow-hidden border-t border-ink/10 px-6 py-6 transition-colors sm:grid-cols-[1fr_1.6fr] sm:gap-6 sm:px-9 sm:py-6"
                  >
                    {/* Efeito de preenchimento de fundo em verde no hover */}
                    <span className="absolute inset-0 origin-bottom scale-y-0 bg-forest transition-transform duration-500 ease-out group-hover:scale-y-100" />
                    <span className="relative text-[16px] font-extrabold tracking-[-0.01em] text-ink transition-colors duration-300 group-hover:text-white sm:text-[17px]">
                      {k}
                    </span>
                    <span className="relative text-[14.5px] font-medium leading-relaxed text-ink/70 transition-colors duration-300 group-hover:text-white/90">
                      {v}
                    </span>
                  </div>
                ))}
              </div>
            </FadeUp>

            {/* Parágrafos Oficiais Adicionais */}
            <div className="mt-8 space-y-4 rounded-2xl border border-forest/15 bg-[#F4FAF7] p-6 text-[14px] leading-relaxed text-ink/80">
              <p>{q.paragrafos[1]}</p>
              <p>{q.paragrafos[2]}</p>
            </div>
          </div>

          {/* COLUNA DIREITA: SPOTLIGHT CARD COM A FOTO DOS FUNDADORES RECORTADA SEM FUNDO */}
          <div className="lg:col-span-5">
            <FadeUp delay={0.2}>
              <SpotlightCard
                spotlightColor="rgba(11, 122, 90, 0.25)"
                className="border-forest/20 bg-gradient-to-b from-[#F2F9F6] via-white to-white p-7"
              >
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="rounded-full bg-forest px-3.5 py-1 font-mono text-[10px] font-extrabold uppercase tracking-wider text-white">
                    Fundadores • UFOP
                  </span>
                  <span className="font-mono text-[10.5px] font-bold text-forest">
                    <DecryptedText text={CREA} />
                  </span>
                </div>

                {/* Foto dos fundadores recortada sem fundo */}
                <div className="relative flex justify-center py-4">
                  <img
                    src="/assets/fundadores-cutout.png"
                    alt={FUNDADORES}
                    width="480"
                    height="560"
                    loading="lazy"
                    className="h-[360px] sm:h-[420px] w-auto object-contain object-bottom drop-shadow-[0_20px_35px_rgba(11,122,90,0.25)]"
                  />
                </div>

                <div className="mt-4 border-t border-ink/8 pt-4">
                  <h3 className="font-display text-[20px] font-bold text-ink">
                    {FUNDADORES}
                  </h3>
                  <p className="text-[13px] font-medium text-forest">
                    Engenheiros Eletricistas com ênfase em Controle e Automação
                  </p>
                  <p className="mt-2 text-[12.5px] leading-relaxed text-ink/65">
                    Formados pela Universidade Federal de Ouro Preto (UFOP).
                  </p>
                </div>
              </SpotlightCard>
            </FadeUp>
          </div>

        </div>

        {/* CITAÇÃO FINAL (NÍVEL ANL) */}
        <FadeUp delay={0.25}>
          <p className="mx-auto mt-20 max-w-5xl text-center font-display text-[clamp(1.5rem,3.2vw,2.7rem)] font-bold leading-[1.12] tracking-[-0.035em] text-forest">
            “Transformamos desafios em soluções e ideias em resultados — porque, para nós, engenharia é sinônimo de evolução, precisão e confiança.”
          </p>
        </FadeUp>

      </div>
    </section>
  );
}
