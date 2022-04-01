import React, { Suspense } from 'react';

// COMENTADO POR RECOMENDACION DEL ESLINTER
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';

import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Spinner from './Components/Spinner/Spinner';
import Error404 from './Components/Error404/Error404';

// IMPORTAR NUEVOS COMPONENTES DE WEB PUBLICA CON ESTE FORMATO::

const Home = React.lazy(() => import('./Routes/Layouts/Public.js'));
const Backoffice = React.lazy(() => import('./Routes/Layouts/LayoutBackoffice'));
const Toy = React.lazy(() => import('./Campaigns/Toys/Content/Content'));

function App () {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<Spinner />}>
          <Switch>
            {/* Backoffice */}
            <Route path="/backoffice" component={Backoffice} />
            <Route path="/campaigns/toys" component={Toy} />
            <Route path="/campaigns/school" component={() => <div>School</div>} />

            {/* Web pública */}
            <Route path="/" component={Home} />

            {/* Ruta error 404 */}
            <Route path="*" component={Error404} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
