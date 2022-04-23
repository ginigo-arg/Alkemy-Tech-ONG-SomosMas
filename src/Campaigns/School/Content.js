import React, { useEffect, useState } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import imgContent from '../../assets/img/campaigns/school/content/contenido3.png';
// import imgConstruction from '../../assets/img/campaigns/school/content/construction.png';
import './Content.css';
import CounterDown from './CounterDown';
import { ORGANIZATION_CONTACT_DATA } from '../../Services/contactService';
import CampaignInformation from './Information';
import ContactForm from '../../Components/Contact/ContactForm';

const Content = () => {
  const [campaign, setCampaign] = useState({
    title: 'Vuelta al cole',
    slogan: 'Eslogan campaña',
    description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto  maxime earum molestiae ad ex distinctio repellendus perferendis vero voluptatibus qui reprehenderit nulla dolor repellat praesentium, ipsum quas ab facere consectetur.',
    dateStart: '2022-03-14',
    dateEnd: '2022-04-26',
    timeStart: '08:30',
    timeEnd: '17:00',
    address: 'Calle la buena OGN - Buenos Aires',
  });

  const loadData = async () => {
    const data = await ORGANIZATION_CONTACT_DATA();
    setCampaign({ ...campaign, address: data.address });
  };

  useEffect(() => {
    loadData();
  }, []);

  const counterTime = CounterDown(campaign.dateEnd + ' ' + campaign.timeEnd);

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
      <Container fluid className='bg-light bg-content pb-22 pt-2'>
        {/* ------------------------------------------- Zona Movil --------------------------------------- */}
        <Card className='d-block d-sm-none'>
          <Card.Img
            src={imgContent}
            alt="Campaña escolar"
            className='card-img-top img-fluid bg-transparent d-block d-sm-none'
          />
          <Card.Body>
            <Card.Text>{campaign.description}</Card.Text>
          </Card.Body>
        </Card>
        <div className='bg-white sa p-2'>
          <Row>
            <Col sm={12} md={6} className='main-text mt-2'>
              <h2 className='text-primary'>¿Como apoyar?</h2>
              <p className='lh-lg justify'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
                nulla inventore. Obcaecati aut doloribus libero explicabo
                voluptatem expedita ullam placeat iusto nemo veniam minus enim
                mollitia, sint error eaque voluptate.
              </p>
              <h2 className='text-primary'>Más información</h2>
              <p className='lh-lg justify'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
                nulla inventore. Obcaecati aut doloribus libero explicabo
                voluptatem expedita ullam placeat iusto nemo veniam minus enim
                mollitia, sint error eaque voluptate.
              </p>
            </Col>
            <Col sm={12} md={6} className='main-text mt-2'>
              <CampaignInformation layoutVertical={true} address = {campaign.address} date = {' DEL ' + campaign.dateStart + ' AL ' + campaign.dateEnd } time = {campaign.timeStart + ' - ' + campaign.timeEnd} />
            </Col>
          </Row>
        </div>
        <div className='d-block d-sm-block d-md-none'>
          <h3 className='text-primary'>Contactanos para mayor información</h3>
          <ContactForm showTitle={false} />
        </div>
        {/* ------------------------------------------- Zona Tablet --------------------------------------- */}
        <div className='d-none d-sm-block bg-info bg-info'>
          <h3 className='text-white text-center'>Tiempo restante</h3>
          <div className='d-flex justify-content-center align-items-center pt-3'>
            <div className='countdown-container me-3'>
              <div className='number'>{days}</div>
              <div className='concept'>Días</div>
            </div>
            <div className='countdown-container me-3'>
              <div className='number'>{hours}</div>
              <div className='concept'>Horas</div>
            </div>
            <div className='countdown-container me-3'>
              <div className='number'>{minutes}</div>
              <div className='concept'>Minutos</div>
            </div>
            <div className='countdown-container me-3'>
              <div className='number'>{seconds}</div>
              <div className='concept'>Segundos</div>
            </div>
          </div>
        </div>
        {/* ------------------------------------------- Zona PC --------------------------------------- */}
        <div className='d-none d-md-block bg-white'>
          <Row>
            <Col md={6}>
              <h4 className='text-black mt-2 p-0'>Efecto de tu ayuda</h4>
              <Row>
                {images.map((element, index) => {
                  return (
                    <Col md={6} key={'image_' + index} className='pb-2'>
                      <img
                        src={element.image}
                        className='img-thumbnail mb-2'
                        alt='Image'
                      />
                    </Col>
                  );
                })}
              </Row>
            </Col>
            <Col>
              <h4 className='text-black mt-2 p-0'>Contactanos para mayor información</h4>
              <ContactForm showTitle={false} />
            </Col>
          </Row>
        </div>

      </Container>
    </>
  );
};

export default Content;
