import { Link } from 'react-router-dom';
import { Home, AlertTriangle } from 'lucide-react';

interface NotFoundPageProps {
  message?: string;
}

function NotFoundPage({ message = 'Page not found' }: NotFoundPageProps) {
  return (
    <div className="h-[70vh] flex flex-col items-center justify-center text-center">
      <AlertTriangle className="h-20 w-20 text-steam-blue mb-6" />
      <h1 className="text-4xl font-bold mb-2">404</h1>
      <p className="text-xl mb-6 text-gray-600 dark:text-gray-400">{message}</p>
      <Link 
        to="/" 
        className="btn btn-primary inline-flex items-center"
      >
        <Home className="h-4 w-4 mr-2" />
        Go to Homepage
      </Link>
    </div>
  );
}

export default NotFoundPage;