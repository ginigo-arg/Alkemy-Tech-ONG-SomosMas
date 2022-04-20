import React from 'react';
// import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/esm/Card';
// import Button from 'react-bootstrap/Button';
import { FaShareAlt } from 'react-icons/fa';
import './Card.css';
import ParserHtml from '../Parser/Parser';

function LimitText (text, limit) {
  if (text.length > limit) {
    return text.substr(0, limit) + ' ...';
  }
  return text;
}

const CardComponent = ({
  title = '',
  subtitle = '',
  description = '',
  image = '',
  circleSectionInformation = '',
  footerInformation = '',
  bgColor = 'gradiant-bg-animation',
  showShare = true,
  textLimit = true,
}) => {
  return (
    <>
      <div className={`p-2 m-2 border-in-card-full ${bgColor}`}>
        <Card className="border-0 bg-transparent">
          {image !== ''
            ? (
              <Card.Img
                variant="top"
                src={image}
                className="img-fluid img-card border-in-card-top"
              />
            )
            : (
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
            <Card.Title><h5>{title}</h5></Card.Title>
            <Card.Subtitle>{subtitle}</Card.Subtitle>
            <Card.Text style={{ minHeight: '100px' }}>{textLimit ? (<ParserHtml text={LimitText(description, 100)} />) : (<ParserHtml text={description} />) } </Card.Text>
          </Card.Body>
          <Card.Footer className="border-top border-5 border-dark  border-in-card-bottom bg-white">
            <ParserHtml text={footerInformation} />
          </Card.Footer>
        </Card>
      </div>
    </>
  );
};
export default CardComponent;
