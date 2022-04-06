import { Formik } from 'formik';
import { Form, Container, Button } from 'react-bootstrap';

const LoginForm = () => {
  return <Container className='card p-0'>
    <h4 className='card-header mb-4 p-4 p-sm-3'>Anywhere in your app!</h4>
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        const { password } = values;

        const passValid = password.search(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/g);

        if (!values.email) {
          errors.email = 'Ingresar un correo';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Escribe un email válido.';
        } else if (!values.password || passValid === -1) {
          errors.password = 'Ingresar una contraseña válida.';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <Form className='rounded p-4 p-sm-3' noValidate onSubmit={handleSubmit}>
          <Form.Group controlId="validationFormik01" className='mb-4'>
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              placeholder='Escribe tu email'
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              isInvalid={!!errors.email}
              isValid={values.email && !errors.email}
            />
            <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="validationFormik01" className='mb-4'>
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              placeholder='Escribe tu contraseña'
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              isInvalid={!!errors.password}
              isValid={values.password && !errors.password}
            />
            <Form.Control.Feedback type="invalid">{errors.password || touched.password}</Form.Control.Feedback>
          </Form.Group>
          <Button variant="primary" type="submit" disabled={isSubmitting}>
            Ingresar
          </Button>
        </Form>
      )}
    </Formik>
  </Container>;
};

export default LoginForm;
