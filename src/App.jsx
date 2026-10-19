import React, { useState } from "react";
import { Box } from "@mui/material";

import Topbar from "./components/Topbar";
import Homepage from "./pages/homepage";
import "./App.css";

export default function App() {
  const [activeCategory, setActiveCategory] = useState("Vegetables");
  const [cart, setCart] = useState([]); 

  const handleAddToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };


  const cartCount = cart.reduce((total, item) => total + item.qty, 0);

  return (
    <Box className="app-layout">
      <Box className="right-side">
        <Topbar
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          cartCount={cartCount}
        />
        <Homepage
          activeCategory={activeCategory}
          onAddToCart={handleAddToCart}
        />
      </Box>
    </Box>
  );
}