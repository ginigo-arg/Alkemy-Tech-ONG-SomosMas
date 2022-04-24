import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import './backToTop.css';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Mostrar botón cuando la página se desplaza hasta la distancia establecida
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Establecer la coordenada superior en 0
  // hacer que el desplazamiento sea suave
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      <div className="scroll-to-top">
        {isVisible &&
        <Button className="btn btn-danger fs-3" onClick={scrollToTop}>
          <BsFillArrowUpCircleFill />
        </Button>
        }
      </div>
    </>
  );
};
export default BackToTop;
