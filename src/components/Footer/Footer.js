import React from 'react';
import './Footer.css';

// Icono de globo terráqueo (similar al del header, podría ser un componente reutilizable)
const GlobeIcon = () => (
  <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'inline-block', verticalAlign: 'middle', height: '16px', width: '16px', fill: 'currentColor', marginRight: '8px' }}>
    <path d="m8.002.25a7.77 7.77 0 0 1 7.748 7.776 7.75 7.75 0 0 1 -7.521 7.72l-.246.004a7.75 7.75 0 0 1 -7.73-7.513l-.003-.245a7.75 7.75 0 0 1 7.499-7.742zm1.949 8.5h-3.903c.155 2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.952-5.5zm-4.522 0h-2.65c.078 1.982.421 3.808 1.034 5.362l.002.005zm3.211-1h-2.552c-.122-2.996-.043-5.24 1.247-5.493l.075-.007c1.26.001 1.318 2.293 1.23 5.5zm-3.211-5.525c-.991 1.263-1.735 3.288-1.953 5.525h-1.305c.002-.32.035-.662.087-1.033l.005-.052c.494-3.294 1.427-5.018 2.968-5.452l.002-.001zm5.484-.001c1.553.44 2.496 2.183 2.969 5.453l.004.051.088 1.034h-1.306c-.215-2.233-.953-4.257-1.95-5.524l-.005-.007zm2.65 5.525h-2.65c-.086-3.207.004-5.496 1.303-5.496l.076.001c1.27.001 1.217 2.294 1.271 5.495z"></path>
  </svg>
);
// Icono de flecha hacia arriba para selector de moneda/idioma (muy simplificado)
const ChevronUpIcon = () => (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{display: "block", fill: "none", height: "12px", width: "12px", stroke: "currentcolor", strokeWidth: "5.333333333333333", overflow: "visible", marginLeft: '4px'}}>
        <path d="m28 20-12-12-12 12"></path>
    </svg>
)


function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section links-section">
          <div className="footer-column">
            <h3>Support</h3>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">AirCover</a></li>
              <li><a href="#">Anti-discrimination</a></li>
              <li><a href="#">Disability support</a></li>
              <li><a href="#">Cancellation options</a></li>
              <li><a href="#">Report neighborhood concern</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Hosting</h3>
            <ul>
              <li><a href="#">Airbnb your home</a></li>
              <li><a href="#">AirCover for Hosts</a></li>
              <li><a href="#">Hosting resources</a></li>
              <li><a href="#">Community forum</a></li>
              <li><a href="#">Hosting responsibly</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Airbnb</h3>
            <ul>
              <li><a href="#">Newsroom</a></li>
              <li><a href="#">New features</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Investors</a></li>
              <li><a href="#">Gift cards</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-section bottom-section">
          <div className="bottom-left">
            <span>© {currentYear} Airbnb, Inc.</span>
            <a href="#">Terms</a>
            <a href="#">Sitemap</a>
            <a href="#">Privacy</a>
            <a href="#">Your Privacy Choices</a> {/* Icono placeholder para Your Privacy Choices */}
          </div>
          <div className="bottom-right">
            <button className="footer-button">
              <GlobeIcon />
              English (US)
            </button>
            <button className="footer-button">
              $ USD
            </button>
            {/* <button className="footer-button">
              Support & resources <ChevronUpIcon/>
            </button> */}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
