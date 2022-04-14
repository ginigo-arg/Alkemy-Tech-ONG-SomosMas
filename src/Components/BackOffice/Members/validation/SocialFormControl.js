import { Form } from 'react-bootstrap';

export const SocialFormControl = ({ values, socialNet, errors, handleChange }) => {
  const CapFirstLetter = str => (
    str.charAt(0).toUpperCase() + str.slice(1)
  );

  return (
    <>
      <Form.Control
        className="my-2"
        type="text"
        value={values.social[socialNet]}
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
