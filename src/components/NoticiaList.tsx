"use client";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

import { Noticia } from "@/types/noticia";
import Image from "next/image";

export default function NoticiaList() {
  const [noticias, setNoticias] = useState<Noticia[]>([]);

  useEffect(() => {
    async function fetchNoticias() {
      const response = await fetch("/api/noticias");
      // if (!response.ok) throw new Error("Failed to fetch");
      const data = await response.json();
      console.log("TETE", data);
      setNoticias(data);
    }
    fetchNoticias();
  }, []);

  return (
    <Grid container spacing={2}>
      {noticias.map((noticia) => (
        <Grid size={{ xs: 2, sm: 4, md: 4 }} key={noticia.slug}>
          <Card key={noticia.slug} sx={{ maxWidth: 345 }}>
            <Image src={noticia.imageUrl} alt={noticia.imageAlt} height={140} />
            <CardContent>
              <Typography component="div" sx={{ color: 'text.primary', fontSize: '0.6rem', fontWeight: 'bold' }}>
                {noticia.category}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary", fontWeight: 'bold' }}>
                {noticia.excerpt}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
