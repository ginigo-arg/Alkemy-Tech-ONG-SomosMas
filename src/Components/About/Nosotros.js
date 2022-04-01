import Title from '../SectionTitles/SectionTitles';
// import { Button } from 'react-bootstrap';
// import { useHistory } from 'react-router-dom';

export default function Nosotros () {
  const nosotrostx = 'Sobre Nosotros';
  // const history = useHistory();

  return (
    <>
      <Title
        title={nosotrostx}
        backgroundImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhW6bkouhOtOGiBmCAT9T27gOEbBFD-5utzvSKrS-NPZUlMPEA4zNPYqZZmubU-AQ3nQM&usqp=CAU"
      />

      <div style={{ marginTop: '10px' }}></div>

      {/* <Button size="sm" className="button" onClick={() => history.goBack()}>
        Regresar
      </Button> */}
    </>
  );
}
