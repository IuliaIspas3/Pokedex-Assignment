import './App.css';
import { Outlet, useLocation } from "react-router-dom";
import Navbar from '../components/Navbar.js';

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/' && <Navbar />}
      <Outlet />
      {location.pathname === '/' && (
        <div className="welcome-container">
          <h1 className='welcome'>Welcome to</h1>
          <img src="https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png" alt="Project logo" className="logo" />
        </div>
      )}
    </>
  );
}

export default App;
