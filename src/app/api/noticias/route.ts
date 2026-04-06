import { noticias } from "@/data/data-news";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(noticias);
}
