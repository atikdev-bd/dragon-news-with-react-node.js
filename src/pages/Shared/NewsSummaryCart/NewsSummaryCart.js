import React from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import { FaRegBookmark, FaRegEye, FaShareAlt, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsSummaryCart = ({ news }) => {
  
  const { total_view, title, rating, _id, image_url, author, details } = news;
  return (
    <div>
      <Card className="mb-4">
        <Card.Header className="d-flex justify-content-between align-items-center">
          <div className="d-flex">
            <Image
              roundedCircle
              src={author?.img}
              style={{ height: "60px" }}
            ></Image>
            <div className="ms-2">
                <p className="mb-0">{author.name}</p>
                <p>{author?.published_date}</p>
            </div>
          </div>
          <div>
            <FaRegBookmark className="me-2"></FaRegBookmark>
            <FaShareAlt></FaShareAlt>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text>
            {details.length > 260 ? (
              <>
                {details.slice(0, 260) + "..."}{" "}
                <Link to={`/news/${_id}`}>Read more</Link>
              </>
            ) : (
              <>{details}</>
            )}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between align-items-center">
            <div>
                <FaStar className="me-2 text-warning"></FaStar>
                <span>{rating?.number}</span>
            </div>
            <div>
                <FaRegEye className="me-2"></FaRegEye>
                <span>{total_view}</span>
            </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default NewsSummaryCart;
