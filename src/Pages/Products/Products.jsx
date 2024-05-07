import React, { useState, useEffect, useContext } from 'react';
import styles from './Products.module.scss';
import { ProductContext } from '../../Helpers/ProductContext';
import coffeeBeansImage from '../../Assets/images/coffee_beans.jpg';

const Products = () => {
  const { setSelectedProduct, addToCart, cartItems } = useContext(ProductContext);
  const [products, setProducts] = useState([]);
  const [addedToCart, setAddedToCart] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8081/products/getAll')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const handleClick = (product) => {
    setSelectedProduct(product);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedToCart(product);
    setTimeout(() => {
      setAddedToCart(null);
    }, 2000); // Reset addedToCart state after 2 seconds
  };

  return (
    <>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>We Love Coffee </h1>
          <h1>And all the people who made it</h1>
        </div>
        <img src={coffeeBeansImage} alt="Coffee Beans" />
      </div>

      <div className={styles.productList}>
        <h1>Our picks for you</h1>
        <ul className={styles.grid}>
          {products.map(product => (
            <li key={product.id} className={styles.product} onClick={() => handleClick(product)}>
              <h2>{product.name}</h2>
              <img src={product.image} alt={product.name} className={styles.image} />
              <p>{product.description}</p>
              <p className="price">Price: ${product.price}</p>
              <button onClick={() => handleAddToCart(product)}>
                {addedToCart && addedToCart.id === product.id
                  ? `${addedToCart.name} has been added to order`
                  : cartItems.some(item => item.product.id === product.id)
                  ? 'Added to Cart'
                  : 'Add to Cart'}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Products;
