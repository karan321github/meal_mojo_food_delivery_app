import React from "react";
import logoImg from '../assets/logo.jpg'
import Button from "./ui/Button";

const Header = () => {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="" />
        <h1>Mojo meals</h1>
      </div>
      <nav>
        <Button>Cart(0)</Button>
      </nav>
    </header>
  );
};

export default Header;
