import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Carousel from "react-bootstrap/Carousel";
import ListGroup from "react-bootstrap/ListGroup";
import Brand1 from '../../../Assets/img/Brand1.png'
import Brand2 from '../../../Assets/img/Brand2.png'
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaTwitch,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';


const RightSideNav = () => {
  const location = useLocation()
  const navigate = useNavigate()


  const from = location.state?.from?.pathname || '/'

  const {googleLogin,setUser} = useContext(AuthContext)

  const handleGoogle = ()=>{
    googleLogin().then(result =>{
       navigate(from, {replace : true})
    
    }).catch(error =>console.error(error))
  }



  return (
    <div>
      <div>
        <ButtonGroup vertical>
          <Button onClick={handleGoogle} on className="mt-2" variant="outline-primary">
            {" "}
            <FaGoogle /> Login with Google
          </Button>
          <Button className="mt-2" variant="outline-secondary">
            {" "}
            <FaGithub /> Login with Github
          </Button>
        </ButtonGroup>
      </div>
      <div className="mt-4">
        <h3>Find os on</h3>
        <ListGroup>
          <a className="text-decoration-none" href="https://www.facebook.com/profile.php?id=100080090470755">
          <ListGroup.Item className="mb-2 shadow bg-secondary text-white">
            <FaFacebook /> Facebook
          </ListGroup.Item>
          </a>
          
          <ListGroup.Item className="mb-2 shadow bg-white text-dark">
            <FaTwitter /> Twitter
          </ListGroup.Item>
          <ListGroup.Item className="mb-2 shadow bg-secondary text-white">
            <FaTwitch /> Twitch
          </ListGroup.Item>
          <ListGroup.Item className="mb-2 shadow bg-white text-dark">
            <FaWhatsapp /> Whatsapp
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 h-100"
              src={Brand1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 h-100"
              src={Brand2}
              alt="Second slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div>
      </div>
    </div>
  );
};

export default RightSideNav;
