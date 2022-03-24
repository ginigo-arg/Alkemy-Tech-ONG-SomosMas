import Title from '../SectionTitles/SectionTitles';
import ActivitiesList from './ActivitiesList';
import 'react-bootstrap';

const Actividades = () => {
  return (
    <>
      <Title
        title="ACTIVIDADES"
        backgroundImg="https://images.unsplash.com/photo-1616706161242-f1d591350d1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1567&q=80"
      />

      <div style={{ marginTop: '10px' }}>
        <ActivitiesList />
      </div>
    </>
  );
};
export default Actividades;
