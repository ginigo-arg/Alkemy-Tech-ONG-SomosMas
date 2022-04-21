import { Spinner } from 'react-bootstrap';

const ProgressSpinner = ({ state = true }) => {
  if (state) {
    return (
      <Spinner animation="border" role="status" variant="primary">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }
  return <></>;
};

export default ProgressSpinner;
