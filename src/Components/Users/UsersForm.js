import { Formik, Field, Form } from 'formik';
import { SchemaValidation } from './UserSchema';
import { Container, InputGroup, Button, Col, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { GetUsersById, PatchUsers, PostUsers, PutUsers } from '../../Services/usersService';
import ProgressSpinner from '../Progress/ProgressSpinner';
import './UsersForm.css';

const UsersForm = () => {
  const [user, setUser] = useState(false);
  const { id } = useParams();
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (id) {
      // const { data } = GetUsersById(id);
      // console.log('Resp:', data);
      // setUser(data);
      console.log('LOCATION:', id)
    }
  }, [user, submitting]);

  return (
    <Container>
      {!user && id
        ? <Spinner />
        : (
          <Formik
            initialValues={{
              fullname: '' || user.fullname,
              email: '' || user.email,
              password: '' || user.password,
              role_id: '' || user.role_id,
              profile_image: null || user.profile_image,
            }}
            validationSchema={SchemaValidation}
            onSubmit={async (values) => {
              setSubmitting(true);
              try {
                if (id) {
                  // console.log('PATCH:', values);
                  // PatchUsers(id, values);
                  console.log('PUT:', values);
                  // PutUsers(id, values);
                } else {
                  console.log('POST:', values);
                  // PostUsers(values);
                }
              } finally { setSubmitting(false); }
            }}
          >
            {({ errors, touched }) => (
              <Form className=''>
                <InputGroup size='lg' className='d-flex flex-column align-items-center'>
                  <Col xs={6} className='m-2 d-flex flex-column align-items-center'>
                    <Field name="fullname" className='w-100 form-control usersform-input usersform-text' placeholder='Nombre completo'/>
                    {touched.fullname && errors.fullname && <div className='usersform-text'>{errors.fullname}</div>}
                  </Col>

                  <Col xs={6} className='m-2 d-flex flex-column align-items-center'>
                    <Field name="email" className='w-100 form-control usersform-input usersform-text' placeholder='Email'/>
                    {touched.email && errors.email && <div className='usersform-text'>{errors.email}</div>}
                  </Col>

                  <Col xs={6} className='m-2 d-flex flex-column align-items-center'>
                    <Field name="password" type='password' className='w-100 form-control usersform-input usersform-text' placeholder='Contraseña' />
                    {touched.password && errors.password && <div className='usersform-text'>{errors.password}</div>}
                  </Col>

                  <Col xs={6} className='m-2 d-flex flex-row justify-content-between'>
                    <Col xs={5} className='d-flex flex-column align-items-center'>
                      <Field name="role_id" as='select' className='form-control usersform-input usersform-text'>
                        <option value=''>Seleccione un rol..</option>
                        <option value={0}>Administrador</option>
                        <option value={1}>Regular</option>
                      </Field>
                      {touched.role_id && errors.role_id && <div className='usersform-text'>{errors.role_id}</div>}
                    </Col>
                    <Col xs={7} className='d-flex flex-column align-items-center'>
                      <Field name="profile_image" type='file' className='form-control usersform-input usersform-text' />
                      {touched.profile_image && errors.profile_image && <div className='usersform-text'>{errors.profile_image}</div>}
                    </Col>
                  </Col>

                  <Col xs={12} className='m-2 d-flex justify-content-center'>
                    {submitting
                      ? <Button type='submit' variant='success' disabled className='usersform-submit usersform-text d-flex flex-row justify-content-center'><ProgressSpinner /></Button>
                      : <>{id
                        ? <Button type='submit' variant='primary' className='usersform-submit usersform-text'>Editar</Button>
                        : <Button type='submit' variant='success' className='usersform-submit usersform-text'>Enviar</Button>} </>}
                  </Col>
                </InputGroup>
              </Form>
            )}
          </Formik>)}
    </Container>
  );
};

export default UsersForm;
