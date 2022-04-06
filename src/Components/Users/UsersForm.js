import { Formik, Form, Field } from 'formik';
import React, { useState } from 'react';
import { Container, Button, InputGroup } from 'react-bootstrap';
import '../FormStyles.css';

const UsersForm = () => {
  const [initialValues, setInitialValues] = useState({
    name: '',
    email: '',
    role: '',
  });

  // const handleChange = (e) => {
  //   if (e.target.name === 'name') {
  //     setInitialValues({ ...initialValues, name: e.target.value });
  //   } if (e.target.name === 'email') {
  //     setInitialValues({ ...initialValues, email: e.target.value });
  //   }
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(initialValues);gitg
  // };

  const validateEmail = (value) => {
    let error;
    if (!value) {
      error = 'Requerido';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Correo electrónico inválido';
    }
    return error;
  };

  const validateName = (value) => {
    let error;
    if (!value) {
      error = 'Requerido';
    }
    return error;
  };

  const validateRole = (value) => {
    let error;
    if (value === 'Select') {
      error = 'Requerido';
    }
    return error;
  };

  return (
    <Container>
      <Formik
        initialValues={
          initialValues
        }
        onSubmit={values => {
          // same shape as initial values
          console.log(values);
        }}
      >
        {({ errors, touched, isValidating }) => (
          <Form>
            <InputGroup>
              <Field name="name" validate={validateName} />
              {errors.name && touched.name && <div>{errors.name}</div>}

              <Field name="email" validate={validateEmail} />
              {errors.email && touched.email && <div>{errors.email}</div>}

              <
              {/* {errors.role} */}

              <Button variant='success'>Submit</Button>
            </InputGroup>
          </Form>
        )}
      </Formik>
    </Container>
    // <form className="form-container" onSubmit={handleSubmit}>
    //   <input className="input-field" type="text" name="name" value={initialValues.name || ''} onChange={handleChange} placeholder="Name"></input>
    //   <input className="input-field" type="text" name="email" value={initialValues.description || ''} onChange={handleChange} placeholder="Email"></input>
    //   <select className="input-field" value={initialValues.roleId || ''} onChange={e => setInitialValues({ ...initialValues, roleId: e.target.value })}>
    //     <option value="" disabled >Select the role</option>
    //     <option value="1">Admin</option>
    //     <option value="2">User</option>
    //   </select>
    //   <button className="submit-btn" type="submit">Send</button>
    // </form>
  );
};

export default UsersForm;
