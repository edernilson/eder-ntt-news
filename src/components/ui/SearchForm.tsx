'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';

interface SearchFormProps {
  placeholder?: string;
  containerClassName?: string; // Classes para o container <div> externo
  inputClassName?: string;     // Classes específicas para o <input>
  iconSize?: number;
  onSearchSuccess?: () => void; // Callback para quando a busca é realizada (ex: fechar menu)
}

export default function SearchForm({ 
  placeholder = "Buscar...", 
  containerClassName = '', 
  inputClassName = '',
  iconSize = 18,
  onSearchSuccess 
}: SearchFormProps) {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/busca?q=${encodeURIComponent(query.trim())}`);
      setQuery('');
      if (onSearchSuccess) onSearchSuccess();
    }
  };

  return (
    <div className={containerClassName}>
      <form onSubmit={handleSearch} className="relative w-full">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className={`w-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${inputClassName}`}
        />
        <button 
          type="submit" 
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-primary transition-colors"
          aria-label="Buscar"
        >
          <Search size={iconSize} />
        </button>
      </form>
    </div>
  );
}
