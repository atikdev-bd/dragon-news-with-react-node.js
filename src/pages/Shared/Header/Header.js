import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const Header = () => {

  const {user} = useContext(AuthContext)
    return (
        <Navbar collapseOnSelect className='mb-4' expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand><Link to='/' className='fs-2 text-decoration-none fw-bold'>DRAGON NEWS</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#all-news">All News</Nav.Link>
              <Nav.Link href="#category">Category</Nav.Link>
            </Nav>
            <Nav>
              {
                  !user && !user?.uid ? <><Link className='text-decoration-none fw-bold me-5 text-success fs-6' to='login'>Login</Link>
                  <Link className='text-decoration-none fw-bold me-5 text-secondary fs-6' to='/register'>Register</Link></>
                  : <><Link eventKey={2} to= '/'>
                  <FaSignOutAlt  className="text-secondary"></FaSignOutAlt>
                </Link>

                <Image className='ms-2'
              roundedCircle
              src={user?.photoURL}
              style={{ height: "30px" }}
            ></Image>
                
                </>
              }
              
              <div className='d-lg-none'>
                <LeftSideNav></LeftSideNav>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;