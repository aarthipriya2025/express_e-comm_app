import { Container, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function AuthPage() {
  const navigate = useNavigate();

  return (
    <Container className="text-center my-5">
      <img
        src="https://via.placeholder.com/1200x400?text=E-Commerce+Cover+Photo"
        alt="cover"
        className="img-fluid mb-4"
      />
      <Row className="justify-content-center">
        <Col md={3}>
          <Button variant="primary" block onClick={() => navigate("/register")}>
            Register
          </Button>
        </Col>
        <Col md={3}>
          <Button variant="success" block onClick={() => navigate("/login")}>
            Login
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default AuthPage;
