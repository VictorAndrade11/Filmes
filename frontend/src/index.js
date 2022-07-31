import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { FilmThemeProvider } from './theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FilmThemeProvider>
      <App />
    </FilmThemeProvider>
  </React.StrictMode>
);
