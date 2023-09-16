import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./AppNavbar.css";
import { useContext } from "react";
import { SideBarContext } from "../context/SideBarProvider";
import { Container } from "react-bootstrap";
import { CartContext } from "../context/CartProvider";
import SearchInput from "./SearchInput";

const AppNavbar = () => {
  // Show State
  const { setShow } = useContext(SideBarContext);

  // Cart State
  const { cart } = useContext(CartContext);

  return (
    <header className="fixed-top bg-white">
      <Container className="py-2 d-flex justify-content-around justify-content-sm-between align-items-center">
        <h3 className="text-uppercase logo mb-0">
          <Link className="nav-link" to="/">
            Store
          </Link>
        </h3>
        <SearchInput />
        <nav className="navbar">
          <ul className="nav list-unstyled align-items-center">
            <li className="nav-item">
              <Link className="nav-link text-dark p-2" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item position-relative">
              <span className="counter">{cart.length}</span>
              <FontAwesomeIcon
                role="button"
                icon={faCartShopping}
                onClick={() => setShow(true)}
              />
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default AppNavbar;
