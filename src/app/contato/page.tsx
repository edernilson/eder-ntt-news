'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { AlertCircle, CheckCircle2, Send, Loader2 } from 'lucide-react';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import RedesSociais from '@/components/ui/RedesSociais';

// Schema de validação com Zod
const contactSchema = z.object({
  nome: z.string().min(3, 'O nome deve ter pelo menos 3 caracteres'),
  email: z.string().email('Insira um e-mail válido'),
  assunto: z.string().min(1, 'Selecione um assunto'),
  mensagem: z.string().min(10, 'A mensagem deve ter pelo menos 10 caracteres'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulação de envio para API
    try {
      console.log('Dados do formulário:', data);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      reset();
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Breadcrumbs items={[{ label: "Contato" }]} />

      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">
          Fale <span className="text-primary">Conosco</span>
        </h1>
        <p className="text-text-secondary text-lg max-w-2xl">
          Tem uma sugestão de pauta, crítica ou quer anunciar conosco? Preencha o formulário abaixo e nossa equipe entrará em contato.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Informações de Contato */}
        <div className="lg:col-span-1 space-y-8">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Redação</h3>
            <p className="text-text-main font-medium">redacao@portalnoticias.com.br</p>
            <p className="text-text-secondary text-sm mt-1">Sugestões de pautas e releases</p>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Comercial</h3>
            <p className="text-text-main font-medium">comercial@portalnoticias.com.br</p>
            <p className="text-text-secondary text-sm mt-1">Anúncios e parcerias</p>
          </div>
          <div className="pt-8 border-t border-gray-100">
            <h3 className="text-sm font-bold uppercase tracking-widest text-text-main mb-4">Siga-nos</h3>
            <RedesSociais />
          </div>
        </div>

        {/* Formulário */}
        <div className="lg:col-span-2">
          {submitStatus === 'success' ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center animate-in fade-in zoom-in duration-300">
              <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-green-900 mb-2">Mensagem enviada!</h2>
              <p className="text-green-700 mb-6">Agradecemos o seu contato. Nossa equipe responderá em breve.</p>
              <button 
                onClick={() => setSubmitStatus('idle')}
                className="text-green-800 font-bold uppercase text-sm hover:underline"
              >
                Enviar outra mensagem
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Campo Nome */}
              <div className="relative">
                <label htmlFor="nome" className="block text-sm font-bold text-text-main mb-2 uppercase tracking-wide">
                  Nome Completo <span className="text-primary">*</span>
                </label>
                <input
                  {...register('nome')}
                  id="nome"
                  type="text"
                  placeholder="Seu nome"
                  className={`w-full px-4 py-3 rounded-lg border bg-white transition-all outline-none focus:ring-2 ${
                    errors.nome ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:ring-primary/20 focus:border-primary'
                  }`}
                />
                {errors.nome && (
                  <p className="mt-1 text-xs font-medium text-red-500 flex items-center gap-1">
                    <AlertCircle size={12} /> {errors.nome.message}
                  </p>
                )}
              </div>

              {/* Campo E-mail */}
              <div className="relative">
                <label htmlFor="email" className="block text-sm font-bold text-text-main mb-2 uppercase tracking-wide">
                  E-mail Profissional <span className="text-primary">*</span>
                </label>
                <input
                  {...register('email')}
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  className={`w-full px-4 py-3 rounded-lg border bg-white transition-all outline-none focus:ring-2 ${
                    errors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:ring-primary/20 focus:border-primary'
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-xs font-medium text-red-500 flex items-center gap-1">
                    <AlertCircle size={12} /> {errors.email.message}
                  </p>
                )}
              </div>

              {/* Campo Assunto */}
              <div className="relative">
                <label htmlFor="assunto" className="block text-sm font-bold text-text-main mb-2 uppercase tracking-wide">
                  Assunto <span className="text-primary">*</span>
                </label>
                <select
                  {...register('assunto')}
                  id="assunto"
                  className={`w-full px-4 py-3 rounded-lg border bg-white transition-all outline-none focus:ring-2 appearance-none ${
                    errors.assunto ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:ring-primary/20 focus:border-primary'
                  }`}
                >
                  <option value="">Selecione uma opção</option>
                  <option value="pauta">Sugestão de Pauta</option>
                  <option value="comercial">Comercial / Anúncios</option>
                  <option value="erro">Relatar Erro</option>
                  <option value="outro">Outros</option>
                </select>
                {errors.assunto && (
                  <p className="mt-1 text-xs font-medium text-red-500 flex items-center gap-1">
                    <AlertCircle size={12} /> {errors.assunto.message}
                  </p>
                )}
              </div>

              {/* Campo Mensagem */}
              <div className="relative">
                <label htmlFor="mensagem" className="block text-sm font-bold text-text-main mb-2 uppercase tracking-wide">
                  Mensagem <span className="text-primary">*</span>
                </label>
                <textarea
                  {...register('mensagem')}
                  id="mensagem"
                  rows={5}
                  placeholder="Como podemos ajudar?"
                  className={`w-full px-4 py-3 rounded-lg border bg-white transition-all outline-none focus:ring-2 resize-none ${
                    errors.mensagem ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:ring-primary/20 focus:border-primary'
                  }`}
                />
                {errors.mensagem && (
                  <p className="mt-1 text-xs font-medium text-red-500 flex items-center gap-1">
                    <AlertCircle size={12} /> {errors.mensagem.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-white font-bold uppercase py-4 rounded-lg flex items-center justify-center gap-2 transition-all hover:bg-red-800 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-red-700/20 active:scale-[0.98]"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Enviar Mensagem
                  </>
                )}
              </button>

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm flex items-center gap-2">
                  <AlertCircle size={16} />
                  Ocorreu um erro ao enviar sua mensagem. Tente novamente mais tarde.
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
