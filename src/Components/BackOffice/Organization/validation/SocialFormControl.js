import { Form } from 'react-bootstrap';

export const SocialFormControl = ({ errors, values, handleChange }) => (
  <Form.Group className='mb-4'>
    <Form.Label>Redes Sociales:</Form.Label>
    <Form.Control
      className="my-2"
      type="text"
      value={values.facebook_url}
      placeholder='Facebook Url'
      name='facebook_url'
      onChange={handleChange}
      isInvalid={errors.facebook_url}
    />
    <Form.Control.Feedback type="invalid">
      {errors.facebook_url}
    </Form.Control.Feedback>

    <Form.Control
      className="my-2"
      type="text"
      value={values.linkedin_url}
      placeholder='Linkedin Url'
      name='linkedin_url'
      onChange={handleChange}
      isInvalid={errors.linkedin_url}
    />
    <Form.Control.Feedback type="invalid">
      {errors.linkedin_url}
    </Form.Control.Feedback>

    <Form.Control
      className="my-2"
      type="text"
      value={values.instagram_url}
      placeholder='Instagram Url'
      name='instagram_url'
      onChange={handleChange}
      isInvalid={errors.instagram_url}
    />
    <Form.Control.Feedback type="invalid">
      {errors.instagram_url}
    </Form.Control.Feedback>

    <Form.Control
      className="my-2"
      type="text"
      value={values.twitter_url}
      placeholder='Twitter Url'
      name='twitter_url'
      onChange={handleChange}
      isInvalid={errors.twitter_url}
    />
    <Form.Control.Feedback type="invalid">
      {errors.twitter_url}
    </Form.Control.Feedback>
  </Form.Group>
);
