import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import ProductPage from "./Pages/ProductPage";
import Contact from "./Pages/Contact";
import NotFound from "./Pages/NotFound";
import ProductDetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";
import { CartProvider } from "./context/cartContext";
import Login from "./Pages/login";
import Header from "./components/Header";
function App() {
  return (
    <CartProvider>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/productPage" element={<ProductPage />} />
          <Route path=":id" element={<ProductDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          {/* <Route element={<ProductPage type="ProductPage" />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;
