import React, { useState, useEffect } from 'react'
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom';
import { useAuthState } from '../contexts/Auth';

class Header extends React.Component {
    render() {

        return (
        //     <footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
        //     <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        //         <Link to="/" className="mr-4 hover:underline md:mr-6">
        //             <strong>Gift</strong>
        //         </Link>

        //         <Link to="/remembrance" className="mr-4 hover:underline md:mr-6">
        //             <strong>Remembrance</strong>
        //         </Link>

        //         <Link to="/trade" className="mr-4 hover:underline md:mr-6">
        //             <strong>Trade</strong>
        //         </Link>
        //     </ul>
        // </footer>
            <Navbar expand="lg" bg="light" sticky="top">
                <Container>
                    <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto navbar" variant='light' navbarScroll>
                            {/* <Nav.Link as={Link} to="/">Gift</Nav.Link> */}
                            <Nav.Link as={Link} to="/remembrance">Remembrance</Nav.Link>
                            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.divider-p24 />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                        {/* <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form> */}
                        {/* <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                        </Nav> */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default Header;