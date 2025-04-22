import { Clock, X } from 'lucide-react';

interface RecentSearchesProps {
  searches: string[];
  onSearchClick: (term: string) => void;
}

function RecentSearches({ searches, onSearchClick }: RecentSearchesProps) {
  if (!searches.length) return null;

  return (
    <div className="mt-6 bg-white dark:bg-steam-dark-light rounded-lg shadow-sm p-4 animate-fade-in">
      <div className="flex items-center mb-3">
        <Clock className="h-4 w-4 text-gray-500 dark:text-gray-400 mr-2" />
        <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Recent Searches</h3>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {searches.map((term, index) => (
          <button
            key={index}
            onClick={() => onSearchClick(term)}
            className="inline-flex items-center bg-gray-100 hover:bg-gray-200 dark:bg-steam-dark-lighter dark:hover:bg-steam-dark text-gray-800 dark:text-gray-200 rounded-full px-3 py-1 text-sm transition-colors"
          >
            {term}
          </button>
        ))}
      </div>
    </div>
  );
}

export default RecentSearches;