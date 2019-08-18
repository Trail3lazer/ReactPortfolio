import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



const Header = () => {

        return(
            <React.Fragment>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">Jared Wight</Navbar.Brand>
                <Nav className="ml-auto ">
                    <Nav.Link href="/" active>Home</Nav.Link>
                    <Nav.Link href="/portfolio" active>Portfolio</Nav.Link>
                    <Nav.Link href="/contact" active>Contact</Nav.Link>
                    <Nav.Link href="https://github.com/Trail3lazer" active><i className="fab fa-github"></i></Nav.Link>
                    <Nav.Link href="https://www.linkedin.com/in/jaredwight/"><i className="fab fa-linkedin" style={{color: "#04A8F9"}}></i></Nav.Link>
                </Nav>
                
            </Navbar>
            </React.Fragment>
        );
    }

export default Header;