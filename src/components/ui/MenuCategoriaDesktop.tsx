import Link from "next/link";

interface MenuCategoriaProps {
  items: readonly string[];
}

export default function MenuCategoriaDesktop({ items }: MenuCategoriaProps) {
  return (
    <div className="hidden md:block bg-gray-50 border-t border-gray-200 overflow-x-auto">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between min-w-max py-2 gap-4" aria-label="Categorias">
          {items.map((cat) => (
            <Link
              key={cat}
              href={`/noticias/${cat.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-xs font-bold uppercase text-text-main hover:text-primary transition-colors whitespace-nowrap"
            >
              {cat}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
