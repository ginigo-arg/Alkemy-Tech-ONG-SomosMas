import React from 'react';
import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
//iconos redes sociales quemados
import facebook from '../../assets/img/iconos/socialMedia/facebook.png';
import whatsapp from '../../assets/img/iconos/socialMedia/whatsapp.png';
import twitter from '../../assets/img/iconos/socialMedia/twitter.png';
import instagram from '../../assets/img/iconos/socialMedia/instagram.png';

const SocialMedia = ({ layoutVertical = true, showTitle = false }) => {
  const socialMedia = [
    {
      id: 1,
      name: 'Facebook',
      image: facebook,
      url: 'https://www.facebook.com/Somos_Más',
    },
    {
      id: 2,
      name: 'Whatsapp',
      image: whatsapp,
      url: 'https://api.whatsapp.com/send/?phone=541160112988&text=Buen día, quisiera saber como hago para donar&app_absent=0',
    },
    {
      id: 3,
      name: 'Twitter',
      image: twitter,
      url: 'https://www.twiiter.com/SomosMás',
    },
    {
      id: 4,
      name: 'Instagram',
      image: instagram,
      url: 'https://www.instagram.com/SomosMás',
    },
  ];

  return (
    <>
      <ListGroup
        as="ul"
        className={
          layoutVertical
            ? 'bg-transparent'
            : 'text-center bg-transparent navbar-nav navbar-center'
        }
        variant={layoutVertical ? 'flush' : 'horizontal'}
      >
        {socialMedia.map((red) => {
          return (
            <>
              <Link
                to={{ pathname: `${red.url}` }}
                target="_blank"
                className="text-decoration-none"
              >
                <ListGroup.Item as="li" action>
                  <h6 className="pt-2">
                    <Image
                      src={red.image}
                      alt={red.name}
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        verticalAlign: 'middle',
                      }}
                    />{' '}
                    {showTitle && red.name}
                  </h6>
                </ListGroup.Item>
              </Link>
            </>
          );
        })}
      </ListGroup>
    </>
  );
};

export default SocialMedia;
