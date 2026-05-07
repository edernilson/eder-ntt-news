import { newsService } from "@/services/newsService";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface PostPageProps {
  params: {
    categoria: string;
    slug: string;
  };
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
  const post = await newsService.getPostBySlug(slug);

  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": post.title,
    "datePublished": post.date,
    "image": [post.imageUrl],
    "author": {
      "@type": "Organization",
      "name": "Portal de Notícias"
    }
  };

  return (
    <article className="container mx-auto px-4 py-8 max-w-4xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Breadcrumbs 
        items={[
          { label: "Notícias", href: "/noticias" },
          { label: post.category, href: `/noticias/${categoria}` },
          { label: post.title }
        ]} 
      />

      <header className="mb-8">
        <span className="inline-block bg-primary text-white text-xs font-bold uppercase px-3 py-1 mb-4">
          {post.category}
        </span>
        <h1 className="text-3xl md:text-5xl font-black text-text-main leading-tight mb-4">
          {post.title}
        </h1>
        <p className="text-xl text-text-secondary leading-relaxed mb-6 font-medium">
          {post.excerpt}
        </p>
        <div className="flex items-center gap-4 border-t border-b border-gray-100 py-4">
          <time dateTime={post.date} className="text-sm text-text-secondary font-bold uppercase">
            Publicado em {new Date(post.date).toLocaleDateString('pt-BR', {
              day: '2-digit',
              month: 'long',
              year: 'numeric'
            })}
          </time>
        </div>
      </header>

      <div className="relative aspect-video mb-10 overflow-hidden rounded-lg">
        <Image
          src={post.imageUrl}
          alt={post.imageAlt}
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="prose prose-lg max-w-none text-text-main leading-relaxed">
        {post.content.split('\n').map((paragraph, index) => (
          <p key={index} className="mb-6">{paragraph}</p>
        ))}
      </div>

    </article>
  );
}
