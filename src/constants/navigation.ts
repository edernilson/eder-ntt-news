// src/constants/navigation.ts

export const MAIN_NAV = [
  { label: "Home", href: "/" },
  { label: "Notícias", href: "/noticias" },
  { label: "FAQ", href: "/faq" },
  { label: "Contato", href: "/contato" },
] as const;

export const CATEGORIAS_NAV = [
  "Ao vivo", "Política", "Money", "Mundo", "Agro", "Infra", "Esportes", "Viagem & Gastronomia"
] as const;

export const TOPICOS_DESTAQUE = [
  "Mercado", "Tecnologia", "Política", "Esportes", "Cultura", "Agro"
] as const;

export const CATEGORIAS_FILTRO = [
  "Tecnologia", "Política", "Esportes", "Money", "Mundo", "Agro", "Cultura"
] as const;
