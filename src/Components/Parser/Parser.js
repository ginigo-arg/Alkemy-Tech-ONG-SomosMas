import parse from 'html-react-parser';

const ParserHtml = ({ children }) => {
  return (
    <>
      {parse(`${children}`)}
    </>
  );
};
export default ParserHtml;
