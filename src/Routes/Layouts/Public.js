import './Layout.css';
import PublicFooter from '../../Components/Footer/PublicFooter';
import PublicHeader from '../../Components/Header/PublicHeader';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
import SchoolCampaign from '../../Campaigns/School/SchoolCampaign';
import ToysCampaing from '../../Campaigns/Toys/ToysCampaign';

const Layout = ({ match }) => {
  const PATH = match.path;
  return (
    <div className="container-fluid p-0">
      <PublicHeader />
      <br></br>

      <div className="hero">
        <Router>
          <Switch>
            <Route exact path={PATH} component={Home} />
            <Route exact path="/actividades" component={Actividades} />
            <Route exact path="/actividades/:id" component={Detail} />
            <Route exact path="/contacto" component={IndexContact} />
            <Route exact path="/nosotros" component={Nosotros} />
            <Route exact path="/novedades/:id" component={NewDetail} />
            <Route exact path="/novedades" component={NewsList} />
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/register" component={RegisterForm} />
            <Route exact path="/campaing/schools" component={SchoolCampaign} />
            <Route exact path="/campaing/toys" component={ToysCampaing} />

            <Route path="*" component={Error404} />
          </Switch>
        </Router>
      </div>

      <PublicFooter />
    </div>
  );
};
export default Layout;
