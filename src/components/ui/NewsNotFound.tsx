import Link from "next/link";

interface NewsNotFoundProps {
  query?: string;
  categoria?: string;
  message?: string;
}

export default function NewsNotFound({ query, categoria, message }: NewsNotFoundProps) {
    const title = "Puxa, não encontramos nada!";
    let description = message || "Tente usar termos mais genéricos ou verifique se as palavras estão corretas.";

    if (query) {
      description = `Não encontramos resultados para "${query}". ${description}`;
    } else if (categoria) {
      description = `Nenhuma notícia encontrada na categoria "${categoria}".`;
    }

    return (
        <div className="bg-gray-50 p-20 text-center rounded-xl border border-gray-100">
          <div className="max-w-md mx-auto">
            <h2 className="text-xl font-bold text-text-main mb-4">{title}</h2>
            <p className="text-text-secondary mb-8 leading-relaxed">
              {description}
            </p>
            <div className="space-y-4">
              <p className="text-xs font-bold uppercase tracking-widest text-text-secondary mb-4">Sugestões de tópicos:</p>
              <div className="flex flex-wrap justify-center gap-2">
                {["Tecnologia", "Política", "Esportes", "Mercado"].map(topic => (
                  <Link 
                    key={topic}
                    href={categoria ? `/noticias/${topic.toLowerCase()}` : `/busca?q=${topic}`}
                    className="px-4 py-2 bg-white border border-gray-200 rounded-full text-xs font-bold uppercase hover:border-primary hover:text-primary transition-all"
                  >
                    {topic}
                  </Link>
                ))}
              </div>
            </div>
            <Link 
              href="/" 
              className="inline-block mt-12 text-primary font-bold uppercase text-xs hover:underline"
            >
              Voltar para a Home
            </Link>
          </div>
        </div>        
    );
}
