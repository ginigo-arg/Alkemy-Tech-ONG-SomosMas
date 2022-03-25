import React from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/esm/Card';
import Button from 'react-bootstrap/Button';
import { FaShareAlt } from 'react-icons/fa';
import './Card.css';

const CardComponent = ({
  title = '',
  subtitle = '',
  description = '',
  image = '',
  circleSectionInformation = '',
  footerInformation = '',
  bgColor = 'gradiant-bg-animation',
  showShare = true,
}) => {
  return (
    <>
      <div className={`p-2 mt-2 mb-2 border-in-card-full ${bgColor}`}>
        <CardGroup>
          <Card className="border-0 bg-transparent">
            {image !== '' ? (
              <Card.Img
                variant="top"
                src={image}
                className="img-fluid img-card border-in-card-top"
              />
            ) : (
              <svg
                className="card-img-top border-in-card-top"
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
                {/* <text x="5%" y="50%" fill="#eceeef" dy=".5em">
                  No media
                </text> */}
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
            {circleSectionInformation !== '' && (
              <div
                className="btn-outlinee-primary btn-primary text-white fs-4 btn-seccion text-white rounded-circle"
                dangerouslySetInnerHTML={{ __html: circleSectionInformation }}
              />
            )}
            <Card.Body className="border-0 bg-white">
              <Card.Title>{title}</Card.Title>
              <Card.Subtitle>{subtitle}</Card.Subtitle>
              <Card.Text>{description}</Card.Text>
            </Card.Body>
            <Card.Footer className="border-in-card-bottom bg-white">
              {footerInformation}
            </Card.Footer>
          </Card>
        </CardGroup>
      </div>
    </>
  );
};
export default CardComponent;
