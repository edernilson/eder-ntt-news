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
    <Grid container spacing={2}>
      {noticias.map((noticia, index) => (
        <Grid size={{ xs: 2, sm: 4, md: 4 }} key={noticia.slug}>
          <Card key={noticia.slug} sx={{ maxWidth: 345 }}>
              <Image
                src={noticia.imageUrl}
                alt={noticia.imageAlt}
                width={800}
                height={400}
                priority={index === 0}
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
