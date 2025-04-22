import { createContext, useContext, ReactNode } from 'react';

interface SteamApiContextType {
  apiKey: string;
}

const SteamApiContext = createContext<SteamApiContextType | undefined>(undefined);

const API_KEY = 'FF494BB545EF4D0C3CC21CEB0F040A78';

export function SteamApiProvider({ children }: { children: ReactNode }) {
  return (
    <SteamApiContext.Provider value={{ apiKey: API_KEY }}>
      {children}
    </SteamApiContext.Provider>
  );
}

export function useSteamApi() {
  const context = useContext(SteamApiContext);
  if (context === undefined) {
    throw new Error('useSteamApi must be used within a SteamApiProvider');
  }
  return context;
}