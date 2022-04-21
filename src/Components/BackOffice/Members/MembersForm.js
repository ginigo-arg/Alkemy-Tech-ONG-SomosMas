import { useEffect } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import { memberSchemaValidation } from './validation/memberSchema';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import Spinner from '../../Spinner/Spinner';
import { convertToBase64 } from '../../../Services/base64Helper';
import { useDispatch, useSelector } from 'react-redux';
import { CREATE_MEMBER_FN, GET_ONE_MEMBER_FN, EDIT_MEMBER_FN } from '../../../redux/Miembros/action';

const MembersForm = () => {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const stateLoading = useSelector(state => state.global.loading);
  const { memberSelected } = useSelector(state => state.miembros);

  useEffect(() => {
    if (location.state) {
      return dispatch(GET_ONE_MEMBER_FN(location.state.id));
    }

    return dispatch(GET_ONE_MEMBER_FN());
  }, []);

  return (
    <>
      {stateLoading
        ? <Spinner />
        : (
          <Container>
            <h2>Form Members</h2>
            <Formik
              initialValues={{
                name: memberSelected?.name || '',
                description: memberSelected?.description || '',
                image: memberSelected?.image || '',
                facebookUrl: memberSelected?.facebookUrl || '',
                linkedinUrl: memberSelected?.linkedinUrl || '',
              }}
              onSubmit={async (values, { setSubmitting }) => {
                setSubmitting(false);

                const base64 = await convertToBase64(values.image);
                values.image = base64;

                if (!location.state) {
                  dispatch(CREATE_MEMBER_FN(values));
                  if (!stateLoading) history.push('/backoffice/members');
                } else {
                  console.log(memberSelected.id);
                  dispatch(EDIT_MEMBER_FN(memberSelected.id, values));
                  if (!stateLoading) history.push('/backoffice/members');
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
