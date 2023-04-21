import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";

function Cart(props) {
  const { cart, setCart } = useContext(CartContext);

  const handleIncrementItem = (item) => {
    const findItem = cart.find((element) => element.id === item.id);
    if (findItem) {
      const updatedProduct = cart.map((product) =>
        product.id === item.id ? { ...product, qty: product.qty + 1 } : product
      );
      setCart(updatedProduct);
    }
  };

  const handleDecrementItem = (item) => {
    const findItem = cart.find((element) => element.id === item.id);
    if (findItem && findItem.qty === 1) {
      const updatedProduct = cart.filter((product) => product.id !== item.id);
      setCart(updatedProduct);
    } else {
      const updatedProduct = cart.map((product) =>
        product.id === item.id ? { ...product, qty: product.qty - 1 } : product
      );
      setCart(updatedProduct);
    }
  };

  const handleTotalAmount = () => {
    return cart.reduce((a, b) => a + b.price * b.qty, 0);
  };

  return (
    <div>
      {cart.length === 0 ? (
        <h1>Add Something first!!!</h1>
      ) : (
        <div>
          <div>
            {cart.map((product) => (
              <div className="selected-product" key={product.id}>
                <img src={product.image} />
                <div className="left-block">
                  <h2>{product.title}</h2>
                  <h3>Price : ${product.price}</h3>
                  <h3>
                    Sub Total : ${(product.price * product.qty).toFixed(2)}
                  </h3>

                  <button onClick={() => handleIncrementItem(product)}>
                    +
                  </button>
                  <h2>{product.qty}</h2>
                  <button onClick={() => handleDecrementItem(product)}>
                    -
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="total-price">
            <h3>Total Price : ${handleTotalAmount().toFixed(2)} </h3>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
