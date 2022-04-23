import { Card, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import ParserHtml from '../Parser/Parser';
import './NewsCard.css';
const NewCard = ({
  image,
  title,
  description,
  id,
}) => {
  const history = useHistory();
  const { pathname } = useLocation();

  return (
    <Card style={{ width: '20rem' }} className='p-3 border-0 shadow card-App'>
      <Card.Img variant="top" src={image} className="img-card"/>
      <Card.Body className="d-flex flex-column justify-content-between px-0">
        <Card.Title>
          <h5>
            {title}
          </h5>
        </Card.Title>
        <div className='text-description mb-3'>
          <ParserHtml text={description} />
        </div>
        <Button
          className='text-white'
          variant="primary"
          onClick={() => history.push(`${pathname === '/' ? '/novedades' : pathname}/${id}`)}
        >Ver más</Button>
      </Card.Body>
    </Card>);
};
export default NewCard;
