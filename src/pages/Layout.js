import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { Navbar, Nav, Container, Form, FormControl } from 'react-bootstrap';
import { FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          {/* Navbar Brand */}
          <Navbar.Brand as={Link} to="/">
            <span style={{ color: "#4CAF50", fontWeight: "bold" }}>FRESHO</span>
          </Navbar.Brand>
          
          {/* Navbar Toggler */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          
          <Navbar.Collapse id="basic-navbar-nav">
            {/* Centering the Nav Links */}
            <Nav className="mx-auto nav-links" style={{ gap: "25px", fontSize: "20px", fontWeight: "bold" }}>
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/Login">Login</Nav.Link>
              <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
              <Nav.Link as={Link} to="/Product">Product</Nav.Link>
            </Nav>

            {/* Right-side Icons */}
            <Nav>
              {/* Search Input Toggle */}
              {showSearch && (
                <Form className="d-flex me-2">
                  <FormControl
                    type="search"
                    placeholder="Search..."
                    className="me-2"
                    aria-label="Search"
                    autoFocus
                  />
                </Form>
              )}
              <Nav.Link 
                href="#" 
                style={{ fontSize: "20px" }} 
                onClick={() => setShowSearch(!showSearch)}
              >
                <FaSearch />
              </Nav.Link>
              <Nav.Link href="#" style={{ fontSize: "20px" }}>
                <FaHeart />
              </Nav.Link>
              <Nav.Link href="#" style={{ fontSize: "20px" }}>
                <FaShoppingCart />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Main Content */}
      <Container>
        
      </Container>
      <Outlet />
    </>
  );
};

export default Layout;

