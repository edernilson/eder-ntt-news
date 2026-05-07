import { noticias } from "@/data/data-news";
import { Post } from "@/types/post";

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const newsService = {
  getAllPosts: async (): Promise<Post[]> => {
    await delay(1000);
    return noticias;
  },

  getHighlights: async (): Promise<Post[]> => {
    await delay(800);
    return noticias.filter(post => post.section === "destaque");
  },

  getLatestPosts: async (limit: number = 6): Promise<Post[]> => {
    await delay(1200);
    return [...noticias]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, limit);
  },

  getPostsByCategory: async (category: string): Promise<Post[]> => {
    await delay(1000);
    return noticias.filter(
      post => post.category.toLowerCase() === category.toLowerCase()
    );
  },

  getPostBySlug: async (slug: string): Promise<Post | undefined> => {
    await delay(500);
    return noticias.find(post => post.slug === slug);
  },

  searchPosts: async (query: string): Promise<Post[]> => {
    await delay(1000);
    const term = query.toLowerCase();
    return noticias.filter(
      post => 
        post.title.toLowerCase().includes(term) || 
        post.excerpt.toLowerCase().includes(term) ||
        post.category.toLowerCase().includes(term)
    );
  }
};
