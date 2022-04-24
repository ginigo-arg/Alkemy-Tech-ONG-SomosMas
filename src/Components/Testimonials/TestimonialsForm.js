import React, { useEffect, useState } from 'react';
import { Alert, Form, Button, Container, Stack } from 'react-bootstrap';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './TestimonialsForm.css';
import { useFormik } from 'formik';
import { Oval } from 'react-loader-spinner';
import FormImage from '../../assets/img/logo-somos-mas.png';
import { useLocation } from 'react-router-dom';
import {
  GET_PRIVATE_API,
  // PATCH_PRIVATE_API,
  // POST_PRIVATE_API,
} from '../../Services/privateApiService';
import { validationSchema, convertToBase64 } from './TestimonialsUtils';
import { alertService } from '../../Services/alertService';

const url = process.env.REACT_APP_API_TESTIMONIALS;

const TestimonialsForm = () => {
  const location = useLocation();
  const [edit, setEdit] = useState(false);
  const [testimonials, setTestimonials] = useState(false);

  useEffect(async () => {
    if (location.state) {
      try {
        setEdit(true);
        const { data } = await GET_PRIVATE_API(url, location.state.id);
        setTestimonials(data);
      } catch (error) {
        setEdit(false);
        alertService('error', error);
      }
    }
  }, []);

  const {
    errors,
    isSubmitting,
    setFieldValue,
    handleChange,
    handleBlur,
    handleSubmit,
    values,
  } = useFormik({
    validateOnBlur: true,
    validateOnChange: false,
    initialValues: {
      name: testimonials.name || '',
      description: testimonials.description || '',
      image: testimonials.image || '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      if (!edit) {
        try {
          const base64 = await convertToBase64(values.image);
          values.image = base64;
          setSubmitting(false);
        } catch (error) {
          setSubmitting(false);
          alertService('error', error);
        }
      } else {
        try {
          const base64 = await convertToBase64(values.image);
          values.image = base64;
          setSubmitting(false);
        } catch (error) {
          setSubmitting(false);
          alertService('error', error);
        }
      }
    },
  });

  return (
    <>
      <div className="container-all">
        <div className="shadow">
          <div className="container-logo pt-2 ">
            <img src={FormImage} alt="logo" className="mx-auto d-block" />
          </div>
          <Container className="container-fluid rounded-2 d-flex flex-column gap-2 container-form ">
            <form onSubmit={handleSubmit} className="my-4 formulario">
              <Stack className="align-items-center text-center">
                <h4 style={{ color: 'var(--bs-danger)' }}>
                  {`Formulario para ${edit ? 'editar' : 'crear'} testimonios`}
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
    </>
  );
};

export default TestimonialsForm;
