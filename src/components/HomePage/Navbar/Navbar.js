import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">AirbnbClone</a>
      </div>
      <div className="navbar-search">
        <input type="text" placeholder="Destino" />
        <input type="text" placeholder="Llegada" />
        <input type="text" placeholder="Salida" />
        <input type="text" placeholder="Huéspedes" />
        <button>Buscar</button>
      </div>
      <div className="navbar-usermenu">
        <button>Iniciar Sesión</button>
        <button>Registrarse</button>
      </div>
    </nav>
  );
};

export default Navbar;
