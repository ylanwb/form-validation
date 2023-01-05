/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React, { useContext, createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

interface UserProviderType {
  user: boolean;
  token: string;
  setUser: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UserProviderContext = createContext({} as UserProviderType);
export const UserProvider = (props: { children: React.ReactNode }) => {
  const { children } = props;
  const [user, setUser] = useState<boolean>(false);
  const [token, setToken] = useState<string>("testToken");
  const getCookie = () => {
    return Cookies.get("userToken");
  };
  useEffect(() => {
    const userToken = getCookie() as string;
    if (userToken === undefined) {
      setUser(false);
    } else {
      setToken(userToken);
      setUser(true);
    }
  }, []);
  const value = {
    user,
    token,
    setUser,
  };
  return (
    <UserProviderContext.Provider value={value}>
      {children}
    </UserProviderContext.Provider>
  );
};
export const useUserProvider = () => useContext(UserProviderContext);
