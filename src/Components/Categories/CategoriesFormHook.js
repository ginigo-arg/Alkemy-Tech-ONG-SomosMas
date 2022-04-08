import { Field, Formik } from 'formik';
import { Container, Button, Form } from 'react-bootstrap';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCategory } from '../../Services/CategoryServices';
import Spinner from '../Spinner/Spinner';
import { SchemaValidation } from './SchemaValidation';

const SlidesFormHook = () => {
  // const [description, setDescription] = useState('');
  const [category, setCategory] = useState(false);
  const { state: id } = useLocation();

  useEffect(async () => {
    console.log('ID_LOCATION:', id);
    if (id) {
      const { data } = await getCategory(id);
      console.log('data', data);
      setCategory(data);
    }
  }, [location]);

  return (
    <>
      { !category && id
        ? <Spinner/>
        : (
          <Formik
            initialValues={{
              name: category.name || '',
              description: category.description || '',
              id: category.id || '',
              img: category.image || null,
            }}

            validationSchema={SchemaValidation}

            onSubmit={(values, id) => {
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
            {({ values, errors, touched, setFieldValue, handleSubmit }) => (
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
                    <CKEditor
                      name="description"
                      editor={ ClassicEditor }
                      data={values.description}
                      config
                      onChange={(e, editor) => setFieldValue('description', editor.getData())}
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

          </Formik>)}

    </>

  );
};
export default SlidesFormHook;
