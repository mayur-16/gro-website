import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import ServiceDetail from './components/ServiceDetail';
import CTA from './components/CTA';
import Footer from './components/Footer';
import './App.css';

function Home() {
  return (
    <>
      <Hero />
      <CTA calledFromAboutUs={false} /> 
    </>
  );
}




function InfoCenter() {
  return <div>Info Center Page</div>;
}

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:serviceId" element={<ServiceDetail />} />
        <Route path="/info-center" element={<InfoCenter />} />
      </Routes>
      <Footer />
    </div>
  );
}

  export default App;