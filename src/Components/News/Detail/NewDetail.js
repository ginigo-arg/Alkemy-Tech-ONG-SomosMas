import SectionTitles from '../../SectionTitles/SectionTitles';
import { Container } from 'react-bootstrap';

// Imagen y texto para simular respuesta de api
import Logo from '../../../assets/img/LOGO-SOMOSMAS.png';
import LazyImg from '../../Lazyload/LazyImg';
const content =
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';

const NewDetail = ({ title = 'Título de la novedad' }) => {
  return (
    <>
      <SectionTitles title={title} />
      <Container>
        <LazyImg className="my-4" image={Logo} alt='image principa'/>
        <p className="px-2" style={{ textAlign: 'justify' }}>
          {content}
        </p>
      </Container>
    </>
  );
};

export default NewDetail;
