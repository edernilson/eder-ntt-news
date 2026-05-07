import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { Search } from "lucide-react";
import { Suspense } from "react";
import Loading from "@/components/ui/Loading";
import SearchResultsSection from "@/components/sections/SearchResultsSection";

interface SearchPageProps {
  searchParams: Promise<{
    q?: string;
  }>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q: query } = await searchParams;
  
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
          </div>
        </div>
      </header>

      <Suspense fallback={<Loading />}>
        <SearchResultsSection query={query} />
      </Suspense>
    </div>
  );
}
