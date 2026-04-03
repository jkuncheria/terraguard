import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import ProjectGallery from './pages/ProjectGallery';
import FlooringSystems from './pages/FlooringSystems';
import EpoxyFlooring from './pages/EpoxyFlooring';
import UrethaneCement from './pages/UrethaneCement';
import ESDConductive from './pages/ESDConductive';
import TrafficCoating from './pages/TrafficCoating';
import PolishedConcrete from './pages/PolishedConcrete';
import FoodBeverage from './pages/industries/FoodBeverage';
import Automotive from './pages/industries/Automotive';
import Manufacturing from './pages/industries/Manufacturing';
import Aerospace from './pages/industries/Aerospace';
import SportsEntertainment from './pages/industries/SportsEntertainment';

const App: React.FC = () => {
  return (
        <Router>
          <ScrollToTop />
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/project-gallery" element={<ProjectGallery />} />
            
            {/* Flooring Systems */}
            <Route path="/flooring-systems" element={<FlooringSystems />} />
            <Route path="/epoxy-flooring" element={<EpoxyFlooring />} />
            <Route path="/urethane-cement" element={<UrethaneCement />} />
            <Route path="/esd-conductive" element={<ESDConductive />} />
            <Route path="/traffic-coating" element={<TrafficCoating />} />
            <Route path="/polished-concrete" element={<PolishedConcrete />} />
            
            {/* Industries */}
            <Route path="/industries/food-beverage" element={<FoodBeverage />} />
            <Route path="/industries/automotive" element={<Automotive />} />
            <Route path="/industries/manufacturing" element={<Manufacturing />} />
            <Route path="/industries/aerospace" element={<Aerospace />} />
            <Route path="/industries/sports-entertainment" element={<SportsEntertainment />} />
            
            {/* Redirects for old URLs */}
            <Route path="/commercial" element={<Navigate to="/flooring-systems" replace />} />
            <Route path="/residential" element={<Navigate to="/" replace />} />
            <Route path="/all-flooring-products" element={<Navigate to="/flooring-systems" replace />} />
            <Route path="/hardwood" element={<Navigate to="/flooring-systems" replace />} />
            <Route path="/carpet" element={<Navigate to="/flooring-systems" replace />} />
            <Route path="/tile" element={<Navigate to="/flooring-systems" replace />} />
            <Route path="/luxury-vinyl" element={<Navigate to="/flooring-systems" replace />} />
            <Route path="/laminate" element={<Navigate to="/flooring-systems" replace />} />
            <Route path="/stained-concrete" element={<Navigate to="/polished-concrete" replace />} />
          </Routes>
      </main>

      <Footer />
      
      {/* Elfsight All-in-One Chat */}
      <div className="elfsight-app-8d6fce49-bdbb-4276-a2df-2a4134016a6a" data-elfsight-app-lazy></div>
    </div>
    </Router>
  );
};

export default App;