import React, { useState } from 'react';
import { Alert, Form, Button, Container, Stack } from 'react-bootstrap';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '../FormStyles.css';
import { useFormik } from 'formik';
// import { Oval } from 'react-loader-spinner';

const initialValues = {
  name: '',
  description: '',
  image: [],
};

const validate = (values) => {
  const errors = {};
  const { name, image } = values;

  if (!name) {
    errors.name = 'El nombre es necesario.';
  }

  if (!image) {
    errors.image = 'La imagen es necesaria.';
  } else if (!['image/jpg', 'image/png', 'image/jpeg'].includes(image.type)) {
    errors.image = 'La imagen debe ser en formato JPG o PNG';
  }

  return errors;
};

const ActivitiesForm = ({
  toEdit = null,
}) => {
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
    validate: () => validate(values),
    onSubmit: (values) => {
      const dataForm = {
        ...values,
        description,
      };
      console.log(dataForm);
      if (toEdit) {
        // peticion patch
        console.log('patch');
      } else {
        // peticion post
        // POST_PRIVATE_API(`${process.env.REACT_APP_API_TESTIMONIOS_POST}/create`, dataForm);
        console.log('post');
      }
    },
  });

  return (
    <>
      <form onSubmit={handleSubmit} className="my-4">
        <Container
          className="container-sm rounded-2 p-4 d-flex flex-column gap-2 shadow "
          style={{ maxWidth: '700px', backgroundColor: '#f9fafb' }}
        >
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
        </Container>
      </form>
    </>
  );
};

export default ActivitiesForm;
