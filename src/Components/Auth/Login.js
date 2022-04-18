import { Container, Row, Col } from 'react-bootstrap';
import LoginForm from './LoginForm';
import img1 from '../../assets/img/login3.jpg';
import Logo from '../../assets/img/LOGO-SOMOSMAS.png';
import { useState } from 'react';
import RegisterForm from './RegisterForm';
import './login.css';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const history = useHistory();
  const [isLogin, setisLogin] = useState(false);
  //   useEffect(() => {
  //     console.log('islogin:', isLogin);
  //   }, [setisLogin]);
  return (
    <Container fluid>
      <Row>
        <Col lg={5} className="vh-100 py-2 px-1 px-md-5 overflow-scroll column-form">
          <img src={Logo} alt='somos-mas-login mb-2' width='150px'/>
          <h1 className='text-center mt-3 px-5'><strong>¡Bienvenido a Somos Más!</strong></h1>
          <p className='text-center'>Ingresa a nuestra plataforma 👨🏿‍🤝‍👨🏻</p>
          {
            isLogin
              ? <LoginForm isLogin={isLogin} setisLogin={setisLogin}/>
              : <RegisterForm isLogin={isLogin} setisLogin={setisLogin}/>
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
};
export default Login;
