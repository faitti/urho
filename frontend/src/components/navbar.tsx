import { Nav, Navbar } from "react-bootstrap";
import Container from "react-bootstrap/esm/Container";

export const NavbarElement = () => {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="">Urho</Navbar.Brand>
          <Nav className="justify-content-end" style={{ width: "100%" }}>
            <Nav.Link href="#login">Login</Nav.Link>
            <Nav.Link href="#register">Register</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
