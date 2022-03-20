import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./Copmonents/Navigation";
import { Home, About, Cart, Products } from "./Pages";
const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="cart" element={<Cart />} />
        <Route path="about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
