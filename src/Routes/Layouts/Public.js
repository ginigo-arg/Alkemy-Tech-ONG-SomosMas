import './Layout.css';
import Footer from '../../Components/Footer/Footer';
import PublicHeader from '../../Components/Header/PublicHeader';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Actividades from '../../Components/Activities/Actividades';
import Detail from '../../Components/Activities/Detail/Detail';
import IndexContact from '../../Components/Contact';
import NewDetail from '../../Components/News/Detail/NewDetail';
import NewsList from '../../Components/News/NewsList';
import Home from '../../Components/Home';
import Nosotros from '../../Components/About/Nosotros';

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
            <Route exact path="/novedades/id" component={NewDetail} />
            <Route exact path="/novedades" component={NewsList} />
          </Switch>
        </Router>
      </div>

      <Footer />
    </div>
  );
};
export default Layout;
