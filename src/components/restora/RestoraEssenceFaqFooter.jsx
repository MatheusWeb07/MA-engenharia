import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus,
  ArrowUpRight,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Send,
} from "lucide-react";
import {
  EMPRESA,
  SLOGAN,
  TELEFONE,
  WHATSAPP,
  EMAIL,
  EMAIL_ALT,
  INSTAGRAM,
  INSTAGRAM_URL,
  ENDERECO,
  CITACAO,
  COMPROMISSO,
  CREA,
} from "../../data";

const ESSENCE_SLIDES = [
  {
    index: "01",
    tag: "Propósito MA",
    quote: CITACAO,
    detail: "Engenharia aplicada com clareza técnica, prevenção de riscos e otimização desde a concepção.",
  },
  {
    index: "02",
    tag: "Compromisso Técnico",
    quote: `“${COMPROMISSO.texto}”`,
    detail: "Cada planta, diagrama e memorial é estruturado para execução sem improvisos em obra.",
  },
  {
    index: "03",
    tag: "Base Acadêmica • UFOP",
    quote:
      "“Unimos o rigor analítico da Engenharia de Controle e Automação pela UFOP à prática de projetos elétricos e laudos com total conformidade normativa.”",
    detail: "Formação técnica sólida voltada para soluções seguras, eficientes e duráveis.",
  },
];

const FAQ_ITEMS = [
  {
    q: "Quando é obrigatório contratar um projeto elétrico completo?",
    a: "Em construções novas, reformas com ampliação de carga, edifícios comerciais, condomínios e instalações industriais. Um projeto conforme a ABNT NBR 5410 evita sobrecargas, economiza cabos e garante aprovação na concessionária.",
  },
  {
    q: "Os projetos e laudos acompanham emissão de ART?",
    a: "Sim. Toda entrega técnica, seja projeto executivo, laudo pericial ou adequação NR-10 / SPDA, é formalizada com Anotação de Responsabilidade Técnica (ART) devidamente registrada.",
  },
  {
    q: "O que está incluso no Laudo Técnico de Instalações Elétricas (NR-10)?",
    a: "Realizamos vistoria presencial em painéis, quadros, aterramento e circuitos, entregando diagnóstico fotográfico, análise de não conformidades segundo a NR-10 e plano objetivo de adequação.",
  },
  {
    q: "Como funciona a consultoria de SPDA e para-raios (NBR 5419)?",
    a: "Elaboramos a análise de gerenciamento de risco, projeto completo de captação, descidas, aterramento e dispositivos DPS, além de inspeções periódicas de conformidade.",
  },
  {
    q: "A MA atende apenas em João Monlevade?",
    a: "Nossa base fica em João Monlevade (MG), com atendimento ágil presencial no Vale do Aço, região central de Minas Gerais e desenvolvimento de projetos técnicos digitais para outras localidades.",
  },
  {
    q: "Qual o prazo médio para entrega de um projeto ou laudo?",
    a: "O prazo varia conforme a metragem, complexidade e escopo da edificação. Após o recebimento das plantas ou vistoria inicial, informamos um cronograma claro com todas as etapas.",
  },
];

const NORMATIVE_MARKS = [
  { code: "ABNT", label: "NBR 5410" },
  { code: "SEGURANÇA", label: "NR-10" },
  { code: "PROTEÇÃO", label: "NBR 5419 SPDA" },
  { code: "FORMAÇÃO", label: "UFOP" },
  { code: "REGISTRO", label: "ART CREA-MG" },
];

