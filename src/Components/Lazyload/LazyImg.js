import { Container } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const LazyImg = ({ image, alt }) => {
  return (
    <Container className='d-flex justify-content-center'>
      <LazyLoadImage
        src = {image}
        alt={alt}
        height = "auto"
        width = "700px"
        effect="black-and-white"
      />
    </Container>
  );
};
export default LazyImg;
