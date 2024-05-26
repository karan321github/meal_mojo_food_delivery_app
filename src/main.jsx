import React from "react";
import ReactDOM from "react-dom/client";
import { CartContextProvider } from "./store/CartContext.jsx";
import { BrowserRouter } from "react-router-dom";
import {store} from './redux/store.js' 
import App from "./App.jsx";
import "./index.css";
import { UserProgressContextProvider } from "./store/UserProgressContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <UserProgressContextProvider>
      <CartContextProvider>
        <App store={store}/>
      </CartContextProvider>
    </UserProgressContextProvider>
  </BrowserRouter>
);
