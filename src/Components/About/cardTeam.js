import { Card, Row, Col } from 'react-bootstrap';
import ParserHtml from '../Parser/Parser';
import './cardteam.css';

const CardMembers = ({ id, name, description, image, facebookUrl, linkedingUrl }) => {
  console.log(facebookUrl);
  return (
    <Card style={{ width: '20rem' }} className='p-3 card-App border-0'>
      <Card.Img variant="top" src={image} className="rounded-circle"/>
      <Card.Body className="d-flex flex-column justify-content-between px-0">
        <Card.Title>
          <h5 className='text-center'>
            <strong>
              {name}
            </strong>
          </h5>
        </Card.Title>
        <Card.Text className='text-description text-center'>
          <ParserHtml text={description}/>
        </Card.Text>
        <Row>
          <Col></Col>
          <Col className='text-center text-info'>
            <Card.Link href={`${facebookUrl}`} className='text-info'>Facebook</Card.Link>
          </Col>
          <Col className='text-center text-info'>
            <Card.Link href={linkedingUrl} className='text-info'>Linkeding</Card.Link>
          </Col>
          <Col></Col>
        </Row>
      </Card.Body>
    </Card>
  );
};
export default CardMembers;
