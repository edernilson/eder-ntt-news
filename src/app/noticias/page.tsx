import { newsService } from "@/services/newsService";
import NewsCard from "@/components/ui/NewsCard";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { CATEGORIAS_FILTRO } from "@/constants/navigation";
import Link from "next/link";

interface NewsPageProps {
  searchParams: Promise<{
    categoria?: string;
  }>;
}

export default async function NewsPage({ searchParams }: NewsPageProps) {
  const { categoria } = await searchParams;
  
  // Se houver uma categoria selecionada, filtramos. Caso contrário, pegamos todas.
  const allPosts = categoria 
    ? await newsService.getPostsByCategory(categoria)
    : await newsService.getAllPosts();

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: "Notícias" }]} />

      <header className="mb-10">
        <h1 className="text-4xl font-black uppercase tracking-tighter mb-6">
          Todas as <span className="text-primary">Notícias</span>
        </h1>

        {/* Filtros em Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          <Link
            href="/noticias"
            className={`px-4 py-2 rounded-full text-xs font-bold uppercase transition-all border ${
              !categoria 
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
                categoria === cat.toLowerCase()
                  ? "bg-primary border-primary text-white shadow-md"
                  : "bg-white border-gray-200 text-text-secondary hover:border-primary hover:text-primary"
              }`}
            >
              {cat}
            </Link>
          ))}
        </div>
      </header>

      {allPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allPosts.map((post) => (
            <NewsCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="bg-gray-50 p-20 text-center rounded-lg border-2 border-dashed border-gray-200">
          <svg className="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l4 4v10a2 2 0 01-2 2z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14 2v4a2 2 0 002 2h4" />
          </svg>
          <p className="text-text-secondary font-medium">Nenhuma notícia encontrada nesta categoria.</p>
          <Link href="/noticias" className="text-primary font-bold uppercase text-xs mt-4 inline-block hover:underline">
            Limpar filtros
          </Link>
        </div>
      )}
    </div>
  );
}
