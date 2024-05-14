import React, { useContext } from "react";
import Modal from "./ui/Modal";
import CartContext from "../store/CartContext";
import CartItem from "./CartItem";
import UserProgressContext from "../store/UserProgressContext";
import Button from "./ui/Button";
import { currencyFormatter } from "../utils/currencyFormatter";

const Cart = () => {
  const userProgressCtx = useContext(UserProgressContext);
  const cartCtx = useContext(CartContext);
  const cartTotal = cartCtx.items.reduce(
    (cartTotal, item) => cartTotal + item.quantity * item.price,
    0
  );
  function handleCloseCart() {
    userProgressCtx.hideCart();
  }

  function handleGoToCheckOut(){
    userProgressCtx.showCheckOut();
  }
  return (
    <Modal
      className="cart"
      open={userProgressCtx.progress === "cart"}
      onClose={userProgressCtx.progress === "cart" ? handleCloseCart : null}
    >
      <h2>Your cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            onIncrease={() => cartCtx.addItemToCart(item)}
            onDecrease={() => cartCtx.removeItemFromCart(item.id)}
          />
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={handleCloseCart}>
          Close
        </Button>
        {cartCtx.items.length > 0 && <Button onClick={handleGoToCheckOut}>Go to checkOut</Button>}
      </p>
    </Modal>
  );
};

export default Cart;
