import React from 'react';
import { Carousel, CarouselItem, Row, Col, Button, Container } from 'react-bootstrap';
import ParserHtml from '../Parser/Parser';
import './Slider.css';
import ProgressSpinner from '../Progress/ProgressSpinner';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Slider = ({ slides, start, end }) => {
  const history = useHistory();
  const auth = useSelector(state => state.auth);
  return (
    <Carousel className = "carrusel">
      {slides.length > 0
        ? (
          slides.map((slide) => (
            <CarouselItem interval={5000} key={slide?.id} className='carouselItem carousel-fade'>
              <img src={slide?.image} alt={slide?.name} className="w-100 slides-img" />
              <Carousel.Caption className="caption carousel-fade">

                <h2 className="fw-bold text-uppercase fs-1 text-start">{slide?.name}</h2>
                <div className='text-start text-warning'>
                  <ParserHtml
                    className='text-start'
                    text={slide?.description} />
                </div>
                <Row className='mt-2 d-flex justify-content-start'>
                  <Col lg={2} className='ps-lg-3 me-0 text-start'>
                    <Button varian='warning' className='text-white' onClick={() => auth.auth ? history.push('/donar') : history.push('/login')}>
                      Ayudar
                    </Button>
                  </Col>
                </Row>

              </Carousel.Caption>
            </CarouselItem>
          )).reverse().splice(start, end)
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
