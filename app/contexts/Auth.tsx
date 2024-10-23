import React, {
  createContext,
  type ReactNode,
  useContext,
  useState,
} from "react";

export interface Auth {
  id?: string;
  token?: string;
  refreshToken?: string;
}

export const AuthContext = createContext<AuthType>({} as AuthType);

export const UseAuthContext = (): AuthType => useContext(AuthContext);

export interface AuthType {
  auth: Auth;
  setAuth: React.Dispatch<React.SetStateAction<Auth>>;
}

interface ChildType {
  children: ReactNode;
}

export const AuthContextProvider = ({ children }: ChildType) => {
  const [auth, setAuth] = useState<Auth>({ id: " NOT LOGIN " });
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
