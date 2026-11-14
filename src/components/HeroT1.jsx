import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X, ShieldCheck } from "lucide-react";
import { CREA, FUNDADORES, WHATSAPP } from "../data";

export default function HeroT1() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const NAV_ITEMS = [
    { label: "Tecnologia", href: "#servicos" },
    { label: "Serviços", href: "#servicos" },
    { label: "Quem Somos", href: "#quem-somos" },
    { label: "CREA-MG ↗", href: "#credenciais" },
    { label: "Contato ↗", href: "#contato" },
  ];

  return (
    <section id="inicio" className="relative h-screen min-h-[680px] w-full overflow-hidden bg-[#0C100E]">
      
      {/* =========================================================================
          IMAGEM FULL-BLEED INDUSTRIAL (DOCUMENTÁRIO DE ENGENHARIA ELÉTRICA)
          ========================================================================= */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img
          src="/assets/t1-hero-factory.jpg"
          alt="Montagem e testes de engenharia elétrica e automação"
          className="h-full w-full object-cover object-center transform scale-[1.01]"
        />
        {/* Iluminação ambiente com leve toque esmeralda */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/45" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_30%,rgba(11,122,90,0.15)_100%)]" />
      </div>

      {/* =========================================================================
          NAVBAR: PÍLULA FLUTUANTE EM VIDRO FOSCO (FROSTED GLASS)
          ========================================================================= */}
      <header className="absolute inset-x-0 top-6 z-30 px-6 sm:px-10">
        <motion.div
          initial={{ y: -25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto flex max-w-[1200px] items-center justify-between"
        >
          {/* Logo da Marca MA */}
          <a href="#inicio" className="group flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#0B7A5A] p-2 shadow-lg shadow-[#0B7A5A]/30 transition group-hover:scale-105">
              <img
                src="/assets/logo-emblem.png"
                alt="MA Engenharia"
                width="32"
                height="32"
                className="h-full w-full object-contain brightness-0 invert"
              />
            </span>
            <div className="flex flex-col">
              <span className="font-sans text-[15.5px] font-bold tracking-tight text-white group-hover:text-[#10B981] transition">
                MA <span className="font-light text-white/90">ENGENHARIA</span>
              </span>
              <span className="text-[8px] font-semibold tracking-wider uppercase text-white/70">
                Soluções e Engenharia
              </span>
            </div>
          </a>

          {/* Pill Navigation Bar em Vidro Fosco (Frosted Glass) */}
          <nav className="hidden items-center gap-7 rounded-[16px] border border-white/20 bg-black/40 px-7 py-3 text-white backdrop-blur-2xl shadow-[0_10px_35px_rgba(0,0,0,0.5)] md:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[13.5px] font-medium tracking-[0.01em] text-white/85 transition hover:text-[#10B981]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Botão Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="grid h-10 w-10 place-items-center rounded-[12px] border border-white/20 bg-black/40 backdrop-blur-xl text-white"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

        </motion.div>

        {/* Menu Mobile Suspenso em Vidro Fosco */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-3 rounded-[16px] border border-white/20 bg-black/75 p-5 text-white backdrop-blur-2xl md:hidden shadow-2xl"
            >
              <div className="flex flex-col gap-3">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-2 text-[14px] text-white/90 hover:text-[#10B981] transition"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* =========================================================================
          HERO OVERLAY (TEXTO À ESQUERDA + QUADRO DIREITO EM VIDRO FOSCO)
          ========================================================================= */}
      <div className="absolute inset-x-0 bottom-12 z-20 px-6 sm:px-10">
        <div className="mx-auto flex max-w-[1200px] flex-col justify-between gap-8 lg:flex-row lg:items-end">
          
          {/* LADO INFERIOR ESQUERDO: DISPLAY HEADLINE (WEIGHT 300, 52PX) + BOTÃO NA COR DA LOGO */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/35 px-3.5 py-1 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-[#0B7A5A] animate-pulse" />
              <span className="font-mono text-[11px] font-semibold tracking-wider text-white">
                ENGENHARIA ELÉTRICA & AUTOMAÇÃO UFOP
              </span>
            </div>

            <h1 className="font-sans text-[36px] sm:text-[46px] lg:text-[52px] font-light leading-[1.02] tracking-[0.52px] text-white drop-shadow-[0_2px_15px_rgba(0,0,0,0.6)]">
              Projetos inteligentes e laudos elétricos de precisão industrial.
            </h1>

            <div>
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href={`${WHATSAPP}?text=${encodeURIComponent("Olá! Vim pelo site da MA Soluções e Engenharia e gostaria de solicitar uma proposta técnica.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#0B7A5A] px-7 py-4 text-[14px] font-semibold text-white shadow-xl shadow-[#0B7A5A]/30 transition hover:bg-[#086348]"
              >
                <span>Solicitar Proposta Técnica</span>
                <ArrowUpRight className="h-4 w-4" />
              </motion.a>
            </div>
          </motion.div>

          {/* LADO INFERIOR DIREITO: QUADRO EM VIDRO FOSCO (FROSTED GLASS) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-sm rounded-[16px] border border-white/25 bg-black/45 p-5 text-white backdrop-blur-2xl shadow-[0_12px_40px_rgba(0,0,0,0.6)]"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-[10.5px] font-semibold tracking-[0.14em] uppercase text-[#10B981]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#0B7A5A]" />
                  <span>RESPONSABILIDADE TÉCNICA</span>
                </div>
                <p className="text-[14.5px] font-medium leading-[1.3] text-white">
                  {FUNDADORES}
                </p>
                <p className="font-mono text-[11.5px] text-white/70">
                  {CREA} • Formação UFOP
                </p>
              </div>

              {/* Thumbnail com foto dos fundadores */}
              <div className="h-14 w-14 shrink-0 overflow-hidden rounded-[10px] border border-white/20 bg-black/40">
                <img
                  src="/assets/fundadores.jpeg"
                  alt="Marphiza Magalhães e Adeilson"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>

    </section>
  );
}
