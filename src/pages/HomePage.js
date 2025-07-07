import React from 'react';
import Navbar from '../components/HomePage/Navbar/Navbar';
import CategoriesBar from '../components/HomePage/CategoriesBar/CategoriesBar';
import ListingsGrid from '../components/HomePage/ListingsGrid/ListingsGrid';
import Footer from '../components/HomePage/Footer/Footer';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <CategoriesBar />
      <main className="app-content">
        <ListingsGrid />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
