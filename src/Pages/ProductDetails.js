import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../css/Products-style.css";
import axios from "axios";
import Shimmer from "../components/Shimmer";
import { CartContext } from "../context/cartContext";
import { IMAGE_CDN_URL } from "../constants";

function ProductDetails(props) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { cart, setCart } = useContext(CartContext);
  const [check, setCheck] = useState(false);
  const handleAddCart = (item) => {
    const findItem = cart.find((element) => element.id === item.id);
    if (!findItem) {
      setCart([...cart, { ...item, qty: 1 }]);
    } else {
      alert("go to cart");
    }
  };
  console.log(cart);
  useEffect(() => {
    axios.get(IMAGE_CDN_URL + id).then((response) => {
      setProduct(response.data);
    });
  }, []);

  if (!product) {
    return (
      <>
        <Shimmer />
      </>
    );
  }

  return (
    <>
      <div className="product-page">
        <div className="img-section">
          <img src={`${product.image}`} />
        </div>
        <div className="content">
          <h1>{`${product.title}`}</h1>
          <p>{`${product.description}`}</p>
          <p>$ {`${product.price}`}</p>
          <button
            onClick={() => {
              handleAddCart(product);
              setCheck(true);
            }}
          >
            {check ? "Added to Cart" : "Add to Cart"}
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
