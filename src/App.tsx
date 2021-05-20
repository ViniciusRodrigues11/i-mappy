import React from 'react';

import Routes from './routes/index'
import { AppProvider } from './hooks';

import './styles/global.css'
import 'leaflet/dist/leaflet.css'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </AppProvider>

  );
}

export default App;
