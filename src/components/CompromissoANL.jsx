import React from "react";
import MaskText, { FadeUp } from "./MaskText";
import SpotlightCard from "./react-bits/SpotlightCard";
import ShinyText from "./react-bits/ShinyText";
import { CheckCircle2, Compass, ShieldCheck, Sparkles, Target } from "lucide-react";
import { COMPROMISSO } from "../data";

export default function CompromissoANL() {
  const c = COMPROMISSO;

  return (
    <section id="compromisso" className="grid-lines relative border-t border-ink/10 bg-[#F7FAF9] py-20 sm:py-32">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-16">
        
        <div className="mx-auto max-w-3xl text-center">
          <FadeUp>
            <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.18em] text-forest">
              [ {c.titulo} ]
            </p>
          </FadeUp>
          <MaskText
            text={"MISSÃO, VISÃO E VALORES"}
            className="font-display text-[clamp(2.2rem,5.4vw,4.8rem)] font-bold uppercase leading-[0.98] tracking-[-0.045em] text-ink"
          />
          <FadeUp delay={0.15}>
            <p className="mx-auto mt-4 max-w-xl text-[15px] font-medium text-ink/75 sm:text-[16px]">
              {c.subtitulo}
            </p>
          </FadeUp>
        </div>

        {/* 2 CARDS GRANDES: MISSÃO E VISÃO */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <FadeUp delay={0.1}>
            <SpotlightCard
              spotlightColor="rgba(11, 122, 90, 0.25)"
              className="h-full border-forest/15 bg-white p-8 sm:p-10"
            >
              <div className="flex items-center justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-forest text-white shadow-md">
                  <Target className="h-6 w-6" />
                </span>
                <span className="rounded-full bg-forest/10 px-3 py-1 font-mono text-[10.5px] font-extrabold uppercase tracking-wider text-forest">
                  Nossa Missão
                </span>
              </div>
              <h3 className="mt-6 font-display text-[22px] font-bold text-ink sm:text-[24px]">
                Engenharia Inteligente, Segura e Eficiente
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink/75">
                {c.missao}
              </p>
            </SpotlightCard>
          </FadeUp>

          <FadeUp delay={0.18}>
            <SpotlightCard
              spotlightColor="rgba(11, 122, 90, 0.25)"
              className="h-full border-forest/15 bg-white p-8 sm:p-10"
            >
              <div className="flex items-center justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-ink text-white shadow-md">
                  <Compass className="h-6 w-6" />
                </span>
                <span className="rounded-full bg-ink/10 px-3 py-1 font-mono text-[10.5px] font-extrabold uppercase tracking-wider text-ink">
                  Nossa Visão
                </span>
              </div>
              <h3 className="mt-6 font-display text-[22px] font-bold text-ink sm:text-[24px]">
                Referência em Engenharia e Automação
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink/75">
                {c.visao}
              </p>
            </SpotlightCard>
          </FadeUp>
        </div>

        {/* 4 CARDS DOS VALORES FUNDAMENTAIS (SEM NÚMEROS) */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {c.valores.map(([valTitulo, valTexto], idx) => (
            <FadeUp key={valTitulo} delay={0.1 + idx * 0.08}>
              <SpotlightCard
                spotlightColor="rgba(11, 122, 90, 0.2)"
                className="h-full border-forest/15 bg-white p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] font-extrabold uppercase tracking-wider text-forest">
                    Princípio
                  </span>
                  <CheckCircle2 className="h-4 w-4 text-forest" />
                </div>
                <h4 className="mt-3 font-display text-[17px] font-bold text-ink">
                  {valTitulo}
                </h4>
                <p className="mt-2 text-[13px] leading-relaxed text-ink/70">
                  {valTexto}
                </p>
              </SpotlightCard>
            </FadeUp>
          ))}
        </div>

      </div>
    </section>
  );
}
