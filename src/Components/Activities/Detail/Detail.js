import { Container } from 'react-bootstrap';
import SectionTitles from '../../SectionTitles/SectionTitles';

const Detail = (props) => {
  return (
    <Container>
      <SectionTitles title={props.title} backgroundImg={props.backgroundImg} />
    </Container>
  );
};
export default Detail;
