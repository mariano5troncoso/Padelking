import React from "react";
import { Fade } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";
import { useCart } from '../redux/CartContext'; // Importa el contexto del carrito
import { Button } from '@material-tailwind/react';
import { productsData } from "./Palas";

const Products = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart(); // Utiliza la función addToCart del contexto

  const handleProductClick = (productId) => {
    const product = productsData.find((p) => p._id === productId);
    navigate(`/product/${productId}`);
  };

  const handleAddToCart = (productId) => {
    const product = productsData.find((p) => p._id === productId);
    addToCart(product);
  };

  return (
    <Fade>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold text-center tracking-tight text-gray-900">Las mejores paletas en un mismo lugar</h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
            {productsData && productsData.map((product) => (
              <div key={product._id} className="group relative" onClick={() => handleProductClick(product._id)}>
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 shadow-md lg:h-80">
                  <img
                    src={product.cover_photo[0]}
                    alt={product.name}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full "
                  />
                  <span aria-hidden="true" className="absolute inset-0" />
                </div>
                <div className="mt-4 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.brand}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price} $USD</p>
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Products;
