import { createContext, useState } from "react";

interface BookContextProviderProps {
  children: React.ReactElement | React.ReactElement[];
}

interface BookType {
  id: number;
  title: string;
}

interface BookContextInterface {
  books: BookType[];
  addBook: (title: string) => void;
  removeBook: (id: number) => void;
}

const initialBookValue: BookType[] = [
  { id: 1, title: 'Name of the wind' },
  { id: 2, title: 'The way of kings' },
  { id: 3, title: 'The final umpire' },
  { id: 4, title: 'The hero of ages' },
  { id: 5, title: 'The amazing ants' },
];

export const BookContext = createContext<BookContextInterface>({
  books: [...initialBookValue],
  addBook: () => { },
  removeBook: () => { },
});

export default function BookContextProvider(props: BookContextProviderProps) {
  const { children } = props;

  const [books, setBooks] = useState<BookType[]>(initialBookValue);

  const addBook = (title: string) => {
    setBooks([
      ...books,
      { id: Date.now(), title },
    ]);
  };

  const removeBook = (id: number) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {children}
    </BookContext.Provider>
  );
}
