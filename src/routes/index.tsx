// import from react
import { lazy } from 'react';

// other components
import { ErrorPage } from 'pages';

// routing
import { createBrowserRouter } from 'react-router-dom';

const HomePage = lazy(() => import('pages/HomePage'));

const routes = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
]);

export default routes;
