import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Container, Image } from "react-bootstrap";
import "./ProductDetails.css";
import { ProductContext } from "../context/ProductProvider";
import { CartContext } from "../context/CartProvider";

const ProductDetails = () => {
  const { id } = useParams();

  // Add To Cart Function
  const { addToCart } = useContext(CartContext);

  // Products
  const { products } = useContext(ProductContext);

  // Get The Targeted Product
  const product = products.find((product) => {
    return product.id === parseInt(id);
  });

  return (
    <div className="details d-flex justify-content-center align-items-center">
      <Container>
        <Row>
          <Col lg={3} md={6}>
            <div className="img-container p-5 bg-white rounded-3">
              <Image
                src={product.image}
                alt={product.title}
                className="img-fluid"
              />
            </div>
          </Col>
          <Col lg={9} md={6}>
            <div className="info">
              <h4 className="fw-bold">{product.title}</h4>
              <p>{product.description}</p>
              <p>
                <span className="fw-bold">Price:</span> ${product.price}
              </p>
              <div className="buttons d-flex flex-column">
                <button
                  className="btn bg-dark text-white w-lg-25"
                  onClick={() => addToCart(product, product.id)}
                >
                  Add to Cart
                </button>
                <Link to="/" className="btn bg-white w-lg-25 mt-2">
                  Continue Shopping
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetails;
