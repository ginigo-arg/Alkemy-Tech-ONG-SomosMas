import React from 'react';
import Container from 'react-bootstrap/Container';
import ParserHtml from '../Parser/Parser';
import './SectionTitles.css';

const SectionTitles = ({ title, description = '', backgroundImg = '', showHr = false, classColorTitle = 'text-primary', titleUppercase = true, flexColumn = true }) => {
  return (
    <>
      <div
        className={
          backgroundImg === '' ? 'bg-no-media zoneContent' : 'bg-img-size zoneContent'
        }
        style={{
          backgroundImage: backgroundImg ? `url( ${backgroundImg})` : '',
        }}
        key={title}
      >
        <Container fluid>
          <Container
            className={`d-flex justify-content-center align-items-center zoneTitle ${flexColumn ? 'flex-column' : ''} `}
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.4)',
            }}
          >
            <div className={`p-0 w-100 text-center ${titleUppercase ? 'text-uppercase' : ''}`}>
              <h1 className = {`${classColorTitle} ${showHr ? 'border-image-bottom' : ''}`}>{title}</h1>
            </div>
            {description ? <ParserHtml text={description} /> : ''}
          </Container>
        </Container>
      </div>
    </>
  );
};

export default SectionTitles;
