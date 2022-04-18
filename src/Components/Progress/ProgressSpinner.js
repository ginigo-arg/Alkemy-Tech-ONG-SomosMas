import { Spinner } from 'react-bootstrap';

const ProgressSpinner = ({ state = true, variant = 'primary', animation = 'border', dimention = 5 }) => {
  if (state) {
    return (
      <Spinner animation={animation} role={state} variant={variant} style={{ width: `${dimention}rem`, height: `${dimention}rem` }}>
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }
  return <></>;
};

export default ProgressSpinner;
