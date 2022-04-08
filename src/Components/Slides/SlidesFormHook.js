import { Field, Formik } from 'formik';
import { Container, Button, Form } from 'react-bootstrap';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getSlides } from '../../Services/SlideServices';
import { SchemaValidation } from './SchemaValidation';
import Spinner from '../Spinner/Spinner';

const SlidesFormHook = () => {
  const [slide, setSlide] = useState(false);
  const { state: id } = useLocation();

  useEffect(async () => {
    console.log('ID_LOCATION:', id);
    if (id) {
      const { data } = await getSlides(id);
      console.log('resp:', data);
      setSlide(data);
    }
  }, [location]);

  return (
    <>
      {!slide && id
        ? <Spinner/>
        : (
          <Formik
            initialValues={{

              name: slide.name || '',
              description: slide.description || '',
              id: slide.id || '',
              img: null,
            }}

            validationSchema={SchemaValidation}

            onSubmit={(values) => {
              if (id) {
                console.log('peticion path');
                // pathCategory(id, values);
              } else {
                console.log('peticion post');
                // postCategory(values);
              }
              setTimeout(() => {
                console.log('values', values);
                alert(JSON.stringify(values, null, 2));
              }, 400);
            }}
          >
            {({ values, errors, touched, setFieldValue, handleSubmit, handleChange }) => (
              <Container className='mt-3'>
                <Form onSubmit={handleSubmit}>
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
                      data={values.description}
                      onChange={(e, editor) => setFieldValue('description', editor.getData())}
                      onBlur={ (event, editor) => {
                        console.log('Blur.', editor);
                      } }
                    />
                  </div>
                  {touched.description && errors.description && (
                    <div className="alert alert-danger" role="alert">
                      {errors.description}
                    </div>)}
                  <div className="mb-3">
                    <Field
                      type="text"
                      name="id"
                      placeholder="ID"
                      className="form-control"
                      value={values.id}
                    />
                  </div>
                  {touched.id && errors.id && (
                    <div className="alert alert-danger" role="alert">
                      {errors.id}
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

          </Formik>)}

    </>
  );
};
export default SlidesFormHook;
