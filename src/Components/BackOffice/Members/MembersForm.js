import { Container, Form, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import { memberSchemaValidation } from './memberSchema';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

const MembersForm = () => {
  const { state: { id } } = useLocation();

  if (id) {
    console.log('Llego id', id);
  }

  return (
    <Container>
      <h2>Form Members</h2>
      <Formik
        initialValues={{
          name: '',
          description: '',
          photo: null,
          social: {
            facebook: '',
            twitter: '',
            instagram: '',
          },
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log(values);
            setSubmitting(false);
          }, 400);
        }}
        validationSchema={memberSchemaValidation}
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
              <Form.Label>Nombre:</Form.Label>
              <Form.Control
                type="text"
                placeholder='Escribe el nombre del miembro'
                name="name"
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
              <Form.Label>Redes Sociales:</Form.Label>
              <SocialFormControl
                handleChange={handleChange}
                socialNet='facebook'
                errors={errors}
              />
              <SocialFormControl
                handleChange={handleChange}
                socialNet='twitter'
                errors={errors}
              />
              <SocialFormControl
                handleChange={handleChange}
                socialNet='instagram'
                errors={errors}
              />
            </Form.Group>

            <Form.Group className='mb-4'>
              <Form.Label>Foto:</Form.Label>
              <Form.Control
                name="photo"
                type="file"
                onChange={e => setFieldValue('photo', e.currentTarget.files[0])}
                isInvalid={!!errors.photo}
              />
              <Form.Control.Feedback type="invalid">{errors.photo}</Form.Control.Feedback>
            </Form.Group>

            <Button type="submit" variant="primary" disabled={isSubmitting}>
              Agregar miembro
            </Button>

          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default MembersForm;

export const SocialFormControl = ({ socialNet, errors, handleChange }) => {
  const CapFirstLetter = str => (
    str.charAt(0).toUpperCase() + str.slice(1)
  );

  return (
    <>
      <Form.Control
        className="my-2"
        type="text"
        placeholder={'Link a ' + CapFirstLetter(socialNet)}
        name={`social.${socialNet}`}
        onChange={handleChange}
        isInvalid={!!errors.social && errors.social[socialNet]}
      />
      <Form.Control.Feedback type="invalid">
        {errors.social &&
          errors.social[socialNet] !== undefined
          ? `${errors.social[socialNet]}`
          : null
        }
      </Form.Control.Feedback>
    </>
  );
};
