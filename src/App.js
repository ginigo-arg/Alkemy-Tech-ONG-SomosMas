import React, { Suspense } from 'react';

// COMENTADO POR RECOMENDACION DEL ESLINTER
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';

import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Spinner from './Components/Spinner/Spinner';
import Error404 from './Components/Error404/Error404';
import { spring, AnimatedSwitch } from 'react-router-transition';

// IMPORTAR NUEVOS COMPONENTES DE WEB PUBLICA CON ESTE FORMATO::

const Home = React.lazy(() => import('./Routes/Layouts/Public.js'));
const Backoffice = React.lazy(() =>
  import('./Routes/Layouts/LayoutBackoffice'),
);
const Toy = React.lazy(() => import('./Campaigns/Toys/Content/Content'));

function App () {
  const mapStyles = (styles) => {
    return {
      opacity: styles.opacity,
      transform: `scale(${styles.scale})`,
    };
  };

  const bounce = (value) => {
    return spring(value, {
      stiffness: 200,
      damping: 35,
    });
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<Spinner />}>
          <AnimatedSwitch
            atEnter={{ opacity: 0, scale: 1.2 }}
            atLeave={{ opacity: bounce(0), scale: bounce(0.5) }}
            atActive={{ opacity: bounce(1), scale: bounce(1) }}
            mapStyles={mapStyles}
            runOnMount={true}
          >
            {/* Backoffice */}
            <Route path="/backoffice" component={Backoffice} />

            {/* Campañas */}
            <Route path="/campaigns/toys" component={Toy} />
            <Route
              path="/campaigns/school"
              component={() => <div>School</div>}
            />

            {/* Web pública */}
            <Route path="/" component={Home} />

            {/* Ruta error 404 */}
            <Route path="*" component={Error404} />
          </AnimatedSwitch>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
