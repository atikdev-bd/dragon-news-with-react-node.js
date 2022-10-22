import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import ProfileIcon from '../../../Assets/img/icons8-test-account-48.png'

const Header = () => {
  const {user,logOut } = useContext(AuthContext)

  const handleLogOut = ()=>{

    logOut().then(result =>{

    }).catch(error=> console.error(error))
  }
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
                  !user && !user?.uid ? <><Link to='/' className='text-decoration-none fw-bold me-5 text-black fs-6' >Home</Link>
                  <Link className='text-decoration-none text-success fw-bold me-5 fs-6' to='login'>Login</Link>
                  <Link className='text-decoration-none fw-bold me-5 text-secondary fs-6' to='/register'>Register</Link></>
                  : <><Link eventKey={2} to= '/'>
                  <FaSignOutAlt title='Sign Out' onClick={handleLogOut} className="text-secondary"></FaSignOutAlt>
                </Link>

              {
                user && user?.photoURL?   <Image className='ms-4'
                roundedCircle
                src={user?.photoURL}
                style={{ height: "30px" }}
              ></Image>
                :   <Image className='ms-4'
                roundedCircle
                src={ProfileIcon}
                style={{ height: "30px" }}
              ></Image>
                    
              }
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