import { Redirect, Route } from 'react-router-dom';

const PrivateRoutes = ({ children, ...path }) => {
  const TOKEN = localStorage.getItem('TOKEN');

  return (
    <Route
      {...path}
      render = {({ location }) =>
        TOKEN
          ? (
            children
          )
          : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: location },
              }}
            />
          )
      }
    />
  );
};

export default PrivateRoutes;
