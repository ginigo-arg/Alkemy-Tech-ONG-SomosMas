import './Layout.css';
import LandingFooter from '../../Components/Footer/LandingFooter';
import PublicHeader from '../../Components/Header/PublicHeader';
import { Route, Switch } from 'react-router-dom';
import Actividades from '../../Components/Activities/Actividades';
import Detail from '../../Components/Activities/Detail/Detail';
import IndexContact from '../../Components/Contact';
import NewDetail from '../../Components/News/Detail/NewDetail';
import NewsList from '../../Components/News/NewsList';
import Home from '../../Components/Home';
import Nosotros from '../../Components/About/Nosotros';
import LoginForm from '../../Components/Auth/LoginForm';
import RegisterForm from '../../Components/Auth/RegisterForm';
import Error404 from '../../Components/Error404/Error404';
import ToysCampaign from '../../Campaigns/Toys/ToysCampaign';
import SchoolCampaign from '../../Campaigns/School/SchoolCampaign';

const Layout = ({ match }) => {
  const PATH = match.path;
  return (
    <div className="container-fluid p-0">
      <PublicHeader />
      <div className="hero">
        <Switch>
          <Route exact path={PATH} component={Home} />
          <Route exact path="/actividades" component={Actividades} />
          <Route exact path="/actividades/:id" component={Detail} />
          <Route exact path="/contacto" component={IndexContact} />
          <Route exact path="/nosotros" component={Nosotros} />
          <Route exact path="/novedades/id" component={NewDetail} />
          <Route exact path="/novedades" component={NewsList} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/register" component={RegisterForm} />
          <Route exact path="/campaign/toys" component={ToysCampaign} />
          <Route exact path="/campaign/school" component={SchoolCampaign} />
          <Route path="*" component={Error404} />
        </Switch>
      </div>

      <LandingFooter />
    </div>
  );
};
export default Layout;
