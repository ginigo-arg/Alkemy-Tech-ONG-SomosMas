import './Newsletter.css';
import { Formik, Form, Field } from 'formik';
import { useState } from 'react';
import swal from '@sweetalert/with-react';
import { Container } from 'react-bootstrap';

const Newsletter = () => {
  const [newsletter, setNewsletter] = useState(localStorage.getItem('newsletter') || false);

  const handleSubmit = async (e) => {
    localStorage.setItem('newsletter', e.email);
    setNewsletter(true);
    swal('Gracias!', 'Te suscribiste al Newsletter', 'success');
  };

  return (
    newsletter === false
      ? <>
        <Formik
          initialValues={{
            email: '',
          }}
          onSubmit={handleSubmit}
        >
          <Form className='d-flex flex-column align-items-center newsletter-form'>
            <p className='newsletter-message'>Suscríbete al Newsletter.</p>
            <Container fluid className='d-flex flex-row'>
              <Field
                id="email"
                name="email"
                placeholder="Ingresa tu Email"
                type="email"
                className='form-control newsletter-input'/>
              <button type='success' className='btn btn-success newsletter-button'>Enviar</button>
            </Container>
          </Form>
        </Formik > </>
      : <p className='newsletter-message'>Ya estás suscripto al Newsletter.</p>

  // <Form className="d-flex flex-column justify-content-center align-items-center" onSubmit={handleSubmit}>
  //   <Form.Text className="footer-socialmedia-text mb-2">
  //     Suscríbete a nuestro Newsletter!
  //   </Form.Text>
  //   <InputGroup className="mb-3">
  //     <FormControl
  //       placeholder="Ingresa tu Email"
  //       aria-label="Newsletter Email"
  //     />
  //     <Button variant="success" type="submit">
  //       Enviar
  //     </Button>
  //   </InputGroup>
  // </Form>
  );
};

export default Newsletter;
