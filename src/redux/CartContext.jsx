  import React, { createContext, useContext, useState } from 'react';

  const CartContext = createContext();

  export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [countProducts, setCountProducts] = useState(0);

    const addToCart = (product) => {
      const existingProduct = cart.find((p) => p._id === product._id);

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        const newProduct = { ...product, quantity: 1 };
        setCart([...cart, newProduct]);
      }

      setTotal(total + product.price);
      setCountProducts(countProducts + 1);
    };

    const removeFromCart = (product) => {
      const updatedCart = cart.filter((item) => item._id !== product._id);
      setCart(updatedCart);
      setTotal(total - product.price * product.quantity);
      setCountProducts(countProducts - product.quantity);
    };

    const clearCart = () => {
      setCart([]);
      setTotal(0);
      setCountProducts(0);
    };

    return (
      <CartContext.Provider
        value={{ cart, total, countProducts, addToCart, removeFromCart, clearCart }}
      >
        {children}
      </CartContext.Provider>
    );
  };

  export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
      throw new Error('useCart must be used within a CartProvider');
    }
    return context;
  };
