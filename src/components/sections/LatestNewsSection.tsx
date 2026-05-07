import { newsService } from "@/services/newsService";
import NewsList from "@/components/ui/NewsList";

interface LatestNewsSectionProps {
  limit?: number;
}

export default async function LatestNewsSection({ limit = 9 }: LatestNewsSectionProps) {
  const latestPosts = await newsService.getLatestPosts(limit);
  return <NewsList allPosts={latestPosts} />;
}
