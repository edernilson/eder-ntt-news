import Link from "next/link";

interface MenuCategoriaProps {
  items: readonly string[];
  setIsMenuOpen: (isOpen: boolean) => void;
}

export default function MenuCategoriaDesktop({ items, setIsMenuOpen }: MenuCategoriaProps) {
  return (
    <nav className="flex flex-col gap-4">
      <p className="text-[10px] font-bold uppercase text-gray-400 tracking-widest border-b border-gray-100 pb-2">Categorias</p>
      <div className="grid grid-cols-2 gap-2">
        {items.map((cat) => (
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
  );
}
