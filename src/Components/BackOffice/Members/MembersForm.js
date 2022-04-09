import { useEffect, useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import { memberSchemaValidation } from './validation/memberSchema';
import { SocialFormControl } from './validation/SocialFormControl';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { getMember } from '../../../Services/MemberService';
import Spinner from '../../Spinner/Spinner';

const MembersForm = () => {
  const location = useLocation();
  const [edit, setEdit] = useState(false);
  const [members, setMembers] = useState(false);

  useEffect(async () => {
    if (location.state) {
      setEdit(true);
      const { data } = await getMember(location.state.id);
      setMembers(data);
    }
  }, []);

  return (
    <>
      {
        !members && location.state
          ? <Spinner />
          : (
            <Container>
              <h2>Form Members</h2>
              <Formik
                initialValues={{
                  name: members.name || '',
                  description: members.description || '',
                  photo: members.image || '',
                  social: {
                    facebook: members.facebookUrl || '',
                    twitter: members.twitterUrl || '',
                    instagram: members.instagramUrl || '',
                  },
                }}
                onSubmit={(values, { setSubmitting }) => {
                  if (!edit) {
                    // Función POST
                    console.log('Creando nuevo miembro');
                    console.log(values);
                    setSubmitting(false);
                  } else {
                    // Función PUT
                    console.log('Editando miembro');
                    console.log(values);
                    setSubmitting(false);
                  }
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
                      {!edit ? 'Agregar miembro' : 'Guardar cambios'}
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

export default MembersForm;
