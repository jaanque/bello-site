import React from 'react';
import './Listings.css';
import ListingCard from './ListingCard';

function Listings() {
  // Datos de ejemplo más detallados, similares a Airbnb
  const listingsData = [
    {
      id: 1,
      image: 'https://via.placeholder.com/300x200/FF385C/FFFFFF?text=Listing+1', // Placeholder image
      title: 'Entire villa hosted by Bruce',
      location: 'Palm Springs, California',
      rating: 4.88,
      reviews: 122,
      dates: 'Jul 15 - 20',
      price: 350,
      isSuperhost: true,
      isFavorite: false,
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/300x200/00A699/FFFFFF?text=Listing+2',
      title: 'Cabin with amazing views',
      location: 'Asheville, North Carolina',
      rating: 4.95,
      reviews: 300,
      dates: 'Aug 1 - 7',
      price: 220,
      isSuperhost: false,
      isFavorite: true,
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/300x200/767676/FFFFFF?text=Listing+3',
      title: 'Modern apartment in city center',
      location: 'New York, New York',
      rating: 4.7,
      reviews: 85,
      dates: 'Sep 10 - 15',
      price: 180,
      isSuperhost: true,
      isFavorite: false,
    },
    {
      id: 4,
      image: 'https://via.placeholder.com/300x200/FFB400/FFFFFF?text=Listing+4',
      title: 'Beachfront house with private pool',
      location: 'Malibu, California',
      rating: 4.99,
      reviews: 250,
      dates: 'Oct 5 - 12',
      price: 750,
      isSuperhost: true,
      isFavorite: true,
    },
     {
      id: 5,
      image: 'https://via.placeholder.com/300x200/333333/FFFFFF?text=Listing+5',
      title: 'Cozy studio in historic district',
      location: 'Boston, Massachusetts',
      rating: 4.65,
      reviews: 70,
      dates: 'Nov 1 - 5',
      price: 120,
      isSuperhost: false,
      isFavorite: false,
    },
    {
      id: 6,
      image: 'https://via.placeholder.com/300x200/FF5A5F/FFFFFF?text=Listing+6',
      title: 'Luxury condo with ocean view',
      location: 'Miami, Florida',
      rating: 4.91,
      reviews: 180,
      dates: 'Dec 3 - 10',
      price: 450,
      isSuperhost: true,
      isFavorite: false,
    }
  ];

  return (
    <section className="listings-section">
      {/* Podríamos tener un título para la sección si es necesario */}
      {/* <h2>Explore nearby</h2> */}
      <div className="listings-grid">
        {listingsData.map(listing => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </div>
    </section>
  );
}

export default Listings;
