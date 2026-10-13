
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AIFloatingButton from "./components/AIFloatingButton/AIFloatingButton";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";

import Home from "./pages/Home/Home";
import AboutPage from "./pages/About/About";
import Services from "./pages/Services/Services";
import Conditions from "./pages/Conditions/Conditions";
import Appointment from "./pages/Appointment/Appointment";
import OnlinePhysiotherapy from "./pages/OnlinePhysiotherapy/OnlinePhysiotherapy";
import Team from "./pages/Team/Team";
import Resources from "./pages/Resources/Resources";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";

const App = () => {
  return (
    <>
    
    
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/services" element={<Services />} />
        <Route path="/conditions" element={<Conditions />} />
        <Route path="/about" element={<AboutPage />} />
        <Route
path="/online-physiotherapy"
element={<OnlinePhysiotherapy />}
/>
<Route path="/team" element={<Team />} />
<Route path="/resources" element={<Resources />} />
<Route path="/blog" element={<Blog />} />
<Route path="/contact" element={<Contact />} />
        <Route path="/appointment" element={<Appointment />} />

      </Routes>

      <Footer />
      <WhatsAppButton />
      <AIFloatingButton />
      </>
  
  );
};

export default App;
