import { createContext, useState } from "react";

interface AuthContextInterface {
  isAuthenticated: boolean;
  toggleAuth: () => void;
}

interface AuthContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const initialValue: AuthContextInterface = {
  isAuthenticated: false,
  toggleAuth: () => { },
};

export const AuthContext = createContext<AuthContextInterface>(initialValue);

export default function AuthContextProvider(props: AuthContextProviderProps) {
  const { children } = props;

  const [state, setState] = useState(initialValue);

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
