import { newsService } from "@/services/newsService";
import NewsCard from "@/components/ui/NewsCard";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { Search } from "lucide-react";
import NewsNotFound from "@/components/ui/NewsNotFound";

interface SearchPageProps {
  searchParams: Promise<{
    q?: string;
  }>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q: query } = await searchParams;
  
  const results = query ? await newsService.searchPosts(query) : [];

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: "Busca" }]} />

      <header className="mb-10">
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-gray-100 p-3 rounded-full text-text-secondary">
            <Search size={24} />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tighter">
              Resultados para: <span className="text-primary">{query || "..."}</span>
            </h1>
            <p className="text-text-secondary text-sm font-medium mt-1">
              Encontramos {results.length} {results.length === 1 ? 'notícia' : 'notícias'} para sua pesquisa.
            </p>
          </div>
        </div>
      </header>

      {results.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {results.map((post) => (
            <NewsCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <NewsNotFound query={query} />
      )}
    </div>
  );
}
