import Link from "@/components/Link";

import { TOPICOS_DESTAQUE } from "@/types/categorias-destaque";

export default function MenuCategorias() {
    return (
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
    );
}