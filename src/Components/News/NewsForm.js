import './NewsForm.css';
import { useEffect } from 'react';
import { Alert, Form, Button, Container } from 'react-bootstrap';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useLocation } from 'react-router-dom';
import { CREATE_NOVEDAD_FN, EDIT_NOVEDAD_FN, GET_ONE_NOVEDAD_FN } from '../../redux/novedades/actions';
import { convertToBase64 } from '../../Services/base64Helper';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../Spinner/Spinner';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(4, 'El nombre debe tener un mínimo de 4 caracteres')
    .required('El nombre es obligatorio'),
  content: Yup.string().required('La descripción es obligatoria'),
  image: Yup.mixed()
    .required('La imagen es obligatoria'),
});

const NewsForm = () => {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const stateLoading = useSelector(state => state.global.loading);
  const { novedadSelected } = useSelector(state => state.novedades);

  useEffect(async () => {
    if (location.state) {
      dispatch(GET_ONE_NOVEDAD_FN(location.state.id));
    }

    return dispatch(GET_ONE_NOVEDAD_FN());
  }, []);

  useEffect(() => {}, [novedadSelected]);

  return (
    <>
      {stateLoading && location.state
        ? <Spinner />
        : (
          <Container>
            <h2>Form News</h2>
            <Formik
              initialValues={{
                name: novedadSelected?.name || '',
                content: novedadSelected?.content || '',
                image: novedadSelected?.image || '',
              }}
              onSubmit={async (values, { setSubmitting }) => {
                setSubmitting(false);

                const base64 = await convertToBase64(values.image);
                values.image = base64;

                if (!location.state) {
                  dispatch(CREATE_NOVEDAD_FN(values));
                  if (!stateLoading) history.push('/backoffice/news');
                } else {
                  dispatch(EDIT_NOVEDAD_FN(location.state.id, values));
                  if (!stateLoading) history.push('/backoffice/news');
                }
              }}
              validationSchema={validationSchema}
              validateOnChange={false}
              validateOnBlur={false}
            >
              {({
                errors,
                isSubmitting,
                setFieldValue,
                handleChange,
                handleBlur,
                handleSubmit,
                values,
              }) => (
                <Form className='rounded p-4 p-sm-3' noValidate onSubmit={handleSubmit}>
                  <Form.Control
                    id="name"
                    name="name"
                    label="name"
                    placeholder="Nombre"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.name && (
                    <Alert variant="danger" className="p-1 m-0">
                      <p className="my-0 mx-2 fw-bolder">{errors.name}</p>
                    </Alert>
                  )}
                  <CKEditor
                    editor={ClassicEditor}
                    data={values.content}
                    config={{ placeholder: 'Descripción' }}
                    onChange={(e, editor) =>
                      setFieldValue('content', editor.getData())
                    }
                  />
                  {errors.content && (
                    <Alert variant="danger" className="p-1 m-0">
                      <p className="my-0 mx-2 fw-bolder">{errors.content}</p>
                    </Alert>
                  )}
                  <Form.Label>Categorias</Form.Label>

                  <Form.Control
                    type="file"
                    accept="image/*"
                    id="image"
                    name="image"
                    onChange={(e) =>
                      setFieldValue('image', e.currentTarget.files[0])
                    }
                    onBlur={handleBlur}
                  />
                  {errors.image && (
                    <Alert variant="danger" className="p-1 m-0">
                      <p className="my-0 mx-2 fw-bolder">{errors.image}</p>
                    </Alert>
                  )}

                  <Button type="submit" variant="primary" disabled={isSubmitting}>
                    {!location.state ? 'Agregar novedad' : 'Guardar cambios'}
                  </Button>

                </Form>
              )}
            </Formik>
          </Container>
        )
      }
    </>
  );
};

export default NewsForm;
