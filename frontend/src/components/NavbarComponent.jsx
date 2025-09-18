import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function NavbarComponent() {
  const { logout } = useContext(AuthContext);

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">E-Commerce</Navbar.Brand>
        <Nav className="ml-auto">
          <Button variant="outline-light" onClick={logout}>
            Logout
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
