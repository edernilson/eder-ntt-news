'use client';

import { useEffect } from 'react';
import { AlertTriangle, RefreshCw, Home, LifeBuoy } from 'lucide-react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application Error:', error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 py-16 text-center bg-slate-background">
      <div className="max-w-2xl w-full bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-red-100 relative overflow-hidden">
        {/* Error Header Bar */}
        <div className="absolute top-0 left-0 w-full h-2 bg-red-600"></div>
        
        <div className="relative mb-8 inline-block">
          <div className="bg-red-50 p-6 rounded-full">
            <AlertTriangle size={80} className="text-red-600 animate-pulse" />
          </div>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-black text-slate-header mb-4 uppercase tracking-tighter leading-tight">
          Interrupção na <span className="text-red-600">Transmissão!</span>
        </h1>
        
        <p className="text-lg text-gray-600 mb-8 font-serif">
          Houve um problema técnico ao carregar esta seção. Nossa equipe de TI já foi notificada e está trabalhando para restabelecer o sinal.
        </p>

        {error.digest && (
          <div className="mb-8 p-3 bg-gray-50 rounded border border-gray-100">
            <p className="text-xs text-gray-400 font-mono">ID do Erro: {error.digest}</p>
          </div>
        )}

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => reset()}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-header hover:bg-black text-white px-8 py-3 rounded-lg font-bold transition-all shadow-md active:scale-95"
          >
            <RefreshCw size={18} />
            Tentar Novamente
          </button>
          
          <Link 
            href="/"
            className="w-full sm:w-auto flex items-center justify-center gap-2 border-2 border-gray-200 hover:border-primary hover:text-primary text-slate-header px-8 py-3 rounded-lg font-bold transition-all bg-white"
          >
            <Home size={18} />
            Ir para o Início
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col items-center">
          <Link 
            href="/contato" 
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-primary transition-colors font-medium"
          >
            <LifeBuoy size={16} />
            Relatar falha persistente ao suporte
          </Link>
        </div>
      </div>
      
      <div className="mt-10 text-gray-400 text-sm font-medium flex items-center gap-4 opacity-50">
        <span className="uppercase tracking-widest text-red-900/50">Falha no Sistema</span>
        <span className="w-1.5 h-1.5 bg-red-200 rounded-full"></span>
        <span>Modo de Emergência</span>
      </div>
    </div>
  );
}
