/* eslint-disable multiline-ternary */
import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, Container, Col, Form, InputGroup, Row } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';
import { AiFillEyeInvisible } from 'react-icons/ai';
import './registerForm.css';
import './shapes.css';
import store from '../../redux/store';

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

const RegisterForm = () => {
  const history = useHistory();
  const { auth } = store.getState();
  useEffect(() => {
    if (auth.auth) return history.push('/');
  }, []);
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
    <Container className="vh-100 d-flex justify-content-center align-items-center">
      <Row className="border-radius-25 bg-container">
        <Col
          md="4"
          id="left"
          className="d-none d-sm-none d-md-block border-top-left-radius-25 border-bottom-left-radius-25"
        >
          <div className="h-100">
            <div className="d-flex justify-content-center align-items-center mt-3 mb-3">
              <div id="contentCircle" className="rounded-pill bg-secondary">
                <img
                  className="rounded-pill"
                  src="https://img.freepik.com/free-vector/happy-children-jumping-summer-meadow_74855-5852.jpg"
                  alt="register"
                />
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <div className="triangle me-2"></div>
              <div className="quadrate me-2"></div>
              <div className="circle"></div>
            </div>
          </div>
        </Col>
        <Col md="8">
          <h1 className="text-secondary text-center text-uppercase m-4">
            Formulario de registro
          </h1>
          <Form onSubmit={formik.handleSubmit} className="m-3">
            <Row>
              <Form.Group
                as={Col}
                md="6"
                controlId="name"
                className="mb-3 input-group-lg"
              >
                <Form.Label className="fw-bold fs-5">Nombre</Form.Label>
                <Form.Control
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                  className={
                    formik.errors.name
                      ? 'rounded-pill border-danger'
                      : 'rounded-pill border-success'
                  }
                  placeholder="Nombre"
                />
                {formik.errors.name ? (
                  <span className="text-danger">{formik.errors.name} </span>
                ) : null}
              </Form.Group>
              <Form.Group
                as={Col}
                md="6"
                controlId="lastName"
                className="mb-3 input-group-lg"
              >
                <Form.Label className="fw-bold fs-5">Apellidos</Form.Label>
                <Form.Control
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastName}
                  className={
                    formik.errors.lastName
                      ? 'rounded-pill border-danger'
                      : 'rounded-pill border-success'
                  }
                  placeholder="Apellidos"
                />
                {formik.errors.lastName ? (
                  <span className="text-danger">{formik.errors.lastName} </span>
                ) : null}
              </Form.Group>
            </Row>
            <Form.Group controlId="email" className="mb-3 input-group-lg">
              <Form.Label className="fw-bold fs-5">Email</Form.Label>
              <Form.Control
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className={
                  formik.errors.email
                    ? 'rounded-pill border-danger'
                    : 'rounded-pill border-success'
                }
                placeholder="Email"
              />
              {formik.errors.email ? (
                <span className="text-danger">{formik.errors.email} </span>
              ) : null}
            </Form.Group>
            <Row className="mb-4">
              <Form.Group as={Col} md="6" controlId="password">
                <Form.Label className="fw-bold fs-5">Password</Form.Label>
                <InputGroup className="input-group-lg">
                  <Form.Control
                    type={showPass ? 'text' : 'password'}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    className={
                      formik.errors.password
                        ? 'rounded-end rounded-pill border-danger'
                        : 'rounded-end rounded-pill border-success'
                    }
                    placeholder="Password"
                  />
                  <Button
                    variant="outline-secondary"
                    id="button-addon1"
                    className={
                      formik.errors.password
                        ? 'rounded-start rounded-pill border-danger'
                        : 'rounded-start rounded-pill border-success'
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
              <Form.Group as={Col} md="6" controlId="passwordConfirmation">
                <Form.Label className="fw-bold fs-5">
                  Confirmar password
                </Form.Label>
                <InputGroup className="input-group-lg">
                  <Form.Control
                    type={showConfirmPass ? 'text' : 'password'}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.passwordConfirmation}
                    className={
                      formik.errors.passwordConfirmation
                        ? 'rounded-end rounded-pill border-danger'
                        : 'rounded-end rounded-pill border-success'
                    }
                    placeholder="Confirmar password"
                  />
                  <Button
                    variant="outline-secondary"
                    id="button-addon2"
                    className={
                      formik.errors.passwordConfirmation
                        ? 'rounded-start rounded-pill border-danger'
                        : 'rounded-start rounded-pill border-success'
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
            </Row>
            <Button
              variant="primary"
              type="submit"
              className="btn-lg bg-gradient text-white me-5"
            >
              Regístrarme
            </Button>
            {'    '}
            <Link to="/login" className="fw-bold fs-5">
              ¿Ya estas registrado?, inicia sesión aquí
            </Link>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterForm;
