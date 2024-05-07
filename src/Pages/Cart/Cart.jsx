// // Cart.jsx
// import React, { useContext } from 'react';
// import styles from './Cart.module.scss';
// import { ProductContext } from '../../ProductContext';

// const Cart = () => {
//   const { selectedProduct, setSelectedProduct } = useContext(ProductContext);

//   const handleAddOrder = () => {
//     // Implement logic to add order
//     console.log("Added order:", selectedProduct);
//   };

//   const handleDeleteOrder = () => {
//     // Implement logic to delete order
//     console.log("Deleted order:", selectedProduct);
//     setSelectedProduct(null); // Clear selected product after deletion
//   };

//   const closeModal = () => {
//     setSelectedProduct(null); // Close the modal by clearing the selected product
//   };

//   return (
//     <div className={`${styles.cart} ${selectedProduct ? styles.open : ''}`}>
//       <div className={styles.modalContent}>
//         <h1>Cart</h1>
//         {selectedProduct ? (
//           <div className={styles.productDetails}>
//             <ul>
//               <li>{selectedProduct.name} - ${selectedProduct.price}</li>
//             </ul>
//             <div>
//               <button onClick={handleAddOrder}>Add Order</button>
//               <button onClick={handleDeleteOrder}>Delete Order</button>
//             </div>
//           </div>
//         ) : (
//           <p>No product selected</p>
//         )}
//         <button className={styles.closeButton} onClick={closeModal}>Close</button>
//       </div>
//     </div>
//   );
// };

// export default Cart;

import React, { useContext, useEffect, useState } from 'react';
import styles from './Cart.module.scss'; // Import SCSS file
import { ProductContext } from '../../Helpers/ProductContext';

const Cart = () => {
  const { cartItems, setSelectedProduct, removeFromCart, setCartItems } = useContext(ProductContext);
  const [isModalOpen, setIsModalOpen] = useState(true); // Open the modal initially

  // Function to remove an item from the cart and update localStorage
  const handleDeleteOrder = (product) => {
    removeFromCart(product); // Remove the selected product from the cart
    updateLocalStorage(cartItems.filter(item => item.product.id !== product.id));
  };

  // Function to update localStorage with the modified cartItems
  const updateLocalStorage = (updatedCartItems) => {
    try {
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    } catch (error) {
      console.error('Error saving cart items to local storage:', error);
    }
  };

  // Effect to load cartItems from localStorage when component mounts
  useEffect(() => {
    try {
      const savedCartItems = JSON.parse(localStorage.getItem('cartItems'));
      if (savedCartItems) {
        setCartItems(savedCartItems);
      }
    } catch (error) {
      console.error('Error parsing cart items from local storage:', error);
    }
  }, []); // Only run once when component mounts

  // Effect to update localStorage when cartItems change
  useEffect(() => {
    updateLocalStorage(cartItems);
  }, [cartItems]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleToggleModal = () => {
    setIsModalOpen(prevState => !prevState);
  };

  return (
    <>
      {isModalOpen && (
        <div className={styles.modalContainer}>
          <div className={`${styles.modal} ${styles.open}`}>
            <button className={styles.closeButton} onClick={handleCloseModal}>Close</button>
            <h1>Shopping Cart</h1>
            {cartItems.length > 0 ? (
              <ul className={styles.productList}>
                {cartItems.map((item, index) => (
                  <li key={index} className={styles.product}>
                    <div className={styles.productDetails}>
                      <p>{item.product.name} - ${item.product.price} - Quantity: {item.quantity}</p>
                      <div>
                        <button onClick={() => handleDeleteOrder(item.product)}>Delete Order</button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No products in the cart</p>
            )}
          </div>
          <div className={styles.overlay} onClick={handleCloseModal}></div> {/* Darkened overlay */}
        </div>
      )}
    </>
  );
};

export default Cart;
