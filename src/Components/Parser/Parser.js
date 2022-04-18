import parse from 'html-react-parser';

const ParserHtml = ({ text }) => {
  return (
    <>
      <p>

        {parse(`${text}`)}
      </p>
    </>
  );
};
export default ParserHtml;
