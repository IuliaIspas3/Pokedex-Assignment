import React from 'react';
import { Link, useParams } from 'react-router-dom';
import PokemonDetails from '../components/PokemonDetails.js';
import Navbar from '../components/Navbar.js';

function About() {
  const { id } = useParams();

  const backButtonStyle = {
    alignItems: 'center',
    appearance: 'none',
    backgroundColor: '#fff',
    borderRadius: '24px',
    borderStyle: 'none',
    boxShadow: 'rgba(0, 0, 0, .2) 0 3px 5px -1px, rgba(0, 0, 0, .14) 0 6px 10px 0, rgba(0, 0, 0, .12) 0 1px 18px 0',
    boxSizing: 'border-box',
    color: '#3c4043',
    cursor: 'pointer',
    display: 'inline-flex',
    fill: 'currentcolor',
    fontFamily: '"Google Sans", Roboto, Arial, sans-serif',
    fontSize: '14px',
    fontWeight: '500',
    height: '48px',
    justifyContent: 'center',
    letterSpacing: '.25px',
    lineHeight: 'normal',
    maxWidth: '100%',
    overflow: 'visible',
    padding: '2px 24px',
    position: 'relative',
    textAlign: 'center',
    textTransform: 'none',
    transition: 'box-shadow 280ms cubic-bezier(.4, 0, .2, 1), opacity 15ms linear 30ms, transform 270ms cubic-bezier(0, 0, .2, 1) 0ms',
    userSelect: 'none',
    WebkitUserSelect: 'none',
    touchAction: 'manipulation',
    width: 'auto',
    willChange: 'transform, opacity',
    zIndex: '0',
    marginTop: "20px",
    margin: '0 auto', 
  };

  backButtonStyle[':hover'] = {
    background: '#F6F9FE',
    color: '#174ea6',
  };

  backButtonStyle[':active'] = {
    boxShadow: '0 4px 4px 0 rgb(60 64 67 / 30%), 0 8px 12px 6px rgb(60 64 67 / 15%)',
    outline: 'none',
  };

  backButtonStyle[':focus'] = {
    outline: 'none',
    border: '2px solid #4285f4',
  };

  backButtonStyle[':disabled'] = {
    boxShadow: 'rgba(60, 64, 67, .3) 0 1px 3px 0, rgba(60, 64, 67, .15) 0 4px 8px 3px',
  };

  return (
    <div>
      <Navbar />
      <div style={{marginTop: '30px'}}>
        <PokemonDetails id={id} />
        <div style={{ textAlign: 'center', marginTop: '30px' }}> 
        <Link to="/Pokedex" style={backButtonStyle}>Back</Link>
      </div>
      </div>
      
    </div>
  );
}

export default About;
