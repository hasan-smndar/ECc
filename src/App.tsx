import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./Copmonents/Navigation";
import { Home, About, Cart, Products } from "./Pages";
import ProductsProvider from "./Context/ProductsProvider";
const App = () => {
  return (
    <BrowserRouter>
      <ProductsProvider>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<Products />}></Route>
          <Route path="cart" element={<Cart />} />
          <Route path="about" element={<About />} />
        </Routes>
      </ProductsProvider>
    </BrowserRouter>
  );
};

export default App;
