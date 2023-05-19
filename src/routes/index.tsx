// other components
import { ErrorPage, HomePage } from 'pages';

// routing
import { createBrowserRouter } from 'react-router-dom';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
]);

export default routes;
