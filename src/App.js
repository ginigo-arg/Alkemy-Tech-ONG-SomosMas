import React, { Suspense } from 'react';

// COMENTADO POR RECOMENDACION DEL ESLINTER
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';

import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Spinner from './Components/Spinner/Spinner';
import Error404 from './Components/Error404/Error404';
import Layout from './Routes/Layouts/Public';
import Detail from './Components/Activities/Detail/Detail';
//import LayoutBackoffice from './Routes/Layouts/LayoutBackoffice'; Agregar backoffice

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
              <Route path="/nosotros" component={Nosotros} />
              <Route path="/novedades/id" component={NewDetail} />
              <Route path="/novedades" component={NewsList} />
            </Suspense>

            <Route path="*" component={Error404} />
          </Switch>
        </BrowserRouter>
      </Layout>
    </div>
  );
}

export default App;
