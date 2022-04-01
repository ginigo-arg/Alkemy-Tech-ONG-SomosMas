import parse from 'html-react-parser';

const ParserHtml = ({ text }) => {
  return (
    <>
      {parse(`${text}`)}
    </>
  );
};
export default ParserHtml;
