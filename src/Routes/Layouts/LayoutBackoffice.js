import { Container, Row, Col } from 'react-bootstrap';
import { Link, Route, Switch } from 'react-router-dom';
import './layoutbackoffice.css';
import ActivitiesForm from '../../Components/Activities/ActivitiesForm';
import CategoriesForm from '../../Components/Categories/CategoriesForm';
import NewsForm from '../../Components/News/NewsForm';
import SlidesForm from '../../Components/Slides/SlidesForm';
import TestimonialForm from '../../Components/Testimonials/TestimonialsForm';
import UserForm from '../../Components/Users/UsersForm';
import SchoolCampaign from '../../Campaigns/School/SchoolCampaign';
import ToysCampaign from '../../Campaigns/Toys/ToysCampaign';
import MembersForm from '../../Components/Members/MembersForm';
import ProjectsForm from '../../Components/Projects/ProjectsForm';
import About from '../../Components/About/Nosotros';

const LayoutBackoffice = () => {
  return (
    <>
      <Container
        fluid
        className="bg-dark h-50 text-white container-header-backoffice mt-5"
      >
        <header>COMPONENT HEADER</header>
      </Container>
      <Container fluid className="container-fluid vh-100 border border-2">
        <Row>
          <Col md={2} className="bg-primary vh-100 text-white">
            Componente sidebar
            {/* <Aqui iria Componente sidebar>
            Rutas para probar funcionamiento */}
            <ul>
              <li>
                <Link to="/backoffice/create-category" className="text-white">
                  Crear categoria
                </Link>
              </li>
              <li>
                <Link to="/backoffice/create-activity" className="text-white">
                  Crear activity
                </Link>
              </li>
              <li>
                <Link to="/backoffice/create-news" className="text-white">
                  Crear new
                </Link>
              </li>
            </ul>
          </Col>
          <Col md={10}>
            {/*rutas backoffice*/}
            <Switch>
              <Route exact path="/backoffice" component={LayoutBackoffice} />
              <Route
                exact
                path="/backoffice/create-activity"
                component={ActivitiesForm}
              />
              <Route
                exact
                path="/backoffice/create-category"
                component={CategoriesForm}
              />
              <Route
                exact
                path="/backoffice/create-news"
                component={NewsForm}
              />
              <Route
                exact
                path="/backoffice/create-slide"
                component={SlidesForm}
              />
              <Route
                exact
                path="/backoffice/create-testimonials"
                component={TestimonialForm}
              />
              <Route
                exact
                path="/backoffice/create-user"
                component={UserForm}
              />
              <Route
                exact
                path="/backoffice/create-member"
                component={MembersForm}
              />
              <Route
                exact
                path="/backoffice/create-project"
                component={ProjectsForm}
              />
              <Route
                exact
                path="/backoffice/school-campaign"
                component={SchoolCampaign}
              />
              <Route
                exact
                path="/backoffice/toys-campaign"
                component={ToysCampaign}
              />
              <Route exact path="/backoffice/Nosotros" component={About} />
            </Switch>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default LayoutBackoffice;
