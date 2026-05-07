import { newsService } from "@/services/newsService";
import NewsList from "@/components/ui/NewsList";
import NewsNotFound from "@/components/ui/NewsNotFound";

interface FilteredNewsSectionProps {
  categoria?: string;
}

export default async function FilteredNewsSection({ categoria }: FilteredNewsSectionProps) {
  const posts = categoria 
    ? await newsService.getPostsByCategory(categoria)
    : await newsService.getAllPosts();

  if (posts.length === 0) {
    return <NewsNotFound categoria={categoria} />;
  }

  return <NewsList allPosts={posts} />;
}
