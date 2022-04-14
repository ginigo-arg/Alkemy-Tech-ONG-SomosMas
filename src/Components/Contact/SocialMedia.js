import React, { useEffect, useState } from 'react';
// import { nanoid } from 'nanoid';
import { ORGANIZATION_CONTACT_DATA } from '../../Services/contactService';
import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
// iconos redes sociales quemados
import facebook from '../../assets/img/iconos/socialMedia/facebook.png';
import linkedin from '../../assets/img/iconos/socialMedia/linkedin.png';
import twitter from '../../assets/img/iconos/socialMedia/twitter.png';
import instagram from '../../assets/img/iconos/socialMedia/instagram.png';

const SocialMedia = ({ layoutVertical = true, showTitle = false }) => {
  // const id = nanoid();

  const [organization, setOrganization] = useState({});

  const loadData = async () => {
    const data = await ORGANIZATION_CONTACT_DATA();
    setOrganization(data);
  };

  useEffect(() => {
    loadData();
  }, []);

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
        <Link
          to={{ pathname: `${organization.facebook_url}` }}
          target="_blank"
          className="text-decoration-none"
        >
          <ListGroup.Item as="li" action>
            <h6 className="pt-2">
              <Image
                src={facebook}
                alt="facebook"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  verticalAlign: 'middle',
                }}
              /> { layoutVertical && ' Facebook' }
            </h6>
          </ListGroup.Item>
        </Link>
        <Link
          to={{ pathname: `${organization.linkedin_url}` }}
          target="_blank"
          className="text-decoration-none"
        >
          <ListGroup.Item as="li" action>
            <h6 className="pt-2">
              <Image
                src={linkedin}
                alt="linkedin"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  verticalAlign: 'middle',
                }}
              /> {layoutVertical && ' Linkedin'}
            </h6>
          </ListGroup.Item>
        </Link>
        <Link
          to={{ pathname: `${organization.twitter_url}` }}
          target="_blank"
          className="text-decoration-none"
        >
          <ListGroup.Item as="li" action>
            <h6 className="pt-2">
              <Image
                src={twitter}
                alt="twitter"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  verticalAlign: 'middle',
                }}
              /> { layoutVertical && ' Twitter' }
            </h6>
          </ListGroup.Item>
        </Link>
        <Link
          to={{ pathname: `${organization.instagram_url}` }}
          target="_blank"
          className="text-decoration-none"
        >
          <ListGroup.Item as="li" action>
            <h6 className="pt-2">
              <Image
                src={instagram}
                alt="instagram"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  verticalAlign: 'middle',
                }}
              /> { layoutVertical && ' Instagram' }
            </h6>
          </ListGroup.Item>
        </Link>
      </ListGroup>
    </>
  );
};

export default SocialMedia;
