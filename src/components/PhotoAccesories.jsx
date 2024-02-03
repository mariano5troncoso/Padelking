import React from 'react';
import { useParams } from 'react-router-dom';

const AccessoryDetails = ({ accessories }) => {
  const { accessoryId } = useParams();
  const accessory = accessories.find((a) => a._id === accessoryId);

  if (!accessory) {
    return <div>Accesorio no encontrado</div>;
  }

  return (
    <div>
      <h2>{accessory.name}</h2>
      <img src={accessory.cover_photo[0]} alt={accessory.name} />
      <img src={accessory.cover_photo[1]} alt={accessory.name} />
      <img src={accessory.cover_photo[2]} alt={accessory.name} />
      <p>{accessory.description}</p>
      <p>Marca: {accessory.brand}</p>
      <p>Precio: {accessory.price}</p>
    </div>
  );
};

export default AccessoryDetails;
