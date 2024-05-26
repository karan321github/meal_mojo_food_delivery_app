// import Login from "./components/auth/Login";
// import { Route } from "react-router-dom";
import Products from "./components/Products";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import { Route, Routes, Router } from "react-router-dom";
import SignUp from "./components/auth/SignUp";
import LogIn from "./components/auth/LogIn";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        {/* You can add a NoMatch component for unmatched routes */}
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Routes>
    </>
  );
}

export default App;
