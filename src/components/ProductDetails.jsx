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
    
      <><h2 className="text-3xl text-center mb-6">{product.name}</h2><CarouselDefault images={product.cover_photo} /><div className="max-w-screen-md mx-auto">
      <article>
        <table className="table-auto mx-auto mt-5 border">
          <tbody>
            <tr>
              <td className="border px-4 py-2 text-white bg-slate-600">Descripción:</td>
              <td className="border px-4 py-2 text-balance bg-slate-400">{product.description}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 text-white bg-slate-600">Marca:</td>
              <td className="border px-4 py-2 bg-slate-400">{product.brand}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 text-white bg-slate-600">Precio:</td>
              <td className="border px-4 py-2 bg-slate-400">{product.price}$USD</td>
            </tr>
          </tbody>
        </table>

      </article>
    </div></>
    
  );
};

export default ProductDetails;
