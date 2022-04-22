/* eslint-disable comma-dangle */
/* eslint-disable multiline-ternary */
import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { ORGANIZATION_CONTACT_DATA } from '../../Services/contactService';
import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
// iconos redes sociales quemados
import facebook from '../../assets/img/iconos/socialMedia/facebook.png';
import linkedin from '../../assets/img/iconos/socialMedia/linkedin.png';
import twitter from '../../assets/img/iconos/socialMedia/twitter.png';
import instagram from '../../assets/img/iconos/socialMedia/instagram.png';

const SocialMedia = ({ showFacebook = true, showLinkedin = true, showTwitter = true, showInstagram = true, layoutVertical = true, showTitle = false, bgContainer = 'bg-transparent', clsBorder = '', p0 = false, sizeIcon = 40 }) => {
  const id = nanoid();

  const [organization, setOrganization] = useState({});

  const loadData = async () => {
    const data = await ORGANIZATION_CONTACT_DATA();
    setOrganization(data);
  };

  const styleSocial = {
    width: `${sizeIcon}px`,
    height: `${sizeIcon}px`,
    /* border-radius: 50%; */
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <ListGroup
        as="ul"
        className={`${bgContainer} ${!layoutVertical
          ? 'text-center bg-transparent navbar-nav navbar-center' : ''}`
        }
        variant={layoutVertical ? 'flush' : 'horizontal'}
      >
        {showFacebook &&
        <Link
          to={{ pathname: `${organization.facebook_url}` }}
          target="_blank"
          className="text-decoration-none"
        >
          <ListGroup.Item as="li" action key={id + '_facebook'} className={`${clsBorder} bg-transparent ${p0 ? 'p-0' : ''}`}>
            <h6 className="pt-2">
              <Image src={facebook} alt="facebook" className="m-1 icon-facebook rounded-circle" style={styleSocial} />{' '}
              {layoutVertical && ' Facebook'}
            </h6>
          </ListGroup.Item>
        </Link>
        }
        {showLinkedin &&
        <Link
          to={{ pathname: `${organization.linkedin_url}` }}
          target="_blank"
          className="text-decoration-none"
        >
          <ListGroup.Item as="li" action key={id + '_linkedin'} className={`${clsBorder} bg-transparent ${p0 ? 'p-0' : ''}`}>
            <h6 className="pt-2">
              <Image src={linkedin} alt="linkedin" className="m-1 icon-linkedin rounded-circle" style={styleSocial} />{' '}
              {layoutVertical && ' Linkedin'}
            </h6>
          </ListGroup.Item>
        </Link>
        }
        {showTwitter &&
        <Link
          to={{ pathname: `${organization.twitter_url}` }}
          target="_blank"
          className="text-decoration-none"
        >
          <ListGroup.Item as="li" action key={id + '_twitter'} className={`${clsBorder} bg-transparent ${p0 ? 'p-0' : ''}`}>
            <h6 className="pt-2">
              <Image src={twitter} alt="twitter" className="m-1 icon-twitter rounded-circle" style={styleSocial} />{' '}
              {layoutVertical && ' Twitter'}
            </h6>
          </ListGroup.Item>
        </Link>
        }
        {showInstagram &&
        <Link
          to={{ pathname: `${organization.instagram_url}` }}
          target="_blank"
          className="text-decoration-none"
        >
          <ListGroup.Item as="li" action key={id + '_instagram'} className={`${clsBorder} bg-transparent ${p0 ? 'p-0' : ''}`}>
            <h6 className="pt-2">
              <Image src={instagram} alt="instagram" className="m-1 icon-instagram rounded-circle" style={styleSocial} />{' '}
              {layoutVertical && ' Instagram'}
            </h6>
          </ListGroup.Item>
        </Link>
        }
      </ListGroup>
    </>
  );
};

export default SocialMedia;
