import React from 'react';
import { useParams } from 'react-router-dom';
import { CarouselDefault } from './PhotoPaletas';

const ProductDetails = ({ products }) => {
  const { productId } = useParams();
  const product = products.find((p) => p._id === productId);

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div>
      <h2 className="text-3xl text-center   mb-6">{product.name}</h2>
      <CarouselDefault images={product.cover_photo} />
      <article>
      <p className='text-balance bg-slate-400 m-3 text-center'>{product.description}</p>
      <p>Marca: {product.brand}</p>
      <p>Precio: {product.price}</p>
      </article>
      
    </div>
  );
};

export default ProductDetails;