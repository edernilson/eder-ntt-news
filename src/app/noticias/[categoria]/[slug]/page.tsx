import { newsService } from "@/services/newsService";
import { Metadata } from "next";
import { Suspense } from "react";
import Loading from "@/components/ui/Loading";
import PostDetailSection from "@/components/sections/PostDetailSection";

interface PostPageProps {
  params: Promise<{
    categoria: string;
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await newsService.getPostBySlug(slug);

  if (!post) return { title: "Notícia não encontrada" };

  return {
    title: `${post.title} | Portal de Notícias`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.imageUrl],
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { categoria, slug } = await params;

  return (
    <Suspense fallback={<Loading />}>
      <PostDetailSection categoria={categoria} slug={slug} />
    </Suspense>
  );
}
