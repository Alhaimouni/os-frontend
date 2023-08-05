import React, { createContext, useState } from 'react';

interface UserData {
  username: string;
  email: string;
  // Add other user-related properties as needed
}

interface UserContextType {
  user: UserData | null;
  setUser: (userData: UserData | null) => void;
}

const initialUserData: UserData = {
  username: '',
  email: '',
};

const UserContext = createContext<UserContextType>({
  user: initialUserData,
  setUser: () => {},
});

interface UserProviderProps {
  children: React.ReactNode;
}

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UserData | null>(null);

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };
