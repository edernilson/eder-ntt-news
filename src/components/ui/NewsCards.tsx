import Image from 'next/image';
import Link from 'next/link';
import { Post } from '@/types/post';

interface NewsCardProps {
  post: Post;
  priority?: boolean;
}

export default function NewsCard({ post, priority = false }: NewsCardProps) {
  return (
    <article className="group flex flex-col h-full bg-white border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
      <Link href={`/noticias/${post.category.toLowerCase()}/${post.slug}`} className="relative block aspect-video overflow-hidden">
        <Image
          src={post.imageUrl}
          alt={post.imageAlt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-2 left-2">
          <span className="bg-primary text-white text-[10px] font-bold uppercase px-2 py-1 tracking-wider">
            {post.category}
          </span>
        </div>
      </Link>

      <div className="p-4 flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-2">
          <time dateTime={post.date} className="text-[10px] font-medium text-text-secondary uppercase">
            {new Date(post.date).toLocaleDateString('pt-BR', {
              day: '2-digit',
              month: 'long',
              year: 'numeric'
            })}
          </time>
        </div>
        
        <Link href={`/noticias/${post.category.toLowerCase()}/${post.slug}`}>
          <h3 className="text-lg font-bold text-text-main group-hover:text-primary transition-colors leading-tight mb-2 line-clamp-2">
            {post.title}
          </h3>
        </Link>
        
        <p className="text-sm text-text-secondary line-clamp-3 mb-4 flex-grow">
          {post.excerpt}
        </p>

        <Link 
          href={`/noticias/${post.category.toLowerCase()}/${post.slug}`}
          className="text-xs font-bold text-primary uppercase inline-flex items-center group/link"
        >
          Leia mais
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 transition-transform group-hover/link:translate-x-1"><path d="m9 18 6-6-6-6"/></svg>
        </Link>
      </div>
    </article>
  );
}
