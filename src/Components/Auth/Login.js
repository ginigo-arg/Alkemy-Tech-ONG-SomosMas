import React, { useState, useEffect } from 'react';
import { LOGIN_AUTH_ME_ACTION } from '../../redux/auth/authActions';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Redirect } from 'react-router-dom';
import { alertService } from '../../Services/alertService';
import { Container, Row, Col } from 'react-bootstrap';
import LoginForm from './LoginForm';
import img1 from '../../assets/img/login3.jpg';
import Logo from '../../assets/img/LOGO-SOMOSMAS.png';
import RegisterForm from './RegisterForm';
import './login.css';
import { CHECK_TOKEN, GET_TOKEN } from '../../Services/authService';

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector(state => state.auth);
  const [showLogin, setShowLogin] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  // const Logout = async (token) => {
  //   return await dispatch(LOGOUT_USER_ACTION());
  // };

  const VerificationToken = async (token) => {
    return await dispatch(LOGIN_AUTH_ME_ACTION(token)).catch(err => alertService('error', err));
  };

  useEffect(() => {
    if (CHECK_TOKEN()) {
      console.log('check token');
      VerificationToken(GET_TOKEN());
      // if (!state.auth) {
      //   Logout();
      // }
    } else {
      console.log('No existe TOKEN');
    }
  }, []);

  useEffect(() => {
    if (state.user && state.token && state.auth) {
      console.log('se encontro un token valido');
      setLoggedIn(true);
    }
  }, [loggedIn, state]);

  if (loggedIn) {
    return <Redirect to="/" />;
  } else {
    return (
      <Container fluid>
        <Row>
          <Col lg={5} className="vh-100 py-2 px-1 px-md-5 overflow-scroll column-form">
            <img src={Logo} alt='somos-mas-login mb-2' width='150px'/>
            <h1 className='text-center mt-3 px-5'><strong>¡Bienvenido a Somos Más!</strong></h1>
            <p className='text-center'>Ingresa a nuestra plataforma 👨🏿‍🤝‍👨🏻</p>
            {
              showLogin
                ? <LoginForm showLogin={showLogin} setShowLogin={setShowLogin}/>
                : <RegisterForm showLogin={showLogin} setShowLogin={setShowLogin}/>
            }
            <hr />
            <Row>
              <Col className='text-center'>
                <button onClick={() => history.push('/')} className='text-secondary mr-2 bg-white border-0'>
                  Ir al inicio

                </button>
              </Col>
            </Row>
          </Col>
          <Col lg={7} className="vh-100 bg-warning px-0 overflow-hidden d-none d-md-block">
            <img src={img1} alt='loginpage' width='100%'/>
          </Col>
        </Row>

      </Container>
    );
  }
};
export default Login;
