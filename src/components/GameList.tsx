import { Link } from 'react-router-dom';
import { Game } from '../types/steam';
import GameCard from './GameCard';
import LoadingIndicator from './LoadingIndicator';

interface GameListProps {
  games: Game[];
  isLoading: boolean;
  searchTerm: string;
}

function GameList({ games, isLoading, searchTerm }: GameListProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="card h-72 animate-pulse p-4">
            <div className="bg-gray-200 dark:bg-steam-dark-lighter h-40 rounded mb-4"></div>
            <div className="bg-gray-200 dark:bg-steam-dark-lighter h-6 rounded w-3/4 mb-2"></div>
            <div className="bg-gray-200 dark:bg-steam-dark-lighter h-6 rounded w-1/2"></div>
          </div>
        ))}
      </div>
    );
  }

  if (games.length === 0 && !isLoading) {
    return (
      <div className="text-center py-8">
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-2">
          No games found for "{searchTerm}"
        </p>
        <p className="text-gray-500 dark:text-gray-500">
          Try a different search term or check your spelling
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {games.map((game) => (
        <Link to={`/game/${game.appId}`} key={game.appId} className="block h-full">
          <GameCard game={game} />
        </Link>
      ))}
    </div>
  );
}

export default GameList;