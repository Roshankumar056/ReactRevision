import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import Register from "../pages/Register";
import ProductsDetail from "../pages/ProductsDetail";
import Profile from "../pages/Profile";
import ProtectedRoutes from "../utils/ProtectedRoutes";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route element={<ProtectedRoutes/>}>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/products/:id" element={ <ProductsDetail />}/>
        </Route>
     
        
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;



