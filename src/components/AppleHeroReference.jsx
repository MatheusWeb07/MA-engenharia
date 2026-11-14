import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronDown, ChevronRight, Phone, ShieldCheck } from "lucide-react";
import { CREA, FUNDADORES, TELEFONE, WHATSAPP } from "../data";

export default function AppleHeroReference() {
  const [menuOpen, setMenuOpen] = useState(false);

  const NAV_LINKS = [
    { label: "Início", href: "#inicio" },
    { label: "Quem Somos", href: "#quem-somos" },
    { label: "Serviços", href: "#servicos" },
    { label: "Compromisso", href: "#compromisso" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <section id="inicio" className="relative min-h-screen w-full overflow-hidden bg-[#070B09] text-white">
      
      {/* =========================================================================
          FUNDO FOTOGRÁFICO: MESA DE ENGENHARIA COM BASE DE CORTE, ESTILETE E LÁPIS
          (EXATAMENTE COMO NA REFERÊNCIA ORYZO / LUSION, SEM A BOLINHA MARROM)
          ========================================================================= */}
      <div className="absolute inset-0 z-0 overflow-hidden select-none" aria-hidden="true">
        <img
          src="/assets/cutting-mat-hero.jpg"
          alt="Mesa de trabalho de engenharia com base de corte e ferramentas"
          className="h-full w-full object-cover object-center transform scale-[1.02]"
        />
        {/* Camadas sutis de contraste para garantir legibilidade impecável dos textos */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[0.5px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#060907]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(6,9,7,0.7)_100%)]" />
      </div>

      {/* =========================================================================
          TAG VERTICAL NA BORDA DIREITA (IGUAL À REFERÊNCIA: ORYZO-1 MODEL)
          ========================================================================= */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="flex items-center gap-2 rounded-l-xl border-y border-l border-white/20 bg-[#FAF7F2] py-4 px-2 text-[#1E1E1E] shadow-2xl [writing-mode:vertical-rl] rotate-180">
          <span className="h-1.5 w-1.5 rounded-full bg-[#0B7A5A]" />
          <span className="font-mono text-[10px] font-bold tracking-[0.2em] uppercase">
            {CREA} • UFOP
          </span>
        </div>
      </div>

      {/* =========================================================================
          TOP NAVBAR: MINIMALISTA, ESPAÇADA E CLEAN (ESTILO ORYZO / LUSION)
          ========================================================================= */}
      <header className="fixed inset-x-0 top-0 z-50 px-6 py-6 sm:px-10 lg:px-14">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          
          {/* Logo Limpa MA Engenharia */}
          <a href="#inicio" className="group flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 p-2 backdrop-blur-md border border-white/20 transition group-hover:bg-[#0B7A5A]">
              <img
                src="/assets/logo-emblem.png"
                alt="MA Engenharia"
                width="32"
                height="32"
                className="h-full w-full object-contain brightness-0 invert"
              />
            </span>
            <div className="flex flex-col">
              <span className="font-display text-[16px] font-black tracking-tight text-white group-hover:text-[#10B981] transition">
                MA <span className="font-light text-white/90">ENGENHARIA</span>
              </span>
              <span className="font-mono text-[7.5px] font-semibold uppercase tracking-[0.2em] text-white/60">
                SOLUÇÕES E ENGENHARIA
              </span>
            </div>
          </a>

          {/* Links da Navbar estilo Oryzo (font mono, uppercase, espaçado) */}
          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-[11px] font-medium uppercase tracking-[0.25em] text-white/80 transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Botão de Contato */}
          <div className="flex items-center gap-3">
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href={`${WHATSAPP}?text=${encodeURIComponent("Olá! Vim pelo site da MA Soluções e Engenharia e gostaria de falar com os engenheiros.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 font-mono text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-md transition hover:bg-white hover:text-black"
            >
              <span>Orçamento</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </motion.a>

            {/* Menu Mobile */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/10 backdrop-blur-md text-white md:hidden"
            >
              <div className="flex h-3.5 w-4 flex-col justify-between">
                <span className={`h-0.5 w-full rounded-full bg-white transition-all ${menuOpen ? "translate-y-1.5 rotate-45" : ""}`} />
                <span className={`h-0.5 w-full rounded-full bg-white transition-all ${menuOpen ? "opacity-0" : ""}`} />
                <span className={`h-0.5 w-full rounded-full bg-white transition-all ${menuOpen ? "-translate-y-1.5 -rotate-45" : ""}`} />
              </div>
            </button>
          </div>

        </div>
      </header>

      {/* Drawer Mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-x-4 top-24 z-40 rounded-3xl border border-white/20 bg-[#090E0B]/95 p-6 backdrop-blur-3xl md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between rounded-xl p-3 font-mono text-xs uppercase tracking-wider text-white hover:bg-white/10"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="h-4 w-4 text-white/50" />
                </a>
              ))}
              <a
                href={`${WHATSAPP}?text=${encodeURIComponent("Olá! Vim pelo site da MA Soluções e Engenharia.")}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-[#0B7A5A] p-3 text-xs font-bold uppercase tracking-wider text-white"
              >
                <Phone className="h-4 w-4" />
                <span>Falar no WhatsApp</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =========================================================================
          CORPO PRINCIPAL DO HERO (ESTRUTURA EXATA DO LAYOUT ORYZO)
          ========================================================================= */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-between px-6 pt-32 pb-12 sm:px-10 lg:px-14">
        
        {/* PARTE SUPERIOR: TÍTULO GIGANTE À ESQUERDA (ESTILO 'ORYZO') + FRASE À DIREITA */}
        <div className="grid grid-cols-1 items-start gap-12 pt-6 lg:grid-cols-12 lg:pt-10">
          
          {/* Lado Esquerdo: Tag + Nome Monumental da Empresa */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <p className="font-mono text-[10.5px] font-bold uppercase tracking-[0.25em] text-[#FAF7F2]/80">
              SOLUÇÕES EM ENGENHARIA ELÉTRICA & AUTOMAÇÃO
            </p>

            <h1 className="mt-2 font-display text-[clamp(4.5rem,11.5vw,10.5rem)] font-black uppercase leading-[0.92] tracking-[-0.03em] text-[#FAF7F2] drop-shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
              MA
            </h1>
            <p className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#FAF7F2]/90 -mt-2">
              Engenharia
            </p>
          </motion.div>

          {/* Lado Direito: A Frase Solicitada + Descrição + Botão WhatsApp */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start lg:col-span-6 lg:items-end lg:text-right"
          >
            <div className="max-w-md space-y-4">
              {/* Frase Oficial solicitada pelo usuário */}
              <h2 className="font-display text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-[2.2rem]">
                Projetos inteligentes.{" "}
                <span className="text-[#10B981]">Resultados eficientes.</span>
              </h2>

              {/* Subtítulo Clean */}
              <p className="text-sm font-normal leading-relaxed text-white/80 sm:text-[15px]">
                Elaboração de projetos elétricos, consultorias e laudos técnicos com foco na qualidade, conformidade normativa e na segurança dos nossos clientes.
              </p>

              {/* Ação com Micro-motion */}
              <div className="pt-2 flex flex-wrap gap-3 lg:justify-end">
                <motion.a
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  href={`${WHATSAPP}?text=${encodeURIComponent("Olá! Vim pelo site da MA Soluções e Engenharia e gostaria de solicitar um orçamento.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#0B7A5A] px-6 py-3 font-display text-xs font-bold uppercase tracking-wider text-white shadow-xl shadow-black/40 transition hover:bg-[#0E8A66]"
                >
                  <span>Falar com os Engenheiros</span>
                  <ArrowUpRight className="h-4 w-4" />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#servicos"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-5 py-3 font-display text-xs font-semibold text-white/90 backdrop-blur-md transition hover:bg-white/10"
                >
                  <span>Nossos Serviços</span>
                </motion.a>
              </div>
            </div>
          </motion.div>

        </div>

        {/* PARTE INFERIOR: CARD VIDRO FOSCO (ESTILO LUSION) + SCROLL INDICATOR */}
        <div className="mt-20 grid grid-cols-1 items-end gap-6 sm:grid-cols-12">
          
          {/* Card Vidro Fosco Inferior Esquerdo (Exatamente como o card da Lusion na referência) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="sm:col-span-6 lg:col-span-5"
          >
            <div className="rounded-2xl border border-white/20 bg-black/45 p-6 backdrop-blur-xl shadow-2xl">
              <span className="font-mono text-[9.5px] font-bold uppercase tracking-[0.2em] text-[#10B981]">
                FUNDADORES & RESPONSABILIDADE TÉCNICA
              </span>
              <h3 className="mt-2 font-display text-lg font-bold text-white sm:text-xl">
                Eng. Marphiza Magalhães & Eng. Adeilson
              </h3>
              
              <div className="my-3.5 border-t border-dashed border-white/20" />
              
              <p className="font-mono text-xs leading-relaxed text-white/75">
                Engenheiros Eletricistas formados com ênfase em Controle e Automação pela Universidade Federal de Ouro Preto (UFOP).
              </p>
            </div>
          </motion.div>

          {/* Centro: Indicador "Rolar para continuar" (Scroll to continue) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex justify-center sm:col-span-12 lg:col-span-4"
          >
            <a
              href="#quem-somos"
              className="group flex flex-col items-center gap-1.5 text-white/60 transition hover:text-white"
            >
              <span className="font-mono text-[9px] font-bold uppercase tracking-[0.25em]">
                Rolar para explorar
              </span>
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              >
                <ChevronDown className="h-4 w-4 text-[#10B981]" />
              </motion.div>
            </a>
          </motion.div>

          {/* Canto Inferior Direito: Credencial João Monlevade */}
          <div className="hidden sm:block sm:col-span-6 lg:col-span-3 text-right">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3.5 py-1.5 backdrop-blur-md font-mono text-[10px] text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-[#10B981] animate-pulse" />
              <span>João Monlevade • MG</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
