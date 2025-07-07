import React from 'react';
import './Hero.css';

function Hero() {
  // En la homescreen actual de Airbnb, el "hero" es sutil,
  // a veces inexistente o integrado con la búsqueda o promociones.
  // Crearemos uno simple aquí como placeholder o para una versión diferente.
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Descubre tu próxima aventura</h1>
        <p>Explora alojamientos y experiencias únicas en todo el mundo.</p>
        {/* Podríamos añadir un botón de llamada a la acción si fuera necesario */}
        {/* <button className="hero-cta-button">Explorar ahora</button> */}
      </div>
    </section>
  );
}

export default Hero;
