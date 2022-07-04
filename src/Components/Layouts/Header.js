import React, { useState } from "react";
import { Navbar, Nav, Container, Figure } from "react-bootstrap";
import classes from "./Header.module.css";
import logo from "./smallLogo.png";
import { useSelector } from "react-redux";

const Header = (props) => {

  const isUserNamePresent = useSelector(
    (state) => state.users.isUsernamePresent
  );
  const isPasswordMatched = useSelector(
    (state) => state.users.isPasswordMatched
  );
  return (
    <Navbar
      className={`${classes.header} ${
        !isUserNamePresent && !isPasswordMatched ? classes.modalOverlay : ""
      }`}
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Container>
        <Navbar.Brand href="/" style={{ marginBottom: "-16px" }}>
          <Figure>
            <Figure.Image width={50} height={50} alt="171x180" src={logo} />
          </Figure>
        </Navbar.Brand>

        <Navbar.Brand className={classes.heading} href="/">
          D CHAT
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link
              onClick={() => {
                props.handleNavItems("home")

              }}
              className={classes.navItem}
              href="#Home"
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                props.handleNavItems("people")
               
              }}
              className={classes.navItem}
              href="#people"
            >
              People
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                props.handleNavItems("profile")
              }}
              className={classes.navItem}
              href="#profile"
            >
              Profile
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
