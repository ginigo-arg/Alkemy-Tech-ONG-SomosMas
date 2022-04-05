import { Field, Formik, Form } from 'formik';
import { Container, Button } from 'react-bootstrap';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const SlidesFormHook = () => {
  const [description, setDescription] = useState('');
  const location = useLocation();

  useEffect(() => {
    console.log('location:', location.state.detail);
  }, [location]);

  return (
    <Formik
      initialValues={{
        name: '',
        description: '',
        order: '',
      }}

      validate={(valores) => {
        const errores = {};

        if (valores.name.length < 4) {
          errores.name = 'El nombre debe contener al menos 4 caracteres';
        } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.name)) {
          errores.name = 'El nombre solo puede contener letras y espacios';
        }

        return errores;
      }}

      onSubmit={(e, { resetForm }) => {
        // const data = { name: valores.name, description: valores.description, order: valores.order };
        console.log('onSubmit:');
        resetForm();
      }}
    >
      {({ values, errors, touched }) => (
        <Container className='mt-3'>
          <Form>
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
            <div className="mb-3">
              <Field
                type="text"
                name="order"
                placeholder="Num. Orden"
                className="form-control"
                value={values.order}
              />
            </div>
            <div className="mb-3">
              <Field
                type="file"
                accept="image/*"
                name="image"
                className="form-control"
              />
            </div>

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
