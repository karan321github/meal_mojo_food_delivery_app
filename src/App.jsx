// import { Router } from "express";
// import Login from "./components/auth/Login";
// import { Route } from "react-router-dom";
import Products from "./components/Products";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App() {
  return (
    <>
      <Header />
      <Products />
      <Cart />
      <Checkout />
    </>
  );
}

export default App;
