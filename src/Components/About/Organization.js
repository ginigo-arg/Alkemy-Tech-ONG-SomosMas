import { Col, Container, Row, Card } from 'react-bootstrap';
import ParserHtml from '../Parser/Parser';
import Img1 from '../../assets/img/Manos10.jpg';
import './Organization.css';
const Organization = ({ id, name, shortDescription }) => {
  return (
    <>

      <Container fluid className='my-5 mx-0 px-0' key={id}>
        <Row className='align-items-center flex-wrap'>
          <Col xs={12} lg={6} className='py-5 ps-lg-5'>
            <h5 className='text-warning ps-lg-5'>
              <strong>
                Nuestra Mision
              </strong>
            </h5>
            <h2 className='text-white'>
              <strong className='ps-lg-5 text-white'>
                {name}
              </strong>
            </h2>
            <div className='text-white ps-lg-5'>
              <ParserHtml text={shortDescription} />
            </div>

          </Col>
          <Col className='img-column ps-0 d-flex align-items-end'>
            <Card className="bg-dark text-white d-flex align-items-end">
              <Card.Img src={Img1} alt="Card border-none rounded-0" />
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Organization;
