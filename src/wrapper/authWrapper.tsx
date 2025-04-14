import { createContext, useContext, useState } from "react";

const Authcontext = createContext<any | null>(null);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false);

  return (
    <Authcontext.Provider value={{ setIsUserLoggedIn, isUserLoggedIn }}>
      {children}
    </Authcontext.Provider>
  );
};

export const useAuth = () => useContext(Authcontext);
export default AuthProvider;

{
  /* <h1>Hello</h1> -> h1 is a wrapper and Hello is the child */
}
