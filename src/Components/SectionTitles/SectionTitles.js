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
            className={flexColumn ? 'd-flex flex-column justify-content-center align-items-center zoneTitle' : 'd-flex justify-content-center align-items-center zoneTitle'}
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.4)',
            }}
          >
            <div className={`p-0 w-100 text-center ${titleUppercase ? 'text-uppercase' : ''}`}>
              <h1 className = {showHr ? classColorTitle + 'border-image-bottom' : classColorTitle}>{title}</h1>
            </div>
            <div><ParserHtml text={description} /></div>
          </Container>
        </Container>
      </div>
    </>
  );
};

export default SectionTitles;
