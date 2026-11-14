import React from "react";
import { ArrowUp, Mail, MapPin, Phone } from "lucide-react";
import { EMAIL, ENDERECO, INSTAGRAM, INSTAGRAM_URL, TELEFONE, WHATSAPP } from "../../data";

export default function JacobsFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contato" className="bg-[#0B0E0D] text-white pt-20 pb-8 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-20">
        
        {/* =========================================================================
            LINHA SUPERIOR: LINKS INSTITUCIONAIS & REDES SOCIAIS JACOBS
            (Exatamente como na captura de tela 2026-11-03 203606.png)
            ========================================================================= */}
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between border-b border-white/10 pb-10">
          
          {/* Links de Contato e Localização */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-10 text-xs font-display font-semibold uppercase tracking-wider text-white/80">
            <a
              href={`${WHATSAPP}?text=${encodeURIComponent("Olá! Gostaria de falar com a MA Engenharia.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#2DD4BF] transition"
            >
              <Phone className="h-4 w-4 text-[#0B7A5A]" />
              <span>{TELEFONE}</span>
            </a>

            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-2 hover:text-[#2DD4BF] transition"
            >
              <Mail className="h-4 w-4 text-[#0B7A5A]" />
              <span className="lowercase">{EMAIL}</span>
            </a>

            <div className="flex items-center gap-2 text-white/60">
              <MapPin className="h-4 w-4 text-[#0B7A5A]" />
              <span className="normal-case">{ENDERECO}</span>
            </div>
          </div>

          {/* Conectar / Redes Sociais */}
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs uppercase tracking-wider text-white/50">
              Conectar:
            </span>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/5 p-2 text-white/70 transition hover:bg-[#0B7A5A] hover:text-white"
              title="WhatsApp"
            >
              <span className="font-mono text-xs font-bold px-1">WA</span>
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/5 p-2 text-white/70 transition hover:bg-[#0B7A5A] hover:text-white"
              title="Instagram"
            >
              <span className="font-mono text-xs font-bold px-1">IG</span>
            </a>
          </div>

        </div>

        {/* =========================================================================
            TIPOGRAFIA MONUMENTAL 'MA ENGENHARIA'
            (Exatamente igual ao 'Jacobs' gigante na captura de tela 2026-11-03 203606.png)
            ========================================================================= */}
        <div className="py-10 sm:py-16 text-center select-none overflow-hidden">
          <p className="font-display text-[clamp(2.5rem,7.5vw,7.8rem)] font-black uppercase tracking-[-0.02em] text-white leading-none whitespace-nowrap opacity-95 transition-opacity hover:opacity-100">
            MA ENGENHARIA
          </p>
        </div>

        {/* =========================================================================
            BARRA DE COPYRIGHT E BOTÃO VOLTAR AO TOPO
            ========================================================================= */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs font-mono text-white/50">
          <p>
            © {new Date().getFullYear()} MA | Soluções e Engenharia Ltda. Todos os direitos reservados.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-[#2DD4BF] transition uppercase tracking-wider font-bold"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
