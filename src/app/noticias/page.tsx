import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { CATEGORIAS_FILTRO } from "@/constants/navigation";
import Link from "next/link";
import { Suspense } from "react";
import Loading from "@/components/ui/Loading";
import FilteredNewsSection from "@/components/sections/FilteredNewsSection";

interface NewsPageProps {
  searchParams: Promise<{
    categoria?: string;
  }>;
}

function NewsPageHeader({ activeCategory }: { activeCategory?: string }) {
  return (
    <header className="mb-10">
      <h1 className="text-4xl font-black uppercase tracking-tighter mb-6">
        Todas as <span className="text-primary">Notícias</span>
      </h1>

      <div className="flex flex-wrap gap-2 mb-8">
        <Link
          href="/noticias"
          className={`px-4 py-2 rounded-full text-xs font-bold uppercase transition-all border ${
            !activeCategory 
              ? "bg-primary border-primary text-white shadow-md" 
              : "bg-white border-gray-200 text-text-secondary hover:border-primary hover:text-primary"
          }`}
        >
          Tudo
        </Link>
        {CATEGORIAS_FILTRO.map((cat) => (
          <Link
            key={cat}
            href={`/noticias?categoria=${cat.toLowerCase()}`}
            className={`px-4 py-2 rounded-full text-xs font-bold uppercase transition-all border ${
              activeCategory === cat.toLowerCase()
                ? "bg-primary border-primary text-white shadow-md"
                : "bg-white border-gray-200 text-text-secondary hover:border-primary hover:text-primary"
            }`}
          >
            {cat}
          </Link>
        ))}
      </div>
    </header>
  );
}

export default async function NewsPage({ searchParams }: NewsPageProps) {
  const { categoria } = await searchParams;
  
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: "Notícias" }]} />

      <NewsPageHeader activeCategory={categoria} />

      <Suspense fallback={<Loading />}>
        <FilteredNewsSection categoria={categoria} />
      </Suspense>
    </div>
  );
}
