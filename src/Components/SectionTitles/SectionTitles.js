import React from 'react';
import Container from 'react-bootstrap/Container';
import './SectionTitles.css';

const SectionTitles = ({ title, backgroundImg = '' }) => {
  return (
    <>
      <div
        className={
          backgroundImg === '' ? 'bg-no-media zoneContent' : 'zoneContent'
        }
        style={{
          backgroundImage: backgroundImg ? `url( ${backgroundImg})` : '',
          backgroundRepeat: 'no-repeat center',
        }}
        key={title}
      >
        <Container fluid>
          <Container
            className="d-flex justify-content-center align-items-center zoneTitle"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.4)',
            }}
          >
            <h1 className="text-black">{title}</h1>
          </Container>
        </Container>
      </div>
    </>
  );
};

export default SectionTitles;
