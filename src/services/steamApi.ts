import axios from 'axios';
import { Game, GameDetails, PlayerCount, GameReviews } from '../types/steam';

// Create a proxy server URL - in a real app, this would be your backend
// For this demo, we're simulating responses
const API_BASE_URL = '/api';

// Store the API key from local storage
const getApiKey = (): string => {
  return localStorage.getItem('steam-api-key') || '';
};

// Search for games by name
export async function searchGames(searchTerm: string): Promise<Game[]> {
  // In a real implementation, this would make a request to your backend
  // which would proxy to the Steam API with your key
  
  // For demo purposes, we'll simulate a response
  // In a real app, you would make a fetch or axios request to your backend
  
  // Simulating API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Mock data
  const mockGames: Game[] = [
    {
      appId: '570',
      name: 'Dota 2',
      headerImage: 'https://cdn.akamai.steamstatic.com/steam/apps/570/header.jpg',
      price: {
        isFree: true,
        finalPrice: 0,
        initialPrice: 0,
        discountPercent: 0
      },
      playerCount: 354221,
      reviewScore: 0.83,
      reviewCount: 1458302
    },
    {
      appId: '730',
      name: 'Counter-Strike 2',
      headerImage: 'https://cdn.akamai.steamstatic.com/steam/apps/730/header.jpg',
      price: {
        isFree: true,
        finalPrice: 0,
        initialPrice: 0,
        discountPercent: 0
      },
      playerCount: 896532,
      reviewScore: 0.88,
      reviewCount: 6892431
    },
    {
      appId: '440',
      name: 'Team Fortress 2',
      headerImage: 'https://cdn.akamai.steamstatic.com/steam/apps/440/header.jpg',
      price: {
        isFree: true,
        finalPrice: 0,
        initialPrice: 0,
        discountPercent: 0
      },
      playerCount: 92456,
      reviewScore: 0.91,
      reviewCount: 942356
    },
    {
      appId: '578080',
      name: 'PUBG: BATTLEGROUNDS',
      headerImage: 'https://cdn.akamai.steamstatic.com/steam/apps/578080/header.jpg',
      price: {
        isFree: true,
        finalPrice: 0,
        initialPrice: 29.99,
        discountPercent: 100
      },
      playerCount: 123456,
      reviewScore: 0.62,
      reviewCount: 1942356
    },
    {
      appId: '1966720',
      name: 'Hades II',
      headerImage: 'https://cdn.akamai.steamstatic.com/steam/apps/1966720/header.jpg',
      price: {
        isFree: false,
        finalPrice: 29.99,
        initialPrice: 29.99,
        discountPercent: 0
      },
      playerCount: 28745,
      reviewScore: 0.97,
      reviewCount: 59432
    },
    {
      appId: '1245620',
      name: 'ELDEN RING',
      headerImage: 'https://cdn.akamai.steamstatic.com/steam/apps/1245620/header.jpg',
      price: {
        isFree: false,
        finalPrice: 39.99,
        initialPrice: 59.99,
        discountPercent: 33
      },
      playerCount: 84523,
      reviewScore: 0.94,
      reviewCount: 654321
    }
  ];
  
  // Filter games based on search term
  return mockGames.filter(game => 
    game.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
}

// Get detailed information about a specific game
export async function getGameDetails(appId: string): Promise<GameDetails> {
  // In a real implementation, this would make a request to your backend
  
  // Simulating API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const mockGameDetails: Record<string, GameDetails> = {
    '570': {
      appId: '570',
      name: 'Dota 2',
      headerImage: 'https://cdn.akamai.steamstatic.com/steam/apps/570/header.jpg',
      description: 'Dota 2 is a multiplayer online battle arena (MOBA) game developed and published by Valve. The game is a sequel to Defense of the Ancients (DotA), which was a community-created mod for Warcraft III: Reign of Chaos.',
      developers: ['Valve'],
      publishers: ['Valve'],
      releaseDate: 'Jul 9, 2013',
      genres: ['MOBA', 'Strategy', 'Free to Play'],
      price: {
        isFree: true,
        finalPrice: 0,
        initialPrice: 0,
        discountPercent: 0
      }
    },
    '730': {
      appId: '730',
      name: 'Counter-Strike 2',
      headerImage: 'https://cdn.akamai.steamstatic.com/steam/apps/730/header.jpg',
      description: 'Counter-Strike 2 is a tactical first-person shooter developed by Valve. It is the latest installment in the Counter-Strike series, featuring modernized versions of classic Counter-Strike maps and improved gameplay mechanics.',
      developers: ['Valve'],
      publishers: ['Valve'],
      releaseDate: 'Sep 27, 2023',
      genres: ['FPS', 'Shooter', 'Action', 'Competitive'],
      price: {
        isFree: true,
        finalPrice: 0,
        initialPrice: 0,
        discountPercent: 0
      }
    },
    '440': {
      appId: '440',
      name: 'Team Fortress 2',
      headerImage: 'https://cdn.akamai.steamstatic.com/steam/apps/440/header.jpg',
      description: 'Team Fortress 2 is a team-based first-person shooter multiplayer game developed and published by Valve. Players join one of two teams comprising nine character classes, battling in a variety of game modes.',
      developers: ['Valve'],
      publishers: ['Valve'],
      releaseDate: 'Oct 10, 2007',
      genres: ['FPS', 'Hero Shooter', 'Action', 'Free to Play'],
      price: {
        isFree: true,
        finalPrice: 0,
        initialPrice: 0,
        discountPercent: 0
      }
    },
    '578080': {
      appId: '578080',
      name: 'PUBG: BATTLEGROUNDS',
      headerImage: 'https://cdn.akamai.steamstatic.com/steam/apps/578080/header.jpg',
      description: 'PUBG: BATTLEGROUNDS is a battle royale shooter that pits 100 players against each other in a struggle for survival. Gather supplies and outwit your opponents to become the last person standing.',
      developers: ['KRAFTON, Inc.'],
      publishers: ['KRAFTON, Inc.'],
      releaseDate: 'Dec 21, 2017',
      genres: ['Battle Royale', 'Shooter', 'Survival', 'Free to Play'],
      price: {
        isFree: true,
        finalPrice: 0,
        initialPrice: 29.99,
        discountPercent: 100
      }
    },
    '1966720': {
      appId: '1966720',
      name: 'Hades II',
      headerImage: 'https://cdn.akamai.steamstatic.com/steam/apps/1966720/header.jpg',
      description: "Hades II is a roguelike dungeon crawler and a direct sequel to the award-winning original. As the immortal Princess of the Underworld, you'll explore a bigger, deeper mythic world, defeating the Titan forces in thrilling battle while forming powerful bonds with the Olympians.",
      developers: ['Supergiant Games'],
      publishers: ['Supergiant Games'],
      releaseDate: 'May 6, 2024 (Early Access)',
      genres: ['Action Roguelike', 'Dungeon Crawler', 'Action', 'Indie'],
      price: {
        isFree: false,
        finalPrice: 29.99,
        initialPrice: 29.99,
        discountPercent: 0
      }
    },
    '1245620': {
      appId: '1245620',
      name: 'ELDEN RING',
      headerImage: 'https://cdn.akamai.steamstatic.com/steam/apps/1245620/header.jpg',
      description: 'ELDEN RING, developed by FromSoftware Inc. and produced by BANDAI NAMCO Entertainment Inc., is a fantasy action-RPG and FromSoftware\'s largest game to date, set in a sprawling realm steeped in a rich and bloody history crafted by Hidetaka Miyazaki and George R. R. Martin.',
      developers: ['FromSoftware Inc.'],
      publishers: ['Bandai Namco Entertainment'],
      releaseDate: 'Feb 25, 2022',
      genres: ['Souls-like', 'RPG', 'Open World', 'Action'],
      price: {
        isFree: false,
        finalPrice: 39.99,
        initialPrice: 59.99,
        discountPercent: 33
      }
    }
  };
  
  if (mockGameDetails[appId]) {
    return mockGameDetails[appId];
  }
  
  throw new Error('Game not found');
}

