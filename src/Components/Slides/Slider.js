import React from 'react';
import { Carousel, CarouselItem } from 'react-bootstrap';

const slides = [
  {
    id: 1,
    name: 'Prueba',
    description: 'Imagen de prueba slider',
    image:
      'https://img.freepik.com/vector-gratis/ninos-felices-saltando-prado-verano_74855-5852.jpg?size=626&ext=jpg&ga=GA1.2.1586766005.1636675200',
  },
  {
    id: 2,
    name: 'Prueba2',
    description: 'Imagen de prueba slider',
    image:
      'https://img.freepik.com/vector-gratis/ninos-felices-saltando-prado-verano_74855-5852.jpg?size=626&ext=jpg&ga=GA1.2.1586766005.1636675200',
  },
  {
    id: 3,
    name: 'Prueba3',
    description: 'Imagen de prueba slider',
    image:
      'https://img.freepik.com/vector-gratis/ninos-felices-saltando-prado-verano_74855-5852.jpg?size=626&ext=jpg&ga=GA1.2.1586766005.1636675200',
  },
];

const Slider = () => {
  return (
    <Carousel>
      {slides &&
        slides.map((slide) => (
          <CarouselItem interval={5000} key={slide.name}>
            <img src={slide.image} alt={slide.name} className="w-100" />
            <Carousel.Caption>
              <h2 className='fw-bold text-uppercase fs-1'>{slide.name}</h2>
              <p>{slide.description}</p>
            </Carousel.Caption>
          </CarouselItem>
        ))}
    </Carousel>
  );
};

export default Slider;
