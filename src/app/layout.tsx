import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { Container, Box } from "@mui/material";
import "./globals.css";
import "./globalicons.css";

import ThemeRegistry from "@/ThemeRegistry";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "@/components/Link";

import { TOPICOS_DESTAQUE } from "@/types/categorias-destaque";

export const metadata = {
  title: "AI News",
  description:
    "Um aplicativo de notícias alimentado por inteligência artificial.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeRegistry>
            {/* Header com menu responsivo */}
            <Header />

            <div className="w-100% display-flex justify-content-center p-2 primary-bg-color">
              {
                /* Barra de navegação de categorias baseado no tipo TOPICOS_DESTAQUE */                
                TOPICOS_DESTAQUE.map((categoria, index) => (
                  <Link
                    key={index}
                    href={`/noticias?categoria=${categoria.toLowerCase()}`}
                    className="p-2 hover:text-secondary"
                  >
                    {categoria}
                  </Link>
                ))
              }
            </div>
            {/* Conteúdo centralizado e responsivo */}
            <Container
              maxWidth="md"
              sx={{
                mt: { xs: 2, sm: 4 },
                px: { xs: 2, sm: 3 },
              }}
            >
              {children}
            </Container>

            <Footer />
          </ThemeRegistry>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
