import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/Products-style.css";
import axios from "axios";
import { IMAGE_CDN_URL } from "../constants";
function searchFilter(productItems, searchInput) {
  return productItems.filter((items) =>
    items.title.toLowerCase()?.includes(searchInput.toLowerCase())
  );
}

function Products(props) {
  const [filteredProducts, setfilteredProducts] = useState([]);
  const [productItems, setProductsItems] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    axios.get(IMAGE_CDN_URL).then((response) => {
      setfilteredProducts(response.data);
      setProductsItems(response.data);
    });
  }, []);

  return (
    <div className="prod-block">
      <div className="product-heading">
        <h1 className="product-header">PRODUCTS</h1>
        <input
          type={"text"}
          placeholder="search here.."
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const data = searchFilter(productItems, searchInput);
            setfilteredProducts(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="productItem-section">
        {filteredProducts.map((items, index) => {
          return (
            <div key={index} className="product-item">
              <div>
                {
                  <img
                    src={items.image}
                    height="200px"
                    width="160px"
                    className="product-image"
                  />
                }
              </div>
              <div className="product-title">{items.title}</div>
              <div className="product-price">${items.price}</div>

              <Link to={`/${items.id}`}>
                <button className="product-buy-btn">CHECK DETAILS</button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
