/* eslint-disable react/jsx-indent-props */
import './Newsletter.css';
import { Formik, Form, Field } from 'formik';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { alertService } from '../../Services/alertService';
import store from '../../redux/store';

const Newsletter = () => {
  const { auth } = store.getState();
  const [newsletter, setNewsletter] = useState(false);

  const handleSubmit = async (e) => {
    if (newsletter === false) {
      localStorage.setItem('newsletter', e.email);
      setNewsletter(true);
      alertService('success', 'Gracias por suscribirte a nuestro Newsletter');
    } else if (newsletter === true) {
      alertService('error', 'Ya te encuentras registrado a nuestro Newsletter');
    }
  };

  return (
    auth.auth
      ? <Formik
        initialValues={{
          newsletterEmail: '',
        }}
        onSubmit={handleSubmit}
      >
        <Form className='d-flex flex-column align-items-center newsletter-form mt-3'>
          <p className='newsletter-message'>Suscríbete al Newsletter.</p>
          <Container fluid className='d-flex flex-row'>
            <Field
              id="newsletterEmail"
              name="newsletterEmail"
              placeholder="Ingresa tu Email"
              type="email"
              className='form-control newsletter-input'/>
            <button type='success' className='btn btn-success newsletter-button'>Enviar</button>
          </Container>
        </Form>
      </Formik >
      : <p className='newsletter-message mt-5'>Debes estar registrado para suscribirte al Newsletter.</p>
  );
};

export default Newsletter;
