import '../CardListStyles.css';
import { Container } from 'react-bootstrap';
import SectionTitles from '../SectionTitles/SectionTitles';
import { useEffect } from 'react';
import ProgressSpinner from '../Progress/ProgressSpinner';
import NewCard from './NewsCard';
import { useDispatch, useSelector } from 'react-redux';
import { GET_NOVEDAD_FN } from '../../redux/novedades/actions';

const NewsList = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.novedades.novedades);
  const stateLoading = useSelector(state => state.global.loading);

  useEffect(() => {
    dispatch(GET_NOVEDAD_FN());
  }, []);

  return (
    <>
      <SectionTitles title="Novedades" />
      <Container className="d-flex gap-4 justify-content-center align-items-stretch flex-wrap mt-5 mb-5">
        <ProgressSpinner state={stateLoading} />
        {
          Array.isArray(state) && state.length > 0
            ? state.map((item) => (
              <NewCard key={item.id}
                image={item.image}
                title={item.name}
                description={item.content}
                id={item.id}
              />)).reverse()
            : <p>No hay novedades</p>
        }
      </Container>
    </>
  );
};

export default NewsList;
