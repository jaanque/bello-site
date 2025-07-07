import React from 'react';
import { useParams } from 'react-router-dom';
import './DetailPage.css'; // Importar el archivo CSS
// Importar los componentes de la página de detalle
import Navbar from '../components/HomePage/Navbar/Navbar';
import Footer from '../components/HomePage/Footer/Footer';
import ListingHeader from '../components/DetailPage/ListingHeader/ListingHeader';
import ImageGallery from '../components/DetailPage/ImageGallery/ImageGallery';
import ListingDetails from '../components/DetailPage/ListingDetails/ListingDetails';
import ReviewsSection from '../components/DetailPage/ReviewsSection/ReviewsSection';
import LocationSection from '../components/DetailPage/LocationSection/LocationSection';
// Datos de ejemplo (idealmente vendrían de un fetch o estado global)
import sampleListings from '../components/HomePage/ListingsGrid/ListingsGrid';


const DetailPage = () => {
  let { listingId } = useParams();

  // Encontrar el listing basado en listingId. Convertir listingId a número si es necesario.
  const currentListing = sampleListings.find(l => l.id.toString() === listingId);

  // Si no se encuentra el listing, mostrar un mensaje o redirigir (no implementado aquí)
  if (!currentListing) {
    return (
        <>
            <Navbar />
            {/* Aplicar la clase directamente al main o a un div wrapper */}
            <main className="detail-page-content-wrapper" style={{color: '#fff', textAlign: 'center', padding: '40px 0'}}>
                <div>
                    <h2>Alojamiento no encontrado</h2>
                    <p>No pudimos encontrar el alojamiento que buscas.</p>
                </div>
            </main>
            <Footer />
        </>
    );
  }

  // Simular datos más detallados para la página de detalle, basados en el currentListing
  const detailedListingData = {
    ...currentListing, // Incluye id, name, location, price, rating, imageUrl
    reviewsCount: Math.floor(Math.random() * 200) + 5, // Simular número de reseñas
    images: [
      currentListing.imageUrl || `https://via.placeholder.com/600x400/000000/FFFFFF/?text=Principal+${currentListing.id}`,
      `https://via.placeholder.com/300x200/111111/EEEEEE/?text=Vista+A`,
      `https://via.placeholder.com/300x200/222222/DDDDDD/?text=Vista+B`,
      `https://via.placeholder.com/300x200/0a0a0a/F0F0F0/?text=Detalle+C`,
      `https://via.placeholder.com/300x200/1a1a1a/EAEAEA/?text=Detalle+D`,
    ],
    host: { name: 'Anfitrión Ejemplo' },
    type: currentListing.name.includes('Cabaña') ? 'Cabaña entera' : 'Apartamento completo',
    guests: Math.floor(Math.random() * 4) + 2,
    bedrooms: Math.floor(Math.random() * 2) + 1,
    beds: Math.floor(Math.random() * 2) + 2,
    baths: Math.floor(Math.random() * 1) + 1,
    description: `Descubre ${currentListing.name}, un espacio único en ${currentListing.location}. Perfecto para tu próxima escapada, ofreciendo comodidad y estilo. Este lugar (ID: ${currentListing.id}) está cuidadosamente preparado para asegurar una estancia memorable.`,
    amenities: [
      { name: 'Wi-Fi', icon: '📶' },
      { name: 'Cocina', icon: '🍳' },
      { name: 'Aire acondicionado', icon: '❄️' },
      { name: 'TV', icon: '📺' },
    ],
    // pricePerNight ya está en currentListing
    reviews: [
      { id: 1, userName: 'Alex R.', date: 'mayo de 2024', rating: 5, text: '¡Fantástico! Exactamente como en las fotos. Muy limpio y acogedor.' },
      { id: 2, userName: 'Maria C.', date: 'abril de 2024', rating: 4, text: 'Buena ubicación y el anfitrión fue amable. El lugar es cómodo.' },
    ],
    address: `${currentListing.location}, Calle Principal 123`,
    neighborhoodDescription: 'Un barrio vibrante y lleno de vida, con fácil acceso a transporte, tiendas y restaurantes locales. Ideal para explorar la ciudad.',
    mapImageUrl: `https://via.placeholder.com/800x400/080808/FAFAFA/?text=Mapa+${currentListing.id}`
  };

  return (
    <>
      <Navbar />
      {/* Usar un wrapper para el contenido de la página de detalle para aplicar max-width y padding */}
      <div className="detail-page-content-wrapper">
        <ListingHeader
          name={detailedListingData.name}
          rating={detailedListingData.rating}
          reviewsCount={detailedListingData.reviewsCount}
          location={detailedListingData.location}
        />
        <ImageGallery images={detailedListingData.images} />
        <ListingDetails listing={detailedListingData} /> {/* Pasamos todos los datos */}
        <ReviewsSection
          reviews={detailedListingData.reviews}
          overallRating={detailedListingData.rating}
          totalReviews={detailedListingData.reviewsCount}
        />
        <LocationSection
          address={detailedListingData.address}
          neighborhoodDescription={detailedListingData.neighborhoodDescription}
          mapImageUrl={detailedListingData.mapImageUrl}
        />
      </div>
      <Footer />
      {/* El bloque <style jsx global> ha sido eliminado y su contenido movido a DetailPage.css */}
    </>
  );
};

export default DetailPage;
