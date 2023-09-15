import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./CartSideBar.css";
import { useContext } from "react";
import { SideBarContext } from "../context/SideBarProvider";
import { CartContext } from "../context/CartProvider";
import CartItem from "./CartItem";

const image = require("../assets/538404-200.png");

const CartSideBar = () => {
  const { show, handleClick } = useContext(SideBarContext);

  // Cart State
  const { cart, clearCart, totalPrice } = useContext(CartContext);

  return (
    <div className={`sidebar ${show ? "show" : ""}`}>
      <div className="sidebar-header pb-3">
        <h5 className="mb-0">Shopping Cart ({cart.length})</h5>
        <FontAwesomeIcon
          icon={faArrowRight}
          role="button"
          onClick={handleClick}
        />
      </div>
      <ul className="list-unstyled mb-0">
        {cart.length > 0 &&
          cart.map((product) => {
            return (
              <li className="added-product" key={product.id}>
                <CartItem product={product} />
              </li>
            );
          })}
        {cart.length === 0 && (
          <div className="text-center pt-5">
            <img src={image} alt="empty-cart" className="img-fluid" />
            <h3>Your cart is currently empty.</h3>
          </div>
        )}
      </ul>
      {cart.length > 0 && (
        <div className="sidebar-bottom d-flex justify-content-between align-items-center">
          <div className="fw-bold">
            Total: <span className="fw-normal">$ {parseInt(totalPrice)}</span>
          </div>
          <div role="button" onClick={clearCart}>
            <FontAwesomeIcon icon={faTrashCan} />
          </div>
        </div>
      )}
    </div>
  );
};

export default CartSideBar;
