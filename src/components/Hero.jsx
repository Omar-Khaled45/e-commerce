import { Container } from "react-bootstrap";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="d-flex justify-content-center align-items-center hero">
      <Container className="text text-center">
        <div className="text-white">
          Choose Your Own <p className="text-uppercase text-center">Style</p>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
