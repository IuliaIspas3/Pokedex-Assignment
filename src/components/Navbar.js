import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="left-items">
        <Link to="/">Home</Link>
        <Link to="/Pokedex">Pokedex</Link>
      </div>
    </nav>
  );
}

export default Navbar;
