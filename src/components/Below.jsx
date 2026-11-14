import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Instagram, Mail, MapPin, Phone } from "lucide-react";
import {
  COMPROMISSO,
  CREA,
  EMAIL,
  EMAIL_ALT,
  ENDERECO,
  INSTAGRAM,
  INSTAGRAM_URL,
  QUEM_SOMOS,
  TELEFONE,
  WHATSAPP,
  ZIGZAG_SERVICOS,
} from "../data";

const wa = (t) => `${WHATSAPP}?text=${encodeURIComponent(t)}`;

const SERVICE_IMGS = [
  "/assets/eng-projeto-arquitetura.jpg",
  "/assets/eng-painel-automacao.jpg",
  "/assets/eng-subestacao-industrial.jpg",
];
const SERVICE_TABS = ["Projetos elétricos", "Laudos técnicos", "Consultoria técnica"];

/* Serviços com abas deslizantes (textos oficiais completos) */
export function Services() {
  const [i, setI] = useState(0);
  const s = ZIGZAG_SERVICOS[i];
  return (
    <section id="servicos" className="bg-white px-3 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-[1180px]">
        <div className="max-w-2xl">
          <h2 className="font-display text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.04] tracking-[-0.035em] text-ink">
            O que fazemos
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-ink/65">
            Elaboração de projetos elétricos, laudos técnicos e consultoria em engenharia, sempre sob medida.
          </p>
        </div>

        <div role="tablist" aria-label="Serviços" className="no-scrollbar isolate mt-8 inline-flex max-w-full gap-1 overflow-x-auto rounded-full border border-ink/10 bg-[#F2F8F5] p-1.5">
          {SERVICE_TABS.map((t, k) => (
            <button
              key={t}
              role="tab"
              aria-selected={i === k}
              type="button"
              onClick={() => setI(k)}
              className={`relative whitespace-nowrap rounded-full px-5 py-2.5 text-[13px] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest ${
                i === k ? "text-white" : "text-ink/65 hover:text-ink"
              }`}
            >
              {i === k && (
                <motion.span
                  layoutId="svcTab"
                  transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  className="absolute inset-0 -z-10 rounded-full bg-forest"
                />
              )}
              {t}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={s.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 grid overflow-hidden rounded-[28px] bg-ink text-white lg:grid-cols-2"
          >
            <div className="relative min-h-[300px]">
              <img
                src={SERVICE_IMGS[i]}
                alt={s.title}
                width="800"
                height="600"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
            </div>
            <div className="p-7 sm:p-10">
              <h3 className="font-display text-[clamp(1.5rem,2.6vw,2.2rem)] font-bold leading-tight tracking-[-0.03em]">
                {s.title}
              </h3>
              <div className="mt-4 space-y-3 text-[14px] leading-relaxed text-white/70">
                {s.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <a
                href={wa(s.waMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-7 inline-flex items-center gap-4 rounded-full bg-white py-1.5 pl-6 pr-1.5 text-[13px] font-semibold text-ink transition-colors hover:bg-mint focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                {s.cta}
                <span className="grid h-9 w-9 place-items-center rounded-full bg-forest text-white transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

/* Quem somos + missão, visão e valores */
export function Commitment() {
  return (
    <section id="compromisso" className="bg-[#F2F8F5] px-3 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-[1180px]">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="font-display text-[clamp(2rem,4vw,3.3rem)] font-bold leading-[1.04] tracking-[-0.035em] text-ink">
              Nosso compromisso
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink/65">{COMPROMISSO.subtitulo}</p>
            <div className="mt-6 space-y-3 text-[14px] leading-relaxed text-ink/75">
              {QUEM_SOMOS.paragrafos.slice(0, 2).map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            <div className="rounded-3xl bg-ink p-7 text-white sm:col-span-2">
              <p className="text-[13px] font-semibold text-mint">Missão</p>
              <p className="mt-2 text-[15px] leading-relaxed text-white/80">{COMPROMISSO.missao}</p>
            </div>
            <div className="rounded-3xl bg-forest p-7 text-white sm:col-span-2">
              <p className="text-[13px] font-semibold text-mint">Visão</p>
              <p className="mt-2 text-[15px] leading-relaxed text-white/90">{COMPROMISSO.visao}</p>
            </div>
            {COMPROMISSO.valores.map(([t, d]) => (
              <div key={t} className="rounded-3xl border border-ink/8 bg-white p-6 transition-transform duration-300 hover:-translate-y-1">
                <p className="font-display text-[17px] font-bold text-ink">{t}</p>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink/65">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* Contato + marca d'água + rodapé */
export function Footer() {
  const [nome, setNome] = useState("");
  const [servico, setServico] = useState(SERVICE_TABS[0]);
  const [detalhes, setDetalhes] = useState("");

  const submit = (e) => {
    e.preventDefault();
    const msg = `Olá! Meu nome é ${nome || "Cliente"}. Gostaria de atendimento para ${servico}.${detalhes ? ` Detalhes: ${detalhes}` : ""}`;
    window.open(wa(msg), "_blank", "noopener,noreferrer");
  };

  const field =
    "mt-1.5 w-full border-b-2 border-ink/15 bg-transparent py-2.5 text-[15px] font-medium text-ink transition-colors focus:border-forest focus-visible:outline-none";

  return (
    <footer id="contato" className="overflow-hidden bg-white pt-20">
      <div className="mx-auto max-w-[1180px] px-3 sm:px-6">
        <div className="grid gap-10 rounded-[32px] bg-[#F2F8F5] p-6 sm:p-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-[clamp(1.9rem,3.4vw,2.8rem)] font-bold leading-tight tracking-[-0.035em] text-ink">
              Vamos começar o seu projeto
            </h2>
            <p className="mt-2 text-[14.5px] text-ink/65">Fale direto com os engenheiros e receba uma análise personalizada.</p>
            <form onSubmit={submit} className="mt-7 space-y-5">
              <div>
                <label htmlFor="f-nome" className="text-[13px] font-semibold text-ink/70">Nome ou empresa</label>
                <input id="f-nome" name="name" autoComplete="name" required value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Ex.: Construtora Silva." className={field} />
              </div>
              <div>
                <label htmlFor="f-serv" className="text-[13px] font-semibold text-ink/70">Serviço</label>
                <select id="f-serv" name="service" value={servico} onChange={(e) => setServico(e.target.value)} className={`${field} bg-[#F2F8F5]`}>
                  {SERVICE_TABS.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                  <option>Controle e automação</option>
                </select>
              </div>
              <div>
                <label htmlFor="f-det" className="text-[13px] font-semibold text-ink/70">Sobre a necessidade (opcional)</label>
                <input id="f-det" name="details" autoComplete="off" value={detalhes} onChange={(e) => setDetalhes(e.target.value)} placeholder="Conte brevemente sobre a instalação." className={field} />
              </div>
              <button
                type="submit"
                className="group inline-flex items-center gap-4 rounded-full bg-forest py-1.5 pl-7 pr-1.5 text-[13px] font-semibold text-white transition-colors hover:bg-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2"
              >
                Enviar pelo WhatsApp
                <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-ink transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </button>
            </form>
          </div>

          <div className="flex flex-col gap-4">
            <div className="overflow-hidden rounded-2xl ring-1 ring-ink/10">
              <iframe
                title="Localização da MA Soluções e Engenharia em João Monlevade, MG"
                src="https://www.google.com/maps?q=Rua+Nova+Lima,+96,+Carneirinhos,+Joao+Monlevade,+MG,+35930-244&output=embed"
                className="h-[250px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="grid gap-3 text-[13.5px] text-ink/75 sm:grid-cols-2">
              <a href={wa("Olá!")} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-2xl bg-white p-4 font-semibold transition-colors hover:text-forest">
                <Phone className="h-4 w-4 text-forest" aria-hidden="true" /> <span className="tabular-nums">{TELEFONE}</span>
              </a>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 truncate rounded-2xl bg-white p-4 font-semibold transition-colors hover:text-forest">
                <Mail className="h-4 w-4 shrink-0 text-forest" aria-hidden="true" /> <span className="truncate">{EMAIL}</span>
              </a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-2xl bg-white p-4 font-semibold transition-colors hover:text-forest">
                <Instagram className="h-4 w-4 text-forest" aria-hidden="true" /> {INSTAGRAM}
              </a>
              <p className="flex items-start gap-3 rounded-2xl bg-white p-4 font-medium">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-forest" aria-hidden="true" /> {ENDERECO}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none mt-12 select-none text-center font-display text-[clamp(3.4rem,12.4vw,11.5rem)] font-extrabold uppercase leading-[0.86] tracking-[-0.04em]"
        style={{
          background: "linear-gradient(180deg, rgba(11,122,90,.3) 0%, rgba(11,122,90,.06) 72%, rgba(255,255,255,0) 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        MA ENGENHARIA
      </div>

      <div className="border-t border-ink/8 py-6 text-center text-[12.5px] text-ink/55">
        © {new Date().getFullYear()} MA | Soluções e Engenharia Ltda · {CREA} · {EMAIL_ALT}
      </div>
    </footer>
  );
}

