import Title from '../SectionTitles/SectionTitles';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

export default function Nosotros () {
  const nosotrostx = 'Sobre Nosotros';
  const history = useHistory();

  return (
    <>
      <Title
        title={nosotrostx}
        backgroundImg="https://www.activekids.com.co/uploads/1/1/7/2/117219346/hch-landing-7_orig.jpg"
      />

      <div style={{ marginTop: '10px' }}></div>

      {/* <Button size="sm" className="button" onClick={() => history.goBack()}>
        Regresar
      </Button> */}
    </>
  );
}
