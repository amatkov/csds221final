// Type definitions for the Steam API data

// Price information
export interface Price {
  isFree: boolean;
  finalPrice: number;
  initialPrice: number;
  discountPercent: number;
}

// Basic game information
export interface Game {
  appId: string;
  name: string;
  headerImage?: string;
  price?: Price;
  playerCount?: number;
  reviewScore?: number;
  reviewCount?: number;
}

// Detailed game information
export interface GameDetails {
  appId: string;
  name: string;
  headerImage?: string;
  description?: string;
  developers?: string[];
  publishers?: string[];
  releaseDate?: string;
  genres?: string[];
  price?: Price;
  // Additional fields could be added as needed
}

// Player count information
export interface PlayerCount {
  appId: string;
  playerCount: number;
}

// Review information
export interface GameReviews {
  appId: string;
  reviewScore: number;
  totalReviews: number;
}