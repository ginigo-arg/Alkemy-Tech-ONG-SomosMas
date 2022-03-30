import './Skeleton.css';
import Placeholder from 'react-bootstrap/Placeholder';
import { Card } from 'react-bootstrap';

const Skeleton = () => {
  return (
    <Card className="mb-5" style={{ width: '20rem' }}>
      <Card.Img
        variant="top"
        style={{ height: '15rem', backgroundColor: 'lightgray' }}
      ></Card.Img>
      <Card.Body className="">
        <Placeholder as="h1" size="sm" bg="primary" animation="wave" xs={8} />
        <Placeholder as={Card.Text} animation="wave">
          <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
          <Placeholder xs={6} /> <Placeholder xs={8} />
        </Placeholder>
      </Card.Body>
    </Card>
  );
};

export default Skeleton;
