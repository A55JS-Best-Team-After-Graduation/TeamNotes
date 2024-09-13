// import React, { createContext, useState, ReactNode } from 'react';

// export interface AppContextType {
//   user: any; 
//   setUser: React.Dispatch<React.SetStateAction<any>>; 
// }

// export const AppContext = createContext<AppContextType | undefined>(undefined);

// interface AppContextProviderProps {
//   children: ReactNode;
// }

// const AppContextProvider = ({ children }: AppContextProviderProps) => {
//   const [user, setUser] = useState<any>(null); 

//   return (
//     <AppContext.Provider value={{ user, setUser }}>
//       {children}
//     </AppContext.Provider>
//   );
// }

// export default AppContextProvider;

import React, { type Dispatch, type SetStateAction } from 'react';

export type User = {
  username: string;
  email: string;
}

export type UserData = {
  username: string,
  email: string;
  uid: string,
  phoneNumber: number,
  image: string,
  activity: string;
  createdOn: Date;
}

export interface AppContextType {
  user: User 
  userData: UserData 
  setContext: Dispatch<SetStateAction<{ user: User, userData: UserData }>>
}

export const AppContext = React.createContext<AppContextType | undefined>(undefined);


export const useAppContext = () => {
  const context = React.useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppContextProvider');
  }
  return context;
};








