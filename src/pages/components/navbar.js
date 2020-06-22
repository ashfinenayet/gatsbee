import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
 .navbbar {
    background-color: #222
 }
  .navbar-brand, .navbar-nav .navlink {
    color: #bbb

    &:hover {
      color: white;
    }

  }
`;

export const NavigationBar = () => ( 
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">Code Life</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-nav" />
      <Navbar.Collapse id="basic=navbar-nav">
        <Nav classname="ml-auto">
          <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/">About</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/">Contact Me</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)

