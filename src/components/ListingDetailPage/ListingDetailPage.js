import React from 'react';
import { useParams } from 'react-router-dom';
import './ListingDetailPage.css'; // Crearemos este archivo para estilos específicos

// Necesitaremos acceso a los datos de los listings.
// Por ahora, duplicaremos la data o la importaremos si la movemos a un archivo JS/JSON separado.
// Para este ejemplo, la simplificaré aquí.
const listingsData = [
    {
      id: 1,
      image: 'https://via.placeholder.com/600x400/FF385C/FFFFFF?text=Listing+1+Detail',
      title: 'Entire villa hosted by Bruce',
      location: 'Palm Springs, California',
      rating: 4.88,
      reviews: 122,
      dates: 'Jul 15 - 20',
      price: 350,
      isSuperhost: true,
      description: 'This is a beautiful villa with all amenities. Enjoy the sun and relax by the pool. Perfect for families and groups.',
      host: { name: 'Bruce', avatar: 'https://via.placeholder.com/50/007bff/FFFFFF?text=B' }
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/600x400/00A699/FFFFFF?text=Listing+2+Detail',
      title: 'Cabin with amazing views',
      location: 'Asheville, North Carolina',
      rating: 4.95,
      reviews: 300,
      dates: 'Aug 1 - 7',
      price: 220,
      isSuperhost: false,
      description: 'Escape to this cozy cabin with breathtaking mountain views. Ideal for a romantic getaway or a solo retreat.',
      host: { name: 'Carol', avatar: 'https://via.placeholder.com/50/28a745/FFFFFF?text=C' }
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/600x400/767676/FFFFFF?text=Listing+3+Detail',
      title: 'Modern apartment in city center',
      location: 'New York, New York',
      rating: 4.7,
      reviews: 85,
      dates: 'Sep 10 - 15',
      price: 180,
      isSuperhost: true,
      description: 'Stay in the heart of the city! This modern apartment is close to all major attractions and offers a comfortable stay.',
      host: { name: 'David', avatar: 'https://via.placeholder.com/50/ffc107/000000?text=D' }
    },
    {
      id: 4,
      image: 'https://via.placeholder.com/600x400/FFB400/FFFFFF?text=Listing+4+Detail',
      title: 'Beachfront house with private pool',
      location: 'Malibu, California',
      rating: 4.99,
      reviews: 250,
      dates: 'Oct 5 - 12',
      price: 750,
      isSuperhost: true,
      description: 'Luxury beachfront house with stunning ocean views and a private pool. Your perfect California dream vacation.',
      host: { name: 'Sophia', avatar: 'https://via.placeholder.com/50/17a2b8/FFFFFF?text=S' }
    },
     {
      id: 5,
      image: 'https://via.placeholder.com/600x400/333333/FFFFFF?text=Listing+5+Detail',
      title: 'Cozy studio in historic district',
      location: 'Boston, Massachusetts',
      rating: 4.65,
      reviews: 70,
      dates: 'Nov 1 - 5',
      price: 120,
      isSuperhost: false,
      description: 'Charming and cozy studio located in the historic North End of Boston. Walk to everything!',
      host: { name: 'Mike', avatar: 'https://via.placeholder.com/50/6f42c1/FFFFFF?text=M' }
    },
    {
      id: 6,
      image: 'https://via.placeholder.com/600x400/FF5A5F/FFFFFF?text=Listing+6+Detail',
      title: 'Luxury condo with ocean view',
      location: 'Miami, Florida',
      rating: 4.91,
      reviews: 180,
      dates: 'Dec 3 - 10',
      price: 450,
      isSuperhost: true,
      description: 'Spacious luxury condo with direct ocean views. Enjoy the best of Miami lifestyle.',
      host: { name: 'Olivia', avatar: 'https://via.placeholder.com/50/fd7e14/FFFFFF?text=O' }
    }
  ];


function ListingDetailPage() {
  const { id } = useParams(); // Obtiene el 'id' de la URL
  const listing = listingsData.find(l => l.id === parseInt(id));

  if (!listing) {
    return <div className="listing-detail-page"><h2>Listing not found!</h2></div>;
  }

  return (
    <div className="listing-detail-page">
      <button onClick={() => window.history.back()} className="back-button">← Back to listings</button>
      <h1>{listing.title}</h1>
      <p className="location-rating">{listing.location} · ★ {listing.rating} ({listing.reviews} reviews)</p>
      <img src={listing.image} alt={listing.title} className="listing-detail-image" />

      <div className="detail-content">
        <div className="listing-main-info">
          <h2>{listing.isSuperhost ? 'Superhosted by ' : 'Hosted by '} {listing.host.name}</h2>
          <p>{listing.description}</p>
          {/* Aquí irían más detalles como amenities, sleeping arrangements, etc. */}
        </div>
        <div className="booking-box">
          <h3>${listing.price} <span className="price-night">/ noche</span></h3>
          <div className="date-picker-placeholder">
            <div className="date-input">
                <label htmlFor="checkin">CHECK-IN</label>
                <input type="text" id="checkin" placeholder="Add date" />
            </div>
            <div className="date-input">
                <label htmlFor="checkout">CHECKOUT</label>
                <input type="text" id="checkout" placeholder="Add date" />
            </div>
            <div className="guest-input">
                <label htmlFor="guests">GUESTS</label>
                <input type="text" id="guests" placeholder="1 guest" />
            </div>
          </div>
          <button className="reserve-button">Reserve</button>
          <p className="charge-notice">You won't be charged yet</p>
          {/* Aquí irían los desgloses de precio */}
        </div>
      </div>
    </div>
  );
}

export default ListingDetailPage;
