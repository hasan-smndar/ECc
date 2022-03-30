import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./Copmonents/Navigation";
import { Home, About, Cart, Products } from "./Pages";
const App = () => {
  return (
    <React.Fragment>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />}></Route>
        <Route path="cart" element={<Cart />} />
        <Route path="about" element={<About />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
