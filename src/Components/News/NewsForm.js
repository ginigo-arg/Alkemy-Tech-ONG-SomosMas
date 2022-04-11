import React, { useEffect, useState } from 'react';
import { Alert, Form, Button, Container, Stack } from 'react-bootstrap';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './NewsForm.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Oval } from 'react-loader-spinner';
import FormImage from '../../assets/img/logo-somos-mas.png';
import { useLocation } from 'react-router-dom';
import {
  GET_PRIVATE_API,
  // Patch,
  // POST_PRIVATE_API,
} from '../../Services/privateApiService';

const url = process.env.REACT_APP_API_NEWS;
const urlCategory = process.env.REACT_APP_API_CATEGORY;

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(4, 'El nombre debe tener un mínimo de 4 caracteres')
    .required('El nombre es obligatorio'),
  description: Yup.string().required('La descripción es obligatoria'),
  image: Yup.mixed()
    .required('La imagen es obligatoria'),
  slug: Yup.string().required('Requiere una categoría'),

});

const NewsForm = () => {
  const location = useLocation();
  const [edit, setEdit] = useState(false);
  const [news, setNews] = useState(false);

  useEffect(async () => {
    if (location.state) {
      setEdit(true);
      const { data } = await GET_PRIVATE_API(url, location.state.id);
      setNews(data);
    }
  }, []);

  const [Category, setCategory] = useState([]);

  useEffect(async () => {
    try {
      urlCategory().then(res => {
        setCategory(res.data);
      });
    } catch (error) {
    // showErrorAlert();
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
      name: news.name || '',
      description: news.description || '',
      image: news.image || '',
      slug: news.category || '',
    },
    validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      if (!edit) {
        // Función POST
        // console.log(values);
        // POST_PRIVATE_API(url, values);
        setSubmitting(false);
      } else {
        // Función PUT
        // console.log(values);
        // Patch(url, location.state.id, values);
        setSubmitting(false);
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
                  {`Formulario para ${edit ? 'editar' : 'crear'} novedades`}
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
              <Form.Label>Categorias</Form.Label>
              <select className="select-field" id="slug" name="slug" onChange={handleChange} onBlur={handleBlur}>
                <option value="" disabled >Selecciona una categoría</option>
                {Category === []
                  ? <p>Falta Categoría</p>
                  : Category.map((e, index) =>
                    <option key={index} value={e.name}>{e.name}</option>)}
              </select>
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

export default NewsForm;
