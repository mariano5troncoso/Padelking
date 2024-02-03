import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = ({ products }) => {
  const { productId } = useParams();

  // Verificar si products está definido y es un array antes de llamar a find
  if (!products || !Array.isArray(products)) {
    return <div>Error: No hay productos disponibles.</div>;
  }

  const product = products.find((p) => p._id === parseInt(productId));

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.cover_photo[0]} alt={product.name} />
      <p>{product.description}</p>
      <p>Marca: {product.brand}</p>
      <p>Precio: {product.price}</p>
    </div>
  );
};

export default ProductDetails;  