export default function RestoraEssenceFaqFooter({ onScrollTo }) {
  const [slideIdx, setSlideIdx] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);
  const [quickMsg, setQuickMsg] = useState("");
  const [footerMsg, setFooterMsg] = useState("");

  const activeSlide = ESSENCE_SLIDES[slideIdx];
  const nextSlide = () => setSlideIdx((prev) => (prev + 1) % ESSENCE_SLIDES.length);
  const prevSlide = () =>
    setSlideIdx((prev) => (prev - 1 + ESSENCE_SLIDES.length) % ESSENCE_SLIDES.length);

  const sendWhatsApp = (text) => {
    const clean = (text || "").trim() || "Olá! Gostaria de solicitar um atendimento com a MA Soluções e Engenharia.";
    window.open(`${WHATSAPP}?text=${encodeURIComponent(clean)}`, "_blank", "noopener,noreferrer");
  };

  const handleLink = (e, href) => {
    e.preventDefault();
    if (onScrollTo) onScrollTo(href);
    else document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#F7F5F2]">
      {/* SECTION 6: INSTITUTIONAL ESSENCE CAROUSEL (Follows reference video 00:16–00:17, zero invented testimonials) */}
      <section id="essencia" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1380px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Small architectural detail frame left */}
            <div className="hidden lg:block lg:col-span-2">
              <div className="aspect-square w-full overflow-hidden rounded-[22px] bg-white p-1.5 border border-[#E5E1DA] shadow-sm">
                <img
                  src="/assets/eng-projeto-arquitetura.jpg"
                  alt="Desenvolvimento de projeto técnico"
                  className="h-full w-full rounded-[16px] object-cover"
                />
              </div>
            </div>

            {/* Center Editorial Quote Block */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 rounded-full bg-white border border-[#DFDCD5] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0B7A5A]">
                  {activeSlide.tag}
                </span>
                <span className="font-mono text-xs font-semibold text-[#787C85]">
                  {activeSlide.index} / 03
                </span>
              </div>

              <div className="text-[44px] font-serif leading-none text-[#0B7A5A]/30 select-none">“</div>

              <blockquote className="-mt-6 text-[22px] sm:text-[28px] lg:text-[31px] font-medium tracking-[-0.02em] leading-[1.32] text-[#121417]">
                {activeSlide.quote}
              </blockquote>

              <p className="text-[14.5px] text-[#5F636B] leading-relaxed">
                {activeSlide.detail}
              </p>

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="Princípio anterior"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#DFDCD5] bg-white text-[#121417] hover:bg-[#0B0C0E] hover:text-white transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Próximo princípio"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#DFDCD5] bg-white text-[#121417] hover:bg-[#0B0C0E] hover:text-white transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Clean Founders Portrait (No caption or CREA below photo) */}
            <div className="lg:col-span-4">
              <div className="aspect-[4/3] lg:aspect-square w-full overflow-hidden rounded-[28px] bg-white border border-[#E5E1DA] shadow-[0_18px_50px_rgba(18,20,23,0.08)]">
                <img
                  src="/assets/fundadores.jpeg"
                  alt="MA Soluções e Engenharia"
                  className="h-full w-full object-cover object-[center_18%]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: FAQ 2-COLUMN ACCORDION (Follows reference video 00:18–00:19) */}
      <section id="duvidas" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-10 bg-white rounded-t-[36px] sm:rounded-t-[48px] border-t border-[#ECE9E2]">
        <div className="mx-auto max-w-[1380px]">
          <div className="text-center max-w-[740px] mx-auto mb-12 sm:mb-14">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#F7F5F2] border border-[#E5E1DA] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0B7A5A] mb-4">
              Dúvidas Técnicas
            </span>
            <h2 className="text-[32px] sm:text-[44px] lg:text-[50px] font-bold uppercase tracking-[-0.03em] leading-[1.06] text-[#121417]">
              PERGUNTAS{" "}
              <span className="font-serif italic font-normal lowercase text-[#0B7A5A] text-[38px] sm:text-[50px] lg:text-[58px]">
                frequentes
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={item.q}
                  className={`rounded-[22px] border transition-all duration-300 ${
                    isOpen
                      ? "bg-[#F7F5F2] border-[#0B7A5A]/30 shadow-sm"
                      : "bg-white border-[#E9E5DD] hover:border-[#CFCBC2]"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-[15.5px] sm:text-[16.5px] font-semibold tracking-tight text-[#121417]">
                      {item.q}
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${
                        isOpen
                          ? "bg-[#0B0C0E] text-white"
                          : "bg-[#F7F5F2] text-[#121417]"
                      }`}
                    >
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-0 text-[14px] sm:text-[14.5px] leading-relaxed text-[#5F636B]">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 8: DARK CTA BANNER + NORMATIVE STRIP (Follows reference video 00:20–00:21) */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-10 bg-white">
        <div className="mx-auto max-w-[1380px]">
          <div className="relative overflow-hidden rounded-[30px] sm:rounded-[38px] bg-[#0B0C0E] px-6 py-16 sm:py-20 text-center shadow-[0_24px_60px_rgba(11,12,14,0.16)]">
            <img
              src="/assets/eng-subestacao-industrial.jpg"
              alt="Infraestrutura elétrica de média e alta tensão"
              className="absolute inset-0 h-full w-full object-cover object-center opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0E]/90 via-[#0B0C0E]/65 to-[#0B0C0E]/75" />

            <div className="relative z-10 mx-auto max-w-[680px]">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white mb-5">
                Atendimento Técnico Especializado
              </span>

              <h2 className="text-[32px] sm:text-[44px] lg:text-[52px] font-bold uppercase tracking-[-0.03em] leading-[1.05] text-white">
                PRONTO PARA INICIAR SEU{" "}
                <span className="font-serif italic font-normal lowercase text-[#34D399] text-[38px] sm:text-[52px] lg:text-[60px]">
                  projeto?
                </span>
              </h2>

              <p className="mt-4 text-[14.5px] sm:text-[16px] leading-relaxed text-white/75">
                Envie sua necessidade técnica ou planta preliminar e receba retorno direto dos nossos engenheiros com escopo claro e ART inclusa.
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  sendWhatsApp(quickMsg);
                }}
                className="mt-8 mx-auto flex max-w-[500px] items-center gap-2 rounded-full bg-white p-1.5 pl-5 shadow-xl"
              >
                <input
                  type="text"
                  value={quickMsg}
                  onChange={(e) => setQuickMsg(e.target.value)}
                  placeholder="Ex.: Projeto elétrico residencial ou Laudo NR-10..."
                  className="flex-1 bg-transparent text-[13.5px] text-[#121417] placeholder:text-[#8E929B] focus:outline-none min-w-0"
                />
                <button
                  type="submit"
                  className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[#0B0C0E] px-5 py-3 text-[12.5px] font-semibold text-white transition-colors hover:bg-[#0B7A5A]"
                >
                  <span>Enviar</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          </div>

          {/* 5-Item Monochrome Technical / Normative Strip */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 py-4 border-b border-[#ECE9E2]">
            {NORMATIVE_MARKS.map((mark) => (
              <div key={mark.label} className="flex flex-col items-center justify-center text-center py-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8E929B]">
                  {mark.code}
                </span>
                <span className="mt-1 text-[16px] sm:text-[18px] font-bold tracking-tight text-[#2B2E33]/80">
                  {mark.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: FOOTER CARD + MASSIVE BRAND WORDMARK (Follows reference video 00:21–00:22) */}
      <footer id="contato" className="relative overflow-hidden bg-[#0B0C0E] pt-14 sm:pt-20 pb-6 px-4 sm:px-6 lg:px-10">
        {/* Blurred architectural photography behind white card */}
        <img
          src="/assets/hero-electrical-eng.jpg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-25 blur-sm scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0B0C0E]/75 via-[#0B0C0E]/85 to-[#0B0C0E]" />

        <div className="relative z-10 mx-auto max-w-[1380px]">
          {/* White Rounded Footer Card */}
          <div className="rounded-[30px] sm:rounded-[36px] bg-white p-7 sm:p-10 lg:p-14 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
              {/* Brand Column */}
              <div className="md:col-span-4 space-y-5">
                <div className="flex items-center gap-3">
                  <img
                    src="/assets/logo-ma.png"
                    alt={EMPRESA}
                    className="h-9 w-auto object-contain"
                  />
                </div>
                <p className="text-[14px] leading-relaxed text-[#5F636B] max-w-[320px]">
                  {SLOGAN}. Engenharia elétrica com rigor técnico, conformidade ABNT e compromisso com resultados eficientes.
                </p>
                <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#0B7A5A] font-semibold">
                  {CREA}
                </p>

                <div className="flex items-center gap-2.5 pt-1">
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Instagram ${INSTAGRAM}`}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E1DA] text-[#121417] hover:bg-[#0B0C0E] hover:text-white transition-colors"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp MA Engenharia"
                    className="inline-flex h-10 items-center gap-2 rounded-full border border-[#E5E1DA] px-4 text-[12.5px] font-semibold text-[#121417] hover:bg-[#0B7A5A] hover:text-white hover:border-[#0B7A5A] transition-colors"
                  >
                    <span>{INSTAGRAM}</span>
                  </a>
                </div>
              </div>

              {/* Address & Contact Column */}
              <div className="md:col-span-4 space-y-6">
                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#8E929B] mb-2.5">
                    Endereço
                  </h4>
                  <p className="flex items-start gap-2.5 text-[14px] text-[#121417] font-medium leading-relaxed">
                    <MapPin className="w-4 h-4 text-[#0B7A5A] shrink-0 mt-1" />
                    <span>{ENDERECO}</span>
                  </p>
                </div>

                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#8E929B] mb-2.5">
                    Contato Direto
                  </h4>
                  <div className="space-y-2 text-[14px] text-[#121417]">
                    <a
                      href="tel:+5531988469218"
                      className="flex items-center gap-2.5 font-medium hover:text-[#0B7A5A] transition-colors"
                    >
                      <Phone className="w-4 h-4 text-[#0B7A5A] shrink-0" />
                      <span>{TELEFONE}</span>
                    </a>
                    <a
                      href={`mailto:${EMAIL}`}
                      className="flex items-center gap-2.5 font-medium hover:text-[#0B7A5A] transition-colors break-all"
                    >
                      <Mail className="w-4 h-4 text-[#0B7A5A] shrink-0" />
                      <span>{EMAIL}</span>
                    </a>
                    <a
                      href={`mailto:${EMAIL_ALT}`}
                      className="flex items-center gap-2.5 text-[13px] text-[#5F636B] hover:text-[#0B7A5A] transition-colors break-all pl-6"
                    >
                      <span>{EMAIL_ALT}</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick Nav + Pill Input Column */}
              <div className="md:col-span-4 flex flex-col justify-between space-y-6">
                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#8E929B] mb-3">
                    Menu Rápido
                  </h4>
                  <div className="grid grid-cols-2 gap-y-2.5 gap-x-4 text-[14px] font-medium text-[#121417]">
                    <a href="#inicio" onClick={(e) => handleLink(e, "#inicio")} className="hover:text-[#0B7A5A]">
                      Início
                    </a>
                    <a href="#quem-somos" onClick={(e) => handleLink(e, "#quem-somos")} className="hover:text-[#0B7A5A]">
                      Quem Somos
                    </a>
                    <a href="#processo" onClick={(e) => handleLink(e, "#processo")} className="hover:text-[#0B7A5A]">
                      Metodologia
                    </a>
                    <a href="#solucoes" onClick={(e) => handleLink(e, "#solucoes")} className="hover:text-[#0B7A5A]">
                      Soluções
                    </a>
                    <a href="#servicos" onClick={(e) => handleLink(e, "#servicos")} className="hover:text-[#0B7A5A]">
                      Serviços
                    </a>
                    <a href="#duvidas" onClick={(e) => handleLink(e, "#duvidas")} className="hover:text-[#0B7A5A]">
                      Dúvidas
                    </a>
                  </div>
                </div>

                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#8E929B] mb-2.5">
                    Atendimento Instantâneo
                  </h4>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      sendWhatsApp(footerMsg);
                    }}
                    className="flex items-center gap-2 rounded-full bg-[#F7F5F2] border border-[#E5E1DA] p-1.5 pl-4"
                  >
                    <input
                      type="text"
                      value={footerMsg}
                      onChange={(e) => setFooterMsg(e.target.value)}
                      placeholder="Escreva sua demanda..."
                      className="flex-1 bg-transparent text-[13px] text-[#121417] placeholder:text-[#8E929B] focus:outline-none min-w-0"
                    />
                    <button
                      type="submit"
                      aria-label="Enviar mensagem no WhatsApp"
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0B0C0E] text-white hover:bg-[#0B7A5A] transition-colors"
                    >
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-[#EFECE6] flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] text-[#787C85]">
              <span>© {new Date().getFullYear()} {EMPRESA}. Todos os direitos reservados.</span>
              <span>João Monlevade — Minas Gerais</span>
            </div>
          </div>

          {/* Monumental Full-Width Brand Wordmark (Follows reference video 00:22 & user request) */}
          <div className="mt-8 sm:mt-10 select-none text-center overflow-hidden">
            <p className="font-bold uppercase tracking-[-0.045em] leading-[0.88] text-white/95 text-[clamp(2.4rem,10.5vw,9.2rem)] whitespace-nowrap">
              MA ENGENHARIA
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
