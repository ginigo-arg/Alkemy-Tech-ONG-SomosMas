import Placeholder from 'react-bootstrap/Placeholder';

const SkeletonComment = () => {
  return (
    <Placeholder
      as="div"
      animation="wave"
      className="mt-4 mb-5"
    >
      <Placeholder className="my-2" xs={10} />
      <Placeholder className="my-2" xs={10} />
      <Placeholder className="my-2" xs={10} />
    </Placeholder>
  );
};

export default SkeletonComment;
