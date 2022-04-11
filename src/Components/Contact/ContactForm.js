/* eslint-disable multiline-ternary */
import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { SEND_EMAIL } from '../../Services/contactService'
import {
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

const ContactSchema = Yup.object({
  name: Yup.string().required('Campo requerido'),
  email: Yup.string()
    .email('Dirección de correo electrónico no válida')
    .required('Campo requerido'),
  phone: Yup.string().required('Campo requerido')
    .matches(/^[0-9]\d{7,11}$/, 'Debe ser un número y contener una longitud mínima de 8 caracteres y maximo 12 caracteres'),
  message: Yup.string().required('Campo requerido'),
});

const ContactForm = () => {
  const [isLoading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
    validationSchema: ContactSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      sendData();
      formik.resetForm();
    },
  });

  const simulateNetworkRequest = () => {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  };

  const sendData = async () => {
    setLoading(true);
    const data = await SEND_EMAIL();
    console.log(data);
    if(data);
    {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   console.log('Se envio el formulario ', datosFormValues);
  // };

  return (
    <Form onSubmit={formik.handleSubmit} >
      <Row>
        <div id="msgContactSubmit" className="hidden"></div>
        <span>
          Los campos marcados con <span className="text-danger fw-bold">*</span>{' '}
          son requeridos
        </span>
        <Form.Group controlId="formGridName" className="mt-2 mb-2">
          <Form.Label className="visually-hidden">Nombre</Form.Label>
          <InputGroup>
            <InputGroup.Text id="basic-addon1" className="bg-primary">
              <BsPersonCircle className="text-white fs-5" />
            </InputGroup.Text>
            <Form.Control
              type="text"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              className={
                    formik.errors.name
                      ? 'form-control border-danger'
                      : 'form-control border-success'
                  }
              placeholder="Tu Nombre"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          {formik.errors.name ? (
                  <span className="text-danger">{formik.errors.name} </span>
                ) : null}
        </Form.Group>

        <Form.Group as={Col} md={8} controlId="formGridEmail" className="mt-2 mb-2">
          <Form.Label className="visually-hidden">E-mail</Form.Label>
          <InputGroup>
            <InputGroup.Text id="basic-addon2" className="bg-primary">
              <AiOutlineMail className="text-white fs-5" />
            </InputGroup.Text>
            <Form.Control
              type="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className={
                    formik.errors.email
                      ? 'form-control border-danger'
                      : 'form-control border-success'
                  }
              placeholder="Tu E-mail*"
              aria-describedby="basic-addon2"
            />
          </InputGroup>
          {formik.errors.email ? (
                  <span className="text-danger">{formik.errors.email} </span>
                ) : null}
        </Form.Group>

        <Form.Group as={Col} md={4} controlId="formGridPhone" className="mt-2 mb-2">
          <Form.Label className="visually-hidden">Teléfono</Form.Label>
          <InputGroup>
            <InputGroup.Text id="basic-addon3" className="bg-primary">
              <BsFillTelephoneFill className="text-white fs-5" />
            </InputGroup.Text>
            <Form.Control
              type="text"
              name="phone"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
              className={
                    formik.errors.phone
                      ? 'form-control border-danger'
                      : 'form-control border-success'
                  }
              placeholder="Tu # de teléfono*"
              aria-describedby="basic-addon3"
            />
          </InputGroup>
          {formik.errors.phone ? (
                  <span className="text-danger">{formik.errors.phone} </span>
                ) : null}
        </Form.Group>

        <Form.Group
          as={Col}
          md={12}
          controlId="formGridMessage"
          className="mt-2 mb-2"
        >
          <Form.Label className="visually-hidden">Mensaje</Form.Label>
          <InputGroup>
            <InputGroup.Text id="basic-addon5" className="bg-primary">
              <BiMessageDetail className="text-white fs-5" />
            </InputGroup.Text>
            <Form.Control
              as="textarea"
              name="message"
              rows="8"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
              className={
                    formik.errors.message
                      ? 'form-control border-danger'
                      : 'form-control border-success'
                  }
              placeholder="Escribe tu comentario aquí*"
              aria-describedby="basic-addon5"
            />
          </InputGroup>
          {formik.errors.message ? (
                  <span className="text-danger">{formik.errors.message} </span>
                ) : null}
        </Form.Group>

        <Col sm={12} className="form-group last mt-2 mb-4">
          <Button
            variant="primary"
            disabled={isLoading}
            type="submit"
            id="submit"
            className="text-white"
          >
            {isLoading
              ? (
                'Sending...'
              )
              : (
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
