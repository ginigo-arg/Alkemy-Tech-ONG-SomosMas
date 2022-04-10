import { Formik, Field, Form } from 'formik';
import { SchemaValidation } from './UserSchema';
import { Container, InputGroup, Button, Col, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { GetUsersById, PostUsers, PutUsers } from '../../Services/usersService';
import ProgressSpinner from '../Progress/ProgressSpinner';
import './UsersForm.css';
import { convertToBase64 } from '../../Services/base64Helper';

const UsersForm = () => {
  const [user, setUser] = useState(null);
  const { id } = useParams();
  const [submitting, setSubmitting] = useState(false);

  useEffect(async () => {
    if (id) {
      const { data } = await GetUsersById(id);
      setUser(data.data);
    }
  }, [id]);

  return (
    <Container>
      {!user && id
        ? <Spinner />
        : (
          <Formik
            initialValues={
              user
                ? {
                  name: user.name,
                  email: user.email,
                  password: user.password,
                  role_id: user.role_id,
                  profile_image: user.profile_image,
                }
                : {
                  name: '',
                  email: '',
                  password: '',
                  role_id: '',
                  profile_image: '',
                }}
            validateOnBlur={false}
            validateOnChange={false}
            validationSchema={SchemaValidation}
            onSubmit={async (values) => {
              setSubmitting(true);
              try {
                const toBase64 = await convertToBase64(values.profile_image);
                values.profile_image = toBase64;
              } finally {
                id
                  ? PutUsers(id, values)
                  : PostUsers(values);
                setSubmitting(false);
              }
            }}
          >
            {({ errors, touched, setFieldValue }) => (
              <Form>
                <InputGroup size='lg' className='d-flex flex-column align-items-center'>
                  <Col xs={6} className='m-2 d-flex flex-column align-items-center'>
                    <Field name="name" className='w-100 form-control usersform-input usersform-text' placeholder='Nombre completo'/>
                    {touched.name && errors.name && <div className='usersform-text'>{errors.name}</div>}
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

                    <Col xs={4} className='d-flex flex-column align-items-center'>
                      <Field name="role_id" as='select' className='form-control usersform-input usersform-text'>
                        <option value=''>Seleccione un rol..</option>
                        <option value={0}>Administrador</option>
                        <option value={1}>Regular</option>
                      </Field>
                      {touched.role_id && errors.role_id && <div className='usersform-text'>{errors.role_id}</div>}
                    </Col>

                    <Col xs={7} className='d-flex flex-column align-items-center'>
                      <input type='file' name='profile_image' className='form-control' onChange={e => setFieldValue('profile_image', e.target.files[0])}></input>
                      {touched.profile_image && errors.profile_image && <div className='usersform-text'>{errors.profile_image}</div>}
                    </Col>
                  </Col>

                  <Col xs={12} className='m-2 d-flex justify-content-center'>
                    {submitting
                      ? <Button type='submit' variant='success' disabled className='usersform-submit usersform-text d-flex flex-row justify-content-center'><ProgressSpinner /></Button>
                      : <>{id
                        ? <Button type='submit' variant='info' className='usersform-submit usersform-text'>Editar</Button>
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
