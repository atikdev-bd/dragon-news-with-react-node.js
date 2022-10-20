import React from "react";
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

const RightSideNav = () => {
  return (
    <div>
      <div>
        <ButtonGroup vertical>
          <Button className="mt-2" variant="outline-primary">
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
          <ListGroup.Item className="mb-2 shadow bg-secondary text-white">
            <FaFacebook /> Facebook
          </ListGroup.Item>
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