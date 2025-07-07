import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Soporte</h4>
          <ul>
            <li><a href="#">Centro de ayuda</a></li>
            <li><a href="#">AirCover</a></li>
            <li><a href="#">Antidiscriminación</a></li>
            <li><a href="#">Opciones de cancelación</a></li>
            <li><a href="#">Informa un problema</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Comunidad</h4>
          <ul>
            <li><a href="#">Airbnb.org</a></li>
            <li><a href="#">Foro comunitario</a></li>
            <li><a href="#">Únete a un grupo</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Anfitriones</h4>
          <ul>
            <li><a href="#">Pon tu espacio en Airbnb</a></li>
            <li><a href="#">AirCover para anfitriones</a></li>
            <li><a href="#">Recursos para anfitriones</a></li>
            <li><a href="#">Foro comunitario</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Airbnb</h4>
          <ul>
            <li><a href="#">Noticias</a></li>
            <li><a href="#">Nuevas funciones</a></li>
            <li><a href="#">Inversionistas</a></li>
            <li><a href="#">Tarjetas de regalo</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} AirbnbClone, Inc. No rights reserved - This is a clone for educational purposes.</p>
        {/* Aquí podrían ir iconos de redes sociales si se desea */}
      </div>
    </footer>
  );
};

export default Footer;
