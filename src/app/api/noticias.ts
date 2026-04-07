import type { NextApiRequest, NextApiResponse } from 'next';

import { noticias } from "@/data/data-news";

export default function handler(
  req: NextApiRequest, 
  res: NextApiResponse
) {
  res.status(200).json(noticias);
}
