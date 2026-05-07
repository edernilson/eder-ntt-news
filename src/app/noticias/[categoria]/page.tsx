import { newsService } from "@/services/newsService";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import NewsList from "@/components/ui/NewsList";
import Loading from "../../../components/ui/Loading";
import { Suspense } from "react";

interface CategoryPageProps {
  params: {
    categoria: string;
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { categoria } = await params;
  
  const posts = await newsService.getPostsByCategory(categoria);

  const categoryTitle = categoria.charAt(0).toUpperCase() + categoria.slice(1).replace(/-/g, ' ');

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs 
        items={[
          { label: "Notícias", href: "/noticias" },
          { label: categoryTitle }
        ]} 
      />

      <header className="mb-12 border-b-4 border-primary pb-4 w-fit">
        <h1 className="text-4xl font-black uppercase tracking-tighter">
          {categoryTitle}
        </h1>
      </header>

      <Suspense fallback={<Loading />}>
        <NewsList allPosts={posts} />
      </Suspense>

      {posts.length === 0 && (
        <div className="bg-gray-50 p-12 text-center rounded-lg">
          <p className="text-text-secondary">Nenhuma notícia encontrada nesta categoria.</p>
        </div>
      )}
    </div>
  );
}
