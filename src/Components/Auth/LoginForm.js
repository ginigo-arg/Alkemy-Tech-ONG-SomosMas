import React, { useState, useEffect } from 'react';
// import { Redirect } from 'react-router-dom';
import { useFormik } from 'formik';
import { Button, Container, Col, Form, InputGroup, Row } from 'react-bootstrap';
// import { useHistory, useLocation } from 'react-router-dom';
import * as Yup from 'yup';
import { FaEye } from 'react-icons/fa';
import { AiFillEyeInvisible } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { LOGIN_USER_ACTION, LOGIN_AUTH_ME_ACTION } from '../../redux/auth/authActions';
import { alertService } from '../../Services/alertService';
import { CHECK_TOKEN, GET_TOKEN } from '../../Services/authService';

const LoginSchema = Yup.object({
  email: Yup.string()
    .email('La dirección de correo electrónico que ha indicado no es válida.')
    .required('Escribe la dirección de correo electrónico asociada a tu cuenta.'),
  password: Yup.string()
    .required('Escribe la contraseña de tu cuenta.')
    .matches(
      /^.*(?=.{6,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-zA-Z]){1}).*$/,
      // eslint-disable-next-line comma-dangle
      'La contraseña que ha indicado no cumple con los criterios de aceptación.'
    ),
});

// Contraseña incorrecta. Vuelve a intentarlo o selecciona "¿Has olvidado tu contraseña?" para cambiarla.

const LoginForm = ({ showLogin, setShowLogin }) => {
  // const history = useHistory();
  // const location = useLocation();
  // const from = location.state.from.pathname || { from: { pathname: '/' } };

  // const LogIn = () => {
  //   // cambiar luego por la respuesta de la api
  //   localStorage.setItem('TOKEN', 123456);
  //   history.replace(from);
  // };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      logIn(values);
      formik.resetForm();
    },
  });

  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const state = useSelector(state => state.auth);

  const logIn = async (content) => {
    const response = await dispatch(LOGIN_USER_ACTION(content)).catch(err => alertService('error', err));
    if (response) {
      alertService('success', 'Login exitoso', 1000, true);
      setLoading(true);
    }
  };

  const checkAuth = async (token) => {
    return await dispatch(LOGIN_AUTH_ME_ACTION(token)).catch(err => alertService('error', err));
  };

  useEffect(() => {
    // console.log('state login:', state);
    if (state.auth) {
      setLoading(true);
      console.log('Logueado');
    }
  }, [logIn, state]);

  useEffect(() => {
    if (CHECK_TOKEN()) {
      checkAuth(GET_TOKEN());
    } else {
      console.log('No logueado');
    }
  }, []);

  return (
    <Container>
      <Row>
        <Col >
          <Form onSubmit={formik.handleSubmit} className="m-3">
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
              {formik.errors.email
                ? (
                  <span className="text-danger">{formik.errors.email} </span>
                )
                : null}
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
                  {showPass
                    ? (
                      <AiFillEyeInvisible className="fs-3" />
                    )
                    : (
                      <FaEye className="fs-3" />
                    )}
                </Button>
              </InputGroup>
              {formik.errors.password
                ? (
                  <span className="text-danger">{formik.errors.password} </span>
                )
                : null}
            </Form.Group>
            <Col className='d-flex justify-content-between'>
              <button onClick={() => setShowLogin(!showLogin)} className='text-primary mr-2 bg-white border-0'><strong>
                No tengo cuenta
              </strong>
              </button>
              <Button
                variant="primary"
                type="submit"
                className="btn-lg bg-gradient text-white"
                disabled={loading}
              >
                Ingresar
              </Button>
            </Col>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;
