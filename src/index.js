import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
// Side bar provider
import SideBarProvider from "./context/SideBarProvider";
// Products provider
import ProductProvider from "./context/ProductProvider";
// Cart provider
import CartProvider from "./context/CartProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SideBarProvider>
    <CartProvider>
      <ProductProvider>
        {/* <React.StrictMode> */}
        <App />
        {/* </React.StrictMode> */}
      </ProductProvider>
    </CartProvider>
  </SideBarProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
