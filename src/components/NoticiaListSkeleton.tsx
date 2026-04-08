"use client";
import { Card, CardContent, Grid, Skeleton } from "@mui/material";

export default function NoticiaListSkeleton() {
  const skeletonCount = 6;

  return (
    <Grid container spacing={2}>
      {Array.from({ length: skeletonCount }).map((_, index) => (
        <Grid size={{ xs: 2, sm: 4, md: 4 }} key={index}>
          <Card sx={{ maxWidth: 345 }}>
            {/* Skeleton do Image */}
            <Skeleton
              variant="rectangular"
              width="100%"
              height={140}
              animation="wave"
            />
            <CardContent>
              {/* Skeleton da categoria */}
              <Skeleton
                variant="text"
                width="40%"
                height={16}
                animation="wave"
                sx={{ marginBottom: 1 }}
              />
              {/* Skeleton do excerpt (múltiplas linhas) */}
              <Skeleton
                variant="text"
                width="100%"
                height={20}
                animation="wave"
                sx={{ marginBottom: 0.5 }}
              />
              <Skeleton
                variant="text"
                width="85%"
                height={20}
                animation="wave"
              />
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}