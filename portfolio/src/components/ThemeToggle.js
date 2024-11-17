import React, {useState} from 'react';
import { FaSun, FaMoon } from "react-icons/fa";

function ThemeToggle() {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
    document.body.classList.toggle("dark-theme", !darkTheme);
  };
  return (
    <button className="theme-toggle-btn" onClick={toggleTheme}>
          {darkTheme ? <FaSun /> : <FaMoon />}
        </button>
  );
}

export default ThemeToggle;
