"use client";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Image from "next/image";

import { Noticia } from "@/types/noticia";

export default function NoticiaList() {
  const [noticias, setNoticias] = useState<Noticia[]>([]);

  useEffect(() => {
    async function fetchNoticias() {
      const response = await fetch("/api/noticias");
      const data = await response.json();
      setNoticias(data);
    }
    fetchNoticias();
  }, []);

  return (
    <Grid container spacing={{ xs: 2, md: 3 }} sx={{ display: 'flex', justifyContent: 'center' }}>
      {noticias.map((noticia, index) => (
        <Grid columns={{ xs: 12, sm: 6, md: 4 }} key={noticia.slug}>
          <Card key={noticia.slug} sx={{ maxWidth: 345, width: '100%' }}>
              <Image
                src={noticia.imageUrl}
                alt={noticia.imageAlt}
                width={800}
                height={400}
                priority={index < 3}
                style={{
                  width: "100%",
                  height: 140,
                  objectFit: "cover",
                }}
              />
            <CardContent>
              <Typography
                component="div"
                sx={{
                  color: "text.primary",
                  fontSize: "0.6rem",
                  fontWeight: "bold",
                }}
              >
                {noticia.category}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary", fontWeight: "bold" }}
              >
                {noticia.excerpt}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
