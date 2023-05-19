import React from 'react';

// styles
import './App.css';

// react-router
import { RouterProvider } from 'react-router-dom';
import routes from 'routes';

function App() {
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
