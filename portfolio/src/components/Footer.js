import React from 'react';

const Footer = () => (
  <footer className="bg-light dark:bg-dark py-4 text-center">
    <p className="text-sm">
      © {new Date().getFullYear()} Firebase Alchemist. All rights reserved.
    </p>
  </footer>
);

export default Footer;
