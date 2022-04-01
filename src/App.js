import React, { Suspense } from 'react';

// COMENTADO POR RECOMENDACION DEL ESLINTER
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';

import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Spinner from './Components/Spinner/Spinner';
import Error404 from './Components/Error404/Error404';
import { spring, AnimatedSwitch } from 'react-router-transition';
// import LayoutBackoffice from './Routes/Layouts/LayoutBackoffice'; Agregar backoffice

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
            {/* Web pública */}
            <Route path="/" component={Home} />

            {/* Backoffice */}
            <Route path="/backoffice" component={() => <div> Backoffice </div>} />

            {/* Ruta error 404 */}
            <Route path="*" component={Error404} />
          </AnimatedSwitch>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;

/* Rutas del backoffice e imports de los componentes

import ActivitiesForm from './Components/Activities/ActivitiesForm';
import CategoriesForm from './Components/Categories/CategoriesForm';
import NewsForm from './Components/News/NewsForm';
import SlidesForm from './Components/Slides/SlidesForm';
import TestimonialForm from './Components/Testimonials/TestimonialsForm';
import UserForm from './Components/Users/UsersForm';
import SchoolCampaign from './Campaigns/School/SchoolCampaign';
import ToysCampaign from './Campaigns/Toys/ToysCampaign';
import MembersForm from './Components/Members/MembersForm';
import ProjectsForm from './Components/Projects/ProjectsForm';
import About from './Components/About/Nosotros';

<Route path="/backoffice/create-activity" component={ActivitiesForm} />
<Route path="/backoffice/create-category" component={CategoriesForm} />
<Route path="/backoffice/create-news" component={NewsForm} />
<Route path="/backoffice/create-slide" component={SlidesForm} />
<Route path="/backoffice/create-testimonials" component={TestimonialForm} />
<Route path="/backoffice/create-user" component={UserForm} />
<Route path="/backoffice/create-member" component={MembersForm} />
<Route path="/backoffice/create-project" component={ProjectsForm} />
<Route path="/backoffice/school-campaign" component={SchoolCampaign} />
<Route path="/backoffice/toys-campaign" component={ToysCampaign} />
<Route path="/backoffice/Nosotros" component={About} />

*/
