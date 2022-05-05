import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
// import { alertService } from '../../Services/alertService';
import CardMembers from './cardTeam';
import { useDispatch, useSelector } from 'react-redux';
import { GET_MEMBERS_FUNCTION } from '../../redux/Miembros/action';
import { GET_ABOUT_FUNCTION } from '../../redux/Nosotros/actions';
import Organization from './Organization';
import Spinner from '../Spinner/Spinner';
import Slider from '../Slides/Slider';
import { GET_SLIDE_HOME_FN } from '../../redux/slides/actions';
import ParserHtml from '../Parser/Parser';

export default function Nosotros () {
  const dispatch = useDispatch();
  const { miembros } = useSelector(state => state.miembros);
  const stateOrganizacion = useSelector(state => state.organizacion);
  const stateLoading = useSelector(state => state.global.loading);
  const { slides } = useSelector(state => state.slides);

  useEffect(() => {
    dispatch(GET_SLIDE_HOME_FN());
    dispatch(GET_MEMBERS_FUNCTION());
    dispatch(GET_ABOUT_FUNCTION());
  }, []);
  useEffect(() => {

  }, []);

  return (
    stateLoading
      ? <Spinner/>
      : <>
        <Slider slides={slides || []} start={3} end={2}/>
        <Container className='d-flex justify-content-center py-5 my-2'>
          <div className='w-75 text-center'><ParserHtml className='w-75 text-center' text={stateOrganizacion?.long_description} /></div>
        </Container>
        <Container fluid className='bg-info m-0 mt-0'>
          <Organization
            id={stateOrganizacion?.id}
            name={stateOrganizacion?.name}
            shortDescription={stateOrganizacion?.short_description}

          />
        </Container>

        <h2 className='text-center text-info'>
          <strong>
            Nuestro equipo
          </strong>
        </h2>
        <Container className="d-flex gap-4 justify-content-center align-items-stretch flex-wrap mt-5 mb-5">
          { miembros.length > 0
            ? (
              miembros.map((item) => {
                return (
                  <CardMembers
                    key={item.id}
                    name={item.name}
                    description={item.description}
                    image={item.image}
                    facebookUrl={item.facebookUrl}
                    linkedingUrl= {item.linkedingUrl}
                  />
                );
              })
            )
            : (
              <p className="w-100 my-5 text-center display-6">No hay Miembros</p>
            ) }

        </Container>
      </>
  );
}
