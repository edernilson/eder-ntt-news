import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { Container, Box } from "@mui/material";
import "./globals.css";
import "./globalicons.css";

import ThemeRegistry from "@/ThemeRegistry";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuCategorias from "@/components/MenuCategorias";

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
            <Header />
            <MenuCategorias />            
            <Container              
              className="flex"
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
