import React, { createContext, useState, ReactNode } from 'react';

export interface AppContextType {
  user: any; 
  setUser: React.Dispatch<React.SetStateAction<any>>; 
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppContextProviderProps {
  children: ReactNode;
}

const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [user, setUser] = useState<any>(null); 

  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;