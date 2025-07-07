import React from 'react';
import './Footer.css';

const GlobeIcon = () => (
  <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'inline-block', verticalAlign: 'middle', height: '16px', width: '16px', fill: 'currentColor', marginRight: '8px' }}>
    <path d="m8.002.25a7.77 7.77 0 0 1 7.748 7.776 7.75 7.75 0 0 1 -7.521 7.72l-.246.004a7.75 7.75 0 0 1 -7.73-7.513l-.003-.245a7.75 7.75 0 0 1 7.499-7.742zm1.949 8.5h-3.903c.155 2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.952-5.5zm-4.522 0h-2.65c.078 1.982.421 3.808 1.034 5.362l.002.005zm3.211-1h-2.552c-.122-2.996-.043-5.24 1.247-5.493l.075-.007c1.26.001 1.318 2.293 1.23 5.5zm-3.211-5.525c-.991 1.263-1.735 3.288-1.953 5.525h-1.305c.002-.32.035-.662.087-1.033l.005-.052c.494-3.294 1.427-5.018 2.968-5.452l.002-.001zm5.484-.001c1.553.44 2.496 2.183 2.969 5.453l.004.051.088 1.034h-1.306c-.215-2.233-.953-4.257-1.95-5.524l-.005-.007zm2.65 5.525h-2.65c-.086-3.207.004-5.496 1.303-5.496l.076.001c1.27.001 1.217 2.294 1.271 5.495z"></path>
  </svg>
);

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section links-section">
          <div className="footer-column">
            <h3>Soporte</h3>
            <ul>
              <li><a href="#">Centro de Ayuda</a></li>
              <li><a href="#">BelloCover</a></li> {/* Adaptado */}
              <li><a href="#">Anti-discriminación</a></li>
              <li><a href="#">Soporte por discapacidad</a></li>
              <li><a href="#">Opciones de cancelación</a></li>
              <li><a href="#">Reportar preocupación vecinal</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Anfitriones</h3> {/* Adaptado */}
            <ul>
              <li><a href="#">Publica tu espacio en Bello</a></li> {/* Adaptado */}
              <li><a href="#">BelloCover para Anfitriones</a></li> {/* Adaptado */}
              <li><a href="#">Recursos para anfitriones</a></li>
              <li><a href="#">Foro comunitario</a></li>
              <li><a href="#">Ser anfitrión responsablemente</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Bello</h3> {/* Adaptado */}
            <ul>
              <li><a href="#">Noticias</a></li>
              <li><a href="#">Nuevas funciones</a></li>
              <li><a href="#">Empleo</a></li>
              <li><a href="#">Inversores</a></li>
              <li><a href="#">Tarjetas de regalo</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-section bottom-section">
          <div className="bottom-left">
            <span>© {currentYear} Bello, Inc.</span> {/* Adaptado */}
            <a href="#">Términos</a>
            <a href="#">Mapa del sitio</a>
            <a href="#">Privacidad</a>
            <a href="#">Tus Opciones de Privacidad</a> {/* Icono placeholder para Your Privacy Choices */}
          </div>
          <div className="bottom-right">
            <button className="footer-button">
              <GlobeIcon />
              Español (ES) {/* Adaptado */}
            </button>
            <button className="footer-button">
              € EUR {/* Adaptado */}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
