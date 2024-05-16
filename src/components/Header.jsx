import React, { useContext } from "react";
import logoImg from "../assets/logo.jpg";
import Button from "./UI/Button.jsx";
import { IoFastFood } from "react-icons/io5";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext.jsx";

export default function Header() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const totalItems = cartCtx.items.reduce(
    (totalNumberOfItems, item) => totalNumberOfItems + item.quantity,
    0
  );

  function onClickHandler() {
    userProgressCtx.showCart();
  }
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="" />
        <h1>Mojo meals</h1>
      </div>
      <nav>
        <Button textOnly onClick={onClickHandler}>
          <IoFastFood size={25} />{totalItems}
        </Button>
      </nav>
    </header>
  );
}
