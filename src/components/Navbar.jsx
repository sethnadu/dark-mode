import React, { useState } from 'react';
import useLocalStorage from "../Hooks/useLocalStorage.js"
import useDarkMode from "../Hooks/useDarkMode.js";

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  console.log(useDarkMode);
  const toggleMode = e => {
    e.preventDefault();
     setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={useDarkMode(darkMode) ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
