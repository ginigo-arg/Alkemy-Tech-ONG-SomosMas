import Marquee from 'react-fast-marquee';
import { Row, Col } from 'react-bootstrap';
import { AiFillDollarCircle } from 'react-icons/ai';
import './marquee.css';
const TextMarquee = () => {
  return (
    <Row className='d-flex flex-direction-row align-items-center py-2'>
      <Col lg={2} className='p-0 m-0 text-center text-lg-end'>
        <h6 className='text-white'>
          <strong>
            <AiFillDollarCircle className='icon' fontSize="25px" color="white"/>Donadores:
          </strong>
        </h6>
      </Col>
      <Col>
        <Marquee direction="right" speed={100} gradient={false} className='d-flex align-items-center marquee'>
          <p className='text-white mt-1'>
            Gabriel Iñigo $ 2.500 | Duhan Renteria $ 3.400 | Diego Diaz Marin $ 4.900 | Nicolas Corradini $ 399 | Mariano Perin $ 8.000 | Horacio Brunaccio $ 1.500 | Hovhannes Petrosyan $ 100 |            </p>
        </Marquee>
      </Col>
    </Row>
  );
};
export default TextMarquee;
