import React, { useEffect, useState, Component } from 'react';
import { Helmet } from 'react-helmet';
import '../styles/index.css';

import { Nav, Navbar } from 'react-bootstrap';

function Index() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    
    <main>
      <Helmet>
        <title>Gatsby + Node.js (TypeScript) API</title>
      </Helmet>
      <div id="shadowBox">
        <h1 className="rainbow rainbow_text_animated">swag</h1>
      </div>
      <div className="image">
        <img src="https://i.imgur.com/sjvtlq0.png" width="700" height="350" alt="swag" className="image" />
      </div>
      <h2>The date according to Node.js (TypeScript) is:</h2>
      <p>{date ? date : 'Loading date...'}</p>

    </main>
  );
}

class MyNavbar extends React.Component{
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


export default Index;
