import './globals.css';
import './globalicons.css';
import { Container, Box } from '@mui/material';

import ThemeRegistry from '@/ThemeRegistry';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from '@/components/Link';

import { TOPICOS_DESTAQUE } from '@/types/categorias-destaque';

export const metadata = {
  title: 'AI News',
  description: 'Um aplicativo de notícias alimentado por inteligência artificial.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <ThemeRegistry>
          {/* Header com menu responsivo */}
          <Header />
          <Box sx={{
            width: "100%",
            py: 1,
            px: 1,
            gap: 1,
            display: "flex",            
            backgroundColor: "white"
          }}>
          {
            /* Criar barra de navegação de categorias baseado no tipo TOPICOS_DESTAQUE */
            TOPICOS_DESTAQUE.map((categoria, index) => (
                <Link 
                  key={index} 
                  href={`/noticias?categoria=${categoria.toLowerCase()}`}>
                  {categoria}
                </Link>
            ))
          }
          </Box>

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
      </body>
    </html>
  );
}