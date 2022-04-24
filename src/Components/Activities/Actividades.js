import Title from '../SectionTitles/SectionTitles';
import ActivitiesList from './ActivitiesList';
import 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { LOGIN_AUTH_ME_ACTION } from '../../redux/auth/authActions';
import { useEffect } from 'react';

const Actividades = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(LOGIN_AUTH_ME_ACTION());
  }, []);
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
