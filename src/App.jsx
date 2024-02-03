import React from 'react';
import { NavbarSimple } from './components/NavBar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Paletas from './pages/Paletas';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import AboutUs from './pages/AboutUs';
import ProductDetails from './components/ProductDetails';
import { productsData } from './components/Products';

const App = () => (
  <>
    <NavbarSimple />
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/paletas" element={<Paletas />} />
        <Route path="/registro" element={<SignUp />} />
        <Route path="/iniciar-sesion" element={<SignIn />} />
        <Route path="/nosotros" element={<AboutUs />} />
        <Route path="/product/:productId" element={<ProductDetails products={productsData} />} />
      </Routes>
    </Router>
    <Footer />
  </>
);

export default App;
