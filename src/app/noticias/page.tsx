import { Suspense } from 'react';

import NoticiaListSkeleton from '@/components/NoticiaListSkeleton';
import NoticiaList from '@/components/NoticiaList';

type Props = {
  searchParams?: Promise<{
    categoria?: string;
  }>;
};

export default async function Noticias({ searchParams }: Props) {
  const categoria = searchParams ? (await searchParams).categoria : undefined;
  return (
    <Suspense fallback={<NoticiaListSkeleton />}>
      <NoticiaList categoria={categoria} />
    </Suspense>
  );
}