import React, { Component } from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Products from "../components/Products";
function Home(props) {
  return (
    <div>
      <Hero />
      <Products />
      <Footer />
    </div>
  );
}

export default Home;
