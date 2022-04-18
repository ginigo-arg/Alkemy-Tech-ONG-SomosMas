import React from 'react';
import { Carousel, CarouselItem, Row, Col, Button } from 'react-bootstrap';
import ParserHtml from '../Parser/Parser';
import './Slider.css';
import { IoPlayCircle } from 'react-icons/io5';

const Slider = ({ slides }) => {
  return (
    <Carousel className = "mb-5 carrusel">
      {slides &&
        slides.map((slide) => (
          <CarouselItem interval={5000} key={slide.name} className='carouselItem carousel-fade'>
            <img src={slide.image} alt={slide.name} className="w-100 slides-img" />
            <Carousel.Caption className="caption carousel-fade">

              <h2 className="fw-bold text-uppercase fs-1 text-start">{slide.name}</h2>
              <ParserHtml
                className='text-start'
                text={slide.description} />
              <Row className='mt-2 w-25'>
                <Col>
                  <Button varian='warning' className='text-white'>
                    Ayudar
                  </Button>
                </Col>
                <Col>
                  <Button className='btn btn-warning text-white w-100'>
                    <IoPlayCircle className='icon' fontSize="25px" color="grey" />
                    Ver Video
                  </Button>
                </Col>
              </Row>

            </Carousel.Caption>
          </CarouselItem>
        ))}
    </Carousel>
  );
};

export default Slider;
