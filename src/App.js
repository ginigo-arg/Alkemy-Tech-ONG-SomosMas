import React, { Suspense } from 'react';

// COMENTADO POR RECOMENDACION DEL ESLINTER
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';

import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { AnimatedSwitch, spring } from 'react-router-transition';
import ActivitiesForm from './Components/Activities/ActivitiesForm';
import CategoriesForm from './Components/Categories/CategoriesForm';
import NewsForm from './Components/News/NewsForm';
import SlidesForm from './Components/Slides/SlidesForm';
import TestimonialForm from './Components/Testimonials/TestimonialsForm';
import UsersList from './Components/Users/UsersList';
import UserForm from './Components/Users/UsersForm';
import SchoolCampaign from './Campaigns/School/SchoolCampaign';
import ToysCampaign from './Campaigns/Toys/ToysCampaign';
import MembersForm from './Components/Members/MembersForm';
import ProjectsForm from './Components/Projects/ProjectsForm';
import Spinner from './Components/Spinner/Spinner';
import Error404 from './Components/Error404/Error404';
import Layout from './Routes/Layouts/Public';

import Detail from './Components/Activities/Detail/Detail';

// IMPORTAR NUEVOS COMPONENTES DE WEB PUBLICA CON ESTE FORMATO::

const Home = React.lazy(() => import('./Components/Home'));
const Nosotros = React.lazy(() => import('./Components/About/Nosotros'));
const Actividades = React.lazy(() =>
  import('./Components/Activities/Actividades')
);
const IndexContact = React.lazy(() => import('./Components/Contact'));
const NewsList = React.lazy(() => import('./Components/News/NewsList'));
const NewDetail = React.lazy(() =>
  import('./Components/News/Detail/NewDetail')
);

function App() {
  const mapStyles = (styles) => {
    return {
      opacity: styles.opacity,
      transform: `scale(${styles.scale})`,
    };
  };

  const bounce = (value) => {
    return spring(value, {
      stiffness: 500,
      damping: 30,
    });
  };

  return (
    <div className="App">
      <Layout>
        <BrowserRouter>
          {/* Reemplazando el Switch tradicional de react-router-dom */}
          <AnimatedSwitch
            atEnter={{ opacity: 0, scale: 1.2 }}
            atLeave={{ opacity: bounce(0), scale: bounce(0.5) }}
            atActive={{ opacity: bounce(1), scale: bounce(1) }}
            mapStyles={mapStyles}
            runOnMount={true}
          >
            {/* Rutas para web pública */}
            <Suspense fallback={<Spinner />}>
              <Route path="/" exact component={Home} />
              <Route path="/actividades" exact component={Actividades} />
              <Route path="/actividades/:id" component={Detail} />
              <Route path="/contacto" component={IndexContact} />
              <Route path="/nosotros" component={Nosotros} />
              <Route path="/novedades/id" component={NewDetail} />
              <Route path="/novedades" component={NewsList} />
            </Suspense>

            {/* Rutas para el backoffice */}
            <Route
              path="/backoffice"
              exact
              component={() => <div>Backoffice</div>}
            />
            <Route
              path="/backoffice/create-activity"
              component={ActivitiesForm}
            />
            <Route
              path="/backoffice/create-category"
              component={CategoriesForm}
            />
            <Route path="/backoffice/create-news" component={NewsForm} />
            <Route path="/backoffice/create-slide" component={SlidesForm} />
            <Route
              path="/backoffice/create-testimonials"
              component={TestimonialForm}
            />
            <Route path="/backoffice/create-user" component={UserForm} />

            <Route path="/backoffice/users" component={UsersList} />
            {/* SEGUN EL TICKET 65 SE DEBE REDIRIGIR A ESTA RUTA */}
            <Route
              path="/backoffice/users/create"
              component={() => {
                <div>Creacion de users</div>;
              }}
            />

            <Route path="/backoffice/create-member" component={MembersForm} />
            <Route path="/backoffice/create-project" component={ProjectsForm} />
            <Route
              path="/backoffice/school-campaign"
              component={SchoolCampaign}
            />
            <Route path="/backoffice/toys-campaign" component={ToysCampaign} />

            {/* Ruta error 404 */}
            <Route path="*" component={Error404} />
          </AnimatedSwitch>
        </BrowserRouter>
      </Layout>
    </div>
  );
}

export default App;
