import { Container, Row, Col } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';
import { routes } from '../config/routes';
import Sidebar from '../../Components/BackOffice/Sidebar/Sidebar';
import Header from '../../Components/BackOffice/Header/Header';

const LayoutBackoffice = () => {
  return (
    <>
      <Container fluid>
        <header>
          <Header />
        </header>
      </Container>
      <Container fluid className="container-fluid border border-2">
        <Row>
          <Sidebar />
          <Col>
            <Switch>
              {routes.map(route => (
                <Route
                  key={route.path}
                  exact
                  path={route.path}
                  component={route.component}
                />
              ))}
            </Switch>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default LayoutBackoffice;
