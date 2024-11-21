import React from "react";
import logo from "../assets/logo.png";
import ThemeToggle from "./ThemeToggle";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="logo" className="logo" />
      <h2>"If it Works, Don't Mess with It"</h2>
      <ThemeToggle />
    </header>
  );
}

export default Header;