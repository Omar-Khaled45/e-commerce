import { Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartProvider";

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-box p-3">
      <div className="img-container overflow-hidden position-relative p-3 mb-2 rounded-2 d-flex justify-content-center align-items-center bg-white">
        <div className="controls d-flex position-absolute">
          <FontAwesomeIcon
            className="add me-2 rounded-circle"
            icon={faCartShopping}
            fixedWidth
            onClick={() => addToCart(product, product.id)}
          />
          <Link to={`/e-commerce/product/${product.id}`}>
            <FontAwesomeIcon
              className="view rounded-circle text-black"
              icon={faEye}
              fixedWidth
            />
          </Link>
        </div>
        <Image src={product.image} className="w-75" />
      </div>
      <div className="product-info">
        <span className="mt-2 text-black-50">
          {product.category.slice(0, 1).toUpperCase() +
            product.category.slice(1, product.category.length - 1)}
        </span>
        <h4 className="mt-2">{product.title}</h4>
        <p>${parseInt(product.price)}</p>
      </div>
    </div>
  );
};

export default Product;