// Get player count for a specific game
export async function getGamePlayerCount(appId: string): Promise<PlayerCount> {
  // In a real implementation, this would make a request to your backend
  
  // Simulating API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  const mockPlayerCounts: Record<string, PlayerCount> = {
    '570': { appId: '570', playerCount: 354221 },
    '730': { appId: '730', playerCount: 896532 },
    '440': { appId: '440', playerCount: 92456 },
    '578080': { appId: '578080', playerCount: 123456 },
    '1966720': { appId: '1966720', playerCount: 28745 },
    '1245620': { appId: '1245620', playerCount: 84523 }
  };
  
  if (mockPlayerCounts[appId]) {
    return mockPlayerCounts[appId];
  }
  
  throw new Error('Player count not found');
}

// Get reviews for a specific game
export async function getGameReviews(appId: string): Promise<GameReviews> {
  // In a real implementation, this would make a request to your backend
  
  // Simulating API delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  const mockReviews: Record<string, GameReviews> = {
    '570': { appId: '570', reviewScore: 0.83, totalReviews: 1458302 },
    '730': { appId: '730', reviewScore: 0.88, totalReviews: 6892431 },
    '440': { appId: '440', reviewScore: 0.91, totalReviews: 942356 },
    '578080': { appId: '578080', reviewScore: 0.62, totalReviews: 1942356 },
    '1966720': { appId: '1966720', reviewScore: 0.97, totalReviews: 59432 },
    '1245620': { appId: '1245620', reviewScore: 0.94, totalReviews: 654321 }
  };
  
  if (mockReviews[appId]) {
    return mockReviews[appId];
  }
  
  throw new Error('Reviews not found');
}

// In a real application, you would implement additional methods to
// interact with your backend server, which would then securely use the Steam API