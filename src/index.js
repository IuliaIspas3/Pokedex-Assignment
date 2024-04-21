import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './routes/App.js';
import { RouterProvider, createHashRouter } from "react-router-dom";
import Pokedex from './routes/Pokedex.js'; 
import About from './routes/About.js';

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/Pokedex",
        element: <Pokedex />
      },
      {
        path: "/About/:id",
        element: <About />
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

const Index = () => {
  return (
    <>
     <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
    </>
   
  );
};

root.render(<Index />);
