import { Loader2 } from 'lucide-react';

interface LoadingIndicatorProps {
  size?: 'small' | 'medium' | 'large';
}

function LoadingIndicator({ size = 'medium' }: LoadingIndicatorProps) {
  const sizeClasses = {
    small: 'h-4 w-4',
    medium: 'h-8 w-8',
    large: 'h-12 w-12',
  };

  return (
    <div className="flex justify-center items-center">
      <Loader2 className={`${sizeClasses[size]} text-steam-blue animate-spin`} />
    </div>
  );
}

export default LoadingIndicator;