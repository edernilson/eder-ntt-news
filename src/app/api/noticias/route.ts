import { noticias } from "@/data/data-news";
import { NextResponse, type NextRequest } from "next/server";

const normalizeCategoria = (value: string) => value.trim().toLowerCase();

export async function GET(request: NextRequest) {
  const rawCategoria = request.nextUrl.searchParams.get("categoria");
  const categoria = rawCategoria?.trim();

  if (categoria) {
    const noticiasFiltradas = noticias.filter(noticia => noticia.category.toLowerCase() === categoria);
    return NextResponse.json(noticiasFiltradas);
  } else {
    return NextResponse.json(normalizeCategoria);
  }
}
