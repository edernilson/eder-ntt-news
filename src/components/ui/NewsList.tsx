import NewsCard from "./NewsCard";
import { Post } from "@/types/post";

interface NewsListProps {
  allPosts: Post[];
}

export default function NewsList({ allPosts }: NewsListProps) {
  const existsPosts = allPosts;
  
  if (existsPosts.length > 0) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {existsPosts.map((post) => (
          <NewsCard key={post.slug} post={post} />
        ))}
      </div>
    );
  }
}
