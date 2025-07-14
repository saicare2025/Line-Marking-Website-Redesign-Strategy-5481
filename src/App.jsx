import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import Melbourne from './components/LocationPages/Melbourne';
import SouthAustralia from './components/LocationPages/SouthAustralia';
import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Services />
              <WhyChooseUs />
              <Process />
              <Portfolio />
              <Testimonials />
              <AboutUs />
              <Contact />
            </>
          } />
          <Route path="/melbourne" element={<Melbourne />} />
          <Route path="/south-australia" element={<SouthAustralia />} />
        </Routes>
        <Footer />
        <FloatingCTA />
      </div>
    </Router>
  );
}

export default App;