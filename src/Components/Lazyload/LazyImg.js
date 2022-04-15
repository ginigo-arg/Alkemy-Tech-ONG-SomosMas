import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const LazyImg = ({ image }) => {
  return (
    <div>
      <LazyLoadImage
        src = {image}
        alt={image.alt}
        height = "auto"
        width = "100%"
        effect="black-and-white"
      />
    </div>
  );
};
export default LazyImg;
