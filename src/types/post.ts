export interface Post {
  slug: string;      // Identificador único para a URL
  title: string;     // Título da notícia
  excerpt: string;   // Resumo para o card (Lead)
  content: string;   // Conteúdo completo da notícia
  imageUrl: string;  // Caminho da imagem (otimizada)
  imageAlt: string;  // Texto alternativo para SEO/Acessibilidade
  category: string;  // Categoria para filtro (ex: Tecnologia, Cultura)
  date: string;      // Data de publicação (Formato ISO: YYYY-MM-DD)
  section: string;   // Segmentação de UI (ex: "destaque", "geral" ou outros conforme mock)
}
