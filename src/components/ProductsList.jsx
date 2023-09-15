import { useContext } from "react";
import "./ProductsList.css";
import Product from "./Product";
import { ProductContext } from "../context/ProductProvider";
import { Col, Row, Container } from "react-bootstrap";

const Products = () => {
  const { products } = useContext(ProductContext);

  // Filter Products to Clothing
  const filteredProducts = products.filter((product) => {
    return (
      product.category === "men's clothing" ||
      product.category === "women's clothing"
    );
  });

  return (
    <div className="products-list">
      <Container>
        <Row>
          {filteredProducts &&
            filteredProducts.map((product) => {
              return (
                <Col sm="6" md="4" lg="3" key={product.id}>
                  <Product product={product} />
                </Col>
              );
            })}
        </Row>
      </Container>
    </div>
  );
};

export default Products;
