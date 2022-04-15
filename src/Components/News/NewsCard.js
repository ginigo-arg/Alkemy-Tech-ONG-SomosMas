import { Card, Button } from 'react-bootstrap';

const NewCard = ({ newItem }) => (
  <Card style={{ width: '20rem' }}>
    <Card.Img variant="top" src={newItem.image} />
    <Card.Body>
      <Card.Title>{newItem.name}</Card.Title>
      <Card.Text>
        <span dangerouslySetInnerHTML={{ __html: `${newItem.content}` }} />
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>);

export default NewCard;
