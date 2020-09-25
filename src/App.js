import BasicTable from './Table';
import React from 'react';
import './App.css';
import { ThemeProvider } from '@material-ui/core';
import Theme from './Theme';

function App() {
  return (
    <div className="app">
      <ThemeProvider theme={Theme}>
        <BasicTable />
      </ThemeProvider>
    </div>
  );
}

export default App;
