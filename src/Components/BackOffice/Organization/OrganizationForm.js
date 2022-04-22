import { useEffect } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { orgSchemaValidation } from './validation/orgSchemaValidation';
import Spinner from '../../Spinner/Spinner';
import { SocialFormControl } from './validation/SocialFormControl';
import { POST_ABOUT_FUNCTION, GET_ABOUT_FUNCTION } from '../../../redux/Nosotros/actions';
import { useDispatch, useSelector } from 'react-redux';

const OrganizationForm = () => {
  const organization = useSelector(state => state.organizacion);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GET_ABOUT_FUNCTION());
  }, []);

  return (
    <>
      {!organization
        ? <Spinner/>
        : (
          <Container>
            <h2>Form Organization</h2>
            <Formik
              initialValues={{
                name: organization.name || '',
                short_description: organization.short_description || '',
                long_description: organization.long_description || '',
                logo: organization.logo || '',
                facebook_url: organization.facebook_url || '',
                linkedin_url: organization.linkedin_url || '',
                instagram_url: organization.instagram_url || '',
                twitter_url: organization.twitter_url || '',
              }}
              onSubmit={(values) => POST_ABOUT_FUNCTION(values)}
              validationSchema={orgSchemaValidation}
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
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      isInvalid={!!errors.name}
                    />
                    <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className='mb-4'>
                    <Form.Label>Descripción Breve:</Form.Label>
                    <Form.Control
                      type="text"
                      name="short_description"
                      value={values.short_description}
                      onChange={handleChange}
                      isInvalid={!!errors.short_description}
                    />
                    <Form.Control.Feedback type="invalid">{errors.short_description}</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className='mb-4'>
                    <Form.Label>Descripción Detallada:</Form.Label>
                    <CKEditor
                      editor={ ClassicEditor }
                      name="long_description"
                      data={values.long_description}
                      onChange={(e, editor) => setFieldValue('long_description', editor.getData())}
                    />
                    {errors.long_description &&
                    <small className="text-primary">
                      {errors.long_description}
                    </small>
                    }
                  </Form.Group>

                  <SocialFormControl
                    values={values}
                    errors={errors}
                    handleChange={handleChange}
                  />

                  <Form.Group className='mb-4'>
                    <Form.Label>Logo:</Form.Label>
                    <Form.Control
                      name="logo"
                      type="file"
                      onChange={e => setFieldValue('logo', e.currentTarget.files[0])}
                      isInvalid={!!errors.logo}
                    />
                    <Form.Control.Feedback type="invalid">{errors.logo}</Form.Control.Feedback>
                  </Form.Group>

                  <Button type="submit" variant="primary" disabled={isSubmitting}>
                    Guardar cambios
                  </Button>

                </Form>
              )}
            </Formik>
          </Container>
        )}
    </>
  );
};

export default OrganizationForm;
