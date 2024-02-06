import React from 'react';
import { useParams } from 'react-router-dom';
import { CarouselDefault } from './PhotoPaletas';

const AccessoryDetails = ({ accessories }) => {
  const { accessoryId } = useParams();
  const accessory = accessories.find((a) => a._id === accessoryId);

  if (!accessory) {
    return <div>Accesorio no encontrado</div>;
  }

  return (
    <div>
      <h2 className="text-3xl text-center mb-6">{accessory.name}</h2>
      <CarouselDefault images={accessory.cover_photo} />
      <article>
        <p className='text-balance bg-slate-400 m-3 text-center'>{accessory.description}</p>
        <p>Marca: {accessory.brand}</p>
        <p>Precio: {accessory.price}</p>
      </article>
    </div>
  );
};

export default AccessoryDetails;
