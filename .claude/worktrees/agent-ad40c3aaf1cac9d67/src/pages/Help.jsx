import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Shield, HelpCircle, MessageCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { LanguageContext } from '../contexts/LanguageContext';
import SupportModal from '../components/SupportModal';
import { getCert } from '../data/certifications';

const FAQS_COMMON = [
  {
    q: 'Como funciona o sistema de Revisão Inteligente?',
    a: 'O sistema utiliza Repetição Espaçada (SRS). Quando você erra uma questão durante o estudo, ela vai automaticamente para sua Fila de Revisão para o dia seguinte. Questões acertadas na revisão retornam em 3 dias, focando seu tempo onde você mais precisa.'
  },
  {
    q: 'O que significa a porcentagem de "Taxa de Acerto"?',
    a: 'Seu aproveitamento é calculado dividindo o total de questões corretas pelo total de questões respondidas. A meta recomendada para aprovação nas provas Microsoft é manter acima de 70%.'
  },
  {
    q: 'Posso alternar entre certificações?',
    a: 'Sim! Clique no botão "Trocar Certificação" na navbar superior ou acesse o Hub de Certificações. Cada certificação mantém seu histórico, progresso e fila de revisão de forma independente.'
  },
  {
    q: 'Como funcionam as Metas Diárias?',
    a: 'A meta padrão é de 10 questões por dia. Cumprir a meta diária mantém sua ofensiva (streak). Acompanhe no card "Meta Diária" no Dashboard.'
  },
  {
    q: 'A nota de corte da prova real é 700. O simulador usa o mesmo critério?',
    a: 'Sim! O simulador usa exatamente a nota de corte de 700/1000 para marcar uma simulação como "Aprovado" ou "Reprovado", replicando o critério oficial da Microsoft.'
  },
];

export default function Help({ session }) {
  const { certId } = useParams();
  const { t } = useContext(LanguageContext);
  const certConfig = getCert(certId);
  const [openFaq, setOpenFaq] = useState(null);
  const [showSupport, setShowSupport] = useState(false);

  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

  return (
    <div className="min-h-screen bg-slate-50 pt-8 pb-24 md:pb-10">
      <div className="max-w-4xl mx-auto px-4">

        {/* Header Banner */}
        <div className={`bg-gradient-to-br ${certConfig?.gradient || 'from-blue-700 to-blue-900'} rounded-[3rem] p-10 md:p-14 text-white shadow-2xl relative overflow-hidden mb-12`}>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-[2rem] flex items-center justify-center border border-white/20 shrink-0">
              <Shield size={40} className="text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-black mb-2">Central de Ajuda</h1>
              {certConfig && (
                <p className="text-white/80 font-medium text-lg">{certConfig.name} — {certConfig.fullName}</p>
              )}
            </div>
          </div>
        </div>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="text-2xl font-black text-slate-800 mb-6 flex items-center gap-3">
            <HelpCircle className="text-blue-600" /> Perguntas Frequentes
          </h2>
          <div className="space-y-3">
            {FAQS_COMMON.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between font-bold text-slate-800 hover:bg-slate-50 transition-colors"
                >
                  <span className="pr-4">{faq.q}</span>
                  {openFaq === i ? <ChevronUp size={18} className="shrink-0 text-blue-600" /> : <ChevronDown size={18} className="shrink-0 text-slate-400" />}
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6">
                    <p className="text-slate-600 font-medium leading-relaxed border-t border-slate-100 pt-4">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Contato */}
        <section>
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 text-center">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <MessageCircle size={32} />
            </div>
            <h3 className="text-xl font-black text-slate-800 mb-2">Ainda tem dúvidas?</h3>
            <p className="text-slate-500 font-medium mb-6">Entre em contato com nossa equipe de suporte.</p>
            <button
              onClick={() => setShowSupport(true)}
              className="bg-slate-900 hover:bg-black text-white font-black py-4 px-8 rounded-2xl transition-all shadow-xl"
            >
              ABRIR CHAMADO DE SUPORTE
            </button>
          </div>
        </section>
      </div>

      <SupportModal
        isOpen={showSupport}
        onClose={() => setShowSupport(false)}
        userSession={session}
        initialSubject={certConfig ? `Suporte — ${certConfig.name}` : 'Suporte'}
      />
    </div>
  );
}
