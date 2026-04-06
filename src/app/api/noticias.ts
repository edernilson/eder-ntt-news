import { noticias } from "@/data/data-news";

export default function handler(req, res) {
  res.status(200).json(noticias);
}
