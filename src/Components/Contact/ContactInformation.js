import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid'
import { RiHomeHeartLine } from 'react-icons/ri';
import { BsTelephoneInboundFill } from 'react-icons/bs';
import { MdMarkEmailUnread } from 'react-icons/md';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ORGANIZATION_CONTACT_DATA } from '../../Services/contactService'

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

  const id = nanoid()

  const [organization, setOrganization] = useState({});

  const loadData = async () => {
    const data = await ORGANIZATION_CONTACT_DATA();
    setOrganization(data);
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <Row className="g-0 p-0">
        {showVisitUs && (
          <Col
            md={layoutVertical ? 12 : numColumn}
            className={!minimalistVersion ? 'p-0 border' : ''}
            key={id + '_address'}
          >
            <div
              className={
                minimalistVersion
                  ? 'input-group p-1'
                  : 'input-group border-bottom p-1 d-flex'
              }
            >
              <div
                className={
                  minimalistVersion
                    ? `input-group-text ${bgClass} ${borderClass} h-40 w-40`
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
            key={id + '_phone'}
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
                    ? `input-group-text ${bgClass} ${borderClass} h-40 w-40`
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
                  {organization.phone && organization.cellphone
                    ? (
                      <>
                        {organization.phone} - {organization.cellphone}
                      </>
                    )
                    : (
                      organization.cellphone || organization.phone
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
            key={id + '_email'}
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
                    ? `input-group-text ${bgClass} ${borderClass} h-40 w-40`
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

    <div className="row d-flex" style={{display: "flex"}}>
        <div className="col-md-4 col-sm-6 col-xs-12">
        <div className="mini-card clearfixx bg-info rounded d-flex">
                <span className="mini-card-icon bg-secondary">
                  <RiHomeHeartLine
                    className={
                      minimalistVersion ? 'text-white fs-3' : 'text-white fs-1'
                    }
                  />
                </span>
                <div className="mini-card-info">
                {minimalistVersion ?
                   '' : <h5 className="text-black">Visítanos</h5>}
                    <span>{organization.address}</span>
                </div>
            </div>
        </div>
        <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="mini-card clearfixx bg-primary rounded d-flex">
                <span className="mini-card-icon bg-secondary">
                  <BsTelephoneInboundFill
                    className={
                      minimalistVersion ? 'text-white fs-3' : 'text-white fs-1'
                    }
                  />
                </span>
                <div className="mini-card-info">
                {minimalistVersion ?
                   '' : <h5 className="text-black">Llámanos</h5>}
                    <span>{organization.phone && organization.cellphone
                    ? (
                      <>
                        {organization.phone} - {organization.cellphone}
                      </>
                    )
                    : (
                      organization.cellphone || organization.phone
                    )}</span>
                </div>
            </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
            <div className="mini-card clearfix bg-warning rounded d-flex">
                <span className="mini-card-icon bg-secondary">
                  <MdMarkEmailUnread
                    className={
                      minimalistVersion ? 'text-white fs-3' : 'text-white fs-1'
                    }
                  />
                </span>
                <div className="mini-card-info">
                {minimalistVersion ?
                   '' : <h5 className="text-black">Envíanos un correo</h5>}
                    <span>{organization.email}</span>
                </div>
            </div>
        </div>        
	</div>
    </>
  );
};

export default ContactInformation;
