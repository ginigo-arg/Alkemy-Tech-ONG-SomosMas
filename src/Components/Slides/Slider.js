import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Carousel, CarouselItem } from 'react-bootstrap';

const Slider = () => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    getSlides();
  }, []);

  const getSlides = () => {
    const endpointSlides = 'https://ongapi.alkemy.org/api/slides?limit=5';
    axios
      .get(endpointSlides)
      .then((res) => setSlides(res.data.data))
      .catch((error) => console.log(error));
  };
  return (
    <Carousel>
      {slides &&
        slides.map((slide) => (
          <CarouselItem interval={5000} key={slide.id}>
            <img src={slide.image} alt={slide.name} className="w-100" />
            <Carousel.Caption>
              <h2>{slide.name}</h2>
              <p>{slide.description}</p>
            </Carousel.Caption>
          </CarouselItem>
        ))}
    </Carousel>
  );
};

export default Slider;
