import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function ThemeToggle() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>Toggle the theme</button>
  );
}
