import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun, Home, TowerControl as GameController } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

function Header() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  
  return (
    <header className="bg-white dark:bg-steam-dark shadow-md transition-colors duration-200">
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <GameController className="h-8 w-8 text-steam-blue" />
            <h1 className="text-2xl font-bold text-steam-blue">SteamLookup</h1>
          </Link>
          
          <nav className="flex items-center gap-4">
            <Link 
              to="/" 
              className={`p-2 rounded-full hover:bg-gray-100 dark:hover:bg-steam-dark-lighter transition-colors ${
                location.pathname === '/' ? 'text-steam-blue' : 'text-gray-700 dark:text-gray-300'
              }`}
              aria-label="Home"
            >
              <Home className="h-5 w-5" />
            </Link>
            
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-steam-dark-lighter transition-colors text-gray-700 dark:text-gray-300"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;