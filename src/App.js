import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Coins from "./components/Coins";
import CoinsDeatails from "./components/CoinsDeatails";
import Footer from "./components/Footer";
import React from "react";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Coins" element={<Coins />} />
          <Route path="/CoinsDeatails" element={<CoinsDeatails />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
