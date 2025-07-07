import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
// Los componentes individuales como Navbar, Footer, etc.,
// ahora se importan dentro de HomePage y DetailPage.

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/listing/:listingId" element={<DetailPage />} />
        {/* Aquí podrías añadir más rutas, como /login, /profile, etc. */}
        {/* También una ruta para "Not Found" */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
