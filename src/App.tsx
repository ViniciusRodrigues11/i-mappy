import React from 'react';

import Routes from './routes/index'
import { AppProvider } from './hooks';

import './styles/global.css'
import 'leaflet/dist/leaflet.css'

function App() {
  return (
    <AppProvider>
      <Routes />
    </AppProvider>

  );
}

export default App;
