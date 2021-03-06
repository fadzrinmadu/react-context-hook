import { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import { ThemeContext } from "../contexts/ThemeContext";

export default function BookList() {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { books, removeBook } = useContext(BookContext);

  const theme = isLightTheme ? light : dark;

  return (
    <div className="book-list" style={{ background: theme.bg, color: theme.syntax }}>
      {books.length ? (
        <ul>
          {books.map((book) => (
            <li key={book.id} style={{ background: theme.ui }} onClick={() => removeBook(book.id)}>{book.title}</li>
          ))}
        </ul>
      ) : (
        <div className="empty">No books to read. Hello free time :)</div>
      )}
    </div>
  );
}
