
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AIFloatingButton from "./components/AIFloatingButton/AIFloatingButton";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <>
      <Navbar />
      <Home/>
      


      <Footer />

      <WhatsAppButton />

      <AIFloatingButton />
    </>
  );
};

export default App;
