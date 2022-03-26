import React, { useState, useEffect } from 'react';
import {
  BsFillJournalBookmarkFill,
  BsFillTelephoneFill,
  BsPersonCircle,
} from 'react-icons/bs';
import { GiEnvelope } from 'react-icons/gi';
import { AiOutlineMail } from 'react-icons/ai';
import { BiMessageDetail } from 'react-icons/bi';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const ContactForm = () => {
  const [isLoading, setLoading] = useState(false);
  const [datosFormValues, setDatosFormValues] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    if (e.target.name === 'name') {
      setDatosFormValues({ ...datosFormValues, name: e.target.value });
    }
    if (e.target.name === 'email') {
      setDatosFormValues({ ...datosFormValues, email: e.target.value });
    }
    if (e.target.name === 'phone') {
      setDatosFormValues({ ...datosFormValues, phone: e.target.value });
    }
    if (e.target.name === 'subject') {
      setDatosFormValues({ ...datosFormValues, subject: e.target.value });
    }
    if (e.target.name === 'message') {
      setDatosFormValues({ ...datosFormValues, message: e.target.value });
    }
  };

  const simulateNetworkRequest = () => {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  };

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log('Se envio el formulario ', datosFormValues);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <div id="msgContactSubmit" className="hidden"></div>
        <span>
          Los Campos marcados con <span className="text-danger fw-bold">*</span>{' '}
          son requeridos
        </span>
        <Form.Group controlId="formGridName" className="mt-2">
          <Form.Label className="visually-hidden">Nombre</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1" className="bg-primary">
              <BsPersonCircle className="text-white fs-5" />
            </InputGroup.Text>
            <Form.Control
              type="text"
              name="name"
              className="form-control"
              value={datosFormValues.name}
              onChange={handleChange}
              placeholder="Tu Nombre"
              required
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </Form.Group>

        <Form.Group as={Col} md={8} controlId="formGridEmail" className="mt-2">
          <Form.Label className="visually-hidden">E-mail</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon2" className="bg-primary">
              <AiOutlineMail className="text-white fs-5" />
            </InputGroup.Text>
            <Form.Control
              type="email"
              name="email"
              className="form-control"
              value={datosFormValues.email}
              onChange={handleChange}
              placeholder="Tu E-mail*"
              pattern=".*@\w{2,}\.\w{2,}"
              required
              aria-describedby="basic-addon2"
            />
          </InputGroup>
        </Form.Group>

        <Form.Group as={Col} md={4} controlId="formGridPhone" className="mt-2">
          <Form.Label className="visually-hidden">Teléfono</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon3" className="bg-primary">
              <BsFillTelephoneFill className="text-white fs-5" />
            </InputGroup.Text>
            <Form.Control
              type="text"
              name="phone"
              className="form-control"
              value={datosFormValues.phone}
              onChange={handleChange}
              placeholder="Tu # de teléfono*"
              required
              aria-describedby="basic-addon3"
            />
          </InputGroup>
        </Form.Group>

        <Form.Group
          as={Col}
          md={12}
          controlId="formGridSubject"
          className="mt-2"
        >
          <Form.Label className="visually-hidden">Asunto</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon4" className="bg-primary">
              <BsFillJournalBookmarkFill className="text-white fs-5" />
            </InputGroup.Text>
            <Form.Control
              type="text"
              name="subject"
              className="form-control"
              value={datosFormValues.subject}
              onChange={handleChange}
              placeholder="Asunto*"
              required
              aria-describedby="basic-addon4"
            />
          </InputGroup>
        </Form.Group>

        <Form.Group
          as={Col}
          md={12}
          controlId="formGridMessage"
          className="mt-2"
        >
          <Form.Label className="visually-hidden">Mensaje</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon5" className="bg-primary">
              <BiMessageDetail className="text-white fs-5" />
            </InputGroup.Text>
            <Form.Control
              as="textarea"
              name="message"
              rows="8"
              className="form-control"
              value={datosFormValues.message}
              onChange={handleChange}
              placeholder="Escribe tu comentario aquí*"
              required
              aria-describedby="basic-addon5"
            />
          </InputGroup>
        </Form.Group>

        <Col sm={12} className="form-group last mt-2 mb-4">
          <Button
            variant="primary"
            disabled={isLoading}
            type="submit"
            id="submit"
            className="text-white"
          >
            {isLoading ? (
              'Sending...'
            ) : (
              <>
                <GiEnvelope className="text-white" /> Enviar
              </>
            )}
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default ContactForm;
