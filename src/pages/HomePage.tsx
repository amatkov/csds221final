import { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import GameList from '../components/GameList';
import { searchGames } from '../services/steamApi';
import { Game } from '../types/steam';
import RecentSearches from '../components/RecentSearches';

function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Game[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [recentSearches, setRecentSearches] = useState<string[]>(() => {
    const saved = localStorage.getItem('recentSearches');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('recentSearches', JSON.stringify(recentSearches));
  }, [recentSearches]);

  const handleSearch = async (term: string) => {
    if (!term.trim()) return;
    
    setSearchTerm(term);
    setIsLoading(true);
    setError('');
    
    try {
      const results = await searchGames(term);
      setSearchResults(results);
      
      // Add to recent searches if not already present
      if (!recentSearches.includes(term)) {
        setRecentSearches(prev => [term, ...prev].slice(0, 5));
      }
    } catch (err) {
      setError('Failed to search games. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRecentSearchClick = (term: string) => {
    handleSearch(term);
  };

  return (
    <div className="animate-fade-in">
      <div className="max-w-3xl mx-auto mb-8">
        <h1 className="text-3xl font-bold text-center mb-2">Steam Game Lookup</h1>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-6">
          Search for games to see player counts, reviews, and current pricing
        </p>
        
        <SearchBar onSearch={handleSearch} isLoading={isLoading} />
        
        {recentSearches.length > 0 && !searchResults.length && (
          <RecentSearches 
            searches={recentSearches} 
            onSearchClick={handleRecentSearchClick} 
          />
        )}
      </div>
      
      {error && (
        <div className="bg-red-100 dark:bg-red-900/20 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-400 px-4 py-3 rounded mb-6">
          {error}
        </div>
      )}
      
      {searchTerm && (
        <GameList 
          games={searchResults} 
          isLoading={isLoading} 
          searchTerm={searchTerm} 
        />
      )}
    </div>
  );
}

export default HomePage;