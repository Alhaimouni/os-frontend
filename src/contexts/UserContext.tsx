import React, { createContext, useState } from "react";

interface UserData {
  email: string;
  token: string;
  role: string;
}

interface UserContextType {
  user: any | null;
  setUser: (userData: any | UserData | null) => void;
}
let k = localStorage.getItem("user");
let loggedUser = JSON.parse(k as string);
let initialUserData: any;

if (loggedUser) {
  initialUserData = {
    email: loggedUser.email,
    token: loggedUser.token,
    role: loggedUser.role,
  };
} else {
  initialUserData = null;
}

const UserContext = createContext<UserContextType>({
  user: initialUserData,
  setUser: () => {},
});

interface UserProviderProps {
  children: React.ReactNode;
}

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<any | null>(initialUserData);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
