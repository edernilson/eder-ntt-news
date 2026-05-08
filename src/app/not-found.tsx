'use client';

import Link from 'next/link';
import { Newspaper, Home, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import SearchForm from '@/components/ui/SearchForm';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 py-16 text-center bg-slate-background">
      <div className="max-w-3xl w-full bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden">
        {/* Newspaper Texture Effect (Simplified) */}
        <div className="absolute top-0 left-0 w-full h-2 bg-primary"></div>
        
        <div className="relative mb-10 inline-block">
          <Newspaper size={140} className="text-gray-100" strokeWidth={1} />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-7xl font-black text-primary leading-none">404</span>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-slate-header mt-1">Status Code</span>
          </div>
        </div>
        
        <h1 className="text-3xl md:text-5xl font-black text-slate-header mb-6 uppercase tracking-tighter leading-tight">
          Edição Extra: <span className="text-primary block md:inline">Página não encontrada!</span>
        </h1>
        
        <div className="w-24 h-1 bg-gray-200 mx-auto mb-8"></div>
        
        <p className="text-lg md:text-xl text-gray-600 max-w-xl mx-auto mb-12 leading-relaxed font-serif">
          Nossa equipe de busca vasculhou todos os arquivos da redação, mas parece que esta manchete foi removida ou o link que você seguiu está fora de circulação.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded-lg font-bold transition-all shadow-md hover:shadow-lg active:scale-95"
          >
            <Home size={20} />
            Página Inicial
          </Link>
          <button 
            onClick={() => router.back()}
            className="w-full sm:w-auto flex items-center justify-center gap-2 border-2 border-gray-200 hover:border-primary hover:text-primary text-slate-header px-10 py-4 rounded-lg font-bold transition-all bg-white"
          >
            <ArrowLeft size={20} />
            Voltar Atrás
          </button>
        </div>

        <div className="mt-12 flex flex-col items-center">
          <p className="text-sm text-gray-400 mb-4 font-medium">Ou tente uma nova busca:</p>
          <SearchForm 
            containerClassName="w-full max-w-md"
            placeholder="O que você está procurando?"
            inputClassName="pl-5 pr-12 py-3 border border-gray-200 rounded-full shadow-inner bg-gray-50"
            iconSize={20}
          />
        </div>
      </div>
      
      <div className="mt-10 text-gray-400 text-sm font-medium flex items-center gap-4 opacity-50">
        <span className="uppercase tracking-widest">Portal Notícias</span>
        <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
        <span>Redação 24h</span>
      </div>
    </div>
  );
}
