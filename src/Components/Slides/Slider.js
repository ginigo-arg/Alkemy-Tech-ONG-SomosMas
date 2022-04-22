import React from 'react';
import { Carousel, CarouselItem, Row, Col, Button, Container } from 'react-bootstrap';
import ParserHtml from '../Parser/Parser';
import './Slider.css';
import { IoPlayCircle } from 'react-icons/io5';
import ProgressSpinner from '../Progress/ProgressSpinner';
const Slider = ({ slides }) => {
  return (
    <Carousel className = "mb-5 carrusel">
      {slides.length > 0
        ? (
          slides.map((slide) => (
            <CarouselItem interval={5000} key={slide.name} className='carouselItem carousel-fade'>
              <img src={slide.image} alt={slide.name} className="w-100 slides-img" />
              <Carousel.Caption className="caption carousel-fade">

                <h2 className="fw-bold text-uppercase fs-1 text-start">{slide.name}</h2>
                <ParserHtml
                  className='text-start'
                  text={slide.description} />
                <Row className='mt-2'>
                  <Col lg={2} className='p-0 me-0'>
                    <Button varian='warning' className='text-white'>
                      Ayudar
                    </Button>
                  </Col>
                  <Col lg={3} className='p-0 '>
                    <Button className='btn btn-warning text-white w-100'>
                      <IoPlayCircle className='icon' fontSize="25px" color="grey" />
                      Ver Video
                    </Button>
                  </Col>
                </Row>

              </Carousel.Caption>
            </CarouselItem>
          )).reverse()
        )
        : (
          <Container className='d-flex align-items-center justify-content-center' style={{ height: ' 250px' }}>
            <ProgressSpinner/>
          </Container>)
      }
    </Carousel>
  );
};

export default Slider;
