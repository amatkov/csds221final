import { Users, Star, DollarSign } from 'lucide-react';
import { Game } from '../types/steam';

interface GameCardProps {
  game: Game;
}

function GameCard({ game }: GameCardProps) {
  const {
    name,
    headerImage,
    price,
    playerCount,
    reviewScore,
    reviewCount
  } = game;

  // Determine the CSS class for the review score
  const getReviewScoreClass = () => {
    if (!reviewScore) return 'text-gray-500';
    if (reviewScore >= 0.8) return 'text-green-500';
    if (reviewScore >= 0.6) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <div className="card h-full hover:translate-y-[-4px] animate-fade-in">
      {headerImage ? (
        <img 
          src={headerImage} 
          alt={name} 
          className="w-full h-40 object-cover"
          loading="lazy"
        />
      ) : (
        <div className="w-full h-40 bg-gray-200 dark:bg-steam-dark-lighter flex items-center justify-center">
          <span className="text-gray-400">No image</span>
        </div>
      )}
      
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2 line-clamp-1">{name}</h2>
        
        <div className="space-y-2 text-sm">
          {playerCount !== undefined && (
            <div className="flex items-center">
              <Users className="h-4 w-4 text-steam-blue mr-2" />
              <span>{playerCount.toLocaleString()} players</span>
            </div>
          )}
          
          {reviewScore !== undefined && (
            <div className="flex items-center">
              <Star className="h-4 w-4 text-steam-blue mr-2" />
              <span>
                <span className={getReviewScoreClass()}>
                  {Math.round(reviewScore * 100)}%
                </span>
                {reviewCount !== undefined && reviewCount > 0 && (
                  <span className="text-gray-500 dark:text-gray-400 ml-1">
                    ({reviewCount.toLocaleString()})
                  </span>
                )}
              </span>
            </div>
          )}
          
          {price !== undefined && (
            <div className="flex items-center">
              <DollarSign className="h-4 w-4 text-steam-blue mr-2" />
              {price.isFree ? (
                <span className="text-steam-green font-medium">Free to Play</span>
              ) : price.discountPercent > 0 ? (
                <div className="flex items-center">
                  <span className="line-through text-gray-500 mr-1">
                    ${price.initialPrice.toFixed(2)}
                  </span>
                  <span className="font-medium">${price.finalPrice.toFixed(2)}</span>
                  <span className="ml-2 bg-steam-green text-white text-xs px-1.5 py-0.5 rounded">
                    -{price.discountPercent}%
                  </span>
                </div>
              ) : (
                <span>${price.finalPrice.toFixed(2)}</span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default GameCard;