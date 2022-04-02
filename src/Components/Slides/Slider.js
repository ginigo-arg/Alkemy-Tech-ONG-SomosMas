import React from 'react';
import { Carousel, CarouselItem } from 'react-bootstrap';
import './Slider.css';

const slides = [
  {
    id: 1,
    name: 'Prueba',
    description: 'Imagen de prueba slider',
    image:
      'https://img.freepik.com/free-vector/happy-children-jumping-summer-meadow_74855-5852.jpg?t=st=1648785772~exp=1648786372~hmac=3f9aef6947a2193c528285aff5fda9b2eb8ba05af98d843a418ab7d0710d4a64&w=1060',
  },
  {
    id: 2,
    name: 'Prueba2',
    description: 'Imagen de prueba slider',
    image:
      'https://img.freepik.com/free-vector/children-teacher-sitting-grass-playing_74855-5764.jpg?w=900',
  },
  {
    id: 3,
    name: 'Prueba3',
    description: 'Imagen de prueba slider',
    image:
      'https://img.freepik.com/free-vector/art-class-with-cartoon-teacher-children-kids-drawing-with-brushes-during-lesson-art-school-studio-flat-vector-illustration-education-art-concept-banner-website-design-landing-page_74855-21647.jpg?w=1060',
  },
];

const Slider = () => {
  return (
    <Carousel>
      {slides &&
        slides.map((slide) => (
          <CarouselItem interval={5000} key={slide.name}>
            <img src={slide.image} alt={slide.name} className="w-100" />
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
