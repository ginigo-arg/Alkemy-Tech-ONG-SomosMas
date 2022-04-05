import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import imgContent from '../../assets/img/campaigns/school/content/contenido1.png';
// import imgContent2 from '../../assets/img/campaigns/school/content/contenido2.png';
import imgConstruction from '../../assets/img/campaigns/school/content/construction.png';
import './Content.css';
import { MdDateRange, MdPlace } from 'react-icons/md';
import { BiTime } from 'react-icons/bi';
import CounterDown from './CounterDown';

const Content = () => {
  const campaign = {
    title: 'Vuelta al cole',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto  maxime earum molestiae ad ex distinctio repellendus perferendis vero voluptatibus qui reprehenderit nulla dolor repellat praesentium, ipsum quas ab facere consectetur.',
    date: '2022-06-17',
    time: '08:30',
    place: 'Calle la buena OGN - Buenos Aires',
  };

  // const dateNow = new Date();
  // const dateCampaign = new Date(campaign.date + 'T' + campaign.time + ':00');
  const counterTime = CounterDown(campaign.date + ' ' + campaign.time);

  const days = counterTime.split(':')[0];
  const hours = counterTime.split(':')[1];
  const minutes = counterTime.split(':')[2];
  const seconds = counterTime.split(':')[3];

  const images = [
    {
      image:
        'https://cdn.pixabay.com/photo/2015/12/15/06/42/kids-1093758__340.jpg',
    },
    {
      image:
        'https://cdn.pixabay.com/photo/2014/03/12/18/45/boys-286245__340.jpg',
    },
    {
      image:
        'https://cdn.pixabay.com/photo/2014/04/02/14/48/children-306607__340.jpg',
    },
    {
      image:
        'https://cdn.pixabay.com/photo/2020/01/22/09/39/teacher-4784916__340.jpg',
    },
  ];

  return (
    <>
      <Container fluid className="bg-light bg-content pb-2 pt-2">
        {/* ------------------------------------------- Zona Movil --------------------------------------- */}
        <Card>
          <Card.Header className="d-block d-sm-none text-primary">
            {campaign.title}
          </Card.Header>
          <Card.Img
            src={imgContent}
            alt="Campaña escolar"
            className="card-img-top img-fluidd d-none d-sm-block visually-hidden"
            style={{ maxHeight: '350px' }}
            hidden
          />
          <Card.Img
            src={imgConstruction}
            alt="Campaña escolar"
            className="card-img-top img-fluid bg-transparent d-block d-sm-none"
          />
          <Card.Body>
            <Card.Title className="d-none d-sm-block">
              {campaign.title}
            </Card.Title>
            <Card.Text>{campaign.description}</Card.Text>
            <a
              href="./"
              className="btn btn-primary text-white rounded-pill disabled"
            >
              Donar
            </a>
          </Card.Body>
          <Card.Footer className="text-muted">
            <Row>
              <Col md={2} xs={6}>
                <MdDateRange className="text-primary fw-bold fs-4" />
                <span className="fw-bold">{' ' + campaign.date}</span>
              </Col>
              <Col md={2} xs={6}>
                <BiTime className="text-primary fw-bold fs-4" />
                <span className="fw-bold">{' ' + campaign.time}</span>
              </Col>
              <Col md={8} xs={12}>
                <MdPlace className="text-primary fw-bold fs-4" />
                <span className="fw-bold">{' ' + campaign.place}</span>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
        {/* ------------------------------------------- Zona Tablet --------------------------------------- */}
        <div className="d-none d-sm-block bg-primary bg-gradient">
          <h3 className="text-white text-center">Tiempo restante</h3>
          <div className="d-flex justify-content-center align-items-center pt-3">
            <div className="countdown-container me-3">
              <div className="number">{days}</div>
              <div className="concept">Días</div>
            </div>
            <div className="countdown-container me-3">
              <div className="number">{hours}</div>
              <div className="concept">Horas</div>
            </div>
            <div className="countdown-container me-3">
              <div className="number">{minutes}</div>
              <div className="concept">Minutos</div>
            </div>
            <div className="countdown-container me-3">
              <div className="number">{seconds}</div>
              <div className="concept">Segundos</div>
            </div>
          </div>
        </div>
        {/* ------------------------------------------- Zona PC --------------------------------------- */}
        <div className="d-none d-md-block ">
          <Row>
            {images.map((element, index) => {
              return (
                <Col md={3} key={'image_' + index} className="pb-2">
                  <img
                    src={element.image}
                    className="img-thumbnail mb-2"
                    alt="Image"
                  />
                </Col>
              );
            })}
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Content;
