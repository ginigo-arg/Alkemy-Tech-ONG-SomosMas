import { useEffect, useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import { memberSchemaValidation } from './validation/memberSchema';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { createMember, editMember, getMember } from '../../../Services/MemberService';
import Spinner from '../../Spinner/Spinner';
import { convertToBase64 } from './validation/convertImage';

const MembersForm = () => {
  const location = useLocation();
  const [members, setMembers] = useState(false);

  useEffect(async () => {
    if (location.state) {
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
                  image: members.image || '',
                  facebookUrl: members.facebookUrl || '',
                  linkedinUrl: members.linkedinUrl || '',
                }}
                onSubmit={async (values, { setSubmitting }) => {
                  setSubmitting(false);

                  const base64 = await convertToBase64(values.image);
                  values.image = base64;
                  console.log(values);
                  if (!location.state) {
                    createMember(values);
                  } else {
                    editMember(values);
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

                      <Form.Control
                        className="my-2"
                        type="text"
                        value={values.facebookUrl}
                        placeholder='Facebook Url'
                        name='facebookUrl'
                        onChange={handleChange}
                        isInvalid={errors.facebookUrl}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.facebookUrl}
                      </Form.Control.Feedback>

                      <Form.Control
                        className="my-2"
                        type="text"
                        value={values.linkedinUrl}
                        placeholder='Linkedin Url'
                        name='linkedinUrl'
                        onChange={handleChange}
                        isInvalid={errors.linkedinUrl}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.linkedinUrl}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className='mb-4'>
                      <Form.Label>Foto:</Form.Label>
                      <Form.Control
                        name="image"
                        type="file"
                        onChange={e => setFieldValue('image', e.currentTarget.files[0])}
                        isInvalid={!!errors.image}
                      />
                      <Form.Control.Feedback type="invalid">{errors.image}</Form.Control.Feedback>
                    </Form.Group>

                    <Button type="submit" variant="primary" disabled={isSubmitting}>
                      {!location.state ? 'Agregar miembro' : 'Guardar cambios'}
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
