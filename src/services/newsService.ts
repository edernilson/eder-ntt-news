import { noticias } from "@/data/data-news";
import { Post } from "@/types/post";

export const newsService = {
  getAllPosts: async (): Promise<Post[]> => {
    // Simulando um delay de rede opcional
    await new Promise(resolve => setTimeout(resolve, 1000));
    return noticias;
  },

  getHighlights: async (): Promise<Post[]> => {
    return noticias.filter(post => post.section === "destaque");
  },

  getLatestPosts: async (limit: number = 6): Promise<Post[]> => {
    return [...noticias]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, limit);
  },

  getPostsByCategory: async (category: string): Promise<Post[]> => {
    return noticias.filter(
      post => post.category.toLowerCase() === category.toLowerCase()
    );
  },

  getPostBySlug: async (slug: string): Promise<Post | undefined> => {
    return noticias.find(post => post.slug === slug);
  },

  searchPosts: async (query: string): Promise<Post[]> => {
    const term = query.toLowerCase();
    return noticias.filter(
      post => 
        post.title.toLowerCase().includes(term) || 
        post.excerpt.toLowerCase().includes(term) ||
        post.category.toLowerCase().includes(term)
    );
  }
};
