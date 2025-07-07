import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Categories from './components/Categories/Categories';
import Listings from './components/Listings/Listings';
import Footer from './components/Footer/Footer';
import ListingDetailPage from './components/ListingDetailPage/ListingDetailPage'; // Importar

// Componente para la página de inicio que agrupa los componentes originales
const HomePage = () => (
  <>
    <Hero />
    <Categories />
    <Listings />
  </>
);

function App() {
  return (
    <div className="App">
      <Header />
      <main> {/* Envolver contenido principal en <main> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/listing/:id" element={<ListingDetailPage />} />
          {/* Aquí podrías añadir una ruta para página no encontrada (404) */}
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
