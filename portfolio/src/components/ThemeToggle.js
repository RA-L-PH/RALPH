import React from 'react';

const ThemeToggle = () => {
  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
  };

  return (
    <button onClick={toggleTheme} className="p-2 bg-primary rounded-full shadow-neomorphic">
      🌞 / 🌜
    </button>
  );
};

export default ThemeToggle;
