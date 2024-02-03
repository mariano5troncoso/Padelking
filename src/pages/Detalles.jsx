import React from 'react';
import ProductDetails from '../components/ProductDetails';

const Detalles = ({ products }) => {
  return (
    <div>
      <h1>Página de detalles</h1>
      <ProductDetails products={products} />
      {/* Agrega aquí el contenido adicional de tu página de detalles */}
    </div>
  );
}

export default Detalles;
