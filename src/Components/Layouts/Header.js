import React from 'react'
import { Navbar, Nav, Container, Figure  } from 'react-bootstrap';
import classes from './Header.module.css';
import logo from  "./smallLogo.png";

const Header = (props) => {
  return (
<Navbar className={`${classes.header} ${props.modalOverlay ? classes.modalOverlay : ""}` } collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  
  <Navbar.Brand href="/" style={{marginBottom: '-16px'}}>
  <Figure>
      <Figure.Image
        width={50}
        height={50}
        alt="171x180"
        src={logo}
      />
    </Figure>
  </Navbar.Brand>

  <Navbar.Brand className={classes.heading} href="/">D CHAT</Navbar.Brand>

  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    </Nav>
    <Nav >
    <Nav.Link className={classes.navItem} href="#features">Friends</Nav.Link>
      <Nav.Link className={classes.navItem} href="#pricing">People</Nav.Link>
      <Nav.Link className={classes.navItem} href="#profile">Profile</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default Header