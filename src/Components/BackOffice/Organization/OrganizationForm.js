import { useEffect, useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { orgSchemaValidation } from './validation/orgSchemaValidation';
import Spinner from '../../Spinner/Spinner';
import { SocialFormControl } from './validation/SocialFormControl';

const OrganizationForm = () => {
  const [dataOrg, setDataOrg] = useState(false);

  useEffect(async () => {
    // Petición GET de Organization
    // const { data } = await getDataOrg();
    // REEMPLAZAR LUEGO
    setDataOrg({
      name: '',
      short_description: '',
      long_description: '',
      logo: '',
      facebook_url: '',
      linkedin_url: '',
      instagram_url: '',
      twitter_url: '',
    });
  }, []);

  return (
    <>
      {!dataOrg
        ? <Spinner/>
        : (
          <Container>
            <h2>Form Organization</h2>
            <Formik
              initialValues={{
                name: dataOrg.name || '',
                short_description: dataOrg.short_description || '',
                long_description: dataOrg.long_description || '',
                logo: dataOrg.logo || '',
                facebook_url: dataOrg.facebook_url || '',
                linkedin_url: dataOrg.linkedin_url || '',
                instagram_url: dataOrg.instagram_url || '',
                twitter_url: dataOrg.twitter_url || '',
              }}
              onSubmit={(values, { setSubmitting }) => {
                console.log(values);
                setSubmitting(false);
              }}
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
