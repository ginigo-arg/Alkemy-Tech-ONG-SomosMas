import React from 'react';
import { Carousel } from 'react-bootstrap';
// import logoCampaigns from '../../assets/img/logo/campaigns/school/logo.png';
import content1 from '../../assets/img/campaigns/school/content/contenido11.png';
import content2 from '../../assets/img/campaigns/school/content/contenido22.png';
import content3 from '../../assets/img/campaigns/school/content/contenido3.png';

const Slider = () => {
  const sliderCarousel = [
    {
      show: true,
      image: content3,
      title: 'Juntos en la vuelta al cole',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto  maxime earum molestiae ad ex distinctio repellendus perferendis vero voluptatibus qui reprehenderit nulla dolor repellat praesentium, ipsum quas ab facere consectetur.',
    },
    {
      show: false,
      image: content1,
      title: 'Juntos en la vuelta al cole',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto  maxime earum molestiae ad ex distinctio repellendus perferendis vero voluptatibus qui reprehenderit nulla dolor repellat praesentium, ipsum quas ab facere consectetur.',
    },
    {
      show: false,
      image: content2,
      title: 'Juntos en la vuelta al cole',
      description: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
    },
  ];

  const styleImg = {
    height: '400px',
  };

  const styleCaptionSlide = {
    backgroundColor: 'rgba(255, 75, 75, 0.6)',
    borderRadius: '15px',
    // minHeight: '80px',
  };

  return (
    <>
      <Carousel variant='dark' indicators = {false} prevIcon = {false} nextIcon = {false} className="d-none d-sm-block" >
        { sliderCarousel && sliderCarousel.map((slide, index) => {
          return (
            slide.show &&
            <Carousel.Item interval={3000} key={index}>
              {slide.image
                ? <img className='d-block w-100' src={slide.image} alt={slide.title} style={styleImg} />
                : <svg className="card-img-top w-100" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"
                >
                  <title>{slide.title}</title>
                  <rect width="100%" height="100%" fill="#F8F9FA"></rect>
                </svg>
              }

              <Carousel.Caption className="bg-primaryy" style={styleCaptionSlide}>
                <h3 className='text-white'>{slide.title}</h3>
                <p>{slide.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })
        }
      </Carousel>
    </>
  );
};

export default Slider;
