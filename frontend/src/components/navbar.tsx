import { Button, Nav, Navbar, ToggleButton } from "react-bootstrap";
import { themeContext } from "../Theme";
import Container from "react-bootstrap/esm/Container";
import { WiDaySunny, WiStars } from "react-icons/wi";
import React from "react";

type PropsType = {
  theme: string;
  toggleTheme: () => void;
};

class NavbarElement extends React.Component<PropsType, {}> {
  render() {
    let props = this.props;
    let theme = this.context;
    return (
      <>
        <Navbar
          bg={theme === "dark" ? "light" : "dark"}
          variant={theme === "dark" ? "light" : "dark"}
        >
          <Container>
            <Navbar.Brand href="">Urho</Navbar.Brand>
            <Nav className="justify-content-end" style={{ width: "100%" }}>
              <Nav.Link href="login">Login</Nav.Link>
              <Nav.Link href="register">Register</Nav.Link>
              <Button
                onClick={props.toggleTheme}
                style={{
                  backgroundColor: "transparent",
                  borderColor: "transparent",
                  color: theme === "dark" ? "#101010" : "#ffffff",
                }}
              >
                {theme == "dark" ? (
                  <WiDaySunny size="30" />
                ) : (
                  <WiStars size="30" />
                )}
              </Button>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
}

NavbarElement.contextType = themeContext;

export default NavbarElement;
