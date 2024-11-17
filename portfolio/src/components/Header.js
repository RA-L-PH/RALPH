import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-light dark:bg-dark shadow-md py-4 px-6 flex justify-between items-center">
    <h1 className="text-xl font-bold">
      <Link to="/">Portfolio</Link>
    </h1>
    <nav>
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="hover:text-blue-500">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-blue-500">
            About
          </Link>
        </li>
        <li>
          <Link to="/projects" className="hover:text-blue-500">
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
