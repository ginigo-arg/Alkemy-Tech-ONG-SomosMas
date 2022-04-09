import { useEffect } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import { ProyectsSchemaValidation } from './Validation/ProyectSchema';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { POST_PRIVATE_API, Put } from '../../../Services/privateApiService';

const initialValues = {
  title: '',
  description: '',
  image: null,
  due_date: new Date().toISOString().slice(0, 19).replace('T', ' '),

};

const ProjectsForm = () => {
  const location = useLocation();
  let edit = false;
  let Guardar = 'Crear Proyecto Nuevo , Escriba el Nombre';

  useEffect(() => {
    if (location.state) {
      edit = true;
      Guardar = ' Editar ' + location.state.title;
    }
  }, []);

  return (
    <Container>
      <h2>Form Projects</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) => {
          if (!edit) {
            POST_PRIVATE_API('http://ongapi.alkemy.org/api/projects', JSON.stringify(values));
          } else {
            Put('http://ongapi.alkemy.org/api/projects', JSON.stringify(values));
          }
          setTimeout(() => {
            setSubmitting(false);
          }, 400);
        }}
        validationSchema={ProyectsSchemaValidation}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {({
          values,
          errors,
          handleChange,
          handleSubmit,
          isSubmitting,
          setFieldValue,
        }) => (
          <Form className='rounded p-4 p-sm-3' noValidate onSubmit={handleSubmit}>

            <Form.Group className='mb-4'>
              <Form.Label>Nombre:</Form.Label>
              <Form.Control
                type="text"
                placeholder={Guardar}
                name="title"
                value={values.title}
                onChange={handleChange}
                isInvalid={!!errors.name}
              />
              <Form.Control.Feedback type="invalid">{errors.title}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className='mb-4'>
              <Form.Label>Descripción:</Form.Label>
              <CKEditor
                editor={ ClassicEditor }
                name="description"
                data={values.description}
                onChange={(e, editor) => setFieldValue('description', editor.getData())}
              />
              {errors.description &&
              <small className="text-primary">
                {errors.description}
              </small>
              }
            </Form.Group>

            <Form.Group className='mb-4'>
              <Form.Label>Foto:</Form.Label>
              <Form.Control
                name="image"
                type="file"
                onChange={e => setFieldValue('image', e.currentTarget.files[0])}
                isInvalid={!!errors.image}
              />
              <Form.Control.Feedback type="invalid">{errors.image}</Form.Control.Feedback>
            </Form.Group>

            <Button type="submit" variant="primary" disabled={isSubmitting}>
              Guardar
            </Button>

          </Form>
        )}
      </Formik>
    </Container>
  );
};
export default ProjectsForm;
