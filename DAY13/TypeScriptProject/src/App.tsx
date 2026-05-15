import React, { useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/common/Navbar";

import Products from "./pages/Products";
import About from "./pages/About";
import Cart from "./pages/Cart";
import HomePage from "./pages/Home";

const App: React.FC = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [totalCount, setTotalCount] = useState<number>(0);
  return (
    <BrowserRouter>
      <Navbar cartCount={totalCount} onCartOpen={() => setCartOpen(true)} />
      <Routes>
        <Route path="/" element={<HomePage setTotalCount={setTotalCount} />} />

        <Route path="/products" element={<Products />} />

        <Route path="/about" element={<About />} />

        <Route
          path="/cart"
          element={<Cart open={cartOpen} onClose={() => setCartOpen(false)} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
