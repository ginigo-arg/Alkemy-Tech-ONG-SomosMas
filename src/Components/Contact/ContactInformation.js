import React from 'react';
import { RiHomeHeartLine } from 'react-icons/ri';
import { BsTelephoneInboundFill } from 'react-icons/bs';
import { MdMarkEmailUnread } from 'react-icons/md';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const organization = {
  id: 1,
  name: 'Somos más',
  short_description: 'lorem lorem lorem',
  long_description:
    'lorem lorem lorem de lorem lorem lorem de lorem lorem lorem de lorem lorem lorem de',
  address: 'Calle la buena ONG',
  phone: '1160112988',
  cellphone: '60112988',
  email: 'somosfundacionmas@gmail.com',
};

const ContactInformation = ({
  layoutVertical = false,
  minimalistVersion = false,
  showVisitUs = true,
  showCallUs = true,
  showSendUsMail = true,
  bgClass = 'bg-primary',
  borderClass = 'border-0 rounded-circle',
  textClass = 'text-white',
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

  const numColumn = 12 / conColumns;

  console.log(conColumns, numColumn);
  return (
    <>
      <Row className="g-0 p-0">
        {showVisitUs && (
          <Col
            md={layoutVertical ? 12 : numColumn}
            className={!minimalistVersion ? 'p-0 border' : ''}
            key={organization.id + '_address'}
          >
            <div
              className={
                minimalistVersion
                  ? 'input-group p-1'
                  : 'input-group border-bottom p-1'
              }
            >
              <div
                className={
                  minimalistVersion
                    ? `input-group-text ${bgClass} ${borderClass}`
                    : `input-group-text ${bgClass}`
                }
                id="groupAddress"
              >
                <RiHomeHeartLine
                  className={
                    minimalistVersion ? 'text-white fs-3' : 'text-white fs-1'
                  }
                />
              </div>
              <div aria-describedby="groupAddress" className="ms-1">
                <h5 className="text-black">
                  {minimalistVersion ? '' : 'Visítanos'}
                </h5>
                <h6>{organization.address}</h6>
              </div>
            </div>
          </Col>
        )}

        {showCallUs && (
          <Col
            md={layoutVertical ? 12 : numColumn}
            className={!minimalistVersion ? 'p-0 border' : ''}
            key={organization.id + '_phone'}
          >
            <div
              className={
                minimalistVersion
                  ? 'input-group p-1'
                  : 'input-group border-bottom p-1'
              }
            >
              <div
                className={
                  minimalistVersion
                    ? `input-group-text ${bgClass} ${borderClass}`
                    : `input-group-text ${bgClass}`
                }
                id="groupCallme"
              >
                <BsTelephoneInboundFill
                  className={
                    minimalistVersion ? 'text-white fs-3' : 'text-white fs-1'
                  }
                />
              </div>
              <div aria-describedby="groupCallme" className="ms-1">
                <h5 className="text-black">
                  {minimalistVersion ? '' : 'Llámanos'}
                </h5>
                <h6>
                  {' '}
                  {organization.phone
                    ? (
                      <>
                        {organization.cellphone} - {organization.phone}
                      </>
                    )
                    : (
                      organization.cellphone
                    )}
                </h6>
              </div>
            </div>
          </Col>
        )}

        {showSendUsMail && (
          <Col
            md={layoutVertical ? 12 : numColumn}
            className={!minimalistVersion ? 'p-0 border' : ''}
            key={organization.id + '_email'}
          >
            <div
              className={
                minimalistVersion
                  ? 'input-group p-1'
                  : 'input-group border-bottom p-1'
              }
            >
              <div
                className={
                  minimalistVersion
                    ? `input-group-text ${bgClass} ${borderClass}`
                    : `input-group-text ${bgClass}`
                }
                id="groupEmail"
              >
                <MdMarkEmailUnread
                  className={
                    minimalistVersion ? 'text-white fs-3' : 'text-white fs-1'
                  }
                />
              </div>
              <div aria-describedby="groupEmail" className="ms-1">
                <h5 className="text-black">
                  {minimalistVersion ? '' : 'Envíanos un correo'}
                </h5>
                <h6>{organization.email}</h6>
              </div>
            </div>
          </Col>
        )}
      </Row>
    </>
  );
};

export default ContactInformation;
