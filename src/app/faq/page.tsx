'use client';

import { useState } from 'react';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Como posso enviar uma sugestão de pauta?",
    answer: "Você pode enviar sugestões de pauta através da nossa página de Contato ou diretamente pelo e-mail pauta@portalnoticias.com.br. Nossa equipe de redação avalia todas as sugestões recebidas."
  },
  {
    question: "As notícias são atualizadas em tempo real?",
    answer: "Sim, nossa equipe trabalha 24 horas por dia para garantir que as informações mais relevantes cheguem até você assim que os fatos acontecem, especialmente nas categorias 'Ao Vivo' e 'Política'."
  },
  {
    question: "Como faço para anunciar no Portal de Notícias?",
    answer: "Para parcerias comerciais e anúncios, acesse nossa área de 'Mídia Kit' no rodapé ou entre em contato pelo e-mail comercial@portalnoticias.com.br para solicitar nossa tabela de preços e formatos disponíveis."
  },
  {
    question: "O portal possui aplicativo para celular?",
    answer: "Atualmente nosso portal é totalmente responsivo e otimizado para navegadores móveis. Estamos em fase de desenvolvimento dos aplicativos nativos para iOS e Android, com previsão de lançamento para o próximo semestre."
  },
  {
    question: "Como posso verificar a veracidade de uma informação?",
    answer: "O Portal de Notícias preza pela ética jornalística. Todas as nossas matérias passam por um rigoroso processo de checagem (fact-checking) antes da publicação, citando fontes oficiais e documentos sempre que possível."
  }
];

function AccordionItem({ item, isOpen, onClick }: { item: FAQItem, isOpen: boolean, onClick: () => void }) {
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        className="w-full py-6 flex items-center justify-between text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-primary' : 'text-text-main group-hover:text-primary'}`}>
          {item.question}
        </span>
        <span className={`ml-4 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : 'text-gray-400'}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
        </span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-text-secondary leading-relaxed">
          {item.answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <Breadcrumbs items={[{ label: "FAQ" }]} />

      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">
          Perguntas <span className="text-primary">Frequentes</span>
        </h1>
        <p className="text-text-secondary text-lg">
          Tire suas dúvidas sobre o funcionamento do nosso portal e como interagir com nossa redação.
        </p>
      </header>

      <section className="bg-white border border-gray-100 rounded-xl shadow-sm px-6 md:px-8">
        {faqData.map((item, index) => (
          <AccordionItem 
            key={index} 
            item={item} 
            isOpen={openIndex === index} 
            onClick={() => toggleItem(index)} 
          />
        ))}
      </section>

    </div>
  );
}
