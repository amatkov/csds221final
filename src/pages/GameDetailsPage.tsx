import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Users, Star, DollarSign, Clock, Calendar, Tag, Globe } from 'lucide-react';
import { getGameDetails, getGamePlayerCount, getGameReviews } from '../services/steamApi';
import { GameDetails, PlayerCount, GameReviews } from '../types/steam';
import LoadingIndicator from '../components/LoadingIndicator';
import NotFoundPage from './NotFoundPage';

function GameDetailsPage() {
  const { appId } = useParams<{ appId: string }>();
  const [gameDetails, setGameDetails] = useState<GameDetails | null>(null);
  const [playerCount, setPlayerCount] = useState<PlayerCount | null>(null);
  const [reviews, setReviews] = useState<GameReviews | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!appId) return;

    const loadGameData = async () => {
      setIsLoading(true);
      setError('');

      try {
        const [detailsData, playerData, reviewsData] = await Promise.all([
          getGameDetails(appId),
          getGamePlayerCount(appId),
          getGameReviews(appId)
        ]);

        setGameDetails(detailsData);
        setPlayerCount(playerData);
        setReviews(reviewsData);
      } catch (err) {
        console.error('Failed to load game data:', err);
        setError('Failed to load game data. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    loadGameData();
  }, [appId]);

  if (isLoading) {
    return (
      <div className="h-64 flex items-center justify-center">
        <LoadingIndicator size="large" />
      </div>
    );
  }

  if (error || !gameDetails) {
    return <NotFoundPage message={error || 'Game not found'} />;
  }

  const { 
    name, 
    headerImage, 
    description, 
    developers, 
    publishers, 
    releaseDate, 
    genres, 
    price 
  } = gameDetails;

  // Format the review score as a percentage
  const reviewScore = reviews?.reviewScore
    ? `${Math.round(reviews.reviewScore * 100)}%`
    : 'No reviews';

  // Determine review class based on score
  const getReviewClass = () => {
    if (!reviews?.reviewScore) return 'text-gray-500';
    const score = reviews.reviewScore * 100;
    if (score >= 80) return 'text-green-500';
    if (score >= 60) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <div className="animate-fade-in">
      <Link to="/" className="inline-flex items-center text-steam-blue hover:text-steam-blue-dark dark:hover:text-steam-blue-light mb-6">
        <ArrowLeft className="h-4 w-4 mr-1" />
        Back to search
      </Link>
      
      <div className="card overflow-hidden mb-8">
        {headerImage && (
          <div className="w-full h-64 md:h-80 lg:h-96 relative overflow-hidden">
            <img 
              src={headerImage} 
              alt={name} 
              className="w-full h-full object-cover"
            />
          </div>
        )}
        
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-2">{name}</h1>
          
          <div className="flex flex-wrap gap-4 mb-6">
            {playerCount && (
              <div className="flex items-center">
                <Users className="h-5 w-5 text-steam-blue mr-2" />
                <span>
                  <span className="font-semibold">{playerCount.playerCount.toLocaleString()}</span> active players
                </span>
              </div>
            )}
            
            {reviews && (
              <div className="flex items-center">
                <Star className="h-5 w-5 text-steam-blue mr-2" />
                <span>
                  <span className={`font-semibold ${getReviewClass()}`}>{reviewScore}</span>
                  {reviews.totalReviews > 0 && ` (${reviews.totalReviews.toLocaleString()} reviews)`}
                </span>
              </div>
            )}
            
            {price && (
              <div className="flex items-center">
                <DollarSign className="h-5 w-5 text-steam-blue mr-2" />
                <span>
                  {price.discountPercent > 0 ? (
                    <span>
                      <span className="line-through text-gray-500">${price.initialPrice.toFixed(2)}</span>
                      {' '}
                      <span className="font-semibold">${price.finalPrice.toFixed(2)}</span>
                      {' '}
                      <span className="bg-steam-green text-white px-2 py-0.5 rounded text-xs">
                        -{price.discountPercent}%
                      </span>
                    </span>
                  ) : price.isFree ? (
                    <span className="font-semibold text-steam-green">Free to Play</span>
                  ) : (
                    <span className="font-semibold">${price.finalPrice.toFixed(2)}</span>
                  )}
                </span>
              </div>
            )}
          </div>
          
          <div className="prose dark:prose-invert max-w-none mb-6">
            <p>{description}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              {releaseDate && (
                <div className="flex items-start mb-3">
                  <Calendar className="h-5 w-5 text-steam-blue mr-2 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Release Date</h3>
                    <p>{releaseDate}</p>
                  </div>
                </div>
              )}
              
              {developers && developers.length > 0 && (
                <div className="flex items-start mb-3">
                  <Clock className="h-5 w-5 text-steam-blue mr-2 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Developers</h3>
                    <p>{developers.join(', ')}</p>
                  </div>
                </div>
              )}
              
              {publishers && publishers.length > 0 && (
                <div className="flex items-start mb-3">
                  <Globe className="h-5 w-5 text-steam-blue mr-2 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Publishers</h3>
                    <p>{publishers.join(', ')}</p>
                  </div>
                </div>
              )}
            </div>
            
            <div>
              {genres && genres.length > 0 && (
                <div className="flex items-start mb-3">
                  <Tag className="h-5 w-5 text-steam-blue mr-2 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Genres</h3>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {genres.map(genre => (
                        <span 
                          key={genre}
                          className="bg-steam-dark-lighter text-white px-2 py-1 rounded text-xs"
                        >
                          {genre}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              
              {/* We could add more game metadata here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameDetailsPage;