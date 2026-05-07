import { newsService } from "@/services/newsService";
import NewsCard from "@/components/ui/NewsCard";
import NewsNotFound from "@/components/ui/NewsNotFound";

interface SearchResultsSectionProps {
  query?: string;
}

export default async function SearchResultsSection({ query }: SearchResultsSectionProps) {
  const results = query ? await newsService.searchPosts(query) : [];

  if (results.length === 0) {
    return <NewsNotFound query={query} />;
  }

  return (
    <div>
      <p className="text-text-secondary text-sm font-medium mb-8">
        Encontramos {results.length} {results.length === 1 ? 'notícia' : 'notícias'} para sua pesquisa.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {results.map((post) => (
          <NewsCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
