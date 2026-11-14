import React, { useState } from "react";
import { ArrowUp, ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Particles from "./Particles";
import MaskText, { FadeUp } from "./MaskText";
import Magnet from "./react-bits/Magnet";
import {
  CITACAO,
  CREA,
  EMAIL,
  EMAIL_ALT,
  EMPRESA,
  ENDERECO,
  FUNDADORES,
  INSTAGRAM,
  INSTAGRAM_URL,
  NAV_LINKS,
  TELEFONE,
  WHATSAPP,
} from "../data";

export default function ContatoANL() {
  const [nome, setNome] = useState("");
  const [servico, setServico] = useState("Elaboração de Projeto Elétrico");

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Olá! Meu nome é ${nome || "Cliente"}. Gostaria de solicitar um orçamento para *${servico}* com a MA Soluções e Engenharia.`;
    window.open(`${WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contato" className="relative overflow-hidden bg-[#05140F] text-white">
      {/* Feixes de Luz Estilo Aurora (1:1 com o design de ANL) */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[760px]">
        <div
          className="beam absolute left-[50%] top-[-120px] h-[760px] w-[420px]"
          style={{
            background:
              "radial-gradient(ellipse 35% 50% at 50% 40%, rgba(11,122,90,0.6), rgba(6,78,57,0.3) 55%, transparent 100%)",
          }}
        />
        <div
          className="beam absolute left-[20%] top-[40px] h-[620px] w-[220px] -rotate-[28deg]"
          style={{
            animationDelay: "-3s",
            background:
              "radial-gradient(ellipse 30% 50% at 50% 40%, rgba(45,212,191,0.35), rgba(11,122,90,0.2) 60%, transparent 100%)",
          }}
        />
        <div
          className="beam absolute left-[80%] top-[40px] h-[620px] w-[220px] rotate-[28deg]"
          style={{
            animationDelay: "-6s",
            background:
              "radial-gradient(ellipse 30% 50% at 50% 40%, rgba(45,212,191,0.28), rgba(11,122,90,0.18) 60%, transparent 100%)",
          }}
        />
      </div>

      <Particles count={75} />

      <div className="relative mx-auto max-w-[1300px] px-5 pt-28 sm:px-8 lg:px-16 lg:pt-36">
        
        <div className="text-center">
          <FadeUp>
            <div className="floaty mx-auto grid h-24 w-24 place-items-center rounded-3xl bg-white p-3 shadow-[0_0_50px_rgba(11,122,90,0.6)]">
              <img
                src="/assets/logo-emblem.png"
                alt="MA Engenharia"
                className="h-full w-full object-contain"
              />
            </div>
          </FadeUp>

          <MaskText
            text={"FALE CONOSCO"}
            className="mt-8 font-display text-[clamp(2.8rem,9vw,8.5rem)] font-bold uppercase leading-[0.92] tracking-[-0.055em] text-white"
          />

          <FadeUp delay={0.2}>
            <p className="mx-auto mt-6 max-w-xl text-lg font-medium text-mint sm:text-2xl">
              Atendimento direto com os engenheiros responsáveis.
            </p>
          </FadeUp>
        </div>

        {/* CARTÃO CENTRAL ARQUITETÔNICO COM CONTATOS E FORMULÁRIO (NÍVEL ANL) */}
        <FadeUp delay={0.1} y={40} className="mx-auto mt-14 max-w-3xl">
          <div className="relative overflow-hidden rounded-[26px] border border-forest/40 bg-gradient-to-b from-[#0B251C] to-[#06150F] p-6 text-center shadow-[0_0_90px_-30px_rgba(11,122,90,0.6)] sm:rounded-[30px] sm:p-10">
            <h3 className="font-display text-xl font-bold sm:text-2xl text-white">
              {EMPRESA}
            </h3>
            <p className="mt-2 text-[13.5px] text-white/70 sm:text-[14.5px]">
              {FUNDADORES} — {CREA} — UFOP
            </p>

            {/* Formulário Rápido para WhatsApp */}
            <form onSubmit={handleSubmit} className="mt-8 space-y-4 text-left">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="contato-nome" className="block font-mono text-[10px] font-bold uppercase tracking-wider text-white/70">
                    Seu Nome ou Empresa
                  </label>
                  <input
                    id="contato-nome"
                    type="text"
                    required
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Ex.: João Silva ou Construtora"
                    className="mt-1.5 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-[14px] text-white placeholder-white/40 focus:border-mint focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="contato-servico" className="block font-mono text-[10px] font-bold uppercase tracking-wider text-white/70">
                    Serviço de Interesse
                  </label>
                  <select
                    id="contato-servico"
                    value={servico}
                    onChange={(e) => setServico(e.target.value)}
                    className="mt-1.5 w-full rounded-xl border border-white/20 bg-[#0A2017] px-4 py-2.5 text-[14px] text-white focus:border-mint focus:outline-none"
                  >
                    <option value="Elaboração de Projeto Elétrico">Elaboração de Projeto Elétrico</option>
                    <option value="Elaboração de Laudo Técnico (NR-10 / SPDA)">Elaboração de Laudo Técnico</option>
                    <option value="Consultoria Técnica em Engenharia">Consultoria Técnica em Engenharia</option>
                    <option value="Engenharia de Controle e Automação">Controle e Automação (UFOP)</option>
                  </select>
                </div>
              </div>

              <div className="pt-2 text-center">
                <button
                  type="submit"
                  className="group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-forest py-3.5 text-[14px] font-bold uppercase tracking-wider text-white shadow-lg transition hover:bg-white hover:text-ink sm:w-auto sm:px-10"
                >
                  <span className="relative">Enviar Solicitação via WhatsApp</span>
                  <ArrowUpRight className="relative h-4 w-4" />
                </button>
              </div>
            </form>

            {/* Botões Rápidos de Acesso */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2 sm:gap-4 border-t border-white/10 pt-6">
              <a
                href={`mailto:${EMAIL}`}
                className="group relative flex items-center justify-center gap-2.5 overflow-hidden rounded-full border border-white/20 bg-white/5 px-4 py-3 text-[13px] font-medium text-white transition hover:bg-white hover:text-ink"
              >
                <Mail className="h-4 w-4 text-mint transition group-hover:text-forest" />
                <span className="truncate">{EMAIL}</span>
              </a>

              <a
                href={`${WHATSAPP}?text=${encodeURIComponent("Olá! Gostaria de falar com os engenheiros da MA Soluções e Engenharia.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center gap-2.5 overflow-hidden rounded-full bg-forest px-4 py-3 text-[13px] font-bold text-white transition hover:bg-white hover:text-ink"
              >
                <MessageCircle className="h-4 w-4 text-white transition group-hover:text-forest" />
                <span>{TELEFONE}</span>
                <ArrowUpRight className="h-4 w-4 transition group-hover:text-forest" />
              </a>
            </div>

            {/* Endereço */}
            <div className="mt-6 flex items-center justify-center gap-2 font-mono text-[11px] text-white/60">
              <MapPin className="h-3.5 w-3.5 text-mint" />
              <span>{ENDERECO}</span>
            </div>
          </div>
        </FadeUp>

        {/* MAPA EMBUTIDO */}
        <FadeUp delay={0.15} className="mx-auto mt-8 max-w-3xl overflow-hidden rounded-2xl border border-white/10">
          <iframe
            title="Localização MA Soluções e Engenharia"
            src="https://www.google.com/maps?q=Rua+Nova+Lima,+96,+Carneirinhos,+Joao+Monlevade,+MG,+35930-244&output=embed"
            className="h-[200px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </FadeUp>

        {/* CITAÇÃO FINAL */}
        <FadeUp delay={0.2} className="mx-auto mt-12 max-w-3xl">
          <p className="border-l-4 border-mint pl-6 text-[15px] italic leading-relaxed text-white/80">
            “{CITACAO}”
          </p>
        </FadeUp>

        {/* WATERMARK GIGANTE */}
        <div aria-hidden="true" className="pointer-events-none select-none overflow-hidden px-2 pt-16 text-center">
          <div
            className="font-display text-[clamp(3rem,11.5vw,10.5rem)] font-extrabold uppercase leading-[0.86] tracking-[-0.04em]"
            style={{
              background:
                "linear-gradient(180deg, rgba(11,122,90,0.3) 0%, rgba(11,122,90,0.06) 75%, rgba(5,20,15,0) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            MA ENGENHARIA
          </div>
        </div>

        {/* RODAPÉ MINIMALISTA */}
        <footer className="mt-12 border-t border-white/10 py-10">
          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
            <a href="#inicio" className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-white p-1">
                <img
                  src="/assets/logo-emblem.png"
                  alt="MA"
                  className="h-full w-full object-contain"
                />
              </span>
              <span className="font-display text-base font-bold uppercase tracking-tight text-white">
                MA Soluções e Engenharia
              </span>
            </a>

            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[13px] font-medium text-white/70">
              {[
                ["Início", "#inicio"],
                ["Quem Somos", "#quem-somos"],
                ["Serviços", "#servicos"],
                ["Compromisso", "#compromisso"],
                ["Contato", "#contato"],
              ].map(([l, h]) => (
                <a key={h} href={h} className="transition hover:text-mint">
                  {l}
                </a>
              ))}
            </nav>

            <a
              href="#inicio"
              className="group flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-[12.5px] font-semibold text-white transition hover:bg-white hover:text-ink"
            >
              Voltar ao topo <ArrowUp className="h-3.5 w-3.5 transition group-hover:-translate-y-0.5" />
            </a>
          </div>

          <p className="mt-8 text-center font-mono text-[11.5px] text-white/45">
            © {new Date().getFullYear()} {EMPRESA} • {FUNDADORES} • {CREA} • Todos os direitos reservados.
          </p>
        </footer>

      </div>
    </section>
  );
}
