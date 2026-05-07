import { newsService } from "@/services/newsService";
import Link from "next/link";
import NewsList from "@/components/ui/NewsList";
import { Suspense } from "react";
import Loading from "../components/ui/Loading";

export default async function Home() {
  const latestPosts = await newsService.getLatestPosts(9);
    
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Feed Geral de Notícias */}
      <section>
        <div className="flex items-center justify-between border-b-2 border-gray-900 mb-8 pb-2">
          <h2 className="text-2xl font-black uppercase tracking-tighter">
            Últimas <span className="text-primary">Notícias</span>
          </h2>
          <Link href="/noticias" className="text-xs font-bold uppercase text-primary hover:underline">
            Ver tudo
          </Link>
        </div>

        <Suspense fallback={<Loading />}>
          <NewsList allPosts={latestPosts} />
        </Suspense>
      </section>

      <section className="mt-16 bg-gray-50 p-8 rounded-lg">
        <h3 className="text-center text-sm font-bold text-text-secondary uppercase tracking-[0.2em] mb-8">
          Tópicos em Destaque
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          {["Mercado", "Tecnologia", "Política", "Esportes", "Cultura", "Agro"].map((topico) => (
            <Link
              key={topico}
              href={`/noticias/${topico.toLowerCase()}`}
              className="px-6 py-2 bg-white border border-gray-200 rounded-full text-sm font-semibold hover:border-primary hover:text-primary transition-all shadow-sm"
            >
              {topico}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
