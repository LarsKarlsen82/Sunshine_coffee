// App.jsx
import React, { useState } from 'react';
import './App.scss';
import Footer from './Components/Footer/Footer';
import Main from './Pages/Main/Main';
import { CookieBanner } from './Components/CookieBanner/CookieBanner';
import NavBar from './Components/NavBar/NavBar';
import AppRouter from './Components/AppRouter/AppRouter';
import Products from './Pages/Products/Products';
import Cart from './Pages/Cart/Cart';
import { ProductProvider } from './Helpers/ProductContext';

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleOpenCart = () => {
    setIsCartOpen(true);
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  return (
    <ProductProvider>
      <div>
        <CookieBanner />
        <AppRouter>
          <NavBar />
          <Main />
          <Products />
          {isCartOpen && <Cart onClose={handleCloseCart} />} 
          {isCartOpen && <div className="overlay" onClick={handleCloseCart}></div>} 
        </AppRouter>
        <Footer />
      </div>
    </ProductProvider>
  );
}

export default App;


