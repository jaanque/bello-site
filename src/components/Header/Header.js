import React from 'react';
import './Header.css';

// SVGs como componentes de React para mejor manejo y estilización si es necesario
// Idealmente, estos SVGs se obtendrían de una librería de iconos o se optimizarían.

const AirbnbLogo = () => (
  <svg
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Airbnb homepage" // Mejor accesibilidad
    role="img"
    focusable="false"
    style={{ height: '32px', width: 'auto', display: 'block', fill: 'currentColor' }} // Usar currentColor para heredar color
  >
    <path
      d="M16 1c2.008 0 3.937.305 5.765.903C12.843 2.111 3.333 7.25 3.333 16.046c0 8.138 8.062 12.887 12.667 12.887 4.604 0 12.667-4.75 12.667-12.887C28.667 7.25 19.157 2.111 10.235.903 12.063.305 13.992 1 16 1zm0 2.887c-6.094 0-10.781 4.225-10.781 10.78s4.687 10.78 10.781 10.78 10.781-4.226 10.781-10.78S22.094 3.887 16 3.887zm0 4.85c3.309 0 6.047 2.612 6.047 5.93s-2.738 5.93-6.047 5.93-6.047-2.612-6.047-5.93 2.738-5.93 6.047-5.93z"
      fill="#FF385C" // Color rojo característico de Airbnb
    ></path>
  </svg>
);


const SearchIcon = () => (
  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', fill: 'none', height: '12px', width: '12px', stroke: 'currentColor', strokeWidth: '5.33333', overflow: 'visible' }}>
    <g fill="none"><path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path></g>
  </svg>
);

const GlobeIcon = () => (
  <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '16px', width: '16px', fill: 'currentColor' }}>
    <path d="m8.002.25a7.77 7.77 0 0 1 7.748 7.776 7.75 7.75 0 0 1 -7.521 7.72l-.246.004a7.75 7.75 0 0 1 -7.73-7.513l-.003-.245a7.75 7.75 0 0 1 7.499-7.742zm1.949 8.5h-3.903c.155 2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.952-5.5zm-4.522 0h-2.65c.078 1.982.421 3.808 1.034 5.362l.002.005zm3.211-1h-2.552c-.122-2.996-.043-5.24 1.247-5.493l.075-.007c1.26.001 1.318 2.293 1.23 5.5zm-3.211-5.525c-.991 1.263-1.735 3.288-1.953 5.525h-1.305c.002-.32.035-.662.087-1.033l.005-.052c.494-3.294 1.427-5.018 2.968-5.452l.002-.001zm5.484-.001c1.553.44 2.496 2.183 2.969 5.453l.004.051.088 1.034h-1.306c-.215-2.233-.953-4.257-1.95-5.524l-.005-.007zm2.65 5.525h-2.65c-.086-3.207.004-5.496 1.303-5.496l.076.001c1.27.001 1.217 2.294 1.271 5.495z"></path>
  </svg>
);

const MenuIcon = () => (
  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', fill: 'none', height: '16px', width: '16px', stroke: 'currentColor', strokeWidth: '3', overflow: 'visible' }}>
    <g fill="none" fillRule="nonzero"><path d="m2 16h28"></path><path d="m2 24h28"></path><path d="m2 8h28"></path></g>
  </svg>
);

const UserIcon = () => (
  // Usando un SVG de perfil más genérico y común
  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{display: 'block', height: '22px', width: '22px', fill: '#717171'}}> {/* Color gris estándar para iconos de perfil */}
    <path d="M16 15.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9zm0 1.5c-5.05 0-9.22 3.081-11.055 7.332A13.906 13.906 0 0 0 16 29.999a13.906 13.906 0 0 0 11.055-5.667C25.22 19.081 21.05 17 16 17z"></path>
  </svg>
);


function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <a href="/" aria-label="Airbnb homepage" className="logo-link"> {/* Enlace en el logo */}
          <AirbnbLogo />
          {/* El texto "airbnb" a veces está presente, a veces no. Se puede omitir para un look más limpio como el actual de Airbnb. */}
          {/* <span className="logo-text">airbnb</span> */}
        </a>
      </div>

      <div className="header-center">
        {/* Esta es la barra de búsqueda simplificada, el real es más complejo */}
        <button className="search-tab active">Stays</button>
        <span className="search-divider"></span>
        <button className="search-tab">Experiences</button>
        <span className="search-divider"></span>
        <button className="search-tab">Online Experiences</button>
        <button className="search-button-wrapper">
          <span className="search-button-text">Anywhere</span> {/* Placeholder */}
          <span className="search-divider-vertical"></span>
          <span className="search-button-text">Any week</span> {/* Placeholder */}
          <span className="search-divider-vertical"></span>
          <span className="search-button-text light">Add guests</span> {/* Placeholder */}
          <div className="search-icon-background">
            <SearchIcon />
          </div>
        </button>
      </div>

      <div className="header-right">
        <button className="host-button">Airbnb your home</button>
        <button className="icon-button" aria-label="Choose a language and currency">
          <GlobeIcon />
        </button>
        <button className="user-menu-button" aria-label="Main navigation menu">
          <MenuIcon />
          <UserIcon />
        </button>
      </div>
    </header>
  );
}

export default Header;
