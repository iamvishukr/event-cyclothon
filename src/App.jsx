import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CyclothonLandingPage from "../src/Components/CyclothonLandingPage";
import PaymentGateway from "../src/Components/PaymentGateway"
import Home from "./Components/Home";
import Gallery from "./Components/Gallery";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cyclothon" element={<CyclothonLandingPage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/payment" element={<PaymentGateway />} />
      </Routes>
    </Router>
  );
}

export default App;
