'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { MAIN_NAV, CATEGORIAS_NAV } from '@/constants/navigation';
import { Menu, X, Search } from 'lucide-react';

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/busca?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="w-full border-b border-gray-200 sticky top-0 z-50 bg-white">
      {/* Linha Superior: Logo e Busca/Hambúrguer */}
      <div className="bg-white py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4 md:gap-8">
              {/* Menu Hambúrguer (Mobile) */}
              <button 
                className="md:hidden p-2 text-text-main hover:bg-gray-100 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>

              <Link href="/" className="text-xl md:text-2xl font-bold text-primary tracking-tighter uppercase" onClick={() => setIsMenuOpen(false)}>
                Portal<span className="text-text-main">Notícias</span>
              </Link>
              
              {/* Navegação Desktop */}
              <nav className="hidden md:flex items-center gap-6" aria-label="Menu principal">
                {MAIN_NAV.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm font-medium text-text-secondary hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Busca Desktop (Exibida apenas em telas largas ao lado do menu) */}
            <div className="hidden lg:block">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Buscar notícias..."
                  className="pl-4 pr-10 py-1.5 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent w-64 transition-all"
                />
                <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-primary transition-colors">
                  <Search size={16} />
                </button>
              </form>
            </div>

            {/* Ícone de Busca Mobile (Apenas um placeholder ou gatilho se necessário, mas vamos exibir a barra abaixo) */}
            <div className="lg:hidden flex items-center">
              {/* Espaço reservado para manter o alinhamento se necessário */}
            </div>
          </div>

          {/* Linha de Busca Mobile/Tablet (Exibida abaixo do logo em telas menores que LG) */}
          <div className="mt-3 lg:hidden">
            <form onSubmit={handleSearch} className="relative w-full">
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="O que você está procurando?"
                className="w-full pl-4 pr-10 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
              <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                <Search size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Menu Mobile Overlay */}
      <div className={`fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsMenuOpen(false)} />
      
      <div className={`fixed top-0 left-0 w-[280px] h-full bg-white z-50 md:hidden transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <span className="text-xl font-bold text-primary tracking-tighter uppercase">Menu</span>
            <button onClick={() => setIsMenuOpen(false)} className="p-2 text-text-secondary">
              <X size={24} />
            </button>
          </div>

          {/* Busca no Mobile */}
          <form onSubmit={handleSearch} className="relative mb-8">
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar..."
              className="w-full pl-4 pr-10 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
              <Search size={18} />
            </button>
          </form>

          <nav className="flex flex-col gap-4 mb-8">
            <p className="text-[10px] font-bold uppercase text-gray-400 tracking-widest border-b border-gray-100 pb-2">Navegação</p>
            {MAIN_NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-lg font-bold text-text-main hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <nav className="flex flex-col gap-4">
            <p className="text-[10px] font-bold uppercase text-gray-400 tracking-widest border-b border-gray-100 pb-2">Categorias</p>
            <div className="grid grid-cols-2 gap-2">
              {CATEGORIAS_NAV.map((cat) => (
                <Link
                  key={cat}
                  href={`/noticias/${cat.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-xs font-semibold text-text-secondary hover:text-primary py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {cat}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>

      {/* Linha Inferior: Categorias (Desktop) */}
      <div className="hidden md:block bg-gray-50 border-t border-gray-200 overflow-x-auto">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between min-w-max py-2 gap-4" aria-label="Categorias">
            {CATEGORIAS_NAV.map((cat) => (
              <Link
                key={cat}
                href={`/noticias/${cat.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-xs font-bold uppercase text-text-main hover:text-primary transition-colors whitespace-nowrap"
              >
                {cat}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
