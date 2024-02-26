import React from 'react';
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';

function Navbar() {
  return (
    <BootstrapNavbar bg="dark" variant="dark" expand="lg" fixed="top">
      <BootstrapNavbar.Brand href="#home">Your Logo</BootstrapNavbar.Brand>
      <BootstrapNavbar.Toggle aria-controls="navbar-nav" />
      <BootstrapNavbar.Collapse id="navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#skills">Skills</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
}

export default Navbar;
