import React from 'react';
import './LayoutBackOffice.css';
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
import Error404 from './Components/Error404/Error404';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
const Welcome = () => {
  return (
    <section className="welcome">
      <h1>¡Bienvenidos!</h1>
      <p>Texto de bienvenida</p>
      <BrowserRouter>
        <Switch>
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
          <Route path="/backoffice/create-member" component={MembersForm} />
          <Route path="/backoffice/create-project" component={ProjectsForm} />
          <Route
            path="/backoffice/school-campaign"
            component={SchoolCampaign}
          />
          <Route path="/backoffice/toys-campaign" component={ToysCampaign} />
          {/* Ruta error 404 */}
          <Route path="*" component={Error404} />
        </Switch>
      </BrowserRouter>
    </section>
  );
};

export default Welcome;
