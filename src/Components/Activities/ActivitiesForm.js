import { useEffect } from 'react';
import { Alert, Form, Button, Container, Stack } from 'react-bootstrap';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '../FormStyles.css';
import { Formik } from 'formik';
import './ActivitiesForm.css';
import { Oval } from 'react-loader-spinner';
import FormImage from '../../assets/img/logo-somos-mas.png';
import { useHistory, useLocation } from 'react-router-dom';
import { validationSchema, convertToBase64 } from './ActivitiesUtils';
import Spinner from '../Spinner/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import { GET_ACTIVIDAD_FUNCTION, CREATE_ACTIVIDAD_FUNCTION, EDIT_ACTIVIDAD_FUNCTION } from '../../redux/actividades/actions';

const ActivitiesForm = () => {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const stateLoading = useSelector(state => state.global.loading);
  const { actividades } = useSelector(state => state.actividades);

  useEffect(async () => {
    if (location.state) {
      dispatch(GET_ACTIVIDAD_FUNCTION(location.state.id));
    }
  }, []);

  return (
    <>
      {stateLoading && location.state
        ? <Spinner />
        : <div>
          <Formik
            initialValues={{
              name: actividades.name || '',
              description: actividades.description || '',
              image: actividades.image || '',
            }}
            onSubmit={async (values, { setSubmitting }) => {
              setSubmitting(false);
              const base64 = await convertToBase64(values.image);
              values.image = base64;

              if (!location.state) {
                dispatch(CREATE_ACTIVIDAD_FUNCTION(values));
                if (!stateLoading) history.push('/backoffice/activities');
              } else {
                dispatch(EDIT_ACTIVIDAD_FUNCTION(location.state.id, values));
                if (!stateLoading) history.push('/backoffice/activities');
              }
            }}
            validateOnBlur={false}
            validateOnChange={false}
            validationSchema={validationSchema}
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
              <div className="container-all">
                <div className="shadow">
                  <div className="container-logo pt-2 ">
                    <img src={FormImage} alt="logo" className="mx-auto d-block" />
                  </div>
                  <Container className="container-fluid rounded-2 d-flex flex-column gap-2 container-form ">
                    <form onSubmit={handleSubmit} className="my-4 formulario">
                      <Stack className="align-items-center text-center">
                        <h4 style={{ color: 'var(--bs-danger)' }}>
                          {`Formulario para ${location.state ? 'editar' : 'crear'} actividades`}
                        </h4>
                      </Stack>
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
                        data={values.description}
                        config={{ placeholder: 'Descripción' }}
                        onChange={(e, editor) =>
                          setFieldValue('description', editor.getData())
                        }
                      />
                      {errors.description && (
                        <Alert variant="danger" className="p-1 m-0">
                          <p className="my-0 mx-2 fw-bolder">{errors.description}</p>
                        </Alert>
                      )}
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
                      <Stack className="align-items-end">
                        <Button
                          type="submit"
                          variant="info"
                          disabled={isSubmitting}
                          className="w-25 d-flex justify-content-center fw-bolder"
                          style={{ color: 'white' }}
                        >
                          {isSubmitting ? <Oval /> : 'Enviar'}
                        </Button>
                      </Stack>
                    </form>
                  </Container>
                </div>
              </div>
            )}
          </Formik>
        </div>
      }
    </>
  );
};

export default ActivitiesForm;
