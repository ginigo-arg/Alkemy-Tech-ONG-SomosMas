import React, { useState } from 'react';
import { Button, Container, Row, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Donation = () => {
  const [donar, setDonar] = useState();
  const history = useHistory();
  const enviarDonacion = (values) => {
    const url = "https://api.mercadopago.com/checkout/preferences";
    const headers = {
      Authorization:
      "Bearer TEST-8149181226790048-042405-a8dfd0fb25319924f0b34bb2b4c0a23b-1111955504",
      "Content-Type": "application/json",
    };
    // axios.post('https://api.mercadopago.com/users/test_user?access_token=12123adfasdf123u4u')
    const data = {
      items: [
        {
          id: "ong",
          category_id: "donacion/alkemy",
          currency_id: "ARS",
          description: "Donacion ONG Alkemy",
          quantity: 1,
          unit_price: Number(values),
          title: "Donacion ONG Alkemy",
        },
      ],
      back_urls: {
        success: "https://alkemy-tech-ong-somos-mas.vercel.app/gracias",
      },
      payment_methods: {
        excluded_payment_methods: [
          {
            id: "atm",
          },
        ],
        excluded_payment_types: [
          {
            id: "ticket",
          },
        ],
      },
    };
    axios
      .post(url, data, { headers })
      .then((response) => {
        window.location.href = response.data.sandbox_init_point;
      })
      .catch((err) => console.log(err));
  };
  return (
    <Container className='d-flex flex-column justify-content-center align-items-center'>
      <Row className='mt-5'>
        <h1>Ingrese su aporte</h1>
      </Row>
      <Row className='w-50'>
        <Form.Group className='my-2' >
          <Form.Control type="number" placeholder="Ingrese la cantidad a donar" onChange={e => setDonar(e.target.value) } />
        </Form.Group>
      </Row>
      <Row className='w-50 px-3'>
        <Button className='my-2 text-white' variant='primary' onClick={() => enviarDonacion(donar)}>Donar</Button>
        <Button className='my-2 text-white' variant='info' onClick={() => history.push('/')}>Volver al inicio</Button>
      </Row>
    </Container>
  );
};

export default Donation;
