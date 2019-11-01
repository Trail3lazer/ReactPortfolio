import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./navbar.css"



const Header = () => {



        return(
            <React.Fragment>
            <Navbar bg="?" variant="dark" fixed = "top" className="header">
                <Navbar.Brand href="/ReactPortfolio">Jared Wight</Navbar.Brand>
                <Nav className="ml-auto ">
                    <Nav.Link href="https://github.com/Trail3lazer" active>
                        <i className="fab fa-github"></i>
                    </Nav.Link>
                    <Nav.Link href="https://www.linkedin.com/in/jaredwight/">
                        <i className="fab fa-linkedin" style={{color: "#04A8F9"}}></i>
                    </Nav.Link>
                </Nav>
                
            </Navbar>
            </React.Fragment>
        );
    }

export default Header;