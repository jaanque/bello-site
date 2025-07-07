import React from 'react';
import { useParams } from 'react-router-dom';
// Importar los componentes de la página de detalle
import Navbar from '../components/HomePage/Navbar/Navbar'; // Reutilizamos Navbar
import Footer from '../components/HomePage/Footer/Footer'; // Reutilizamos Footer
import ListingHeader from '../components/DetailPage/ListingHeader/ListingHeader';
import ImageGallery from '../components/DetailPage/ImageGallery/ImageGallery';
import ListingDetails from '../components/DetailPage/ListingDetails/ListingDetails';
import ReviewsSection from '../components/DetailPage/ReviewsSection/ReviewsSection';
import LocationSection from '../components/DetailPage/LocationSection/LocationSection';
// Idealmente, tendríamos datos de un backend o un store, aquí usaremos placeholders.

const DetailPage = () => {
  let { listingId } = useParams(); // Para obtener el ID del listing de la URL

  // Aquí normalmente harías un fetch a una API para obtener los datos del listingId
  // Por ahora, usaremos datos de ejemplo simulados.
  const sampleListingData = {
    id: listingId,
    name: `Alojamiento de Lujo con Vistas ${listingId}`,
    rating: 4.92,
    reviewsCount: 175,
    location: 'Ciudad Ejemplo, País Ejemplo',
    images: [ // Podrías tener URLs reales aquí
      "https://via.placeholder.com/600x400/000000/FFFFFF/?text=Principal+Listing+" + listingId,
      "https://via.placeholder.com/300x200/111111/EEEEEE/?text=Vista+2",
      "https://via.placeholder.com/300x200/222222/DDDDDD/?text=Interior+3",
      "https://via.placeholder.com/300x200/0a0a0a/F0F0F0/?text=Baño+4",
      "https://via.placeholder.com/300x200/1a1a1a/EAEAEA/?text=Detalle+5",
    ],
    host: { name: 'Juan Anfitrión' },
    type: 'Villa completa',
    guests: 8,
    bedrooms: 4,
    beds: 5,
    baths: 3,
    description: `Disfruta de una experiencia inolvidable en esta villa exclusiva (ID: ${listingId}). Ofrece vistas panorámicas, interiores de diseño y todas las comodidades modernas. Perfecta para grupos grandes o familias que buscan lujo y confort. La cocina está totalmente equipada, y hay múltiples áreas de estar y comedor.`,
    amenities: [
      { name: 'Piscina privada', icon: '🏊' },
      { name: 'Wi-Fi de alta velocidad', icon: '📶' },
      { name: 'Jacuzzi', icon: '♨️' },
      { name: 'Gimnasio', icon: '🏋️' },
      { name: 'Cine en casa', icon: '🎬' },
    ],
    pricePerNight: 350,
    reviews: [ // Podrías tener un array de objetos de reseña más completo
      { id: 1, userName: 'Sofia R.', date: 'abril de 2024', rating: 5, text: '¡Espectacular! Mucho mejor de lo que esperábamos. Las fotos no le hacen justicia.' },
      { id: 2, userName: 'Martin L.', date: 'marzo de 2024', rating: 4, text: 'Muy buena propiedad, aunque un poco alejada del centro. La piscina es fantástica.' },
    ],
    address: `Calle Ficticia 123, Urbanización Sueños, Ciudad Ejemplo`,
    neighborhoodDescription: 'El vecindario es tranquilo y seguro, con fácil acceso a tiendas locales y restaurantes. Hay un parque cercano ideal para pasear.',
    mapImageUrl: `https://via.placeholder.com/800x400/050505/FAFAFA/?text=Mapa+de+Villa+${listingId}`
  };

  // En un caso real, aquí podrías tener lógica para manejar un listingId no encontrado.

  return (
    <>
      <Navbar />
      <main className="app-content detail-page-content">
        <ListingHeader
          name={sampleListingData.name}
          rating={sampleListingData.rating}
          reviewsCount={sampleListingData.reviewsCount}
          location={sampleListingData.location}
        />
        <ImageGallery images={sampleListingData.images} />
        <ListingDetails listing={sampleListingData} />
        <ReviewsSection
          reviews={sampleListingData.reviews}
          overallRating={sampleListingData.rating}
          totalReviews={sampleListingData.reviewsCount}
        />
        <LocationSection
          address={sampleListingData.address}
          neighborhoodDescription={sampleListingData.neighborhoodDescription}
          mapImageUrl={sampleListingData.mapImageUrl}
        />
      </main>
      <Footer />
      {/* Estilo específico para el contenedor de la página de detalle si es necesario */}
      <style jsx global>{`
        .detail-page-content {
          max-width: 1120px; /* Ancho típico de contenido en Airbnb */
          margin: 0 auto;
          padding: 0 20px; /* Padding lateral */
        }
        @media (max-width: 768px) {
          .detail-page-content {
            padding: 0 15px;
          }
        }
      `}</style>
    </>
  );
};

export default DetailPage;
