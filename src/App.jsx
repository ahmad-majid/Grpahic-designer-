import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CapturingMoments from './components/CapturingMoments';
import ServicesSection from './components/ServicesSection';
import ServiceDetail from './components/ServiceDetail';
import HomePage from './Homepage';
import ContactForm from './components/ContactForm';
import HashLoader from 'react-spinners/HashLoader'; 
import './styles/Loader.css'

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && (
        <div className="loader-container">
          <HashLoader color="#3498db" size={80} />
        </div>
      )}
      {!loading && (
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesSection />} />
            <Route path="/service/:id" element={<ServiceDetail />} />
            <Route path='/contact' element={<ContactForm />} />
          </Routes>
        </Router>
      )}
    </>
  );
};

export default App;
