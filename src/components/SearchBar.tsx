import { useState, FormEvent } from 'react';
import { Search, X } from 'lucide-react';

interface SearchBarProps {
  onSearch: (term: string) => void;
  isLoading?: boolean;
}

function SearchBar({ onSearch, isLoading = false }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm.trim());
    }
  };

  const handleClear = () => {
    setSearchTerm('');
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for games..."
          className="input pl-10 pr-10"
          disabled={isLoading}
        />
        
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        
        {searchTerm && (
          <button
            type="button"
            className="absolute inset-y-0 right-10 pr-3 flex items-center"
            onClick={handleClear}
            aria-label="Clear search"
          >
            <X className="h-5 w-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200" />
          </button>
        )}
        
        <button
          type="submit"
          className="absolute inset-y-0 right-0 flex items-center pr-3"
          disabled={isLoading || !searchTerm.trim()}
        >
          <div className={`
            h-8 w-8 rounded-full flex items-center justify-center transition-colors
            ${searchTerm.trim() ? 'bg-steam-blue text-white hover:bg-steam-blue-dark' : 'bg-gray-200 dark:bg-steam-dark-lighter text-gray-500 cursor-not-allowed'}
          `}>
            <Search className="h-4 w-4" />
          </div>
        </button>
      </div>
    </form>
  );
}

export default SearchBar;