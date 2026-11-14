import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Copy, Mail, MapPin, Phone, Send } from "lucide-react";
import { CREA, EMAIL, ENDERECO, FUNDADORES, TELEFONE, WHATSAPP } from "../data";

export default function ContactT1() {
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
    const txt = `Olá! Meu nome é ${form.nome || "Cliente"}. Tenho interesse no serviço de ${form.servico}. Mensagem: ${form.mensagem || "Gostaria de solicitar uma proposta técnica."}`;
    window.open(`${WHATSAPP}?text=${encodeURIComponent(txt)}`, "_blank");
  };

  return (
    <section id="contato" className="w-full bg-[#F8FAF9] py-24 px-6 sm:px-10 border-t border-[#0B7A5A]/15">
      <div className="mx-auto max-w-[1200px] space-y-14">
        
        {/* Cabeçalho da Seção com Quadrado Sólido 4px */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4"
        >
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-sm bg-[#0B7A5A]" />
            <span className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#0B7A5A]">
              CONTATO & PROPOSTA TÉCNICA
            </span>
          </div>

          <h2 className="max-w-3xl font-sans text-[36px] sm:text-[46px] lg:text-[52px] font-light leading-[1.0] tracking-[0.52px] text-[#1E1E1E]">
            Inicie seu projeto diretamente com os engenheiros responsáveis.
          </h2>

          <p className="max-w-2xl text-[16px] font-normal leading-[1.5] text-[#1E1E1E]/80">
            Sem intermediários. Você conversa de engenheiro para cliente, com diagnóstico claro, transparência orçamentária e emissão de ART.
          </p>
        </motion.div>

        {/* Grade de Contato: Informações na Esquerda + Formulário na Direita */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-4">
          
          {/* Lado Esquerdo: Dados de Contato e Matriz */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8 lg:col-span-6"
          >
            <div className="space-y-2">
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.14em] text-[#0B7A5A]">
                ENGENHEIROS TITULARES
              </span>
              <p className="text-[20px] font-semibold text-[#1E1E1E]">
                {FUNDADORES}
              </p>
              <p className="text-[13.5px] text-[#1E1E1E]/70 font-mono">
                {CREA} • Graduados na UFOP
              </p>
            </div>

            <div className="space-y-2 pt-2">
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.14em] text-[#0B7A5A]">
                WHATSAPP / TELEFONE DIRETO
              </span>
              <br />
              <motion.a
                whileHover={{ x: 4 }}
                href={`${WHATSAPP}?text=${encodeURIComponent("Olá! Gostaria de falar sobre um projeto de engenharia elétrica.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[22px] font-semibold text-[#0B7A5A] transition hover:text-[#075E45]"
              >
                <span>{TELEFONE}</span>
                <ArrowUpRight className="h-5 w-5" />
              </motion.a>
            </div>

            <div className="space-y-2 pt-2">
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.14em] text-[#0B7A5A]">
                E-MAIL OFICIAL
              </span>
              <div className="flex items-center gap-3">
                <span className="text-[15px] font-medium text-[#1E1E1E]">{EMAIL}</span>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="rounded-[8px] border border-[#0B7A5A] p-1.5 text-[#0B7A5A] transition hover:bg-[#0B7A5A] hover:text-white"
                  title="Copiar e-mail"
                >
                  {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                </button>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.14em] text-[#0B7A5A]">
                SEDE OPERACIONAL
              </span>
              <p className="text-[14.5px] text-[#1E1E1E] leading-[1.5]">
                {ENDERECO}
              </p>
              <p className="text-[12.5px] text-[#1E1E1E]/60">
                Atendimento presencial em João Monlevade, Médio Piracicaba e projetos em todo o país.
              </p>
            </div>

          </motion.div>

          {/* Lado Direito: Formulário com estética Paper White (#ffffff) */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-[24px] bg-white p-8 lg:col-span-6 border border-[#0B7A5A]/25 shadow-sm"
          >
            <h3 className="text-[19px] font-semibold text-[#1E1E1E]">
              Solicitar Proposta ou Vistoria Técnica
            </h3>
            <p className="mt-1 text-[13.5px] text-[#1E1E1E]/70">
              Preencha para atendimento direto com os engenheiros no WhatsApp:
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-[12px] font-medium uppercase tracking-[0.08em] text-[#1E1E1E]">
                  Seu Nome / Razão Social
                </label>
                <input
                  type="text"
                  required
                  value={form.nome}
                  onChange={(e) => setForm({ ...form, nome: e.target.value })}
                  placeholder="Ex: Carlos Silva ou Construtora Alfa"
                  className="mt-1.5 w-full rounded-[10px] border border-[#0B7A5A]/30 bg-[#F8FAF9] px-4 py-3 text-[14px] text-[#1E1E1E] placeholder-gray-400 transition focus:border-[#0B7A5A] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[12px] font-medium uppercase tracking-[0.08em] text-[#1E1E1E]">
                  Tipo de Serviço Necessário
                </label>
                <select
                  value={form.servico}
                  onChange={(e) => setForm({ ...form, servico: e.target.value })}
                  className="mt-1.5 w-full rounded-[10px] border border-[#0B7A5A]/30 bg-[#F8FAF9] px-4 py-3 text-[14px] text-[#1E1E1E] transition focus:border-[#0B7A5A] focus:outline-none"
                >
                  <option value="Projetos Elétricos (NBR 5410)">Projetos Elétricos (NBR 5410)</option>
                  <option value="Laudos Técnicos e NR-10">Laudos Técnicos (NR-10 & SPDA NBR 5419)</option>
                  <option value="Controle e Automação Industrial">Controle e Automação Industrial</option>
                  <option value="Consultoria Técnica e Eficiência">Consultoria Técnica e Eficiência</option>
                  <option value="Outro Assunto Técnico">Outro Assunto Técnico</option>
                </select>
              </div>

              <div>
                <label className="block text-[12px] font-medium uppercase tracking-[0.08em] text-[#1E1E1E]">
                  Breve Descrição do Projeto
                </label>
                <textarea
                  rows={3}
                  value={form.mensagem}
                  onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                  placeholder="Conte resumidamente o que você precisa..."
                  className="mt-1.5 w-full resize-none rounded-[10px] border border-[#0B7A5A]/30 bg-[#F8FAF9] px-4 py-3 text-[14px] text-[#1E1E1E] placeholder-gray-400 transition focus:border-[#0B7A5A] focus:outline-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#0B7A5A] px-6 py-4 text-[14px] font-semibold text-white shadow-md shadow-[#0B7A5A]/30 transition hover:bg-[#075E45]"
              >
                <Send className="h-4 w-4" />
                <span>Enviar Solicitação no WhatsApp</span>
              </motion.button>

              <p className="text-center font-mono text-[11px] text-[#1E1E1E]/60">
                Atendimento direto com Marphiza Magalhães e Adeilson.
              </p>
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
