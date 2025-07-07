import React from 'react';
import MainInfo from './MainInfo';
import BookingBox from './BookingBox';
import './ListingDetails.css'; // Crearemos este archivo CSS

const ListingDetails = ({ listing }) => {
  // Simulación de datos del listing si no se pasan
  const defaultListing = {
    host: { name: 'Anfitrión Ejemplo' },
    type: 'Apartamento completo',
    guests: 4,
    bedrooms: 2,
    beds: 2,
    baths: 1,
    description: 'Este es un apartamento encantador y espacioso, perfecto para tus vacaciones. Cuenta con todas las comodidades modernas y una ubicación céntrica. Disfruta de la ciudad desde este cómodo hogar lejos de casa.',
    amenities: [
      { name: 'Wi-Fi Rápido', icon: '📶' },
      { name: 'Cocina equipada', icon: '🍳' },
      { name: 'Aire acondicionado', icon: '❄️' },
      { name: 'TV con cable', icon: '📺' },
      { name: 'Lavadora y Secadora', icon: '🧺' },
      { name: 'Estacionamiento gratuito', icon: '🅿️' },
    ],
    pricePerNight: 150,
    rating: 4.85,
    reviewsCount: 120,
  };

  const currentListing = listing || defaultListing;

  return (
    <div className="listing-details-container">
      <div className="main-content-area">
        <MainInfo
          host={currentListing.host}
          type={currentListing.type}
          guests={currentListing.guests}
          bedrooms={currentListing.bedrooms}
          beds={currentListing.beds}
          baths={currentListing.baths}
          description={currentListing.description}
          amenities={currentListing.amenities}
        />
      </div>
      <aside className="sidebar-area">
        <BookingBox
          pricePerNight={currentListing.pricePerNight}
          rating={currentListing.rating}
          reviewsCount={currentListing.reviewsCount}
        />
      </aside>
    </div>
  );
};

export default ListingDetails;
