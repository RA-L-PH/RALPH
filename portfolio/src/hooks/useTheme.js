import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Header = () => (
  <header className="flex justify-between items-center p-4 bg-light dark:bg-dark shadow-md">
    <Link to="/" className="text-2xl font-bold">
      <span className="text-primary">Firebase</span> Alchemist
    </Link>
    <nav className="flex gap-4">
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
    </nav>
    <ThemeToggle />
  </header>
);

export default Header;
