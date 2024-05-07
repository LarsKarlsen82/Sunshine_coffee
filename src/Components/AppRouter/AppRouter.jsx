// AppRouter.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import NoPage from '../../Pages/NoPage/NoPage';
import Main from '../../Pages/Main/Main';
import Products from '../../Pages/Products/Products';
import Login from '../../Pages/Login/Login';
import Cart from '../../Pages/Cart/Cart';

const AppRouter = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<NoPage />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
