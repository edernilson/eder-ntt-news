'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from "lucide-react";

import { MAIN_NAV, CATEGORIAS_NAV } from '@/constants/navigation';
import Logo from './Logo';
import MenuCategoriaDesktop from '../ui/MenuCategoriaDesktop';
import MenuCategoriaMobile from '../ui/MenuCategoriaMobile';
import SearchForm from '../ui/SearchForm';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full border-b border-gray-200 sticky top-0 z-50 bg-white">
      {/* Linha Superior: Logo e Busca/Hambúrguer */}
      <div className="bg-white py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between gap-4">

            <Logo setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen}/>

            {/* Busca Desktop */}
            <SearchForm 
              containerClassName="hidden lg:block"
              placeholder="Buscar notícias..."
              inputClassName="pl-4 pr-10 py-1.5 border border-gray-300 rounded-full text-sm w-64"
              iconSize={16}
            />

            {/* Ícone de Busca Mobile (Apenas um placeholder ou gatilho se necessário, mas vamos exibir a barra abaixo) */}
            <div className="lg:hidden flex items-center">
              {/* Espaço reservado para manter o alinhamento se necessário */}
            </div>
          </div>

          {/* Linha de Busca Mobile/Tablet */}
          <SearchForm 
            containerClassName="mt-3 lg:hidden"
            placeholder="O que você está procurando?"
            inputClassName="w-full pl-4 pr-10 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50"
            iconSize={18}
          />
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

          {/* Busca no Mobile (Menu) */}
          <SearchForm 
            containerClassName="mb-8"
            placeholder="Buscar..."
            inputClassName="w-full pl-4 pr-10 py-2 border border-gray-200 rounded-lg text-sm"
            iconSize={18}
            onSearchSuccess={() => setIsMenuOpen(false)}
          />

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

          <MenuCategoriaMobile items={CATEGORIAS_NAV} setIsMenuOpen={setIsMenuOpen} />
        </div>
      </div>

      <MenuCategoriaDesktop items={CATEGORIAS_NAV} />
    </header>
  );
}
