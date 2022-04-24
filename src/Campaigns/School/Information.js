/* eslint-disable comma-dangle */
/* eslint-disable multiline-ternary */
import React from 'react';
// import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { BiTime } from 'react-icons/bi';
import { MdDateRange, MdPlace } from 'react-icons/md';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import { ORGANIZATION_CONTACT_DATA } from '../../Services/contactService';

const ContactInformation = ({
  layoutVertical = false,
  minimalistVersion = false,
  showVisitUs = true,
  showCallUs = true,
  showSendUsMail = true,
  bgClassContentVisitUs = 'bg-info bg-gradient',
  bgClassContentCallUs = 'bg-primary bg-gradient',
  bgClassContentSendUsMail = 'bg-warning bg-gradient',
  bgClassIcon = 'bg-secondary',
  textColorIcon = 'text-white',
  textColorBody = 'text-black',
  address,
  date,
  time,
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

  const id = nanoid();

  // const [organization, setOrganization] = useState({});

  // const loadData = async () => {
  //   const data2 = await ORGANIZATION_CONTACT_DATA();
  //   setOrganization(data2);
  // };

  // useEffect(() => {
  //   loadData();
  // }, []);

  return (
    <>
      <Row>
        {showVisitUs && (
          <Col md={layoutVertical ? 12 : numColumn} key={id + '_address'}>
            <div
              className={
                minimalistVersion
                  ? 'd-flex justify-content-start align-items-center'
                  : `mini-card ${bgClassContentVisitUs} rounded d-flex align-items-center`
              }
            >
              <div
                className={
                  minimalistVersion
                    ? `rounded-pill h-40 w-40 ${bgClassIcon} ms-0 m-2`
                    : `rounded-pill h-60 w-60 ${bgClassIcon} ms-0 m-2`
                }
              >
                <span
                  className={
                    minimalistVersion
                      ? 'mini-card-icon line-height-40 h-40 w-40'
                      : 'mini-card-icon line-height-60 h-60 w-60'
                  }
                >
                  <MdPlace className={
                    minimalistVersion
                      ? `${textColorIcon} fs-3`
                      : `${textColorIcon} fs-1`
                  } />
                </span>
              </div>
              <div className={`${textColorBody} mini-card-info`}>
                {minimalistVersion ? '' : <h5>Lugar</h5>}
                <span>{address}</span>
              </div>
            </div>
          </Col>
        )}
        {showCallUs && (
          <Col md={layoutVertical ? 12 : numColumn} key={id + '_phone'}>
            <div
              className={
                minimalistVersion
                  ? 'd-flex justify-content-start align-items-center'
                  : `mini-card ${bgClassContentCallUs} rounded d-flex align-items-center`
              }
            >
              <div
                className={
                  minimalistVersion
                    ? `rounded-pill h-40 w-40 ${bgClassIcon} ms-0 m-2`
                    : `rounded-pill h-60 w-60 ${bgClassIcon} ms-0 m-2`
                }
              >
                <span
                  className={
                    minimalistVersion
                      ? 'mini-card-icon line-height-40 h-40 w-40'
                      : 'mini-card-icon line-height-60 h-60 w-60'
                  }
                >
                  <MdDateRange
                    className={
                      minimalistVersion
                        ? `${textColorIcon} fs-3`
                        : `${textColorIcon} fs-1`
                    }
                  />
                </span>
              </div>
              <div className={`${textColorBody} mini-card-info`}>
                {minimalistVersion ? '' : <h5>Fecha</h5>}
                <span>{date}</span>
              </div>
            </div>
          </Col>
        )}
        {showSendUsMail && (
          <Col md={layoutVertical ? 12 : numColumn} key={id + '_hour'}>
            <div
              className={
                minimalistVersion
                  ? 'd-flex justify-content-start align-items-center'
                  : `mini-card ${bgClassContentSendUsMail} rounded d-flex align-items-center`
              }
            >
              <div
                className={
                  minimalistVersion
                    ? `rounded-pill h-40 w-40 ${bgClassIcon} ms-0 m-2`
                    : `rounded-pill h-60 w-60 ${bgClassIcon} ms-0 m-2`
                }
              >
                <span
                  className={
                    minimalistVersion
                      ? 'mini-card-icon line-height-40 h-40 w-40'
                      : 'mini-card-icon line-height-60 h-60 w-60'
                  }
                >
                  <BiTime
                    className={
                      minimalistVersion
                        ? `${textColorIcon} fs-3`
                        : `${textColorIcon} fs-1`
                    }
                  />
                </span>
              </div>
              <div className={`${textColorBody} mini-card-info`}>
                {minimalistVersion ? '' : <h5>Hora</h5>}
                <span>{time}</span>
              </div>
            </div>
          </Col>
        )}
      </Row>
    </>
  );
};

export default ContactInformation;
