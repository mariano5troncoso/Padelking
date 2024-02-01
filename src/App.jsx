import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavbarSimple } from './components/NavBar';
import CarouselCustomArrows from './components/Carousel';
import Footer from './components/Footer';
import Index from './pages/Index';
import Paletas from './pages/Paletas';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import AboutUs from './pages/AboutUs';


function App() {
  return (
    <Router>
      <NavbarSimple />
      <Routes>
        <Route path="/" element={<CarouselCustomArrows />} />
        <Route path="/index" element={<Index />} />
        <Route path="/paletas" element={<Paletas />} />
        <Route path="/registro" element={<SignUp />} />
        <Route path="/iniciar-sesion" element={<SignIn />} />
        <Route path="/nosotros" element={<AboutUs />} />
       
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
