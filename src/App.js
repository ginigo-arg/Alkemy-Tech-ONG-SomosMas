import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout/Layout';
import LayoutBackoffice from './Rutas/Layouts/LayoutBackoffice/LayoutBackoffice';
import { Container } from 'react-bootstrap';
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
import { useLocation } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          {/* <Route path="/" exact component={} />  Esta ruta debe ser para el Home */}
        </Switch>
      </BrowserRouter>

      <Container className="App">
        <Layout>
          <h2>MODIFICAR POR EL COMPONENT HOME</h2>
        </Layout>
      </Container>

      <Container fluid>
        <BrowserRouter>
          <LayoutBackoffice>
            <Switch>
              <Route
                path="/backoffice/create-activity"
                component={ActivitiesForm}
              />
              <Route
                path="/backoffice/create-category"
                component={CategoriesForm}
              />
              <Route path="/backoffice/create-news" component={NewsForm} />
              <Route
                path="/backoffice/backoffice/create-slide"
                component={SlidesForm}
              />
              <Route
                path="/backofice/create-testimonials"
                component={TestimonialForm}
              />
              <Route path="/backoffice/create-user" component={UserForm} />
              <Route path="/backoffice/create-member" component={MembersForm} />
              <Route
                path="/backoffice/create-project"
                component={ProjectsForm}
              />
              <Route
                path="/backoffice/school-campaign"
                component={SchoolCampaign}
              />
              <Route
                path="/backoffice/toys-campaign"
                component={ToysCampaign}
              />
              <Route path="/backoffice/Nosotros" component={About} />
            </Switch>
          </LayoutBackoffice>
        </BrowserRouter>
      </Container>
    </>
  );
}

export default App;
