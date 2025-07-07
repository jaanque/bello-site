import React from 'react';
import './Header.css';

// Componente de Logo para "Bello"
const BelloLogo = () => (
  <span className="bello-logo-text">Bello</span>
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
  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{display: 'block', height: '22px', width: '22px', fill: '#717171'}}>
    <path d="M16 15.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9zm0 1.5c-5.05 0-9.22 3.081-11.055 7.332A13.906 13.906 0 0 0 16 29.999a13.906 13.906 0 0 0 11.055-5.667C25.22 19.081 21.05 17 16 17z"></path>
  </svg>
);


function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <a href="/" aria-label="Bello homepage" className="logo-link">
          <BelloLogo />
        </a>
      </div>

      <div className="header-center">
        {/* TODO: Adaptar estos botones a "Bello" (ej. "Espacios", "Experiencias", "Eventos Online") */}
        <button className="search-tab active">Espacios</button>
        <span className="search-divider"></span>
        <button className="search-tab">Experiencias</button>
        {/* <span className="search-divider"></span>
        <button className="search-tab">Online Experiences</button> */}
        <button className="search-button-wrapper">
          <span className="search-button-text">Cualquier lugar</span> {/* Placeholder */}
          <span className="search-divider-vertical"></span>
          <span className="search-button-text">Cualquier semana</span> {/* Placeholder */}
          <span className="search-divider-vertical"></span>
          <span className="search-button-text light">¿Cuántos?</span> {/* Placeholder */}
          <div className="search-icon-background">
            <SearchIcon />
          </div>
        </button>
      </div>

      <div className="header-right">
        {/* TODO: Cambiar "Airbnb your home" a algo como "Ofrece tu espacio" */}
        <button className="host-button">Ofrece tu espacio</button>
        <button className="icon-button" aria-label="Elige idioma y moneda">
          <GlobeIcon />
        </button>
        <button className="user-menu-button" aria-label="Menú de navegación principal">
          <MenuIcon />
          <UserIcon />
        </button>
      </div>
    </header>
  );
}

export default Header;
