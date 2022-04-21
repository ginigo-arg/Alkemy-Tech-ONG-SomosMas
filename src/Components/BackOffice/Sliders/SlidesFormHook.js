import { useEffect, useState } from 'react';
import { Container, Button, Form } from 'react-bootstrap';
import { Formik } from 'formik';
import { SchemaValidation } from './SchemaValidation';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useLocation, useHistory } from 'react-router-dom';
import { getSlides } from '../../../Services/SlideServices';
import Spinner from '../../Spinner/Spinner';
import { GET_SLIDE_BACKOFFICE_FN, CREATE_SLIDE_FN } from '../../../redux/slides/actions';
import { useDispatch, useSelector } from 'react-redux';
import { convertToBase64 } from '../../../Services/base64Helper';

const SlidesFormHook = () => {
  const history = useHistory();
  const [slide, setSlide] = useState(false);
  const { state: id } = useLocation();
  const dispatch = useDispatch();
  const loading = useSelector(state => state.global.loading);

  useEffect(async () => {
    console.log('ID_LOCATION:', id);
    if (id) {
      const { data } = await getSlides(id);
      console.log('resp:', data);
      setSlide(data);
      dispatch(GET_SLIDE_BACKOFFICE_FN(id));
    }
  }, [location]);

  return (
    <>
      {!slide && id
        ? <Spinner/>
        : (
          <Container>
            <Formik
              initialValues={{
                name: slide.name || '',
                description: slide.description || '',
                image: slide.image || '',
              }}

              onSubmit={async (values, { setSubmitting }) => {
                setSubmitting(false);

                const base64 = await convertToBase64(values.image);
                values.image = base64;
                console.log(values);
                if (!id) {
                  dispatch(CREATE_SLIDE_FN(values));
                  if (!loading) history.push('/backoffice/members');
                } else {
                  console.log('edit');
                  if (!loading) history.push('/backoffice/slides');
                }
              }}
              validationSchema={SchemaValidation}
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
                    <Form.Label>Nombre Slide</Form.Label>
                    <Form.Control
                      name="name"
                      type="text"
                      placeholder='Escribe el nombre del miembro'
                      value={values.name}
                      onChange={handleChange}
                      isInvalid={!!errors.name}
                    />
                    <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
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

                  <Button type="submit" variant="primary" disabled={isSubmitting} onClick={() => console.log('hola')}>
                    {!location.state ? 'Agregar miembro' : 'Guardar cambios'}
                  </Button>

                </Form>
              )}

            </Formik>
          </Container>
        )}
    </>
  );
};
export default SlidesFormHook;
