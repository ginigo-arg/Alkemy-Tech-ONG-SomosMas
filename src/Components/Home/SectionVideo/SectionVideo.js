import { Container, Row, Col, Button } from 'react-bootstrap';
import ReactPlayer from 'react-player/lazy';
import './sectionvideo.css';
import Logo from '../../../assets/img/logo.png';
const SectionVideo = () => {
  return (
    <Container fluid className='py-5' >
      <Row>
        <Col lg={4} className='pt-5 mb-5'>
          <h2 className='mb-3 text-white'>
            <strong>

              Apoye a Somos Más Tambien
            </strong>
          </h2>
          <p className='text-white'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eos eaque provident impedit quod, repellendus alias accusantium facere beatae esse amet, tenetur sit, non quae dolor adipisci quibusdam sequi repudiandae!
          </p>
          <Row className='d-flex flex-direction-row align-items-center mt-5'>
            <Col className='me-4'>
              <Row className='border-end'>
                <Col className='content-img rounded-circle overflow-hidden pe-3 bg-dark'>
                  <img src={Logo} alt='logo' className='img-circle'/>
                </Col>
                <Col>
                  <h5 className='text-white'>Somos Más</h5>
                  <p className='text-secondary'>organización</p>
                </Col>
              </Row>
            </Col>
            <Col className='ms-3'>
              <Button className='btn btn-primary text-white'>Apoyar</Button>
            </Col>
          </Row>
        </Col>
        <Col lg={2}></Col>
        <Col lg={6} className='p-0 m-0'>
          <span className='video-player shadow rounded-3 overflow-hidden'>
            <ReactPlayer
              url='https://www.facebook.com/watch/?v=10153231379946729'
              className="react-player"
              width="100%"
              height="100%"
              controls={false}
            />
          </span>
        </Col>
      </Row>
    </Container>
  );
};
export default SectionVideo;
