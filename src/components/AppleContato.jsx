import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUp, ArrowUpRight, Check, Copy, Mail, MapPin, Phone, Send, Sparkles } from "lucide-react";
import { CREA, EMAIL, ENDERECO, TELEFONE, WHATSAPP } from "../data";

export default function AppleContato() {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({
    nome: "",
    servico: "Projetos Elétricos (NBR 5410)",
    mensagem: "",
  });

  const copyEmail = () => {
    navigator.clipboard?.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const txt = `Olá! Meu nome é ${form.nome || "Cliente"}. Tenho interesse no serviço de ${form.servico}. Mensagem: ${form.mensagem || "Gostaria de solicitar um orçamento para meu projeto."}`;
    window.open(`${WHATSAPP}?text=${encodeURIComponent(txt)}`, "_blank");
  };

  return (
    <footer id="contato" className="relative overflow-hidden bg-[#050806] pt-28 pb-12 text-white">
      {/* Luz ambiente sutil */}
      <div className="pointer-events-none absolute -bottom-20 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-[#0B7A5A]/15 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        
        {/* Card Principal Apple de Contato */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-[#09120D] to-[#060B08] p-8 shadow-2xl backdrop-blur-2xl sm:p-12 lg:p-16"
        >
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            
            {/* Lado Esquerdo: Chamada e Informações de Contato */}
            <div className="flex flex-col justify-between lg:col-span-7">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1 text-xs font-mono font-semibold tracking-wider text-[#10B981]">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Contato Direto</span>
                </div>

                <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl leading-[1.12]">
                  Pronto para iniciar seu projeto com rigor e segurança?
                </h2>

                <p className="mt-4 text-base leading-relaxed text-white/70">
                  Entre em contato diretamente com os engenheiros fundadores Marphiza Magalhães e Adeilson. Elaboramos propostas técnicas detalhadas com dimensionamento sob medida e emissão de ART.
                </p>

                {/* Canais Oficiais de Contato */}
                <div className="mt-8 space-y-4">
                  
                  {/* WhatsApp */}
                  <motion.a
                    whileHover={{ x: 4 }}
                    href={`${WHATSAPP}?text=${encodeURIComponent("Olá! Gostaria de falar com os engenheiros da MA Soluções e Engenharia.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-4 transition duration-300 hover:border-[#10B981]/40 hover:bg-white/[0.04]"
                  >
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#0B7A5A] text-white shadow-lg shadow-[#0B7A5A]/30 transition group-hover:scale-105">
                      <Phone className="h-5 w-5" />
                    </span>
                    <div className="flex-1">
                      <p className="font-mono text-[10px] uppercase tracking-wider text-white/50">WhatsApp / Atendimento</p>
                      <p className="font-display text-base font-bold text-white transition group-hover:text-[#10B981] sm:text-lg">
                        {TELEFONE}
                      </p>
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-white/40 transition group-hover:text-[#10B981]" />
                  </motion.a>

                  {/* E-mail */}
                  <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white/5 text-[#10B981]">
                      <Mail className="h-5 w-5" />
                    </span>
                    <div className="flex-1 overflow-hidden">
                      <p className="font-mono text-[10px] uppercase tracking-wider text-white/50">E-mail Oficial</p>
                      <p className="truncate font-mono text-xs font-semibold text-white sm:text-sm">
                        {EMAIL}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={copyEmail}
                      title="Copiar e-mail"
                      className="rounded-xl border border-white/10 p-2 text-white/60 transition hover:bg-white/10 hover:text-white"
                    >
                      {copied ? <Check className="h-4 w-4 text-[#10B981]" /> : <Copy className="h-4 w-4" />}
                    </button>
                  </div>

                  {/* Localização */}
                  <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white/5 text-[#10B981]">
                      <MapPin className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-wider text-white/50">Sede Operacional</p>
                      <p className="text-xs font-medium text-white sm:text-sm">
                        {ENDERECO}
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              <div className="mt-8 border-t border-white/10 pt-4 font-mono text-xs text-white/40">
                Atendimento presencial em João Monlevade, Médio Piracicaba e suporte a projetos em todo o Brasil.
              </div>
            </div>

            {/* Lado Direito: Formulário com Envio Direto ao WhatsApp */}
            <div className="rounded-[2rem] border border-white/10 bg-[#060A07] p-6 sm:p-8 lg:col-span-5">
              <h3 className="font-display text-xl font-bold text-white">
                Solicite uma Proposta Técnica
              </h3>
              <p className="mt-1 text-xs text-white/60">
                Preencha e converse em instantes pelo WhatsApp oficial:
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label className="block font-mono text-[10.5px] uppercase tracking-wider text-white/70">
                    Seu Nome / Empresa
                  </label>
                  <input
                    type="text"
                    required
                    value={form.nome}
                    onChange={(e) => setForm({ ...form, nome: e.target.value })}
                    placeholder="Ex: Carlos Silva ou Construtora Alfa"
                    className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-white placeholder-white/30 transition focus:border-[#10B981] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[10.5px] uppercase tracking-wider text-white/70">
                    Tipo de Solução
                  </label>
                  <select
                    value={form.servico}
                    onChange={(e) => setForm({ ...form, servico: e.target.value })}
                    className="mt-1.5 w-full rounded-xl border border-white/10 bg-[#0A120E] px-4 py-3 text-xs text-white transition focus:border-[#10B981] focus:outline-none"
                  >
                    <option value="Projetos Elétricos (NBR 5410)">Projetos Elétricos (NBR 5410)</option>
                    <option value="Laudos Técnicos e NR-10">Laudos Técnicos (NR-10 & SPDA NBR 5419)</option>
                    <option value="Controle e Automação Industrial">Controle e Automação Industrial</option>
                    <option value="Consultoria Técnica e Diagnósticos">Consultoria Técnica e Diagnósticos</option>
                    <option value="Outro Assunto">Outro Assunto</option>
                  </select>
                </div>

                <div>
                  <label className="block font-mono text-[10.5px] uppercase tracking-wider text-white/70">
                    Descrição ou Necessidade
                  </label>
                  <textarea
                    rows={3}
                    value={form.mensagem}
                    onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                    placeholder="Conte resumidamente o que você precisa..."
                    className="mt-1.5 w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-white placeholder-white/30 transition focus:border-[#10B981] focus:outline-none"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#0B7A5A] px-6 py-3.5 font-display text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-[#0B7A5A]/30 transition hover:bg-[#0E8A66]"
                >
                  <Send className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                  <span>Enviar Mensagem no WhatsApp</span>
                </motion.button>

                <p className="text-center font-mono text-[9.5px] text-white/40">
                  Sem intermediários. Retorno ágil diretamente pelos engenheiros.
                </p>
              </form>
            </div>

          </div>
        </motion.div>

        {/* Rodapé Minimalista Refinado */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row">
          <div className="flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-[#0B7A5A] p-1.5">
              <img
                src="/assets/logo-emblem.png"
                alt="MA"
                width="24"
                height="24"
                className="h-full w-full object-contain brightness-0 invert"
              />
            </span>
            <div>
              <p className="font-display text-xs font-bold text-white">MA | Soluções e Engenharia Ltda</p>
              <p className="font-mono text-[9.5px] text-white/40">{CREA}</p>
            </div>
          </div>

          <p className="font-mono text-[10px] text-white/45 text-center">
            © {new Date().getFullYear()} MA Soluções e Engenharia. Todos os direitos reservados.
          </p>

          <a
            href="#inicio"
            className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 font-mono text-[10px] font-semibold uppercase tracking-wider text-white/70 transition hover:border-[#10B981] hover:text-white"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="h-3.5 w-3.5 text-[#10B981]" />
          </a>
        </div>

      </div>
    </footer>
  );
}
