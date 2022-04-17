import { Container, Row, Col } from 'react-bootstrap';
import LoginForm from './LoginForm';
import img1 from '../../assets/img/login3.jpg';
import Logo from '../../assets/img/LOGO-SOMOSMAS.png';
import { useEffect, useState } from 'react';
import RegisterForm from './RegisterForm';

const Login = () => {
  const [isLogin, setisLogin] = useState(false);
  useEffect(() => {
    console.log('islogin:', isLogin);
  }, [setisLogin]);
  return (
    <Container fluid>
      <Row>
        <Col lg={5}className="vh-100 p-5">
          <img src={Logo} alt='somos-mas-login mb-5' width='150px'/>
          <h1 className='text-center mt-5'><strong>¡Bienvenido a Somos Más!</strong></h1>
          <p className='text-center'>Ingresa a nuestra plataforma</p>
          {
            isLogin
              ? <LoginForm/>
              : <RegisterForm/>
          }
          <Col>
            <button onClick={() => setisLogin(!isLogin)}>Ya tengo cuenta</button>
          </Col>
        </Col>
        <Col lg={7}className="vh-100 bg-warning px-0 overflow-hidden">
          <img src={img1} alt='loginpage' width='100%'/>
        </Col>
      </Row>
    </Container>
  );
};
export default Login;
