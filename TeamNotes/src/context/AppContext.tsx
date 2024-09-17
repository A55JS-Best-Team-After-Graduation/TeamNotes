import React, { type Dispatch, type SetStateAction, useState, ReactNode } from 'react';

export const defaultUserData: UserData = {
  username: '',
  email: '',
  uid: '',
  phoneNumber: 0,
  image: '',
  activity: '',
  createdOn: new Date(),
  status: 'offline',
};

export type UserData = {
  username: string,
  email: string;
  uid: string,
  phoneNumber: number,
  image: string,
  activity: string;
  createdOn: Date;
  status: string;
}

export interface AppContextType {
  userData: UserData | null 
  setContext: Dispatch<SetStateAction<{ userData: UserData | null }>>
}

export const AppContext = React.createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
  const context = React.useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppContextProvider');
  }
  return context;
};

interface AppContextProviderProps {
  children: ReactNode;
}

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [contextState, setContext] = useState<{ userData: UserData | null }>({
    userData: null, 
  });

  React.useEffect(() => {
    console.log('Context State Updated:', contextState);
  }, [contextState]);
  
  return (
    <AppContext.Provider value={{ ...contextState, setContext }}>
      {children}
    </AppContext.Provider>
  );
};





