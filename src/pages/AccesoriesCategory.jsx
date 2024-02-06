import React from 'react';
import { useCart } from '../redux/CartContext';
import { Button } from '@material-tailwind/react';
import { accessories } from '../components/Accesorios';

export default function Accesorios() {
  const { addToCart } = useCart();

  const handleAddToCart = (productId) => {
    const accessory = accessories.find((a) => a._id === productId);
    console.log('Adding to cart:', accessory);
    addToCart(accessory);
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Productos relacionados</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {accessories && accessories.map((accessory) => (
            <div key={accessory._id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={accessory.cover_photo[0]}
                  alt={accessory.name}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
                <span aria-hidden="true" className="absolute inset-0" />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {accessory.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{accessory.brand}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{accessory.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
