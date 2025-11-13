import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home";
import Calculator from "./pages/Calculator";
import Animation from "./pages/Animation";
import Components from "./pages/Components";
import Todos from "./pages/Todos";
import Products from "./pages/Products";
import Carts from "./pages/Carts";
import Login from "./pages/Login/Login";
import NotPageFound from "./pages/NotPageFound";
import { fetchProducts } from "./data/products";

function App() {
  const [token, setToken] = useState('');
  const [role, setRole] = useState('');

  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);

 useEffect(() => {
    setProducts(fetchProducts());
  }, []);
  
  if (!token) {
    return <Login setToken={setToken} setRole={setRole} />;
  }

 

  return (
    <BrowserRouter basename="/CSI205/">
      <Routes>
        <Route
          element={
            <AppLayout carts={carts} products={products} setToken={setToken} />
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="calculator" element={<Calculator />} />
          <Route path="animation" element={<Animation />} />
          <Route path="components" element={<Components />} />
          <Route path="todos" element={<Todos />} />
          <Route
            path="products"
            element={
              <Products products={products} carts={carts} setCarts={setCarts} />
            }
          />
          <Route
            path="carts"
            element={<Carts carts={carts} setCarts={setCarts} />}
          />
          <Route path="*" element={<NotPageFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
