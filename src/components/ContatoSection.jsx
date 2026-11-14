import React, { useState } from "react";
import { ArrowUp, ArrowUpRight, Briefcase, Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Particles from "./Particles";
import MaskText, { FadeUp } from "./MaskText";
import {
  CREA,
  EMAIL,
  EMAIL_ALT,
  EMPRESA,
  ENDERECO,
  FORMACAO,
  FUNDADORES,
  INSTAGRAM,
  INSTAGRAM_URL,
  NAV_LINKS,
  RESPONSAVEL,
  SLOGAN,
  TELEFONE,
  WHATSAPP,
} from "../data";

export default function ContatoSection() {
  const [form, setForm] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text =
      `*Contato via Site — MA Soluções e Engenharia*\n\n` +
      `*Nome:* ${form.nome} ${form.sobrenome}\n` +
      `*E-mail:* ${form.email}\n` +
      `*Telefone:* ${form.telefone || "Não informado"}\n` +
      `*Mensagem:* ${form.mensagem}`;
    window.open(`${WHATSAPP}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <>
      {/* 1. SEÇÃO DE CONTATO E MATRIZ SOBRE FUNDO BRANCO (1:1 com informaçoe.jpeg) */}
      <section id="contato" className="grid-lines relative border-t border-ink/10 bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-14">
          <div className="mx-auto max-w-3xl text-center">
            <FadeUp>
              <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.18em] text-forest">
                [ Atendimento Técnico &amp; Orçamentos ]
              </p>
            </FadeUp>
            <MaskText
              text="CONTATO"
              className="font-display text-[clamp(2.6rem,6.5vw,5.6rem)] font-bold leading-[0.95] tracking-[-0.045em] text-ink"
            />
          </div>

          {/* Mapa Interativo de João Monlevade (Rua Nova Lima, 96 — Carneirinhos) */}
          <FadeUp delay={0.1} className="mt-14">
            <div className="h-[340px] w-full overflow-hidden rounded-[28px] border border-ink/10 shadow-[0_24px_60px_-25px_rgba(30,30,30,0.16)] sm:h-[380px]">
              <iframe
                src="https://maps.google.com/maps?q=Rua%20Nova%20Lima,%2096,%20Carneirinhos,%20Jo%C3%A3o%20Monlevade%20MG&t=&z=15&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Matriz MA Soluções e Engenharia — Rua Nova Lima, 96, João Monlevade"
                className="h-full w-full border-0"
              />
            </div>
          </FadeUp>

          {/* Grid: Formulário à Esquerda / Matriz & Carreiras à Direita */}
          <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Coluna Esquerda: Formulário Limpo */}
            <FadeUp delay={0.1} className="lg:col-span-7">
              <div className="rounded-[28px] border border-ink/10 bg-[#F9FBFA] p-7 sm:p-10">
                <h3 className="font-display text-2xl font-bold tracking-[-0.02em] text-ink">Informações</h3>
                <p className="mt-2 text-[15px] text-ink/70">
                  Para qualquer informação, dúvida ou comentário, por favor ligue:{" "}
                  <a href="tel:31988469218" className="font-bold text-forest hover:underline">
                    {TELEFONE}
                  </a>
                  . Ou preencha o formulário abaixo:
                </p>

                <form onSubmit={handleSubmit} className="mt-7 space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-ink/75">
                        Nome *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.nome}
                        onChange={(e) => setForm({ ...form, nome: e.target.value })}
                        placeholder="Seu nome"
                        className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3.5 text-sm text-ink outline-none transition focus:border-forest focus:ring-2 focus:ring-forest/15"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-ink/75">
                        Sobrenome
                      </label>
                      <input
                        type="text"
                        value={form.sobrenome}
                        onChange={(e) => setForm({ ...form, sobrenome: e.target.value })}
                        placeholder="Seu sobrenome"
                        className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3.5 text-sm text-ink outline-none transition focus:border-forest focus:ring-2 focus:ring-forest/15"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-ink/75">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="seuemail@exemplo.com"
                        className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3.5 text-sm text-ink outline-none transition focus:border-forest focus:ring-2 focus:ring-forest/15"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-ink/75">
                        Telefone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={form.telefone}
                        onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                        placeholder="(31) 98846-9218"
                        className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3.5 text-sm text-ink outline-none transition focus:border-forest focus:ring-2 focus:ring-forest/15"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-ink/75">
                      Deixe-nos uma mensagem... *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={form.mensagem}
                      onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                      placeholder="Descreva seu projeto elétrico, laudo técnico ou necessidade de consultoria..."
                      className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3.5 text-sm text-ink outline-none transition focus:border-forest focus:ring-2 focus:ring-forest/15"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group relative inline-flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-full bg-ink px-8 py-4 text-[13px] font-bold uppercase tracking-wider text-white transition sm:w-auto"
                  >
                    <span className="absolute inset-0 -translate-x-full rounded-full bg-forest transition-transform duration-500 ease-out group-hover:translate-x-0" />
                    <span className="relative">Enviar Mensagem</span>
                    <ArrowUpRight className="relative h-4 w-4" />
                  </button>
                </form>
              </div>
            </FadeUp>

            {/* Coluna Direita: Matriz, Carreiras e Orçamento */}
            <FadeUp delay={0.2} className="flex flex-col justify-between space-y-8 lg:col-span-5">
              <div className="space-y-7">
                {/* Matriz */}
                <div className="rounded-[24px] border border-ink/10 bg-white p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-forest text-white">
                      <MapPin className="h-5 w-5" />
                    </span>
                    <div>
                      <h4 className="font-display text-lg font-bold text-ink">Matriz</h4>
                      <p className="mt-1 text-[14.5px] leading-relaxed text-ink/75">{ENDERECO}</p>
                      <p className="mt-2 text-[14px] font-medium text-forest">{EMAIL}</p>
                      <p className="text-[13.5px] text-ink/60">{EMAIL_ALT}</p>
                      <p className="mt-1 text-[14px] font-bold text-ink">Tel: {TELEFONE}</p>
                    </div>
                  </div>
                </div>

                {/* Carreiras */}
                <div className="rounded-[24px] border border-ink/10 bg-white p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-ink text-white">
                      <Briefcase className="h-5 w-5" />
                    </span>
                    <div>
                      <h4 className="font-display text-lg font-bold text-ink">Carreiras</h4>
                      <p className="mt-1 text-[14px] leading-relaxed text-ink/70">
                        Para trabalhar conosco, por favor envie seu currículo e informação para:
                      </p>
                      <a
                        href={`mailto:${EMAIL}`}
                        className="mt-1.5 inline-block text-[14px] font-bold text-forest hover:underline"
                      >
                        {EMAIL}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Orçamento em Destaque */}
                <div className="rounded-[24px] bg-forest p-7 text-white shadow-[0_24px_50px_-18px_rgba(11,122,90,0.5)]">
                  <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-white/80">
                    [ Atendimento Direto ]
                  </span>
                  <h4 className="mt-1 font-display text-2xl font-extrabold tracking-[-0.02em]">
                    ORÇAMENTO: {TELEFONE}
                  </h4>
                  <p className="mt-1 text-xs text-white/85">
                    {RESPONSAVEL} — {CREA}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <a
                      href={`${WHATSAPP}?text=${encodeURIComponent("Olá! Gostaria de solicitar um orçamento com a MA Soluções e Engenharia.")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider text-ink transition hover:bg-ink hover:text-white"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Chamar no WhatsApp
                    </a>
                    <a
                      href={INSTAGRAM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/35 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-white/15"
                    >
                      <Instagram className="h-4 w-4" />
                      {INSTAGRAM}
                    </a>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* 2. FECHAMENTO COM AURORA VERDE #0B7A5A + PARTÍCULAS (Nível ANL Engenharia) */}
      <footer className="relative overflow-hidden bg-abyss text-white">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[620px]">
          <div
            className="beam absolute left-[50%] top-[-120px] h-[620px] w-[420px]"
            style={{
              background:
                "radial-gradient(ellipse 38% 50% at 50% 40%, rgba(11,122,90,0.6), rgba(6,78,57,0.25) 55%, transparent 100%)",
            }}
          />
          <div
            className="beam absolute left-[24%] top-[30px] h-[520px] w-[220px] -rotate-[26deg]"
            style={{
              animationDelay: "-3s",
              background:
                "radial-gradient(ellipse 30% 50% at 50% 40%, rgba(16,158,116,0.38), rgba(11,122,90,0.18) 60%, transparent 100%)",
            }}
          />
          <div
            className="beam absolute left-[76%] top-[30px] h-[520px] w-[220px] rotate-[26deg]"
            style={{
              animationDelay: "-6s",
              background:
                "radial-gradient(ellipse 30% 50% at 50% 40%, rgba(16,158,116,0.32), rgba(11,122,90,0.18) 60%, transparent 100%)",
            }}
          />
        </div>
        <Particles count={75} />

        <div className="relative mx-auto max-w-[1380px] px-5 pt-24 pb-12 sm:px-8 lg:px-14">
          <div className="text-center">
            <FadeUp>
              <div className="floaty mx-auto grid h-20 w-20 place-items-center rounded-3xl bg-white p-3 shadow-[0_0_50px_rgba(11,122,90,0.65)]">
                <img src="/assets/logo-emblem.png" alt="MA Engenharia" className="h-full w-full object-contain" />
              </div>
            </FadeUp>
            <MaskText
              text={"PROJETOS INTELIGENTES,\nRESULTADOS EFICIENTES"}
              className="mt-8 font-display text-[clamp(2.2rem,6vw,5.4rem)] font-bold leading-[0.95] tracking-[-0.045em] text-white"
            />
            <FadeUp delay={0.15}>
              <p className="mx-auto mt-5 max-w-xl text-base font-medium text-white/75 sm:text-lg">
                {FUNDADORES} — {FORMACAO}
              </p>
            </FadeUp>

            <FadeUp delay={0.25} className="mt-9 flex flex-wrap justify-center gap-4">
              <a
                href={`${WHATSAPP}?text=${encodeURIComponent("Olá! Gostaria de solicitar um orçamento com a MA Soluções e Engenharia.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-forest px-8 py-4 text-xs font-extrabold uppercase tracking-wider text-white shadow-lg transition"
              >
                <span className="absolute inset-0 -translate-x-full rounded-full bg-white transition-transform duration-500 ease-out group-hover:translate-x-0" />
                <span className="relative transition-colors group-hover:text-ink">
                  Falar no WhatsApp {TELEFONE}
                </span>
                <ArrowUpRight className="relative h-4 w-4 transition-colors group-hover:text-ink" />
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-4 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-white hover:text-ink"
              >
                <Mail className="h-4 w-4" />
                {EMAIL}
              </a>
            </FadeUp>
          </div>

          <div className="mt-20 border-t border-white/10 pt-8">
            <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
              <a href="#inicio" className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-white p-1.5">
                  <img src="/assets/logo-emblem.png" alt="MA" className="h-full w-full object-contain" />
                </span>
                <span className="font-display text-lg font-bold uppercase tracking-[-0.03em]">
                  MA Soluções e Engenharia
                </span>
              </a>

              <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[13.5px] text-white/70">
                {NAV_LINKS.map(([l, h]) => (
                  <a key={h} href={h} className="transition hover:text-brand">
                    {l}
                  </a>
                ))}
              </nav>

              <a
                href="#inicio"
                className="group flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-[13px] transition hover:bg-white hover:text-ink"
              >
                Voltar ao topo <ArrowUp className="h-4 w-4 transition group-hover:-translate-y-0.5" />
              </a>
            </div>

            <p className="mt-8 text-center text-[12.5px] text-white/45">
              © {new Date().getFullYear()} {EMPRESA} — {RESPONSAVEL} — {CREA} — {SLOGAN}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
