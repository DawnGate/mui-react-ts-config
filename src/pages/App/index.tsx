import React from 'react';

// mui
import Button from '@mui/material/Button';

import logo from 'assets/logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Edit and save to reload.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button variant="contained" color="primary">
          Hello
        </Button>
      </header>
    </div>
  );
}

export default App;
