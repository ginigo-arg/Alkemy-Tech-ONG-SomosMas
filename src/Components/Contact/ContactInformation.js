/* eslint-disable comma-dangle */
/* eslint-disable multiline-ternary */
import React, { useEffect, useState } from 'react';
// import { nanoid } from 'nanoid';
import { RiHomeHeartLine } from 'react-icons/ri';
// import { FcHome } from 'react-icons/ri';
import { BsTelephoneInboundFill } from 'react-icons/bs';
import { MdMarkEmailUnread } from 'react-icons/md';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import { ORGANIZATION_CONTACT_DATA } from '../../Services/contactService';

const ContactInformation = ({
  layoutVertical = false,
  minimalistVersion = false,
  showVisitUs = true,
  showCallUs = true,
  showSendUsMail = true,
  bgClassContentVisitUs = 'bg-info bg-gradient',
  bgClassContentCallUs = 'bg-primary bg-gradient',
  bgClassContentSendUsMail = 'bg-warning bg-gradient',
  sizeIcon = 40,
  fontSizeIcon = 'fs-4',
  bgClassIcon = 'bg-secondary',
  textColorIcon = 'text-white',
  textColorBody = 'text-black',
  colorLink = 'text-black',
}) => {
  let conColumns = 0;
  if (showVisitUs) {
    conColumns += 1;
  }
  if (showCallUs) {
    conColumns += 1;
  }
  if (showSendUsMail) {
    conColumns += 1;
  }
  if (conColumns === 0) {
    conColumns = 1;
  }

  // const numColumn = 12 / conColumns;

  // const id = nanoid();

  const [organization, setOrganization] = useState({});

  const loadData = async () => {
    const data = await ORGANIZATION_CONTACT_DATA();
    setOrganization(data);
  };

  const styleInformation = {
    minWidth: `${sizeIcon}px`,
    minHeight: `${sizeIcon}px`,
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <div className={`d-flex ${layoutVertical ? 'flex-column' : 'flex-row'} bd-highlight`}>
        {/* Visítanos */}
        {showVisitUs &&
        <div className={`${minimalistVersion ? 'p-0' : bgClassContentVisitUs} mini-card rounded d-flex align-items-center me-2 bd-highlight w-100`}>
          <div className={`rounded-circle ${bgClassIcon} ms-0 me-2 d-flex justify-content-center align-items-center`} style={styleInformation}>
            <RiHomeHeartLine
              className={`${textColorIcon} ${fontSizeIcon}`}
            />
          </div>
          <div className={`${textColorBody} mini-card-info`}>
            {minimalistVersion ? '' : <h5>Visítanos</h5>}
            <span>{organization.address}</span>
          </div>
        </div>
        }
        {/* Llámanos */}
        {showCallUs &&
        <div className={`${minimalistVersion ? 'p-0' : bgClassContentCallUs} mini-card rounded d-flex align-items-center me-2 bd-highlight w-100`}>
          <div className={`rounded-circle ${bgClassIcon} ms-0 me-2 d-flex justify-content-center align-items-center`} style={styleInformation}>
            <BsTelephoneInboundFill
              className={`${textColorIcon} ${fontSizeIcon}`}
            />
          </div>
          <div className={`${textColorBody} mini-card-info`}>
            {minimalistVersion ? '' : <h5>Llámanos</h5>}
            <span>
              {organization.phone && organization.cellphone ? (
                <>
                  {organization.phone} - {organization.cellphone}
                </>
              ) : (
                organization.cellphone || organization.phone
              )}
            </span>
          </div>
        </div>
        }
        {/* Envíanos un correo */}
        {showSendUsMail &&
        <div className={`${minimalistVersion ? 'p-0' : bgClassContentSendUsMail} mini-card rounded d-flex align-items-center me-2 bd-highlight w-100`}>
          <div className={`rounded-circle ${bgClassIcon} ms-0 me-2 d-flex justify-content-center align-items-center`} style={styleInformation}>
            <MdMarkEmailUnread
              className={`${textColorIcon} ${fontSizeIcon}`}
            />
          </div>
          <div className={`${textColorBody} mini-card-info`}>
            {minimalistVersion ? '' : <h5>Envíanos un correo</h5>}
            <span>
              <a target="_blank" className={colorLink} href={`mailto:${organization.email}`} rel="noopener noreferrer">{organization.email}</a>
            </span>
          </div>
        </div>
        }
      </div>
    </>
  );
};

export default ContactInformation;
