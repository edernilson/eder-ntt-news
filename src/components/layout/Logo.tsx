"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";

import { MAIN_NAV } from "@/constants/navigation";

export default function Logo({
  setIsMenuOpen,
  isMenuOpen,
}: {
  setIsMenuOpen: (value: boolean) => void;
  isMenuOpen: boolean;
}) {
  return (
    <div className="flex items-center gap-4 md:gap-8">
      {/* Menu Hambúrguer (Mobile) */}
      <button
        className="md:hidden p-2 text-text-main hover:bg-gray-100 rounded-lg transition-colors"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <Link
        href="/"
        className="text-xl md:text-2xl font-bold text-primary tracking-tighter uppercase"
        onClick={() => setIsMenuOpen(false)}
      >
        Portal<span className="text-text-main">Notícias</span>
      </Link>

      {/* Navegação Desktop */}
      <nav
        className="hidden md:flex items-center gap-6"
        aria-label="Menu principal"
      >
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
  );
}
