import React, { Component } from 'react';
/* import {Navlink} from 'reacter-router-dom'; */
import{Navbar, Nav, NavItem} from 'react-bootstrap';

 class Navigation extends Component {
    render() {
        return (
           <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#home">My Brand</a>
              </Navbar.Brand>
            </Navbar.Header>
            <Nav>
              <NavItem href="#">
                Home
              </NavItem>
              <NavItem href="#">
                About
              </NavItem>
              <NavItem href="#">
                FAQ
              </NavItem>
              <NavItem href="#">
                Contact Us
              </NavItem>
            </Nav>
          </Navbar>
        );
    }
}
export default Navbar;