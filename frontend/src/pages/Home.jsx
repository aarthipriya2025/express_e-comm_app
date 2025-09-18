import NavbarComponent from "../components/NavbarComponent";
import Products from "./Products";
import { Container } from "react-bootstrap";

function Home() {
  return (
    <>
      <NavbarComponent />
      <div className="text-center my-4">
        <img
          src="https://via.placeholder.com/1200x400?text=Hero+Photo"
          alt="hero"
          className="img-fluid"
        />
      </div>
      <Container>
        <Products />
      </Container>
    </>
  );
}

export default Home;
