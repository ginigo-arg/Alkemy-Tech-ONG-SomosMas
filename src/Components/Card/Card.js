import React from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/esm/Card';
import Button from 'react-bootstrap/Button';
import { FaShareAlt } from 'react-icons/fa';
import './Card.css';

const CardComponent = ({
  title = '',
  description = '',
  image = '',
  showShare = true,
  showCircleSection = true,
  footer = true,
  footerInformation = '',
}) => {
  return (
    <>
      <div className="bg-primary p-2 border-5 border-in-card-complet">
        <CardGroup>
          <Card className="mb-2 border-0 bg-transparent">
            {image !== '' ? (
              <Card.Img
                variant="top"
                src={image}
                className="img-fluid img-card border-in-card"
              />
            ) : (
              <svg
                className="card-img-top border-in-card"
                width="100%"
                height="140"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: Thumbnail"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>{title}</title>
                <rect width="100%" height="100%" fill="#514242"></rect>
                <text x="5%" y="50%" fill="#eceeef" dy=".5em">
                  {title}
                </text>
              </svg>
            )}
            {showShare && (
              <button
                className="btn btn-outline-primary btn-share text-white rounded-circle"
                // onClick={share}
              >
                <FaShareAlt />
              </button>
            )}
            <div className="btn-outline-primary btn-seccion text-secondary rounded-circle">
              ...
            </div>
            <Card.Body className="border-0 bg-white">
              <Card.Title>{title}</Card.Title>
              <Card.Subtitle>{title}</Card.Subtitle>
              <Card.Text>{description}</Card.Text>
            </Card.Body>
            <Card.Footer className="border-5 border-secondary border-top bg-white">
              {footerInformation}
            </Card.Footer>
          </Card>
        </CardGroup>
      </div>
    </>
  );
};
export default CardComponent;
