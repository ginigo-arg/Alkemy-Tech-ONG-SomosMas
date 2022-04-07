import { Field, Formik } from 'formik';
import { Container, Button, Form } from 'react-bootstrap';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as yup from 'yup';
import { getCategory } from '../../Services/CategoryServices';

const checkFileFormat = img => {
  if (img) {
    if (!['image/jpg', 'image/jpeg', 'image/png'].includes(img.type)) {
      return false;
    }
  }
  return true;
};

const validateSchema = yup.object().shape({
  name: yup.string().required('el nombre el obligatorio').min(4, 'El nombre debe tener un minimo de 4 caracteres'),
  description: yup.string().required('La descripcion es obligatoria').min(20, 'la decripcion debe tener un min de 20 caracteres'),
  img: yup.mixed().required('La imagen es obligatoria').test(
    'fileFormat',
    'Formato de imagen no válido',
    checkFileFormat,
  ),
});

const SlidesFormHook = (id) => {
  const [description, setDescription] = useState('');
  // const [categories, setCategories] = useState([]);
  // const location = useLocation();

  useEffect(() => {
    const categories = getCategory();
    console.log('categories:', categories);
  }, [location]);
  return (
    <Formik
      initialValues={{
        name: '',
        description: '',
        order: '',
        img: null,
      }}

      validationSchema={validateSchema}

      onSubmit={(values, id, { setSubmitting }) => {
        if (location) {
          // peticion PATH

        } else {

          // peticion POST
        }
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ values, errors, touched, setFieldValue, handleSubmit, handleChange }) => (
        <Container className='mt-3'>
          <Form noValidate onSubmit={handleSubmit}>
            <div className="mb-3">
              <Field
                type="text"
                name="name"
                placeholder="Name"
                className="form-control"
                value={values.name}
              />
            </div>
            {touched.name && errors.name && (
              <div className="alert alert-danger" role="alert">
                {errors.name}
              </div>)}
            <div className="mb-3">
              <CKEditor
                name="description"
                editor={ ClassicEditor }
                data={description}
                config
                onReady={ editor => {
                  // You can store the "editor" and use when it is needed.
                  console.log('Editor is ready to use!', editor);
                } }
                onChange={ (event, editor) => {
                  const data = editor.getData();
                  console.log('data:', data);
                  setDescription(data);
                } }
                onBlur={ (event, editor) => {
                  console.log('Blur.', editor);
                } }
                onFocus={ (event, editor) => {
                  console.log('Focus.', editor);
                } }
              />
            </div>
            {touched.description && errors.description && (
              <div className="alert alert-danger" role="alert">
                {errors.description}
              </div>)}
            <div className="mb-3">
              <Form.Group>
                <Form.Control
                  type="file"
                  name="img"
                  accept="image/jpg, image/png, image/jpge"
                  className="form-control"
                  onChange={e => {
                    setFieldValue('img', e.currentTarget.files[0]);
                  }}
                />
              </Form.Group>
            </div>
            {touched.img && errors.img && (
              <div className="alert alert-danger" role="alert">
                {errors.img}
              </div>)}

            <div className='mt-3'>
              <Button
                type='submit'
                variant="primary"
                className="w-100"
              >Enviar
              </Button>
            </div>

          </Form>
        </Container>
      )}

    </Formik>
  );
};
export default SlidesFormHook;
