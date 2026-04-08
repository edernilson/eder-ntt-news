import { CATEGORIAS_FILTRO } from "@/types/categorias-filtro";

export type Noticia = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  imageAlt: string;
  category: typeof CATEGORIAS_FILTRO[number];
  date: string;
  section: string;
};