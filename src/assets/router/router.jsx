import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from '../../pages/Index';
import App from '../../App';
import Paletas from '../../pages/Paletas';
import SignUp from '../../pages/SignUp';
import SignIn from '../../pages/SignIn';
import AboutUs from '../../pages/AboutUs';
import ProductDetails from '../../components/ProductDetails';
import { productsData } from '../../components/Products';

const router = (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/index" element={<Index />} />
      <Route path="/paletas" element={<Paletas />} />
      <Route path="/registro" element={<SignUp />} />
      <Route path="/iniciar-sesion" element={<SignIn />} />
      <Route path="/nosotros" element={<AboutUs />} />
      <Route path="/product/:productId" element={<ProductDetails products={productsData} />} />
    </Routes>
  </Router>
);

export default router;
