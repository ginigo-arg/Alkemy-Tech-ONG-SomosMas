import { useEffect, useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { orgSchemaValidation } from './validation/orgSchemaValidation';
import { SocialFormControl } from '../Members/validation/SocialFormControl';
import Spinner from '../../Spinner/Spinner';

const OrganizationForm = () => {
  const [dataOrg, setDataOrg] = useState(false);

  useEffect(async () => {
    // Petición GET de Organization
    // const { data } = await getDataOrg();
    setDataOrg(/* data */);
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
                shortDescription: dataOrg.shortDescription || '',
                longDescription: dataOrg.longDescription || '',
                logo: dataOrg.logo || null,
                social: {
                  facebook: dataOrg.facebook_url || '',
                  twitter: dataOrg.twitter_url || '',
                  instagram: dataOrg.instagram_url || '',
                },
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
                      name="shortDescription"
                      value={values.shortDescription}
                      onChange={handleChange}
                      isInvalid={!!errors.shortDescription}
                    />
                    <Form.Control.Feedback type="invalid">{errors.shortDescription}</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className='mb-4'>
                    <Form.Label>Descripción Detallada:</Form.Label>
                    <CKEditor
                      editor={ ClassicEditor }
                      name="longDescription"
                      data={values.longDescription}
                      onChange={(e, editor) => setFieldValue('longDescription', editor.getData())}
                    />
                    {errors.longDescription &&
                    <small className="text-primary">
                      {errors.longDescription}
                    </small>
                    }
                  </Form.Group>

                  <Form.Group className='mb-4'>
                    <Form.Label>Redes Sociales:</Form.Label>
                    <SocialFormControl
                      values={values}
                      handleChange={handleChange}
                      socialNet='facebook'
                      errors={errors}
                    />
                    <SocialFormControl
                      values={values}
                      handleChange={handleChange}
                      socialNet='twitter'
                      errors={errors}
                    />
                    <SocialFormControl
                      values={values}
                      handleChange={handleChange}
                      socialNet='instagram'
                      errors={errors}
                    />
                  </Form.Group>

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
