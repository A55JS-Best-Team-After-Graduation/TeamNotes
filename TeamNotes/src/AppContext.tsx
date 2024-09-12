import React, { createContext, useState, ReactNode } from 'react';

interface AppContextType {
  user: any; 
  setUser: React.Dispatch<React.SetStateAction<any>>; 
}

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppContextProviderProps {
  children: ReactNode;
}

export function AppContextProvider({ children }: AppContextProviderProps) {
  const [user, setUser] = useState<any>(null); 

  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;