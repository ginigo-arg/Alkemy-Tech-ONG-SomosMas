import React, { Suspense, useState } from 'react';

// COMENTADO POR RECOMENDACION DEL ESLINTER
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';

import './App.css';
import Layout from './Routes/Layouts/Public';
import LayoutBackoffice from './Routes/Layouts/LayoutBackoffice';
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

            <Route path="*" component={Error404} />
          </Switch>
        </BrowserRouter>
      </Layout>
      <BrowserRouter>
        <LayoutBackoffice />
      </BrowserRouter>
    </div>
  );
}

export default App;
