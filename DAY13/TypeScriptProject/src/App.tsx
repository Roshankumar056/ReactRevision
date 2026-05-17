// import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/common/Navbar";

import Products from "./pages/Products";
import About from "./pages/About";
import Cart from "./pages/Cart";
import HomePage from "./pages/Home";
import ProductsDetail from "./pages/ProductsDetail";

const App: React.FC = () => {
  // const [totalCount, setTotalCount] = useState<number>(0);

  return (
    <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/products" element={<Products />} />

        <Route path="/products/:id" element={<ProductsDetail />} />

        <Route path="/about" element={<About />} />

        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
