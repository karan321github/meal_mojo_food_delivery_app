import React from "react";
import ReactDOM from "react-dom/client";
import { CartContextProvider } from "./store/CartContext.jsx";

import App from "./App.jsx";
import "./index.css";
import { UserProgressContextProvider } from "./store/UserProgressContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProgressContextProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </UserProgressContextProvider>
  </React.StrictMode>
);
