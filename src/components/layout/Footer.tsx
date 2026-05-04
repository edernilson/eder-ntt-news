import Link from 'next/link';
import { MAIN_NAV } from '@/constants/navigation';
import RedesSociais from '@/components/ui/RedesSociais';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="text-2xl font-bold text-primary tracking-tighter uppercase mb-4">
              Portal<span className="text-text-main">Notícias</span>
            </Link>
            <p className="text-text-secondary text-sm text-center md:text-left max-w-xs">
              Sua fonte confiável de notícias sobre tecnologia, política, esportes e muito mais.
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-8" aria-label="Links úteis">
            {MAIN_NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-text-main hover:text-primary transition-colors uppercase"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <RedesSociais />
        </div>

        <div className="border-t border-gray-100 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-text-secondary">
            © {currentYear} Portal de Notícias. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <Link href="/privacidade" className="text-xs text-text-secondary hover:text-primary">Privacidade</Link>
            <Link href="/termos" className="text-xs text-text-secondary hover:text-primary">Termos de uso</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
