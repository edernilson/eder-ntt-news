import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Loading from "@/components/ui/Loading";
import { Suspense } from "react";
import FilteredNewsSection from "@/components/sections/FilteredNewsSection";

interface CategoryPageProps {
  params: Promise<{
    categoria: string;
  }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { categoria } = await params;
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
        <FilteredNewsSection categoria={categoria} />
      </Suspense>
    </div>
  );
}
