import { createContext, useState } from "react";

interface BookContextProviderProps {
  children: React.ReactElement | React.ReactElement[];
}

interface BookContextInterface {
  id: number;
  title: string;
}

const initialValue: BookContextInterface[] = [
  { id: 1, title: 'Name of the wind' },
  { id: 2, title: 'The way of kings' },
  { id: 3, title: 'The final umpire' },
  { id: 4, title: 'The hero of ages' },
];

export const BookContext = createContext<BookContextInterface[]>(initialValue);

export default function BookContextProvider(props: BookContextProviderProps) {
  const { children } = props;

  const [books] = useState<BookContextInterface[]>(initialValue);

  return (
    <BookContext.Provider value={[...books]}>
      {children}
    </BookContext.Provider>
  );
}
