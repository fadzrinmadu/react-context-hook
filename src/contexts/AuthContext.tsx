import { createContext, useState } from "react";

interface AuthContextInterface {
  isAuthenticated: boolean;
  toggleAuth: () => void;
}

interface AuthContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

interface AuthType {
  isAuthenticated: boolean;
}

const initialAuthValue: AuthType = {
  isAuthenticated: false,
}

export const AuthContext = createContext<AuthContextInterface>({
  isAuthenticated: initialAuthValue.isAuthenticated,
  toggleAuth: () => { },
});

export default function AuthContextProvider(props: AuthContextProviderProps) {
  const { children } = props;

  const [state, setState] = useState<AuthType>(initialAuthValue);

  const toggleAuth = () => {
    setState({
      ...state,
      isAuthenticated: !state.isAuthenticated,
    });
  };

  return (
    <AuthContext.Provider value={{ ...state, toggleAuth, }}>
      {children}
    </AuthContext.Provider>
  );
}
