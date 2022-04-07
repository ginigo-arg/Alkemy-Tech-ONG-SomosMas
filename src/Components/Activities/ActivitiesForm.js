import React, { useState } from 'react';
import { Alert, Form, Button, Container, Stack } from 'react-bootstrap';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '../FormStyles.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './ActivitiesForm.css';
// import { postActivities } from '../../Services/actividadesService';
// import { Oval } from 'react-loader-spinner';
import FormImage from '../../assets/img/logo-somos-mas.png';

const initialValues = {
  id: null,
  name: '',
  description: '',
  image: [],
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required('El nombre es necesario.'),
  image: Yup.mixed()
    .required('La imagen es necesaria.')
    .test(
      'Formato Imagen',
      'La imagen debe ser en formato JPG o PNG',
      (value) =>
        value && ['image/jpg', 'image/png', 'image/jpeg'].includes(value.type),
    ),
});

const ActivitiesForm = ({ toEdit = null }) => {
  const [description, setDescription] = useState(
    toEdit ? toEdit.description : '',
  );
  const {
    errors,
    isSubmitting,
    handleSubmit,
    values,
    setFieldValue,
    handleChange,
    handleBlur,
  } = useFormik({
    validateOnBlur: true,
    validateOnChange: false,
    initialValues: toEdit || initialValues,
    validationSchema,
    onSubmit: (values) => {
      const dataForm = {
        ...values,
        description,
      };
      console.log(dataForm);
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
                <h4 style={{ color: 'var(--bs-danger)' }}>{`Formulario para ${
                  toEdit ? 'editar' : 'crear'
                } actividades`}</h4>
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
                data={description}
                config={{ placeholder: 'Descripción' }}
                onChange={(e, editor) => {
                  const description = editor.getData();
                  setDescription(description);
                }}
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
                onChange={(e) => {
                  setFieldValue('image', e.currentTarget.files[0]);
                }}
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
                  Enviar
                </Button>
              </Stack>
            </form>
          </Container>
        </div>
      </div>
    </>
  );
};

export default ActivitiesForm;
