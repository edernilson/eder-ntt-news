import './globals.css';
import './globalicons.css';
import ThemeRegistry from '@/ThemeRegistry';
import Header from '@/components/Header';
import { Container, Box } from '@mui/material';

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

          {/* Rodapé simples */}
          <Box
            component="footer"
            sx={{
              mt: { xs: 4, sm: 6 },
              py: 2,
              textAlign: 'center',
              fontSize: { xs: '0.8rem', sm: '0.9rem' },
              color: 'text.secondary',
            }}
          >
            © {new Date().getFullYear()} Meu App — Todos os direitos reservados
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}