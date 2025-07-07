import React from 'react';
import ListingCard from './ListingCard/ListingCard';
import './ListingsGrid.css';

// Datos de ejemplo para los listados
export const sampleListings = [ // Añadido export
  { id: 1, name: 'Apartamento con estilo en el centro', location: 'Ciudad Principal', price: 120, rating: 4.8, imageUrl: 'https://via.placeholder.com/300x200/111111/EEEEEE/?text=Apto+1' },
  { id: 2, name: 'Cabaña acogedora en el bosque', location: 'Montaña Verde', price: 95, rating: 4.9, imageUrl: 'https://via.placeholder.com/300x200/222222/DDDDDD/?text=Cabaña+2' },
  { id: 3, name: 'Villa moderna con piscina', location: 'Costa del Sol', price: 250, rating: 4.7, imageUrl: 'https://via.placeholder.com/300x200/000000/FFFFFF/?text=Villa+3' },
  { id: 4, name: 'Loft urbano con vistas', location: 'Distrito Financiero', price: 150, rating: 4.6, imageUrl: 'https://via.placeholder.com/300x200/121212/EDEDED/?text=Loft+4' },
  { id: 5, name: 'Casa de playa relajante', location: 'Playa Serena', price: 180, rating: 4.9, imageUrl: 'https://via.placeholder.com/300x200/0a0a0a/F0F0F0/?text=Playa+5' },
  { id: 6, name: 'Estudio compacto y funcional', location: 'Barrio Universitario', price: 70, rating: 4.5, imageUrl: 'https://via.placeholder.com/300x200/1f1f1f/EAEAEA/?text=Estudio+6' },
  { id: 7, name: 'Casa histórica restaurada', location: 'Casco Antiguo', price: 200, rating: 4.8, imageUrl: 'https://via.placeholder.com/300x200/0f0f0f/F1F1F1/?text=Histórica+7' },
  { id: 8, name: 'Retiro tranquilo en la naturaleza', location: 'Valle Escondido', price: 110, rating: 4.9, imageUrl: 'https://via.placeholder.com/300x200/191919/E9E9E9/?text=Retiro+8' },
];

const ListingsGrid = () => {
  return (
    <div className="listings-grid-container">
      <div className="listings-grid">
        {sampleListings.map(listing => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </div>
    </div>
  );
};

export default ListingsGrid;
