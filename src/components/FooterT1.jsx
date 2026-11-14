import React from "react";
import { ArrowUp } from "lucide-react";
import { CREA, EMPRESA, ENDERECO, TELEFONE } from "../data";

export default function FooterT1() {
  return (
    <footer className="w-full bg-[#0C100E] py-14 px-6 sm:px-10 text-white border-t border-white/10">
      <div className="mx-auto max-w-[1200px] space-y-10">
        
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
          
          {/* Logo e Nome */}
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#0B7A5A] p-2 shadow-md shadow-[#0B7A5A]/30">
              <img
                src="/assets/logo-emblem.png"
                alt="MA Engenharia"
                width="32"
                height="32"
                className="h-full w-full object-contain brightness-0 invert"
              />
            </span>
            <div>
              <p className="text-[15px] font-bold tracking-tight text-white">
                MA | SOLUÇÕES E ENGENHARIA LTDA
              </p>
              <p className="text-[12px] text-white/60 font-mono">
                {CREA} • Engenharia Elétrica & Automação (UFOP)
              </p>
            </div>
          </div>

          {/* Links e Topo */}
          <div className="flex flex-wrap items-center gap-6 text-[14px] text-white/80">
            <a href="#inicio" className="hover:text-[#10B981] transition">Início</a>
            <a href="#quem-somos" className="hover:text-[#10B981] transition">Quem Somos</a>
            <a href="#servicos" className="hover:text-[#10B981] transition">Serviços</a>
            <a href="#credenciais" className="hover:text-[#10B981] transition">Credenciais</a>
            <a href="#contato" className="hover:text-[#10B981] transition">Contato</a>
            
            <a
              href="#inicio"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/20 px-4 py-2 text-[12px] text-white/80 hover:border-[#0B7A5A] hover:text-white transition"
            >
              <span>Topo</span>
              <ArrowUp className="h-3 w-3 text-[#10B981]" />
            </a>
          </div>

        </div>

        {/* Rodapé inferior */}
        <div className="flex flex-col justify-between gap-4 border-t border-white/10 pt-8 text-[12px] text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} {EMPRESA}. Todos os direitos reservados.</p>
          <p>{ENDERECO}</p>
        </div>

      </div>
    </footer>
  );
}
