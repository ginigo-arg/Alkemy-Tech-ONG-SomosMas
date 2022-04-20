import React, { Suspense } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Spinner from './Components/Spinner/Spinner';
import Error404 from './Components/Error404/Error404';
import { spring, AnimatedSwitch } from 'react-router-transition';
import LayoutBackoffice from './Routes/Layouts/LayoutBackoffice';
import Login from './Components/Auth/Login';
import PrivateRoutes from './Components/Private/PrivateRoutes';
<<<<<<< HEAD

// import PrivateRoutes from './Components/Private/PrivateRoutes';
=======
>>>>>>> 4ff861e756c42546011368bbcfd8b33c1ac7e17c

// IMPORTAR NUEVOS COMPONENTES DE WEB PUBLICA CON ESTE FORMATO::
const Home = React.lazy(() => import('./Routes/Layouts/Public.js'));

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
            runOnMount={true} >

            <Route
              path='/login'
              component={Login}
            />
            <PrivateRoutes path='/backoffice'>
              <LayoutBackoffice/>
            </PrivateRoutes>
            {/* Web pública */}
            <Route path="/" component={Home} />

            {/* Ruta error 404 */}
            <Route exact path="*" component={Error404} />
          </AnimatedSwitch>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
