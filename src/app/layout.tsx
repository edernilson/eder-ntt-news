import './globals.css';
import './globalicons.css';
import ThemeRegistry from '@/ThemeRegistry';
import Header from '@/components/Header';
import { Container, Box } from '@mui/material';
import Footer from '@/components/Footer';

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