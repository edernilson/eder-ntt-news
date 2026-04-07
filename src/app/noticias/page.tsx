'use client';
import { Suspense } from 'react';

import NoticiaListSkeleton from '@/components/NoticiaListSkeleton';
import NoticiaList from '@/components/NoticiaList';

export default function Noticia() {
  return (
    <Suspense fallback={<NoticiaListSkeleton />}>
      <NoticiaList />
    </Suspense>
  );
}