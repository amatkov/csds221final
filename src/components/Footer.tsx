import { GithubIcon, MessageSquare, Heart } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-white dark:bg-steam-dark shadow-inner py-6 transition-colors duration-200">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              &copy; {new Date().getFullYear()} SteamLookup. Made by August Matkov. Not affiliated with Valve Corporation.
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-steam-blue dark:hover:text-steam-blue-light transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-steam-blue dark:hover:text-steam-blue-light transition-colors"
              aria-label="Contact"
            >
              <MessageSquare className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-steam-blue dark:hover:text-steam-blue-light transition-colors"
              aria-label="Support"
            >
              <Heart className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;