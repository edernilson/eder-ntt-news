import { Suspense } from 'react';

import NoticiaListSkeleton from '@/components/NoticiaListSkeleton';
import NoticiaList from '@/components/NoticiaList';

type Props = {
  searchParams: Promise<{
    categoria?: string;
  }>;
};

export default async function Noticia({ searchParams }: Props) {
  const { categoria } = await searchParams;
  return (
    <Suspense fallback={<NoticiaListSkeleton />}>
      <NoticiaList categoria={categoria} />
    </Suspense>
  );
}