import { Container, Card } from 'react-bootstrap';
import Home from '../../Home/index';

const OrganizationIndex = () => (
  <div className="d-flex mt-5 justify-content-around">
    {/* cards to link to organization edit form and sliders edit form */}
    <Container className="d-flex gap-4 flex-wrap">
      <Card style={{ width: '20rem', height: 'fit-content' }}>
        <Card.Body>
          <Card.Title>Editar Datos de la Organización</Card.Title>
          <Card.Text>
            Si deseas cambiar los datos de la organización, por favor da click
            en el enlace que encontrarás debajo.
          </Card.Text>
          <Card.Link href="#">Editar Datos de Organicación</Card.Link>
        </Card.Body>
      </Card>
      <Card style={{ width: '20rem' }}>
        <Card.Body>
          <Card.Title>Editar Sliders</Card.Title>
          <Card.Text>
            Para cambiar las imágenes de los sliders, por favor dale click al
            enlace que está debajo.
          </Card.Text>
          <Card.Link href="#">Editar Sliders</Card.Link>
        </Card.Body>
      </Card>
    </Container>
    {/* aside with the template of home */}
    <Container>
      <Home />
    </Container>
  </div>

);

export default OrganizationIndex;
