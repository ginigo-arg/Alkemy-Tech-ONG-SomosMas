import React from 'react';
import { Carousel, CarouselItem } from 'react-bootstrap';
import './Slider.css';

const Slider = ({ slides }) => {
  return (
    <Carousel className = "mb-5">
      {slides &&
        slides.map((slide) => (
          <CarouselItem interval={5000} key={slide.name}>
            <img src={slide.image} alt={slide.name} className="w-100 slides-img" />
            <Carousel.Caption className="caption">
              <h2 className="fw-bold text-uppercase fs-1">{slide.name}</h2>
              <p>{slide.description}</p>
            </Carousel.Caption>
          </CarouselItem>
        ))}
    </Carousel>
  );
};

export default Slider;
