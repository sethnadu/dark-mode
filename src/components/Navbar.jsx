import React, { useState } from 'react';
import useLocalStorage from "../Hooks/useLocalStorage.js"
import useDarkMode from "../Hooks/useDarkMode.js";

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  
  const toggleMode = e => {
    e.preventDefault();
     setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div className = {useDarkMode(darkMode)}>
        <div
          onClick={toggleMode}
          className={(darkMode) ? 'toggle toggled' : 'toggle'}
        />
      </div>
      </div>
    </nav>
  );
};
 
export default Navbar;
