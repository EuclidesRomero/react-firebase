import React from 'react';
import Productos from '../pages/Productos';
import '../../src/App.css';
import { CarritoProvider } from '../context/CarritoProvider';

const HomePageProducts = () => {
  return (
    <>
        <h1 className="text-3xl text-center font-bold top-0 mb-10 text-neutral-950 mt-44">
          Artesanías Colombianas 
        </h1>
    <div className="container mx-auto px-4  ">
      <header className="mb-10">
        <div className="bg-banner-img h-48 bg-cover bg-center rounded-lg shadow-lg mb-6"></div>
      </header>

      <section className="mb-10">
        <h2 className="text-center text-2xl font-bold mb-6 mt-10">
          Productos Disponibles
        </h2>
        <Productos />
      </section>
    </div>
    </>
  );
};

export default HomePageProducts;
