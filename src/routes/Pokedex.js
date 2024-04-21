import React, { useState } from 'react';
import PokemonCatalogue from '../components/PokemonCatalogue.js';
import Pagination from '../components/Pagination.js';
import Navbar from '../components/Navbar.js'; 

function Pokedex() {
  const [currentPage, setCurrentPage] = useState(0);
  const imgStyle = {
    width: "400px",
    height: "auto"
  }

  const pokedexStyle = {
    margin: "20px"
  }

  return (
    <div>
      <Navbar /> 
      <div style={pokedexStyle}>
        <img src="https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png" alt="Project logo" style={imgStyle}/> 
        <PokemonCatalogue page={currentPage} />
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
    </div>
  );
}

export default Pokedex;
