import React, { useState } from 'react';
import { FaSun, FaMoon, FaSnowflake, FaLeaf, FaCloud, FaUmbrella, FaTree } from "react-icons/fa";

function ThemeToggle() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [seasonalMode, setSeasonalMode] = useState(false);
  const [currentSeason, setCurrentSeason] = useState('');

  // Determine the current season
  const determineCurrentSeason = () => {
    const month = new Date().getMonth();
    
    if (month >= 11 || month <= 1) return 'winter';
    if (month >= 2 && month <= 3) return 'spring';
    if (month >= 4 && month <= 5) return 'summer';
    if (month >= 6 && month <= 8) return 'monsoon';
    if (month >= 9 && month <= 10) return 'autumn';
  };

  // Toggle light/dark theme
  const toggleTheme = () => {
    const newDarkThemeState = !darkTheme;
    setDarkTheme(newDarkThemeState);
    
    // Remove existing theme classes
    document.body.classList.remove('light-theme', 'dark-theme');
    
    // Add appropriate theme class
    document.body.classList.add(
      newDarkThemeState ? 'dark-theme' : 'light-theme'
    );
  };

  // Toggle seasonal mode
  const toggleSeasonalMode = () => {
    const newSeasonalModeState = !seasonalMode;
    setSeasonalMode(newSeasonalModeState);
    
    // Remove existing season classes
    document.body.classList.remove(
      'winter-theme', 'spring-theme', 'summer-theme', 
      'monsoon-theme', 'autumn-theme'
    );

    // Apply seasonal theme if activated
    if (newSeasonalModeState) {
      const season = determineCurrentSeason();
      setCurrentSeason(season);
      document.body.classList.add(`${season}-theme`);
    } else {
      // Reapply the current theme (dark or light) if seasonal mode is deactivated
      document.body.classList.add(darkTheme ? 'dark-theme' : 'light-theme');
    }
  };

  // Season icons mapping
  const seasonIcons = {
    winter: <FaSnowflake />,
    spring: <FaLeaf />,
    summer: <FaCloud />,
    monsoon: <FaUmbrella />,
    autumn: <FaTree />
  };

  return (
    <div className="theme-toggle-container">
      {/* Dark/Light Theme Toggle */}
      <button className="theme-toggle-btn" onClick={toggleTheme}>
        {darkTheme ? <FaSun /> : <FaMoon />}
      </button>

      {/* Seasonal Mode Toggle */}
      <button 
        className={`seasonal-toggle-btn ${seasonalMode ? 'active' : ''}`} 
        onClick={toggleSeasonalMode}
      >
        {seasonalMode 
          ? (currentSeason ? seasonIcons[currentSeason] : '🍃')
          : '🌈'
        }
      </button>
    </div>
  );
}

export default ThemeToggle;