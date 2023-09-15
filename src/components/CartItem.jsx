import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Image, Col, Row } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../context/CartProvider";

const CartItem = ({ product }) => {
  const { removeFromCart, increaseAmount, decreaseAmount } =
    useContext(CartContext);

  return (
    <Row key={product.id}>
      <Col sm={2}>
        <Image src={product.image} alt={product.title} />
      </Col>
      <Col>
        <Row className="mb-2">
          <Col sm={9}>
            <div>{product.title}</div>
          </Col>
          <Col sm={3} className="d-flex justify-content-end">
            <FontAwesomeIcon
              icon={faXmark}
              role="button"
              onClick={() => removeFromCart(product.id)}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="counter d-flex justify-content-center">
              <span
                className="minus"
                role="button"
                onClick={() => decreaseAmount(product.id)}
              >
                -
              </span>
              <span className="number">{product.amount}</span>
              <span
                className="plus"
                role="button"
                onClick={() => increaseAmount(product.id)}
              >
                +
              </span>
            </div>
          </Col>
          <Col>
            <span className="text-black-50">$ {parseInt(product.price)}</span>
          </Col>
          <Col>
            <span>$ {parseInt(product.price * product.amount)}</span>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default CartItem;
