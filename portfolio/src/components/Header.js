import React from "react";
import logo from "../assets/RC-removebg-preview.png";
import ThemeToggle from "./ThemeToggle";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="logo" className="w-20 h-20" />
      <ThemeToggle />
    </header>
  );
}

export default Header;