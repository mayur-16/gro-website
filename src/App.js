import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import ServicesTestimonials from './components/ServicesTestimonials';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import ServiceDetail from './components/ServiceDetail';
import CTA from './components/CTA';
import Footer from './components/Footer';
import CTAPopup from './components/CTAPopup';
import './App.css';

function Home({ onOpenPopup }) {
  return (
    <>
      <Hero onOpenPopup={onOpenPopup} />
      <ServicesTestimonials />
      <CTA calledFromAboutUs={false} onOpenPopup={onOpenPopup} /> 
    </>
  );
}

function InfoCenter({ onOpenPopup }) {
  return (
    <CTA calledFromAboutUs={false} onOpenPopup={onOpenPopup} />
  );
}

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <div className="App">
      <Header onOpenPopup={openPopup} />
      <Routes>
        <Route path="/" element={<Home onOpenPopup={openPopup} />} />
        <Route path="/home" element={<Home onOpenPopup={openPopup} />} />
        <Route path="/about-us" element={<AboutUs onOpenPopup={openPopup} />} />
        <Route path="/services" element={<Services onOpenPopup={openPopup} />} />
        <Route path="/services/:serviceId" element={<ServiceDetail onOpenPopup={openPopup} />} />
        <Route path="/info-center" element={<InfoCenter onOpenPopup={openPopup} />} />
      </Routes>
      <Footer />
      
      {/* Global CTA Popup */}
      <CTAPopup isOpen={isPopupOpen} onClose={closePopup} />
    </div>
  );
}

export default App;