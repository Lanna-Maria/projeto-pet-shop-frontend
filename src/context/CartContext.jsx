import React, { createContext, useState, useContext } from 'react';


const CartContext = createContext();


export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      
      const itemExists = prevItems.find((item) => item.id === product.id);

      if (itemExists) {
        
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  
  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  
  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};


export const useCart = () => {
  return useContext(CartContext);
};