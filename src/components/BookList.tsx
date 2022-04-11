import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function BookList() {
  const { isLightTheme, light, dark } = useContext(ThemeContext);

  const theme = isLightTheme ? light : dark;

  return (
    <div className="book-list" style={{ background: theme.bg, color: theme.syntax }}>
      <ul>
        <li style={{ background: theme.ui }}>The way of kings</li>
        <li style={{ background: theme.ui }}>The name of the wind</li>
        <li style={{ background: theme.ui }}>The final empire</li>
      </ul>
    </div>
  );
}
