// // ProductContext.js
// import React, { createContext, useState } from 'react';

// const ProductContext = createContext();

// const ProductProvider = ({ children }) => {
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (product) => {
//     const existingItem = cartItems.find(item => item.product.id === product.id);
//     if (existingItem) {
//       // If the product already exists in the cart, increase its quantity
//       setCartItems(cartItems.map(item => {
//         if (item.product.id === product.id) {
//           return { ...item, quantity: item.quantity + 1 };
//         }
//         return item;
//       }));
//     } else {
//       // If the product is not in the cart, add it with quantity 1
//       setCartItems([...cartItems, { product, quantity: 1 }]);
//     }
//   };

//   return (
//     <ProductContext.Provider value={{ selectedProduct, setSelectedProduct, cartItems, addToCart }}>
//       {children}
//     </ProductContext.Provider>
//   );
// };

// export { ProductContext, ProductProvider };

// ProductContext.js
// ProductContext.js
import React, { createContext, useState, useEffect } from 'react';

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState(() => {
    try {
      const savedCartItems = localStorage.getItem('cartItems');
      return savedCartItems ? JSON.parse(savedCartItems) : [];
    } catch (error) {
      console.error('Error parsing cart items from local storage:', error);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    } catch (error) {
      console.error('Error saving cart items to local storage:', error);
    }
  }, [cartItems]);

  const addToCart = (product) => {
    // Your existing addToCart logic
  };

  const removeFromCart = (product) => {
    const updatedCartItems = cartItems.filter(item => item.product.id !== product.id);
    setCartItems(updatedCartItems);
    try {
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    } catch (error) {
      console.error('Error saving cart items to local storage:', error);
    }
  };

  return (
    <ProductContext.Provider value={{ selectedProduct, setSelectedProduct, cartItems, setCartItems, addToCart, removeFromCart }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };

