import { createContext, useState } from 'react';

interface ThemeContextInterface {
  isLightTheme: boolean;
  light: {
    syntax: string;
    ui: string;
    bg: string;
  },
  dark: {
    syntax: string;
    ui: string;
    bg: string;
  },
  toggleTheme: () => void;
}

interface ThemeContextProviderProps {
  children: JSX.Element | JSX.Element[],
}

const initialValue = {
  isLightTheme: true,
  light: {
    syntax: '#555',
    ui: '#ddd',
    bg: '#eee',
  },
  dark: {
    syntax: '#ddd',
    ui: '#333',
    bg: '#555',
  },
  toggleTheme: () => { },
};

export const ThemeContext = createContext<ThemeContextInterface>(initialValue);

export default function ThemeContextProvider(props: ThemeContextProviderProps) {
  const { children } = props;

  const [state, setState] = useState(initialValue);

  const toggleTheme = () => {
    setState({
      ...state,
      isLightTheme: !state.isLightTheme,
    });
  };

  return (
    <ThemeContext.Provider value={{ ...state, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
