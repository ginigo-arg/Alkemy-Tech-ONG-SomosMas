import { Card, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const NewCard = ({ newItem }) => {
  const history = useHistory();

  return (
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={newItem.image} />
      <Card.Body className="d-flex flex-column justify-content-between">
        <Card.Title>{newItem.name}</Card.Title>
        <Card.Text>
          <span dangerouslySetInnerHTML={{ __html: `${newItem.content}` }} />
        </Card.Text>
        <Button
          variant="primary"
          onClick={() => history.push(`/novedades/${newItem.id}`)}
        >Go somewhere</Button>
      </Card.Body>
    </Card>);
};
export default NewCard;
