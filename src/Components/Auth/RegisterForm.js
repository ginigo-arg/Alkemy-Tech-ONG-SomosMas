/* eslint-disable multiline-ternary */
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, Container, Col, Form, InputGroup, Row } from 'react-bootstrap';
import { FaEye } from 'react-icons/fa';
import { AiFillEyeInvisible } from 'react-icons/ai';
import './registerForm.css';
import './shapes.css';

const SignupSchema = Yup.object({
  name: Yup.string().required('Campo requerido'),
  lastName: Yup.string().required('Campo requerido'),
  email: Yup.string()
    .email('Dirección de correo electrónico no válida')
    .required('Campo requerido'),
  password: Yup.string()
    .required('Campo requerido')
    .matches(
      /^.*(?=.{6,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-zA-Z]){1}).*$/,
      // eslint-disable-next-line comma-dangle
      'La contraseña debe tener una longitud mínima de 6 caraceteres, y contener al menos un número, una letra y un símbolo (por ejemplo: @#$%)'
    ),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref('password'), null],
    // eslint-disable-next-line comma-dangle
    'La contraseña no coincide'
  ),
});

const RegisterForm = ({ isLogin, setisLogin }) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      lastName: '',
      email: '',
      password: '',
      passwordConfirmation: '',
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      formik.resetForm();
    },
  });

  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  return (
    <Container>
      <Row>
        <Col >
          <Form onSubmit={formik.handleSubmit} className="m-3">

            <Form.Group
              as={Col}
              controlId="name"
              className="mb-3 input-group-lg"
            >
              <Form.Control
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
                className={
                  formik.errors.name
                    ? 'border-danger'
                    : 'border-success'
                }
                placeholder="Nombre"
              />
              {formik.errors.name ? (
                <span className="text-danger">{formik.errors.name} </span>
              ) : null}
            </Form.Group>
            <Form.Group
              as={Col}
              controlId="lastName"
              className="mb-3 input-group-lg"
            >
              <Form.Control
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
                className={
                  formik.errors.lastName
                    ? 'border-danger'
                    : 'border-success'
                }
                placeholder="Apellidos"
              />
              {formik.errors.lastName ? (
                <span className="text-danger">{formik.errors.lastName} </span>
              ) : null}
            </Form.Group>

            <Form.Group controlId="email" className="mb-3 input-group-lg">
              <Form.Control
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className={
                  formik.errors.email
                    ? 'border-danger'
                    : 'border-success'
                }
                placeholder="Email"
              />
              {formik.errors.email ? (
                <span className="text-danger">{formik.errors.email} </span>
              ) : null}
            </Form.Group>

            <Form.Group as={Col} controlId="password" className='mb-3'>
              <InputGroup className="input-group-lg">
                <Form.Control
                  type={showPass ? 'text' : 'password'}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  className={
                    formik.errors.password
                      ? ' border-danger'
                      : ' border-success'
                  }
                  placeholder="Password"
                />
                <Button
                  variant="outline-secondary"
                  id="button-addon1"
                  className={
                    formik.errors.password
                      ? ' border-danger'
                      : ' border-success'
                  }
                  onClick={() => {
                    setShowPass(!showPass);
                  }}
                >
                  {showPass ? (
                    <AiFillEyeInvisible className="fs-3" />
                  ) : (
                    <FaEye className="fs-3" />
                  )}
                </Button>
              </InputGroup>
              {formik.errors.password ? (
                <span className="text-danger">{formik.errors.password} </span>
              ) : null}
            </Form.Group>
            <Form.Group as={Col} controlId="passwordConfirmation" className='mb-3'>
              <InputGroup className="input-group-lg">
                <Form.Control
                  type={showConfirmPass ? 'text' : 'password'}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.passwordConfirmation}
                  className={
                    formik.errors.passwordConfirmation
                      ? ' border-danger'
                      : ' border-success'
                  }
                  placeholder="Confirmar password"
                />
                <Button
                  variant="outline-secondary"
                  id="button-addon2"
                  className={
                    formik.errors.passwordConfirmation
                      ? ' border-danger'
                      : ' border-success'
                  }
                  onClick={() => {
                    setShowConfirmPass(!showConfirmPass);
                  }}
                >
                  {showConfirmPass ? (
                    <AiFillEyeInvisible className="fs-3" />
                  ) : (
                    <FaEye className="fs-3" />
                  )}
                </Button>
              </InputGroup>
              {formik.errors.passwordConfirmation ? (
                <span className="text-danger">
                  {formik.errors.passwordConfirmation}{' '}
                </span>
              ) : null}
            </Form.Group>
            <Col className='d-flex justify-content-between'>
              <button onClick={() => setisLogin(!isLogin)} className='text-primary mr-2 bg-white border-0'><strong>
                Ya tengo cuenta
              </strong>
              </button>
              <Button
                variant="primary"
                type="submit"
                className="btn-lg bg-gradient text-white"
              >
                Regístrarme
              </Button>
            </Col>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterForm;
