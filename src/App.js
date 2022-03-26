import React, { Suspense, useState } from 'react';

// COMENTADO POR RECOMENDACION DEL ESLINTER
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';

import './App.css';
import Layout from './Routes/Layouts/Public';
import LayoutBackoffice from './Routes/Layouts/LayoutBackoffice';
import ActivitiesForm from './Components/Activities/ActivitiesForm';
import CategoriesForm from './Components/Categories/CategoriesForm';
import NewsForm from './Components/News/NewsForm';
import SlidesForm from './Components/Slides/SlidesForm';
import TestimonialForm from './Components/Testimonials/TestimonialsForm';
import UserForm from './Components/Users/UsersForm';
import SchoolCampaign from './Campaigns/School/SchoolCampaign';
import ToysCampaign from './Campaigns/Toys/ToysCampaign';
import MembersForm from './Components/Members/MembersForm';
import ProjectsForm from './Components/Projects/ProjectsForm';
import About from './Components/About/Nosotros';
import Spinner from './Components/Spinner/Spinner';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Error404 from './Components/Error404/Error404';
import Detail from './Components/Activities/Detail/Detail';

// IMPORTAR NUEVOS COMPONENTES DE WEB PUBLICA CON ESTE FORMATO::

const Home = React.lazy(() => import('./Components/Home'));
const Actividades = React.lazy(() =>
  import('./Components/Activities/Actividades')
);
const IndexContact = React.lazy(() => import('./Components/Contact'));
const NewsList = React.lazy(() => import('./Components/News/NewsList'));
const NewDetail = React.lazy(() =>
  import('./Components/News/Detail/NewDetail')
);

function App() {
  return (
    <div className="App">
      <Layout>
        <BrowserRouter>
          <Switch>
            {/* Rutas para web pública */}
            <Suspense fallback={<Spinner />}>
              <Route path="/" exact component={Home} />
              <Route path="/actividades" exact component={Actividades} />
              <Route path="/actividades/:id" component={Detail} />
              <Route path="/contacto" component={IndexContact} />
              <Route path="/nosotros" component={() => <div>Nosotros</div>} />
              <Route path="/novedades/id" component={NewDetail} />
              <Route path="/novedades" component={NewsList} />
            </Suspense>

            {/* Rutas para el backoffice
            <Route path="/backoffice" exact component={LayoutBackoffice} />
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
            <Route path="/backoffice/create-member" component={MembersForm} />
            <Route path="/backoffice/create-project" component={ProjectsForm} />
            <Route
              path="/backoffice/school-campaign"
              component={SchoolCampaign}
            />
            <Route path="/backoffice/toys-campaign" component={ToysCampaign} />
            <Route path="/backoffice/Nosotros" component={About} />

            {/* Ruta error 404 */}
            <Route path="*" component={Error404} />
          </Switch>
        </BrowserRouter>
      </Layout>

      <BrowserRouter>
        <LayoutBackoffice>
          {/* Rutas para el backoffice */}
          <Route path="/backoffice" exact component={LayoutBackoffice} />
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
          <Route path="/backoffice/create-member" component={MembersForm} />
          <Route path="/backoffice/create-project" component={ProjectsForm} />
          <Route
            path="/backoffice/school-campaign"
            component={SchoolCampaign}
          />
          <Route path="/backoffice/toys-campaign" component={ToysCampaign} />
          <Route path="/backoffice/Nosotros" component={About} />
        </LayoutBackoffice>
      </BrowserRouter>
    </div>
  );
}

export default App;
